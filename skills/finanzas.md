# Skill: Finanzas

## Propósito

Gestionar los aspectos económicos del proyecto, incluyendo estimación, presupuestación, financiamiento y control de costos.

## Descripción del Dominio

El dominio de Finanzas del PMBOK 8 se enfoca en asegurar que el proyecto se complete dentro del presupuesto aprobado y que genere el valor financiero esperado. Este skill genera artefactos que documentan costos, presupuestos, análisis de viabilidad económica y métricas de desempeño financiero.

## Artefactos que Produce

### 1. Presupuesto del Proyecto

Detalle de costos estimados por categoría y período:
- Costos por paquete de trabajo
- Categorías de costo (personal, materiales, servicios, equipos)
- Distribución temporal de costos
- Reservas de contingencia (riesgos conocidos)
- Reservas de gestión (riesgos desconocidos)
- Presupuesto total autorizado
- Línea base de costos

**Formato**: `.csv` (para análisis y filtrado)
**Cuándo se genera**: Fase de Planificación
**Importancia**: Crítico - Define recursos financieros disponibles

### 2. Análisis Costo-Beneficio

Evaluación de viabilidad financiera del proyecto:
- Costos totales del proyecto
- Beneficios esperados (cuantificados)
- Retorno de inversión (ROI)
- Valor actual neto (VAN/NPV)
- Tasa interna de retorno (TIR/IRR)
- Período de recuperación (Payback)
- Análisis de sensibilidad
- Break-even point

**Formato**: `.md` (narrativo con tablas) o `.csv`
**Cuándo se genera**: Fase de Inicio o Planificación
**Importancia**: Alta - Justifica la inversión

### 3. Flujo de Caja (Cash Flow)

Proyección de entradas y salidas de efectivo:
- Flujo de caja por período (mensual/trimestral)
- Desembolsos planificados
- Ingresos esperados (si aplica)
- Saldo acumulado
- Necesidades de financiamiento
- Momentos críticos de liquidez

**Formato**: `.csv` con columnas por período
**Cuándo se genera**: Fase de Planificación
**Importancia**: Alta - Gestiona liquidez del proyecto

### 4. Plan de Gestión de Costos

Define cómo se gestionarán los aspectos financieros:
- Metodología de estimación de costos
- Nivel de precisión y exactitud
- Unidades de medida (moneda, horas)
- Umbrales de control (variación aceptable)
- Reglas de medición del desempeño
- Formato de reportes financieros
- Proceso de control de costos

**Formato**: `.md` (Markdown)
**Cuándo se genera**: Fase de Planificación
**Importancia**: Media - Guía la gestión financiera

### 5. Análisis del Valor Ganado (Earned Value)

Métricas de desempeño durante la ejecución:
- Valor Planificado (PV)
- Costo Real (AC)
- Valor Ganado (EV)
- Variación de Cronograma (SV)
- Variación de Costo (CV)
- Índice de Desempeño de Cronograma (SPI)
- Índice de Desempeño de Costo (CPI)
- Estimación al Completar (EAC)
- Estimación para Terminar (ETC)
- Índice de Desempeño para Completar (TCPI)

**Formato**: `.csv` con métricas por período
**Cuándo se genera**: Fase de Monitoreo y Control
**Importancia**: Alta - Mide desempeño real vs planificado

## Proceso de Generación

### Paso 1: Estimación de Costos por Paquete de Trabajo

El skill recibe:
1. WBS del skill de Alcance
2. Cronograma del skill de Cronograma
3. Plan de Recursos del skill de Recursos

Para cada paquete de trabajo estima:
- **Costos de personal**: Horas × Tasa horaria
- **Materiales**: Cantidad × Precio unitario
- **Equipos**: Alquiler o depreciación
- **Servicios externos**: Contratos con terceros
- **Viajes**: Si requiere desplazamientos
- **Software/Licencias**: Herramientas necesarias

### Paso 2: Agregación de Costos

El skill suma costos en diferentes dimensiones:

#### Por Categoría
- Personal: $450,000
- Materiales: $120,000
- Servicios: $80,000
- Equipos: $50,000
- **Total**: $700,000

#### Por Fase del Ciclo de Vida
- Inicio: $50,000
- Planificación: $80,000
- Ejecución: $480,000
- Cierre: $90,000

#### Por Entregable Principal
- Software: $400,000
- Capacitación: $100,000
- Documentación: $50,000
- Infraestructura: $150,000

### Paso 3: Cálculo de Reservas

#### Reservas de Contingencia (5-15% típicamente)
Para riesgos identificados y cuantificados.
- Análisis del registro de riesgos
- Suma del impacto monetario ponderado
- Típicamente 10% del costo base

**Ejemplo**: $700,000 × 10% = $70,000

#### Reservas de Gestión (5-10% típicamente)
Para riesgos desconocidos ("unknown unknowns").
- Basado en complejidad e incertidumbre
- No parte de la línea base
- Requiere aprobación ejecutiva para usar

**Ejemplo**: ($700,000 + $70,000) × 5% = $38,500

**Presupuesto Total**: $700,000 + $70,000 + $38,500 = $808,500

