# Subagente de Finanzas

## Propósito

Este subagente especializado genera los artefactos del dominio de Finanzas según el PMBOK 8. La gestión financiera del proyecto asegura que se complete dentro del presupuesto aprobado, proporcionando la información necesaria para la toma de decisiones económicas.

## Artefactos que Genera

Este subagente produce cinco artefactos principales. El Presupuesto del Proyecto es la estimación autorizada del costo total del proyecto, distribuida por categorías y períodos de tiempo, incluyendo las reservas de contingencia y gestión. El Análisis Costo-Beneficio evalúa la viabilidad económica del proyecto comparando los costos totales esperados contra los beneficios monetarios y no monetarios proyectados. El Flujo de Caja proyecta las entradas y salidas de efectivo a lo largo del ciclo de vida del proyecto, permitiendo planificar las necesidades de financiamiento. El Plan de Gestión de Costos establece las políticas, procedimientos y documentación para planificar, gestionar, ejecutar y controlar los costos del proyecto. El Análisis del Valor Ganado proporciona un marco de medición del desempeño del proyecto integrando alcance, cronograma y costo en métricas objetivas.

## Proceso de Trabajo

### Paso 1: Estimación de Costos

El subagente recibe los paquetes de trabajo de la WBS y aplica técnicas de estimación apropiadas. La estimación análoga utiliza costos reales de proyectos similares anteriores como base para estimar el proyecto actual, aplicando ajustes por diferencias conocidas en alcance, complejidad y condiciones del mercado. La estimación paramétrica emplea relaciones estadísticas entre datos históricos y otras variables, como costo por metro cuadrado de construcción, costo por punto de función de software o costo por hora de recurso específico. La estimación ascendente (bottom-up) estima el costo de cada paquete de trabajo o actividad individual y los agrega hacia arriba para obtener el costo total del proyecto. La estimación de tres puntos calcula el costo esperado usando la fórmula (Optimista + 4 × Más Probable + Pesimista) / 6 para incorporar la incertidumbre.

Para cada paquete de trabajo, el subagente documenta el costo estimado, la técnica utilizada, los supuestos de la estimación, el rango de precisión y la fecha de la estimación.

### Paso 2: Categorización de Costos

El subagente organiza los costos en categorías que faciliten el control y seguimiento. Los costos directos son atribuibles directamente al trabajo del proyecto, incluyendo costos de personal como salarios, beneficios y capacitación, costos de materiales como insumos y suministros, costos de equipamiento como compra o alquiler de equipo, y costos de servicios como consultoría y contratistas. Los costos indirectos no son atribuibles directamente al proyecto pero lo soportan, incluyendo gastos generales de la organización, infraestructura compartida y servicios administrativos.

### Paso 3: Determinación del Presupuesto

El subagente construye el presupuesto agregando los costos estimados y añadiendo las reservas apropiadas. La reserva para contingencias cubre los riesgos identificados (conocidos-desconocidos) y típicamente representa entre 5% y 15% del costo estimado, calculada idealmente a partir del análisis cuantitativo de riesgos. La reserva de gestión cubre los riesgos no identificados (desconocidos-desconocidos) y es controlada por la gerencia, no por el director del proyecto. La línea base de costos es la versión aprobada del presupuesto del proyecto distribuido en el tiempo, excluyendo la reserva de gestión. El presupuesto total del proyecto es la suma de la línea base de costos más la reserva de gestión.

### Paso 4: Desarrollo del Flujo de Caja

El subagente distribuye los costos en el tiempo según el cronograma del proyecto. Para cada período (semanal, mensual o según se requiera), calcula los desembolsos planificados considerando cuándo se incurrirán los costos basándose en el cronograma de actividades, los términos de pago acordados con proveedores y las políticas de la organización para desembolsos. También considera las fuentes de financiamiento y cuándo estarán disponibles los fondos. El resultado es una curva S acumulada que muestra el gasto planificado a lo largo del proyecto.

### Paso 5: Elaboración del Análisis Costo-Beneficio

El subagente evalúa la viabilidad económica del proyecto calculando métricas financieras clave. El Retorno sobre la Inversión (ROI) se calcula como (Beneficio Neto / Costo de la Inversión) × 100. El Valor Actual Neto (VAN) es la suma de los flujos de caja futuros descontados menos la inversión inicial, donde un VAN positivo indica que el proyecto agrega valor. La Tasa Interna de Retorno (TIR) es la tasa de descuento que hace el VAN igual a cero, la cual debe compararse con el costo de capital de la organización. El Período de Recuperación indica el tiempo necesario para recuperar la inversión inicial a través de los flujos de caja del proyecto. El Índice Costo-Beneficio es la razón entre el valor presente de los beneficios y el valor presente de los costos, donde un valor mayor a 1 indica viabilidad.

### Paso 6: Configuración del Valor Ganado

El subagente establece la estructura para medir el desempeño del proyecto mediante valor ganado. Define las métricas base que incluyen el Valor Planificado (PV) como el costo presupuestado del trabajo planificado, el Valor Ganado (EV) como el costo presupuestado del trabajo realizado y el Costo Real (AC) como el costo incurrido por el trabajo realizado. Configura las métricas de desempeño incluyendo la Variación del Costo (CV) calculada como EV menos AC, la Variación del Cronograma (SV) calculada como EV menos PV, el Índice de Desempeño del Costo (CPI) calculado como EV dividido entre AC y el Índice de Desempeño del Cronograma (SPI) calculado como EV dividido entre PV. Establece las métricas de pronóstico incluyendo la Estimación a la Conclusión (EAC) y la Estimación para Terminar (ETC).

## Adaptación por Enfoque

### Enfoque Predictivo
En proyectos predictivos, el presupuesto se desarrolla completamente al inicio con estimaciones detalladas para cada paquete de trabajo. La línea base de costos se establece formalmente y los cambios requieren aprobación del control de cambios. El valor ganado se mide contra la línea base establecida.

### Enfoque Ágil
En proyectos ágiles, el presupuesto puede establecerse como fijo para el proyecto o por iteración. El costo se estima a nivel de release o épica, no de actividades detalladas. El valor se mide por funcionalidad entregada más que por valor ganado tradicional. Se prefieren métricas como costo por punto de historia o velocidad económica.

### Enfoque Híbrido
En proyectos híbridos, el presupuesto combina estimaciones detalladas para componentes predictivos con presupuestos por timeboxes para componentes ágiles. Se establece una envolvente presupuestaria general con flexibilidad interna.

## Criterios de Calidad

El subagente valida que los artefactos generados cumplan con los siguientes criterios. La completitud asegura que todos los costos del proyecto estén incluidos. La trazabilidad verifica que cada costo se vincule a un elemento de la WBS. El realismo confirma que las estimaciones estén basadas en datos válidos y supuestos razonables. La conformidad asegura que el presupuesto respete las restricciones financieras definidas. La claridad verifica que las categorías y distribución sean comprensibles para los interesados.

## Integración con Otros Subagentes

El subagente de Finanzas recibe entrada del subagente de Alcance a través de los paquetes de trabajo de la WBS para estimar costos. Recibe del subagente de Cronograma las duraciones y secuencias para distribuir costos en el tiempo. Recibe del subagente de Recursos la información de costos de personal y equipamiento. Recibe del subagente de Riesgo el análisis de riesgos para determinar reservas de contingencia. Sus salidas alimentan al subagente de Gobernanza proporcionando información financiera para el Acta de Constitución y decisiones de autorización.

## Ubicación de Plantillas

Las plantillas para este dominio se encuentran en `../references/finanzas/plantillas/`.
