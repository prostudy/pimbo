# Skill: Cronograma

## Propósito

Planificar y representar la dimensión temporal del proyecto, determinando cuándo se realizará el trabajo y cuándo se entregarán los productos.

## Descripción del Dominio

El dominio de Cronograma del PMBOK 8 se enfoca en la gestión de la dimensión temporal del proyecto. Este skill genera artefactos que representan la secuencia de actividades, sus duraciones, dependencias y fechas de entrega, permitiendo visualizar y controlar el progreso temporal del proyecto.

## Artefactos que Produce

### 1. Cronograma del Proyecto (Gantt Chart)

Representación gráfica de actividades, duración y secuencia:
- Lista de actividades con fechas de inicio y fin
- Duración de cada actividad
- Dependencias entre actividades
- Ruta crítica identificada
- Holguras de actividades no críticas
- Representación visual (barras Gantt)
- Asignación de recursos por actividad

**Formato**: `.csv` (datos tabulares optimizados)
**Cuándo se genera**: Fase de Planificación
**Importancia**: Crítico - Define cuándo se hará el trabajo

### 2. Lista de Hitos (Milestones)

Eventos clave del proyecto con sus fechas objetivo:
- ID del hito
- Nombre del hito
- Descripción
- Fecha objetivo
- Criterio de cumplimiento
- Responsable de validación
- Estado (Pendiente/Completado)
- Hito de decisión (Go/No-Go)

**Formato**: `.csv`
**Cuándo se genera**: Fase de Planificación
**Importancia**: Alta - Puntos de control del proyecto

### 3. Diagrama de Red (Network Diagram)

Muestra dependencias entre actividades:
- Nodos representando actividades
- Flechas representando dependencias
- Tipos de dependencia (FS, SS, FF, SF)
- Adelantos (leads) y retrasos (lags)
- Camino crítico resaltado
- Fechas tempranas y tardías

**Formato**: `.json` (estructura de grafo) o diagrama visual
**Cuándo se genera**: Fase de Planificación
**Importancia**: Alta - Visualiza dependencias críticas

### 4. Calendario del Proyecto

Define días y horarios laborables:
- Días laborables de la semana
- Horario de trabajo diario
- Días festivos y no laborables
- Períodos de cierre (vacaciones)
- Excepciones por recurso
- Zonas horarias (proyectos globales)

**Formato**: `.json` o `.csv`
**Cuándo se genera**: Fase de Planificación
**Importancia**: Media - Afecta cálculo de duraciones

### 5. Plan de Gestión del Cronograma

Establece políticas y procedimientos:
- Metodología de desarrollo del cronograma
- Herramientas a utilizar
- Unidades de medida (horas, días)
- Nivel de precisión de estimaciones
- Umbrales de variación aceptables
- Proceso de actualización del cronograma
- Reportes de desempeño temporal

**Formato**: `.md` (Markdown)
**Cuándo se genera**: Fase de Planificación
**Importancia**: Media - Guía la gestión temporal

## Proceso de Generación

### Paso 1: Importación de Paquetes de Trabajo

El skill recibe:
1. WBS del skill de Alcance
2. Paquetes de trabajo del nivel más bajo
3. Diccionario de la WBS con descripciones

Convierte cada paquete de trabajo en una o más actividades del cronograma.

### Paso 2: Secuenciación de Actividades

Identifica dependencias entre actividades:

**Tipos de dependencias**:
- **Fin-Inicio (FS)**: B inicia cuando A termina (más común)
- **Inicio-Inicio (SS)**: B inicia cuando A inicia
- **Fin-Fin (FF)**: B termina cuando A termina
- **Inicio-Fin (SF)**: B termina cuando A inicia (raro)

**Tipos de lógica**:
- **Obligatoria**: Inherente a la naturaleza del trabajo
- **Discrecional**: Basada en mejores prácticas
- **Externa**: Fuera del control del equipo

### Paso 3: Estimación de Duraciones

El skill aplica técnicas de estimación:

#### Técnica Análoga
Usa duración de actividades similares en proyectos pasados.
- **Ventaja**: Rápida, bajo costo
- **Desventaja**: Menos precisa

#### Técnica Paramétrica
Usa relaciones estadísticas históricas.
- **Ejemplo**: 100 metros de cable = 0.5 días × 100 = 50 días
- **Ventaja**: Más precisa con datos históricos
- **Desventaja**: Requiere datos confiables

