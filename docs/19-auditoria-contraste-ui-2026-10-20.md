# Auditoría visual de contraste · Umbral PWA · 20 de octubre de 2026

## Alcance

Intervención incremental **sobre la única copia maestra**, sin modificar el modelo de datos, contenido pedagógico, motores de práctica ni la configuración de la PWA. Revisión de hojas CSS Modules y paletas en temas claro y oscuro. Se conserva la identidad redondeada y táctil inspirada en Duolingo sin integrar ninguna mecánica de vidas.

## Problema reportado: botón «Completar y continuar»

El contenedor de cierre de lección tenía reglas `.finish span` con alcance excesivo. La regla original fija 11 px y inicialmente una opacidad de 0,66; una regla posterior restablecía la opacidad a 1 pero también imponía `color:var(--color-text-muted)`. Como el botón incluye un `span`, su texto heredaba **tamaño de 11 px y color de texto secundario** sobre el fondo verde brillante del modo oscuro. Se cambió a `.finish > div > span` y se asegura la herencia semántica del rótulo del botón.

En el tema oscuro, el texto correcto `#102908` sobre el verde `#83D83F` alcanza **8,83:1**; el texto casi blanco `#F6F5F1` sobre el mismo fondo alcanzaría solo **1,62:1**.

## Ajustes

1. **Tokens y estados:** contraste de textos terciarios, ayudas, botones deshabilitados, anillo de enfoque, mensajes correctos, de atención y de error. En tema claro, el texto terciario cambió a `#626A75`.
2. **Acento de curso:** se añade `--course-accent-ink`, mezcla del color del curso (35 %) y el texto del tema (65 %), para mantener identificación visual y contraste sobre superficies claras/oscuras. Los fondos, indicadores y bordes conservan `--course-accent`.
3. **Nodos de ruta:** iconografía oscura sobre verde brillante y dorado; los nodos pendientes se basan en tokens de deshabilitado adaptables al tema, en lugar de gris fijo o `opacity` aplicada al bloque completo.
4. **Lecciones y simuladores:** botones de acción, casillas marcadas, ayudas, encabezados, estados futuros y controles inactivos mantienen color legible. No se alteran eventos ni cálculos.
5. **Inicio y navegación:** se evita que el enlace de comienzo tome un verde oscuro sobre superficie oscura; los enlaces y rótulos sobre verde suave usan `--color-brand-strong`.

## Verificación estática

Comando disponible:

```powershell
pnpm run check:contrast
```

La herramienta calcula ratios según WCAG para ambos temas, con **46 verificaciones de color** (umbral AA 4,5:1 para texto normal; 3:1 para iconografía clave) y **tres controles estructurales** para el pie de lección y la tinta adaptable. Las dos tintas de curso consideradas son DIAN `#167C80` y Procuraduría `#5F9E80`; se prueban además los acentos azul, oro y morado. Todos pasaron.

Se realizó también un análisis estático mediante `tinycss2` de todas las hojas CSS de `src`: **0 errores de análisis** y **0 pares explícitos color/fondo por debajo de 4,5:1** en reglas con ambos colores expresados directamente. Esto no equivale a asegurar WCAG AA para todos los estados calculados por el navegador.

## Pruebas manuales pendientes antes de producción

- Con `pnpm run dev`, inspeccionar inicio, selector de curso, ruta, módulo, lección y «Completar y continuar» en ambos temas.
- Completar una práctica, seleccionar respuestas y observar feedback correcto/incorrecto, foco por teclado, deshabilitados y resultados de simulacro.
- Validar escritorio, móvil estrecho y tablet; comprobar escalado de texto 200 %, zoom y modo alto contraste del sistema.
- Contrastar banners, imágenes editoriales y superposiciones con contenido real; revisar HTML renderizado con axe/Lighthouse para WCAG 2.2 AA.
- Ejecutar `pnpm run typecheck`, `pnpm run test` y `pnpm run build` en un entorno con dependencias instaladas.

**Límite de la auditoría:** no se ejecutaron compilación Vite ni pruebas E2E en navegador porque la copia de trabajo no contiene `node_modules`. Las verificaciones efectuadas son estáticas y de cálculo de contraste. La calificación de accesibilidad completa requiere navegador.