### Paso 4: Desarrollo del Flujo de Caja

Alinea costos con el cronograma:

```csv
Mes,Costo Planificado,Acumulado
2026-02,$50000,$50000
2026-03,$80000,$130000
2026-04,$120000,$250000
2026-05,$150000,$400000
2026-06,$120000,$520000
2026-07,$80000,$600000
2026-08,$50000,$650000
```

Identifica períodos de alta demanda financiera.

### Paso 5: Análisis de Viabilidad Financiera

Calcula métricas de retorno:

#### ROI (Return on Investment)
```
ROI = (Beneficio - Costo) / Costo × 100
```

**Ejemplo**: ($1,200,000 - $800,000) / $800,000 × 100 = 50%

#### VAN (Valor Actual Neto)
```
VAN = Σ [Flujo(t) / (1+r)^t] - Inversión Inicial
```

**Ejemplo**:
- Inversión: $800,000
- Flujos años 1-5: $300K, $400K, $400K, $300K, $200K
- Tasa descuento: 10%
- VAN = $300/1.1 + $400/1.21 + $400/1.33 + $300/1.46 + $200/1.61 - $800
- VAN = $273 + $331 + $301 + $205 + $124 - $800 = $434K

#### TIR (Tasa Interna de Retorno)
La tasa de descuento que hace VAN = 0.

**Ejemplo**: Si TIR = 18% y costo de capital = 10%, el proyecto es viable.

#### Período de Recuperación
Tiempo para recuperar la inversión inicial.

**Ejemplo**:
- Año 1: $300K (acumulado $300K)
- Año 2: $400K (acumulado $700K)
- Año 3: $100K de $400K (acumulado $800K)
- **Payback = 2.25 años**

### Paso 6: Establecimiento de Línea Base

La línea base de costos incluye:
- Presupuesto por paquete de trabajo
- Distribución temporal (curva S)
- Reservas de contingencia
- Excluye reservas de gestión

Esta línea base se usa para medir desempeño (EVM).

## Técnicas de Estimación de Costos

### Análoga
Usa costos de proyectos similares.

**Ventaja**: Rápida y económica
**Desventaja**: Menos precisa
**Precisión**: ±25-75%

### Paramétrica
Usa relaciones estadísticas.

**Ejemplo**: $200 por punto de función × 500 puntos = $100,000
**Precisión**: ±10-25%

### Bottom-Up
Estima cada componente y suma.

**Ventaja**: Más precisa
**Desventaja**: Consume tiempo y recursos
**Precisión**: ±5-10%

### Tres Puntos
Considera incertidumbre.

```
Costo Esperado = (Optimista + 4×Más Probable + Pesimista) / 6
```

**Ejemplo**:
- Optimista: $80,000
- Más probable: $100,000
- Pesimista: $140,000
- **Esperado**: (80 + 400 + 140) / 6 = $103,333

## Métricas de Valor Ganado (EVM)

### Métricas Base

**PV (Planned Value)** - Valor Planificado
El valor del trabajo que debería estar completo a la fecha.

**AC (Actual Cost)** - Costo Real
El costo real incurrido por el trabajo realizado.

**EV (Earned Value)** - Valor Ganado
El valor del trabajo realmente completado.

### Variaciones

**CV (Cost Variance)** - Variación de Costo
```
CV = EV - AC
```
- CV > 0: Bajo presupuesto (bueno)
- CV < 0: Sobre presupuesto (malo)

**SV (Schedule Variance)** - Variación de Cronograma
```
SV = EV - PV
```
- SV > 0: Adelantado (bueno)
- SV < 0: Atrasado (malo)

### Índices de Desempeño

**CPI (Cost Performance Index)** - Índice de Desempeño de Costo
```
CPI = EV / AC
```
- CPI > 1.0: Eficiente en costos
- CPI < 1.0: Ineficiente en costos
- CPI = 0.90 significa: "Por cada $1 gastado, obtenemos $0.90 de valor"

**SPI (Schedule Performance Index)** - Índice de Desempeño de Cronograma
```
SPI = EV / PV
```
- SPI > 1.0: Adelantado
- SPI < 1.0: Atrasado

### Pronósticos

**EAC (Estimate at Completion)** - Estimación al Completar

Si CPI se mantendrá:
```
EAC = BAC / CPI
```

Si performance actual es atípica:
```
EAC = AC + (BAC - EV)
```

**ETC (Estimate to Complete)** - Estimación para Terminar
```
ETC = EAC - AC
```

**VAC (Variance at Completion)** - Variación al Completar
```
VAC = BAC - EAC
```

**TCPI (To-Complete Performance Index)** - Índice de Desempeño para Completar
```
TCPI = (BAC - EV) / (BAC - AC)
```

## Ejemplo de Análisis EVM

**Datos del proyecto en el mes 6**:
- BAC (Budget at Completion): $500,000
- PV (debería estar completo): $300,000
- AC (costo real gastado): $280,000
- EV (trabajo realmente completo): $250,000

