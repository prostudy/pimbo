# Skill: Recursos

## Propósito

Planificar y gestionar los recursos humanos y materiales del proyecto, asegurando que el equipo tenga las competencias necesarias y que los recursos estén disponibles cuando se necesiten.

## Descripción del Dominio

El dominio de Recursos del PMBOK 8 se enfoca en identificar, adquirir, gestionar y liberar los recursos necesarios para el proyecto. Este incluye recursos humanos (equipo del proyecto), recursos físicos (equipos, materiales) y recursos intangibles (conocimiento, competencias). Este skill genera artefactos que definen la estructura del equipo, asignan responsabilidades y planifican el desarrollo de competencias.

## Artefactos que Produce

### 1. Plan de Gestión de Recursos

Define cómo se identificarán, adquirirán, gestionarán y liberarán los recursos:
- Metodología de planificación de recursos
- Roles y responsabilidades del equipo
- Organigrama del proyecto
- Proceso de adquisición de recursos
- Criterios de liberación de recursos
- Capacitación y desarrollo del equipo
- Reconocimientos y recompensas
- Gestión de conflictos
- Políticas de seguridad y salud

**Formato**: `.md` (Markdown narrativo)
**Cuándo se genera**: Fase de Planificación
**Importancia**: Alta - Guía toda la gestión de recursos

### 2. Matriz RACI

Asigna responsabilidades específicas para cada entregable y actividad:
- **R (Responsible)**: Quien ejecuta el trabajo
- **A (Accountable)**: Quien aprueba (solo uno por actividad)
- **C (Consulted)**: Quien aporta información (comunicación bidireccional)
- **I (Informed)**: Quien debe conocer el resultado (comunicación unidireccional)

Matriz con:
- Filas: Actividades/Entregables
- Columnas: Roles/Personas
- Celdas: R, A, C, I o vacío

**Formato**: `.csv` (matriz tabular)
**Cuándo se genera**: Fase de Planificación
**Importancia**: Crítico - Define quién hace qué

### 3. Organigrama del Proyecto

Representa gráficamente la estructura del equipo:
- Jerarquía del equipo del proyecto
- Líneas de reporte
- Relaciones funcionales
- Roles y nombres asignados
- Interfaces con la organización
- Estructura por subequipos si aplica

**Formato**: `.json` (estructura jerárquica) o diagrama visual
**Cuándo se genera**: Fase de Planificación
**Importancia**: Media - Visualiza estructura del equipo

### 4. Calendario de Recursos

Muestra disponibilidad de cada recurso a lo largo del proyecto:
- ID del recurso
- Nombre/Tipo de recurso
- Período (mensual típicamente)
- Disponibilidad (%, horas, días)
- Asignaciones actuales
- Capacidad restante
- Períodos de no disponibilidad (vacaciones)

**Formato**: `.csv` con columnas por período
**Cuándo se genera**: Fase de Planificación, actualizado en Ejecución
**Importancia**: Alta - Gestiona disponibilidad real

### 5. Plan de Desarrollo del Equipo

Describe actividades de capacitación y desarrollo:
- Brechas de competencias identificadas
- Objetivos de desarrollo
- Actividades de capacitación (cursos, talleres)
- Coaching y mentoring
- Rotación de roles
- Evaluación de competencias
- Presupuesto de capacitación
- Calendario de actividades

**Formato**: `.md` (narrativo) o `.csv` (actividades tabulares)
**Cuándo se genera**: Fase de Planificación
**Importancia**: Media - Desarrolla capacidades del equipo

### 6. Histograma de Recursos

Muestra carga de trabajo por recurso en el tiempo:
- Eje X: Tiempo (semanas/meses)
- Eje Y: Cantidad de recursos o esfuerzo
- Barras representan carga por período
- Identifica sobre-asignaciones
- Identifica sub-utilizaciones

**Formato**: `.csv` (datos para graficar)
**Cuándo se genera**: Fase de Planificación
**Importancia**: Media - Balancea carga de trabajo

## Proceso de Generación

### Paso 1: Identificación de Roles Necesarios

