# Skills - Capacidades del Sistema de Agentes PMBOK 8

## Descripción General

Este documento define las capacidades (skills) de cada subagente del sistema. Cada skill representa un conjunto de conocimientos y procedimientos especializados para generar artefactos de gestión de proyectos según el PMBOK 8.

---

## Skill: Gobernanza

**Propósito:** Generar documentos de autorización, supervisión y control del proyecto.

**Artefactos que produce:**

El subagente de gobernanza genera el Acta de Constitución del Proyecto (Project Charter), que autoriza formalmente el proyecto e incluye objetivos, alcance de alto nivel, supuestos, restricciones y autoridad del director del proyecto. También produce el Registro de Decisiones, documento que captura decisiones clave del proyecto con su fecha, responsable, contexto y resultado. Adicionalmente genera el Plan de Gestión de Cambios, que define el proceso para solicitar, evaluar y aprobar cambios al proyecto, así como los Criterios de Éxito del Proyecto, métricas específicas que determinan si el proyecto cumplió sus objetivos.

**Proceso de generación:**

Para generar estos artefactos, el subagente primero analiza el requerimiento y justificación del proyecto para extraer objetivos, alcance preliminar y restricciones. Luego identifica a los interesados principales y sus expectativas. Posteriormente estructura el documento según la plantilla del dominio de gobernanza. Finalmente valida que el artefacto cubra todos los elementos requeridos por PMBOK 8.

**Plantilla ubicada en:** `references/gobernanza/plantillas/`

---

## Skill: Alcance

**Propósito:** Definir y documentar qué incluye y qué excluye el proyecto.

**Artefactos que produce:**

El Enunciado del Alcance describe en detalle los entregables del proyecto, criterios de aceptación y exclusiones explícitas. La Estructura de Desglose del Trabajo (WBS) descompone jerárquicamente el trabajo total del proyecto en componentes manejables. El Diccionario de la WBS proporciona descripciones detalladas de cada paquete de trabajo de la WBS. La Matriz de Trazabilidad de Requisitos vincula requisitos con su origen, estado y entregable asociado. Finalmente, el Documento de Requisitos lista y describe todos los requisitos del proyecto con su prioridad y estado.

**Proceso de generación:**

El subagente inicia identificando los entregables principales del proyecto. Luego descompone cada entregable en paquetes de trabajo usando el principio de descomposición hasta alcanzar un nivel manejable (regla del 8/80). Posteriormente documenta cada paquete en el diccionario con su descripción, criterios de aceptación y responsable. Finalmente valida completitud contra la justificación del proyecto.

**Niveles de la WBS:**
- Nivel 1: Proyecto
- Nivel 2: Fases o entregables principales
- Nivel 3: Componentes
- Nivel 4: Paquetes de trabajo

**Plantilla ubicada en:** `references/alcance/plantillas/`

---

## Skill: Cronograma

**Propósito:** Planificar y representar la dimensión temporal del proyecto.

**Artefactos que produce:**

El Cronograma del Proyecto representa gráficamente las actividades, su duración y secuencia mediante un diagrama de Gantt. La Lista de Hitos identifica los eventos clave del proyecto con sus fechas objetivo. El Diagrama de Red muestra las dependencias entre actividades usando el método del camino crítico. El Calendario del Proyecto define los días y horarios laborables, festivos y restricciones de recursos. El Plan de Gestión del Cronograma establece las políticas y procedimientos para desarrollar y controlar el cronograma.

**Proceso de generación:**

El proceso inicia importando los paquetes de trabajo de la WBS generada por el skill de alcance. Luego estima la duración de cada actividad usando técnicas de estimación análoga, paramétrica o de tres puntos. Posteriormente identifica dependencias entre actividades del tipo fin-inicio, inicio-inicio, fin-fin e inicio-fin. Aplica el método del camino crítico para identificar la ruta más larga y calcula las holguras de las actividades no críticas. Finalmente genera la representación gráfica en formato apropiado.

**Técnicas de estimación:**
- Análoga: Basada en proyectos similares anteriores
- Paramétrica: Usando relaciones estadísticas
- Tres puntos: (Optimista + 4×Más probable + Pesimista) / 6

**Plantilla ubicada en:** `references/cronograma/plantillas/`

---

## Skill: Finanzas

