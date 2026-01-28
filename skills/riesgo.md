# Skill: Riesgo

## Propósito

Identificar, analizar y planificar respuestas a la incertidumbre del proyecto, maximizando oportunidades y minimizando amenazas.

## Descripción del Dominio

El dominio de Riesgo del PMBOK 8 reconoce que todos los proyectos operan en ambientes de incertidumbre. Este skill se enfoca en gestionar tanto amenazas (riesgos negativos) como oportunidades (riesgos positivos), permitiendo que el proyecto responda proactivamente a eventos inciertos en lugar de reaccionar cuando ocurren.

## Artefactos que Produce

### 1. Registro de Riesgos (Risk Register)

Documenta todos los riesgos identificados:
- ID único del riesgo
- Descripción del riesgo
- Categoría (técnico, externo, organizacional, gestión)
- Causa raíz del riesgo
- Probabilidad (Alta/Media/Baja o %)
- Impacto (Alto/Medio/Bajo o valor monetario)
- Puntuación de riesgo (Probabilidad × Impacto)
- Tipo (Amenaza/Oportunidad)
- Dueño del riesgo (risk owner)
- Estrategia de respuesta
- Plan de respuesta específico
- Disparadores (triggers) - señales de alerta temprana
- Estado (Identificado/Analizado/Respuesta planificada/Cerrado)
- Fecha de identificación
- Riesgos secundarios

**Formato**: `.csv` (para análisis y filtrado)
**Cuándo se genera**: Fase de Planificación, actualizado continuamente
**Importancia**: Crítico - Base de toda la gestión de riesgos

### 2. Matriz de Probabilidad e Impacto

Clasifica los riesgos por su severidad:
- Eje X: Probabilidad (Muy Baja, Baja, Media, Alta, Muy Alta)
- Eje Y: Impacto (Muy Bajo, Bajo, Medio, Alto, Muy Alto)
- Celdas coloreadas: Verde (bajo), Amarillo (medio), Rojo (alto)
- Cada riesgo ubicado en una celda
- Priorización basada en la zona

**Formato**: `.csv` con clasificación o visual
**Cuándo se genera**: Fase de Planificación
**Importancia**: Alta - Prioriza dónde enfocar esfuerzos

### 3. Plan de Respuesta a Riesgos

Documenta estrategias y acciones específicas:
- ID del riesgo
- Estrategia seleccionada (Evitar/Mitigar/Transferir/Aceptar para amenazas; Explotar/Mejorar/Compartir/Aceptar para oportunidades)
- Acciones de respuesta específicas
- Recursos necesarios para la respuesta
- Presupuesto de respuesta (de reservas de contingencia)
- Responsable de ejecutar la respuesta
- Plazo para implementar respuesta
- Indicadores de éxito de la respuesta
- Plan de contingencia (si la respuesta primaria falla)
- Plan de reserva (fallback)

**Formato**: `.md` (narrativo) o `.csv` (tabular)
**Cuándo se genera**: Fase de Planificación
**Importancia**: Alta - Define cómo se responderá

### 4. Plan de Gestión de Riesgos

Define el enfoque, metodología, roles y umbrales:
- Metodología de gestión de riesgos
- Roles y responsabilidades en gestión de riesgos
- Presupuesto y recursos para gestión de riesgos
- Timing de actividades de riesgo (cuándo revisar)
- Categorías de riesgo (RBS - Risk Breakdown Structure)
- Definiciones de probabilidad e impacto
- Matriz de probabilidad-impacto
- Umbrales de riesgo (tolerancia organizacional)
- Formatos de reporte
- Proceso de seguimiento

**Formato**: `.md` (Markdown)
**Cuándo se genera**: Fase de Planificación
**Importancia**: Media - Guía la gestión de riesgos

### 5. Análisis de Oportunidades

