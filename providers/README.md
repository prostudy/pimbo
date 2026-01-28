# Soporte Multi-Proveedor de IA

Este directorio contiene las configuraciones específicas para diferentes proveedores de IA del sistema de agentes PMBOK 8.

## Proveedores Soportados

### Claude (Anthropic)
- **Archivo**: `INSTRUCCION-INICIO-CLAUDE.md`
- **Fortalezas**: Documentación narrativa, análisis de contexto, justificaciones de negocio
- **Mejor para**: Actas de constitución, planes de comunicación, documentos extensos

### Gemini (Google)
- **Archivo**: `INSTRUCCION-INICIO-GEMINI.md`  
- **Fortalezas**: Datos estructurados, análisis cuantitativos, procesamiento multimodal
- **Mejor para**: Matrices RACI, registros de riesgos, cronogramas, análisis de valor ganado

## Archivos Compartidos (Enlaces Simbólicos)

Los siguientes archivos son compartidos entre todos los proveedores para evitar duplicación:

- `SKILL-SHARED.md` → `../SKILL.md`
- `AGENT-SHARED.md` → `../agent.md`
- `SKILLS-SHARED.md` → `../skills.md`
- `CONFIG-SHARED.md` → `../config-salidas.md`
- `SUBAGENTS-SHARED/` → `../subagents/`
- `REFERENCES-SHARED/` → `../references/`

## Cómo Usar

1. **Para Claude**: Usar `INSTRUCCION-INICIO-CLAUDE.md`
2. **Para Gemini**: Usar `INSTRUCCION-INICIO-GEMINI.md`
3. **Por defecto**: El enlace `../INSTRUCCION-INICIO-DEFAULT.md` apunta a Claude

## Estructura del Sistema

```
pmbok8-agents-system/
│
├── INSTRUCCION-INICIO-DEFAULT.md → providers/INSTRUCCION-INICIO-CLAUDE.md
├── providers/
│   ├── INSTRUCCION-INICIO-CLAUDE.md      # Específico para Claude
│   ├── INSTRUCCION-INICIO-GEMINI.md      # Específico para Gemini
│   ├── INSTRUCCION-INICIO-CLAUDE-ORIGINAL.md → ../INSTRUCCION-INICIO.md
│   └── [enlaces simbólicos a archivos compartidos]
└── [resto del sistema...]
```

## Ventajas de Esta Estructura

1. **Sin duplicación**: Los archivos comunes usan enlaces simbólicos
2. **Mantenimiento centralizado**: Cambios en archivos base se propagan automáticamente
3. **Personalización por proveedor**: Instrucciones optimizadas para cada IA
4. **Compatibilidad**: Mantiene funcionamiento original del sistema

## Notas Técnicas

- Los enlaces simbólicos funcionan en sistemas Unix/Linux/macOS
- Para Windows, se pueden usar Junction Points o copias manuales
- Los archivos base permanecen en el directorio raíz para compatibilidad