<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Load configuration manager
require_once 'ConfigManager.php';

// Configuration
$CLAUDE_API_URL = 'https://api.anthropic.com/v1/messages';
$SKILLS_PATH = __DIR__ . '/../../skills/';
$SUBAGENTS_PATH = __DIR__ . '/../../subagents/';

// Initialize dynamic configuration
try {
    ConfigManager::init();
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Configuration error: ' . $e->getMessage()]);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON input']);
    exit;
}

$projectData = $input['projectData'] ?? [];
$selectedArtifacts = $input['selectedArtifacts'] ?? [];
$CLAUDE_API_KEY = $input['apiKey'] ?? '';

if (!$CLAUDE_API_KEY) {
    http_response_code(400);
    echo json_encode(['error' => 'Claude API key is required']);
    exit;
}

if (strpos($CLAUDE_API_KEY, 'sk-ant-api') !== 0) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid Claude API key format']);
    exit;
}

// Function to load skill knowledge (now uses ConfigManager)
function loadSkill($domainId) {
    global $SKILLS_PATH;
    
    $skillFile = ConfigManager::getSkillFile($domainId);
    if (!$skillFile) {
        throw new Exception("No skill file configured for domain: $domainId");
    }
    
    $fullPath = $SKILLS_PATH . $skillFile;
    if (!file_exists($fullPath)) {
        throw new Exception("Skill file not found: $fullPath");
    }
    
    return file_get_contents($fullPath);
}

// Function to load subagent implementation (now uses ConfigManager)
function loadSubagent($domainId) {
    global $SUBAGENTS_PATH;
    
    $agentFile = ConfigManager::getAgentFile($domainId);
    if (!$agentFile) {
        throw new Exception("No agent file configured for domain: $domainId");
    }
    
    $fullPath = $SUBAGENTS_PATH . $agentFile;
    if (!file_exists($fullPath)) {
        throw new Exception("Subagent file not found: $fullPath");
    }
    
    return file_get_contents($fullPath);
}

// Function to send message to Claude API
function sendToClaudeAPI($message, $apiKey) {
    global $CLAUDE_API_URL;
    
    $data = [
        'model' => 'claude-3-5-sonnet-20241022',
        'max_tokens' => 4000,
        'messages' => [
            [
                'role' => 'user',
                'content' => $message
            ]
        ]
    ];
    
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $CLAUDE_API_URL);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'x-api-key: ' . $apiKey,
        'anthropic-version: 2023-06-01'
    ]);
    
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    if ($httpCode !== 200) {
        throw new Exception("Claude API error: HTTP $httpCode - $response");
    }
    
    return json_decode($response, true);
}

// Function to log agent activity
function logAgentActivity($step, $message) {
    error_log("[PimBo Agent] Step $step: $message");
    return [
        'step' => $step,
        'message' => $message,
        'timestamp' => date('Y-m-d H:i:s')
    ];
}

// Function to get domain mapping for artifacts (now dynamic)
function getArtifactDomain($artifactId) {
    return ConfigManager::getArtifactDomain($artifactId);
}

// Function to create specialized prompt using existing skills and subagents
function createSpecializedPrompt($artifact, $projectData) {
    // Get the appropriate domain for this artifact
    $domain = getArtifactDomain($artifact);
    
    if (!$domain) {
        throw new Exception("Unknown artifact: $artifact");
    }
    
    // Load the skill knowledge and subagent implementation
    $skill = loadSkill($domain);
    $subagent = loadSubagent($domain);
    
    // Create project context
    $projectContext = "
=== INFORMACIÓN DEL PROYECTO ===
- Nombre: " . ($projectData['name'] ?? 'No especificado') . "
- Descripción: " . ($projectData['description'] ?? 'No especificado') . "
- Justificación: " . ($projectData['justification'] ?? 'No especificado') . "
- Fase: " . ($projectData['phase'] ?? 'No especificado') . "
- Enfoque: " . ($projectData['approach'] ?? 'No especificado') . "

";

    // Get specific artifact instructions
    $artifactInstructions = getArtifactInstructions($artifact);
    
    // Construct the specialized prompt
    $prompt = "Eres el SUBAGENTE ESPECIALIZADO en " . strtoupper($domain) . " del sistema PimBo PMBOK 8.

=== TU CONOCIMIENTO ESPECIALIZADO ===
$skill

=== TU PROCESO DE TRABAJO ===
$subagent

$projectContext

=== ARTEFACTO A GENERAR ===
Debes generar: " . getArtifactName($artifact) . "

$artifactInstructions

=== INSTRUCCIONES FINALES ===
- Usa TODA tu especialización en " . strtoupper($domain) . " para crear un artefacto profesional
- Basa tu trabajo en los procesos definidos en tu subagente
- Aplica los principios PMBOK 8 mencionados en tu skill
- Genera contenido específico para este proyecto (NO genérico)
- Mantén coherencia con la información del proyecto proporcionada

¡Genera el artefacto ahora usando toda tu especialización!";

    return $prompt;
}

