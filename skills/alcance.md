# Skill: Alcance

## Propósito

Definir y documentar qué incluye y qué excluye el proyecto, descomponiendo el trabajo total en componentes manejables.

## Descripción del Dominio

El dominio de Alcance del PMBOK 8 se enfoca en definir claramente los límites del proyecto: qué trabajo está incluido, qué trabajo está excluido, y cómo se estructura el trabajo para su gestión efectiva. Este skill genera los artefactos que documentan los entregables, requisitos y la estructura de desglose del trabajo.

## Artefactos que Produce

### 1. Enunciado del Alcance (Scope Statement)

Documento que describe en detalle los entregables del proyecto:
- Descripción del alcance del producto
- Descripción del alcance del proyecto
- Entregables del proyecto
- Criterios de aceptación de entregables
- Exclusiones explícitas del proyecto
- Supuestos relacionados con el alcance
- Restricciones del alcance

**Formato**: `.md` (Markdown)
**Cuándo se genera**: Fase de Planificación
**Importancia**: Crítico - Define los límites del proyecto

### 2. Estructura de Desglose del Trabajo - WBS

Descomposición jerárquica del trabajo total del proyecto:
- Nivel 1: Proyecto completo
- Nivel 2: Fases o entregables principales
- Nivel 3: Componentes
- Nivel 4: Paquetes de trabajo
- Identificadores únicos (códigos WBS)
- Relaciones jerárquicas

**Formato**: `.json` (estructura jerárquica) o `.csv` (lista plana)
**Cuándo se genera**: Fase de Planificación
**Importancia**: Crítico - Base para planificación y control

### 3. Diccionario de la WBS

Descripciones detalladas de cada elemento de la WBS:
- Código e identificador del paquete
- Nombre del paquete de trabajo
- Descripción detallada
- Entregable(s) asociado(s)
- Criterios de aceptación
- Responsable del paquete
- Recursos necesarios
- Estimación de esfuerzo/costo
- Dependencias con otros paquetes
- Supuestos y restricciones

**Formato**: `.csv` (para búsqueda y filtrado)
**Cuándo se genera**: Fase de Planificación
**Importancia**: Alta - Detalla cada componente del trabajo

### 4. Matriz de Trazabilidad de Requisitos

Vincula requisitos con su origen, estado y entregable:
- ID del requisito
- Descripción del requisito
- Origen/fuente del requisito
- Prioridad (Alta/Media/Baja)
- Estado (Aprobado/En revisión/Rechazado)
- Entregable que lo satisface
- Prueba de validación
- Estado de implementación

**Formato**: `.csv`
**Cuándo se genera**: Fase de Planificación
**Importancia**: Alta - Asegura cobertura completa de requisitos

### 5. Documento de Requisitos

Lista y describe todos los requisitos del proyecto:
- Requisitos funcionales
- Requisitos no funcionales
- Requisitos de calidad
- Requisitos técnicos
- Requisitos de negocio
- Prioridad de cada requisito
- Estado de aprobación

**Formato**: `.md` (narrativo) o `.csv` (tabular)
**Cuándo se genera**: Fase de Planificación
**Importancia**: Alta - Base para diseño y desarrollo

## Proceso de Generación

### Paso 1: Identificación de Entregables Principales

El skill analiza:
1. Objetivos del proyecto (del Acta de Constitución)
2. Justificación de negocio
3. Expectativas de stakeholders clave
4. Productos o servicios a entregar

Identifica los entregables de nivel superior (típicamente 3-7 entregables principales).

### Paso 2: Recopilación de Requisitos

Técnicas utilizadas:
- Análisis de documentación existente
- Análisis de stakeholders (del skill Interesados)
- Casos de uso y escenarios
- Benchmarking de proyectos similares
- Análisis de brechas

Resultado: Lista completa de requisitos categorizados

### Paso 3: Descomposición en WBS

**Regla del 8/80**: Cada paquete de trabajo debe tomar entre 8 y 80 horas de esfuerzo.

Proceso de descomposición:
1. **Nivel 1**: Nombre del proyecto completo
2. **Nivel 2**: Fases del ciclo de vida O entregables principales
   - Opción A (por fases): Inicio, Planificación, Ejecución, Cierre
   - Opción B (por entregables): Sistema, Capacitación, Documentación
