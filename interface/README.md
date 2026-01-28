# Interfaces de Usuario - PM Docs IA

Este directorio contiene diferentes interfaces para facilitar el uso del sistema PM Docs IA.

## 🌐 Opción 1: Interfaz Web (RECOMENDADA)

### Características
- ✅ Interfaz visual intuitiva
- ✅ Formularios con validación
- ✅ Plantillas rápidas predefinidas
- ✅ Selección visual de artefactos
- ✅ Genera prompt optimizado para copiar/pegar
- ✅ No requiere instalación

### Cómo Usar

1. **Abrir la interfaz**:
   ```bash
   # Opción 1: Abrir directamente en el navegador
   open index.html

   # Opción 2: Si usas MAMP (ya configurado)
   # Navega a: http://localhost:8888/pm_docs_ia/pmbok8-agents-system/interface/
   ```

2. **Completar el formulario**:
   - Ingresa nombre del proyecto
   - Describe el proyecto y su justificación
   - Selecciona fase del ciclo de vida
   - Elige el enfoque (Predictivo/Ágil/Híbrido)
   - Marca los artefactos que necesitas

3. **Generar y copiar**:
   - Click en "Generar Prompt para Claude"
   - Click en "Copiar Prompt"
   - Pega el prompt en Claude Code o Claude.ai

4. **Recibir artefactos**:
   - Claude generará los archivos automáticamente
   - Los archivos se guardan en tu directorio actual

### Plantillas Rápidas Disponibles
- **CRM de Ventas**: Sistema de gestión de clientes
- **Sistema ERP**: Implementación empresarial
- **App Móvil**: Aplicación iOS/Android
- **Infraestructura Cloud**: Migración a la nube

---

## 🖥️ Opción 2: Script Interactivo CLI

### Características
- ✅ Funciona en terminal
- ✅ Prompts interactivos paso a paso
- ✅ Guarda configuración en JSON
- ✅ Genera prompt optimizado

### Cómo Usar

```bash
# 1. Dar permisos de ejecución
chmod +x cli-interactive.sh

# 2. Ejecutar el script
./cli-interactive.sh

# 3. Seguir las instrucciones en pantalla
```

### Ejemplo de Uso
```
🚀 PM Docs IA - Generador Interactivo
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Nombre del proyecto: Sistema CRM
Descripción: [ingresa descripción]
Justificación: [ingresa justificación]

Fase del ciclo de vida:
1) Inicio
2) Planificación
3) Ejecución
4) Monitoreo
5) Cierre

Selecciona (1-5): 1

[continúa...]
```

---

## 📱 Opción 3: Interfaz Streamlit (Python)

### Características
- ✅ Interfaz web interactiva con Python
- ✅ Widgets avanzados
- ✅ Previsualización de artefactos
- ✅ Exportación a múltiples formatos

### Requisitos
```bash
pip install streamlit
```

### Cómo Usar

```bash
# 1. Instalar dependencias
pip install streamlit

# 2. Ejecutar la aplicación
streamlit run streamlit_app.py

# 3. Abrir navegador en http://localhost:8501
```

### Características Adicionales
- Barra lateral con configuración
- Previsualización en tiempo real
- Descarga directa de configuración
- Historial de proyectos generados

---

## 🔄 Comparación de Interfaces

| Característica | Web HTML | CLI Script | Streamlit |
|----------------|----------|------------|-----------|
| Instalación | ❌ No requiere | ❌ No requiere | ✅ Requiere Python |
| Facilidad de Uso | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| Visual | ✅ Muy visual | ❌ Solo texto | ✅ Visual |
| Velocidad | ⚡ Instantánea | ⚡ Instantánea | 🐌 Carga inicial |
| Personalización | ⚙️ Básica | ⚙️ Básica | ⚙️⚙️ Avanzada |
| Portabilidad | 📦 100% | 📦 100% | 📦 70% |
| Ideal para | Estudiantes | Power users | Desarrolladores |

---

## 🎯 Recomendación por Perfil

### Para Estudiantes del Diplomado
**Usar: Interfaz Web HTML (`index.html`)**
- Más fácil de usar
- No requiere instalación
- Visual y atractivo
- Funciona offline

### Para Profesores/Coordinadores
**Usar: Streamlit (`streamlit_app.py`)**
- Pueden personalizar fácilmente
- Agregar más características
- Integrar con bases de datos
- Trackear uso de estudiantes

### Para Usuarios Avanzados/Terminal
**Usar: CLI Script (`cli-interactive.sh`)**
- Rápido de ejecutar
- Integrable en workflows
- Automatizable con scripts

---

## 📋 Flujo General de Uso

```
1. Usuario abre interfaz
   ↓
2. Completa información del proyecto
   ↓
3. Selecciona artefactos deseados
   ↓
4. Interfaz genera prompt optimizado
   ↓
5. Usuario copia prompt
   ↓
6. Pega en Claude Code / Claude.ai
   ↓
7. Claude genera archivos automáticamente
   ↓
8. Archivos listos en directorio del proyecto
```

---

## 🛠️ Personalización

### Agregar Nuevos Templates (Web)

Edita `index.html` y agrega en la sección `templates`:

```javascript
const templates = {
    miPlantilla: {
        name: 'Nombre del Proyecto',
        description: 'Descripción...',
        justification: 'Justificación...'
    }
};
```

Luego agrega el botón:
```html
<button class="template-btn" onclick="loadTemplate('miPlantilla')">Mi Plantilla</button>
```

### Agregar Nuevos Artefactos

Edita `index.html` en la sección `artifacts-grid`:

```html
<div class="artifact-card" onclick="toggleArtifact('nuevoArtefacto')">
    <div class="artifact-header">
        <input type="checkbox" id="nuevoArtefacto" onclick="event.stopPropagation()">
        <h3>Nombre del Artefacto</h3>
    </div>
    <p class="artifact-description">Descripción...</p>
    <span class="artifact-badge">Dominio</span>
</div>
```

---

## 🚀 Inicio Rápido - 30 Segundos

```bash
# 1. Abrir interfaz web
open interface/index.html

# 2. Click en "CRM de Ventas" (plantilla rápida)

# 3. Seleccionar fase: "Inicio"

# 4. Enfoque: "Híbrido"

# 5. Marcar:
#    ☑ Acta de Constitución
#    ☑ Registro de Interesados
#    ☑ Product Backlog

# 6. Click "Generar Prompt"

# 7. Click "Copiar Prompt"

# 8. Pegar en Claude → ¡Listo!
```

---

## 📞 Soporte

Si tienes problemas con las interfaces:

1. **Interfaz Web no carga**: Verifica que el archivo `index.html` esté completo
2. **Botón copiar no funciona**: Usa selección manual (Ctrl+C / Cmd+C)
3. **Streamlit no inicia**: Verifica instalación con `pip show streamlit`
4. **CLI no ejecuta**: Verifica permisos con `chmod +x cli-interactive.sh`

---

**Creado para el Diplomado en Gestión de Proyectos**
**Sistema PM Docs IA - PMBOK 8**
