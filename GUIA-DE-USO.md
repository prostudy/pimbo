# Guía de Uso del Sistema de Agentes PMBOK 8
## Para Participantes del Diplomado en Administración de Proyectos

---

## Introducción

Este sistema de agentes ha sido diseñado para asistir a los participantes del diplomado en la generación automática de artefactos de gestión de proyectos. El sistema está completamente alineado con el PMBOK 8 del Project Management Institute (PMI) y soporta enfoques predictivos, ágiles e híbridos.

Con este sistema, usted podrá generar documentación profesional de proyectos simplemente proporcionando el requerimiento, la justificación y la fase del ciclo de vida en que se encuentra su proyecto.

---

## Estructura del Sistema

El sistema está organizado en la siguiente estructura de carpetas:

```
pmbok8-agents-system/
│
├── SKILL.md                 → Archivo de configuración principal
├── agent.md                 → Agente coordinador que orquesta el proceso
├── skills.md                → Descripción de capacidades del sistema
│
├── subagents/               → Agentes especializados por dominio
│   ├── gobernanza-agent.md
│   ├── alcance-agent.md
│   ├── cronograma-agent.md
│   ├── finanzas-agent.md
│   ├── interesados-agent.md
│   ├── recursos-agent.md
│   ├── riesgo-agent.md
│   └── agile-agent.md
│
└── references/              → Plantillas y guías de referencia
    ├── gobernanza/plantillas/
    ├── alcance/plantillas/
    ├── cronograma/plantillas/
    ├── finanzas/plantillas/
    ├── interesados/plantillas/
    ├── recursos/plantillas/
    ├── riesgo/plantillas/
    └── agile/plantillas/
```

---

## Cómo Utilizar el Sistema

### Paso 1: Defina su Proyecto

Antes de generar cualquier artefacto, prepare la siguiente información:

El nombre del proyecto debe ser descriptivo y único.

El requerimiento del proyecto describe qué necesita lograr el proyecto, qué problema resuelve o qué oportunidad aprovecha.

La justificación o caso de negocio explica por qué es importante realizar este proyecto, cuáles son los beneficios esperados.

La fase actual del ciclo de vida indica en qué momento se encuentra el proyecto: Inicio, Planificación, Ejecución, Monitoreo y Control, o Cierre.

El enfoque de desarrollo puede ser Predictivo (cascada tradicional), Ágil (Scrum, Kanban, etc.) o Híbrido (combinación de ambos).

### Paso 2: Solicite los Artefactos

Proporcione la información de su proyecto en formato de solicitud. A continuación se presenta un ejemplo:

```
PROYECTO: Sistema de Gestión de Inventarios para Almacén Central

REQUERIMIENTO: 
Implementar un sistema de software que permita el control en tiempo real 
del inventario del almacén central, incluyendo entradas, salidas, 
ubicaciones y alertas de reabastecimiento.

JUSTIFICACIÓN:
El almacén actualmente pierde $50,000 mensuales por desabasto y exceso 
de inventario debido a falta de visibilidad. Se espera reducir estas 
pérdidas en un 60% y mejorar la rotación de inventario en 25%.

FASE ACTUAL: Inicio

ENFOQUE: Híbrido (planificación predictiva, desarrollo ágil)

ARTEFACTOS REQUERIDOS:
- Acta de Constitución del Proyecto
- Registro de Interesados inicial
- Product Backlog de alto nivel
```

### Paso 3: El Sistema Genera los Artefactos

Según la fase y el enfoque indicados, el sistema activará los subagentes correspondientes y generará los artefactos solicitados utilizando las plantillas del directorio references.

---

## Artefactos Disponibles por Fase

### Fase de Inicio

Los artefactos típicos de esta fase incluyen el Acta de Constitución del Proyecto como documento de autorización formal del proyecto, el Registro de Interesados inicial para identificar a quiénes afecta o son afectados por el proyecto, y los Riesgos de Alto Nivel con la identificación preliminar de riesgos principales. Para proyectos ágiles se incluyen adicionalmente la Visión del Producto y el Product Backlog inicial.

### Fase de Planificación

En esta fase se generan el Plan de Gestión del Proyecto como documento maestro que integra todos los planes subsidiarios, la Estructura de Desglose del Trabajo (WBS) con la descomposición jerárquica de todo el trabajo del proyecto, el Diccionario de la WBS con las descripciones detalladas de cada paquete de trabajo, el Cronograma del Proyecto con el modelo de programación de actividades, el Presupuesto del Proyecto con la estimación y distribución de costos, el Registro de Riesgos completo con la identificación, análisis y respuestas planificadas, la Matriz RACI con la asignación de responsabilidades por rol, y el Plan de Comunicaciones que define qué, cuándo, cómo y a quién comunicar. Para proyectos ágiles se generan además el Product Backlog refinado, la Definition of Done y el Roadmap de Releases.

### Fase de Ejecución

Durante la ejecución se generan las Solicitudes de Cambio cuando se requieran modificaciones al alcance aprobado, el Registro de Lecciones Aprendidas para capturar lo que funciona y lo que no, y las Actualizaciones de estado para el Registro de Riesgos. En proyectos ágiles se añaden los Sprint Backlogs y los Burndown Charts por sprint.

### Fase de Monitoreo y Control

Los artefactos de esta fase incluyen los Informes de Estado del Proyecto con el resumen ejecutivo del avance, el Análisis de Valor Ganado con las métricas de desempeño de costo y cronograma, los Informes de Variación con el análisis de desviaciones y acciones correctivas, y las Actualizaciones a Planes que reflejan los cambios aprobados.

