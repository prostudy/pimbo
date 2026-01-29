const fileInput = document.getElementById('file-input');
const dropZone = document.getElementById('drop-zone');
const contentDiv = document.getElementById('content');
const resetBtn = document.getElementById('reset-btn');
const viewerControls = document.getElementById('viewer-controls');

// Inicialización de mermaid
mermaid.initialize({ startOnLoad: true, theme: 'default' });

// Inicialización de eventos
function init() {
    fileInput.addEventListener('change', handleFileSelect);
    dropZone.addEventListener('click', () => fileInput.click());
    resetBtn.addEventListener('click', resetViewer);

    // Drag and Drop events
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, preventDefaults, false);
    });

    ['dragenter', 'dragover'].forEach(eventName => {
        dropZone.addEventListener(eventName, highlight, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, unhighlight, false);
    });

    dropZone.addEventListener('drop', handleDrop, false);
}

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

function highlight() {
    dropZone.classList.add('dragover');
}

function unhighlight() {
    dropZone.classList.remove('dragover');
}

function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    handleFiles(files);
}

function handleFileSelect(e) {
    const files = e.target.files;
    handleFiles(files);
}

function handleFiles(files) {
    const file = files[0];
    if (file) {
        if (file.name.endsWith('.md')) {
            readFile(file, 'md');
        } else if (file.name.endsWith('.json')) {
            readFile(file, 'json');
        } else {
            alert('Por favor carga un archivo válido (.md o .json)');
        }
    }
}

function readFile(file, type) {
    const reader = new FileReader();

    reader.onload = (e) => {
        const text = e.target.result;

        // Renderizar contenido
        if (type === 'md') {
            contentDiv.innerHTML = marked.parse(text);
        } else if (type === 'json') {
            processJSON(text);
        }

        // Actualizar UI
        dropZone.style.display = 'none';
        contentDiv.style.display = 'block';
        viewerControls.style.display = 'block';

        // Actualizar título
        document.title = `${file.name} - Visor PimBo`;
    };

    reader.readAsText(file);
}

function processJSON(text) {
    try {
        const data = JSON.parse(text);

        // Detectar tipo de JSON
        if (isHierarchy(data)) {
            renderHierarchy(data);
        } else if (isBMC(data)) {
            renderBMC(data);
        } else {
            renderJSONTree(data); // Default to Interactive Tree
        }
    } catch (e) {
        contentDiv.innerHTML = `<div class="error-message">Error al parsear JSON: ${e.message}</div>`;
    }
}

function renderJSONTree(data) {
    const treeHTML = buildTree(data, true);
    contentDiv.innerHTML = `<div class="json-tree">${treeHTML}</div>`;
}

function buildTree(item, isRoot = false) {
    if (item === null) return '<span class="json-null">null</span>';

    if (typeof item === 'object') {
        const isArray = Array.isArray(item);
        const keys = Object.keys(item);
        if (keys.length === 0) return isArray ? '[]' : '{}';

        let html = '';
        if (!isRoot) {
            html += `<details ${keys.length < 10 ? 'open' : ''}><summary>${isArray ? `Array [${keys.length}]` : 'Object'}</summary>`;
        } else {
            html += '<div>';
        }

        keys.forEach(key => {
            const value = item[key];
            html += `<div class="tree-item">
                <span class="json-key">${key}:</span> 
                ${buildTree(value)}
            </div>`;
        });

        if (!isRoot) html += '</details>';
        else html += '</div>';

        return html;
    }

    if (typeof item === 'string') return `<span class="json-string">"${item}"</span>`;
    if (typeof item === 'number') return `<span class="json-number">${item}</span>`;
    if (typeof item === 'boolean') return `<span class="json-boolean">${item}</span>`;

    return String(item);
}

// Detectar si es una jerarquía (WBS, RBS, Org)
function isHierarchy(data) {
    // Si tiene claves como wbs, hierarchy, or '1' con children
    if (data.wbs || data.hierarchy || data.organigrama) return true;

    // Check estructura recursiva típica
    const keys = Object.keys(data);
    if (keys.length > 0 && data[keys[0]].children) return true;

    return false;
}

