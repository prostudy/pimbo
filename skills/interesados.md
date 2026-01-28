# Skill: Interesados

## Propósito

Identificar, analizar y planificar el compromiso de los stakeholders para maximizar su apoyo y minimizar resistencias al proyecto.

## Descripción del Dominio

El dominio de Interesados del PMBOK 8 se enfoca en gestionar las relaciones con todas las personas y organizaciones que pueden afectar, ser afectadas o percibirse a sí mismas como afectadas por el proyecto. Este skill genera artefactos que documentan quiénes son los stakeholders, cómo clasificarlos, cómo involucrarlos y cómo comunicarse con ellos efectivamente.

## Artefactos que Produce

### 1. Registro de Interesados (Stakeholder Register)

Identifica a todas las partes interesadas del proyecto:
- ID único del interesado
- Nombre completo
- Rol en la organización
- Información de contacto
- Rol/relación con el proyecto
- Nivel de poder/autoridad
- Nivel de interés
- Expectativas principales
- Influencia (positiva/negativa/neutral)
- Fase de mayor involucramiento
- Requisitos específicos

**Formato**: `.csv` (para filtrado y análisis)
**Cuándo se genera**: Fase de Inicio, actualizado continuamente
**Importancia**: Crítico - Identifica a quiénes gestionar

### 2. Matriz Poder/Interés

Clasifica a los interesados en cuatro cuadrantes:
- Cuadrante 1: Alto Poder / Alto Interés → Gestionar de cerca
- Cuadrante 2: Alto Poder / Bajo Interés → Mantener satisfechos
- Cuadrante 3: Bajo Poder / Alto Interés → Mantener informados
- Cuadrante 4: Bajo Poder / Bajo Interés → Monitorear

Para cada interesado:
- Nombre del interesado
- Poder (Alto/Medio/Bajo)
- Interés (Alto/Medio/Bajo)
- Cuadrante asignado
- Estrategia de gestión

**Formato**: `.csv` con categorización
**Cuándo se genera**: Fase de Inicio/Planificación
**Importancia**: Alta - Define estrategias diferenciadas

### 3. Plan de Gestión de Interesados

Documenta estrategias para incrementar apoyo y reducir resistencias:
- Objetivos de gestión de stakeholders
- Estrategia general de involucramiento
- Estrategias específicas por cuadrante
- Tácticas para interesados clave
- Indicadores de compromiso
- Proceso de actualización del registro
- Gestión de resistencias
- Plan de escalamiento

**Formato**: `.md` (Markdown narrativo)
**Cuándo se genera**: Fase de Planificación
**Importancia**: Alta - Guía el involucramiento

### 4. Plan de Comunicaciones

Define qué información se compartirá con quién, cuándo, cómo y con qué frecuencia:
- Necesidades de información por stakeholder
- Información a comunicar
- Frecuencia de comunicación
- Método/canal de comunicación
- Responsable de comunicar
- Formato de la información
- Nivel de detalle
- Restricciones de confidencialidad

**Formato**: `.md` (narrativo) o `.csv` (tabular)
**Cuándo se genera**: Fase de Planificación
**Importancia**: Crítico - Asegura comunicación efectiva

### 5. Matriz de Comunicaciones

Especifica canales, formatos y responsables:
- Tipo de comunicación
- Stakeholder(s) destinatario(s)
- Frecuencia (diaria/semanal/mensual/ad-hoc)
- Canal (email/reunión/portal/dashboard)
- Formato (informe/presentación/conversación)
- Responsable de enviar
- Plantilla o ejemplo

**Formato**: `.csv`
**Cuándo se genera**: Fase de Planificación
**Importancia**: Alta - Operacionaliza el plan de comunicaciones

### 6. Análisis de Involucramiento (Engagement Assessment)

Evalúa nivel actual vs deseado de compromiso:
- Interesado
- Nivel actual (Desconocedor/Resistente/Neutral/Apoyo/Líder)
- Nivel deseado
- Gap (brecha)
- Acciones para cerrar brecha
- Responsable
- Fecha objetivo