#### Estimación de Tres Puntos (PERT)
Calcula duración esperada considerando incertidumbre:

```
Duración Esperada = (Optimista + 4×Más Probable + Pesimista) / 6
```

**Ejemplo**:
- Optimista: 3 días
- Más probable: 5 días
- Pesimista: 9 días
- **Esperada**: (3 + 4×5 + 9) / 6 = 32/6 = 5.3 días

#### Estimación Bottom-Up
Descompone trabajo en componentes más pequeños y suma.
- **Ventaja**: Más precisa
- **Desventaja**: Consume más tiempo

### Paso 4: Desarrollo del Modelo de Cronograma

Aplica el **Método del Camino Crítico (CPM)**:

1. **Calcula fechas tempranas** (forward pass):
   - Fecha de inicio temprana (ES)
   - Fecha de fin temprana (EF)

2. **Calcula fechas tardías** (backward pass):
   - Fecha de inicio tardía (LS)
   - Fecha de fin tardía (LF)

3. **Calcula holguras**:
   - Holgura Total = LS - ES (o LF - EF)
   - Holgura Libre = ES(sucesor) - EF(actividad)

4. **Identifica camino crítico**:
   - Actividades con holgura = 0
   - Secuencia más larga del proyecto
   - Define la duración total del proyecto

### Paso 5: Optimización del Cronograma

Si la duración excede restricciones, aplica técnicas de compresión:

#### Fast Tracking
Realizar actividades en paralelo que normalmente serían secuenciales.
- **Ventaja**: No aumenta costos directamente
- **Desventaja**: Aumenta riesgos

#### Crashing
Agregar recursos para reducir duración de actividades críticas.
- **Ventaja**: Reduce duración de manera controlada
- **Desventaja**: Aumenta costos

### Paso 6: Generación de Representación Visual

El skill genera el cronograma en formato Gantt (CSV):

```csv
ID,Actividad,Inicio,Fin,Duración,Predecesores,Ruta Crítica
1.1,Análisis de requisitos,2026-02-01,2026-02-14,14,,Sí
1.2,Diseño del sistema,2026-02-15,2026-03-07,21,1.1,Sí
1.3,Desarrollo Módulo A,2026-03-08,2026-04-11,35,1.2,Sí
1.4,Desarrollo Módulo B,2026-03-08,2026-04-04,28,1.2,No
```

## Técnicas de Estimación

### Análoga (Top-Down)
Basada en proyectos similares anteriores.

**Cuándo usar**: Fases iniciales, poca información disponible
**Precisión**: ±25-75%

### Paramétrica
Usando relaciones estadísticas.

**Ejemplo**: Desarrollo = 40 horas/función × 15 funciones = 600 horas
**Precisión**: ±10-25%

### Tres Puntos (PERT)
Considera incertidumbre con tres escenarios.

**Fórmula**: (O + 4M + P) / 6
**Precisión**: ±10-20%

### Bottom-Up
Estima cada componente pequeño y suma.

**Cuándo usar**: Cuando se necesita máxima precisión
**Precisión**: ±5-10%

## Tipos de Dependencias

### Fin-Inicio (FS) - Finish-to-Start
La actividad B no puede iniciar hasta que A termine.

**Ejemplo**: No se puede empezar a construir hasta terminar los cimientos.

### Inicio-Inicio (SS) - Start-to-Start
La actividad B no puede iniciar hasta que A inicie.

**Ejemplo**: Pruebas pueden iniciar cuando desarrollo inicia (no esperar a que termine).

### Fin-Fin (FF) - Finish-to-Finish
La actividad B no puede terminar hasta que A termine.

**Ejemplo**: Documentación termina cuando desarrollo termina.

### Inicio-Fin (SF) - Start-to-Finish
La actividad B no puede terminar hasta que A inicie (raro).

**Ejemplo**: Turno nocturno no termina hasta que turno diurno inicie.

## Integración con Otros Skills

### Dependencies (Qué necesita este skill)
- **Alcance**: Paquetes de trabajo de la WBS
- **Recursos**: Disponibilidad de recursos para asignar a actividades
- **Gobernanza**: Hitos del Acta de Constitución

### Outputs Utilizados Por (Qué skills usan los outputs de Cronograma)
- **Finanzas**: Cronograma determina flujo de caja temporal
- **Recursos**: Cronograma indica cuándo se necesitan recursos
- **Riesgo**: Camino crítico identifica áreas de mayor riesgo temporal
- **Interesados**: Hitos son puntos de comunicación clave

