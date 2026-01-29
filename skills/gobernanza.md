# Skill: Gobernanza

## Propósito

Generar documentos de autorización, supervisión y control del proyecto.

## Descripción del Dominio

El dominio de Gobernanza del PMBOK 8 proporciona el marco de supervisión, autorización y toma de decisiones que guía el proyecto desde su inicio hasta su cierre. Este skill se especializa en crear los artefactos fundamentales que establecen la autoridad, definen la estructura de gobierno y documentan las decisiones clave del proyecto.

## Artefactos que Produce

### 1. Acta de Constitución del Proyecto (Project Charter)

Documento que autoriza formalmente el proyecto e incluye:
- Objetivos del proyecto
- Alcance de alto nivel
- Supuestos y restricciones
- Autoridad del director del proyecto
- Identificación del patrocinador
- Presupuesto inicial o estimado
- Riesgos de alto nivel

**Formato**: `.md` (Markdown)
**Cuándo se genera**: Fase de Inicio
**Importancia**: Crítico - Es el documento de autorización formal del proyecto

### 2. Registro de Decisiones

Documento que captura decisiones clave del proyecto con:
- Fecha de la decisión
- Responsable de la decisión
- Contexto y justificación
- Alternativas consideradas
- Resultado o decisión tomada
- Impacto en el proyecto
- Estado de implementación

**Formato**: `.csv` (para facilitar filtrado y búsqueda)
**Cuándo se genera**: Durante todo el ciclo de vida del proyecto
**Importancia**: Alta - Proporciona trazabilidad de decisiones

### 3. Plan de Gestión de Cambios

Documento que define el proceso para solicitar, evaluar y aprobar cambios, incluyendo:
- Proceso de solicitud de cambios
- Niveles de autorización según impacto
- Comité de control de cambios (CCB)
- Criterios de evaluación de cambios
- Proceso de comunicación de cambios
- Formato de solicitud de cambios

**Formato**: `.md` (Markdown)
**Cuándo se genera**: Fase de Planificación
**Importancia**: Alta - Controla la integridad del proyecto

### 4. Criterios de Éxito del Proyecto

Documento que define métricas específicas que determinan si el proyecto cumplió sus objetivos:
- Criterios medibles y específicos
- Umbrales de aceptación
- Método de medición
- Responsable de validación
- Momento de evaluación

**Formato**: `.csv` o `.md` según complejidad
**Cuándo se genera**: Fase de Inicio
**Importancia**: Crítico - Define "terminado" para el proyecto

### 5. Lista de Verificación de Kick-off

Documento que asegura la preparación adecuada de la reunión de inicio formal:
- Agenda, hora y lugar/enlace
- Participantes confirmados
- Materiales y pre-lecturas
- Matríz de roles inicial
- Presentación de soporte

**Formato**: `.md` (Markdown)
**Cuándo se genera**: Fase de Inicio (antes de la reunión)
**Importancia**: Alta - Establece el tono profesional del proyecto

### 6. Business Model Canvas

Modelo visual estratégico que describe la lógica de cómo una organización crea, entrega y captura valor:
- 9 bloques constructivos
- Propuesta de valor clara
- Segmentos de clientes definidos
- Estructura de costes y flujos de ingresos

**Formato**: `.json` (Datos estructurados)
**Cuándo se genera**: Fase de Inicio (Estrategia)
**Importancia**: Alta - Alineación estratégica del modelo de negocio

## Proceso de Generación

### Paso 1: Análisis de Entrada

El skill analiza:
1. **Requerimiento del proyecto** - Descripción del trabajo a realizar
2. **Justificación de negocio** - Por qué se realiza el proyecto
3. **Contexto organizacional** - Estrategia y prioridades de la organización
4. **Restricciones conocidas** - Limitaciones de tiempo, presupuesto, recursos
5. **Supuestos iniciales** - Condiciones asumidas como verdaderas

### Paso 2: Extracción de Elementos Clave

De las entradas, el skill extrae:
- Objetivos SMART del proyecto
- Alcance preliminar (qué incluye y qué excluye)
- Supuestos sobre los cuales se basa la planificación
- Restricciones que limitarán las opciones
- Criterios de éxito medibles
- Riesgos de alto nivel identificables

