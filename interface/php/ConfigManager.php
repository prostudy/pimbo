<?php
/**
 * ConfigManager - Gestiona la configuración dinámica de artefactos y dominios
 * Elimina el hardcoding y permite agregar nuevos skills/agentes fácilmente
 */
class ConfigManager {
    private static $config = null;
    private static $configPath = null;
    
    public static function init($configPath = null) {
        if ($configPath === null) {
            self::$configPath = __DIR__ . '/../../config/artifacts.json';
        } else {
            self::$configPath = $configPath;
        }
        self::loadConfig();
    }
    
    private static function loadConfig() {
        if (!file_exists(self::$configPath)) {
            throw new Exception("Configuration file not found: " . self::$configPath);
        }
        
        $configContent = file_get_contents(self::$configPath);
        self::$config = json_decode($configContent, true);
        
        if (self::$config === null) {
            throw new Exception("Invalid JSON in configuration file");
        }
        
        self::validateConfig();
    }
    
    private static function validateConfig() {
        $required = ['domains', 'artifacts', 'format_instructions'];
        foreach ($required as $section) {
            if (!isset(self::$config[$section])) {
                throw new Exception("Missing required configuration section: $section");
            }
        }
    }
    
    public static function getConfig() {
        if (self::$config === null) {
            self::init();
        }
        return self::$config;
    }
    
    // ==========================================
    // Artifact Management
    // ==========================================
    
    public static function getAllArtifacts() {
        return self::getConfig()['artifacts'];
    }
    
    public static function getArtifact($artifactId) {
        $artifacts = self::getAllArtifacts();
        return $artifacts[$artifactId] ?? null;
    }
    
    public static function getArtifactName($artifactId) {
        $artifact = self::getArtifact($artifactId);
        return $artifact ? $artifact['name'] : null;
    }
    
    public static function getArtifactFullName($artifactId) {
        $artifact = self::getArtifact($artifactId);
        return $artifact ? $artifact['full_name'] : null;
    }
    
    public static function getArtifactDomain($artifactId) {
        $artifact = self::getArtifact($artifactId);
        return $artifact ? $artifact['domain'] : null;
    }
    
    public static function getArtifactFormat($artifactId) {
        $artifact = self::getArtifact($artifactId);
        return $artifact ? $artifact['format'] : null;
    }
    
    public static function getArtifactsByDomain($domain) {
        $artifacts = self::getAllArtifacts();
        $result = [];
        
        foreach ($artifacts as $id => $artifact) {
            if ($artifact['domain'] === $domain) {
                $result[$id] = $artifact;
            }
        }
        
        return $result;
    }
    
    // ==========================================
    // Domain Management
    // ==========================================
    
    public static function getAllDomains() {
        return self::getConfig()['domains'];
    }
    
    public static function getDomain($domainId) {
        $domains = self::getAllDomains();
        return $domains[$domainId] ?? null;
    }
    
    public static function getDomainName($domainId) {
        $domain = self::getDomain($domainId);
        return $domain ? $domain['name'] : null;
    }
    
    public static function getSkillFile($domainId) {
        $domain = self::getDomain($domainId);
        return $domain ? $domain['skill_file'] : null;
    }
    
    public static function getAgentFile($domainId) {
        $domain = self::getDomain($domainId);
        return $domain ? $domain['agent_file'] : null;
    }
    
    // ==========================================
    // Format Instructions
    // ==========================================
    
    public static function getFormatInstructions($format) {
        $formats = self::getConfig()['format_instructions'];
        return $formats[$format] ?? null;
    }
    
    public static function getFormatInstructionText($format) {
        $formatInfo = self::getFormatInstructions($format);
        return $formatInfo ? $formatInfo['instructions'] : '';
    }
    
    // ==========================================
    // File Extension Management
    // ==========================================
    
    public static function getFileExtension($artifactId) {
        return self::getArtifactFormat($artifactId);
    }
    
    // ==========================================
    // Validation Methods
    // ==========================================
    
    public static function isValidArtifact($artifactId) {
        return self::getArtifact($artifactId) !== null;
    }
    
    public static function isValidDomain($domainId) {
        return self::getDomain($domainId) !== null;
    }
    
    public static function getUsedDomains($selectedArtifacts) {
        $domains = [];
        foreach ($selectedArtifacts as $artifactId) {
            $domain = self::getArtifactDomain($artifactId);
            if ($domain && !in_array($domain, $domains)) {
                $domains[] = $domain;
            }
        }
        return $domains;
    }
    
    // ==========================================
    // Export Methods for Frontend
    // ==========================================
    
    public static function getArtifactsForJS() {
        $artifacts = self::getAllArtifacts();
        $result = [];
        
        foreach ($artifacts as $id => $artifact) {
            $result[$id] = [
                'name' => $artifact['name'],
                'full_name' => $artifact['full_name'],
                'description' => $artifact['description'],
                'badges' => $artifact['badges'],
                'domain' => $artifact['domain'],
                'format' => $artifact['format']
            ];
        }
        
        return $result;
    }
    
    public static function getDomainsForJS() {
        $domains = self::getAllDomains();
        $result = [];
        
        foreach ($domains as $id => $domain) {
            $result[$id] = [
                'name' => $domain['name'],
                'description' => $domain['description'],
                'color' => $domain['color']
            ];
        }
        
        return $result;
    }
    
    // ==========================================
    // Utility Methods
    // ==========================================
    
    public static function refreshConfig() {
        self::$config = null;
        self::loadConfig();
    }
    
    public static function getMetadata() {
        return self::getConfig()['metadata'] ?? [];
    }
    
    public static function getVersion() {
        $metadata = self::getMetadata();
        return $metadata['version'] ?? 'unknown';
    }
}
?>