Identifica eventos positivos potenciales:
- ID de la oportunidad
- Descripción de la oportunidad
- Probabilidad de ocurrencia
- Impacto positivo (beneficios)
- Estrategia (Explotar/Mejorar/Compartir/Aceptar)
- Acciones para maximizar probabilidad o impacto
- Responsable de perseguir la oportunidad
- Inversión requerida
- ROI esperado de la oportunidad

**Formato**: `.csv`
**Cuándo se genera**: Fase de Planificación
**Importancia**: Media - Maximiza valor del proyecto

## Proceso de Generación

### Paso 1: Identificación de Riesgos

El skill usa múltiples técnicas:

#### Lluvia de Ideas (Brainstorming)
Sesión con el equipo del proyecto para identificar riesgos.
- Ambiente abierto, sin críticas
- Todas las ideas son válidas
- Facilitador registra todos los riesgos mencionados

#### Análisis de Supuestos
Revisa supuestos del proyecto y pregunta: "¿Qué pasa si este supuesto es falso?"

**Ejemplo**:
- Supuesto: "Tendremos acceso al ambiente de pruebas desde el día 1"
- Riesgo: "Retraso en acceso al ambiente de pruebas podría retrasar inicio de testing en 2 semanas"

#### Revisión de Documentación
Analiza:
- Lecciones aprendidas de proyectos similares
- Registro de riesgos de proyectos anteriores
- Artículos de la industria sobre proyectos similares

#### Análisis de Checklist
Usa listas de riesgos comunes por categoría:
- Técnicos: Tecnología no madura, complejidad técnica
- Externos: Regulaciones, competencia, mercado
- Organizacionales: Cambio de prioridades, rotación de personal
- Gestión del proyecto: Estimaciones incorrectas, dependencias

#### Análisis de Causa Raíz
Identifica causas fundamentales, no síntomas.

**Ejemplo**:
- ❌ Síntoma: "Riesgo de que el proyecto se retrase"
- ✅ Causa raíz: "Riesgo de que el proveedor no entregue componentes a tiempo porque está sobrecargado"

#### Técnica Delphi
Consulta anónima a expertos, múltiples rondas hasta consenso.

### Paso 2: Análisis Cualitativo de Riesgos

El skill evalúa cada riesgo:

#### Evaluación de Probabilidad

**Escala Cualitativa**:
| Nivel | Probabilidad | Rango |
|-------|--------------|-------|
| Muy Baja | Muy improbable | 0-10% |
| Baja | Improbable | 10-30% |
| Media | Posible | 30-50% |
| Alta | Probable | 50-70% |
| Muy Alta | Muy probable | 70-100% |

#### Evaluación de Impacto

**Impacto en Objetivos del Proyecto**:
| Nivel | Costo | Tiempo | Alcance | Calidad |
|-------|-------|--------|---------|---------|
| Muy Bajo | <2% | <2% | Imperceptible | Degradación mínima |
| Bajo | 2-5% | 2-5% | Áreas menores | Reducción aceptable |
| Medio | 5-10% | 5-10% | Áreas mayores | Requiere aprobación |
| Alto | 10-20% | 10-20% | Inaceptable | Inaceptable |
| Muy Alto | >20% | >20% | Invalida proyecto | Inútil |

#### Cálculo de Puntuación de Riesgo

**Método Ordinal**:
```
Puntuación = Probabilidad × Impacto
```

**Ejemplo**:
- Probabilidad: Alta (4 en escala 1-5)
- Impacto: Alto (4 en escala 1-5)
- Puntuación = 4 × 4 = 16 (Riesgo Alto)

#### Ubicación en Matriz

El skill ubica cada riesgo en la matriz de Probabilidad-Impacto para priorización:
- **Zona Roja**: Riesgos altos - Requieren atención inmediata
- **Zona Amarilla**: Riesgos medios - Monitorear y planificar respuesta
- **Zona Verde**: Riesgos bajos - Incluir en watchlist

