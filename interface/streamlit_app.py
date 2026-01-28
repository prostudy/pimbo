"""
PM Docs IA - Interfaz Streamlit
Generador de prompts para artefactos PMBOK 8
"""

import streamlit as st
import json
from datetime import datetime

# Configuración de la página
st.set_page_config(
    page_title="PM Docs IA - Generador PMBOK 8",
    page_icon="🚀",
    layout="wide",
    initial_sidebar_state="expanded"
)

# CSS personalizado
st.markdown("""
<style>
    .main-header {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        padding: 2rem;
        border-radius: 10px;
        color: white;
        text-align: center;
        margin-bottom: 2rem;
    }
    .artifact-card {
        border: 2px solid #e0e0e0;
        border-radius: 8px;
        padding: 1rem;
        margin: 0.5rem 0;
    }
    .artifact-card:hover {
        border-color: #667eea;
        box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
    }
    .success-box {
        background-color: #d4edda;
        border: 1px solid #c3e6cb;
        color: #155724;
        padding: 1rem;
        border-radius: 5px;
        margin: 1rem 0;
    }
    .stButton>button {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        font-weight: bold;
    }
</style>
""", unsafe_allow_html=True)

# Header
st.markdown("""
<div class="main-header">
    <h1>🚀 PM Docs IA</h1>
    <p>Generador Inteligente de Artefactos de Gestión de Proyectos PMBOK 8</p>
</div>
""", unsafe_allow_html=True)

# Plantillas predefinidas
TEMPLATES = {
    "CRM de Ventas": {
        "name": "Sistema CRM para Departamento de Ventas",
        "description": "Sistema de gestión de relaciones con clientes (CRM) para mejorar el seguimiento de oportunidades de venta, gestionar contactos y generar reportes de desempeño comercial.",
        "justification": "Incrementar las ventas en un 15% mediante mejor gestión de clientes y oportunidades. Actualmente se pierden oportunidades por falta de seguimiento sistemático y los reportes se generan manualmente."
    },
    "Sistema ERP": {
        "name": "Implementación de Sistema ERP",
        "description": "Implementación de sistema de planificación de recursos empresariales (ERP) para integrar procesos de finanzas, inventarios, compras y recursos humanos en una plataforma única.",
        "justification": "Reducir costos operativos en 20% mediante automatización de procesos y eliminar sistemas aislados que generan duplicación de información y errores de integración."
    },
    "App Móvil": {
        "name": "Aplicación Móvil de Servicios",
        "description": "Desarrollo de aplicación móvil nativa (iOS y Android) para que clientes puedan solicitar servicios, hacer seguimiento de pedidos y realizar pagos desde sus dispositivos móviles.",
        "justification": "Mejorar experiencia del cliente y capturar el 40% del mercado que prefiere canales digitales. Competidores ya ofrecen apps móviles y estamos perdiendo cuota de mercado."
    },
    "Infraestructura Cloud": {
        "name": "Migración a Infraestructura Cloud",
        "description": "Migración de servidores on-premise a infraestructura cloud (AWS/Azure) incluyendo base de datos, aplicaciones web y sistemas de respaldo.",
        "justification": "Reducir costos de infraestructura en 30%, mejorar disponibilidad a 99.9% y habilitar escalabilidad automática para picos de demanda."
    }
}

# Artefactos disponibles
ARTIFACTS = {
    "Gobernanza": [
        ("acta", "Acta de Constitución del Proyecto", "Documento que autoriza formalmente el proyecto"),
        ("decisiones", "Registro de Decisiones", "Captura decisiones clave del proyecto"),
    ],
    "Alcance": [
        ("wbs", "WBS (EDT) - JSON", "Estructura de Desglose del Trabajo"),
        ("requisitos", "Documento de Requisitos", "Requisitos funcionales y no funcionales"),
    ],
    "Cronograma": [
        ("cronograma", "Cronograma (Gantt) - CSV", "Cronograma con actividades y dependencias"),
        ("hitos", "Lista de Hitos", "Eventos clave del proyecto"),
    ],
    "Finanzas": [
        ("presupuesto", "Presupuesto - CSV", "Presupuesto detallado por categorías"),
        ("roi", "Análisis Costo-Beneficio", "ROI, VAN, TIR"),
    ],
    "Interesados": [
        ("interesados", "Registro de Interesados - CSV", "Identificación de stakeholders"),
        ("comunicaciones", "Plan de Comunicaciones", "Estrategia de comunicación"),
    ],
    "Recursos": [
        ("raci", "Matriz RACI - CSV", "Asignación de responsabilidades"),
        ("organigrama", "Organigrama del Proyecto", "Estructura del equipo"),
    ],
    "Riesgo": [
        ("riesgos", "Registro de Riesgos - CSV", "Riesgos identificados y respuestas"),
    ],
    "Ágil": [
        ("backlog", "Product Backlog - CSV", "Lista priorizada de funcionalidades"),
        ("historias", "Historias de Usuario", "Historias con criterios de aceptación"),
    ],
}