**Formato**: `.csv`
**Cuándo se genera**: Fase de Planificación, actualizado en Ejecución
**Importancia**: Media - Mide progreso de involucramiento

## Proceso de Generación

### Paso 1: Identificación de Interesados

El skill identifica stakeholders mediante:

#### Análisis de Documentos
- Acta de Constitución (patrocinador, director)
- Organigrama organizacional
- Documentos del negocio
- Proyectos anteriores similares

#### Categorías de Stakeholders
- **Internos**: Dentro de la organización ejecutora
- **Externos**: Fuera de la organización
- **Superiores**: Con autoridad sobre el proyecto
- **Subordinados**: Reportan al equipo del proyecto
- **Laterales**: Mismo nivel organizacional

#### Tipos Comunes
- Patrocinador/Sponsor
- Director del proyecto
- Equipo del proyecto
- Usuarios finales
- Clientes/Beneficiarios
- Alta dirección
- Proveedores
- Reguladores
- Competidores afectados
- Comunidades impactadas

### Paso 2: Análisis de Poder e Interés

Para cada stakeholder identifica:

#### Nivel de Poder (Alto/Medio/Bajo)
- Autoridad formal en la organización
- Control sobre recursos críticos
- Capacidad de aprobar/vetar decisiones
- Influencia sobre otros stakeholders
- Control sobre información clave

#### Nivel de Interés (Alto/Medio/Bajo)
- Qué tan afectado estará por el proyecto
- Grado de preocupación por los resultados
- Frecuencia de interacciones con el proyecto
- Dependencia del éxito del proyecto

### Paso 3: Ubicación en Matriz Poder/Interés

El skill asigna cada stakeholder a un cuadrante:

#### Cuadrante 1: Alto Poder / Alto Interés
**Gestionar de cerca**
- Interesados críticos
- Requieren comunicación frecuente
- Involucrar en decisiones clave
- Anticipar y gestionar expectativas

**Ejemplos**: Patrocinador, usuarios principales, alta dirección impactada

#### Cuadrante 2: Alto Poder / Bajo Interés
**Mantener satisfechos**
- Pueden influir significativamente
- No requieren mucho detalle
- Comunicación periódica resumida
- Alertar de decisiones que los afecten

**Ejemplos**: Ejecutivos senior no directamente involucrados, reguladores

#### Cuadrante 3: Bajo Poder / Alto Interés
**Mantener informados**
- Interesados en los detalles
- No pueden influir significativamente
- Proveer información detallada
- Canal para feedback

**Ejemplos**: Usuarios secundarios, equipos adyacentes, analistas

#### Cuadrante 4: Bajo Poder / Bajo Interés
**Monitorear**
- Comunicación mínima
- Información general
- Monitorear por cambios en su situación
- No dedicar recursos excesivos

**Ejemplos**: Observadores, roles tangencialmente relacionados

### Paso 4: Desarrollo de Estrategias de Involucramiento

El skill define estrategias específicas:

#### Para Interesados Clave (Cuadrante 1)
- Reuniones one-on-one regulares
- Involucrar en planificación
- Solicitar input en decisiones importantes
- Comunicación proactiva de riesgos
- Gestión de expectativas continua

#### Para Resistentes
- Entender raíz de la resistencia
- Comunicar beneficios personales/organizacionales
- Involucrar temprano en decisiones
- Asignar embajadores/influenciadores
- Gestionar con empatía

#### Para Neutrales a Convertir en Apoyadores
- Comunicar valor del proyecto
- Demostrar quick wins
- Solicitar su participación
- Reconocer sus contribuciones

### Paso 5: Diseño del Plan de Comunicaciones

El skill estructura las comunicaciones:

#### Por Tipo de Información
- **Información de estado**: Avances, hitos cumplidos
- **Información de decisiones**: Decisiones tomadas, justificación
- **Información de riesgos/problemas**: Alertas, planes de respuesta
- **Información de cambios**: Cambios aprobados, impactos
- **Información financiera**: Estado del presupuesto, variaciones