### Paso 3: Análisis Cuantitativo de Riesgos (Opcional)

Para riesgos críticos, el skill puede realizar análisis numérico:

#### Valor Monetario Esperado (EMV)
```
EMV = Probabilidad × Impacto Monetario
```

**Ejemplo**:
- Riesgo: "Proveedor no entrega a tiempo"
- Probabilidad: 30%
- Impacto: $50,000 (costo de alternativa + penalidad)
- EMV = 0.30 × $50,000 = $15,000

**Uso**: Sumar todos los EMV para calcular reservas de contingencia.

#### Análisis de Sensibilidad
Identifica qué riesgos tienen mayor impacto en los objetivos.

#### Análisis de Árbol de Decisiones
Evalúa alternativas con diferentes escenarios de riesgo.

#### Simulación Monte Carlo
Calcula distribución de probabilidad de resultados del proyecto.

### Paso 4: Planificación de Respuestas

El skill define estrategias por tipo de riesgo:

#### Para Amenazas (Riesgos Negativos)

**1. Evitar (Eliminate)**
Eliminar la amenaza cambiando el plan del proyecto.

**Ejemplo**:
- Riesgo: "Tecnología X es inmadura y puede tener bugs"
- Respuesta: Usar tecnología Y probada en su lugar

**2. Mitigar (Reduce)**
Reducir probabilidad o impacto a nivel aceptable.

**Ejemplo**:
- Riesgo: "Personal clave puede renunciar"
- Respuesta: Documentar conocimiento, cross-training, mejorar condiciones

**3. Transferir (Transfer)**
Pasar la responsabilidad del riesgo a un tercero (no elimina el riesgo).

**Ejemplo**:
- Riesgo: "Fluctuación de tipo de cambio"
- Respuesta: Seguro de tipo de cambio, contratos en moneda local

**4. Aceptar (Accept)**
Reconocer el riesgo sin acción proactiva.
- **Aceptación Activa**: Establecer reservas de contingencia
- **Aceptación Pasiva**: No hacer nada hasta que ocurra

**Ejemplo**:
- Riesgo: "Lluvias leves pueden retrasar 1 día"
- Respuesta: Aceptar, no es material

#### Para Oportunidades (Riesgos Positivos)

**1. Explotar (Exploit)**
Asegurar que la oportunidad ocurra.

**Ejemplo**:
- Oportunidad: "Proveedor puede ofrecer descuento por volumen"
- Respuesta: Comprometer orden completa por adelantado

**2. Mejorar (Enhance)**
Aumentar probabilidad o impacto positivo.

**Ejemplo**:
- Oportunidad: "Terminar antes del plazo"
- Respuesta: Agregar recursos, fast-track para acelerar

**3. Compartir (Share)**
Asignar la oportunidad a tercero mejor posicionado para capturarla.

**Ejemplo**:
- Oportunidad: "Expansión a nuevo mercado"
- Respuesta: Joint venture con partner local

**4. Aceptar (Accept)**
No invertir en perseguir la oportunidad activamente, pero tomarla si ocurre.

### Paso 5: Definición de Disparadores (Triggers)

El skill identifica señales de alerta temprana:

**Ejemplo**:
- Riesgo: "Sobre-costo en desarrollo"
- Disparador: "CPI < 0.90 por 2 períodos consecutivos"
- Acción: Activar plan de contingencia

### Paso 6: Cálculo de Reservas

#### Reservas de Contingencia
Para riesgos identificados.

**Método del EMV**:
Suma de todos los valores monetarios esperados de amenazas.

**Método del Porcentaje**:
Típicamente 5-15% del presupuesto base.

**Método Bottom-Up**:
Suma del costo de cada plan de respuesta.

#### Reservas de Gestión
Para riesgos desconocidos ("unknown unknowns").
Típicamente 5-10% del presupuesto (incluyendo contingencia).

## Categorías de Riesgo (RBS - Risk Breakdown Structure)

