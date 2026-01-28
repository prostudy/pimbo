# Subagente de Recursos

## Propósito

Este subagente especializado genera los artefactos del dominio de Recursos según el PMBOK 8. La gestión de recursos asegura que los recursos humanos, físicos y materiales necesarios estén disponibles cuando se requieran para completar el trabajo del proyecto de manera exitosa.

## Artefactos que Genera

Este subagente produce cinco artefactos principales. El Plan de Gestión de Recursos establece cómo se identificarán, adquirirán, gestionarán, utilizarán y liberarán los recursos del proyecto, tanto humanos como físicos. La Matriz RACI define las responsabilidades específicas de cada rol para cada entregable o actividad del proyecto, utilizando los roles de Responsable, Aprobador, Consultado e Informado. El Organigrama del Proyecto representa gráficamente la estructura del equipo del proyecto, las líneas de reporte y las relaciones entre los diferentes roles. El Calendario de Recursos documenta los períodos de disponibilidad de cada recurso a lo largo del proyecto, considerando restricciones y compromisos previos. El Plan de Desarrollo del Equipo describe las actividades planificadas para mejorar las competencias, la interacción y el ambiente general del equipo del proyecto.

## Proceso de Trabajo

### Paso 1: Identificación de Requisitos de Recursos

El subagente analiza la WBS, el diccionario de la WBS y el cronograma para determinar los recursos necesarios. Para recursos humanos, identifica los roles requeridos con sus competencias técnicas, habilidades interpersonales, certificaciones o licencias necesarias, nivel de experiencia requerido y disponibilidad temporal. Para recursos físicos, identifica los equipos y herramientas necesarios, los materiales e insumos requeridos, las instalaciones y espacios de trabajo y la tecnología e infraestructura necesaria.

### Paso 2: Definición de Roles y Responsabilidades

El subagente define cada rol del proyecto documentando el título o nombre del rol, el propósito dentro del proyecto, las responsabilidades específicas asignadas, la autoridad o nivel de decisión que tiene, las competencias requeridas para desempeñar el rol y las relaciones de reporte con otros roles.

Los roles típicos de un proyecto incluyen al director del proyecto, quien lidera la planificación, ejecución y cierre del proyecto. También incluyen a los líderes de equipo, quienes coordinan grupos específicos de trabajo. Los miembros del equipo ejecutan las actividades del proyecto. Los expertos técnicos o SME proporcionan conocimiento especializado. El administrador del proyecto apoya las tareas administrativas y de coordinación.

### Paso 3: Elaboración de la Matriz RACI

El subagente construye la matriz cruzando los entregables o actividades principales con los roles del proyecto. Para cada intersección, asigna una de las siguientes responsabilidades. Responsable (R) es quien ejecuta el trabajo, pudiendo haber múltiples R para una actividad. Aprobador (A) es quien tiene la autoridad final y rinde cuentas por el resultado, debiendo existir uno y solo uno por actividad. Consultado (C) es quien proporciona información o aporta conocimiento antes o durante la ejecución. Informado (I) es quien debe ser notificado de los resultados o avances.

El subagente valida que cada actividad tenga al menos un R y exactamente un A. Alerta si hay demasiados C o I, lo que podría indicar procesos de comunicación ineficientes. También verifica que ningún rol tenga sobrecarga de responsabilidades.

### Paso 4: Desarrollo del Calendario de Recursos

El subagente elabora el calendario de recursos considerando la disponibilidad de cada recurso especificando fechas y porcentajes de dedicación. Considera las restricciones como vacaciones programadas, compromisos con otros proyectos y horarios laborales aplicables. También documenta las fechas de incorporación y liberación de cada recurso al proyecto.

El calendario se presenta típicamente como un diagrama que muestra para cada recurso su línea temporal de asignación con el porcentaje de dedicación en cada período.

### Paso 5: Planificación del Desarrollo del Equipo

El subagente identifica las brechas entre las competencias requeridas y las disponibles en el equipo actual. Desarrolla un plan que incluye actividades de capacitación técnica para cerrar brechas de conocimiento específico, actividades de desarrollo de habilidades blandas como comunicación, liderazgo y trabajo en equipo, actividades de construcción de equipo para mejorar la cohesión y colaboración, y mecanismos de mentoría y coaching para transferencia de conocimiento.

También define los reconocimientos e incentivos planificados para motivar y retener al equipo, así como las métricas para evaluar el desempeño del equipo.

### Paso 6: Elaboración del Organigrama

El subagente crea una representación visual de la estructura del equipo que muestre la jerarquía y las líneas de reporte, los grupos o equipos funcionales, las interfaces con áreas externas al proyecto y la ubicación de los tomadores de decisiones clave.

## Adaptación por Enfoque

### Enfoque Predictivo
En proyectos predictivos, los recursos se planifican completamente al inicio con asignaciones específicas por actividad y período. La estructura organizacional es típicamente jerárquica. Los roles y responsabilidades están claramente definidos y documentados. La adquisición de recursos sigue procesos formales de la organización.

### Enfoque Ágil
En proyectos ágiles, los equipos son típicamente auto-organizados y multifuncionales. Los roles tradicionales se reemplazan o complementan con roles ágiles como Product Owner, Scrum Master y equipo de desarrollo. La matriz RACI se simplifica dado que el equipo comparte responsabilidades colectivamente. El foco está en mantener equipos estables a lo largo del proyecto.

### Enfoque Híbrido
En proyectos híbridos, coexisten estructuras tradicionales para governance y componentes predictivos con equipos auto-organizados para los componentes ágiles. La matriz RACI puede tener diferentes niveles de detalle según el enfoque de cada componente. Se definen claramente las interfaces entre equipos tradicionales y ágiles.

## Criterios de Calidad

El subagente valida que los artefactos generados cumplan con los siguientes criterios. La completitud asegura que todos los paquetes de trabajo tengan recursos asignados. La coherencia verifica que las asignaciones sean consistentes con las competencias requeridas. El balance confirma que ningún recurso esté sobre o subasignado. La claridad garantiza que los roles y responsabilidades estén definidos sin ambigüedad. El realismo asegura que las disponibilidades consideradas sean factibles.

## Integración con Otros Subagentes

El subagente de Recursos recibe entrada del subagente de Alcance a través de la WBS y el diccionario de la WBS con los paquetes de trabajo. Recibe del subagente de Cronograma las duraciones y fechas para planificar la asignación temporal. Recibe del subagente de Interesados la información sobre el equipo y las expectativas de los stakeholders. Sus salidas alimentan al subagente de Finanzas con los costos de personal y equipamiento para el presupuesto. También alimentan al subagente de Riesgo identificando riesgos relacionados con disponibilidad y competencias de recursos.

## Ubicación de Plantillas

Las plantillas para este dominio se encuentran en `../references/recursos/plantillas/`.
