# Skills - Sistema de Agentes PMBOK 8

## Descripción General

Este archivo proporciona un índice ejecutivo de las capacidades (skills) del sistema. Cada skill representa un dominio de desempeño del PMBOK 8 del PMI (Project Management Institute) y genera artefactos especializados de gestión de proyectos.

**Para documentación detallada de cada skill**, consulta la carpeta [skills/](skills/) con archivos individuales por dominio.

---

## Índice Rápido de Skills

### Dominios de Desempeño PMBOK 8

| Dominio | Artefactos Principales | Cuándo Usar | Documentación |
|---------|------------------------|-------------|---------------|
| **Gobernanza** | Acta de Constitución, Registro de Decisiones, Plan de Cambios, Checklist Kick-off | Fase de Inicio y autorización del proyecto | [Ver detalles](skills/gobernanza.md) |
| **Alcance** | WBS, Diccionario WBS, Requisitos, Matriz de Trazabilidad | Fase de Planificación, definición de entregables | [Ver detalles](skills/alcance.md) |
| **Cronograma** | Gantt, Hitos, Diagrama de Red, Camino Crítico | Fase de Planificación, gestión temporal | [Ver detalles](skills/cronograma.md) |
| **Finanzas** | Presupuesto, Flujo de Caja, ROI, Análisis EVM | Fase de Planificación y control financiero | [Ver detalles](skills/finanzas.md) |
| **Interesados** | Registro de Interesados, Matriz Poder/Interés, Plan de Comunicaciones | Desde Inicio, gestión continua de stakeholders | [Ver detalles](skills/interesados.md) |
| **Recursos** | RACI, Organigrama, Plan de Recursos, Calendario | Fase de Planificación, asignación de equipo | [Ver detalles](skills/recursos.md) |
| **Riesgo** | Registro de Riesgos, Matriz Probabilidad/Impacto, Plan de Respuesta | Fase de Planificación, gestión continua | [Ver detalles](skills/riesgo.md) |

### Framework Complementario

| Framework | Artefactos Principales | Cuándo Usar | Documentación |
|-----------|------------------------|-------------|---------------|
| **Ágil** | Product Backlog, Historias de Usuario, Sprint Backlog, Burndown, Velocity | Proyectos con enfoque ágil, iterativo o híbrido | [Ver detalles](skills/agile.md) |

---

## Resumen Ejecutivo por Skill

### 1. Gobernanza
**Propósito**: Autorización, supervisión y toma de decisiones del proyecto.

**Genera**: Acta de Constitución del Proyecto, Registro de Decisiones, Plan de Gestión de Cambios, Criterios de Éxito, Lista de Verificación de Kick-off.

**Formato típico**: `.md` (documentos narrativos)

**Es el primer skill** que se ejecuta - proporciona la autorización formal del proyecto.

---

### 2. Alcance
**Propósito**: Definir qué incluye y qué excluye el proyecto.

**Genera**: Enunciado del Alcance, WBS (Estructura de Desglose del Trabajo), Diccionario de la WBS, Matriz de Trazabilidad de Requisitos, Documento de Requisitos.

**Formato típico**: `.json` (WBS jerárquica), `.csv` (diccionario y requisitos)

**Usa salidas de**: Gobernanza (objetivos del Acta), Interesados (requisitos de stakeholders)

---

### 3. Cronograma
**Propósito**: Planificar la dimensión temporal del proyecto.

**Genera**: Cronograma del Proyecto (Gantt), Lista de Hitos, Diagrama de Red, Calendario del Proyecto, Camino Crítico.

**Formato típico**: `.csv` (datos tabulares para Gantt)

**Usa salidas de**: Alcance (paquetes de trabajo), Recursos (disponibilidad)

---

### 4. Finanzas
**Propósito**: Gestionar aspectos económicos del proyecto.

**Genera**: Presupuesto, Análisis Costo-Beneficio, Flujo de Caja, Análisis del Valor Ganado (EVM), Métricas financieras (ROI, VAN, TIR).

**Formato típico**: `.csv` (presupuestos y métricas)

**Usa salidas de**: Alcance (paquetes a costear), Cronograma (distribución temporal), Recursos (tasas), Riesgo (reservas)

---

### 5. Interesados
**Propósito**: Identificar, analizar y gestionar stakeholders.

**Genera**: Registro de Interesados, Matriz Poder/Interés, Plan de Gestión de Interesados, Plan de Comunicaciones, Matriz de Comunicaciones.

**Formato típico**: `.csv` (registro y matrices)

**Usa salidas de**: Gobernanza (stakeholders iniciales del Acta)

---

### 6. Recursos
**Propósito**: Planificar y gestionar recursos humanos y materiales.

**Genera**: Plan de Gestión de Recursos, Matriz RACI, Organigrama del Proyecto, Calendario de Recursos, Plan de Desarrollo del Equipo.

**Formato típico**: `.csv` (RACI y calendario), `.json` (organigrama jerárquico)

**Usa salidas de**: Alcance (roles necesarios), Cronograma (necesidades temporales)

---

### 7. Riesgo
**Propósito**: Gestionar amenazas y oportunidades.

