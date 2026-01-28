# Documentación de Skills - Sistema PMBOK 8

Esta carpeta contiene la documentación detallada de cada skill especializado del sistema de generación de artefactos de gestión de proyectos.

## Sobre los Skills

Cada skill representa un dominio de desempeño del PMBOK 8 del PMI (Project Management Institute). Los skills trabajan de manera integrada bajo la coordinación del agente principal para generar documentación completa de gestión de proyectos.

## Índice de Skills por Dominio

### Dominios de Desempeño PMBOK 8

| # | Dominio | Archivo | Descripción |
|---|---------|---------|-------------|
| 1 | **Gobernanza** | [gobernanza.md](gobernanza.md) | Autorización, supervisión y toma de decisiones del proyecto |
| 2 | **Alcance** | [alcance.md](alcance.md) | Definición de qué se entrega y qué se excluye del proyecto |
| 3 | **Cronograma** | [cronograma.md](cronograma.md) | Planificación y control temporal del proyecto |
| 4 | **Finanzas** | [finanzas.md](finanzas.md) | Gestión económica, presupuestos y análisis financiero |
| 5 | **Interesados** | [interesados.md](interesados.md) | Identificación y gestión de stakeholders |
| 6 | **Recursos** | [recursos.md](recursos.md) | Planificación y gestión de recursos humanos y materiales |
| 7 | **Riesgo** | [riesgo.md](riesgo.md) | Gestión de incertidumbre, amenazas y oportunidades |

### Framework Complementario

| # | Framework | Archivo | Descripción |
|---|-----------|---------|-------------|
| 8 | **Ágil** | [agile.md](agile.md) | Artefactos específicos para enfoques ágiles e híbridos |

## Estructura de Cada Documento

Cada archivo de skill contiene:

1. **Propósito** - Objetivo del skill y su rol en el sistema
2. **Artefactos que Produce** - Lista completa de entregables generados
3. **Proceso de Generación** - Paso a paso del proceso de creación
4. **Técnicas y Metodologías** - Herramientas específicas utilizadas
5. **Plantillas** - Ubicación de plantillas de referencia
6. **Integración** - Cómo se integra con otros skills

## Flujo de Dependencias

Los skills se ejecutan en un flujo natural de dependencias:

```
Gobernanza (Autorización)
    ↓
Interesados (Identificación)
    ↓
Alcance (Definición)
    ↓
Cronograma (Temporalización) ←→ Ágil (Alternativa)
    ↓
Finanzas (Presupuestación)
    ↓
Recursos (Asignación)
    ↓
Riesgo (Análisis)
```

## Enfoques de Ciclo de Vida

Los skills se adaptan automáticamente según el enfoque del proyecto:

- **Predictivo (Cascada)**: Documentación completa y detallada
- **Iterativo/Incremental**: Documentación evolutiva por iteración
- **Ágil**: Artefactos livianos y adaptativos
- **Híbrido**: Combinación flexible de elementos

## Cómo Usar Esta Documentación

1. **Para generar artefactos**: Consulta el skill específico del dominio requerido
2. **Para entender procesos**: Lee la sección "Proceso de Generación" de cada skill
3. **Para ver ejemplos**: Revisa las plantillas en `references/[dominio]/plantillas/`
4. **Para integración**: Consulta la sección "Integración de Skills" en cada documento

## Archivos Relacionados

- **[../SKILL.md](../SKILL.md)** - Configuración del skill para Claude Code
- **[../skills.md](../skills.md)** - Índice rápido de referencia
- **[../agent.md](../agent.md)** - Lógica del agente coordinador
- **[../subagents/](../subagents/)** - Implementación operacional de agentes
- **[../references/](../references/)** - Plantillas y guías de referencia

## Principios PMBOK 8

Todos los skills están alineados con los 6 principios fundamentales del PMBOK 8:

1. Adoptar una Visión Holística
2. Enfocarse en el Valor
3. Integrar la Calidad
4. Liderazgo Responsable
5. Integrar Sostenibilidad
6. Construir Cultura Empoderada

---

**Versión del Sistema**: PMBOK 8 (PMI)
**Última actualización**: 2026-01-28
