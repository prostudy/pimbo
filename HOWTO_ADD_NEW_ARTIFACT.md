# Cómo Agregar Nuevos Artefactos al Sistema PimBo

## 📋 **Proceso Simplificado (Solo 2 Pasos)**

### **Paso 1: Agregar Configuración** 
Editar `config/artifacts.json` y agregar nueva entrada:

```json
{
  "artifacts": {
    // ... artefactos existentes ...
    
    "business-case": {
      "name": "Business Case",
      "full_name": "Caso de Negocio del Proyecto",
      "domain": "gobernanza",
      "format": "md",
      "description": "Justificación económica detallada del proyecto con análisis costo-beneficio y ROI esperado.",
      "phases": ["Inicio"],
      "badges": ["Gobernanza", "Inicio"],
      "importance": "Alta"
    }
  }
}
```

### **Paso 2: ¡Listo!** 
- ✅ Aparece automáticamente en la interfaz web
- ✅ Se mapea al dominio correcto (`gobernanza` → `GOBERNANZA-AGENT`)
- ✅ Usa el skill y subagente existente (`skills/gobernanza.md`)
- ✅ PHP agent lo reconoce automáticamente
- ✅ JavaScript lo carga dinámicamente

## 🆕 **Agregar Nuevo Dominio Completo**

Si necesitas un **dominio completamente nuevo** (ej: "calidad"):

### **Paso 1: Crear archivos del dominio**
```bash
# Crear skill especializado
touch skills/calidad.md

# Crear subagente especializado  
touch subagents/calidad-agent.md
```

### **Paso 2: Agregar configuración**
En `config/artifacts.json`:

```json
{
  "domains": {
    // ... dominios existentes ...
    
    "calidad": {
      "name": "Calidad",
      "skill_file": "calidad.md",
      "agent_file": "calidad-agent.md", 
      "description": "Gestión de calidad y aseguramiento",
      "color": "#8E44AD"
    }
  },
  "artifacts": {
    // ... artefactos existentes ...
    
    "plan-calidad": {
      "name": "Plan de Calidad",
      "full_name": "Plan de Gestión de Calidad",
      "domain": "calidad",
      "format": "md",
      "description": "Estándares y métricas de calidad del proyecto",
      "phases": ["Planificación"],
      "badges": ["Calidad", "Planificación"],
      "importance": "Alta"
    }
  }
}
```

### **Paso 3: ¡Listo!**
- ✅ Nuevo dominio disponible automáticamente
- ✅ Nuevo artefacto se genera con subagente especializado
- ✅ Todo integrado sin modificar código

## 📊 **Ejemplo de Configuración Completa**

```json
{
  "domains": {
    "nuevoDominio": {
      "name": "Nuevo Dominio",
      "skill_file": "nuevo-dominio.md",
      "agent_file": "nuevo-dominio-agent.md",
      "description": "Descripción del nuevo dominio",
      "color": "#E74C3C"
    }
  },
  "artifacts": {
    "nuevo-artefacto": {
      "name": "Nuevo Artefacto",
      "full_name": "Nombre Completo del Artefacto",
      "domain": "nuevoDominio",
      "format": "md",  // md, json, or csv
      "description": "Descripción detallada...",
      "phases": ["Inicio", "Planificación"],
      "badges": ["Nuevo Dominio", "Inicio"],
      "importance": "Media"  // Crítico, Alta, Media
    }
  }
}
```

## 🎯 **Formatos Disponibles**

### **Markdown (.md)**
- Documentos narrativos
- Planes, políticas, procedimientos
- Formato profesional con títulos y tablas

### **JSON (.json)** 
- Estructuras jerárquicas (como WBS)
- Visualización de árbol interactiva
- Datos estructurados complejos

### **CSV (.csv)**
- Tablas y registros
- Compatible con Excel/hojas de cálculo
- Matrices, listas, cronogramas

## ⚡ **Ventajas del Sistema Dinámico**

1. **Sin Hardcoding**: No hay que modificar código PHP/JS
2. **Consistencia**: Una fuente de verdad para todo
3. **Escalabilidad**: Fácil agregar dominios/artefactos
4. **Mantenimiento**: Cambios centralizados
5. **Educativo**: Transparencia total del proceso

## 🧪 **Validar Cambios**

Después de agregar configuración:

```bash
# Probar el sistema
php test_dynamic_system.php

# Verificar en navegador
open http://localhost/pimbo/interface/
```

## 🎓 **Para Estudiantes del Diplomado**

El sistema dinámico les enseña:
- Arquitectura de sistemas escalables
- Separación de configuración y código
- Principios DRY (Don't Repeat Yourself)
- Sistemas multi-agente especializados
- Cómo el software evoluciona manteniendo compatibilidad

## 🚀 **Ejemplos de Expansión**

### **Nuevos dominios PMBOK futuros:**
- `innovacion` - Gestión de innovación
- `sostenibilidad` - Sostenibilidad ambiental
- `ciberseguridad` - Seguridad del proyecto
- `datos` - Gestión de datos del proyecto

### **Nuevos artefactos por dominio:**
- `gobernanza`: business-case, decision-log, governance-board
- `alcance`: scope-statement, acceptance-criteria, deliverables-list
- `riesgo`: risk-heatmap, contingency-plan, risk-appetite

¡Todo se agrega solo modificando la configuración! 🎉