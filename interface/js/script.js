// ============================================
// PimBo - Multi-Step Form with Data Persistence
// ============================================

// Estado de la aplicación
const appState = {
    currentStep: 1,
    totalSteps: 4,
    formData: {
        projectName: '',
        description: '',
        justification: '',
        phase: '',
        approach: '',
        artifacts: []
    },
    // Dynamic configuration loaded from API
    config: null
};

// ============================================
// Dynamic Configuration Management
// ============================================

async function loadConfiguration() {
    try {
        const response = await fetch('php/config-api.php?type=all');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        
        if (!result.success) {
            throw new Error(result.error || 'Failed to load configuration');
        }
        
        appState.config = result.data;
        return result.data;
    } catch (error) {
        console.error('Error loading configuration:', error);
        // Fallback to basic configuration
        return null;
    }
}

// Get artifact information dynamically
function getArtifactInfo(artifactId) {
    if (!appState.config) return null;
    return appState.config.artifacts[artifactId] || null;
}

// Get domain information dynamically  
function getDomainInfo(domainId) {
    if (!appState.config) return null;
    return appState.config.domains[domainId] || null;
}

// Get all artifacts dynamically
function getAllArtifacts() {
    if (!appState.config) return {};
    return appState.config.artifacts;
}

// Check if configuration is loaded
function isConfigurationLoaded() {
    return appState.config !== null;
}

// Generate artifacts grid dynamically
function generateArtifactsGrid() {
    if (!isConfigurationLoaded()) {
        console.warn('Cannot generate artifacts grid: configuration not loaded');
        return;
    }
    
    const artifactsGrid = document.querySelector('.artifacts-grid');
    if (!artifactsGrid) {
        console.warn('Artifacts grid container not found');
        return;
    }
    
    // Clear all existing content including loading message
    artifactsGrid.innerHTML = '';
    
    const artifacts = getAllArtifacts();
    const domains = appState.config.domains;
    
    // Sort artifacts by domain for better organization
    const sortedArtifacts = Object.keys(artifacts).sort((a, b) => {
        const domainA = artifacts[a].domain;
        const domainB = artifacts[b].domain;
        return domainA.localeCompare(domainB);
    });
    
    // Create cards for each artifact
    sortedArtifacts.forEach(artifactId => {
        const artifact = artifacts[artifactId];
        const domain = domains[artifact.domain];
        
        const card = document.createElement('div');
        card.className = 'artifact-card';
        card.setAttribute('data-domain', artifact.domain);
        card.setAttribute('data-format', artifact.format);
        
        card.innerHTML = `
            <input type="checkbox" id="${artifactId}">
            <div class="artifact-header">
                <h3>${artifact.name}</h3>
            </div>
            <p class="artifact-description">
                ${artifact.description}
            </p>
            <div class="artifact-badges">
                ${artifact.badges.map(badge => `<span class="artifact-badge">${badge}</span>`).join('')}
            </div>
        `;
        
        artifactsGrid.appendChild(card);
    });
    
    console.log(`✅ Generated ${Object.keys(artifacts).length} artifact cards dynamically from config`);
    
    // Setup event listeners for dynamic cards
    setupDynamicCardListeners();
    
    // Restore any previously selected artifacts
    restoreDynamicSelections();
}

// Setup event listeners for dynamically generated cards
function setupDynamicCardListeners() {
    // Event listeners para artifact cards (dynamic)
    document.querySelectorAll('.artifact-card').forEach(card => {
        card.addEventListener('click', function() {
            const checkbox = this.querySelector('input[type="checkbox"]');
            if (checkbox) {
                checkbox.checked = !checkbox.checked;
                toggleArtifact(checkbox.id);
            }
        });
    });

    // Prevenir que el click en checkbox propague al card (dynamic)
    document.querySelectorAll('.artifact-card input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleArtifact(this.id);
        });
    });
}

