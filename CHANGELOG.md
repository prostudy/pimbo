# Changelog

Todos los cambios notables a este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

## [Unreleased]

### Planeado
- Soporte para OpenAI GPT-4
- Exportación a Word/Excel
- Integración con Jira/Asana
- Templates adicionales por industria

---

## [1.0.0] - 2026-01-28

### 🎉 Release Inicial

Primera versión pública de PimBo - Agente de IA para generación de documentación PMBOK 8.

### ✨ Added

#### Sistema Multi-Agente
- Agente coordinador principal (`agent.md`)
- 8 subagentes especializados por dominio PMBOK 8:
  - `gobernanza-agent.md` - Autorización y supervisión
  - `alcance-agent.md` - Definición de entregables
  - `cronograma-agent.md` - Planificación temporal
  - `finanzas-agent.md` - Gestión económica
  - `interesados-agent.md` - Gestión de stakeholders
  - `recursos-agent.md` - Gestión de recursos
  - `riesgo-agent.md` - Gestión de incertidumbre
  - `agile-agent.md` - Artefactos ágiles

#### Documentación
- 3,357 líneas de documentación detallada en `/skills/`
- Documentación individual por cada skill (260-520 líneas c/u)
- README principal del proyecto
- Guía de inicio rápido
- Documentación de interfaces
- Plantillas de referencia para cada dominio

#### Interfaces de Usuario
- **Interfaz Web HTML** (`index.html`)
  - Formulario visual completo
  - 4 plantillas rápidas (CRM, ERP, App Móvil, Cloud)
  - Validación en tiempo real
  - Generación y copia de prompt
  - 11 artefactos seleccionables

- **CLI Interactivo** (`cli-interactive.sh`)
  - Script bash con prompts paso a paso
  - Colores y formato amigable
  - Selección múltiple de artefactos
  - Guardado automático de prompt

- **Streamlit App** (`streamlit_app.py`)
  - Aplicación web Python
  - Widgets interactivos
  - Sistema de tabs organizado
  - Descarga de configuración JSON
  - Métricas visuales

#### Artefactos PMBOK 8
Capacidad para generar 28+ tipos de artefactos:

**Fase de Inicio:**
- Acta de Constitución del Proyecto
- Registro de Interesados
- Business Case
- Visión del Producto (Ágil)

**Fase de Planificación:**
- WBS (JSON)
- Diccionario WBS
- Cronograma Gantt (CSV)
- Presupuesto (CSV)
- Registro de Riesgos (CSV)
- Plan de Comunicaciones
- Matriz RACI (CSV)
- Product Backlog (CSV)
- Historias de Usuario

**Fase de Ejecución:**
- Sprint Backlogs
- Informes de Avance
- Solicitudes de Cambio

**Fase de Monitoreo:**
- Análisis de Valor Ganado (EVM)
- Informes de Desempeño

**Fase de Cierre:**
- Lecciones Aprendidas
- Informe de Cierre

#### Soporte Multi-Proveedor
- Claude AI (Anthropic) - Narrativa y análisis
- Gemini (Google) - Datos estructurados
- Instrucciones optimizadas por proveedor

#### Configuración
- `SKILL.md` - Configuración para Claude Code
- `config-salidas.md` - Optimización de formatos
- `skills.md` - Índice ejecutivo de capacidades

### 🔧 Características Técnicas

#### Optimización de Formato
- CSV para registros y matrices (70% menos tokens)
- JSON para estructuras jerárquicas
- Markdown para documentos narrativos

#### Adaptabilidad
- Soporte para enfoques Predictivos
- Soporte para enfoques Ágiles
- Soporte para enfoques Híbridos
- Soporte para enfoques Iterativos

#### Arquitectura
- Sistema modular con separación de concerns
- Skills (documentación) vs Subagents (implementación)
- Referencias y plantillas organizadas por dominio
- Providers para multi-IA

### 📚 Documentación

#### Guías de Usuario
- `README.md` - Documentación principal
- `INICIO-RAPIDO.md` - Guía de 2 minutos
- `interface/README.md` - Documentación de interfaces
- `skills/README.md` - Índice de skills

#### Guías de Contribución
- `CONTRIBUTING.md` - Guía de contribución completa
- `CODE_OF_CONDUCT.md` - Código de conducta
- Issue templates para bugs, features, preguntas
- Pull request template

#### Documentación Técnica
- 8 archivos de skills detallados
- 8 archivos de subagents operacionales
- Plantillas de referencia por dominio

### 🎨 Diseño

#### Interfaz Web
- Diseño moderno con gradientes
- Cards interactivas para artefactos
- Formulario con validación
- Responsive design
- Color scheme consistente (azul-violeta)

#### UX
- Plantillas rápidas para inicio fácil
- Ayuda contextual en campos
- Feedback visual claro
- Copia con un click
- Navegación intuitiva

### 📦 Plantillas Incluidas

1. **CRM de Ventas**
   - Sistema de gestión de clientes
   - Objetivo: Incrementar ventas 15%

2. **Sistema ERP**
   - Planificación de recursos empresariales
   - Objetivo: Reducir costos 20%

3. **App Móvil**
   - Aplicación iOS/Android
   - Objetivo: Capturar 40% mercado digital

4. **Infraestructura Cloud**
   - Migración a AWS/Azure
   - Objetivo: Reducir costos 30%

### 🌍 Internacionalización
- Documentación en español
- Código y comentarios en español
- Preparado para múltiples idiomas

### ⚡ Rendimiento
- Interfaz web sin dependencias (carga instantánea)
- Generación de prompt optimizada
- Minimización de tokens en outputs

### 🔐 Seguridad
- Licencia MIT open source
- Sin recolección de datos
- Ejecución 100% local
- No requiere autenticación

---

## Tipos de Cambios

- `Added` - Para funcionalidades nuevas
- `Changed` - Para cambios en funcionalidad existente
- `Deprecated` - Para funcionalidades que serán removidas
- `Removed` - Para funcionalidades removidas
- `Fixed` - Para corrección de bugs
- `Security` - Para vulnerabilidades de seguridad

---

## Versionado

Este proyecto usa [Semantic Versioning](https://semver.org/):

- **MAJOR** version - Cambios incompatibles de API
- **MINOR** version - Funcionalidades nuevas compatibles
- **PATCH** version - Bug fixes compatibles

---

## Links

- [Unreleased]: https://github.com/tu-usuario/pimbo/compare/v1.0.0...HEAD
- [1.0.0]: https://github.com/tu-usuario/pimbo/releases/tag/v1.0.0

---

**Formato**: Keep a Changelog 1.0.0
**Versionado**: Semantic Versioning 2.0.0
