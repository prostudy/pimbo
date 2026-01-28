# Configuración de Salidas de Agentes
## Output Configuration

---

## Instrucción Global para Generación de Archivos

Esta configuración debe ser leída por el agente coordinador antes de invocar cualquier subagente.

---

## Regla Principal de Generación

Cuando se solicite generar artefactos, cada subagente DEBE:

1. **Crear el archivo directamente** sin explicaciones previas
2. **Usar el formato especificado** según el tipo de artefacto
3. **Nombrar el archivo** siguiendo la convención establecida
4. **NO mostrar el contenido en el chat** - solo generar el archivo
5. **Confirmar con una línea** qué archivo se generó

---

## Formatos Recomendados por Tipo de Artefacto

### Documentos de Texto Extenso → Markdown (.md)
**Usar para:** Acta de Constitución, Planes de Gestión, Lecciones Aprendidas, Informes

**Ventajas:** 
- Mínimo overhead de tokens
- Legible directamente
- Convertible a Word/PDF fácilmente
- Ideal para documentos narrativos

**Convención de nombre:** `[codigo-proyecto]-[artefacto]-v[version].md`

**Ejemplo:** `PRY001-acta-constitucion-v1.md`

---

### Tablas y Registros → CSV (.csv)
**Usar para:** Registro de Riesgos, Registro de Interesados, Backlog, Lista de Actividades

**Ventajas:**
- Mínimo uso de tokens (sin formato)
- Importable a Excel directamente
- Fácil de filtrar y ordenar
- Ideal para datos tabulares

**Convención de nombre:** `[codigo-proyecto]-[artefacto]-v[version].csv`

**Ejemplo:** `PRY001-registro-riesgos-v1.csv`

---

### Matrices → CSV (.csv)
**Usar para:** Matriz RACI, Matriz Poder/Interés, Matriz de Comunicaciones

**Ventajas:**
- Estructura tabular nativa
- Editable en cualquier hoja de cálculo

**Convención de nombre:** `[codigo-proyecto]-matriz-[tipo]-v[version].csv`

**Ejemplo:** `PRY001-matriz-raci-v1.csv`

---

### Estructuras Jerárquicas → JSON (.json)
**Usar para:** WBS, Estructura de Backlog, Organigrama

**Ventajas:**
- Representa jerarquías naturalmente
- Procesable programáticamente
- Mínimo tokens para estructuras anidadas

**Convención de nombre:** `[codigo-proyecto]-[artefacto]-v[version].json`

**Ejemplo:** `PRY001-wbs-v1.json`

---

### Cronogramas → CSV (.csv)
**Usar para:** Lista de actividades con fechas, Hitos, Calendario

**Ventajas:**
- Importable a MS Project, Excel, herramientas de gestión
- Formato estándar de intercambio

**Convención de nombre:** `[codigo-proyecto]-cronograma-v[version].csv`

---

## Comparativa de Ahorro de Tokens

| Formato | Tokens por 1000 caracteres | Mejor Para |
|---------|---------------------------|------------|
| CSV | ~200 | Tablas, registros, listas |
| JSON | ~250 | Jerarquías, estructuras anidadas |
| Markdown | ~220 | Documentos narrativos |
| DOCX | N/A (binario) | Entrega final al cliente |

**Recomendación:** Usar CSV/JSON para trabajo interno, convertir a DOCX/PDF solo para entrega final.

---

## Mapeo de Artefactos a Formatos

| Artefacto | Formato | Archivo |
|-----------|---------|---------|
| Acta de Constitución | .md | acta-constitucion.md |
| Registro de Interesados | .csv | registro-interesados.csv |
| Matriz Poder/Interés | .csv | matriz-poder-interes.csv |
| Plan de Comunicaciones | .md | plan-comunicaciones.md |
| WBS | .json | wbs.json |
| Diccionario WBS | .csv | diccionario-wbs.csv |
| Cronograma | .csv | cronograma.csv |
| Lista de Hitos | .csv | hitos.csv |
| Presupuesto | .csv | presupuesto.csv |
| Flujo de Caja | .csv | flujo-caja.csv |
| Matriz RACI | .csv | matriz-raci.csv |
| Registro de Riesgos | .csv | registro-riesgos.csv |
| Matriz Prob/Impacto | .csv | matriz-riesgos.csv |
| Product Backlog | .csv | product-backlog.csv |
| Historias de Usuario | .json | historias-usuario.json |
| Sprint Backlog | .csv | sprint-backlog.csv |
| Definition of Done | .md | definition-of-done.md |