// Function to get artifact instructions based on format (now dynamic)
function getArtifactInstructions($artifactId) {
    $format = ConfigManager::getArtifactFormat($artifactId);
    if (!$format) {
        return "No format instructions available for artifact: $artifactId";
    }
    
    return ConfigManager::getFormatInstructionText($format);
}

// Function to get artifact display names
function getArtifactName($artifact) {
    return ConfigManager::getArtifactFullName($artifact) ?? $artifact;
}

// Function to determine file extension based on artifact (now dynamic)
function getFileExtension($artifactId) {
    return ConfigManager::getFileExtension($artifactId) ?? 'md';
}

try {
    $logs = [];
    $results = [];
    
    // Step 1: Initialize main agent
    $logs[] = logAgentActivity(1, "🚀 Iniciando AGENTE COORDINADOR PimBo PMBOK 8");
    $logs[] = logAgentActivity(1, "📁 Cargando arquitectura de subagentes desde: $SKILLS_PATH");
    
    // Step 2: Validate input and plan
    $logs[] = logAgentActivity(2, "🔍 Validando proyecto y planificando invocación de subagentes");
    
    if (empty($selectedArtifacts)) {
        throw new Exception("No se han seleccionado artefactos para generar");
    }
    
    // Show domain mapping for educational purposes (now dynamic)
    $domainsUsed = ConfigManager::getUsedDomains($selectedArtifacts);
    
    $logs[] = logAgentActivity(2, "📊 Dominios PMBOK 8 activados: " . implode(', ', array_map('strtoupper', $domainsUsed)));
    $logs[] = logAgentActivity(2, "🎯 Total de subagentes a invocar: " . count($domainsUsed));
    
    // Step 3: Process each artifact with specialized subagents (now fully dynamic)
    
    foreach ($selectedArtifacts as $artifact) {
        $artifactName = getArtifactName($artifact);
        $domain = getArtifactDomain($artifact);
        
        $logs[] = logAgentActivity(3, "🤖 Activando subagente especializado: " . strtoupper($domain) . "-AGENT");
        $logs[] = logAgentActivity(3, "📋 Artefacto objetivo: $artifactName");
        
        try {
            // Load the specialized knowledge
            $logs[] = logAgentActivity(3, "📚 Cargando skill especializado: $domain.md");
            $logs[] = logAgentActivity(3, "⚙️ Cargando implementación: $domain-agent.md");
            
            // Create specialized prompt using existing architecture
            $prompt = createSpecializedPrompt($artifact, $projectData);
            
            $logs[] = logAgentActivity(3, "🔮 Invocando Claude API con prompt especializado...");
            
            $response = sendToClaudeAPI($prompt, $CLAUDE_API_KEY);
            
            if (isset($response['content'][0]['text'])) {
                $content = $response['content'][0]['text'];
                $extension = getFileExtension($artifact);
                
                $results[] = [
                    'artifact' => $artifact,
                    'name' => $artifactName,
                    'content' => $content,
                    'extension' => $extension,
                    'filename' => $artifact . '.' . $extension,
                    'domain' => $domain,
                    'subagent' => $domain . '-agent'
                ];
                
                $logs[] = logAgentActivity(3, "✅ " . strtoupper($domain) . "-AGENT completó: $artifactName");
            } else {
                $logs[] = logAgentActivity(3, "❌ Subagente " . strtoupper($domain) . " falló: Respuesta inválida de Claude API");
            }
        } catch (Exception $e) {
            $logs[] = logAgentActivity(3, "❌ Error en " . strtoupper($domain) . "-AGENT: " . $e->getMessage());
        }
    }
    
    // Step 4: Finalize
    $logs[] = logAgentActivity(4, "Proceso completado. Generados " . count($results) . " artefactos de " . count($selectedArtifacts) . " solicitados");
    
    echo json_encode([
        'success' => true,
        'logs' => $logs,
        'results' => $results,
        'summary' => [
            'total_requested' => count($selectedArtifacts),
            'total_generated' => count($results),
            'project_name' => $projectData['name'] ?? 'Proyecto sin nombre'
        ]
    ]);
    
} catch (Exception $e) {
    $logs[] = logAgentActivity('ERROR', $e->getMessage());
    
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage(),
        'logs' => $logs
    ]);
}
?>