### Paso 3: Identificación de Autoridades

El skill identifica los roles de autoridad:
- **Patrocinador del proyecto** - Proporciona recursos y apoyo ejecutivo
- **Director del proyecto** - Lidera la ejecución día a día
- **Tomadores de decisiones clave** - Para cambios significativos
- **Comité de control de cambios** - Aprueba cambios al proyecto

- **Comité de control de cambios** - Aprueba cambios al proyecto

### Paso 3b: Generación del Business Model Canvas (Opcional)

Si se requiere, el skill genera el BMC definiendo:
1. **Segmentos de Clientes**: ¿Para quién creamos valor?
2. **Propuestas de Valor**: ¿Qué problemas solucionamos?
3. **Canales**: ¿Cómo llegamos a los clientes?
4. **Relaciones con Clientes**: ¿Qué tipo de relación esperan?
5. **Fuentes de Ingresos**: ¿Por qué valor están dispuestos a pagar?
6. **Recursos Clave**: ¿Qué activos necesitamos?
7. **Actividades Clave**: ¿Qué debemos hacer para que funcione?
8. **Asociaciones Clave**: ¿Quiénes son nuestros socios/proveedores?
9. **Estructura de Costos**: ¿Cuáles son los costes más importantes?

### Paso 4: Generación del Acta de Constitución

El skill estructura el Acta siguiendo este formato:

#### Sección 1: Información General
- Nombre del proyecto
- Fecha de creación
- Patrocinador
- Director del proyecto
- Versión del documento

#### Sección 2: Propósito y Justificación
- Problema u oportunidad de negocio
- Objetivos del proyecto alineados con estrategia
- Beneficios esperados (cuantificados)

#### Sección 3: Descripción del Proyecto
- Descripción de alto nivel del trabajo
- Entregables principales
- Hitos clave

#### Sección 4: Requisitos de Alto Nivel
- Requisitos funcionales principales
- Requisitos no funcionales principales

#### Sección 5: Supuestos y Restricciones
- Condiciones asumidas como verdaderas
- Factores que limitan las opciones

#### Sección 6: Riesgos Iniciales
- Riesgos de alto nivel conocidos
- Impacto potencial preliminar

#### Sección 7: Cronograma de Hitos
- Fechas objetivo para eventos clave
- Hitos de decisión (go/no-go)

#### Sección 8: Presupuesto Resumido
- Presupuesto autorizado o estimación inicial
- Reservas de contingencia preliminares

#### Sección 9: Criterios de Éxito
- Métricas específicas de éxito
- Umbrales de aceptación

#### Sección 10: Autorización
**Sección 10 - Autorización** contiene las firmas del patrocinador y otras partes autorizantes.

### Paso 4b: Generación de Lista de Kick-off

El skill genera la lista de verificación basándose en:
- Stakeholders identificados (para la lista de invitados)
- Complejidad del proyecto (para la agenda)
- Artefactos previos (para los materiales a revisar)

### Paso 5: Validación

El skill valida que el artefacto:
1. Cubra todos los elementos requeridos por PMBOK 8
2. Sea consistente con la justificación del proyecto
3. Defina claramente la autoridad del director del proyecto
4. Establezca criterios de éxito medibles
5. Identifique riesgos de alto nivel

## Técnicas y Metodologías

### Análisis de Stakeholders Iniciales
- Identificación de interesados clave
- Evaluación de poder e influencia
- Determinación de expectativas principales

### Análisis de Viabilidad
- Viabilidad técnica
- Viabilidad económica
- Viabilidad operativa
- Viabilidad temporal

### Técnicas de Definición de Alcance Preliminar
- Análisis de producto
- Descomposición inicial
- Análisis de alternativas
- Benchmarking

### Criterios SMART para Objetivos
- **S**pecific (Específico)
- **M**easurable (Medible)
- **A**chievable (Alcanzable)
- **R**elevant (Relevante)
- **T**ime-bound (Limitado en tiempo)

## Integración con Otros Skills

