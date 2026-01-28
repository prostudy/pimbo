# Skill: Ágil

## Propósito

Generar artefactos específicos para enfoques ágiles e híbridos, facilitando la adaptabilidad, entregas incrementales y feedback continuo.

## Descripción del Framework

El enfoque Ágil es un conjunto de valores y principios para el desarrollo de software y gestión de proyectos que prioriza la adaptabilidad sobre la predictibilidad. Este skill genera artefactos alineados con el Manifiesto Ágil y frameworks como Scrum, Kanban y otros enfoques iterativos e incrementales. Es complementario a los dominios tradicionales del PMBOK 8, ofreciendo una alternativa más ligera y adaptable.

## Valores del Manifiesto Ágil

1. **Individuos e interacciones** sobre procesos y herramientas
2. **Software funcionando** sobre documentación exhaustiva
3. **Colaboración con el cliente** sobre negociación contractual
4. **Respuesta ante el cambio** sobre seguir un plan

## Artefactos que Produce

### 1. Product Backlog

Lista ordenada de todo lo que se necesita en el producto:
- ID del item (PBI - Product Backlog Item)
- Título/descripción breve
- Descripción detallada
- Tipo (Historia de Usuario, Tarea Técnica, Bug, Spike)
- Prioridad (ordenada por valor de negocio)
- Estimación (Puntos de historia o tamaño)
- Criterios de aceptación
- Notas/Comentarios
- Estado (Ready, In Progress, Done)
- Sprint asignado (si aplica)

**Formato**: `.csv` (para gestión y filtrado)
**Cuándo se genera**: Fase de Inicio, refinado continuamente
**Importancia**: Crítico - Es el "qué" del proyecto ágil

### 2. Historias de Usuario (User Stories)

Describen funcionalidades desde la perspectiva del usuario:
- **Formato estándar**: "Como [tipo de usuario], quiero [funcionalidad] para [beneficio]"
- Criterios de aceptación específicos y verificables
- Estimación en puntos de historia
- Prioridad de negocio
- Dependencias con otras historias
- Definición de Done aplicable

**Formato**: `.md` (narrativo) o `.csv` (tabular)
**Cuándo se genera**: Fase de Planificación/Refinamiento continuo
**Importancia**: Crítico - Unidad fundamental de requisitos ágiles

### 3. Sprint Backlog

Elementos seleccionados para el sprint actual:
- Items del Product Backlog seleccionados
- Tareas específicas para completar cada item
- Responsable de cada tarea
- Estimación en horas de cada tarea
- Estado actual (To Do, In Progress, Done)
- Capacidad del equipo para el sprint
- Sprint Goal (objetivo del sprint)

**Formato**: `.csv` o tablero Kanban visual
**Cuándo se genera**: Sprint Planning, actualizado diariamente
**Importancia**: Alto - Plan de trabajo del sprint

### 4. Definition of Done (DoD)

Define los criterios que debe cumplir un elemento para considerarse terminado:
- Código escrito y revisado (code review)
- Pruebas unitarias pasadas
- Pruebas de integración pasadas
- Documentación actualizada
- Código integrado en rama principal
- Demostrado al Product Owner
- Aceptado por el Product Owner
- Sin defectos críticos conocidos

**Formato**: `.md` (lista de verificación)
**Cuándo se genera**: Inicio del proyecto, refinado por el equipo
**Importancia**: Alto - Define "terminado"

### 5. Burndown Chart

Muestra el trabajo restante a lo largo del tiempo:
- Eje X: Días del sprint
- Eje Y: Puntos de historia o tareas restantes
- Línea ideal (descenso lineal)
- Línea real (progreso actual)
- Visualiza si el equipo va a terminar a tiempo

**Formato**: `.csv` (datos para graficar)
**Cuándo se genera**: Actualizado diariamente durante el sprint
**Importancia**: Media - Visualiza progreso del sprint

### 6. Velocity (Velocidad)

Mide la cantidad de trabajo completado por sprint:
- Puntos de historia completados por sprint
- Promedio móvil (últimos 3-5 sprints)
- Tendencia (mejorando/estable/decreciendo)
- Usa para planificación de capacidad futura

**Formato**: `.csv` con datos por sprint
**Cuándo se genera**: Al final de cada sprint
**Importancia**: Alta - Predice capacidad futura

### 7. Product Roadmap

Visualización de alto nivel de releases y épicas:
- Timeline de releases planificados
- Épicas principales por release
- Fechas objetivo (no compromisos firmes)
- Temas/objetivos de cada release
- Dependencias entre releases

**Formato**: `.md` (narrativo) o visual
**Cuándo se genera**: Fase de Inicio, actualizado trimestralmente
**Importancia**: Media - Comunicación de visión

