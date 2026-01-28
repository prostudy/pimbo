# 🚀 Inicio Rápido - PM Docs IA

¿Primera vez usando PM Docs IA? Sigue esta guía de 2 minutos.

---

## 🎯 ¿Qué es PM Docs IA?

Un sistema que **genera automáticamente** documentos de gestión de proyectos (PMBOK 8) usando inteligencia artificial.

**Entrada**: Descripción de tu proyecto
**Salida**: Actas, WBS, Cronogramas, Presupuestos, etc.

---

## ⚡ Opción 1: Interfaz Web (MÁS FÁCIL)

### 1. Abrir interfaz
```bash
# Doble click en:
interface/index.html

# O desde terminal:
open interface/index.html
```

### 2. Usar plantilla rápida
- Click en **"CRM de Ventas"** (o cualquier otra plantilla)
- La información se llena automáticamente

### 3. Configurar proyecto
- Fase: Selecciona **"Inicio"**
- Enfoque: Selecciona **"Híbrido"**

### 4. Seleccionar artefactos
Marca los que necesites:
- ☑️ Acta de Constitución
- ☑️ Registro de Interesados
- ☑️ Product Backlog

### 5. Generar y usar
- Click en **"Generar Prompt"**
- Click en **"Copiar Prompt"**
- Pega en Claude Code o Claude.ai
- **¡Listo!** Claude genera tus archivos

**Tiempo total**: 60 segundos

---

## 🖥️ Opción 2: Script CLI Interactivo

### 1. Ejecutar script
```bash
cd interface/
./cli-interactive.sh
```

### 2. Seguir prompts
El script te guía paso a paso:
- Nombre del proyecto
- Descripción
- Justificación
- Selección de artefactos

### 3. Copiar y usar
El script genera un archivo `.txt` con el prompt listo.

**Tiempo total**: 90 segundos

---

## 📱 Opción 3: Streamlit (Para Python)

### 1. Instalar (solo primera vez)
```bash
pip install streamlit
```

### 2. Ejecutar
```bash
cd interface/
streamlit run streamlit_app.py
```

### 3. Usar en navegador
Se abre automáticamente en `http://localhost:8501`

**Tiempo total**: 120 segundos (+ instalación inicial)

---

## 📋 Ejemplo Completo - Interfaz Web

```
1. Abrir: index.html

2. Click en plantilla "CRM de Ventas"

3. Configuración:
   ┌─────────────────────────────────┐
   │ Fase: Inicio                    │
   │ Enfoque: Híbrido                │
   └─────────────────────────────────┘

4. Artefactos (marcar):
   ☑ Acta de Constitución
   ☑ Registro de Interesados
   ☑ Product Backlog
   ☑ Matriz RACI

5. Click "Generar Prompt"

6. Click "Copiar Prompt"

7. En Claude Code:
   - Abrir terminal
   - Ejecutar: claude-code
   - Pegar prompt
   - Presionar Enter

8. Resultado:
   ✓ Archivo generado: SISTEMA-CRM-acta-v1.md
   ✓ Archivo generado: SISTEMA-CRM-interesados-v1.csv
   ✓ Archivo generado: SISTEMA-CRM-backlog-v1.csv
   ✓ Archivo generado: SISTEMA-CRM-raci-v1.csv
```

---

## 🎓 Video Tutorial (Simulado)

### Paso 1: Abrir Interfaz
![Interfaz](https://placehold.co/600x300/667eea/white?text=Interfaz+PM+Docs+IA)

### Paso 2: Completar Formulario
![Formulario](https://placehold.co/600x300/48bb78/white?text=Formulario+Completo)

### Paso 3: Seleccionar Artefactos
![Artefactos](https://placehold.co/600x300/f6ad55/white?text=Artefactos+Seleccionados)

### Paso 4: Generar y Copiar
![Prompt](https://placehold.co/600x300/ed8936/white?text=Prompt+Generado)

---

## ❓ Preguntas Frecuentes

### ¿Necesito instalar algo?
**No** para la interfaz web. Solo abre `index.html` en tu navegador.

### ¿Funciona sin internet?
**Sí** para generar el prompt. Necesitas internet solo para usar Claude.

### ¿Puedo editar el prompt generado?
**Sí**, copia el prompt y edítalo antes de darlo a Claude.

### ¿Los archivos se generan automáticamente?
**Sí**, Claude los crea automáticamente cuando le das el prompt.

### ¿Dónde se guardan los archivos?
En el directorio donde ejecutaste Claude Code.

### ¿Puedo generar más de un proyecto?
**Sí**, usa la interfaz cuantas veces necesites.

### ¿Las plantillas son editables?
**Sí**, solo edita los campos después de cargar la plantilla.

---

## 🆘 Problemas Comunes

### "No se copia el prompt"
**Solución**: Selecciona manualmente el texto y usa Ctrl+C (Cmd+C en Mac)

### "Claude no genera archivos"
**Solución**: Verifica que:
1. Estés usando Claude Code (no Claude web)
2. El prompt esté completo
3. Tengas permisos de escritura en el directorio

### "Interfaz no abre"
**Solución**:
- Click derecho → "Abrir con" → Navegador
- O arrastra `index.html` a tu navegador

### "Script CLI no ejecuta"
**Solución**:
```bash
chmod +x cli-interactive.sh
./cli-interactive.sh
```

---

## 📞 Soporte

Si tienes problemas:

1. **Revisa**: [interface/README.md](README.md) - Documentación completa
2. **Consulta**: `/skills/README.md` - Sobre los dominios PMBOK 8
3. **Contacta**: Tu coordinador del diplomado

---

## 🎯 Siguiente Nivel

Una vez domines el básico:

1. **Personaliza plantillas**: Edita `index.html` para agregar tus plantillas
2. **Explora skills**: Lee `/skills/` para entender qué genera cada artefacto
3. **Usa CLI avanzado**: Para automatizar con scripts
4. **Integra con workflow**: Crea tus propios procesos

---

## ✅ Checklist de Primera Vez

- [ ] Abrir `index.html`
- [ ] Probar plantilla "CRM de Ventas"
- [ ] Generar prompt
- [ ] Copiar prompt
- [ ] Pegar en Claude Code
- [ ] Verificar archivos generados
- [ ] ¡Celebrar! 🎉

---

**¡Listo para empezar!** 🚀

Abre `interface/index.html` y genera tu primer proyecto en menos de 60 segundos.

---

*PM Docs IA - Sistema de Generación de Artefactos PMBOK 8*
*Diplomado en Gestión de Proyectos*
