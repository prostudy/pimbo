# 🚀 PimBo - Markdown-Driven Agent System

<div align="center">

![PimBo Logo](https://img.shields.io/badge/PimBo-AI%20Project%20Manager-blueviolet?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzY2N2VlYSIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjQwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPvCfmoA8L3RleHQ+PC9zdmc+)

**Un sistema de agentes especializados implementado mediante archivos de configuración en lenguaje natural (Markdown) que, al ser interpretados por un LLM, inducen comportamientos de agente específicos sin requerir código ejecutable tradicional.**

Genera artefactos profesionales de gestión de proyectos basados en PMBOK 8 en segundos

**"PimBo: El 'kit de conocimiento experto' que convierte tu IA favorita en un director de proyectos certificado, sin instalar nada."**  



[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PMBOK 8](https://img.shields.io/badge/PMBOK-8-blue)](https://www.pmi.org/pmbok-guide-standards)
[![Claude AI](https://img.shields.io/badge/Powered%20by-Claude%20AI-orange)](https://claude.ai)
[![Version](https://img.shields.io/badge/version-1.0.0-green.svg)](https://github.com/tu-usuario/pimbo/releases)

[Características](#-características-principales) •
[Demo](#-demo-rápida) •
[Instalación](#-instalación) •
[Documentación](#-documentación) •
[Contribuir](#-contribuir)

</div>

---

## 📋 Índice

- [Sobre el Proyecto](#-sobre-el-proyecto)
- [Características Principales](#-características-principales)
- [Artefactos que Genera](#-artefactos-que-genera)
- [Demo Rápida](#-demo-rápida)
- [Instalación](#-instalación)
- [Inicio Rápido](#-inicio-rápido)
- [Interfaces Disponibles](#-interfaces-disponibles)
- [Arquitectura](#-arquitectura)
- [Documentación](#-documentación)
- [Casos de Uso](#-casos-de-uso)
- [Roadmap](#-roadmap)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)
- [Créditos](#-créditos)

---

## 🎯 Sobre el Proyecto

### ¿Qué es PimBo?

**PimBo** es un sistema de agentes de IA especializados que automatiza la generación de documentación de gestión de proyectos siguiendo los estándares del **PMBOK® 8** (Project Management Body of Knowledge) del Project Management Institute (PMI).

No es software que instalas, es como un 'manual de instrucciones experto' que le enseñas a una inteligencia artificial a generar documentación profesional de proyectos. Son archivos de texto que, cuando  los lee Claude o ChatGPT, transforman la IA en un especialista certificado en gestión de proyectos que crea tus documentos automáticamente

Un framework de **agentes especializados** basado en prompts estructurados que implementa un sistema multi-agente mediante configuración declarativa en Markdown, donde un **LLM host** interpreta diferentes conjuntos de instrucciones para simular agentes con responsabilidades específicas del dominio PMBOK 8.

### ¿Qué problema resuelve?

Los directores de proyectos y equipos dedican **30-40% de su tiempo** a crear documentación:
- ❌ Actas de constitución
- ❌ Estructuras de desglose de trabajo (WBS)
- ❌ Cronogramas y presupuestos
- ❌ Registros de riesgos e interesados
- ❌ Planes de gestión diversos

### Analogía
"Imagina que tienes un asistente virtual como ChatGPT, pero no sabe nada de gestión de proyectos. PimBo es como darle un doctorado instantáneo.                                                                   
                                                                                                                                                                                                                    
  No instalas nada. No hay código que ejecutar. Son simplemente archivos de texto (como recetas de cocina) que contienen todo el conocimiento experto del PMBOK - el estándar mundial de gestión de proyectos.      
                                                                                                                                                                                                                    
  Cuando la IA lee estos archivos, 'sabe' exactamente cómo crear un Acta de Constitución, un cronograma, un presupuesto, o cualquiera de los 28+ documentos que necesitas para dirigir un proyecto profesionalmente.
                                                                                                                                                                                                                    
  Es como tener un consultor senior de proyectos certificado PMP trabajando para ti, pero que vive dentro de Claude o ChatGPT. Tú solo describes tu proyecto, y la IA - guiada por estas 'instrucciones expertas' - 
  genera toda tu documentación en minutos."   



### La Solución: PimBo

✅ **Genera automáticamente** más de 28 tipos de artefactos PMBOK 8

✅ **En minutos, no días** - Lo que tomaba horas, ahora toma segundos

✅ **Calidad profesional** - Basado en plantillas del PMI

✅ **Adaptable** - Soporta enfoques Predictivos, Ágiles e Híbridos

✅ **Inteligente** - Usa Claude AI para contexto y coherencia


**IMPORTANTE:** No es que la tecnología sea mala, sino que su uso como "muleta" en lugar de "herramienta" está documentado como un factor que reduce la autonomía intelectual y la actividad cerebral.
Por eso PimBo está diseñado como un asistente que acelera tu trabajo, no como un reemplazo de tu juicio profesional. Usa los artefactos generados como punto de partida y adáptalos con tu experiencia y conocimiento del contexto real del proyecto.

---

## 🎯 Probar en NotebookLM
Puedes usar directamente en [NotebookLM](https://notebooklm.google.com/notebook/1be4fd0d-83ee-441d-b6c5-5e8537544f27), sin instalación.


## 🛠️ Instalación

### Requisitos

- **Claude Code** o acceso a **Claude.ai**
- Navegador web moderno (para interfaz web)
- Python 3.8+ (solo para interfaz Streamlit)



### Instalación Rápida

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/pimbo.git
cd pimbo

# 2. ¡Listo! No requiere instalación adicional para interfaz web

# 3. (Opcional) Para interfaz Streamlit
pip install streamlit
```

### Verificación

```bash
# Verificar estructura
ls pmbok8-agents-system/
# Output esperado:
# ├── SKILL.md
# ├── agent.md
# ├── skills/
# ├── subagents/
# ├── references/
# └── interface/
```

---

## 🚀 Inicio Rápido

### Paso 1: Abrir Interfaz

```bash
# Opción A: Interfaz Web
open pmbok8-agents-system/interface/index.html

# Opción B: CLI
cd pmbok8-agents-system/interface/
./cli-interactive.sh

# Opción C: Streamlit
streamlit run pmbok8-agents-system/interface/streamlit_app.py
```

### Paso 2: Configurar Proyecto

1. **Nombre**: Ej. "Sistema CRM para Ventas"
2. **Descripción**: Qué hace el proyecto
3. **Justificación**: Por qué es necesario
4. **Fase**: Inicio / Planificación / Ejecución / Monitoreo / Cierre
5. **Enfoque**: Predictivo / Ágil / Híbrido / Iterativo

### Paso 3: Seleccionar Artefactos

Marca los documentos que necesitas:
- ☑️ Acta de Constitución
- ☑️ WBS
- ☑️ Cronograma
- ☑️ Presupuesto
- ☑️ Registro de Riesgos
- ☑️ Matriz RACI
- ... y más

### Paso 4: Generar

1. Click en **"Generar Prompt"**
2. Copiar el prompt generado
3. Pegar en **Claude Code** o **Claude.ai**
4. Claude genera automáticamente los archivos

### Paso 5: Usar Artefactos

Los archivos se generan en tu directorio:
```
proyecto/
├── PROYECTO-acta-v1.md
├── PROYECTO-wbs-v1.json
├── PROYECTO-cronograma-v1.csv
├── PROYECTO-presupuesto-v1.csv
├── PROYECTO-riesgos-v1.csv
└── ...
```

---

## 💻 Interfaces Disponibles

### 1. Interfaz Web HTML ⭐ (Recomendada)

```bash
open pmbok8-agents-system/interface/index.html
```

**Características**:
- ✅ Sin instalación
- ✅ Visual e intuitiva
- ✅ Plantillas rápidas (CRM, ERP, App Móvil, Cloud)
- ✅ Validación en tiempo real
- ✅ Funciona offline

**Ideal para**: Estudiantes, usuarios no técnicos

### 2. CLI Interactivo 🖥️

```bash
cd pmbok8-agents-system/interface/
./cli-interactive.sh
```

**Características**:
- ✅ Prompts paso a paso
- ✅ Colores y formato amigable
- ✅ Guarda prompt en archivo
- ✅ Copia al portapapeles

**Ideal para**: Power users, automatización

### 3. Streamlit App 📱

```bash
streamlit run pmbok8-agents-system/interface/streamlit_app.py
```

**Características**:
- ✅ Interfaz web Python moderna
- ✅ Widgets interactivos
- ✅ Descarga de configuración JSON
- ✅ Métricas visuales

**Ideal para**: Desarrolladores, personalización avanzada

---

## ✨ Características Principales

### 🤖 Sistema Multi-Agente

```
┌─────────────────────────────────────────────────────────┐
│          Agente Coordinador (agent.md)                  │
│  Orquesta la generación según contexto del proyecto     │
└─────────────────┬───────────────────────────────────────┘
                  │
    ┌─────────────┴─────────────┐
    │                           │
┌───▼────┐  ┌────────┐  ┌──────▼────┐  ┌──────────┐
│Gobern. │  │Alcance │  │Cronograma │  │Finanzas  │
│Agent   │  │Agent   │  │Agent      │  │Agent     │
└────────┘  └────────┘  └───────────┘  └──────────┘
┌────────┐  ┌────────┐  ┌──────────┐  ┌──────────┐
│Interes.│  │Recursos│  │Riesgo    │  │Ágil      │
│Agent   │  │Agent   │  │Agent     │  │Agent     │
└────────┘  └────────┘  └──────────┘  └──────────┘
```

### 📦 8 Dominios de Desempeño PMBOK 8

| Dominio | Artefactos | Formato |
|---------|------------|---------|
| **Gobernanza** | Acta de Constitución, Registro de Decisiones | `.md` |
| **Alcance** | WBS, Requisitos, Matriz de Trazabilidad | `.json`, `.csv` |
| **Cronograma** | Gantt, Hitos, Diagrama de Red | `.csv` |
| **Finanzas** | Presupuesto, ROI, Flujo de Caja, EVM | `.csv` |
| **Interesados** | Registro, Matriz Poder/Interés, Plan Comunicaciones | `.csv` |
| **Recursos** | RACI, Organigrama, Plan de Recursos | `.csv`, `.json` |
| **Riesgo** | Registro de Riesgos, Matriz Prob/Impacto | `.csv` |
| **Ágil** | Product Backlog, Historias de Usuario, Burndown | `.csv`, `.md` |

### 🎨 3 Interfaces de Usuario

1. **Interfaz Web HTML** (Recomendada)
   - Sin instalación, solo abrir en navegador
   - Visual e intuitiva
   - Plantillas rápidas predefinidas

2. **CLI Interactivo**
   - Script bash con prompts paso a paso
   - Ideal para terminal/automatización

3. **Streamlit App**
   - Aplicación web Python
   - Widgets avanzados
   - Personalizable

### 🌍 Multi-Proveedor de IA

```
PimBo soporta múltiples proveedores:
├── Claude (Anthropic)   → Narrativa y análisis
├── Gemini (Google)      → Datos estructurados
└── OpenAI (Futuro)      → Planificado
```

### 📊 Optimización de Formatos

PimBo usa el formato óptimo para cada tipo de información:

- **CSV**: Registros, matrices, cronogramas → Fácil análisis
- **JSON**: Estructuras jerárquicas (WBS, organigramas)
- **Markdown**: Documentos narrativos (Actas, planes)

**Resultado**: Reduce tokens hasta 70% vs mostrar en chat

---

## 📦 Artefactos que Genera

### Fase de Inicio
- ✅ Acta de Constitución del Proyecto
- ✅ Registro de Interesados inicial
- ✅ Business Case / Justificación
- ✅ Visión del Producto (Ágil)

### Fase de Planificación
- ✅ WBS (Estructura de Desglose del Trabajo)
- ✅ Diccionario de la WBS
- ✅ Cronograma del Proyecto (Gantt)
- ✅ Presupuesto detallado
- ✅ Registro de Riesgos
- ✅ Plan de Comunicaciones
- ✅ Matriz RACI
- ✅ Product Backlog (Ágil)

### Fase de Ejecución
- ✅ Sprint Backlogs
- ✅ Informes de Avance
- ✅ Solicitudes de Cambio

### Fase de Monitoreo
- ✅ Análisis de Valor Ganado (EVM)
- ✅ Informes de Desempeño
- ✅ Actualizaciones de riesgos

### Fase de Cierre
- ✅ Lecciones Aprendidas
- ✅ Informe de Cierre

**Total**: 28+ tipos de artefactos

---

## 🎬 Demo Rápida

### Opción 1: Interfaz Web (60 segundos)

```bash
# 1. Abrir interfaz
open pmbok8-agents-system/interface/index.html

# 2. Click en plantilla "CRM de Ventas"

# 3. Seleccionar artefactos:
#    ☑ Acta de Constitución
#    ☑ Registro de Interesados
#    ☑ Product Backlog

# 4. Click "Generar Prompt"

# 5. Copiar y pegar en Claude Code
```

**Resultado**:
```
✓ Archivo generado: SISTEMA-CRM-acta-v1.md
✓ Archivo generado: SISTEMA-CRM-interesados-v1.csv
✓ Archivo generado: SISTEMA-CRM-backlog-v1.csv
```

### Video Demostración

[![PimBo Demo](https://img.youtube.com/vi/DEMO_ID/0.jpg)](https://todopmp.com/wp-content/uploads/2026/01/La_Orquesta_de_IA_pimBo.mp4)

_Próximamente: Video tutorial completo_

---

## 🏗️ Arquitectura

### Estructura del Proyecto

```
pimbo/
├── README.md                          # Este archivo
├── LICENSE                            # Licencia MIT
│
└── pmbok8-agents-system/              # Sistema principal
    ├── SKILL.md                       # Configuración del skill
    ├── agent.md                       # Agente coordinador
    ├── skills.md                      # Índice de skills
    │
    ├── skills/                        # Documentación detallada
    │   ├── README.md
    │   ├── gobernanza.md             # 260 líneas
    │   ├── alcance.md                # 343 líneas
    │   ├── cronograma.md             # 356 líneas
    │   ├── finanzas.md               # 442 líneas
    │   ├── interesados.md            # 413 líneas
    │   ├── recursos.md               # 443 líneas
    │   ├── riesgo.md                 # 482 líneas
    │   └── agile.md                  # 520 líneas
    │
    ├── subagents/                     # Implementación operacional
    │   ├── gobernanza-agent.md
    │   ├── alcance-agent.md
    │   ├── cronograma-agent.md
    │   ├── finanzas-agent.md
    │   ├── interesados-agent.md
    │   ├── recursos-agent.md
    │   ├── riesgo-agent.md
    │   └── agile-agent.md
    │
    ├── references/                    # Plantillas y referencias
    │   ├── gobernanza/plantillas/
    │   ├── alcance/plantillas/
    │   ├── cronograma/plantillas/
    │   ├── finanzas/plantillas/
    │   ├── interesados/plantillas/
    │   ├── recursos/plantillas/
    │   ├── riesgo/plantillas/
    │   └── agile/plantillas/
    │
    ├── interface/                     # Interfaces de usuario
    │   ├── index.html                # Interfaz web
    │   ├── cli-interactive.sh        # CLI
    │   ├── streamlit_app.py          # Streamlit
    │   ├── README.md
    │   └── INICIO-RAPIDO.md
    │
    └── providers/                     # Multi-proveedor IA
        ├── INSTRUCCION-INICIO-CLAUDE.md
        ├── INSTRUCCION-INICIO-GEMINI.md
        └── README.md
```

### Flujo de Ejecución

```
┌──────────────────┐
│ Usuario usa      │
│ Interfaz         │
│ (Web/CLI/Stream) │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ Genera Prompt    │
│ Optimizado       │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ Claude AI        │
│ recibe prompt    │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ agent.md         │
│ (Coordinador)    │
│ Analiza contexto │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ Invoca subagents │
│ según artefactos │
│ solicitados      │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ Subagents        │
│ generan archivos │
│ usando plantillas│
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ Archivos .md     │
│ .csv .json       │
│ listos para usar │
└──────────────────┘
```

---

## 📚 Documentación

### Documentación Principal

- **[Guía de Inicio Rápido](pmbok8-agents-system/interface/INICIO-RAPIDO.md)** - 2 minutos
- **[Documentación de Interfaces](pmbok8-agents-system/interface/README.md)** - Completa
- **[Documentación de Skills](pmbok8-agents-system/skills/README.md)** - Detallada

### Documentación por Skill

Cada skill tiene documentación exhaustiva (260-520 líneas):

- [Gobernanza](pmbok8-agents-system/skills/gobernanza.md)
- [Alcance](pmbok8-agents-system/skills/alcance.md)
- [Cronograma](pmbok8-agents-system/skills/cronograma.md)
- [Finanzas](pmbok8-agents-system/skills/finanzas.md)
- [Interesados](pmbok8-agents-system/skills/interesados.md)
- [Recursos](pmbok8-agents-system/skills/recursos.md)
- [Riesgo](pmbok8-agents-system/skills/riesgo.md)
- [Ágil](pmbok8-agents-system/skills/agile.md)

### Recursos Adicionales

- [PMBOK® Guide 8th Edition](https://www.pmi.org/pmbok-guide-standards)
- [Claude AI Documentation](https://docs.anthropic.com/)
- [Scrum Guide](https://scrumguides.org/)

---

## 🎓 Casos de Uso

### 1. Estudiantes de Gestión de Proyectos

**Problema**: Necesitan crear documentación para casos de estudio pero no tienen experiencia.

**Solución con PimBo**:
```bash
# Genera un proyecto completo en 5 minutos
1. Usa plantilla "Sistema ERP"
2. Selecciona todos los artefactos de planificación
3. Obtiene documentación profesional para su tarea
```

### 2. Director de Proyecto en Startup

**Problema**: Inicio de proyecto urgente, necesita Acta de Constitución para mañana.

**Solución con PimBo**:
```bash
# Genera Acta en 2 minutos
1. Describe el proyecto
2. Selecciona "Acta de Constitución"
3. Revisa y ajusta el documento generado
4. Presenta al sponsor
```

### 3. PMO Corporativo

**Problema**: Estandarizar documentación de 20 proyectos activos.

**Solución con PimBo**:
```bash
# Genera documentación estandarizada
1. Define plantilla corporativa personalizada
2. Usa CLI para batch processing
3. Genera 20 sets completos de documentación
4. Todos siguen el mismo estándar PMBOK 8
```

### 4. Consultor de Gestión de Proyectos

**Problema**: Preparar propuesta para cliente con ejemplos de entregables.

**Solución con PimBo**:
```bash
# Crea portfolio de muestras
1. Genera artefactos para diferentes industrias
2. Muestra capacidades profesionales
3. Cierra venta con ejemplos concretos
```

---

## 🗺️ Roadmap

### ✅ Versión 1.0 (Actual)
- [x] Sistema multi-agente funcional
- [x] 8 dominios PMBOK 8 completos
- [x] 3 interfaces de usuario
- [x] Soporte Claude AI
- [x] Documentación completa (3,357 líneas)

### 🔄 Versión 1.1 (Q1 2026)
- [ ] Soporte para OpenAI GPT-4
- [ ] Templates adicionales (construcción, IT, marketing)
- [ ] Exportación a Word/Excel
- [ ] Integración con Jira/Asana

### 🚀 Versión 2.0 (Q2 2026)
- [ ] Aplicación web standalone (no requiere Claude)
- [ ] Base de datos de proyectos
- [ ] Colaboración en tiempo real
- [ ] API REST para integraciones
- [ ] Análisis de sentimiento de stakeholders
- [ ] Predicción de riesgos con ML

### 💡 Versión 3.0 (Q3 2026)
- [ ] Asistente conversacional integrado
- [ ] Generación de visualizaciones automáticas
- [ ] Integración con Microsoft Project
- [ ] Mobile app (iOS/Android)
- [ ] Marketplace de plantillas comunitarias

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Este proyecto es open source y apreciamos tu ayuda.

### Cómo Contribuir

1. **Fork** el proyecto
2. **Crea** una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add: AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. **Abre** un Pull Request

### Áreas donde Puedes Ayudar

- 📝 **Documentación**: Mejoras, traducciones, ejemplos
- 🎨 **Diseño**: UI/UX de interfaces
- 🐛 **Bug Fixes**: Reportar o resolver issues
- ✨ **Features**: Nuevos artefactos, integraciones
- 🧪 **Testing**: Casos de prueba, validación
- 🌍 **Traducciones**: Inglés, portugués, etc.

### Guías de Contribución

- Lee [CONTRIBUTING.md](CONTRIBUTING.md) para detalles
- Sigue el [Code of Conduct](CODE_OF_CONDUCT.md)
- Usa [Conventional Commits](https://www.conventionalcommits.org/)

---

## 📄 Licencia

Este proyecto está licenciado bajo la **Licencia MIT** - ver el archivo [LICENSE](LICENSE) para detalles.

```
MIT License

Copyright (c) 2026 PimBo Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

### Atribución

- **PMBOK®** es una marca registrada del Project Management Institute, Inc.
- Este proyecto no está afiliado con PMI
- Usa PMBOK 8 como referencia de mejores prácticas

---

## 🙏 Créditos

### Desarrollado por

- **Equipo PimBo** - Desarrollo inicial y arquitectura

### Tecnologías Utilizadas

- [Claude AI](https://claude.ai) - Motor de IA
- [Anthropic](https://anthropic.com) - API de Claude
- [Streamlit](https://streamlit.io) - Interfaz Python
- [PMI PMBOK® 8](https://www.pmi.org/pmbok-guide-standards) - Estándares de PM

### Agradecimientos Especiales

- Project Management Institute (PMI) por los estándares PMBOK
- Anthropic por Claude AI
- Comunidad open source de gestión de proyectos
- Estudiantes del Diplomado en Gestión de Proyectos (usuarios beta)

---

## 📞 Soporte y Contacto

### Obtener Ayuda

- 📖 **Documentación**: [pmbok8-agents-system/interface/README.md](pmbok8-agents-system/interface/README.md)
- 🐛 **Issues**: [GitHub Issues](https://github.com/tu-usuario/pimbo/issues)
- 💬 **Discusiones**: [GitHub Discussions](https://github.com/tu-usuario/pimbo/discussions)
- 📧 **Email**: pimbo-support@tu-dominio.com

### Redes Sociales

- 🐦 **Twitter**: [@PimBoAI](https://twitter.com/PimBoAI)
- 💼 **LinkedIn**: [PimBo Project](https://linkedin.com/company/pimbo)
- 🎥 **YouTube**: [PimBo Tutorials](https://youtube.com/@pimbo)

---

## 📊 Estadísticas del Proyecto

![GitHub stars](https://img.shields.io/github/stars/tu-usuario/pimbo?style=social)
![GitHub forks](https://img.shields.io/github/forks/tu-usuario/pimbo?style=social)
![GitHub issues](https://img.shields.io/github/issues/tu-usuario/pimbo)
![GitHub pull requests](https://img.shields.io/github/issues-pr/tu-usuario/pimbo)

```
📈 Métricas del Proyecto:
├── 3,357 líneas de documentación
├── 8 agentes especializados
├── 28+ tipos de artefactos
├── 3 interfaces de usuario
├── 4 plantillas rápidas
└── 100% compatible con PMBOK 8
```

---

## ⭐ Star History

Si este proyecto te ayuda, ¡dale una estrella! ⭐

[![Star History Chart](https://api.star-history.com/svg?repos=tu-usuario/pimbo&type=Date)](https://star-history.com/#tu-usuario/pimbo&Date)

---

<div align="center">

### 🚀 ¿Listo para empezar?

[📥 Descargar](https://github.com/tu-usuario/pimbo/archive/refs/heads/main.zip) •
[📖 Documentación](pmbok8-agents-system/interface/README.md) •
[🎬 Demo](pmbok8-agents-system/interface/index.html)

**Hecho con ❤️ para la comunidad de Gestión de Proyectos**

⭐ Si te gusta PimBo, dale una estrella en GitHub ⭐

---

**PimBo** - _Project Implementation Management Bot_
Generación Inteligente de Documentación PMBOK 8

© 2026 PimBo Contributors | MIT License

</div>