### 8. Retrospective Notes

Captura lecciones aprendidas de cada sprint:
- Qué funcionó bien (keep doing)
- Qué no funcionó (stop doing)
- Qué mejorar (start doing)
- Acciones acordadas
- Responsables de acciones
- Seguimiento de acciones previas

**Formato**: `.md` (notas narrativas)
**Cuándo se genera**: Al final de cada sprint
**Importancia**: Alta - Mejora continua

## Proceso de Generación

### Paso 1: Traducción de Requisitos a Historias de Usuario

El skill convierte requisitos tradicionales a formato de historias:

#### Requisito Tradicional
"El sistema debe permitir que los usuarios registren nuevos clientes con nombre, email y teléfono."

#### Historia de Usuario
```
Como vendedor,
Quiero registrar nuevos clientes con su información de contacto
Para poder hacer seguimiento de oportunidades de venta.

Criterios de aceptación:
- Puedo ingresar nombre (obligatorio)
- Puedo ingresar email (obligatorio, validar formato)
- Puedo ingresar teléfono (opcional)
- Sistema valida que email sea único
- Recibo confirmación cuando cliente es registrado
- Cliente aparece inmediatamente en lista de clientes
```

### Paso 2: Priorización del Backlog

El skill ordena las historias usando técnicas:

#### Técnica MoSCoW
- **M**ust have: Esencial para el MVP
- **S**hould have: Importante pero no crítico
- **C**ould have: Deseable si hay tiempo
- **W**on't have: Fuera de alcance para este release

#### Matriz Valor/Esfuerzo
```
        │ Bajo Esfuerzo │ Alto Esfuerzo │
────────┼───────────────┼───────────────┤
Alto    │ Quick Wins    │ Big Bets      │
Valor   │ (PRIORIDAD 1) │ (PRIORIDAD 2) │
────────┼───────────────┼───────────────┤
Bajo    │ Fill-ins      │ Time Sinks    │
Valor   │ (PRIORIDAD 3) │ (EVITAR)      │
```

#### Modelo Kano
Clasifica funcionalidades en:
- **Básicas**: Se esperan, no satisfacen pero su ausencia decepciona
- **Desempeño**: Más es mejor, satisfacen proporcionalmente
- **Atractivas**: No se esperan, su presencia deleita

### Paso 3: Estimación de Tamaño

El skill estima usando técnicas ágiles:

#### Planning Poker
Equipo estima usando secuencia Fibonacci:
- 1, 2, 3, 5, 8, 13, 21, 40, 100
- Cada miembro muestra su estimación simultáneamente
- Se discuten diferencias y se re-estima hasta consenso

#### Tallas de Camiseta
Para estimación rápida de épicas:
- XS (Extra Small)
- S (Small)
- M (Medium)
- L (Large)
- XL (Extra Large)

#### Puntos de Historia (Story Points)
Medida relativa de esfuerzo que considera:
- Complejidad técnica
- Cantidad de trabajo
- Incertidumbre/riesgos

**No son horas**: 5 puntos de una historia compleja ≠ 5 puntos de historia simple

### Paso 4: Agrupación en Sprints/Releases

El skill organiza el trabajo:

#### Definición de Sprint
- Duración fija (típicamente 2 semanas)
- Objetivo específico (Sprint Goal)
- Equipo comprometido
- No se agregan items una vez iniciado (idealmente)

#### Planificación de Capacidad
```
Velocity promedio: 30 puntos/sprint
Sprints de 2 semanas
→ Capacidad: 60 puntos/mes
→ Si Product Backlog suma 240 puntos: ~4 meses
```

#### Releases
Agrupación de múltiples sprints:
- Release 1 (MVP): Sprints 1-3
- Release 2 (Expansión): Sprints 4-6
- Release 3 (Optimización): Sprints 7-9

### Paso 5: Generación de Definition of Done

El skill define criterios compartidos:

#### DoD a Nivel de Historia
- Código completo
- Pruebas unitarias escritas y pasadas
- Code review completado
- Criterios de aceptación verificados
- Demostrado a Product Owner
- Aceptado por Product Owner

#### DoD a Nivel de Sprint
- Todas las historias cumplieron su DoD
- Pruebas de regresión pasadas
- Documentación actualizada
- Deploy a ambiente de staging exitoso
- Demo completada

#### DoD a Nivel de Release
- Todas las funcionalidades probadas end-to-end
- Documentación de usuario completa
- Performance aceptable
- Seguridad validada
- Deploy a producción exitoso

### Paso 6: Configuración de Métricas

El skill establece seguimiento:

#### Burndown Chart
Configuración:
- Eje X: Días del sprint (Día 0 a Día 14 para sprint de 2 semanas)
- Eje Y: Puntos de historia restantes
- Día 0: Total de puntos comprometidos
- Cada día: Restar puntos de historias completadas

#### Velocity Tracking
Por cada sprint registra:
- Puntos comprometidos
- Puntos completados
- Puntos añadidos mid-sprint
- Velocity real = Puntos completados

Calcula promedio móvil de últimos 3-5 sprints para predecir capacidad.

## Roles Ágiles

### Product Owner
- Representa al cliente/negocio
- Prioriza el Product Backlog
- Define criterios de aceptación
- Acepta o rechaza trabajo completado
- Maximiza valor del producto

### Scrum Master (si se usa Scrum)
- Facilita el proceso ágil
- Remueve impedimentos
- Protege al equipo de interrupciones
- Coaching en prácticas ágiles
- Facilita ceremonias

### Development Team
- Auto-organizado
- Cross-funcional
- Típicamente 5-9 personas
- Estima y se compromete a trabajo
- Entrega incrementos de producto

## Ceremonias Ágiles (Scrum)

### Sprint Planning
- **Duración**: 4-8 horas para sprint de 2 semanas
- **Objetivo**: Definir qué se hará y cómo
- **Output**: Sprint Backlog y Sprint Goal

### Daily Standup
- **Duración**: 15 minutos máximo
- **Preguntas**: ¿Qué hice ayer? ¿Qué haré hoy? ¿Tengo impedimentos?
- **Objetivo**: Sincronización del equipo

### Sprint Review (Demo)
- **Duración**: 2-4 horas
- **Objetivo**: Mostrar incremento completado
- **Asistentes**: Equipo + Stakeholders

### Sprint Retrospective
- **Duración**: 1.5-3 horas
- **Objetivo**: Mejora continua del proceso
- **Output**: Acciones de mejora

### Backlog Refinement
- **Duración**: ~10% del sprint
- **Objetivo**: Preparar historias para futuros sprints
- **Actividades**: Aclarar, estimar, dividir historias grandes

## Integración con Otros Skills

### Dependencies (Qué necesita este skill)
- **Gobernanza**: Visión y objetivos del proyecto
- **Alcance**: Requisitos de alto nivel para convertir en historias
- **Interesados**: Product Owner y stakeholders clave

### Outputs Utilizados Por (Qué skills usan los outputs de Ágil)
- **Cronograma**: Roadmap ágil proporciona fechas tentativas
- **Finanzas**: Velocity permite estimar duración y costo
- **Recursos**: Sprint Planning define necesidades por sprint

### Alternativas a Skills Tradicionales
- **En lugar de WBS**: Product Backlog con épicas e historias
- **En lugar de Gantt**: Burndown chart y Roadmap de releases
- **En lugar de Requisitos detallados**: Historias de usuario con criterios de aceptación

## Adaptación por Contexto

### Scrum Puro
- Todos los artefactos y ceremonias Scrum
- Sprints de duración fija
- Product Owner dedicado
- Definition of Done estricta

### Kanban
- Tablero de flujo continuo
- Límites WIP (Work In Progress)
- No sprints, entrega continua
- Enfoque en optimizar flujo

### Scrumban
- Combina Scrum y Kanban
- Sprints opcionales
- Tablero Kanban con límites WIP
- Retrospectivas regulares

### Scaled Agile (SAFe, LeSS, etc.)
- Múltiples equipos coordinados
- Program Increments
- Backlog a nivel de programa
- Sincronización entre equipos

### Enfoque Híbrido (Predictivo + Ágil)
- Fases iniciales predictivas (análisis, diseño)
- Desarrollo ágil (construcción iterativa)
- Cierre predictivo (despliegue, capacitación)
- Artefactos de ambos mundos

## Plantillas de Referencia

Las plantillas para este skill se encuentran en:

```
references/agile/plantillas/
└── product-backlog.md
```

## Ejemplos de Uso

### Ejemplo 1: Product Backlog

| ID | Historia | Prioridad | Estimación | Estado | Sprint |
|----|----------|-----------|------------|--------|--------|
| US-001 | Como usuario quiero login con email y password | Must | 5 | Done | Sprint 1 |
| US-002 | Como vendedor quiero registrar clientes | Must | 8 | Done | Sprint 1 |
| US-003 | Como vendedor quiero buscar clientes por nombre | Should | 3 | Done | Sprint 2 |
| US-004 | Como gerente quiero ver dashboard de ventas | Should | 13 | In Progress | Sprint 2 |
| US-005 | Como vendedor quiero registrar oportunidades | Must | 8 | Ready | Sprint 3 |

### Ejemplo 2: Historia de Usuario Completa