// Restore selections for dynamically generated cards
function restoreDynamicSelections() {
    if (appState.formData.artifacts) {
        appState.formData.artifacts.forEach(function(artifactId) {
            const checkbox = document.getElementById(artifactId);
            if (checkbox) {
                checkbox.checked = true;
                const card = checkbox.closest('.artifact-card');
                if (card) {
                    card.classList.add('selected');
                }
            }
        });
    }
}

// Templates predefinidos
const templates = {
    crm: {
        name: 'Sistema CRM para Departamento de Ventas',
        description: 'Sistema de gestión de relaciones con clientes (CRM) para mejorar el seguimiento de oportunidades de venta, gestionar contactos y generar reportes de desempeño comercial.',
        justification: 'Incrementar las ventas en un 15% mediante mejor gestión de clientes y oportunidades. Actualmente se pierden oportunidades por falta de seguimiento sistemático y los reportes se generan manualmente.'
    },
    erp: {
        name: 'Implementación de Sistema ERP',
        description: 'Implementación de sistema de planificación de recursos empresariales (ERP) para integrar procesos de finanzas, inventarios, compras y recursos humanos en una plataforma única.',
        justification: 'Reducir costos operativos en 20% mediante automatización de procesos y eliminar sistemas aislados que generan duplicación de información y errores de integración.'
    },
    mobile: {
        name: 'Aplicación Móvil de Servicios',
        description: 'Desarrollo de aplicación móvil nativa (iOS y Android) para que clientes puedan solicitar servicios, hacer seguimiento de pedidos y realizar pagos desde sus dispositivos móviles.',
        justification: 'Mejorar experiencia del cliente y capturar el 40% del mercado que prefiere canales digitales. Competidores ya ofrecen apps móviles y estamos perdiendo cuota de mercado.'
    },
    infrastructure: {
        name: 'Migración a Infraestructura Cloud',
        description: 'Migración de servidores on-premise a infraestructura cloud (AWS/Azure) incluyendo base de datos, aplicaciones web y sistemas de respaldo.',
        justification: 'Reducir costos de infraestructura en 30%, mejorar disponibilidad a 99.9% y habilitar escalabilidad automática para picos de demanda.'
    }
};

// Cargar datos guardados al inicio
document.addEventListener('DOMContentLoaded', async function() {
    // Load dynamic configuration first
    console.log('Loading PimBo configuration...');
    await loadConfiguration();
    
    if (isConfigurationLoaded()) {
        console.log('Configuration loaded successfully:', appState.config.metadata);
        // Generate artifacts grid dynamically
        generateArtifactsGrid();
    } else {
        console.warn('Failed to load dynamic configuration, using fallback');
    }
    
    loadSavedData();
    initializeApp();
    updateStepDisplay();
    updateProgressBar();
});

// ============================================
// Inicialización
// ============================================

function initializeApp() {
    // Event listeners para phase selector
    document.querySelectorAll('.phase-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const phase = this.getAttribute('data-phase');
            selectPhase(phase);
        });
    });

    // Event listeners para templates
    document.querySelectorAll('.template-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const templateName = this.getAttribute('data-template');
            loadTemplate(templateName);
        });
    });

    // Event listeners para navigation buttons
    document.getElementById('prevBtn').addEventListener('click', previousStep);
    document.getElementById('nextBtn').addEventListener('click', nextStep);

    // Guardar datos automáticamente cuando cambien los inputs
    document.querySelectorAll('input, textarea, select').forEach(input => {
        input.addEventListener('change', saveFormData);
        input.addEventListener('blur', saveFormData);
    });
    
    // Note: Artifact card listeners are now setup dynamically in generateArtifactsGrid()
}

// ============================================
// Gestión de Pasos
// ============================================