El skill analiza:
1. WBS del skill de Alcance
2. Cronograma del skill de Cronograma
3. Complejidad técnica de los entregables

Identifica roles genéricos necesarios:
- **Roles de gestión**: Director de Proyecto, Líder de Equipo, PMO
- **Roles técnicos**: Arquitecto, Desarrollador, Analista, Tester, DBA
- **Roles de soporte**: Administrador de Configuración, Documentador
- **Roles especializados**: UX Designer, Security Expert, Data Scientist

### Paso 2: Definición de Responsabilidades por Rol

Para cada rol identifica:

#### Autoridad
Qué decisiones puede tomar sin aprobación.

#### Responsabilidades
Qué entregables o actividades ejecuta.

#### Competencias Requeridas
- Técnicas: Lenguajes, herramientas, metodologías
- Funcionales: Conocimiento del dominio del negocio
- Blandas: Liderazgo, comunicación, negociación

#### Experiencia
Años de experiencia, certificaciones, proyectos similares.

### Paso 3: Estimación de Cantidades y Períodos

El skill calcula:

#### Por Paquete de Trabajo
- Esfuerzo total (horas)
- Duración (días considerando disponibilidad)
- Tipo de recurso requerido

#### Por Período
Suma de esfuerzo de todos los paquetes en cada período:
- Semana 1-4: 3 desarrolladores
- Semana 5-12: 5 desarrolladores + 2 testers
- Semana 13-16: 2 desarrolladores + 3 testers

#### Identificación de Picos
Períodos de alta demanda que requieren recursos adicionales o ajuste de cronograma.

### Paso 4: Creación de Matriz RACI

El skill mapea:

#### Para Cada Entregable de la WBS
- Identifica quién lo ejecuta (R)
- Identifica quién aprueba (A) - solo uno
- Identifica quién debe ser consultado (C)
- Identifica quién debe ser informado (I)

#### Validación de la Matriz
- Cada actividad tiene exactamente un A (Accountable)
- Cada actividad tiene al menos un R (Responsible)
- No hay filas vacías (todas las actividades asignadas)
- No hay columnas vacías (todos los roles tienen trabajo)

### Paso 5: Análisis de Brechas de Competencias

Compara competencias requeridas vs disponibles:

#### Requeridas (del análisis anterior)
- Java avanzado: 3 personas
- React: 2 personas
- AWS: 1 persona
- Conocimiento dominio financiero: 2 personas

#### Disponibles (del equipo actual)
- Java avanzado: 2 personas
- React: 3 personas
- AWS: 0 personas
- Conocimiento dominio financiero: 1 persona

#### Brechas Identificadas
- Java avanzado: Falta 1 persona → **Contratar**
- AWS: Falta 1 persona → **Contratar o capacitar**
- Conocimiento financiero: Falta 1 persona → **Capacitar existente**
- React: Sobra 1 persona → **Reasignar a otro rol**

### Paso 6: Desarrollo del Plan de Adquisición

Para cada brecha, el skill define estrategia:

#### Adquisición Interna
- Reasignación de otros proyectos
- Promoción/desarrollo interno
- Préstamo temporal de otros departamentos

#### Adquisición Externa
- Contratación directa
- Consultores/Contratistas
- Outsourcing de componentes

#### Desarrollo de Competencias
- Capacitación formal (cursos, certificaciones)
- Capacitación en el trabajo (shadowing)
- Coaching/Mentoring
- Rotación de roles

## Roles RACI Explicados

### R - Responsible (Responsable)
**Quien ejecuta el trabajo.**
- Puede haber múltiples R para una actividad
- Hace el trabajo real
- Reporta progreso al Accountable

**Ejemplo**: Desarrolladores que escriben código.

### A - Accountable (Aprobador)
**Quien aprueba y es responsable último.**
- Solo puede haber **UN** A por actividad
- Aprueba el trabajo realizado por R
- Rinde cuentas por el resultado
- Tiene autoridad de decisión final

**Ejemplo**: Director de Proyecto aprueba el entregable.

### C - Consulted (Consultado)
**Quien aporta información o expertise.**
- Comunicación bidireccional
- Su opinión se solicita antes de decidir
- Puede influir en el resultado

