
let selectedPhase = '';
let selectedProvider = 'claude';

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

function selectProvider(provider) {
    selectedProvider = provider;

    // Update UI
    document.querySelectorAll('.provider-option').forEach(option => {
        option.classList.remove('selected');
        // Find the one that contains the selected provider's radio button
        const radio = option.querySelector('input[type="radio"]');
        if (radio && radio.value === provider) {
            option.classList.add('selected');
        }
    });

    // Update radio
    document.querySelector(`input[value="${provider}"]`).checked = true;

    // Update info box
    const infoBox = document.getElementById('providerInfo');
    if (provider === 'claude') {
        infoBox.className = 'info-box';
        infoBox.innerHTML = '<strong>Usando Claude AI:</strong> Los archivos se generarán automáticamente en tu directorio. No se mostrarán en el chat.';
    } else {
        infoBox.className = 'info-box warning';
        infoBox.innerHTML = '<strong>Usando Google Gemini:</strong> Los artefactos se mostrarán visualmente en el chat para que puedas copiarlos. Al final se generará un archivo ZIP descargable con todos los documentos.';
    }

    // Update button text
    const btnText = document.getElementById('btnText');
    if (provider === 'claude') {
        btnText.textContent = '✨ Generar Prompt para Claude';
    } else {
        btnText.textContent = '✨ Generar Prompt para Gemini';
    }
}

function loadTemplate(templateName) {
    const template = templates[templateName];
    if (template) {
        document.getElementById('projectName').value = template.name;
        document.getElementById('projectDescription').value = template.description;
        document.getElementById('projectJustification').value = template.justification;
    }
}

function selectPhase(phase) {
    selectedPhase = phase;
    document.querySelectorAll('.phase-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-phase="${phase}"]`).classList.add('active');
}

function toggleArtifact(artifactId) {
    const checkbox = document.getElementById(artifactId);
    checkbox.checked = !checkbox.checked;
    updateCardStyle(artifactId);
}

function updateCardStyle(artifactId) {
    const checkbox = document.getElementById(artifactId);
    const card = checkbox.closest('.artifact-card');
    if (checkbox.checked) {
        card.classList.add('selected');
    } else {
        card.classList.remove('selected');
    }
}

// Event listeners para checkboxes
document.querySelectorAll('.artifact-card input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        updateCardStyle(this.id);
    });
});

// Event listeners para provider selector
document.querySelectorAll('.provider-option').forEach(option => {
    option.addEventListener('click', function() {
        const provider = this.getAttribute('data-provider');
        selectProvider(provider);
    });
});

function generatePrompt() {
    // Validaciones
    const projectName = document.getElementById('projectName').value.trim();
    const description = document.getElementById('projectDescription').value.trim();
    const justification = document.getElementById('projectJustification').value.trim();
    const approach = document.getElementById('approach').value;

    if (!projectName || !description || !justification) {
        alert('Por favor completa la información básica del proyecto (Nombre, Descripción y Justificación)');
        return;
    }

    if (!selectedPhase) {
        alert('Por favor selecciona la fase del ciclo de vida del proyecto');
        return;
    }

    if (!approach) {
        alert('Por favor selecciona el enfoque del proyecto');
        return;
    }

    // Obtener artefactos seleccionados
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

    const selectedArtifacts = [];
    for (const [id, name] of Object.entries(artifacts)) {
        if (document.getElementById(id).checked) {
            selectedArtifacts.push(name);
        }
    }

    if (selectedArtifacts.length === 0) {
        alert('Por favor selecciona al menos un artefacto para generar');
        return;
    }

    // Generar prompt según proveedor
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

    if (selectedProvider === 'claude') {
        prompt = generateClaudePrompt(projectName, description, justification, phaseLabels[selectedPhase], approachLabels[approach], selectedArtifacts);
    } else {
        prompt = generateGeminiPrompt(projectName, description, justification, phaseLabels[selectedPhase], approachLabels[approach], selectedArtifacts);
    }

    // Mostrar output
    document.getElementById('promptOutput').textContent = prompt;

    // Update instructions
    const instructions = document.getElementById('outputInstructions');
    if (selectedProvider === 'claude') {
        instructions.textContent = 'Copia el siguiente texto y pégalo en Claude Code o Claude.ai para generar tus artefactos:';
    } else {
        instructions.innerHTML = '<strong>Instrucciones para Gemini:</strong><br>1. Copia el prompt completo<br>2. Pégalo en Google Gemini (gemini.google.com o tu GEM personalizada)<br>3. Los artefactos se mostrarán visualmente para copiar<br>4. Al final recibirás un link para descargar el ZIP con todos los archivos';
    }

    document.getElementById('outputSection').classList.add('active');
    document.getElementById('outputSection').scrollIntoView({ behavior: 'smooth' });
}

function generateClaudePrompt(projectName, description, justification, phase, approach, artifacts) {
    const projectCode = projectName.toUpperCase().replace(/\s+/g, '-');

    return `Actúa como el agente coordinador del sistema PimBo especializado en PMBOK 8.

    INFORMACIÓN DEL PROYECTO:
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    Nombre del Proyecto: ${projectName}

    Descripción:
    ${description}

    Justificación / Caso de Negocio:
    ${justification}

    Fase del Ciclo de Vida: ${phase}
    Enfoque del Proyecto: ${approach}

    ARTEFACTOS A GENERAR:
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    ${artifacts.map((artifact, index) => `${index + 1}. ${artifact}`).join('\n')}

    INSTRUCCIONES:
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    1. Lee el contexto del proyecto proporcionado
    2. Activa los subagentes apropiados según los artefactos solicitados
    3. Genera cada artefacto siguiendo las plantillas en /references/
    4. Guarda cada archivo con el formato: ${projectCode}-[artefacto]-v1.[ext]
    5. Usa los formatos especificados en config-salidas.md:
    - CSV para registros, matrices y cronogramas
    - JSON para estructuras jerárquicas (WBS)
    - MD para documentos narrativos (Acta, Planes)

    IMPORTANTE:
    - NO muestres el contenido en el chat, solo genera los archivos
    - Confirma cada archivo generado con: ✓ Archivo generado: [nombre]
    - Adapta los artefactos al enfoque ${approach}

    Genera los artefactos ahora.`;
}