# Sidebar
with st.sidebar:
    st.header("⚙️ Configuración")

    # Plantillas rápidas
    st.subheader("📋 Plantillas Rápidas")
    template_choice = st.selectbox(
        "Selecciona una plantilla:",
        ["Personalizado"] + list(TEMPLATES.keys()),
        key="template"
    )

    if template_choice != "Personalizado":
        if st.button("Cargar Plantilla"):
            template = TEMPLATES[template_choice]
            st.session_state.project_name = template["name"]
            st.session_state.project_desc = template["description"]
            st.session_state.project_just = template["justification"]
            st.success(f"✓ Plantilla '{template_choice}' cargada")

    st.markdown("---")

    # Guardar/Cargar configuración
    st.subheader("💾 Configuración")

    if st.button("💾 Guardar Proyecto"):
        config = {
            "timestamp": datetime.now().isoformat(),
            "project_name": st.session_state.get("project_name", ""),
            "project_desc": st.session_state.get("project_desc", ""),
            "project_just": st.session_state.get("project_just", ""),
            "phase": st.session_state.get("phase", ""),
            "approach": st.session_state.get("approach", ""),
            "artifacts": st.session_state.get("selected_artifacts", [])
        }

        filename = f"proyecto-{datetime.now().strftime('%Y%m%d-%H%M%S')}.json"

        st.download_button(
            label="📥 Descargar Configuración",
            data=json.dumps(config, indent=2, ensure_ascii=False),
            file_name=filename,
            mime="application/json"
        )

# Main content
tab1, tab2, tab3 = st.tabs(["📋 Información del Proyecto", "📦 Artefactos", "✨ Generar Prompt"])

# TAB 1: Información del Proyecto
with tab1:
    st.header("Información del Proyecto")

    col1, col2 = st.columns(2)

    with col1:
        project_name = st.text_input(
            "Nombre del Proyecto *",
            value=st.session_state.get("project_name", ""),
            placeholder="Ej: Sistema CRM para Ventas",
            key="project_name"
        )

        project_desc = st.text_area(
            "Descripción / Requerimiento *",
            value=st.session_state.get("project_desc", ""),
            placeholder="Describe el proyecto, su propósito y qué se busca lograr...",
            height=150,
            key="project_desc"
        )

    with col2:
        project_just = st.text_area(
            "Justificación / Caso de Negocio *",
            value=st.session_state.get("project_just", ""),
            placeholder="¿Por qué es necesario este proyecto? ¿Qué valor aporta?",
            height=150,
            key="project_just"
        )

        phase = st.selectbox(
            "Fase del Ciclo de Vida *",
            ["", "Inicio", "Planificación", "Ejecución", "Monitoreo y Control", "Cierre"],
            key="phase"
        )

        approach = st.selectbox(
            "Enfoque del Proyecto *",
            ["", "Predictivo (Cascada)", "Ágil", "Híbrido", "Iterativo/Incremental"],
            key="approach"
        )

# TAB 2: Artefactos
with tab2:
    st.header("Selección de Artefactos")
    st.write("Marca los documentos que necesitas generar para tu proyecto")

    if "selected_artifacts" not in st.session_state:
        st.session_state.selected_artifacts = []

    for domain, artifacts in ARTIFACTS.items():
        with st.expander(f"📁 {domain}", expanded=True):
            for artifact_id, artifact_name, artifact_desc in artifacts:
                col1, col2 = st.columns([3, 1])
                with col1:
                    checked = st.checkbox(
                        f"**{artifact_name}**",
                        key=f"artifact_{artifact_id}"
                    )
                    st.caption(artifact_desc)

                if checked and artifact_name not in st.session_state.selected_artifacts:
                    st.session_state.selected_artifacts.append(artifact_name)
                elif not checked and artifact_name in st.session_state.selected_artifacts:
                    st.session_state.selected_artifacts.remove(artifact_name)

    # Resumen de selección
    if st.session_state.selected_artifacts:
        st.success(f"✓ {len(st.session_state.selected_artifacts)} artefactos seleccionados")
        with st.expander("Ver artefactos seleccionados"):
            for i, artifact in enumerate(st.session_state.selected_artifacts, 1):
                st.write(f"{i}. {artifact}")