function updateStepDisplay() {
    // Ocultar todos los steps
    document.querySelectorAll('.step-section').forEach(section => {
        section.classList.remove('active');
    });

    // Mostrar el step actual
    const currentSection = document.getElementById('step-' + appState.currentStep);
    if (currentSection) {
        currentSection.classList.add('active');
    }

    // Actualizar botones de navegación
    updateNavigationButtons();

    // Actualizar progress indicators
    updateProgressBar();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateProgressBar() {
    // Actualizar círculos de progreso
    document.querySelectorAll('.progress-step').forEach(function(step, index) {
        const stepNumber = index + 1;
        step.classList.remove('active', 'completed');

        if (stepNumber < appState.currentStep) {
            step.classList.add('completed');
            step.querySelector('.progress-step-circle').innerHTML = '✓';
        } else if (stepNumber === appState.currentStep) {
            step.classList.add('active');
            step.querySelector('.progress-step-circle').innerHTML = stepNumber;
        } else {
            step.querySelector('.progress-step-circle').innerHTML = stepNumber;
        }
    });

    // Actualizar línea de progreso
    const progressPercentage = ((appState.currentStep - 1) / (appState.totalSteps - 1)) * 100;
    document.querySelector('.progress-line-fill').style.width = progressPercentage + '%';
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Botón anterior
    if (appState.currentStep === 1) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'flex';
    }

    // Botón siguiente
    if (appState.currentStep === appState.totalSteps) {
        nextBtn.innerHTML = '<span>Generate</span> <span>→</span>';
    } else {
        nextBtn.innerHTML = '<span>Next</span> <span>→</span>';
    }
}

function nextStep() {
    // Validar el step actual antes de avanzar
    if (!validateCurrentStep()) {
        return;
    }

    // Guardar datos
    saveFormData();

    if (appState.currentStep < appState.totalSteps) {
        appState.currentStep++;
        updateStepDisplay();
    } else {
        // Último step: generar prompt
        generatePrompt();
    }
}

function previousStep() {
    if (appState.currentStep > 1) {
        appState.currentStep--;
        updateStepDisplay();
    }
}

// ============================================
// Validación de Steps
// ============================================

function validateCurrentStep() {
    switch (appState.currentStep) {
        case 1: // Project info
            return validateStep1();
        case 2: // Configuration
            return validateStep2();
        case 3: // Artifacts
            return validateStep3();
        case 4: // Summary
            return true; // No validation needed
        default:
            return true;
    }
}

function validateStep1() {
    const projectName = document.getElementById('projectName').value.trim();
    const description = document.getElementById('projectDescription').value.trim();
    const justification = document.getElementById('projectJustification').value.trim();

    if (!projectName) {
        showAlert('Please enter the project name');
        return false;
    }
    if (!description) {
        showAlert('Please provide a project description');
        return false;
    }
    if (!justification) {
        showAlert('Please enter the project justification');
        return false;
    }
    return true;
}

function validateStep2() {
    if (!appState.formData.phase) {
        showAlert('Please select the project phase');
        return false;
    }

    const approach = document.getElementById('approach').value;
    if (!approach) {
        showAlert('Please select the project approach');
        return false;
    }
    return true;
}

function validateStep3() {
    const selectedArtifacts = [];
    document.querySelectorAll('.artifact-card input[type="checkbox"]:checked').forEach(function(checkbox) {
        selectedArtifacts.push(checkbox.id);
    });

    if (selectedArtifacts.length === 0) {
        showAlert('Please select at least one artifact');
        return false;
    }
    return true;
}

function showAlert(message) {
    alert(message);
}

// ============================================
// Gestión de Datos del Formulario
// ============================================

function saveFormData() {
    // Guardar datos del formulario
    appState.formData.projectName = document.getElementById('projectName').value.trim();
    appState.formData.description = document.getElementById('projectDescription').value.trim();
    appState.formData.justification = document.getElementById('projectJustification').value.trim();
    appState.formData.approach = document.getElementById('approach').value;

    // Guardar artefactos seleccionados
    const selectedArtifacts = [];
    document.querySelectorAll('.artifact-card input[type="checkbox"]:checked').forEach(function(checkbox) {
        selectedArtifacts.push(checkbox.id);
    });
    appState.formData.artifacts = selectedArtifacts;

    // Guardar en localStorage
    localStorage.setItem('pimbo_formData', JSON.stringify(appState.formData));
    localStorage.setItem('pimbo_currentStep', appState.currentStep.toString());

    // Actualizar resumen si estamos en el paso 4
    if (appState.currentStep === 4) {
        updateSummary();
    }
}

