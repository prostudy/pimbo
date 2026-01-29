<?php
/**
 * Configuration API Endpoint
 * Serves dynamic configuration to JavaScript frontend
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Load configuration manager
require_once 'ConfigManager.php';

try {
    ConfigManager::init();
    
    $type = $_GET['type'] ?? 'all';
    
    switch ($type) {
        case 'artifacts':
            $response = [
                'success' => true,
                'data' => ConfigManager::getArtifactsForJS()
            ];
            break;
            
        case 'domains':
            $response = [
                'success' => true,
                'data' => ConfigManager::getDomainsForJS()
            ];
            break;
            
        case 'all':
        default:
            $response = [
                'success' => true,
                'data' => [
                    'artifacts' => ConfigManager::getArtifactsForJS(),
                    'domains' => ConfigManager::getDomainsForJS(),
                    'metadata' => ConfigManager::getMetadata()
                ]
            ];
            break;
    }
    
    echo json_encode($response);
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ]);
}
?>