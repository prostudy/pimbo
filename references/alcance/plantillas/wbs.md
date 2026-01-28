# ESTRUCTURA DE DESGLOSE DEL TRABAJO (WBS)
## Work Breakdown Structure

---

### INFORMACIÓN DEL DOCUMENTO

| Campo | Valor |
|-------|-------|
| Proyecto | [Nombre del Proyecto] |
| ID del Proyecto | [Código] |
| Fecha de Creación | [DD/MM/AAAA] |
| Última Actualización | [DD/MM/AAAA] |
| Elaborado por | [Nombre] |
| Aprobado por | [Nombre] |
| Versión | [X.X] |

---

### ALCANCE DEL PROYECTO

**Descripción:** [Breve descripción del alcance que esta WBS representa]

**Entregables Principales:** [Lista de los entregables de alto nivel que la WBS descompone]

---

### ESTRUCTURA DE DESGLOSE DEL TRABAJO

#### Representación Jerárquica

```
1.0 [NOMBRE DEL PROYECTO]
│
├── 1.1 [Fase/Entregable Principal 1]
│   ├── 1.1.1 [Componente]
│   │   ├── 1.1.1.1 [Paquete de Trabajo]
│   │   ├── 1.1.1.2 [Paquete de Trabajo]
│   │   └── 1.1.1.3 [Paquete de Trabajo]
│   ├── 1.1.2 [Componente]
│   │   ├── 1.1.2.1 [Paquete de Trabajo]
│   │   └── 1.1.2.2 [Paquete de Trabajo]
│   └── 1.1.3 [Componente]
│       ├── 1.1.3.1 [Paquete de Trabajo]
│       └── 1.1.3.2 [Paquete de Trabajo]
│
├── 1.2 [Fase/Entregable Principal 2]
│   ├── 1.2.1 [Componente]
│   │   ├── 1.2.1.1 [Paquete de Trabajo]
│   │   └── 1.2.1.2 [Paquete de Trabajo]
│   └── 1.2.2 [Componente]
│       ├── 1.2.2.1 [Paquete de Trabajo]
│       └── 1.2.2.2 [Paquete de Trabajo]
│
├── 1.3 [Fase/Entregable Principal 3]
│   ├── 1.3.1 [Componente]
│   └── 1.3.2 [Componente]
│
└── 1.4 Gestión del Proyecto
    ├── 1.4.1 Inicio
    ├── 1.4.2 Planificación
    ├── 1.4.3 Ejecución y Control
    └── 1.4.4 Cierre
```

---

### TABLA DE LA WBS

| Código WBS | Nombre del Elemento | Nivel | Tipo | Responsable | Cuenta de Control |
|------------|---------------------|-------|------|-------------|-------------------|
| 1.0 | [Nombre del Proyecto] | 1 | Proyecto | [Director PM] | - |
| 1.1 | [Fase/Entregable 1] | 2 | Entregable | [Responsable] | CC-01 |
| 1.1.1 | [Componente] | 3 | Componente | [Responsable] | CC-01 |
| 1.1.1.1 | [Paquete de Trabajo] | 4 | Paquete | [Responsable] | CC-01 |
| 1.1.1.2 | [Paquete de Trabajo] | 4 | Paquete | [Responsable] | CC-01 |
| 1.1.2 | [Componente] | 3 | Componente | [Responsable] | CC-01 |
| 1.1.2.1 | [Paquete de Trabajo] | 4 | Paquete | [Responsable] | CC-01 |
| 1.2 | [Fase/Entregable 2] | 2 | Entregable | [Responsable] | CC-02 |
| 1.2.1 | [Componente] | 3 | Componente | [Responsable] | CC-02 |
| 1.2.1.1 | [Paquete de Trabajo] | 4 | Paquete | [Responsable] | CC-02 |
| 1.3 | [Fase/Entregable 3] | 2 | Entregable | [Responsable] | CC-03 |
| 1.4 | Gestión del Proyecto | 2 | Entregable | [Director PM] | CC-04 |
| 1.4.1 | Inicio | 3 | Componente | [Director PM] | CC-04 |
| 1.4.2 | Planificación | 3 | Componente | [Director PM] | CC-04 |
| 1.4.3 | Ejecución y Control | 3 | Componente | [Director PM] | CC-04 |
| 1.4.4 | Cierre | 3 | Componente | [Director PM] | CC-04 |

---

### REGLAS DE DESCOMPOSICIÓN APLICADAS

Esta WBS fue desarrollada siguiendo las siguientes reglas del PMBOK 8.

**Regla del 100%:** La WBS representa el 100% del trabajo del proyecto. Cada nivel de descomposición representa el 100% del trabajo de su elemento padre.