**Propósito:** Gestionar los aspectos económicos del proyecto.

**Artefactos que produce:**

El Presupuesto del Proyecto detalla los costos estimados por categoría y período, incluyendo reservas para contingencias. El Análisis Costo-Beneficio evalúa la viabilidad financiera comparando costos totales contra beneficios esperados. El Flujo de Caja proyecta las entradas y salidas de efectivo a lo largo del proyecto. El Plan de Gestión de Costos define cómo se estimarán, presupuestarán y controlarán los costos. El Análisis del Valor Ganado proporciona métricas de desempeño como CPI y SPI durante la ejecución.

**Proceso de generación:**

El subagente inicia estimando costos por paquete de trabajo de la WBS. Luego agrega los costos en categorías tales como personal, materiales, servicios y equipos. Posteriormente calcula reservas de contingencia basadas en el análisis de riesgos, típicamente entre 5% y 15%. Desarrolla el flujo de caja alineado con el cronograma. Finalmente calcula métricas financieras como ROI, VAN y TIR si se requiere análisis de viabilidad.

**Métricas clave:**
- ROI = (Beneficio - Costo) / Costo × 100
- VAN = Valor presente de flujos futuros - Inversión inicial
- Período de recuperación = Tiempo para recuperar la inversión

**Plantilla ubicada en:** `references/finanzas/plantillas/`

---

## Skill: Interesados

**Propósito:** Identificar, analizar y planificar el compromiso de los stakeholders.

**Artefactos que produce:**

El Registro de Interesados identifica a todas las personas y organizaciones que pueden afectar o ser afectadas por el proyecto, incluyendo su información de contacto, rol, interés e influencia. La Matriz Poder/Interés clasifica a los interesados en cuadrantes para definir estrategias de gestión diferenciadas. El Plan de Gestión de Interesados documenta las estrategias para incrementar el apoyo y reducir resistencias. El Plan de Comunicaciones define qué información se compartirá con quién, cuándo, cómo y con qué frecuencia. La Matriz de Comunicaciones especifica los canales, formatos y responsables de cada tipo de comunicación.

**Proceso de generación:**

El proceso comienza identificando a todos los interesados potenciales del proyecto. Luego analiza el nivel de poder e interés de cada uno para ubicarlos en la matriz. Posteriormente define la estrategia de gestión para cada cuadrante: gestionar de cerca a los de alto poder y alto interés, mantener satisfechos a los de alto poder y bajo interés, mantener informados a los de bajo poder y alto interés, y monitorear a los de bajo poder y bajo interés. Finalmente desarrolla el plan de comunicaciones alineado con las estrategias definidas.

**Cuadrantes de la matriz:**
- Alto Poder / Alto Interés: Gestionar de cerca
- Alto Poder / Bajo Interés: Mantener satisfechos
- Bajo Poder / Alto Interés: Mantener informados
- Bajo Poder / Bajo Interés: Monitorear

**Plantilla ubicada en:** `references/interesados/plantillas/`

---

## Skill: Recursos

**Propósito:** Planificar y gestionar los recursos humanos y materiales del proyecto.

**Artefactos que produce:**

El Plan de Gestión de Recursos define cómo se identificarán, adquirirán, gestionarán y liberarán los recursos del proyecto. La Matriz RACI asigna responsabilidades específicas para cada entregable y actividad usando los roles de Responsable, Aprobador, Consultado e Informado. El Organigrama del Proyecto representa gráficamente la estructura del equipo y líneas de reporte. El Calendario de Recursos muestra la disponibilidad de cada recurso a lo largo del proyecto. El Plan de Desarrollo del Equipo describe las actividades de capacitación y desarrollo de competencias.

**Proceso de generación:**

El subagente inicia identificando los roles necesarios basándose en la WBS y el cronograma. Luego define las responsabilidades de cada rol usando la matriz RACI. Posteriormente estima las cantidades y períodos de necesidad de cada recurso. Identifica las competencias requeridas y compara contra las disponibles para identificar brechas. Finalmente desarrolla el plan de adquisición y desarrollo de recursos.

**Roles RACI:**
- R (Responsible): Quien ejecuta el trabajo
- A (Accountable): Quien aprueba, solo uno por actividad
- C (Consulted): Quien aporta información
- I (Informed): Quien debe conocer el resultado