function loadSavedData() {
    // Cargar datos guardados
    const savedFormData = localStorage.getItem('pimbo_formData');
    const savedStep = localStorage.getItem('pimbo_currentStep');

    if (savedFormData) {
        try {
            appState.formData = JSON.parse(savedFormData);

            // Restaurar valores en el formulario
            if (appState.formData.projectName) {
                document.getElementById('projectName').value = appState.formData.projectName;
            }
            if (appState.formData.description) {
                document.getElementById('projectDescription').value = appState.formData.description;
            }
            if (appState.formData.justification) {
                document.getElementById('projectJustification').value = appState.formData.justification;
            }
            if (appState.formData.approach) {
                document.getElementById('approach').value = appState.formData.approach;
            }
            if (appState.formData.phase) {
                selectPhase(appState.formData.phase);
            }
            if (appState.formData.artifacts) {
                appState.formData.artifacts.forEach(function(artifactId) {
                    const checkbox = document.getElementById(artifactId);
                    if (checkbox) {
                        checkbox.checked = true;
                        const card = checkbox.closest('.artifact-card');
                        if (card) {
                            card.classList.add('selected');
                        }
                    }
                });
            }
        } catch (e) {
            console.error('Error loading saved data:', e);
        }
    }

    if (savedStep) {
        appState.currentStep = parseInt(savedStep);
    }
}

// ============================================
// Phase Selection
// ============================================

function selectPhase(phase) {
    appState.formData.phase = phase;

    // Actualizar UI
    document.querySelectorAll('.phase-btn').forEach(function(btn) {
        btn.classList.remove('active');
    });

    const selectedBtn = document.querySelector('[data-phase="' + phase + '"]');
    if (selectedBtn) {
        selectedBtn.classList.add('active');
    }

    saveFormData();
}

// ============================================
// Artifact Selection
// ============================================

function toggleArtifact(artifactId) {
    const checkbox = document.getElementById(artifactId);
    const card = checkbox.closest('.artifact-card');

    if (checkbox.checked) {
        card.classList.add('selected');
    } else {
        card.classList.remove('selected');
    }

    saveFormData();
}

// ============================================
// Templates
// ============================================

function loadTemplate(templateName) {
    const template = templates[templateName];
    if (template) {
        document.getElementById('projectName').value = template.name;
        document.getElementById('projectDescription').value = template.description;
        document.getElementById('projectJustification').value = template.justification;
        saveFormData();
    }
}

// ============================================
// Summary Update
// ============================================

function updateSummary() {
    // Project name
    document.getElementById('summaryProjectName').textContent =
        appState.formData.projectName || '-';

    // Phase
    const phaseLabels = {
        inicio: 'Inicio',
        planificacion: 'Planificación',
        ejecucion: 'Ejecución',
        monitoreo: 'Monitoreo y Control',
        cierre: 'Cierre'
    };
    document.getElementById('summaryPhase').textContent =
        phaseLabels[appState.formData.phase] || '-';

    // Approach
    const approachLabels = {
        predictivo: 'Predictivo (Cascada)',
        agil: 'Ágil',
        hibrido: 'Híbrido',
        iterativo: 'Iterativo/Incremental'
    };
    document.getElementById('summaryApproach').textContent =
        approachLabels[appState.formData.approach] || '-';

    // Artifacts (now dynamic)
    const artifactsList = document.getElementById('summaryArtifacts');
    artifactsList.innerHTML = '';

    appState.formData.artifacts.forEach(function(artifactId) {
        const li = document.createElement('li');
        
        // Use dynamic configuration if available
        if (isConfigurationLoaded()) {
            const artifactInfo = getArtifactInfo(artifactId);
            li.textContent = artifactInfo ? artifactInfo.name : artifactId;
        } else {
            // Fallback to artifact ID
            li.textContent = artifactId;
        }
        
        artifactsList.appendChild(li);
    });
}

// ============================================
// Generate Prompt
// ============================================