### Dependencies (Qué necesita este skill)
- Ninguno - Es el primer skill que se ejecuta

### Outputs Utilizados Por (Qué skills usan los outputs de Gobernanza)
- **Interesados**: El Acta identifica stakeholders iniciales
- **Alcance**: Los objetivos y alcance preliminar guían la definición detallada
- **Cronograma**: Los hitos del Acta son puntos de referencia temporales
- **Finanzas**: El presupuesto inicial establece el marco financiero
- **Riesgo**: Los riesgos de alto nivel inician el registro de riesgos
- **Todos los demás**: El Acta proporciona el contexto general del proyecto

## Adaptación por Enfoque de Ciclo de Vida

### Enfoque Predictivo
- Acta de Constitución detallada y completa
- Plan de Gestión de Cambios formal y estructurado
- Criterios de éxito específicos y medibles
- Registro de Decisiones exhaustivo

### Enfoque Ágil
- Acta más ligera enfocada en visión y objetivos
- Gestión de cambios simplificada (cambios bienvenidos)
- Criterios de éxito adaptables por sprint
- Decisiones documentadas en retrospectivas

### Enfoque Híbrido
- Acta con nivel medio de detalle
- Gestión de cambios flexible con umbrales
- Criterios de éxito por fase/iteración
- Balance entre control y adaptabilidad

## Plantillas de Referencia

Las plantillas para este skill se encuentran en:

```
references/gobernanza/plantillas/
└── acta-constitucion.md
```

## Ejemplos de Uso

### Ejemplo 1: Proyecto Predictivo
**Entrada**: Implementación de sistema ERP para 500 usuarios
**Output**: Acta de Constitución de 8-10 páginas con alcance detallado, cronograma de 18 meses, presupuesto de $2M, criterios de éxito cuantitativos

### Ejemplo 2: Proyecto Ágil
**Entrada**: Desarrollo de app móvil con MVP en 3 meses
**Output**: Acta de Constitución de 3-4 páginas con visión del producto, Product Owner identificado, presupuesto por sprints, criterios de éxito por release

### Ejemplo 3: Proyecto Híbrido
**Entrada**: Transformación digital con planificación tradicional y desarrollo ágil
**Output**: Acta con fases predictivas (infraestructura) y fases ágiles (software), gestión de cambios diferenciada por fase

## Métricas de Calidad del Artefacto

Un Acta de Constitución de calidad debe:
- [ ] Tener objetivos SMART claramente definidos
- [ ] Incluir justificación de negocio cuantificada
- [ ] Definir alcance con inclusiones Y exclusiones
- [ ] Identificar al menos 5 supuestos clave
- [ ] Documentar al menos 5 restricciones
- [ ] Listar al menos 5 riesgos de alto nivel
- [ ] Establecer al menos 3 criterios de éxito medibles
- [ ] Incluir cronograma con mínimo 5 hitos clave
- [ ] Tener presupuesto o rango de estimación
- [ ] Estar autorizado por el patrocinador

Una Lista de Kick-off de calidad debe:
- [ ] Definir una agenda clara cronometrada
- [ ] Listar todos los asistentes obligatorios y opcionales
- [ ] Enumerar los materiales de lectura previa
- [ ] Incluir detalles logísticos completos
- [ ] Definir los objetivos de la reunión

Un Business Model Canvas de calidad debe:
- [ ] Completar los 9 bloques del modelo
- [ ] Tener una propuesta de valor clara y diferenciada
- [ ] Identificar segmentos de clientes específicos
- [ ] Alinear ingresos con costes
- [ ] Ser coherente entre los bloques (ej. Canales adecuados para el Segmento)

## Palabras Clave

`Acta de Constitución`, `Project Charter`, `Autorización`, `Gobernanza`, `Patrocinador`, `Sponsor`, `Criterios de Éxito`, `Registro de Decisiones`, `Gestión de Cambios`, `Change Management`, `Autoridad`, `Supuestos`, `Restricciones`, `Objetivos SMART`

---

**Dominio PMBOK 8**: Gobernanza
**Subagente**: `gobernanza-agent.md`
**Referencias**: `references/gobernanza/`
