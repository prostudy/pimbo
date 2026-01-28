#!/bin/bash

# PM Docs IA - Script Interactivo CLI
# Generador de prompts para artefactos PMBOK 8

# Colores
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color
BOLD='\033[1m'

# Banner
clear
echo -e "${PURPLE}${BOLD}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🚀 PM Docs IA - Generador Interactivo de Artefactos PMBOK 8"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${NC}"

# Variables
PROJECT_NAME=""
PROJECT_DESC=""
PROJECT_JUST=""
PHASE=""
APPROACH=""
ARTIFACTS=()

# Función para leer input con validación
read_input() {
    local prompt="$1"
    local var_name="$2"
    local required="$3"

    while true; do
        echo -e "${CYAN}${prompt}${NC}"
        read -r input

        if [[ -z "$input" ]] && [[ "$required" == "true" ]]; then
            echo -e "${RED}❌ Este campo es obligatorio${NC}"
            continue
        fi

        eval "$var_name=\"\$input\""
        break
    done
}

# Función para selección de menú
select_option() {
    local prompt="$1"
    shift
    local options=("$@")

    echo -e "${CYAN}${prompt}${NC}"
    for i in "${!options[@]}"; do
        echo -e "  ${YELLOW}$((i+1)))${NC} ${options[$i]}"
    done

    while true; do
        echo -e "${CYAN}Selecciona (1-${#options[@]}): ${NC}"
        read -r choice

        if [[ "$choice" =~ ^[0-9]+$ ]] && [ "$choice" -ge 1 ] && [ "$choice" -le "${#options[@]}" ]; then
            echo "${options[$((choice-1))]}"
            return
        else
            echo -e "${RED}❌ Opción inválida${NC}"
        fi
    done
}

# Función para selección múltiple
select_multiple() {
    echo -e "${CYAN}${BOLD}Selecciona artefactos a generar (número + Enter, 0 para terminar):${NC}"
    echo ""

    local artifacts_list=(
        "Acta de Constitución del Proyecto"
        "WBS (Estructura de Desglose del Trabajo) - JSON"
        "Documento de Requisitos"
        "Cronograma del Proyecto (Gantt) - CSV"
        "Presupuesto del Proyecto - CSV"
        "Registro de Interesados - CSV"
        "Plan de Comunicaciones"
        "Matriz RACI - CSV"
        "Registro de Riesgos - CSV"
        "Product Backlog - CSV"
        "Historias de Usuario"
    )

    for i in "${!artifacts_list[@]}"; do
        echo -e "  ${YELLOW}$((i+1)))${NC} ${artifacts_list[$i]}"
    done
    echo -e "  ${GREEN}0)${NC} Finalizar selección"
    echo ""

    local selected=()

    while true; do
        echo -e "${CYAN}Selecciona artefacto (${#selected[@]} seleccionados): ${NC}"
        read -r choice

        if [[ "$choice" == "0" ]]; then
            if [ ${#selected[@]} -eq 0 ]; then
                echo -e "${RED}❌ Debes seleccionar al menos un artefacto${NC}"
                continue
            fi
            break
        fi

        if [[ "$choice" =~ ^[0-9]+$ ]] && [ "$choice" -ge 1 ] && [ "$choice" -le "${#artifacts_list[@]}" ]; then
            local artifact="${artifacts_list[$((choice-1))]}"
            if [[ ! " ${selected[@]} " =~ " ${artifact} " ]]; then
                selected+=("$artifact")
                echo -e "${GREEN}✓ Agregado: ${artifact}${NC}"
            else
                echo -e "${YELLOW}⚠ Ya seleccionado: ${artifact}${NC}"
            fi
        else
            echo -e "${RED}❌ Opción inválida${NC}"
        fi
    done

    ARTIFACTS=("${selected[@]}")
}

# Función para plantillas rápidas
show_templates() {
    echo -e "${CYAN}${BOLD}¿Deseas usar una plantilla rápida? (y/n): ${NC}"
    read -r use_template

    if [[ "$use_template" == "y" || "$use_template" == "Y" ]]; then
        template=$(select_option "Selecciona plantilla:" \
            "CRM de Ventas" \
            "Sistema ERP" \
            "App Móvil" \
            "Infraestructura Cloud" \
            "Proyecto personalizado")

        case "$template" in
            "CRM de Ventas")
                PROJECT_NAME="Sistema CRM para Departamento de Ventas"
                PROJECT_DESC="Sistema de gestión de relaciones con clientes (CRM) para mejorar el seguimiento de oportunidades de venta, gestionar contactos y generar reportes de desempeño comercial."
                PROJECT_JUST="Incrementar las ventas en un 15% mediante mejor gestión de clientes y oportunidades. Actualmente se pierden oportunidades por falta de seguimiento sistemático y los reportes se generan manualmente."
                echo -e "${GREEN}✓ Plantilla CRM cargada${NC}\n"
                ;;
            "Sistema ERP")
                PROJECT_NAME="Implementación de Sistema ERP"
                PROJECT_DESC="Implementación de sistema de planificación de recursos empresariales (ERP) para integrar procesos de finanzas, inventarios, compras y recursos humanos en una plataforma única."
                PROJECT_JUST="Reducir costos operativos en 20% mediante automatización de procesos y eliminar sistemas aislados que generan duplicación de información y errores de integración."
                echo -e "${GREEN}✓ Plantilla ERP cargada${NC}\n"
                ;;
            "App Móvil")
                PROJECT_NAME="Aplicación Móvil de Servicios"
                PROJECT_DESC="Desarrollo de aplicación móvil nativa (iOS y Android) para que clientes puedan solicitar servicios, hacer seguimiento de pedidos y realizar pagos desde sus dispositivos móviles."
                PROJECT_JUST="Mejorar experiencia del cliente y capturar el 40% del mercado que prefiere canales digitales. Competidores ya ofrecen apps móviles y estamos perdiendo cuota de mercado."
                echo -e "${GREEN}✓ Plantilla App Móvil cargada${NC}\n"
                ;;
            "Infraestructura Cloud")
                PROJECT_NAME="Migración a Infraestructura Cloud"
                PROJECT_DESC="Migración de servidores on-premise a infraestructura cloud (AWS/Azure) incluyendo base de datos, aplicaciones web y sistemas de respaldo."
                PROJECT_JUST="Reducir costos de infraestructura en 30%, mejorar disponibilidad a 99.9% y habilitar escalabilidad automática para picos de demanda."
                echo -e "${GREEN}✓ Plantilla Cloud cargada${NC}\n"
                ;;
            *)
                echo -e "${YELLOW}Continuar con proyecto personalizado${NC}\n"
                ;;
        esac
    fi
}