**Ejemplo**: Arquitecto es consultado sobre diseño técnico.

### I - Informed (Informado)
**Quien debe conocer el resultado.**
- Comunicación unidireccional
- Se le informa después de ejecutado
- No participa en la decisión

**Ejemplo**: PMO es informado de cambios aprobados.

## Técnicas de Estimación de Recursos

### Juicio de Expertos
Consultar a personas con experiencia en proyectos similares.

### Datos Históricos
Usar datos de proyectos anteriores similares:
- Módulo de login requirió 2 desarrolladores × 3 semanas
- Módulo de reportes requirió 1 desarrollador × 4 semanas

### Análisis de Alternativas
Evaluar diferentes configuraciones de equipo:
- **Opción A**: 5 desarrolladores × 4 meses = 20 meses-persona
- **Opción B**: 10 desarrolladores × 2 meses = 20 meses-persona
- Considerar Ley de Brooks: "Agregar personas a un proyecto atrasado lo atrasa más"

### Estructura de Desglose de Recursos (RBS)
Categorización jerárquica de recursos:
```
Recursos del Proyecto
├── Recursos Humanos
│   ├── Gestión
│   ├── Desarrollo
│   └── Soporte
├── Equipos
│   ├── Servidores
│   └── Estaciones de trabajo
└── Materiales
    ├── Licencias de software
    └── Infraestructura
```

## Nivelación de Recursos

### Problema de Sobre-asignación
Un recurso asignado a más trabajo del que puede realizar en un período.

**Ejemplo**:
- Juan tiene 40 horas disponibles en la semana
- Está asignado a Tarea A (30h) + Tarea B (25h) = 55 horas
- **Sobre-asignación de 15 horas**

### Técnicas de Nivelación

#### Resource Leveling
Ajustar el cronograma para eliminar sobre-asignaciones.
- Puede extender la duración del proyecto
- Prioriza uso equilibrado de recursos
- Mueve tareas no críticas

#### Resource Smoothing
Ajustar dentro de las holguras sin cambiar la duración total.
- No extiende el proyecto
- Solo ajusta tareas con holgura
- Puede no resolver todas las sobre-asignaciones

## Integración con Otros Skills

### Dependencies (Qué necesita este skill)
- **Alcance**: Paquetes de trabajo para identificar roles necesarios
- **Cronograma**: Duración de actividades para calcular necesidades temporales
- **Interesados**: Algunos stakeholders pueden ser recursos del proyecto

### Outputs Utilizados Por (Qué skills usan los outputs de Recursos)
- **Cronograma**: Disponibilidad de recursos afecta duración de actividades
- **Finanzas**: Tasas de recursos determinan costos
- **Riesgo**: Disponibilidad de recursos críticos es un riesgo

## Adaptación por Enfoque de Ciclo de Vida

### Enfoque Predictivo
- Organigrama completo desde el inicio
- RACI detallado para todos los entregables
- Plan de adquisición formal
- Calendario de recursos para toda la duración
- Equipo relativamente estable

### Enfoque Ágil
- Equipos auto-organizados
- Roles ágiles: Product Owner, Scrum Master, Development Team
- RACI simplificado o no usado
- Equipo estable durante todo el proyecto (ideal)
- Capacidad medida en velocity

### Enfoque Iterativo
- Organigrama evolutivo
- Recursos asignados por iteración
- Team building continuo
- Roles pueden rotar entre iteraciones

### Enfoque Híbrido
- Roles de gestión tradicionales
- Equipos de desarrollo ágiles
- RACI para fases predictivas
- Auto-organización para fases ágiles

## Plantillas de Referencia

Las plantillas para este skill se encuentran en:

```
references/recursos/plantillas/
└── matriz-raci.md
```

## Ejemplos de Uso

### Ejemplo 1: Matriz RACI