function generateGeminiPrompt(projectName, description, justification, phase, approach, artifacts) {
    const projectCode = projectName.toUpperCase().replace(/\s+/g, '-');

    return `Eres PimBo, un agente experto en generar documentación de proyectos según PMBOK 8.

    🎯 INFORMACIÓN DEL PROYECTO
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    📋 Proyecto: ${projectName}

    📝 Descripción:
    ${description}

    💼 Justificación:
    ${justification}

    ⚙️ Configuración:
    • Fase: ${phase}
    • Enfoque: ${approach}

    📦 ARTEFACTOS A GENERAR
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    ${artifacts.map((artifact, index) => `${index + 1}. ${artifact}`).join('\n')}

    📋 INSTRUCCIONES PARA GEMINI
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    Para cada artefacto solicitado:

    1. **MOSTRAR VISUALMENTE**: Genera el contenido completo del artefacto con formato claro

    2. **FORMATO DE PRESENTACIÓN**:

    ╔═══════════════════════════════════════════════════════╗
    ║  📄 NOMBRE DEL ARTEFACTO                              ║
    ║  Archivo: ${projectCode}-[nombre]-v1.[extensión]     ║
    ╚═══════════════════════════════════════════════════════╝

    [CONTENIDO COMPLETO DEL ARTEFACTO AQUÍ]

    ─────────────────────────────────────────────────────────
    ✅ Listo para copiar y guardar
    ─────────────────────────────────────────────────────────

    3. **GUÍAS POR TIPO DE ARTEFACTO**:

    📄 DOCUMENTOS MARKDOWN (.md):
    - Acta de Constitución
    - Plan de Comunicaciones
    - Historias de Usuario
    → Formato: Markdown bien estructurado con títulos, listas y tablas

    📊 TABLAS CSV (.csv):
    - Cronograma Gantt
    - Presupuesto
    - Registro de Interesados
    - Matriz RACI
    - Registro de Riesgos
    - Product Backlog
    → Formato: CSV con encabezados claros, datos completos
    → Ejemplo:
    ID,Columna1,Columna2,Columna3
    1,Dato1,Dato2,Dato3
    2,Dato4,Dato5,Dato6

    🌳 ESTRUCTURAS JSON (.json):
    - WBS (Estructura de Desglose del Trabajo)
    → Formato: JSON bien formateado, estructura jerárquica clara

    4. **CONTENIDO DE CALIDAD**:
    - Usa el contexto del proyecto para personalizar cada artefacto
    - Genera datos realistas y específicos para "${projectName}"
    - Adapta al enfoque ${approach}
    - Incluye detalles profesionales y completos

    5. **AL FINALIZAR - ARCHIVO ZIP**:

    Después de mostrar todos los artefactos, genera un resumen:

    ╔═══════════════════════════════════════════════════════╗
    ║  📦 DESCARGA TODOS LOS ARCHIVOS                       ║
    ╚═══════════════════════════════════════════════════════╝

    Archivos generados para ${projectName}:
    ${artifacts.map((artifact, index) => `${index + 1}. ${projectCode}-[nombre]-v1.[ext]`).join('\n   ')}

    🔽 DESCARGA EL ZIP:
    [Genera un archivo ZIP con todos los artefactos y proporciona el link de descarga]

    IMPORTANTE:
    - Genera TODOS los artefactos solicitados
    - Muestra el contenido COMPLETO de cada uno (no resúmenes)
    - Usa formato visual claro para fácil copia
    - Proporciona el ZIP al final

    ¡Comienza a generar los artefactos ahora! 🚀`;
}

function copyPrompt(event) {
    const promptOutput = document.getElementById('promptOutput');
    const promptText = promptOutput.textContent;

    // Try modern clipboard API first
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(promptText).then(() => {
            showCopySuccess(event.target);
        }).catch(err => {
            // Fallback to older method
            copyToClipboardFallback(promptOutput, event.target);
        });
    } else {
        // Use fallback method directly
        copyToClipboardFallback(promptOutput, event.target);
    }
}

function copyToClipboardFallback(element, btn) {
    try {
        // Create a temporary textarea
        const textarea = document.createElement('textarea');
        textarea.value = element.textContent;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);

        // Select and copy
        textarea.select();
        textarea.setSelectionRange(0, 99999); // For mobile devices

        const successful = document.execCommand('copy');
        document.body.removeChild(textarea);

        if (successful) {
            showCopySuccess(btn);
        } else {
            alert('Error al copiar. Por favor, selecciona y copia manualmente.');
        }
    } catch (err) {
        alert('Error al copiar. Por favor, selecciona y copia manualmente.');
    }
}

function showCopySuccess(btn) {
    const originalText = btn.textContent;
    btn.textContent = '✅ ¡Copiado!';
    btn.style.background = '#38a169';
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
    }, 2000);
}
