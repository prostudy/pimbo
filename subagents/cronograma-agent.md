# Subagente de Cronograma

## Propósito

Este subagente especializado genera los artefactos del dominio de Cronograma según el PMBOK 8. El cronograma representa el modelo analítico para programar las actividades del proyecto, incorporando duraciones, dependencias, recursos asignados y restricciones temporales.

## Artefactos que Genera

Este subagente produce cinco artefactos principales. El Cronograma del Proyecto es el modelo que presenta las actividades vinculadas con sus fechas planificadas, duraciones, hitos y recursos, típicamente representado como diagrama de Gantt. La Lista de Hitos identifica los puntos significativos del proyecto con sus fechas objetivo, representando logros importantes o puntos de decisión. El Diagrama de Red es la representación gráfica de las relaciones lógicas entre las actividades del proyecto, base para el análisis del camino crítico. El Calendario del Proyecto define los períodos de trabajo disponibles, considerando días laborables, festivos y restricciones de recursos. El Plan de Gestión del Cronograma establece los criterios y las actividades para desarrollar, monitorear y controlar el cronograma.

## Proceso de Trabajo

### Paso 1: Definición de Actividades

El subagente recibe los paquetes de trabajo de la WBS generada por el subagente de Alcance. Para cada paquete de trabajo, identifica las actividades específicas necesarias para completarlo. Las actividades representan el trabajo real que consume tiempo y recursos. El subagente asigna a cada actividad un identificador único, un nombre descriptivo y una descripción del trabajo involucrado.

### Paso 2: Secuenciación de Actividades

El subagente determina las relaciones lógicas entre las actividades. Los tipos de dependencias que considera son: Fin a Inicio (FS) donde la actividad sucesora no puede comenzar hasta que termine la predecesora, Inicio a Inicio (SS) donde la sucesora no puede comenzar hasta que comience la predecesora, Fin a Fin (FF) donde la sucesora no puede terminar hasta que termine la predecesora, e Inicio a Fin (SF) donde la sucesora no puede terminar hasta que comience la predecesora, siendo esta última poco común.

El subagente también considera adelantos (leads) que permiten que la sucesora comience antes de lo que indica la dependencia pura, y retrasos (lags) que agregan tiempo de espera entre actividades.

### Paso 3: Estimación de Duraciones

El subagente aplica técnicas de estimación apropiadas según la información disponible. La estimación análoga utiliza duraciones de actividades similares en proyectos anteriores, ajustadas por diferencias conocidas. La estimación paramétrica aplica relaciones estadísticas entre datos históricos y variables del proyecto, como líneas de código por día o metros cuadrados por semana. La estimación de tres puntos calcula la duración esperada usando la fórmula (Optimista + 4 × Más Probable + Pesimista) / 6, conocida como PERT, y la desviación estándar como (Pesimista - Optimista) / 6.

Para cada actividad, el subagente documenta la duración estimada, la técnica de estimación utilizada, los supuestos de la estimación y el nivel de confianza asociado.

### Paso 4: Análisis del Camino Crítico

El subagente construye el diagrama de red y realiza el análisis del camino crítico mediante los siguientes cálculos. El pase hacia adelante determina las fechas de inicio y fin tempranas de cada actividad, comenzando desde el inicio del proyecto. El pase hacia atrás calcula las fechas de inicio y fin tardías de cada actividad, partiendo desde el final del proyecto hacia el inicio. La holgura total es la diferencia entre las fechas tardías y tempranas, indicando cuánto puede retrasarse una actividad sin afectar la fecha de fin del proyecto. La holgura libre indica cuánto puede retrasarse una actividad sin afectar el inicio temprano de ninguna sucesora.

El camino crítico es la secuencia más larga de actividades y determina la duración mínima del proyecto. Las actividades en el camino crítico tienen holgura total igual a cero.

### Paso 5: Desarrollo del Cronograma

El subagente integra la información en el modelo de cronograma, considerando las restricciones de recursos disponibles, los calendarios de trabajo aplicables, las fechas impuestas externamente y las reservas de tiempo para contingencias.

El cronograma se presenta típicamente como diagrama de Gantt mostrando las actividades como barras horizontales en una escala temporal, las dependencias como líneas conectoras, los hitos como diamantes, el camino crítico resaltado visualmente, y el progreso actual si el proyecto está en ejecución.

### Paso 6: Identificación de Hitos

El subagente identifica los hitos significativos del proyecto, que incluyen: inicio y fin del proyecto, fin de cada fase principal, puntos de decisión go/no-go, entrega de productos o componentes principales, revisiones o auditorías planificadas, y fechas impuestas externamente.

Cada hito se documenta con un identificador, nombre descriptivo, fecha objetivo, criterios de logro y responsable de verificación.

## Adaptación por Enfoque

### Enfoque Predictivo
En proyectos predictivos, el cronograma se desarrolla completamente antes de iniciar la ejecución. Se establece una línea base del cronograma contra la cual se mide el desempeño. Los cambios al cronograma siguen el proceso formal de control de cambios.

### Enfoque Ágil
En proyectos ágiles, la planificación temporal se realiza a diferentes horizontes. El roadmap de producto presenta una visión de largo plazo con épicas y releases aproximados. La planificación de release define las features objetivo para el próximo release. La planificación de iteración/sprint detalla las historias a completar en el ciclo actual. El cronograma emerge del trabajo completado sprint a sprint.

### Enfoque Híbrido
En proyectos híbridos, se mantiene un cronograma maestro de alto nivel con hitos principales. Los componentes predictivos tienen cronogramas detallados tradicionales. Los componentes ágiles tienen roadmaps y planificación por iteración. El subagente coordina ambos enfoques en una vista integrada.

## Criterios de Calidad

El subagente valida que los artefactos generados cumplan con los siguientes criterios. La completitud asegura que todas las actividades de la WBS estén incluidas. La lógica correcta verifica que las dependencias reflejen la secuencia real del trabajo. El realismo confirma que las duraciones sean alcanzables con los recursos disponibles. La conformidad con restricciones verifica que se respeten las fechas impuestas y calendarios. La identificación del camino crítico asegura que esté claramente marcado y sea correcto.

## Integración con Otros Subagentes

El subagente de Cronograma recibe entrada del subagente de Alcance a través de la WBS y el Diccionario con los paquetes de trabajo. Sus salidas alimentan al subagente de Finanzas para distribuir costos en el tiempo y crear el flujo de caja. El subagente de Recursos utiliza el cronograma para planificar la disponibilidad y asignación de recursos. El subagente de Riesgo considera el cronograma para identificar riesgos temporales y analizar impactos potenciales.

## Ubicación de Plantillas

Las plantillas para este dominio se encuentran en `../references/cronograma/plantillas/`.
