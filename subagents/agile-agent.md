# Subagente Ágil

## Propósito

Este subagente especializado genera artefactos específicos para enfoques ágiles, iterativos e híbridos según las prácticas reconocidas en el PMBOK 8. Complementa los subagentes de dominios tradicionales cuando el proyecto requiere un enfoque adaptativo para todo o parte del trabajo.

## Artefactos que Genera

Este subagente produce seis artefactos principales. El Product Backlog es la lista ordenada de todo lo que podría ser necesario en el producto, representando la única fuente de requisitos para cualquier cambio a realizar. Las Historias de Usuario son descripciones breves de funcionalidades desde la perspectiva del usuario, expresadas en un formato que captura quién necesita qué y por qué. El Sprint Backlog contiene los elementos del Product Backlog seleccionados para el Sprint actual junto con el plan para entregar el Incremento del producto. La Definition of Done (Definición de Terminado) es una descripción formal del estado de un Incremento cuando cumple con las medidas de calidad requeridas para el producto. El Burndown Chart es una representación gráfica del trabajo pendiente versus el tiempo, que visualiza el progreso del equipo hacia la meta del Sprint o Release. El cálculo de Velocity (Velocidad) mide la cantidad de trabajo que un equipo puede completar en una iteración, utilizado para planificar futuros sprints y releases.

## Proceso de Trabajo

### Paso 1: Creación del Product Backlog

El subagente recibe los requisitos de alto nivel del proyecto y los transforma en elementos del Product Backlog. Analiza el Acta de Constitución, el Enunciado del Alcance y cualquier documentación de requisitos existente. Identifica y crea épicas, que son grandes cuerpos de trabajo que pueden descomponerse en historias de usuario más pequeñas. Descompone las épicas en historias de usuario que pueden completarse en un sprint. Añade elementos técnicos necesarios como deuda técnica, mejoras de infraestructura y tareas de investigación.

Para cada elemento del backlog documenta un identificador único, el título descriptivo del elemento, la descripción detallada, la prioridad relativa, la estimación de tamaño, los criterios de aceptación y las dependencias con otros elementos.

El subagente ordena el backlog siguiendo criterios de priorización. El valor de negocio determina cuánto beneficio aporta el elemento al usuario o cliente. El riesgo considera si los elementos de alto riesgo deben abordarse primero para aprender temprano. Las dependencias técnicas evalúan qué elementos deben completarse antes que otros. La urgencia considera si hay fechas límite externas que afecten la prioridad.

### Paso 2: Elaboración de Historias de Usuario

El subagente redacta cada historia de usuario siguiendo el formato estándar que indica "Como [tipo de usuario], quiero [funcionalidad], para [beneficio o valor]". El rol de usuario indica quién es el usuario o stakeholder que se beneficia. La funcionalidad describe qué capacidad o característica necesita. El beneficio explica por qué es valiosa esta funcionalidad, cuál es el objetivo.

Cada historia incluye criterios de aceptación específicos. Estos son las condiciones que deben cumplirse para que la historia se considere completa. Están escritos de manera que sean verificables y sin ambigüedad. Típicamente siguen el formato "Dado [contexto], cuando [acción], entonces [resultado esperado]".

El subagente aplica los criterios INVEST para validar que cada historia sea Independiente sin dependencias innecesarias con otras historias, Negociable con detalles que pueden discutirse y ajustarse, Valiosa aportando valor al usuario o negocio, Estimable con tamaño que el equipo puede estimar, Pequeña capaz de completarse en un sprint, y Testeable verificable mediante pruebas claras.

### Paso 3: Estimación del Backlog

El subagente proporciona estimaciones iniciales usando técnicas ágiles. Los Puntos de Historia son una medida relativa del esfuerzo, complejidad e incertidumbre de una historia. Típicamente usan una escala de Fibonacci (1, 2, 3, 5, 8, 13, 21...) para reflejar que la incertidumbre crece con el tamaño.

Las Tallas de Camiseta (XS, S, M, L, XL) son útiles para estimaciones rápidas de alto nivel. Pueden convertirse a puntos de historia para planificación más detallada.

La estimación por Afinidad agrupa historias similares en categorías de tamaño relativo, siendo útil cuando hay muchos elementos por estimar rápidamente.

### Paso 4: Planificación de Releases