### Fase de Cierre

Para el cierre del proyecto se generan el Informe de Cierre del Proyecto que documenta los resultados finales y lecciones aprendidas, la Aceptación Formal de Entregables con la evidencia de que los productos fueron aceptados, y el Archivo del Proyecto con la compilación ordenada de toda la documentación.

---

## Dominios de Desempeño PMBOK 8

El PMBOK 8 organiza la gestión de proyectos en siete dominios de desempeño, cada uno cubierto por un subagente especializado.

El dominio de Gobernanza se enfoca en la supervisión, autorización y control del proyecto. El subagente correspondiente genera Actas de Constitución, Registros de Decisiones y Planes de Gestión de Cambios.

El dominio de Alcance define qué trabajo está incluido y excluido del proyecto. Su subagente genera WBS, Diccionarios de WBS, Enunciados de Alcance y Matrices de Trazabilidad de Requisitos.

El dominio de Cronograma gestiona la dimensión temporal del proyecto. El subagente genera Cronogramas, Listas de Hitos, Diagramas de Red y Calendarios del Proyecto.

El dominio de Finanzas maneja los aspectos económicos del proyecto. Su subagente genera Presupuestos, Análisis Costo-Beneficio, Flujos de Caja y configuraciones de Valor Ganado.

El dominio de Interesados gestiona el compromiso de los stakeholders. El subagente genera Registros de Interesados, Matrices Poder/Interés, Planes de Gestión de Interesados y Planes de Comunicaciones.

El dominio de Recursos planifica los recursos humanos y materiales. Su subagente genera Planes de Gestión de Recursos, Matrices RACI, Organigramas y Calendarios de Recursos.

El dominio de Riesgo gestiona la incertidumbre del proyecto. El subagente genera Registros de Riesgos, Matrices de Probabilidad e Impacto y Planes de Respuesta a Riesgos.

Adicionalmente, el subagente Ágil complementa los dominios tradicionales generando Product Backlogs, Historias de Usuario, Sprint Backlogs, Definitions of Done, Burndown Charts y cálculos de Velocity.

---

## Principios PMBOK 8

Todos los artefactos generados están alineados con los seis principios fundamentales del PMBOK 8:

Adoptar una Visión Holística implica considerar el proyecto como un sistema integrado donde las decisiones en un área afectan a las demás.

Enfocarse en el Valor significa que cada artefacto y actividad debe contribuir al valor que el proyecto entrega a sus interesados.

Integrar la Calidad indica que la calidad no es algo que se verifica al final sino que se construye durante todo el proceso.

Liderazgo Responsable implica tomar decisiones éticas, transparentes y que consideren el impacto en todas las partes.

Integrar Sostenibilidad requiere considerar los impactos ambientales, sociales y económicos en las decisiones del proyecto.

Construir Cultura Empoderada significa fomentar equipos autónomos, colaborativos y comprometidos con los resultados.

---

## Recomendaciones de Uso

Para obtener los mejores resultados del sistema, sea específico en su solicitud proporcionando toda la información relevante sobre su proyecto.

Indique claramente la fase del ciclo de vida en que se encuentra, ya que los artefactos varían significativamente según la fase.

Especifique el enfoque de desarrollo porque los artefactos ágiles difieren de los predictivos.

Utilice las plantillas como base personalizando los artefactos generados según las necesidades específicas de su organización y proyecto.

Mantenga la consistencia entre los artefactos generados, ya que están diseñados para integrarse entre sí.

---

## Ejemplo Completo

A continuación se presenta un ejemplo de solicitud completa:

```
PROYECTO: Renovación del Portal Web Corporativo

REQUERIMIENTO:
Rediseñar completamente el portal web corporativo para mejorar la experiencia 
del usuario, actualizar la imagen de marca y agregar funcionalidades de 
autoservicio para clientes que permitan consultar estados de cuenta, realizar 
pagos y abrir tickets de soporte.

JUSTIFICACIÓN:
El portal actual tiene más de 8 años de antigüedad, no es responsive y 
genera más de 500 llamadas mensuales al call center por consultas que 
podrían resolverse en línea. Se estima reducir las llamadas en 40% 
(ahorro de $25,000/mes) e incrementar la satisfacción del cliente de 
72% a 85% según la encuesta NPS.

FASE ACTUAL: Planificación

ENFOQUE: Ágil (Scrum)

ARTEFACTOS REQUERIDOS:
1. Product Backlog con épicas e historias de usuario priorizadas
2. Registro de Interesados
3. Registro de Riesgos
4. Plan de Comunicaciones
5. Definition of Done

INFORMACIÓN ADICIONAL:
- Duración estimada: 6 meses
- Presupuesto aprobado: $180,000
- Equipo: 1 Product Owner, 1 Scrum Master, 4 desarrolladores, 1 diseñador UX
- Sprints de 2 semanas
```

Con esta información, el sistema generará los cinco artefactos solicitados utilizando las plantillas correspondientes y adaptándolos al contexto ágil del proyecto.

---

## Soporte

Si tiene preguntas sobre el uso del sistema o necesita artefactos adicionales no contemplados, consulte con el instructor del diplomado.

---

*Sistema desarrollado alineado con el PMBOK 8 del Project Management Institute (PMI).*
*Versión 1.0 - Enero 2026*
