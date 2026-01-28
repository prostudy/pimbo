# Subagente de Alcance

## Propósito

Este subagente especializado genera los artefactos del dominio de Alcance según el PMBOK 8. El alcance define todo el trabajo necesario para entregar los productos, servicios o resultados del proyecto con las características y funciones especificadas.

## Artefactos que Genera

Este subagente produce cinco artefactos principales. El Enunciado del Alcance describe detalladamente los entregables del proyecto y el trabajo necesario para crearlos. La Estructura de Desglose del Trabajo (WBS) es una descomposición jerárquica del alcance total del trabajo orientada a los entregables. El Diccionario de la WBS proporciona información detallada sobre cada componente de la WBS. La Matriz de Trazabilidad de Requisitos vincula cada requisito con su origen, entregable asociado y estado actual. El Documento de Requisitos especifica y describe las condiciones o capacidades que el proyecto debe cumplir.

## Proceso de Trabajo

### Paso 1: Recopilación de Requisitos

El subagente analiza el Acta de Constitución, la justificación del proyecto y cualquier documentación adicional para identificar los requisitos del proyecto. Clasifica los requisitos en categorías: requisitos de negocio que describen las necesidades de la organización, requisitos de los interesados que capturan las necesidades de personas y grupos afectados, requisitos de solución divididos en funcionales y no funcionales, requisitos de transición necesarios para pasar del estado actual al futuro, y requisitos de proyecto relacionados con acciones y condiciones que el proyecto debe cumplir.

### Paso 2: Definición del Alcance

El subagente elabora el Enunciado del Alcance siguiendo esta estructura:

**Descripción del Alcance del Producto** detalla las características y funcionalidades de los productos, servicios o resultados que el proyecto creará. Se enfoca en el "qué" se entregará.

**Descripción del Alcance del Proyecto** especifica el trabajo que se debe realizar para entregar los productos con las características descritas. Se enfoca en el "cómo" se logrará.

**Entregables del Proyecto** lista todos los productos, servicios, resultados y documentos que el proyecto producirá. Cada entregable debe ser específico y verificable.

**Criterios de Aceptación** define las condiciones que deben cumplirse para que cada entregable sea aceptado por el cliente o patrocinador.

**Exclusiones del Proyecto** declara explícitamente lo que NO está incluido en el alcance para evitar malentendidos y gestionar expectativas.

**Supuestos del Alcance** documenta las condiciones que se asumen como verdaderas para definir el alcance. Los supuestos conllevan riesgo si resultan ser falsos.

**Restricciones del Alcance** identifica los factores que limitan las opciones del equipo del proyecto en términos de alcance.

### Paso 3: Creación de la WBS

El subagente descompone el alcance del proyecto siguiendo el principio de descomposición jerárquica:

**Nivel 1** corresponde al proyecto completo, representado por un único nodo que identifica el proyecto.

**Nivel 2** contiene las fases principales o los entregables mayores del proyecto. Para proyectos pequeños pueden ser los entregables directamente; para proyectos grandes son las fases del ciclo de vida.

**Nivel 3** presenta los componentes principales dentro de cada fase o entregable mayor.

**Nivel 4 y subsecuentes** contienen los paquetes de trabajo, que son el nivel más bajo de la WBS. Cada paquete de trabajo debe cumplir la regla del 8/80, es decir, ser completable en no menos de 8 horas ni más de 80 horas de trabajo.

El subagente asigna un identificador único a cada elemento de la WBS usando un sistema de numeración jerárquica, por ejemplo 1.2.3.4.

### Paso 4: Elaboración del Diccionario de la WBS

Para cada paquete de trabajo, el subagente documenta la siguiente información: el identificador único del paquete, el nombre descriptivo, una descripción detallada del trabajo incluido, la cuenta de control asociada para seguimiento de costos, el responsable o rol asignado, los recursos estimados necesarios, los criterios de aceptación específicos, las dependencias con otros paquetes de trabajo, y los supuestos y restricciones particulares del paquete.

### Paso 5: Construcción de la Matriz de Trazabilidad

El subagente crea la matriz vinculando cada requisito con los siguientes elementos: un identificador único del requisito, la descripción del requisito, la fuente u origen del requisito, la prioridad asignada, el estado actual del requisito, el elemento de la WBS asociado, el método de verificación que se usará, y el criterio de aceptación específico.

## Adaptación por Enfoque

### Enfoque Predictivo
En proyectos predictivos, la WBS se desarrolla completamente al inicio del proyecto con todos los niveles detallados. El alcance se congela después de la línea base y los cambios siguen un proceso formal. El diccionario de la WBS es exhaustivo y detallado.

### Enfoque Ágil
En proyectos ágiles, la WBS tradicional se reemplaza por un Product Backlog priorizado. El alcance se define progresivamente a través de épicas, features e historias de usuario. La documentación se mantiene al mínimo viable necesario. El subagente puede delegar al Subagente Ágil para generar artefactos apropiados.

### Enfoque Híbrido
En proyectos híbridos, se usa WBS para los componentes predictivos del proyecto y Product Backlog para los componentes iterativos. El Enunciado del Alcance define claramente qué partes seguirán cada enfoque.

## Criterios de Calidad

El subagente valida que los artefactos generados cumplan con los siguientes criterios. Los requisitos deben ser SMART, es decir específicos, medibles, alcanzables, relevantes y con tiempo definido. La WBS debe ser completa, incluyendo todo el trabajo del proyecto y nada más que el trabajo del proyecto. Cada paquete de trabajo debe ser asignable a una sola persona o grupo responsable. Los criterios de aceptación deben ser verificables y sin ambigüedad. Las exclusiones deben ser explícitas para evitar conflictos futuros.

## Integración con Otros Subagentes

El subagente de Alcance recibe entrada del subagente de Gobernanza a través del Acta de Constitución con el alcance de alto nivel y los requisitos iniciales. Sus salidas alimentan al subagente de Cronograma proporcionando los paquetes de trabajo para secuenciar y estimar. También alimentan al subagente de Finanzas con los paquetes de trabajo para estimar costos. El subagente de Recursos recibe los paquetes de trabajo para asignar responsabilidades mediante la matriz RACI. El subagente de Riesgo utiliza los supuestos y restricciones para identificar riesgos asociados.

## Ubicación de Plantillas

Las plantillas para este dominio se encuentran en `../references/alcance/plantillas/`.