#### Por Frecuencia
- **Diaria**: Standups (equipo), alertas críticas
- **Semanal**: Reportes de equipo, actualizaciones a gerentes
- **Mensual**: Reportes ejecutivos, revisiones con patrocinador
- **Ad-hoc**: Escalamientos, decisiones urgentes

#### Por Canal
- **Reuniones**: Para decisiones, resolución de conflictos
- **Email**: Para información formal, trazabilidad
- **Dashboard/Portal**: Para métricas en tiempo real
- **Informes**: Para resúmenes ejecutivos
- **Conversaciones**: Para temas sensibles

### Paso 6: Validación y Ajuste

El skill valida que:
1. Todos los stakeholders relevantes estén identificados
2. Estrategias sean realistas y ejecutables
3. Plan de comunicaciones cubra necesidades de información
4. Haya responsables asignados
5. Frecuencias sean sostenibles

## Técnicas y Metodologías

### Análisis de Stakeholders

#### Matriz de Influencia
Evalúa quién influye en quién para identificar "influenciadores" clave.

#### Mapeo de Stakeholders
Representa gráficamente relaciones y grupos de interés.

#### Análisis de Actores
Identifica intereses, motivaciones, posibles coaliciones.

### Modelos de Involucramiento

#### Niveles de Compromiso (Salience Model)
1. **Desconocedor (Unaware)**: No sabe del proyecto
2. **Resistente (Resistant)**: Conoce y se opone
3. **Neutral**: Conoce pero no apoya ni resiste
4. **Apoyo (Supportive)**: Conoce y apoya
5. **Líder (Leading)**: Activamente involucrado en el éxito

#### Estrategias de Movimiento
- Desconocedor → Neutral: Informar
- Resistente → Neutral: Escuchar y abordar preocupaciones
- Neutral → Apoyo: Comunicar beneficios
- Apoyo → Líder: Involucrar activamente

### Gestión de Expectativas

#### CLARAS
Las expectativas deben ser:
- **C**laras: Sin ambigüedades
- **L**egítimas: Basadas en información real
- **A**lineadas: Con objetivos del proyecto
- **R**ealistas: Alcanzables
- **A**cordadas: Consensuadas
- **S**eguidas: Monitoreadas

### Comunicación Efectiva

#### 5 C's de la Comunicación
1. **Clear** (Clara): Mensaje sin ambigüedad
2. **Concise** (Concisa): Lo necesario, sin exceso
3. **Complete** (Completa): Toda la información relevante
4. **Courteous** (Cortés): Respetuosa y profesional
5. **Correct** (Correcta): Información precisa

## Integración con Otros Skills

### Dependencies (Qué necesita este skill)
- **Gobernanza**: Acta de Constitución identifica stakeholders iniciales

### Outputs Utilizados Por (Qué skills usan los outputs de Interesados)
- **Alcance**: Stakeholders son fuente de requisitos
- **Riesgo**: Stakeholders ayudan a identificar riesgos
- **Recursos**: Algunos stakeholders pueden ser recursos del proyecto
- **Todos los dominios**: Stakeholders reciben comunicaciones sobre todos los aspectos

## Adaptación por Enfoque de Ciclo de Vida

### Enfoque Predictivo
- Registro exhaustivo desde el inicio
- Plan de comunicaciones formal y detallado
- Reuniones estructuradas y programadas
- Documentación completa de interacciones

### Enfoque Ágil
- Identificación continua de stakeholders
- Product Owner como representante principal
- Comunicación informal y frecuente
- Demos y retrospectivas como puntos de contacto
- Usuario final más involucrado

### Enfoque Iterativo
- Stakeholders identificados por iteración
- Plan de comunicaciones adaptado por fase
- Feedback incorporado cada iteración

### Enfoque Híbrido
- Stakeholders ejecutivos: comunicación formal
- Stakeholders técnicos: comunicación ágil
- Diferentes estrategias por tipo de stakeholder