3. **Nivel 3**: Componentes o sub-entregables
4. **Nivel 4**: Paquetes de trabajo ejecutables

Cada elemento recibe un código único (ej: 1.2.3 = Proyecto.Fase.Componente)

### Paso 4: Documentación en Diccionario

Para cada paquete de trabajo, el skill documenta:
- **Descripción**: Qué trabajo se realizará
- **Entregable**: Qué se producirá
- **Criterios de aceptación**: Cómo se sabrá que está completo
- **Responsable**: Quién lo ejecutará
- **Esfuerzo estimado**: Horas o días requeridos
- **Dependencias**: Qué debe completarse antes

### Paso 5: Creación de Matriz de Trazabilidad

Vincula cada requisito con:
- Stakeholder que lo solicitó
- Paquete de trabajo que lo implementa
- Prueba que lo validará
- Documento donde se especifica

Esto asegura que ningún requisito quede sin implementar.

### Paso 6: Validación del Alcance

El skill valida que:
1. Todos los objetivos del proyecto tengan entregables correspondientes
2. Todos los requisitos estén cubiertos por la WBS
3. No haya trabajo innecesario (gold plating)
4. Las exclusiones estén explícitamente documentadas
5. Los criterios de aceptación sean verificables

## Niveles de la WBS

### Nivel 1: Proyecto
El proyecto completo como un todo

**Ejemplo**: Sistema de Gestión de Inventarios

### Nivel 2: Fases o Entregables Principales
Descomposición de primer nivel

**Ejemplo (por fases)**:
- 1.1 Gestión del Proyecto
- 1.2 Análisis y Diseño
- 1.3 Desarrollo
- 1.4 Implementación
- 1.5 Cierre

**Ejemplo (por entregables)**:
- 1.1 Software de Inventarios
- 1.2 Base de Datos
- 1.3 Capacitación
- 1.4 Documentación

### Nivel 3: Componentes
Sub-entregables o fases detalladas

**Ejemplo**:
- 1.3.1 Módulo de Entrada
- 1.3.2 Módulo de Consultas
- 1.3.3 Módulo de Reportes
- 1.3.4 Módulo de Administración

### Nivel 4: Paquetes de Trabajo
Unidades de trabajo asignables y estimables

**Ejemplo**:
- 1.3.1.1 Diseño de interfaz de entrada
- 1.3.1.2 Desarrollo de formularios
- 1.3.1.3 Validación de datos
- 1.3.1.4 Pruebas de entrada

## Técnicas y Metodologías

### Descomposición Jerárquica
Dividir entregables en componentes más pequeños hasta alcanzar paquetes de trabajo manejables.

### Plantillas de WBS
Usar estructuras de proyectos similares como punto de partida.

### Análisis de Requisitos
- Entrevistas con stakeholders
- Talleres facilitados
- Cuestionarios y encuestas
- Observación de procesos actuales
- Análisis de documentos

### Priorización de Requisitos
**Técnica MoSCoW**:
- **M**ust have (Debe tener)
- **S**hould have (Debería tener)
- **C**ould have (Podría tener)
- **W**on't have (No tendrá - esta vez)

### Validación de Alcance
- Inspecciones de entregables
- Revisiones con stakeholders
- Prototipos y demos
- Aceptación formal documentada

## Integración con Otros Skills

### Dependencies (Qué necesita este skill)
- **Gobernanza**: Objetivos y alcance preliminar del Acta de Constitución
- **Interesados**: Identificación de stakeholders para recopilar requisitos

### Outputs Utilizados Por (Qué skills usan los outputs de Alcance)
- **Cronograma**: Los paquetes de trabajo de la WBS son la base para actividades
- **Finanzas**: Los paquetes de trabajo se costean individualmente
- **Recursos**: Los paquetes requieren asignación de recursos
- **Riesgo**: Cada paquete puede tener riesgos asociados
- **Ágil**: Requisitos se convierten en historias de usuario

## Adaptación por Enfoque de Ciclo de Vida

