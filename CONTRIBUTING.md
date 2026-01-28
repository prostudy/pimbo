# Guía de Contribución - PimBo

¡Gracias por tu interés en contribuir a PimBo! 🎉

Este documento proporciona directrices para contribuir al proyecto. Siguiendo estas guías ayudas a mantener la calidad y coherencia del código.

---

## 📋 Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [¿Cómo Puedo Contribuir?](#cómo-puedo-contribuir)
- [Reportar Bugs](#reportar-bugs)
- [Sugerir Mejoras](#sugerir-mejoras)
- [Tu Primera Contribución](#tu-primera-contribución)
- [Proceso de Pull Request](#proceso-de-pull-request)
- [Guías de Estilo](#guías-de-estilo)
- [Estructura del Proyecto](#estructura-del-proyecto)

---

## 📜 Código de Conducta

Este proyecto se adhiere al [Código de Conducta](CODE_OF_CONDUCT.md). Al participar, se espera que cumplas con este código. Por favor reporta comportamiento inaceptable a pimbo-conduct@tu-dominio.com.

---

## 🤝 ¿Cómo Puedo Contribuir?

### 1. Reportar Bugs 🐛

Los bugs se rastrean como [GitHub Issues](https://github.com/tu-usuario/pimbo/issues). Antes de crear un bug report:

- **Busca** en los issues existentes para evitar duplicados
- **Verifica** que estés usando la última versión
- **Recopila** información sobre el bug

### 2. Sugerir Mejoras ✨

Las sugerencias de mejoras también son issues. Antes de sugerir:

- **Verifica** que no exista una sugerencia similar
- **Describe** claramente el beneficio de la mejora
- **Proporciona** ejemplos de uso si es posible

### 3. Contribuir con Código 💻

- Corregir bugs reportados
- Implementar features solicitadas
- Mejorar documentación
- Agregar tests
- Optimizar rendimiento

### 4. Mejorar Documentación 📝

- Corregir typos o errores
- Agregar ejemplos
- Mejorar claridad
- Traducir a otros idiomas

### 5. Crear Plantillas 📦

- Agregar nuevas plantillas de proyectos
- Mejorar plantillas existentes
- Crear plantillas específicas por industria

---

## 🐛 Reportar Bugs

### Antes de Reportar

1. **Actualiza** a la última versión
2. **Busca** en los issues existentes
3. **Recopila** información del error

### Cómo Reportar un Bug

Usa el [template de bug report](.github/ISSUE_TEMPLATE/bug_report.md) e incluye:

**Información Requerida:**

- **Descripción clara** del problema
- **Pasos para reproducir**:
  1. Paso 1
  2. Paso 2
  3. ...
- **Comportamiento esperado**
- **Comportamiento actual**
- **Screenshots** (si aplica)
- **Entorno**:
  - OS: [ej. macOS 14.0]
  - Navegador: [ej. Chrome 120]
  - Versión de PimBo: [ej. 1.0.0]
  - Proveedor de IA: [Claude/Gemini]

**Ejemplo de Bug Report:**

```markdown
**Descripción:**
El botón "Copiar Prompt" no funciona en Safari 17

**Pasos para reproducir:**
1. Abrir index.html en Safari 17
2. Completar formulario
3. Click en "Generar Prompt"
4. Click en "Copiar Prompt"

**Esperado:** Prompt se copia al portapapeles
**Actual:** Nada sucede, no hay feedback

**Entorno:**
- OS: macOS 14.1
- Navegador: Safari 17.0
- Versión: 1.0.0
```

---

## ✨ Sugerir Mejoras

Usa el [template de feature request](.github/ISSUE_TEMPLATE/feature_request.md) e incluye:

**Información Requerida:**

- **Problema que resuelve** - ¿Por qué es necesario?
- **Solución propuesta** - ¿Cómo debería funcionar?
- **Alternativas consideradas** - ¿Qué otras opciones existen?
- **Contexto adicional** - Screenshots, mockups, ejemplos

**Ejemplo de Feature Request:**

```markdown
**Problema:**
Usuarios necesitan exportar artefactos a formato Word para compartir con stakeholders que no usan archivos Markdown.

**Solución Propuesta:**
Agregar botón "Exportar a Word" que convierta los archivos .md generados a .docx manteniendo formato.

**Alternativas:**
- Exportar a PDF
- Integración con Google Docs
- Mantener solo Markdown (actual)

**Contexto:**
En empresas tradicionales, Word es el estándar corporativo.
```

---

## 🚀 Tu Primera Contribución

¿Primera vez contribuyendo a open source? Aquí hay algunos recursos:

- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [First Timers Only](https://www.firsttimersonly.com/)

### Issues para Principiantes

Busca issues con las etiquetas:

- `good first issue` - Ideal para principiantes
- `help wanted` - Se necesita ayuda
- `documentation` - Solo documentación

### Configuración del Entorno

```bash
# 1. Fork el repositorio en GitHub

# 2. Clonar tu fork
git clone https://github.com/TU-USUARIO/pimbo.git
cd pimbo

# 3. Agregar upstream remoto
git remote add upstream https://github.com/usuario-original/pimbo.git

# 4. Crear rama para tu feature
git checkout -b feature/mi-mejora

# 5. Hacer cambios y commits
git add .
git commit -m "Add: mi mejora increíble"

# 6. Push a tu fork
git push origin feature/mi-mejora

# 7. Crear Pull Request en GitHub
```

---

## 🔄 Proceso de Pull Request

### Antes de Enviar

1. **Verifica** que tu código funcione
2. **Prueba** en diferentes navegadores (si aplica)
3. **Actualiza** documentación si es necesario
4. **Sigue** las guías de estilo

### Checklist de Pull Request

- [ ] El código sigue las guías de estilo del proyecto
- [ ] He comentado mi código, especialmente en áreas complejas
- [ ] He actualizado la documentación según corresponda
- [ ] Mis cambios no generan nuevos warnings
- [ ] He probado que mi fix/feature funciona
- [ ] He actualizado el CHANGELOG.md (si aplica)

### Proceso de Review

1. **Envías** el Pull Request
2. **Mantainer revisa** - Puede solicitar cambios
3. **Haces ajustes** si se solicitan
4. **Se aprueba** y se hace merge

### Convenciones de Commits

Usamos [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Tipos:**
- `feat:` Nueva funcionalidad
- `fix:` Corrección de bug
- `docs:` Solo documentación
- `style:` Formato, sin cambios de código
- `refactor:` Refactorización de código
- `test:` Agregar tests
- `chore:` Mantenimiento

**Ejemplos:**

```bash
feat(interface): add export to Word functionality
fix(cli): resolve clipboard copy issue on Windows
docs(readme): update installation instructions
style(web): improve button hover effects
refactor(agents): simplify prompt generation logic
test(skills): add unit tests for gobernanza agent
chore(deps): update streamlit to v1.30.0
```

---

## 🎨 Guías de Estilo

### Código JavaScript

```javascript
// ✅ BIEN
function generatePrompt(projectData) {
    const { name, description } = projectData;

    if (!name || !description) {
        throw new Error('Missing required fields');
    }

    return `Project: ${name}\nDescription: ${description}`;
}

// ❌ MAL
function gen_prompt(data) {
    return "Project: "+data.name+"\nDescription: "+data.description
}
```

**Reglas:**
- Usar `camelCase` para variables y funciones
- Usar `const` por defecto, `let` cuando sea necesario
- Evitar `var`
- Nombres descriptivos
- Comentarios en español o inglés consistentemente

### Código Python

```python
# ✅ BIEN
def generate_prompt(project_data: dict) -> str:
    """
    Genera un prompt optimizado para Claude AI.

    Args:
        project_data: Diccionario con información del proyecto

    Returns:
        Prompt formateado como string
    """
    name = project_data.get('name')
    description = project_data.get('description')

    if not name or not description:
        raise ValueError('Missing required fields')

    return f"Project: {name}\nDescription: {description}"

# ❌ MAL
def gen_prompt(data):
    return "Project: "+data['name']+"\nDescription: "+data['description']
```

**Reglas:**
- Seguir PEP 8
- Usar `snake_case`
- Type hints cuando sea posible
- Docstrings para funciones

### Markdown

```markdown
✅ BIEN:
# Título Principal

## Sección

Párrafo con **énfasis** y `código inline`.

### Subsección

- Lista item 1
- Lista item 2

❌ MAL:
#Título sin espacio

## sección sin capitalizar

Párrafo sin estructura
*énfasis mal usado*
```

**Reglas:**
- Títulos con espacio después de `#`
- Listas con línea en blanco antes y después
- Code blocks con lenguaje especificado
- Links descriptivos, no "click aquí"

### HTML/CSS

```html
<!-- ✅ BIEN -->
<div class="artifact-card">
    <h3 class="artifact-title">Acta de Constitución</h3>
    <p class="artifact-description">Documento que autoriza...</p>
</div>

<!-- ❌ MAL -->
<div class=card>
<h3>Acta de Constitución</h3>
<p>Documento que autoriza...</p></div>
```

**Reglas:**
- Indentación de 4 espacios
- Nombres de clase descriptivos en `kebab-case`
- Cerrar todas las etiquetas
- Atributos con comillas dobles

---

## 📁 Estructura del Proyecto

### Dónde Agregar Archivos

```
pimbo/
├── pmbok8-agents-system/
│   ├── skills/                  # Documentación de skills
│   │   └── nuevo-skill.md      # ← Agregar nuevo skill aquí
│   │
│   ├── subagents/              # Implementación de agentes
│   │   └── nuevo-agent.md      # ← Implementación aquí
│   │
│   ├── references/             # Plantillas
│   │   └── nuevo-dominio/      # ← Nueva plantilla aquí
│   │       └── plantillas/
│   │
│   └── interface/              # Interfaces de usuario
│       ├── index.html          # ← Modificar interfaz web
│       ├── cli-interactive.sh  # ← Modificar CLI
│       └── streamlit_app.py    # ← Modificar Streamlit
```

### Agregar Nuevo Artefacto

1. **Documentación** en `skills/dominio.md`
2. **Implementación** en `subagents/dominio-agent.md`
3. **Plantilla** en `references/dominio/plantillas/`
4. **Actualizar interfaces** para incluir nuevo artefacto

### Agregar Nueva Plantilla de Proyecto

Editar `interface/index.html`:

```javascript
const templates = {
    // ... plantillas existentes

    miPlantilla: {
        name: 'Nombre del Proyecto',
        description: 'Descripción...',
        justification: 'Justificación...'
    }
};
```

---

## 🧪 Testing

### Probar Cambios Localmente

```bash
# 1. Interfaz Web
open pmbok8-agents-system/interface/index.html

# 2. CLI
cd pmbok8-agents-system/interface/
./cli-interactive.sh

# 3. Streamlit
streamlit run pmbok8-agents-system/interface/streamlit_app.py
```

### Casos de Prueba

Antes de enviar PR, verifica:

- [ ] Interfaz web carga sin errores en Chrome, Firefox, Safari
- [ ] Formulario valida campos requeridos
- [ ] Botón copiar funciona
- [ ] Prompt generado es válido
- [ ] CLI ejecuta sin errores
- [ ] Streamlit inicia correctamente
- [ ] Documentación está actualizada

---

## 📞 ¿Preguntas?

Si tienes preguntas sobre cómo contribuir:

1. **Lee** la [documentación](pmbok8-agents-system/interface/README.md)
2. **Busca** en [Issues](https://github.com/tu-usuario/pimbo/issues)
3. **Pregunta** en [Discussions](https://github.com/tu-usuario/pimbo/discussions)
4. **Contacta** a los mantenedores

---

## 🎖️ Reconocimientos

Todos los contribuidores serán agregados al [CONTRIBUTORS.md](CONTRIBUTORS.md).

### Top Contributors

```
Contribuidor         Commits    PRs    Issues
================     =======    ===    ======
@usuario1            150        45     20
@usuario2            120        30     15
@usuario3            90         25     10
```

---

## 📚 Recursos Adicionales

- [GitHub Flow](https://guides.github.com/introduction/flow/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Semantic Versioning](https://semver.org/)
- [Keep a Changelog](https://keepachangelog.com/)

---

**¡Gracias por contribuir a PimBo!** 🙏

Tu ayuda hace que este proyecto sea mejor para toda la comunidad de gestión de proyectos.

---

_Última actualización: 2026-01-28_
