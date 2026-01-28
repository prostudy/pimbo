# REGISTRO DE RIESGOS
## Risk Register

---

### INFORMACIÓN DEL DOCUMENTO

| Campo | Valor |
|-------|-------|
| Proyecto | [Nombre del Proyecto] |
| ID del Proyecto | [Código] |
| Fecha de Creación | [DD/MM/AAAA] |
| Última Actualización | [DD/MM/AAAA] |
| Responsable | [Nombre del Gestor de Riesgos] |
| Versión | [X.X] |

---

### ESCALAS DE EVALUACIÓN

#### Probabilidad de Ocurrencia

| Nivel | Valor | Descripción | Rango |
|-------|-------|-------------|-------|
| Muy Alta | 5 | Casi seguro que ocurrirá | >70% |
| Alta | 4 | Probablemente ocurrirá | 50-70% |
| Media | 3 | Podría ocurrir | 30-50% |
| Baja | 2 | Poco probable | 10-30% |
| Muy Baja | 1 | Rara vez ocurrirá | <10% |

#### Impacto sobre Objetivos

| Nivel | Valor | Costo | Tiempo | Alcance | Calidad |
|-------|-------|-------|--------|---------|---------|
| Muy Alto | 5 | >40% aumento | >6 meses retraso | Inaceptable | No utilizable |
| Alto | 4 | 20-40% aumento | 3-6 meses retraso | Reducción mayor | Muy afectada |
| Medio | 3 | 10-20% aumento | 1-3 meses retraso | Reducción menor | Afectada |
| Bajo | 2 | 5-10% aumento | 1-4 semanas retraso | Apenas notable | Levemente afectada |
| Muy Bajo | 1 | <5% aumento | <1 semana retraso | Insignificante | Degradación menor |

#### Matriz de Severidad (Probabilidad × Impacto)

| Probabilidad / Impacto | Muy Bajo (1) | Bajo (2) | Medio (3) | Alto (4) | Muy Alto (5) |
|------------------------|--------------|----------|-----------|----------|--------------|
| Muy Alta (5) | 5 | 10 | 15 | 20 | 25 |
| Alta (4) | 4 | 8 | 12 | 16 | 20 |
| Media (3) | 3 | 6 | 9 | 12 | 15 |
| Baja (2) | 2 | 4 | 6 | 8 | 10 |
| Muy Baja (1) | 1 | 2 | 3 | 4 | 5 |

Leyenda de prioridad: 15-25 Alta (Rojo), 8-14 Media (Amarillo), 1-7 Baja (Verde)

---

### REGISTRO DE AMENAZAS (RIESGOS NEGATIVOS)

| ID | Categoría | Descripción del Riesgo | Causa Raíz | Disparador | Prob | Imp | Severidad | Estrategia | Acciones de Respuesta | Responsable | Fecha Límite | Costo Resp. | Estado | Fecha Revisión |
|----|-----------|------------------------|------------|------------|------|-----|-----------|------------|----------------------|-------------|--------------|-------------|--------|----------------|
| R001 | [Técnico/Organizacional/Externo/Gestión] | [Descripción clara: Si [evento] entonces [consecuencia]] | [¿Por qué podría ocurrir?] | [¿Qué indica que el riesgo se está materializando?] | [1-5] | [1-5] | [P×I] | [Evitar/Mitigar/Transferir/Aceptar] | [Acciones específicas] | [Nombre] | [DD/MM/AA] | [$] | [Identificado/En análisis/Con plan/En monitoreo/Cerrado/Materializado] | [DD/MM/AA] |
| R002 | | | | | | | | | | | | | | |
| R003 | | | | | | | | | | | | | | |

---

### REGISTRO DE OPORTUNIDADES (RIESGOS POSITIVOS)

| ID | Categoría | Descripción de la Oportunidad | Fuente | Disparador | Prob | Imp | Severidad | Estrategia | Acciones para Capturar | Responsable | Fecha Límite | Inversión | Estado | Fecha Revisión |
|----|-----------|------------------------------|--------|------------|------|-----|-----------|------------|----------------------|-------------|--------------|-----------|--------|----------------|
| O001 | [Categoría] | [Si [evento positivo] entonces [beneficio]] | [Origen de la oportunidad] | [¿Qué indica que la oportunidad está disponible?] | [1-5] | [1-5] | [P×I] | [Explotar/Mejorar/Compartir/Aceptar] | [Acciones específicas] | [Nombre] | [DD/MM/AA] | [$] | [Estado] | [DD/MM/AA] |
| O002 | | | | | | | | | | | | | | |

---

### RIESGOS RESIDUALES Y SECUNDARIOS

| ID Original | Tipo | ID Nuevo | Descripción | Prob | Imp | Severidad | Acción |
|-------------|------|----------|-------------|------|-----|-----------|--------|
| R001 | Residual | R001-R | [Riesgo que permanece después de implementar la respuesta] | | | | |
| R001 | Secundario | R001-S | [Riesgo nuevo creado por la respuesta] | | | | |

---

### ANÁLISIS CUANTITATIVO (Para riesgos de alta prioridad)

| ID | Descripción | Probabilidad % | Impacto Mínimo ($) | Impacto Más Probable ($) | Impacto Máximo ($) | EMV ($) | Notas |
|----|-------------|----------------|--------------------|--------------------------|--------------------|---------|-------|
| R001 | [Descripción] | [%] | [$] | [$] | [$] | [Prob × Imp Probable] | |
| R002 | | | | | | | |

**Reserva de Contingencia Calculada:** $ [Suma de EMV + % adicional por incertidumbre]

---

### RESUMEN EJECUTIVO DE RIESGOS

#### Distribución por Severidad

| Severidad | Cantidad | Porcentaje |
|-----------|----------|------------|
| Alta (15-25) | [#] | [%] |
| Media (8-14) | [#] | [%] |
| Baja (1-7) | [#] | [%] |
| **Total** | **[#]** | **100%** |

#### Distribución por Categoría

| Categoría | Cantidad | Severidad Promedio |
|-----------|----------|-------------------|
| Técnico | [#] | [#] |
| Organizacional | [#] | [#] |
| Externo | [#] | [#] |
| Gestión del Proyecto | [#] | [#] |

#### Top 5 Riesgos Prioritarios

| Prioridad | ID | Descripción | Severidad | Estado |
|-----------|----|-----------| ----------|--------|
| 1 | [ID] | [Descripción breve] | [#] | [Estado] |
| 2 | [ID] | [Descripción breve] | [#] | [Estado] |
| 3 | [ID] | [Descripción breve] | [#] | [Estado] |
| 4 | [ID] | [Descripción breve] | [#] | [Estado] |
| 5 | [ID] | [Descripción breve] | [#] | [Estado] |

---

### HISTORIAL DE CAMBIOS

| Fecha | ID Riesgo | Cambio Realizado | Autor |
|-------|-----------|------------------|-------|
| [DD/MM/AA] | [ID] | [Descripción del cambio] | [Nombre] |

---

### PRÓXIMA REVISIÓN PROGRAMADA

Fecha: [DD/MM/AAAA]

Participantes: [Lista de participantes de la revisión de riesgos]

---

*Este documento se genera siguiendo las mejores prácticas del PMBOK 8 del PMI para el dominio de Riesgo.*