## Adaptación por Enfoque de Ciclo de Vida

### Enfoque Predictivo
- Cronograma detallado completo al inicio
- Diagrama de Gantt exhaustivo
- Camino crítico calculado y monitoreado
- Línea base de cronograma establecida
- Cambios controlados formalmente

### Enfoque Ágil
- No hay cronograma detallado tradicional
- Timeboxes fijos (sprints de 2-4 semanas)
- Roadmap de alto nivel con releases
- Velocity para planificación de capacidad
- Burndown charts para seguimiento

### Enfoque Iterativo
- Cronograma de alto nivel para proyecto completo
- Cronograma detallado por iteración
- Hitos al final de cada iteración
- Refinamiento progresivo

### Enfoque Híbrido
- Cronograma predictivo para fases de infraestructura
- Sprints ágiles para desarrollo de software
- Integración entre fases tradicionales e iteraciones ágiles

## Plantillas de Referencia

Las plantillas para este skill se encuentran en:

```
references/cronograma/plantillas/
└── (plantillas de cronograma)
```

## Ejemplos de Uso

### Ejemplo 1: Camino Crítico

```
Proyecto: Duración total = 60 días

Ruta A: Diseño(10d) → Desarrollo(30d) → Pruebas(15d) = 55 días (holgura: 5d)
Ruta B: Análisis(5d) → Base Datos(25d) → Integración(20d) → Deploy(10d) = 60 días ★ CRÍTICA
Ruta C: Documentación(45d) → Revisión(8d) = 53 días (holgura: 7d)
```

La Ruta B es crítica porque cualquier retraso retrasa todo el proyecto.

### Ejemplo 2: Hitos de un Proyecto

| Hito | Fecha | Criterio | Go/No-Go |
|------|-------|----------|----------|
| Aprobación de requisitos | 2026-02-28 | 100% requisitos firmados | Sí |
| Diseño completado | 2026-03-31 | Arquitectura aprobada | Sí |
| Prototipo funcional | 2026-04-30 | Demo a stakeholders | No |
| Pruebas UAT completadas | 2026-06-15 | 95% pruebas pasadas | Sí |
| Go-Live | 2026-07-01 | Sistema en producción | Sí |

### Ejemplo 3: Compresión de Cronograma

**Situación**: Proyecto debe terminar en 90 días, cronograma actual es 110 días.

**Opciones**:
1. **Fast Tracking**: Iniciar desarrollo antes de completar diseño → Ahorra 15 días, aumenta riesgo de retrabajo
2. **Crashing**: Agregar 2 desarrolladores más → Reduce desarrollo de 50 a 38 días, costo adicional $40K

**Decisión**: Combinación: Fast tracking moderado (10 días) + crashing selectivo (10 días) = 90 días

## Métricas de Calidad del Artefacto

Un cronograma de calidad debe:
- [ ] Incluir todas las actividades de la WBS
- [ ] Tener duraciones estimadas con técnica apropiada
- [ ] Definir todas las dependencias entre actividades
- [ ] Identificar el camino crítico
- [ ] Incluir hitos clave y de decisión
- [ ] Considerar disponibilidad de recursos
- [ ] Respetar calendario laboral
- [ ] Tener línea base aprobada
- [ ] Incluir reservas de contingencia temporal
- [ ] Estar validado por el equipo

## Errores Comunes a Evitar

1. **Olvidar actividades**: No incluir gestión, pruebas, transición
2. **Dependencias incorrectas**: Confundir FS con SS
3. **Estimaciones optimistas**: Usar solo el escenario optimista
4. **Ignorar restricciones**: No considerar días no laborables
5. **No identificar camino crítico**: Foco en actividades incorrectas
6. **Cronograma sin recursos**: No validar disponibilidad
7. **Nivel de detalle inadecuado**: Muy detallado o muy general

## Palabras Clave

`Cronograma`, `Schedule`, `Gantt`, `Diagrama de Gantt`, `Hitos`, `Milestones`, `Camino Crítico`, `Critical Path`, `CPM`, `Ruta Crítica`, `Dependencias`, `Precedencias`, `Estimación`, `PERT`, `Duración`, `Fast Tracking`, `Crashing`, `Holgura`, `Slack`, `Float`, `Diagrama de Red`, `Network Diagram`

---

**Dominio PMBOK 8**: Cronograma
**Subagente**: `cronograma-agent.md`
**Referencias**: `references/cronograma/`