### Enfoque Predictivo
- WBS completa y detallada desde el inicio
- Diccionario exhaustivo para cada paquete
- Requisitos completos y congelados (con gestión de cambios)
- Validación formal de alcance al final de cada fase

### Enfoque Ágil
- Product Backlog en lugar de WBS tradicional
- Requisitos como historias de usuario
- Alcance emergente y adaptable
- Validación continua en cada iteración/sprint

### Enfoque Iterativo
- WBS de alto nivel con refinamiento progresivo
- Requisitos detallados por iteración
- Alcance base + alcance por iteración
- Validación al final de cada iteración

### Enfoque Híbrido
- WBS para componentes predictivos (infraestructura, hardware)
- Backlog para componentes ágiles (software, funcionalidades)
- Requisitos mixtos: estables (detallados) y emergentes (alto nivel)

## Plantillas de Referencia

Las plantillas para este skill se encuentran en:

```
references/alcance/plantillas/
└── wbs.md
```

## Ejemplos de Uso

### Ejemplo 1: WBS de Proyecto de Software

```
1.0 Sistema CRM
  1.1 Gestión del Proyecto
    1.1.1 Planificación
    1.1.2 Monitoreo y control
    1.1.3 Reuniones de equipo
  1.2 Análisis de Requisitos
    1.2.1 Recopilación de requisitos
    1.2.2 Documentación de requisitos
    1.2.3 Aprobación de requisitos
  1.3 Diseño del Sistema
    1.3.1 Diseño de arquitectura
    1.3.2 Diseño de base de datos
    1.3.3 Diseño de interfaces
  1.4 Desarrollo
    1.4.1 Módulo de contactos
    1.4.2 Módulo de oportunidades
    1.4.3 Módulo de reportes
  1.5 Pruebas
    1.5.1 Pruebas unitarias
    1.5.2 Pruebas de integración
    1.5.3 Pruebas de usuario
  1.6 Implementación
    1.6.1 Migración de datos
    1.6.2 Capacitación
    1.6.3 Despliegue a producción
```

### Ejemplo 2: Requisitos Funcionales

| ID | Requisito | Prioridad | Estado |
|----|-----------|-----------|--------|
| RF-001 | El sistema debe permitir registrar nuevos contactos | Alta | Aprobado |
| RF-002 | El sistema debe generar reportes de ventas mensuales | Alta | Aprobado |
| RF-003 | El sistema debe enviar notificaciones por email | Media | En revisión |
| RF-004 | El sistema debe integrarse con calendario | Baja | Aprobado |

## Métricas de Calidad del Artefacto

Una WBS de calidad debe:
- [ ] Estar 100% orientada a entregables (no a actividades)
- [ ] Incluir todo el trabajo del proyecto (100% del alcance)
- [ ] Tener paquetes de trabajo entre 8-80 horas
- [ ] Tener códigos únicos para cada elemento
- [ ] Descomponerse hasta nivel de asignación individual
- [ ] Tener diccionario completo para nivel más bajo
- [ ] Sumar 100% del esfuerzo total del proyecto
- [ ] No incluir trabajo excluido del alcance

## Errores Comunes a Evitar

1. **WBS orientada a actividades**: ❌ "Reunión de diseño" → ✅ "Documento de diseño"
2. **Nivel excesivo de detalle**: No descomponer más allá de paquetes de 8 horas
3. **Omitir trabajo**: Olvidar gestión del proyecto, pruebas, documentación
4. **Gold plating**: Incluir trabajo no requerido
5. **Exclusiones no documentadas**: Asumir que todos entienden qué NO está incluido
6. **Requisitos ambiguos**: "El sistema debe ser rápido" → "El sistema debe responder en < 2 seg"

## Palabras Clave

`WBS`, `Work Breakdown Structure`, `Estructura de Desglose`, `EDT`, `Paquetes de Trabajo`, `Requisitos`, `Alcance`, `Scope`, `Entregables`, `Deliverables`, `Diccionario WBS`, `Matriz de Trazabilidad`, `Requirements Traceability Matrix`, `RTM`, `Descomposición`, `Validación de Alcance`

---

**Dominio PMBOK 8**: Alcance
**Subagente**: `alcance-agent.md`
**Referencias**: `references/alcance/`