# TAB 3: Generar Prompt
with tab3:
    st.header("Generar Prompt")

    # Validaciones
    can_generate = True
    errors = []

    if not st.session_state.get("project_name"):
        errors.append("❌ Falta el nombre del proyecto")
        can_generate = False

    if not st.session_state.get("project_desc"):
        errors.append("❌ Falta la descripción del proyecto")
        can_generate = False

    if not st.session_state.get("project_just"):
        errors.append("❌ Falta la justificación del proyecto")
        can_generate = False

    if not st.session_state.get("phase"):
        errors.append("❌ Falta seleccionar la fase del ciclo de vida")
        can_generate = False

    if not st.session_state.get("approach"):
        errors.append("❌ Falta seleccionar el enfoque del proyecto")
        can_generate = False

    if not st.session_state.get("selected_artifacts"):
        errors.append("❌ No has seleccionado ningún artefacto")
        can_generate = False

    if errors:
        for error in errors:
            st.error(error)

    if can_generate:
        st.success("✓ Todos los campos requeridos están completos")

        # Botón de generar
        if st.button("✨ Generar Prompt para Claude", type="primary", use_container_width=True):
            project_code = st.session_state.project_name.upper().replace(" ", "-")

            # Generar prompt
            prompt = f"""Actúa como el agente coordinador del sistema PM Docs IA especializado en PMBOK 8.

INFORMACIÓN DEL PROYECTO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Nombre del Proyecto: {st.session_state.project_name}

Descripción:
{st.session_state.project_desc}

Justificación / Caso de Negocio:
{st.session_state.project_just}

Fase del Ciclo de Vida: {st.session_state.phase}
Enfoque del Proyecto: {st.session_state.approach}

ARTEFACTOS A GENERAR:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

"""

            for i, artifact in enumerate(st.session_state.selected_artifacts, 1):
                prompt += f"{i}. {artifact}\n"

            prompt += f"""
INSTRUCCIONES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Lee el contexto del proyecto proporcionado
2. Activa los subagentes apropiados según los artefactos solicitados
3. Genera cada artefacto siguiendo las plantillas en /references/
4. Guarda cada archivo con el formato: {project_code}-[artefacto]-v1.[ext]
5. Usa los formatos especificados en config-salidas.md:
   - CSV para registros, matrices y cronogramas
   - JSON para estructuras jerárquicas (WBS)
   - MD para documentos narrativos (Acta, Planes)

IMPORTANTE:
- NO muestres el contenido en el chat, solo genera los archivos
- Confirma cada archivo generado con: ✓ Archivo generado: [nombre]
- Adapta los artefactos al enfoque {st.session_state.approach}

Genera los artefactos ahora."""

            st.session_state.generated_prompt = prompt

            # Mostrar resumen
            st.markdown("### 📊 Resumen del Proyecto")
            col1, col2, col3 = st.columns(3)
            with col1:
                st.metric("Artefactos", len(st.session_state.selected_artifacts))
            with col2:
                st.metric("Fase", st.session_state.phase)
            with col3:
                st.metric("Enfoque", st.session_state.approach.split(" ")[0])

            # Mostrar prompt
            st.markdown("### 📝 Prompt Generado")
            st.code(prompt, language="text")

            # Botón de copiar
            st.download_button(
                label="📋 Descargar Prompt",
                data=prompt,
                file_name=f"prompt-{project_code}.txt",
                mime="text/plain",
                use_container_width=True
            )

            st.markdown("""
            <div class="success-box">
                <h4>🎯 Siguiente Paso:</h4>
                <ol>
                    <li>Descarga o copia el prompt generado</li>
                    <li>Abre Claude Code o Claude.ai</li>
                    <li>Pega el prompt</li>
                    <li>Claude generará automáticamente los archivos</li>
                </ol>
            </div>
            """, unsafe_allow_html=True)

# Footer
st.markdown("---")
st.markdown("""
<div style="text-align: center; color: #666;">
    <p>🚀 <strong>PM Docs IA</strong> - Sistema de Generación de Artefactos PMBOK 8</p>
    <p>Diplomado en Gestión de Proyectos</p>
</div>
""", unsafe_allow_html=True)