**Elementos Mutuamente Excluyentes:** Cada elemento aparece una sola vez en la WBS. No hay duplicación de trabajo.

**Orientación a Entregables:** La WBS está organizada en torno a los entregables del proyecto, no a las actividades.

**Regla del 8/80:** Cada paquete de trabajo puede completarse en no menos de 8 horas ni más de 80 horas de trabajo.

**Nivel de Control:** La descomposición se detuvo cuando se alcanzó un nivel que permite estimación, asignación y control efectivos.

---

### DICCIONARIO DE LA WBS (EXTRACTO)

#### 1.1.1.1 [Nombre del Paquete de Trabajo]

**Código WBS:** 1.1.1.1

**Nombre:** [Nombre descriptivo del paquete de trabajo]

**Descripción del Trabajo:** [Descripción detallada del trabajo incluido en este paquete. Ser específico sobre lo que se hará.]

**Cuenta de Control:** CC-01

**Responsable:** [Nombre o Rol]

**Fecha de Inicio Planificada:** [DD/MM/AAAA]

**Fecha de Fin Planificada:** [DD/MM/AAAA]

**Duración Estimada:** [# días/horas]

**Costo Estimado:** $[monto]

**Recursos Asignados:** [Lista de recursos humanos y materiales necesarios]

**Dependencias:** [Códigos WBS de los elementos predecesores y sucesores]

**Supuestos:** [Supuestos específicos para este paquete de trabajo]

**Restricciones:** [Restricciones específicas que afectan este paquete]

**Criterios de Aceptación:** [Condiciones que deben cumplirse para que el entregable de este paquete sea aceptado. Ser específico y verificable.]

**Riesgos Asociados:** [Referencias a riesgos del registro de riesgos que afectan este paquete]

**Requisitos de Calidad:** [Estándares de calidad aplicables]

**Información Técnica:** [Especificaciones técnicas relevantes, referencias a documentos técnicos]

---

#### 1.1.1.2 [Nombre del Paquete de Trabajo]

**Código WBS:** 1.1.1.2

**Nombre:** [Nombre]

**Descripción del Trabajo:** [Descripción]

[Continuar con la misma estructura para cada paquete de trabajo]

---

### CUENTAS DE CONTROL

Las cuentas de control agrupan paquetes de trabajo para fines de medición del desempeño y control de costos.

| Código CC | Nombre | Elementos WBS Incluidos | Responsable | Presupuesto |
|-----------|--------|------------------------|-------------|-------------|
| CC-01 | [Nombre descriptivo] | 1.1.x.x | [Nombre] | $[monto] |
| CC-02 | [Nombre descriptivo] | 1.2.x.x | [Nombre] | $[monto] |
| CC-03 | [Nombre descriptivo] | 1.3.x.x | [Nombre] | $[monto] |
| CC-04 | Gestión del Proyecto | 1.4.x.x | [Director PM] | $[monto] |

---

### RESUMEN DE LA WBS

**Estadísticas:**

El proyecto contiene un total de [#] elementos distribuidos de la siguiente manera: [#] entregables principales de nivel 2, [#] componentes de nivel 3 y [#] paquetes de trabajo de nivel 4.

**Duración Total Estimada:** [# días/meses]

**Costo Total Estimado:** $[monto]

**Distribución por Entregable Principal:**

| Entregable | Paquetes de Trabajo | Costo Estimado | % del Total |
|------------|---------------------|----------------|-------------|
| 1.1 [Nombre] | [#] | $[monto] | [%] |
| 1.2 [Nombre] | [#] | $[monto] | [%] |
| 1.3 [Nombre] | [#] | $[monto] | [%] |
| 1.4 Gestión del Proyecto | [#] | $[monto] | [%] |
| **Total** | **[#]** | **$[monto]** | **100%** |

---

### APROBACIÓN DE LA LÍNEA BASE DEL ALCANCE

Con la firma de este documento se establece la línea base del alcance del proyecto. Cualquier cambio posterior requiere aprobación a través del proceso de control de cambios.

| Rol | Nombre | Firma | Fecha |
|-----|--------|-------|-------|
| Patrocinador | | | |
| Director del Proyecto | | | |
| Cliente/Usuario Principal | | | |

---

### CONTROL DE VERSIONES

| Versión | Fecha | Autor | Descripción del Cambio | Aprobado por |
|---------|-------|-------|------------------------|--------------|
| 1.0 | [Fecha] | [Nombre] | Versión inicial - Línea base | [Nombre] |
| | | | | |

---

*Este documento se genera siguiendo las mejores prácticas del PMBOK 8 del PMI para el dominio de Alcance.*