**Plantilla ubicada en:** `references/recursos/plantillas/`

---

## Skill: Riesgo

**Propósito:** Identificar, analizar y planificar respuestas a la incertidumbre del proyecto.

**Artefactos que produce:**

El Registro de Riesgos documenta todos los riesgos identificados con su descripción, causa, probabilidad, impacto y estado. La Matriz de Probabilidad e Impacto clasifica los riesgos por su severidad para priorizar la atención. El Plan de Respuesta a Riesgos documenta las estrategias y acciones específicas para cada riesgo priorizado. El Plan de Gestión de Riesgos define el enfoque, metodología, roles y umbrales para la gestión de riesgos. El Análisis de Oportunidades identifica eventos positivos potenciales y estrategias para maximizar su probabilidad o impacto.

**Proceso de generación:**

El proceso comienza identificando riesgos mediante técnicas como lluvia de ideas, análisis de supuestos, revisión de lecciones aprendidas y juicio de expertos. Luego realiza análisis cualitativo asignando probabilidad e impacto a cada riesgo. Posteriormente realiza análisis cuantitativo para los riesgos de alta prioridad si se requiere mayor precisión. Define la estrategia de respuesta apropiada: evitar, mitigar, transferir o aceptar para amenazas; explotar, mejorar, compartir o aceptar para oportunidades. Finalmente documenta los disparadores, acciones de respuesta y responsables.

**Estrategias de respuesta a amenazas:**
- Evitar: Eliminar la causa del riesgo
- Mitigar: Reducir probabilidad o impacto
- Transferir: Pasar la responsabilidad a un tercero
- Aceptar: Reconocer el riesgo sin acción proactiva

**Plantilla ubicada en:** `references/riesgo/plantillas/`

---

## Skill: Ágil

**Propósito:** Generar artefactos específicos para enfoques ágiles e híbridos.

**Artefactos que produce:**

El Product Backlog lista ordenada de todo lo que se necesita en el producto, priorizada por valor. Las Historias de Usuario describen funcionalidades desde la perspectiva del usuario en formato "Como [rol], quiero [funcionalidad] para [beneficio]". El Sprint Backlog contiene los elementos seleccionados para el sprint actual con las tareas necesarias. La Definition of Done define los criterios que debe cumplir un elemento para considerarse terminado. El Burndown Chart muestra el trabajo restante a lo largo del tiempo para visualizar el progreso. La Velocity mide la cantidad de trabajo completado por sprint para predecir capacidad futura.

**Proceso de generación:**

El subagente inicia traduciendo los requisitos del proyecto a historias de usuario con criterios de aceptación. Luego prioriza las historias usando técnicas como MoSCoW o valor de negocio versus esfuerzo. Posteriormente estima el tamaño de las historias usando puntos de historia o talla de camiseta. Agrupa las historias en releases y sprints según la velocidad estimada o conocida. Finalmente genera los tableros y gráficos de seguimiento apropiados.

**Formato de historia de usuario:**
```
Como [tipo de usuario]
Quiero [funcionalidad]
Para [beneficio/valor]

Criterios de aceptación:
- [Criterio 1]
- [Criterio 2]
```

**Técnicas de priorización:**
- MoSCoW: Must have, Should have, Could have, Won't have
- Valor/Esfuerzo: Matriz que prioriza alto valor con bajo esfuerzo
- Kano: Clasifica en básico, desempeño y atractivo

**Plantilla ubicada en:** `references/agile/plantillas/`

---

## Integración de Skills

Los skills no operan de forma aislada sino que se integran según las dependencias naturales entre los dominios de desempeño del PMBOK 8.

**Flujo de dependencias:**

El proceso típico inicia con Gobernanza para autorizar el proyecto mediante el Acta de Constitución. Esto habilita a Interesados para identificar y analizar a los stakeholders clave. Con esa información, Alcance define qué se va a entregar. A partir del alcance definido, Cronograma establece cuándo se entregará. Con el cronograma establecido, Finanzas determina cuánto costará. Recursos entonces define quién lo hará y con qué. Finalmente, Riesgo analiza qué podría salir mal o bien y cómo responder.

**Para enfoques ágiles:** El skill Ágil puede ejecutarse en paralelo o como alternativa a los skills de Alcance y Cronograma tradicionales, generando artefactos más livianos y adaptativos.