# PASO 1: Información del Proyecto
echo -e "${BLUE}${BOLD}━━━ PASO 1: Información del Proyecto ━━━${NC}\n"

show_templates

if [[ -z "$PROJECT_NAME" ]]; then
    read_input "📝 Nombre del proyecto:" PROJECT_NAME true
fi

if [[ -z "$PROJECT_DESC" ]]; then
    echo -e "${CYAN}📋 Descripción del proyecto (Enter para nueva línea, Ctrl+D para terminar):${NC}"
    PROJECT_DESC=$(cat)
fi

if [[ -z "$PROJECT_JUST" ]]; then
    echo -e "${CYAN}💼 Justificación / Caso de negocio (Enter para nueva línea, Ctrl+D para terminar):${NC}"
    PROJECT_JUST=$(cat)
fi

# PASO 2: Configuración
echo -e "\n${BLUE}${BOLD}━━━ PASO 2: Configuración del Proyecto ━━━${NC}\n"

PHASE=$(select_option "🎯 Fase del ciclo de vida:" \
    "Inicio" \
    "Planificación" \
    "Ejecución" \
    "Monitoreo y Control" \
    "Cierre")

APPROACH=$(select_option "⚙️ Enfoque del proyecto:" \
    "Predictivo (Cascada)" \
    "Ágil" \
    "Híbrido" \
    "Iterativo/Incremental")

# PASO 3: Selección de Artefactos
echo -e "\n${BLUE}${BOLD}━━━ PASO 3: Artefactos a Generar ━━━${NC}\n"
select_multiple

# PASO 4: Generar Prompt
echo -e "\n${BLUE}${BOLD}━━━ PASO 4: Generando Prompt ━━━${NC}\n"

