# PimBo Web Interface Setup Guide

## Overview

La nueva interfaz web de PimBo permite generar automáticamente todos los artefactos del proyecto usando Claude API directamente desde el navegador. Esta funcionalidad complementa la opción tradicional de copiar el prompt para usar en otros asistentes de IA.

## Características Principales

### 🤖 Generación Automatizada con Arquitectura Especializada
- **Agente Coordinador PHP**: Orquesta la invocación de subagentes especializados
- **Skills Especializados**: Carga conocimiento desde `skills/[dominio].md` 
- **Subagentes PMBOK 8**: Usa implementaciones desde `subagents/[dominio]-agent.md`
- **Invocación Inteligente**: Mapea artefactos a dominios y activa el subagente correcto
- **Monitoreo Educativo**: Visualiza cada subagente, skill y proceso de generación

### 📊 Visualización Inteligente
- **Markdown**: Documentos formatados con estilos profesionales
- **JSON (WBS)**: Diagrama de árbol jerárquico interactivo 
- **CSV**: Tablas estilo hoja de cálculo con hover effects
- **Descarga**: Todos los archivos pueden descargarse en sus formatos originales

### 🔄 Flujo de Trabajo Educativo
Perfecto para participantes del diplomado para entender:
- Como el agente principal coordina sub-agentes
- Invocación de skills especializados por dominio
- Proceso paso a paso de generación de artefactos

## Requisitos Técnicos

### Servidor Web
- **Apache/Nginx** con PHP habilitado
- **PHP 7.0+** (compatible con versiones anteriores)
- **cURL** habilitado para llamadas API
- **JSON** extension habilitada

### API Claude
- **Claude API Key**: Necesaria para la generación automatizada
- **Formato**: `sk-ant-api...` (formato estándar de Anthropic)
- **Modelo**: Usa Claude 3.5 Sonnet para generación profesional

## Estructura de Archivos

```
interface/
├── index.html                 # Interfaz principal (modificada)
├── css/
│   └── style.css             # Estilos (con nuevos componentes web)
├── js/
│   └── script.js             # JavaScript (con funciones web)
└── php/
    └── agent.php             # Agente PHP para Claude API
```

## Instalación y Configuración

### 1. Verificar Servidor Web
```bash
# Verificar que PHP esté funcionando
php --version

# Verificar extensiones requeridas
php -m | grep curl
php -m | grep json
```

### 2. Configurar Permisos
```bash
# Asegurar permisos de escritura si es necesario
chmod 755 interface/php/
chmod 644 interface/php/agent.php
```

### 3. Probar la Instalación
1. Navegar a `http://localhost/pimbo/interface/`
2. Completar los pasos 1-3 normalmente
3. En el paso 4, debería aparecer la opción de modo de generación
4. Seleccionar "Automated Web Interface"
5. Introducir API key de Claude
6. Observar la generación en tiempo real

## Uso de la Interfaz Web

### Paso 1: Selección de Modo
Después de completar la configuración del proyecto, el usuario puede elegir entre:
- **Manual Generation**: Copia el prompt tradicional
- **Automated Web Interface**: Generación automática via Claude API

### Paso 2: Configuración API
- Introducir Claude API Key (se valida el formato)
- La key se envía de forma segura al agente PHP
- No se almacena permanentemente

### Paso 3: Generación Automática con Arquitectura Especializada
El Agente Coordinador:
1. **Inicialización**: Carga la arquitectura de subagentes desde `skills/` y `subagents/`
2. **Planificación**: Mapea artefactos a dominios PMBOK 8 y determina subagentes necesarios
3. **Invocación Especializada** - Para cada artefacto:
   - 🤖 Activa subagente específico (ej: GOBERNANZA-AGENT)
   - 📚 Carga skill especializado (ej: `skills/gobernanza.md`)
   - ⚙️ Carga implementación (ej: `subagents/gobernanza-agent.md`) 
   - 🔮 Construye prompt usando conocimiento especializado
   - 🌐 Invoca Claude API con contexto completo del dominio
   - ✅ Procesa respuesta según formato del artefacto

### Paso 4: Visualización de Resultados
- **Logs en Tiempo Real**: Muestra cada paso del proceso
- **Pestañas por Artefacto**: Navegación fácil entre resultados
- **Visualización Inteligente**: Formateo según tipo de archivo
- **Descarga Individual**: Cada archivo puede descargarse

## Beneficios Educativos

### Para Participantes del Diplomado
1. **Transparencia del Proceso**: Ven como trabaja el agente principal
2. **Sub-agentes Especializados**: Entienden la especialización por dominio
3. **Skills y Capacidades**: Observan diferentes tipos de generación
4. **Formatos Profesionales**: Aprenden sobre estructuras de documentos PMBOK

### Para Instructores
1. **Demostración en Vivo**: Pueden mostrar todo el proceso en clase
2. **Comparación de Métodos**: Manual vs Automatizado
3. **Análisis de Resultados**: Revisar calidad de artefactos generados
4. **Casos de Uso**: Diferentes tipos de proyectos y resultados

## Solución de Problemas

### Error: "Claude API key not configured"
- Verificar que se introdujo la API key
- Comprobar formato (debe empezar con `sk-ant-api`)
- Verificar conectividad a internet

### Error: "HTTP error! status: 500"
- Revisar logs del servidor web
- Verificar extensiones PHP (cURL, JSON)
- Comprobar permisos de archivo

### Error: "Invalid JSON input"
- Verificar que los datos del proyecto están completos
- Comprobar selección de al menos un artefacto
- Revisar consola del navegador para errores JavaScript

### Los artefactos no se visualizan correctamente
- Verificar que Claude API devolvió contenido válido
- Revisar formato esperado (MD/JSON/CSV)
- Comprobar funciones de visualización JavaScript

## Seguridad y Mejores Prácticas

### API Key Management
- La API key se envía solo durante la sesión
- No se almacena en localStorage o cookies
- Se valida formato antes de uso

### Validación de Entrada
- Todos los datos se validan en PHP
- Sanitización de contenido para prevenir XSS
- Manejo seguro de errores

### Limites de Uso
- Claude API tiene límites de rate limiting
- Considerar timeouts para requests largos
- Manejo graceful de errores de API

## Desarrollo Futuro

### Posibles Mejoras
1. **Cache de Resultados**: Evitar re-generación innecesaria
2. **Plantillas Personalizadas**: Prompts configurables por organización
3. **Exportación Masiva**: Descargar todos los artefactos como ZIP
4. **Integración con PM Tools**: Conectar con Jira, MS Project, etc.
5. **Colaboración**: Múltiples usuarios trabajando en mismo proyecto

### Métricas y Analytics
1. **Uso de Artefactos**: Cuáles se generan más frecuentemente
2. **Tiempo de Generación**: Optimización del proceso
3. **Calidad de Resultados**: Feedback de usuarios
4. **Casos de Uso**: Tipos de proyectos más comunes

## Soporte

Para reportar issues o sugerir mejoras, contactar al equipo de desarrollo o crear un issue en el repositorio del proyecto.