**Genera**: Registro de Riesgos, Matriz de Probabilidad e Impacto, Plan de Respuesta a Riesgos, Análisis de Oportunidades, Cálculo de Reservas.

**Formato típico**: `.csv` (registro de riesgos y matrices)

**Usa salidas de**: Todos los dominios (cada dominio tiene riesgos asociados)

---

### 8. Ágil
**Propósito**: Generar artefactos para enfoques ágiles e híbridos.

**Genera**: Product Backlog, Historias de Usuario, Sprint Backlog, Definition of Done, Burndown Chart, Velocity, Product Roadmap, Retrospective Notes.

**Formato típico**: `.csv` (backlogs y métricas), `.md` (historias y retrospectivas)

**Alternativa a**: Alcance tradicional (backlog vs WBS), Cronograma tradicional (sprints vs Gantt)

---

## Flujo de Dependencias

Los skills se ejecutan en un flujo natural:

```
┌─────────────┐
│ Gobernanza  │ (Autorización)
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ Interesados │ (Identificación)
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Alcance   │ (Definición)  ←──→  ┌────────┐
└──────┬──────┘                     │  Ágil  │ (Alternativa)
       │                             └────────┘
       ▼
┌─────────────┐
│ Cronograma  │ (Temporalización)
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Finanzas   │ (Presupuestación)
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Recursos   │ (Asignación)
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Riesgo    │ (Análisis)
└─────────────┘
```

---

## Formatos de Salida

El sistema optimiza los formatos según el tipo de información:

| Tipo de Información | Formato | Razón |
|---------------------|---------|-------|
| Tablas, registros, matrices | `.csv` | Fácil filtrado, ordenamiento, análisis |
| Estructuras jerárquicas | `.json` | WBS, organigramas, estructuras anidadas |
| Documentos narrativos | `.md` | Actas, planes, informes, documentación |

**Principio**: Minimizar tokens, maximizar utilidad.

---

## Enfoques de Ciclo de Vida

Los skills se adaptan según el enfoque del proyecto:

### Predictivo (Cascada)
- Documentación completa y detallada desde el inicio
- WBS exhaustiva, Gantt detallado, presupuesto preciso
- Control de cambios formal
- Todos los dominios PMBOK tradicionales

### Ágil
- Artefactos livianos y adaptativos
- Product Backlog en lugar de WBS
- Sprints en lugar de Gantt
- Skill Ágil como principal

### Iterativo/Incremental
- Documentación evolutiva
- Refinamiento progresivo por iteración
- Balance entre planificación y adaptación

### Híbrido
- Combina elementos de predictivo y ágil
- Planificación predictiva + desarrollo ágil
- Gobernanza tradicional + entregas iterativas

---

## Principios PMBOK 8

Todos los skills están alineados con los 6 principios fundamentales:

1. **Adoptar una Visión Holística** - Considerar el proyecto como sistema integrado
2. **Enfocarse en el Valor** - Cada entregable aporta valor medible
3. **Integrar la Calidad** - Calidad embebida en procesos y entregables
4. **Liderazgo Responsable** - Toma de decisiones éticas y documentadas
5. **Integrar Sostenibilidad** - Considerar impactos ambientales, sociales y económicos
6. **Construir Cultura Empoderada** - Fomentar equipos colaborativos

---

## Archivos Relacionados

- **[SKILL.md](SKILL.md)** - Configuración del skill para Claude Code
- **[agent.md](agent.md)** - Lógica del agente coordinador principal
- **[skills/](skills/)** - Documentación detallada de cada skill (RECOMENDADO)
- **[subagents/](subagents/)** - Implementación operacional de agentes
- **[references/](references/)** - Plantillas y guías de referencia por dominio

---

## Cómo Usar Este Sistema

### Para generar un artefacto específico:
1. Consulta la tabla de índice para identificar el skill apropiado
2. Lee la documentación detallada en [skills/nombre-del-skill.md](skills/)
3. Revisa las plantillas en `references/[dominio]/plantillas/`
4. El agente coordinador orquestará la generación

### Para planificar un proyecto completo:
1. Inicia con **Gobernanza** (Acta de Constitución)
2. Identifica **Interesados** clave
3. Define **Alcance** (WBS) o usa **Ágil** (Product Backlog)
4. Planifica **Cronograma**, **Finanzas** y **Recursos**
5. Analiza **Riesgos** y define respuestas

### Para proyectos ágiles:
1. Inicia con **Gobernanza** (Visión del producto)
2. Identifica **Interesados** (Product Owner, stakeholders)
3. Genera **Ágil** (Product Backlog con historias de usuario)
4. Planifica **Finanzas** (presupuesto por sprint/release)
5. Define **Recursos** (equipo Scrum) y **Riesgo** (impedimentos)

---

## Documentación Completa

Para información exhaustiva de cada skill, incluyendo:
- Proceso detallado de generación
- Técnicas y metodologías específicas
- Ejemplos completos de cada artefacto
- Métricas de calidad
- Errores comunes a evitar
- Fórmulas y cálculos

**Visita**: [skills/README.md](skills/README.md) - Índice completo de documentación

---

**Versión del Sistema**: PMBOK 8 (PMI)
**Última actualización**: 2026-01-28