```markdown
# US-002: Registro de Clientes

## Historia
Como vendedor,
Quiero registrar nuevos clientes con su información de contacto
Para poder hacer seguimiento de oportunidades de venta.

## Criterios de Aceptación
- [ ] Puedo ingresar nombre completo (obligatorio, máx 100 caracteres)
- [ ] Puedo ingresar email (obligatorio, validar formato)
- [ ] Puedo ingresar teléfono (opcional, validar formato)
- [ ] Puedo ingresar empresa (opcional)
- [ ] Sistema valida que email sea único en el sistema
- [ ] Recibo mensaje de confirmación cuando cliente es registrado
- [ ] Cliente aparece inmediatamente en lista de clientes
- [ ] Si hay error de validación, veo mensaje claro

## Notas Técnicas
- Usar API REST POST /api/customers
- Validación en frontend y backend
- Email único enforzado en base de datos

## Estimación
8 puntos de historia

## Prioridad
Must Have (MVP)

## Dependencias
- Requiere US-001 (Login) completado

## Definition of Done
- Código escrito y en rama main
- Pruebas unitarias escritas (cobertura >80%)
- Pruebas de integración pasadas
- Code review aprobado por 2 desarrolladores
- Demostrado y aceptado por Product Owner
- Documentación API actualizada
```

### Ejemplo 3: Sprint Burndown Data

| Día | Puntos Restantes | Línea Ideal |
|-----|------------------|-------------|
| 0 | 40 | 40 |
| 1 | 40 | 37 |
| 2 | 35 | 34 |
| 3 | 35 | 31 |
| 4 | 28 | 28 |
| 5 | 28 | 25 |
| 6 | 20 | 22 |
| 7 | 20 | 19 |
| 8 | 15 | 16 |
| 9 | 10 | 13 |
| 10 | 5 | 10 |
| 11 | 5 | 7 |
| 12 | 0 | 4 |
| 13 | 0 | 1 |
| 14 | 0 | 0 |

**Interpretación**: Equipo empezó lento (Días 0-3) pero aceleró (Días 4-6) y terminó antes de tiempo.

## Métricas de Calidad del Artefacto

Un Product Backlog de calidad debe:
- [ ] Estar ordenado por prioridad/valor de negocio
- [ ] Tener historias en formato correcto (Como...Quiero...Para...)
- [ ] Incluir criterios de aceptación específicos y verificables
- [ ] Tener estimaciones para items de alta prioridad
- [ ] Estar refinado (2-3 sprints de trabajo listos)
- [ ] Incluir tanto funcionalidades como deuda técnica
- [ ] Ser comprensible para todo el equipo
- [ ] Actualizarse continuamente
- [ ] No tener historias demasiado grandes en el tope (épicas divididas)

## Errores Comunes a Evitar

1. **Historias técnicas en lugar de centradas en usuario**: ❌ "Crear tabla de clientes" → ✅ "Como vendedor quiero registrar clientes"
2. **Historias muy grandes**: Épicas sin dividir (>21 puntos)
3. **Falta de criterios de aceptación**: Historia ambigua, no verificable
4. **DoD muy laxa**: "Código escrito" sin mencionar pruebas o calidad
5. **Priorización por desarrolladores**: Product Owner debe priorizar por valor
6. **Velocity manipulation**: Inflar estimaciones para parecer más productivos
7. **Agregar trabajo mid-sprint**: Rompe el compromiso del sprint
8. **Retrospectivas sin acciones**: Identificar problemas pero no actuar

## Métricas Clave Ágiles

### Velocity
```
Velocity = Puntos de Historia Completados por Sprint
```

### Lead Time
Tiempo desde que item entra al backlog hasta que se entrega.

### Cycle Time
Tiempo desde que se empieza a trabajar un item hasta que se completa.

### Burndown Rate
```
Burndown Rate = Puntos Completados / Días Transcurridos
```

### Cumulative Flow Diagram
Visualiza items en cada estado (To Do, In Progress, Done) a lo largo del tiempo.

## Palabras Clave

`Ágil`, `Agile`, `Scrum`, `Kanban`, `Product Backlog`, `Backlog`, `Historia de Usuario`, `User Story`, `Sprint`, `Iteración`, `Iteration`, `Velocity`, `Velocidad`, `Burndown`, `Puntos de Historia`, `Story Points`, `Definition of Done`, `DoD`, `Product Owner`, `Scrum Master`, `Épica`, `Epic`, `Sprint Planning`, `Daily Standup`, `Sprint Review`, `Retrospective`, `Retrospectiva`

---

**Framework**: Ágil (Scrum, Kanban, SAFe, LeSS)
**Subagente**: `agile-agent.md`
**Referencias**: `references/agile/`