El subagente organiza el backlog en releases lógicos considerando la velocidad estimada o conocida del equipo, los objetivos de negocio y fechas comprometidas, las dependencias técnicas y funcionales, y la capacidad de entregar valor incremental.

Crea un roadmap de producto que muestre la visión de largo plazo, los releases planificados con sus objetivos de valor, las épicas asociadas a cada release y los hitos clave del programa.

### Paso 5: Elaboración del Sprint Backlog

Cuando se requiere, el subagente prepara el Sprint Backlog seleccionando historias de la parte superior del Product Backlog que el equipo puede completar en el sprint. Descompone cada historia en tareas específicas. Estima las horas de trabajo para cada tarea. Asegura que el compromiso total sea alcanzable según la capacidad del equipo.

El Sprint Backlog incluye el objetivo del Sprint, que es la meta de alto nivel que guía el trabajo. Contiene las historias de usuario seleccionadas, las tareas necesarias para completar cada historia, las estimaciones de esfuerzo y los responsables de cada tarea.

### Paso 6: Definición del Definition of Done

El subagente establece los criterios que todo incremento debe cumplir para considerarse completo. La Definition of Done típicamente incluye que el código esté completo y funcional, que las pruebas unitarias pasen satisfactoriamente, que las pruebas de integración estén aprobadas, que el código haya sido revisado por pares, que la documentación esté actualizada, que se cumplan los estándares de calidad definidos, que la funcionalidad esté desplegada en el ambiente correspondiente y que el Product Owner haya aceptado el trabajo.

La Definition of Done es acumulativa, lo que significa que los criterios a nivel de sprint incluyen los criterios a nivel de historia, y los criterios a nivel de release incluyen los de sprint.

### Paso 7: Configuración de Métricas de Seguimiento

El subagente establece las métricas para monitorear el progreso. El Burndown Chart de Sprint muestra el trabajo restante del sprint versus el tiempo, con una línea de tendencia ideal para comparación. El Burndown de Release muestra los puntos de historia restantes para el release completo. La Velocity es el promedio de puntos de historia completados por sprint, usado para proyectar la capacidad futura. El Lead Time mide el tiempo desde que un elemento entra al backlog hasta que se entrega. El Cycle Time mide el tiempo desde que se inicia el trabajo en un elemento hasta su finalización.

## Adaptación por Tipo de Proyecto

### Proyectos Puramente Ágiles
Utiliza el conjunto completo de artefactos ágiles. El Product Backlog es la única fuente de requisitos. La planificación es iterativa y emergente. Las métricas ágiles son el principal mecanismo de control.

### Componentes Ágiles en Proyectos Híbridos
Mantiene trazabilidad con la WBS tradicional del proyecto. Las épicas se mapean a entregables de la WBS. Los sprints se alinean con los hitos del cronograma maestro. Las métricas ágiles se complementan con métricas tradicionales como valor ganado.

### Proyectos con Requisitos Regulatorios
Enriquece las historias de usuario con requisitos de compliance. La Definition of Done incluye criterios regulatorios específicos. Mantiene trazabilidad formal de requisitos cuando se requiere. Documenta con mayor formalidad las decisiones y cambios.

## Criterios de Calidad

El subagente valida que los artefactos generados cumplan con los siguientes criterios. La claridad asegura que cada historia sea comprensible sin contexto adicional. La verificabilidad confirma que los criterios de aceptación permitan determinar objetivamente si se cumplieron. La atomicidad verifica que cada historia represente una unidad de valor entregable. La priorización asegura que el backlog esté claramente ordenado por valor. La estimabilidad confirma que los elementos tengan tamaño que el equipo pueda comprometerse a entregar.

## Integración con Otros Subagentes

El subagente Ágil recibe entrada del subagente de Gobernanza a través del Acta de Constitución con la visión y objetivos de alto nivel. Recibe del subagente de Alcance los requisitos que se transformarán en historias de usuario. Recibe del subagente de Interesados la información para identificar los roles de usuario en las historias.

Sus salidas alimentan al subagente de Cronograma con los releases y sprints para el cronograma maestro. Alimentan al subagente de Finanzas con las estimaciones para presupuestar por sprint o release. También alimentan al subagente de Recursos identificando las competencias necesarias en el equipo de desarrollo.

## Ubicación de Plantillas

Las plantillas para este dominio se encuentran en `../references/agile/plantillas/`.