PROJECT_CODE=$(echo "$PROJECT_NAME" | tr '[:lower:]' '[:upper:]' | tr ' ' '-')

PROMPT="Actúa como el agente coordinador del sistema PM Docs IA especializado en PMBOK 8.

INFORMACIÓN DEL PROYECTO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Nombre del Proyecto: $PROJECT_NAME

Descripción:
$PROJECT_DESC

Justificación / Caso de Negocio:
$PROJECT_JUST

Fase del Ciclo de Vida: $PHASE
Enfoque del Proyecto: $APPROACH

ARTEFACTOS A GENERAR:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"

counter=1
for artifact in "${ARTIFACTS[@]}"; do
    PROMPT+="
$counter. $artifact"
    ((counter++))
done

PROMPT+="

INSTRUCCIONES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Lee el contexto del proyecto proporcionado
2. Activa los subagentes apropiados según los artefactos solicitados
3. Genera cada artefacto siguiendo las plantillas en /references/
4. Guarda cada archivo con el formato: $PROJECT_CODE-[artefacto]-v1.[ext]
5. Usa los formatos especificados en config-salidas.md:
   - CSV para registros, matrices y cronogramas
   - JSON para estructuras jerárquicas (WBS)
   - MD para documentos narrativos (Acta, Planes)

IMPORTANTE:
- NO muestres el contenido en el chat, solo genera los archivos
- Confirma cada archivo generado con: ✓ Archivo generado: [nombre]
- Adapta los artefactos al enfoque $APPROACH

Genera los artefactos ahora."

# Guardar prompt en archivo
OUTPUT_FILE="prompt-$PROJECT_CODE.txt"
echo "$PROMPT" > "$OUTPUT_FILE"

# Mostrar resumen
echo -e "${GREEN}${BOLD}✓ Prompt generado exitosamente${NC}\n"
echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BOLD}RESUMEN:${NC}"
echo -e "  Proyecto: ${GREEN}$PROJECT_NAME${NC}"
echo -e "  Fase: ${YELLOW}$PHASE${NC}"
echo -e "  Enfoque: ${YELLOW}$APPROACH${NC}"
echo -e "  Artefactos: ${GREEN}${#ARTIFACTS[@]}${NC}"
echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}\n"

# Preguntar acción
echo -e "${CYAN}${BOLD}¿Qué deseas hacer?${NC}"
echo -e "  ${YELLOW}1)${NC} Ver prompt en pantalla"
echo -e "  ${YELLOW}2)${NC} Copiar prompt al portapapeles"
echo -e "  ${YELLOW}3)${NC} Solo guardar archivo (ya guardado en: $OUTPUT_FILE)"
echo ""
read -r action

case "$action" in
    1)
        echo -e "\n${PURPLE}━━━━━━━━━━━━━━━━━━ PROMPT ━━━━━━━━━━━━━━━━━━${NC}\n"
        echo "$PROMPT"
        echo -e "\n${PURPLE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}\n"
        echo -e "${GREEN}✓ También guardado en: $OUTPUT_FILE${NC}"
        ;;
    2)
        # Intentar copiar al portapapeles
        if command -v pbcopy &> /dev/null; then
            echo "$PROMPT" | pbcopy
            echo -e "${GREEN}✓ Prompt copiado al portapapeles (pbcopy)${NC}"
        elif command -v xclip &> /dev/null; then
            echo "$PROMPT" | xclip -selection clipboard
            echo -e "${GREEN}✓ Prompt copiado al portapapeles (xclip)${NC}"
        else
            echo -e "${YELLOW}⚠ No se pudo copiar automáticamente${NC}"
            echo -e "El prompt está guardado en: ${GREEN}$OUTPUT_FILE${NC}"
        fi
        ;;
    *)
        echo -e "${GREEN}✓ Prompt guardado en: $OUTPUT_FILE${NC}"
        ;;
esac

echo ""
echo -e "${CYAN}${BOLD}Siguiente paso:${NC}"
echo -e "1. Abre Claude Code o Claude.ai"
echo -e "2. Pega el prompt${NC}"
echo -e "3. Claude generará automáticamente los archivos\n"

echo -e "${PURPLE}${BOLD}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}Gracias por usar PM Docs IA 🚀${NC}"
echo -e "${PURPLE}${BOLD}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}\n"
