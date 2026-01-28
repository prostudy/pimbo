# MATRIZ RACI
## Matriz de Asignación de Responsabilidades

---

### INFORMACIÓN DEL DOCUMENTO

| Campo | Valor |
|-------|-------|
| Proyecto | [Nombre del Proyecto] |
| ID del Proyecto | [Código] |
| Fecha de Creación | [DD/MM/AAAA] |
| Última Actualización | [DD/MM/AAAA] |
| Elaborado por | [Nombre] |
| Versión | [X.X] |

---

### DEFINICIÓN DE ROLES RACI

**R - Responsable (Responsible):** Persona que ejecuta el trabajo. Puede haber múltiples R para una actividad, pero se recomienda minimizar para evitar confusión sobre quién hace qué.

**A - Aprobador (Accountable):** Persona con autoridad final y que rinde cuentas por el resultado. Debe existir uno y solo uno por cada actividad o entregable. Esta persona aprueba el trabajo antes de considerarlo completo.

**C - Consultado (Consulted):** Persona cuya opinión se solicita antes o durante la ejecución. La comunicación es bidireccional. Son expertos o stakeholders cuyo input es necesario.

**I - Informado (Informed):** Persona que debe ser notificada de los resultados o avances. La comunicación es unidireccional. Necesitan conocer el progreso pero no participan en la ejecución.

---

### ROLES DEL PROYECTO

| Código | Rol | Nombre/Recurso | Descripción |
|--------|-----|----------------|-------------|
| PAT | Patrocinador | [Nombre] | Proporciona recursos y apoyo ejecutivo |
| DP | Director del Proyecto | [Nombre] | Lidera la planificación y ejecución |
| LT1 | Líder Técnico | [Nombre] | Coordina el equipo técnico |
| AN | Analista | [Nombre] | Elabora análisis y documentación |
| DEV | Desarrollador | [Nombre] | Ejecuta el desarrollo técnico |
| QA | Control de Calidad | [Nombre] | Verifica la calidad de entregables |
| USR | Usuario Clave | [Nombre] | Representa las necesidades del negocio |
| [Código] | [Rol] | [Nombre] | [Descripción] |

---

### MATRIZ RACI POR FASE Y ENTREGABLE

#### FASE 1: INICIO

| Entregable / Actividad | PAT | DP | LT1 | AN | DEV | QA | USR |
|------------------------|-----|----|----|----|----|----|----|
| Acta de Constitución del Proyecto | A | R | C | | | | I |
| Identificación de Interesados | I | A/R | C | R | | | C |
| Registro de Interesados | I | A | | R | | | C |
| Reunión de Kickoff | A | R | C | I | I | I | I |

#### FASE 2: PLANIFICACIÓN

| Entregable / Actividad | PAT | DP | LT1 | AN | DEV | QA | USR |
|------------------------|-----|----|----|----|----|----|----|
| Plan de Gestión del Proyecto | A | R | C | C | | | I |
| Recopilación de Requisitos | I | A | C | R | | | C |
| Documento de Requisitos | I | A | C | R | | C | C |
| Enunciado del Alcance | A | R | C | C | | | C |
| Estructura de Desglose del Trabajo (WBS) | I | A | R | R | C | | C |
| Diccionario de la WBS | I | A | R | R | C | | I |
| Cronograma del Proyecto | A | R | C | C | C | | I |
| Presupuesto del Proyecto | A | R | C | C | | | I |
| Plan de Gestión de Riesgos | I | A/R | C | C | C | C | C |
| Registro de Riesgos | I | A | R | R | C | C | C |
| Plan de Comunicaciones | I | A/R | C | | | | C |
| Línea Base del Proyecto | A | R | I | I | I | I | I |

#### FASE 3: EJECUCIÓN

| Entregable / Actividad | PAT | DP | LT1 | AN | DEV | QA | USR |
|------------------------|-----|----|----|----|----|----|----|
| [Entregable técnico 1] | I | A | R | C | R | C | C |
| [Entregable técnico 2] | I | A | R | | R | C | C |
| [Entregable técnico 3] | I | A | R | | R | R | C |
| Gestión del Equipo | I | A/R | C | | | | |
| Gestión de Proveedores | I | A/R | C | | | | |
| Control de Calidad | I | A | C | | | R | C |
| Informes de Avance | I | A/R | C | C | | | I |
| Gestión de Cambios | A | R | C | C | C | C | C |

#### FASE 4: MONITOREO Y CONTROL

| Entregable / Actividad | PAT | DP | LT1 | AN | DEV | QA | USR |
|------------------------|-----|----|----|----|----|----|----|
| Monitoreo del Cronograma | I | A/R | C | | | | I |
| Control de Costos | A | R | C | | | | I |
| Control de Calidad | I | A | C | | | R | C |
| Monitoreo de Riesgos | I | A/R | C | | C | C | C |
| Informes de Estado | I | A/R | C | | | | I |
| Solicitudes de Cambio | C | A | C | C | C | C | C |
| Actualización de Planes | I | A/R | C | C | | | I |

#### FASE 5: CIERRE

| Entregable / Actividad | PAT | DP | LT1 | AN | DEV | QA | USR |
|------------------------|-----|----|----|----|----|----|----|
| Aceptación de Entregables | A | R | C | | | C | C |
| Documentación de Lecciones Aprendidas | I | A | R | R | R | R | C |
| Informe de Cierre del Proyecto | A | R | C | C | | | I |
| Liberación de Recursos | A | R | I | I | I | I | I |
| Cierre Administrativo | A | R | | C | | | I |
| Reunión de Cierre | A | R | C | I | I | I | I |

---

### VALIDACIÓN DE LA MATRIZ

#### Reglas de Validación

La matriz cumple con las siguientes reglas que aseguran su correcta estructura:

Cada fila debe tener exactamente una A (Aprobador). Esto asegura que hay un único punto de responsabilidad final para cada entregable o actividad.

Cada fila debe tener al menos una R (Responsable). No puede haber entregables sin alguien que ejecute el trabajo.

Los roles con A también pueden tener R si la misma persona aprueba y ejecuta, representándose como A/R.

Se debe minimizar la cantidad de C e I para evitar ineficiencias en la comunicación.

#### Resumen por Rol

| Rol | Total R | Total A | Total C | Total I | Carga de Trabajo |
|-----|---------|---------|---------|---------|------------------|
| PAT | | | | | [Alta/Media/Baja] |
| DP | | | | | [Alta/Media/Baja] |
| LT1 | | | | | [Alta/Media/Baja] |
| AN | | | | | [Alta/Media/Baja] |
| DEV | | | | | [Alta/Media/Baja] |
| QA | | | | | [Alta/Media/Baja] |
| USR | | | | | [Alta/Media/Baja] |

---

### NOTAS Y ACLARACIONES

[Cualquier nota adicional sobre la interpretación de la matriz, casos especiales o consideraciones importantes]

---

### APROBACIÓN

| Rol | Nombre | Firma | Fecha |
|-----|--------|-------|-------|
| Patrocinador | | | |
| Director del Proyecto | | | |

---

### CONTROL DE VERSIONES

| Versión | Fecha | Autor | Descripción del Cambio |
|---------|-------|-------|------------------------|
| 1.0 | [Fecha] | [Nombre] | Versión inicial |

---

*Este documento se genera siguiendo las mejores prácticas del PMBOK 8 del PMI para el dominio de Recursos.*