| Entregable/Actividad | Director PM | Arquitecto | Dev Team | Tester | Patrocinador |
|---------------------|-------------|------------|----------|--------|--------------|
| Acta de Constitución | R | C | I | I | **A** |
| Diseño de Arquitectura | C | R,**A** | C | I | I |
| Desarrollo Módulo A | C | C | R,**A** | I | I |
| Plan de Pruebas | C | I | C | R,**A** | I |
| Ejecución de Pruebas | I | I | C | R,**A** | I |
| Aprobación Go-Live | R | C | I | C | **A** |

**Nota**: Cada fila tiene exactamente un **A** (en negrita).

### Ejemplo 2: Calendario de Recursos

| Recurso | Rol | Feb | Mar | Abr | May | Jun |
|---------|-----|-----|-----|-----|-----|-----|
| Juan García | Dev Senior | 100% | 100% | 50% | 0% | 0% |
| María López | Dev Junior | 100% | 100% | 100% | 100% | 50% |
| Pedro Ruiz | Tester | 0% | 25% | 50% | 100% | 100% |
| Ana Torres | Arquitecto | 50% | 25% | 25% | 0% | 0% |

### Ejemplo 3: Análisis de Brechas

| Competencia | Requerido | Disponible | Brecha | Estrategia |
|-------------|-----------|------------|--------|------------|
| Python avanzado | 3 | 2 | -1 | Contratar 1 senior |
| Machine Learning | 2 | 0 | -2 | Contratar 2 especialistas |
| DevOps | 1 | 1 | 0 | OK |
| Testing automatizado | 2 | 1 | -1 | Capacitar 1 existente |

## Métricas de Calidad del Artefacto

Una matriz RACI de calidad debe:
- [ ] Cubrir 100% de los entregables principales de la WBS
- [ ] Tener exactamente un A (Accountable) por fila
- [ ] Tener al menos un R (Responsible) por fila
- [ ] No tener filas completamente vacías
- [ ] No tener columnas completamente vacías
- [ ] Estar validada por todos los roles involucrados
- [ ] Evitar "RACI soup" (todos con R, A, C, I en todo)
- [ ] Clarificar responsabilidades, no confundir

## Errores Comunes a Evitar

1. **Múltiples Accountable**: Más de un A por actividad (ambigüedad de autoridad)
2. **Sin Accountable**: Actividad sin nadie que apruebe
3. **Sin Responsible**: Actividad sin nadie que la ejecute
4. **RACI soup**: Todos involucrados en todo (ineficiente)
5. **Confundir C e I**: Consultar cuando solo hay que informar (sobrecarga)
6. **Ignorar disponibilidad real**: Asumir 100% cuando persona tiene otros proyectos
7. **No planificar liberación**: Mantener recursos después de que no se necesitan
8. **Ley de Brooks**: Agregar personas a proyecto atrasado sin considerar curva de aprendizaje

## Principios de Gestión de Equipos

### Ley de Brooks
"Agregar personas a un proyecto de software atrasado lo atrasa más."
- Nuevos miembros requieren capacitación
- Aumenta la complejidad de comunicación
- Productividad inicial es negativa

### Ley de Tuckman (Etapas del Equipo)
1. **Forming** (Formación): Equipo se conoce
2. **Storming** (Conflicto): Surgen desacuerdos
3. **Norming** (Normalización): Se establecen reglas
4. **Performing** (Desempeño): Equipo es productivo
5. **Adjourning** (Disolución): Proyecto termina

### Número de Canales de Comunicación
```
Canales = n × (n - 1) / 2
```
- 5 personas = 10 canales
- 10 personas = 45 canales
- 20 personas = 190 canales

**Implicación**: Equipos grandes requieren más coordinación.

## Palabras Clave

`Recursos`, `Resources`, `RACI`, `Matriz RACI`, `RACI Matrix`, `Organigrama`, `Org Chart`, `Plan de Recursos`, `Resource Plan`, `Histograma de Recursos`, `Resource Histogram`, `Calendario de Recursos`, `Competencias`, `Skills`, `Nivelación de Recursos`, `Resource Leveling`, `Responsable`, `Accountable`, `Consulted`, `Informed`

---

**Dominio PMBOK 8**: Recursos
**Subagente**: `recursos-agent.md`
**Referencias**: `references/recursos/`