// Renderizar Jerarquía con Mermaid
function renderHierarchy(data) {
    let graphDefinition = 'graph TD\n';

    // Función recursiva para construir el grafo
    function traverse(node, nodeId, parentId) {
        // Limpiar etiqueta de caracteres problemáticos
        const label = node.name ? node.name.replace(/"/g, "'") : nodeId;
        const safeNodeId = nodeId.replace(/[^a-zA-Z0-9]/g, '_');

        graphDefinition += `${safeNodeId}["${label}"]\n`;

        if (parentId) {
            const safeParentId = parentId.replace(/[^a-zA-Z0-9]/g, '_');
            graphDefinition += `${safeParentId} --> ${safeNodeId}\n`;
        }

        if (node.children) {
            Object.keys(node.children).forEach(childKey => {
                traverse(node.children[childKey], childKey, nodeId);
            });
        }
    }

    // Iniciar travesía desde la raíz
    // Adaptar según la estructura exacta del JSON
    let root = data;
    if (data.wbs) root = data.wbs;
    else if (data.hierarchy) root = data.hierarchy;

    Object.keys(root).forEach(key => {
        traverse(root[key], key, null);
    });

    // Renderizar
    contentDiv.innerHTML = `
        <div class="diagram-container">
            <div class="mermaid">
                ${graphDefinition}
            </div>
        </div>
    `;

    // Forzar renderizado de mermaid
    mermaid.run();
}

// Detectar si es Business Model Canvas
function isBMC(data) {
    // 1. Check for explicit root key (PIMBO format)
    if (data.business_model_canvas) return true;

    // 2. Check for typical flat keys (Legacy/Simple format)
    const bmcKeys = ['vp', 'ka', 'key_activities', 'value_propositions'];
    const keys = Object.keys(data).map(k => k.toLowerCase());
    return bmcKeys.some(k => keys.includes(k)) || (data.name === "Business Model Canvas");
}

// Renderizar BMC
function renderBMC(data) {
    // Normalize data: If it has the root key, extract it.
    let canvasData = data.business_model_canvas || data;

    // Mapeo de claves posibles a clases CSS
    const map = {
        'partners': 'bmc-kp', 'key_partners': 'bmc-kp', 'asociaciones_clave': 'bmc-kp',
        'activities': 'bmc-ka', 'key_activities': 'bmc-ka', 'actividades_clave': 'bmc-ka',
        'resources': 'bmc-kr', 'key_resources': 'bmc-kr', 'recursos_clave': 'bmc-kr',
        'propositions': 'bmc-vp', 'value_propositions': 'bmc-vp', 'propuestas_valor': 'bmc-vp',
        'relationships': 'bmc-cr', 'customer_relationships': 'bmc-cr', 'relaciones_clientes': 'bmc-cr',
        'channels': 'bmc-ch', 'canales': 'bmc-ch',
        'segments': 'bmc-cs', 'customer_segments': 'bmc-cs', 'segmentos_clientes': 'bmc-cs',
        'cost': 'bmc-c$', 'cost_structure': 'bmc-c$', 'estructura_costos': 'bmc-c$',
        'revenue': 'bmc-rs', 'revenue_streams': 'bmc-rs', 'fuentes_ingresos': 'bmc-rs'
    };

    let html = '<div class="bmc-grid">';

    // Iterate over known keys in canvasData or all keys
    Object.keys(canvasData).forEach(key => {
        // Ignorar metadatos si estamos en el nivel raíz plano
        if (typeof canvasData[key] !== 'object' && typeof canvasData[key] !== 'string') return;

        const lowerKey = key.toLowerCase();
        let cssClass = '';

        // Buscar clase correspondiente
        for (const [k, v] of Object.entries(map)) {
            if (lowerKey.includes(k)) {
                cssClass = v;
                break;
            }
        }

        if (cssClass) {
            let blockContent = canvasData[key];
            let renderedContent = '';

            // Handle PIMBO specific structure (Object with title, description, and list array)
            if (typeof blockContent === 'object' && !Array.isArray(blockContent)) {
                // Try to find the array content (segments, propositions, etc.)
                // Usually the array key matches the block name roughly or is just a plural
                const objectKeys = Object.keys(blockContent);
                const arrayKey = objectKeys.find(k => Array.isArray(blockContent[k]));

                if (arrayKey) {
                    const items = blockContent[arrayKey];
                    if (items.length > 0) {
                        renderedContent = '<ul>' + items.map(item => {
                            // If item is object (e.g. {segment: "name", description: "..."})
                            if (typeof item === 'object') {
                                // Extract the first meaningful string value or format it
                                const mainValue = Object.values(item).find(v => typeof v === 'string' && v.length > 0) || 'Item';
                                const subValue = item.description || item.rationale || '';
                                return `<li><strong>${mainValue}</strong>${subValue ? `: ${subValue}` : ''}</li>`;
                            }
                            return `<li>${item}</li>`;
                        }).join('') + '</ul>';
                    }
                } else if (blockContent.description) {
                    renderedContent = `<p>${blockContent.description}</p>`;
                } else {
                    renderedContent = '<pre>' + JSON.stringify(blockContent, null, 2) + '</pre>';
                }
            }
            // Handle simple array (Legacy)
            else if (Array.isArray(blockContent)) {
                renderedContent = '<ul>' + blockContent.map(i => `<li>${i}</li>`).join('') + '</ul>';
            }
            // Handle string
            else {
                renderedContent = String(blockContent);
            }

            html += `
                <div class="bmc-block ${cssClass}">
                    <h4>${key.replace(/_/g, ' ').toUpperCase()}</h4>
                    <div class="bmc-content">${renderedContent}</div>
                </div>
            `;
        }
    });

    html += '</div>';

    // Add title if present at root
    const title = data.project_name ? `<h3>Business Model Canvas: ${data.project_name}</h3>` : '<h3>Business Model Canvas</h3>';
    contentDiv.innerHTML = title + html;
}

function resetViewer() {
    contentDiv.innerHTML = '';
    contentDiv.style.display = 'none';
    viewerControls.style.display = 'none';
    dropZone.style.display = 'block';
    fileInput.value = '';
    document.title = 'PimBo Visor';
}

// Iniciar aplicación
document.addEventListener('DOMContentLoaded', init);