---

## Instrucción para el Prompt del Sistema

Incluir esta instrucción en el system prompt o al inicio de la conversación:

```
INSTRUCCIÓN DE GENERACIÓN DE ARCHIVOS:

Cuando generes artefactos de gestión de proyectos:

1. CREA EL ARCHIVO DIRECTAMENTE sin explicaciones previas
2. USA estos formatos:
   - Documentos narrativos → .md
   - Tablas y registros → .csv  
   - Estructuras jerárquicas (WBS) → .json
3. NOMBRA el archivo: [proyecto]-[artefacto]-v1.[ext]
4. NO muestres el contenido en el chat
5. CONFIRMA solo con: "✓ Archivo generado: [nombre]"

Prioriza CSV sobre Markdown para cualquier dato tabular.
```

---

## Ejemplo de Flujo Optimizado

**Usuario solicita:**
```
Proyecto: SISCON
Generar: Registro de Riesgos, Matriz RACI, Acta de Constitución
```

**Agente responde:**
```
Generando artefactos para proyecto SISCON...

✓ Archivo generado: SISCON-registro-riesgos-v1.csv
✓ Archivo generado: SISCON-matriz-raci-v1.csv
✓ Archivo generado: SISCON-acta-constitucion-v1.md

3 archivos listos para descarga.
```

**NO hace esto (desperdicio de tokens):**
```
Voy a generar el registro de riesgos. Este documento contiene...
[muestra todo el contenido]
Ahora procederé con la matriz RACI...
[muestra todo el contenido]
```

---

## Plantillas Compactas para CSV

### Registro de Riesgos (CSV)
```csv
ID,Descripcion,Categoria,Probabilidad,Impacto,Severidad,Estrategia,Responsable,Estado
R001,"Descripcion del riesgo",Tecnico,3,4,12,Mitigar,Nombre,Activo
```

### Registro de Interesados (CSV)
```csv
ID,Nombre,Organizacion,Rol,Poder,Interes,Cuadrante,Estrategia,Compromiso_Actual,Compromiso_Deseado
ST001,Nombre,Org,Patrocinador,5,5,A,Gestionar de cerca,S,L
```

### Matriz RACI (CSV)
```csv
Entregable,Director_PM,Lider_Tecnico,Analista,Desarrollador,QA,Usuario
Acta de Constitucion,A/R,C,I,I,I,I
Documento de Requisitos,A,C,R,I,C,C
```

### WBS (JSON)
```json
{
  "id": "1.0",
  "nombre": "Nombre del Proyecto",
  "hijos": [
    {
      "id": "1.1",
      "nombre": "Fase 1",
      "hijos": [
        {"id": "1.1.1", "nombre": "Paquete de Trabajo", "responsable": "Nombre", "horas": 40}
      ]
    }
  ]
}
```

### Product Backlog (CSV)
```csv
ID,Epica,Historia,Criterios_Aceptacion,Puntos,Prioridad,Estado,Sprint
US001,E001,"Como usuario quiero X para Y","1. Criterio A; 2. Criterio B",5,M,Listo,1
```

---

## Instrucción Rápida (Copiar y Pegar)

Para que los participantes del diplomado incluyan al inicio de su conversación:

```
Configuración de salida:
- Genera archivos directamente, sin mostrar contenido en chat
- Usa .csv para tablas/registros, .md para documentos, .json para jerarquías
- Nombra: [PROYECTO]-[artefacto]-v1.[ext]
- Confirma solo con: ✓ [nombre archivo]
```

---

*Esta configuración optimiza el uso de tokens priorizando formatos compactos y evitando duplicación de contenido en el chat.*