function generatePrompt() {
    // Actualizar resumen
    updateSummary();

    // Mostrar modal de selección de modo
    const generationMode = document.getElementById('generationMode');
    generationMode.classList.remove('hidden');

    // Scroll to mode selection
    setTimeout(function() {
        generationMode.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

function generatePromptText(projectName, description, justification, phase, approach, artifacts) {
    const projectCode = projectName.toUpperCase().replace(/\s+/g, '-');
    const artifactList = artifacts.map(function(artifact, index) {
        return '- ' + artifact;
    }).join('\n');

    return 'Eres el AGENTE COORDINADOR del sistema PimBo, especializado en PMBOK 8 del PMI.\n\n' +
        '## TU ROL\n' +
        'Orquestas subagentes especializados por dominio para generar artefactos profesionales de gestión de proyectos.\n\n' +
        '## SUBAGENTES DISPONIBLES\n' +
        '| Subagente | Artefactos | Formato |\n' +
        '|-----------|------------|--------|\n' +
        '| gobernanza-agent | Acta de Constitución, Registro Decisiones | .md |\n' +
        '| alcance-agent | WBS, Diccionario WBS, Requisitos | .json, .csv |\n' +
        '| cronograma-agent | Cronograma Gantt, Hitos, Actividades | .csv |\n' +
        '| finanzas-agent | Presupuesto, Flujo de Caja | .csv |\n' +
        '| interesados-agent | Registro Interesados, Plan Comunicaciones | .csv, .md |\n' +
        '| recursos-agent | Matriz RACI, Organigrama | .csv, .json |\n' +
        '| riesgo-agent | Registro Riesgos, Matriz Prob/Impacto | .csv |\n' +
        '| agile-agent | Product Backlog, Historias Usuario, DoD | .csv, .json, .md |\n\n' +
        '## PROYECTO A DOCUMENTAR\n' +
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n' +
        '**Nombre:** ' + projectName + '\n' +
        '**Código:** ' + projectCode + '\n\n' +
        '**Descripción:**\n' + description + '\n\n' +
        '**Justificación/Caso de Negocio:**\n' + justification + '\n\n' +
        '**Fase:** ' + phase + '\n' +
        '**Enfoque:** ' + approach + '\n\n' +
        '## ARTEFACTOS SOLICITADOS\n' +
        artifactList + '\n\n' +
        '## PROCESO DE GENERACIÓN\n' +
        '1. Analiza el contexto del proyecto y su enfoque (' + approach + ')\n' +
        '2. Para cada artefacto, activa el subagente especializado correspondiente\n' +
        '3. Genera contenido PROFESIONAL y COMPLETO (no placeholders ni ejemplos genéricos)\n' +
        '4. Usa datos coherentes entre artefactos (mismos nombres, fechas, montos)\n' +
        '5. Adapta el nivel de detalle según la fase (' + phase + ')\n\n' +
        '## REGLAS DE SALIDA\n' +
        '- **CREA** archivos directamente, sin explicaciones previas\n' +
        '- **NOMBRA:** ' + projectCode + '-[artefacto]-v1.[ext]\n' +
        '- **FORMATOS:** CSV (tablas/registros), JSON (jerarquías), MD (narrativos)\n' +
        '- **NO MUESTRES** contenido en el chat\n' +
        '- **CONFIRMA:** ✓ Archivo generado: [nombre]\n\n' +
        '## CRITERIOS DE CALIDAD\n' +
        '- Contenido específico al proyecto (no genérico)\n' +
        '- Datos realistas y coherentes entre documentos\n' +
        '- Formato profesional listo para presentar\n' +
        '- Alineado con principios PMBOK 8: valor, calidad, sostenibilidad\n\n' +
        'Genera los artefactos ahora.';
}

// ============================================
// Copy to Clipboard
// ============================================

function copyPrompt(event) {
    const promptOutput = document.getElementById('promptOutput');
    const promptText = promptOutput.textContent;

    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(promptText).then(function() {
            showCopySuccess(event.target);
        }).catch(function(err) {
            copyToClipboardFallback(promptOutput, event.target);
        });
    } else {
        copyToClipboardFallback(promptOutput, event.target);
    }
}

function copyToClipboardFallback(element, btn) {
    try {
        const textarea = document.createElement('textarea');
        textarea.value = element.textContent;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);

        textarea.select();
        textarea.setSelectionRange(0, 99999);

        const successful = document.execCommand('copy');
        document.body.removeChild(textarea);

        if (successful) {
            showCopySuccess(btn);
        } else {
            showAlert('Copy failed. Please select and copy manually.');
        }
    } catch (err) {
        showAlert('Copy failed. Please select and copy manually.');
    }
}

function showCopySuccess(btn) {
    const originalText = btn.innerHTML;
    btn.innerHTML = 'Copied to Clipboard';
    btn.classList.add('copied');

    setTimeout(function() {
        btn.innerHTML = originalText;
        btn.classList.remove('copied');
    }, 2000);
}

// ============================================
// Web Interface Mode Functions
// ============================================

function selectMode(mode) {
    const generationMode = document.getElementById('generationMode');
    const promptOutputSection = document.getElementById('promptOutputSection');
    const webInterfaceSection = document.getElementById('webInterfaceSection');
    
    generationMode.classList.add('hidden');
    
    if (mode === 'prompt') {
        showPromptMode();
    } else if (mode === 'web') {
        showWebInterface();
    }
}

function showPromptMode() {
    // Build artifacts list dynamically
    const selectedArtifacts = appState.formData.artifacts.map(function(id) {
        if (isConfigurationLoaded()) {
            const artifactInfo = getArtifactInfo(id);
            return artifactInfo ? artifactInfo.full_name : id;
        } else {
            // Fallback artifacts mapping
            const fallbackArtifacts = {
                acta: 'Acta de Constitución del Proyecto',
                wbs: 'WBS (Estructura de Desglose del Trabajo) en formato JSON',
                requisitos: 'Documento de Requisitos',
                cronograma: 'Cronograma del Proyecto (Gantt) en formato CSV',
                presupuesto: 'Presupuesto del Proyecto en formato CSV',
                interesados: 'Registro de Interesados en formato CSV',
                comunicaciones: 'Plan de Comunicaciones',
                raci: 'Matriz RACI en formato CSV',
                riesgos: 'Registro de Riesgos en formato CSV',
                backlog: 'Product Backlog en formato CSV',
                historias: 'Historias de Usuario'
            };
            return fallbackArtifacts[id] || id;
        }
    });

    const phaseLabels = {
        inicio: 'Inicio',
        planificacion: 'Planificación',
        ejecucion: 'Ejecución',
        monitoreo: 'Monitoreo y Control',
        cierre: 'Cierre'
    };

    const approachLabels = {
        predictivo: 'Predictivo (Cascada)',
        agil: 'Ágil',
        hibrido: 'Híbrido',
        iterativo: 'Iterativo/Incremental'
    };

    const prompt = generatePromptText(
        appState.formData.projectName,
        appState.formData.description,
        appState.formData.justification,
        phaseLabels[appState.formData.phase],
        approachLabels[appState.formData.approach],
        selectedArtifacts
    );

    // Mostrar output
    document.getElementById('promptOutput').textContent = prompt;

    // Update instructions
    const instructions = document.getElementById('outputInstructions');
    instructions.innerHTML = 'Copy the following text and paste it into your AI assistant (Claude, Gemini, ChatGPT, etc.):';

    // Mostrar sección de output
    const promptOutputSection = document.getElementById('promptOutputSection');
    promptOutputSection.classList.remove('hidden');

    // Scroll to output
    setTimeout(function() {
        promptOutputSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

function showWebInterface() {
    const webInterfaceSection = document.getElementById('webInterfaceSection');
    webInterfaceSection.classList.remove('hidden');
    
    // Scroll to web interface
    setTimeout(function() {
        webInterfaceSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

function goBackToModeSelection() {
    // Hide all sections
    document.getElementById('promptOutputSection').classList.add('hidden');
    document.getElementById('webInterfaceSection').classList.add('hidden');
    document.getElementById('generationProgress').classList.add('hidden');
    document.getElementById('resultsViewer').classList.add('hidden');
    
    // Show mode selection
    const generationMode = document.getElementById('generationMode');
    generationMode.classList.remove('hidden');
    
    setTimeout(function() {
        generationMode.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

function startWebGeneration() {
    const apiKey = document.getElementById('claudeApiKey').value.trim();
    
    if (!apiKey) {
        showAlert('Please enter your Claude API key');
        return;
    }
    
    if (!apiKey.startsWith('sk-ant-api')) {
        showAlert('Please enter a valid Claude API key (starts with sk-ant-api)');
        return;
    }
    
    // Hide API config and show progress
    document.querySelector('.api-config').style.display = 'none';
    document.getElementById('generationProgress').classList.remove('hidden');
    
    // Start generation
    generateWithWebInterface(apiKey);
}

async function generateWithWebInterface(apiKey) {
    const progressLog = document.getElementById('progressLog');
    
    function addLogEntry(step, message, type = 'info') {
        const logEntry = document.createElement('div');
        logEntry.className = `log-entry log-${type}`;
        logEntry.innerHTML = `
            <span class="log-step">Step ${step}</span>
            <span class="log-message">${message}</span>
            <span class="log-time">${new Date().toLocaleTimeString()}</span>
        `;
        progressLog.appendChild(logEntry);
        progressLog.scrollTop = progressLog.scrollHeight;
    }
    
    try {
        addLogEntry(1, 'Iniciando agente PimBo...', 'info');
        
        const projectData = {
            name: appState.formData.projectName,
            description: appState.formData.description,
            justification: appState.formData.justification,
            phase: appState.formData.phase,
            approach: appState.formData.approach
        };
        
        const requestData = {
            projectData: projectData,
            selectedArtifacts: appState.formData.artifacts,
            apiKey: apiKey
        };
        
        addLogEntry(2, 'Enviando datos al agente PHP...', 'info');
        
        const response = await fetch('php/agent.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData)
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        
        if (!result.success) {
            throw new Error(result.error || 'Unknown error occurred');
        }
        
        // Display logs from PHP agent
        if (result.logs) {
            result.logs.forEach(log => {
                addLogEntry(log.step, log.message, log.step === 'ERROR' ? 'error' : 'success');
            });
        }
        
        addLogEntry('✓', 'Proceso completado exitosamente', 'success');
        
        // Show results
        displayResults(result.results, result.summary);
        
    } catch (error) {
        addLogEntry('✗', 'Error: ' + error.message, 'error');
        console.error('Generation error:', error);
    }
}

function displayResults(results, summary) {
    const resultsViewer = document.getElementById('resultsViewer');
    const resultsTabs = document.getElementById('resultsTabs');
    const resultsContent = document.getElementById('resultsContent');
    
    // Clear previous content
    resultsTabs.innerHTML = '';
    resultsContent.innerHTML = '';
    
    // Create tabs for each result
    results.forEach((result, index) => {
        const tab = document.createElement('button');
        tab.className = 'result-tab' + (index === 0 ? ' active' : '');
        tab.innerHTML = `
            <span class="tab-name">${result.name}</span>
            <span class="tab-format">.${result.extension}</span>
        `;
        tab.onclick = () => showResultContent(result, index);
        resultsTabs.appendChild(tab);
    });
    
    // Show first result by default
    if (results.length > 0) {
        showResultContent(results[0], 0);
    }
    
    // Show results viewer
    resultsViewer.classList.remove('hidden');
    
    setTimeout(function() {
        resultsViewer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

function showResultContent(result, index) {
    // Update active tab
    document.querySelectorAll('.result-tab').forEach((tab, i) => {
        tab.classList.toggle('active', i === index);
    });
    
    const resultsContent = document.getElementById('resultsContent');
    
    let contentHtml = '';
    
    switch (result.extension) {
        case 'md':
            contentHtml = `
                <div class="result-header">
                    <h5>${result.name}</h5>
                    <button class="btn-download" onclick="downloadResult('${result.filename}', \`${result.content.replace(/`/g, '\\`')}\`)">Download</button>
                </div>
                <div class="result-markdown">${markdownToHtml(result.content)}</div>
            `;
            break;
            
        case 'json':
            try {
                const jsonData = JSON.parse(result.content);
                contentHtml = `
                    <div class="result-header">
                        <h5>${result.name}</h5>
                        <button class="btn-download" onclick="downloadResult('${result.filename}', \`${result.content.replace(/`/g, '\\`')}\`)">Download</button>
                    </div>
                    <div class="result-json">${renderWBSTree(jsonData)}</div>
                `;
            } catch (e) {
                contentHtml = `
                    <div class="result-header">
                        <h5>${result.name}</h5>
                        <button class="btn-download" onclick="downloadResult('${result.filename}', \`${result.content.replace(/`/g, '\\`')}\`)">Download</button>
                    </div>
                    <div class="result-raw">${result.content}</div>
                `;
            }
            break;
            
        case 'csv':
            contentHtml = `
                <div class="result-header">
                    <h5>${result.name}</h5>
                    <button class="btn-download" onclick="downloadResult('${result.filename}', \`${result.content.replace(/`/g, '\\`')}\`)">Download</button>
                </div>
                <div class="result-csv">${csvToTable(result.content)}</div>
            `;
            break;
            
        default:
            contentHtml = `
                <div class="result-header">
                    <h5>${result.name}</h5>
                    <button class="btn-download" onclick="downloadResult('${result.filename}', \`${result.content.replace(/`/g, '\\`')}\`)">Download</button>
                </div>
                <div class="result-raw">${result.content}</div>
            `;
    }
    
    resultsContent.innerHTML = contentHtml;
}

function downloadResult(filename, content) {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}

// ============================================
// Visualization Helper Functions
// ============================================

function markdownToHtml(markdown) {
    // Simple markdown to HTML conversion
    return markdown
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^# (.*$)/gim, '<h1>$1</h1>')
        .replace(/^\- (.*$)/gim, '<li>$1</li>')
        .replace(/(\n<li>.*<\/li>\n)/gs, '<ul>$1</ul>')
        .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
        .replace(/\*(.*)\*/gim, '<em>$1</em>')
        .replace(/\n/gim, '<br>');
}

function csvToTable(csv) {
    const lines = csv.trim().split('\n');
    if (lines.length === 0) return '<p>No data</p>';
    
    let html = '<table class="csv-table">';
    
    // Header
    const headers = lines[0].split(',').map(h => h.replace(/"/g, '').trim());
    html += '<thead><tr>';
    headers.forEach(header => {
        html += `<th>${header}</th>`;
    });
    html += '</tr></thead>';
    
    // Rows
    html += '<tbody>';
    for (let i = 1; i < lines.length; i++) {
        const cells = lines[i].split(',').map(c => c.replace(/"/g, '').trim());
        html += '<tr>';
        cells.forEach(cell => {
            html += `<td>${cell}</td>`;
        });
        html += '</tr>';
    }
    html += '</tbody>';
    
    html += '</table>';
    return html;
}

function renderWBSTree(jsonData) {
    if (!jsonData.wbs) return '<p>Invalid WBS data</p>';
    
    function renderNode(node, level = 0) {
        let html = `<div class="wbs-node wbs-level-${level}">`;
        html += `<div class="wbs-item">${node.name}</div>`;
        
        if (node.children) {
            html += '<div class="wbs-children">';
            Object.keys(node.children).forEach(key => {
                html += renderNode(node.children[key], level + 1);
            });
            html += '</div>';
        }
        
        html += '</div>';
        return html;
    }
    
    let html = `<div class="wbs-container">`;
    html += `<h4>${jsonData.project_name || 'Project WBS'}</h4>`;
    
    Object.keys(jsonData.wbs).forEach(key => {
        html += renderNode(jsonData.wbs[key], 0);
    });
    
    html += '</div>';
    return html;
}
