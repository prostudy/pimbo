// ============================================
// PimBo - Multi-Step Form with Data Persistence
// ============================================

// Estado de la aplicación
const appState = {
    currentStep: 1,
    totalSteps: 5,
    formData: {
        provider: 'claude',
        projectName: '',
        description: '',
        justification: '',
        phase: '',
        approach: '',
        artifacts: []
    }
};

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
document.addEventListener('DOMContentLoaded', function() {
    loadSavedData();
    initializeApp();
    updateStepDisplay();
    updateProgressBar();
});

// ============================================
// Inicialización
// ============================================

function initializeApp() {
    // Event listeners para provider selector
    document.querySelectorAll('.provider-card').forEach(card => {
        card.addEventListener('click', function() {
            const provider = this.getAttribute('data-provider');
            selectProvider(provider);
        });
    });

    // Event listeners para phase selector
    document.querySelectorAll('.phase-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const phase = this.getAttribute('data-phase');
            selectPhase(phase);
        });
    });

    // Event listeners para artifact cards
    document.querySelectorAll('.artifact-card').forEach(card => {
        card.addEventListener('click', function() {
            const checkbox = this.querySelector('input[type="checkbox"]');
            if (checkbox) {
                checkbox.checked = !checkbox.checked;
                toggleArtifact(checkbox.id);
            }
        });
    });

    // Prevenir que el click en checkbox propague al card
    document.querySelectorAll('.artifact-card input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleArtifact(this.id);
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
        case 4: // Provider selection
            return validateStep4();
        case 5: // Summary
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

function validateStep4() {
    if (!appState.formData.provider) {
        showAlert('Please select an AI provider');
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

    // Actualizar resumen si estamos en el paso 5
    if (appState.currentStep === 5) {
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
            if (appState.formData.provider) {
                selectProvider(appState.formData.provider);
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
// Provider Selection
// ============================================

function selectProvider(provider) {
    appState.formData.provider = provider;

    // Actualizar UI
    document.querySelectorAll('.provider-card').forEach(function(card) {
        card.classList.remove('selected');
        const radio = card.querySelector('input[type="radio"]');
        if (radio) {
            radio.checked = false;
        }
    });

    const selectedCard = document.querySelector('[data-provider="' + provider + '"]');
    if (selectedCard) {
        selectedCard.classList.add('selected');
        const radio = selectedCard.querySelector('input[type="radio"]');
        if (radio) {
            radio.checked = true;
        }
    }

    // Actualizar info box
    const infoBox = document.getElementById('providerInfo');
    if (infoBox) {
        if (provider === 'claude') {
            infoBox.className = 'info-box info';
            infoBox.innerHTML = '<strong>Claude AI:</strong> Files will be automatically generated in your directory. Content will not be displayed in chat.';
        } else {
            infoBox.className = 'info-box warning';
            infoBox.innerHTML = '<strong>Google Gemini:</strong> Artifacts will be displayed visually in chat for copying. A downloadable ZIP file will be generated at the end.';
        }
    }

    saveFormData();
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
    // Provider
    document.getElementById('summaryProvider').textContent =
        appState.formData.provider === 'claude' ? 'Claude AI' : 'Google Gemini';

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

    // Artifacts
    const artifactsList = document.getElementById('summaryArtifacts');
    artifactsList.innerHTML = '';

    const artifactNames = {
        acta: 'Acta de Constitución',
        wbs: 'WBS (EDT)',
        requisitos: 'Documento de Requisitos',
        cronograma: 'Cronograma (Gantt)',
        presupuesto: 'Presupuesto',
        interesados: 'Registro de Interesados',
        comunicaciones: 'Plan de Comunicaciones',
        raci: 'Matriz RACI',
        riesgos: 'Registro de Riesgos',
        backlog: 'Product Backlog',
        historias: 'Historias de Usuario'
    };

    appState.formData.artifacts.forEach(function(artifactId) {
        const li = document.createElement('li');
        li.textContent = artifactNames[artifactId] || artifactId;
        artifactsList.appendChild(li);
    });
}

// ============================================
// Generate Prompt
// ============================================

function generatePrompt() {
    // Actualizar resumen
    updateSummary();

    const artifacts = {
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

    const selectedArtifacts = appState.formData.artifacts.map(function(id) {
        return artifacts[id];
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

    let prompt = '';

    if (appState.formData.provider === 'claude') {
        prompt = generateClaudePrompt(
            appState.formData.projectName,
            appState.formData.description,
            appState.formData.justification,
            phaseLabels[appState.formData.phase],
            approachLabels[appState.formData.approach],
            selectedArtifacts
        );
    } else {
        prompt = generateGeminiPrompt(
            appState.formData.projectName,
            appState.formData.description,
            appState.formData.justification,
            phaseLabels[appState.formData.phase],
            approachLabels[appState.formData.approach],
            selectedArtifacts
        );
    }

    // Mostrar output
    document.getElementById('promptOutput').textContent = prompt;

    // Update instructions
    const instructions = document.getElementById('outputInstructions');
    if (appState.formData.provider === 'claude') {
        instructions.innerHTML = 'Copy the following text and paste it into <strong>Claude Code</strong> or <strong>Claude.ai</strong> to generate your artifacts:';
    } else {
        instructions.innerHTML = '<strong>Instructions:</strong><br>1. Copy the complete prompt<br>2. Paste it into Google Gemini<br>3. Artifacts will be displayed visually<br>4. Download the ZIP file at the end';
    }

    // Mostrar sección de output
    const outputSection = document.getElementById('outputSection');
    outputSection.classList.remove('hidden');

    // Scroll to output
    setTimeout(function() {
        outputSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

function generateClaudePrompt(projectName, description, justification, phase, approach, artifacts) {
    const projectCode = projectName.toUpperCase().replace(/\s+/g, '-');
    const artifactList = artifacts.map(function(artifact, index) {
        return (index + 1) + '. ' + artifact;
    }).join('\n');

    return 'Actúa como el agente coordinador del sistema PimBo especializado en PMBOK 8.\n\n' +
        'INFORMACIÓN DEL PROYECTO:\n' +
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
        'Nombre del Proyecto: ' + projectName + '\n\n' +
        'Descripción:\n' + description + '\n\n' +
        'Justificación / Caso de Negocio:\n' + justification + '\n\n' +
        'Fase del Ciclo de Vida: ' + phase + '\n' +
        'Enfoque del Proyecto: ' + approach + '\n\n' +
        'ARTEFACTOS A GENERAR:\n' +
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
        artifactList + '\n\n' +
        'INSTRUCCIONES:\n' +
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
        '1. Lee el contexto del proyecto proporcionado\n' +
        '2. Activa los subagentes apropiados según los artefactos solicitados\n' +
        '3. Genera cada artefacto siguiendo las plantillas en /references/\n' +
        '4. Guarda cada archivo con el formato: ' + projectCode + '-[artefacto]-v1.[ext]\n' +
        '5. Usa los formatos especificados en config-salidas.md:\n' +
        '   - CSV para registros, matrices y cronogramas\n' +
        '   - JSON para estructuras jerárquicas (WBS)\n' +
        '   - MD para documentos narrativos (Acta, Planes)\n\n' +
        'IMPORTANTE:\n' +
        '- NO muestres el contenido en el chat, solo genera los archivos\n' +
        '- Confirma cada archivo generado con: ✓ Archivo generado: [nombre]\n' +
        '- Adapta los artefactos al enfoque ' + approach + '\n\n' +
        'Genera los artefactos ahora.';
}

function generateGeminiPrompt(projectName, description, justification, phase, approach, artifacts) {
    const projectCode = projectName.toUpperCase().replace(/\s+/g, '-');
    const artifactList = artifacts.map(function(artifact, index) {
        return (index + 1) + '. ' + artifact;
    }).join('\n');

    return 'Eres PimBo, un agente experto en generar documentación de proyectos según PMBOK 8.\n\n' +
        '🎯 INFORMACIÓN DEL PROYECTO\n' +
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
        '📋 Proyecto: ' + projectName + '\n\n' +
        '📝 Descripción:\n' + description + '\n\n' +
        '💼 Justificación:\n' + justification + '\n\n' +
        '⚙️ Configuración:\n' +
        '• Fase: ' + phase + '\n' +
        '• Enfoque: ' + approach + '\n\n' +
        '📦 ARTEFACTOS A GENERAR\n' +
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
        artifactList + '\n\n' +
        '📋 INSTRUCCIONES PARA GEMINI\n' +
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
        'Para cada artefacto solicitado:\n\n' +
        '1. MOSTRAR VISUALMENTE: Genera el contenido completo del artefacto con formato claro\n\n' +
        '2. FORMATO DE PRESENTACIÓN:\n' +
        '   ╔═══════════════════════════════════════════════════════╗\n' +
        '   ║  📄 NOMBRE DEL ARTEFACTO                              ║\n' +
        '   ║  Archivo: ' + projectCode + '-[nombre]-v1.[extensión]     ║\n' +
        '   ╚═══════════════════════════════════════════════════════╝\n\n' +
        '   [CONTENIDO COMPLETO DEL ARTEFACTO AQUÍ]\n\n' +
        '   ─────────────────────────────────────────────────────────\n' +
        '   ✅ Listo para copiar y guardar\n\n' +
        '3. GUÍAS POR TIPO:\n' +
        '   📄 MARKDOWN (.md): Acta, Planes, Historias\n' +
        '   📊 CSV (.csv): Cronograma, Presupuesto, RACI, Riesgos, Backlog\n' +
        '   🌳 JSON (.json): WBS\n\n' +
        '4. AL FINALIZAR - ARCHIVO ZIP:\n' +
        '   ╔═══════════════════════════════════════════════════════╗\n' +
        '   ║  📦 DESCARGA TODOS LOS ARCHIVOS                       ║\n' +
        '   ╚═══════════════════════════════════════════════════════╝\n\n' +
        '   🔽 Genera un archivo ZIP con todos los artefactos y proporciona el link\n\n' +
        'IMPORTANTE:\n' +
        '- Genera TODOS los artefactos solicitados\n' +
        '- Contenido COMPLETO (no resúmenes)\n' +
        '- Formato visual claro\n' +
        '- ZIP al final\n\n' +
        '¡Comienza ahora! 🚀';
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