**Cálculos**:
- CV = $250,000 - $280,000 = -$30,000 (sobre presupuesto)
- SV = $250,000 - $300,000 = -$50,000 (atrasado)
- CPI = $250,000 / $280,000 = 0.89 (por cada $1 gastado, $0.89 de valor)
- SPI = $250,000 / $300,000 = 0.83 (83% del avance esperado)
- EAC = $500,000 / 0.89 = $561,798 (proyección al completar)
- VAC = $500,000 - $561,798 = -$61,798 (sobrecosto esperado)
- TCPI = ($500,000 - $250,000) / ($500,000 - $280,000) = 1.14

**Interpretación**: Proyecto atrasado (SPI=0.83) y sobre presupuesto (CPI=0.89). Para completar en presupuesto, necesitaría CPI=1.14 en el trabajo restante (difícil si CPI actual es 0.89).

## Integración con Otros Skills

### Dependencies (Qué necesita este skill)
- **Alcance**: Paquetes de trabajo de la WBS para estimar
- **Cronograma**: Duración de actividades para calcular costos temporales
- **Recursos**: Tasas de recursos para calcular costos de personal
- **Riesgo**: Riesgos cuantificados para reservas de contingencia

### Outputs Utilizados Por (Qué skills usan los outputs de Finanzas)
- **Gobernanza**: Presupuesto se incluye en el Acta de Constitución
- **Riesgo**: Reservas definen capacidad de respuesta a riesgos
- **Interesados**: Información financiera para reportes a sponsors

## Adaptación por Enfoque de Ciclo de Vida

### Enfoque Predictivo
- Presupuesto detallado completo al inicio
- Línea base de costos establecida
- Control de cambios formal para variaciones
- EVM completo para monitoreo

### Enfoque Ágil
- Presupuesto por sprint o release
- Costo por punto de historia
- Burn rate (velocidad de gasto)
- ROI incremental por release

### Enfoque Iterativo
- Presupuesto base + presupuesto por iteración
- Refinamiento progresivo de estimaciones
- Reevaluación de viabilidad cada iteración

### Enfoque Híbrido
- Presupuesto predictivo para infraestructura
- Presupuesto ágil para desarrollo
- EVM para fases predictivas
- Burn rate para fases ágiles

## Plantillas de Referencia

Las plantillas para este skill se encuentran en:

```
references/finanzas/plantillas/
└── (plantillas de presupuesto y análisis financiero)
```

## Ejemplos de Uso

### Ejemplo 1: Presupuesto por Categoría

| Categoría | Cantidad | Costo Unitario | Total |
|-----------|----------|----------------|-------|
| Director de Proyecto | 12 meses | $12,000/mes | $144,000 |
| Desarrolladores Senior | 3 × 10 meses | $10,000/mes | $300,000 |
| Desarrolladores Junior | 2 × 10 meses | $6,000/mes | $120,000 |
| Diseñador UX | 6 meses | $8,000/mes | $48,000 |
| Licencias software | - | - | $30,000 |
| Infraestructura cloud | 12 meses | $2,000/mes | $24,000 |
| Capacitación | - | - | $15,000 |
| **Costo Base** | | | **$681,000** |
| Reserva Contingencia (10%) | | | $68,100 |
| **Línea Base** | | | **$749,100** |
| Reserva Gestión (5%) | | | $37,455 |
| **Presupuesto Total** | | | **$786,555** |

## Métricas de Calidad del Artefacto

Un presupuesto de calidad debe:
- [ ] Cubrir 100% de los paquetes de trabajo de la WBS
- [ ] Incluir todas las categorías de costo relevantes
- [ ] Tener estimaciones con técnica apropiada documentada
- [ ] Incluir reservas de contingencia (5-15%)
- [ ] Incluir reservas de gestión (5-10%)
- [ ] Estar alineado temporalmente con el cronograma
- [ ] Definir línea base de costos
- [ ] Estar aprobado por el patrocinador
- [ ] Incluir supuestos de estimación
- [ ] Tener plan de gestión de costos

## Errores Comunes a Evitar

1. **Estimaciones optimistas**: Usar solo escenario optimista
2. **Olvidar costos indirectos**: Solo considerar costos directos
3. **No incluir reservas**: Presupuesto sin margen para riesgos
4. **Ignorar inflación**: En proyectos largos, no ajustar por inflación
5. **No alinear con cronograma**: Flujo de caja no realista
6. **Confundir presupuesto con línea base**: Incluir reservas de gestión en línea base
7. **No actualizar EAC**: Mantener estimación original cuando CPI indica sobrecosto

## Palabras Clave

`Presupuesto`, `Budget`, `Costos`, `Costs`, `ROI`, `VAN`, `NPV`, `TIR`, `IRR`, `Flujo de Caja`, `Cash Flow`, `Valor Ganado`, `Earned Value`, `EVM`, `CPI`, `SPI`, `EAC`, `Reservas de Contingencia`, `Línea Base de Costos`, `Cost Baseline`, `Análisis Costo-Beneficio`

---

**Dominio PMBOK 8**: Finanzas
**Subagente**: `finanzas-agent.md`
**Referencias**: `references/finanzas/`