```
Riesgos del Proyecto
├── Técnicos
│   ├── Requisitos
│   ├── Tecnología
│   ├── Complejidad
│   └── Desempeño
├── Externos
│   ├── Regulatorios
│   ├── Mercado
│   ├── Cliente
│   └── Clima
├── Organizacionales
│   ├── Dependencias
│   ├── Recursos
│   ├── Financiamiento
│   └── Priorización
└── Gestión del Proyecto
    ├── Estimación
    ├── Planificación
    ├── Control
    └── Comunicación
```

## Integración con Otros Skills

### Dependencies (Qué necesita este skill)
- **Gobernanza**: Objetivos y alcance del Acta de Constitución
- **Alcance**: WBS para identificar riesgos por paquete de trabajo
- **Cronograma**: Identificar riesgos en el camino crítico
- **Finanzas**: Presupuesto base para calcular reservas
- **Recursos**: Dependencias de recursos críticos
- **Interesados**: Stakeholders ayudan a identificar riesgos

### Outputs Utilizados Por (Qué skills usan los outputs de Riesgo)
- **Finanzas**: Reservas de contingencia se agregan al presupuesto
- **Cronograma**: Riesgos de cronograma pueden requerir buffers
- **Interesados**: Comunicar riesgos principales a stakeholders clave

## Adaptación por Enfoque de Ciclo de Vida

### Enfoque Predictivo
- Registro de riesgos exhaustivo al inicio
- Análisis cuantitativo detallado
- Planes de respuesta formales
- Revisiones periódicas programadas (mensuales)
- Reservas calculadas con precisión

### Enfoque Ágil
- Identificación continua de riesgos
- Riesgos como items del backlog
- Respuestas adaptativas
- Revisión en cada retrospectiva
- Impediment backlog para riesgos materializados

### Enfoque Iterativo
- Riesgos identificados por iteración
- Reevaluación al inicio de cada iteración
- Lecciones aprendidas incorporadas

### Enfoque Híbrido
- Riesgos estratégicos: gestión predictiva
- Riesgos operacionales: gestión ágil
- Reservas calculadas para fases predictivas
- Buffer management para fases ágiles

## Plantillas de Referencia

Las plantillas para este skill se encuentran en:

```
references/riesgo/plantillas/
└── registro-riesgos.md
```

## Ejemplos de Uso

### Ejemplo 1: Registro de Riesgos

| ID | Descripción | Probabilidad | Impacto | Puntuación | Estrategia | Plan de Respuesta | Owner |
|----|-------------|--------------|---------|------------|------------|-------------------|-------|
| R-001 | Proveedor no entrega a tiempo | Alta (70%) | Alto | 0.70 | Mitigar | Identificar proveedor alternativo, cláusula de penalidad | Juan P. |
| R-002 | Personal clave renuncia | Media (40%) | Muy Alto | 0.40 | Mitigar | Documentación, cross-training, retención | María G. |
| R-003 | Cambio regulatorio | Baja (20%) | Medio | 0.20 | Aceptar Activo | Monitorear regulaciones, reserva $15K | Pedro R. |
| O-001 | Descuento por volumen disponible | Media (50%) | Medio | 0.50 | Explotar | Comprometer orden completa | Ana T. |

### Ejemplo 2: Matriz de Probabilidad-Impacto