## Plantillas de Referencia

Las plantillas para este skill se encuentran en:

```
references/interesados/plantillas/
└── registro-interesados.md
```

## Ejemplos de Uso

### Ejemplo 1: Registro de Interesados

| ID | Nombre | Rol | Poder | Interés | Cuadrante | Estrategia |
|----|--------|-----|-------|---------|-----------|------------|
| ST-001 | María González | CFO / Patrocinadora | Alto | Alto | 1 | Reuniones semanales, involucrar en decisiones |
| ST-002 | Juan Pérez | Director TI | Alto | Medio | 2 | Reportes quincenales, consultar en temas técnicos |
| ST-003 | Equipo Ventas (15) | Usuarios finales | Bajo | Alto | 3 | Demos mensuales, canal de feedback |
| ST-004 | Dept. Legal | Compliance | Medio | Bajo | 4 | Informar de cambios regulatorios |

### Ejemplo 2: Plan de Comunicaciones

| Comunicación | Stakeholder | Frecuencia | Canal | Responsable |
|--------------|-------------|------------|-------|-------------|
| Reporte Ejecutivo | Patrocinador, Alta Dirección | Mensual | Presentación + PDF | Director PM |
| Status Report | Equipo extendido | Semanal | Email | Director PM |
| Dashboard Métricas | Todos los interesados | Tiempo real | Portal web | PMO |
| Demos | Usuarios, Product Owner | Cada sprint | Reunión virtual | Líder técnico |
| Alertas de Riesgo | Patrocinador, Gerentes | Ad-hoc | Email + llamada | Director PM |

### Ejemplo 3: Análisis de Involucramiento

| Stakeholder | Actual | Deseado | Gap | Acción |
|-------------|--------|---------|-----|--------|
| CFO | Apoyo | Líder | +1 | Involucrar en presentaciones a Junta |
| Dir. Operaciones | Neutral | Apoyo | +1 | Comunicar beneficios operativos, quick win |
| Jefe Depto. X | Resistente | Neutral | +2 | Reunión 1-on-1, entender preocupaciones, plan de mitigación |
| Usuarios | Desconocedor | Apoyo | +3 | Campaña de comunicación, embajadores, capacitación temprana |

## Métricas de Calidad del Artefacto

Un registro de interesados de calidad debe:
- [ ] Identificar al menos 80% de stakeholders clave
- [ ] Incluir información de contacto actualizada
- [ ] Clasificar poder e interés de cada stakeholder
- [ ] Asignar estrategia de gestión específica
- [ ] Identificar expectativas principales
- [ ] Señalar influencia (positiva/negativa)
- [ ] Estar validado por el equipo del proyecto
- [ ] Actualizarse regularmente (mensual como mínimo)
- [ ] Incluir plan de comunicaciones alineado

## Errores Comunes a Evitar

1. **Identificación incompleta**: Olvidar stakeholders influyentes
2. **Asumir interés estático**: Poder/interés cambia durante el proyecto
3. **Comunicación genérica**: Mismo mensaje para todos
4. **Ignorar resistentes**: No gestionar oposición proactivamente
5. **Sobre-comunicar a desinteresados**: Saturar a stakeholders de Cuadrante 4
6. **Sub-comunicar a interesados clave**: Sorprender al Cuadrante 1
7. **No actualizar el registro**: Usar información desactualizada
8. **Falta de seguimiento**: Planificar pero no ejecutar

## Palabras Clave

`Stakeholders`, `Interesados`, `Partes Interesadas`, `Registro de Interesados`, `Stakeholder Register`, `Matriz Poder/Interés`, `Power/Interest Grid`, `Plan de Comunicaciones`, `Communications Plan`, `Gestión de Expectativas`, `Involucramiento`, `Engagement`, `Resistencia`, `Análisis de Stakeholders`, `Influencia`, `Comunicación`

---

**Dominio PMBOK 8**: Interesados
**Subagente**: `interesados-agent.md`
**Referencias**: `references/interesados/`