```
        │  Muy Bajo  │   Bajo    │   Medio   │   Alto    │ Muy Alto  │
────────┼────────────┼───────────┼───────────┼───────────┼───────────┤
Muy Alta│   R-015    │   R-003   │   R-001   │   R-007   │  R-002    │
  70%+  │   Verde    │  Amarillo │    Rojo   │    Rojo   │    Rojo   │
────────┼────────────┼───────────┼───────────┼───────────┼───────────┤
Alta    │   R-008    │   R-012   │   R-009   │   R-004   │           │
 50-70% │   Verde    │  Amarillo │  Amarillo │    Rojo   │           │
────────┼────────────┼───────────┼───────────┼───────────┼───────────┤
Media   │   R-011    │   R-006   │   R-010   │           │           │
 30-50% │   Verde    │   Verde   │  Amarillo │           │           │
────────┼────────────┼───────────┼───────────┼───────────┼───────────┤
Baja    │   R-013    │   R-014   │           │           │           │
 10-30% │   Verde    │   Verde   │           │           │           │
────────┼────────────┼───────────┼───────────┼───────────┼───────────┤
Muy Baja│   R-016    │           │           │           │           │
  <10%  │   Verde    │           │           │           │           │
```

**Priorización**:
1. **Rojo (R-001, R-002, R-004, R-007)**: Atención inmediata, planes de respuesta detallados
2. **Amarillo**: Planes de respuesta o monitoreo activo
3. **Verde**: Incluir en watchlist, revisar periódicamente

### Ejemplo 3: Cálculo de Reservas

**Enfoque EMV**:
- R-001: 70% × $50,000 = $35,000
- R-002: 40% × $80,000 = $32,000
- R-003: 20% × $15,000 = $3,000
- R-004: 60% × $20,000 = $12,000
- **Total Reserva de Contingencia**: $82,000

## Métricas de Calidad del Artefacto

Un registro de riesgos de calidad debe:
- [ ] Incluir riesgos de todas las categorías (RBS completo)
- [ ] Tener al menos 10-20 riesgos en proyectos medianos
- [ ] Incluir tanto amenazas como oportunidades
- [ ] Definir probabilidad E impacto para cada riesgo
- [ ] Asignar dueño (owner) a cada riesgo
- [ ] Tener estrategia de respuesta para riesgos altos
- [ ] Identificar disparadores (triggers)
- [ ] Incluir causa raíz, no solo síntomas
- [ ] Estar validado por el equipo
- [ ] Actualizarse regularmente (al menos mensual)

## Errores Comunes a Evitar

1. **Identificar síntomas, no causas**: "Riesgo de retraso" en lugar de "Riesgo de que proveedor no entregue"
2. **Solo amenazas, no oportunidades**: Ignorar riesgos positivos
3. **Riesgos ya ocurridos**: Confundir riesgo con problema
4. **Falta de dueño**: Riesgos sin responsable
5. **Análisis paralizado**: Demasiado análisis, poca acción
6. **Registro estático**: No actualizar conforme evoluciona el proyecto
7. **Ignorar riesgos secundarios**: No considerar riesgos creados por las respuestas
8. **Confundir mitigar con transferir**: Seguro transfiere, no mitiga

## Fórmulas Clave

### Valor Monetario Esperado (EMV)
```
EMV = Probabilidad × Impacto Monetario
```

### Reserva de Contingencia
```
Reserva = Σ(EMV de todos los riesgos identificados)
```

### Exposición al Riesgo
```
Exposición = Probabilidad × (Impacto - Costo de Respuesta)
```

### Eficiencia de Respuesta
```
Eficiencia = Reducción de Exposición / Costo de Respuesta
```

## Palabras Clave

`Riesgo`, `Risk`, `Amenaza`, `Threat`, `Oportunidad`, `Opportunity`, `Registro de Riesgos`, `Risk Register`, `Probabilidad`, `Probability`, `Impacto`, `Impact`, `Matriz de Riesgo`, `Risk Matrix`, `Plan de Respuesta`, `Response Plan`, `Evitar`, `Mitigar`, `Transferir`, `Aceptar`, `Explotar`, `Mejorar`, `Compartir`, `EMV`, `Valor Monetario Esperado`, `Expected Monetary Value`, `Contingencia`, `Contingency`, `Disparador`, `Trigger`

---

**Dominio PMBOK 8**: Riesgo
**Subagente**: `riesgo-agent.md`
**Referencias**: `references/riesgo/`
