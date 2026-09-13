# Auditoría UI/UX · Umbral alpha.6

Fecha: 13 de septiembre de 2026.

## Dirección validada

La interfaz conserva la línea visual acordada: editorial, sobria, táctil, mobile-first y sin apariencia de dashboard SaaS. Se mantienen CSS Modules + tokens, Google Sans, superficies limpias, bordes discretos, radio moderado y ausencia de barras verticales decorativas.

La revisión se realizó sobre las vistas de curso/módulo mostradas en móvil y desktop y sobre los flujos de práctica, diagnóstico, simulacro, lecciones y navegación.

## Ajustes aplicados

### 1. Navegación móvil sin efecto glass

La barra inferior pasa a superficie sólida. Se elimina el `backdrop-filter` y la mezcla translúcida para respetar la regla de producto de evitar glassmorphism y mejorar previsibilidad de contraste.

### 2. Lectura de listas de lecciones en móvil estrecho

Por debajo de 480 px, la duración baja a una segunda línea dentro de la columna de contenido. Esto evita que títulos/subtítulos compitan horizontalmente con el tiempo en 320–390 px.

### 3. Opciones de respuesta más neutrales visualmente

Las filas de opciones usan el mismo tamaño de pista dentro de cada grupo. Además, A/B/C se asignan a partir del orden de presentación, no del identificador interno de la opción. Se reduce así el aprendizaje de patrones de posición/altura.

### 4. Feedback accesible

La corrección de `QuestionCard` se anuncia con `role="status"` y `aria-live="polite"`. El feedback sigue siendo visible y textual, no depende únicamente de color.

### 5. Secuencias con IDs accesibles robustos

`SequenceExercise` usa `useId()` para relacionar cada ejercicio con su encabezado, evitando colisiones o IDs derivados de títulos con signos/acentos.

### 6. Microinteracción táctil

En enlaces y botones se declara `touch-action: manipulation`, manteniendo objetivos táctiles de ~44 px y evitando latencias/gestos no deseados en navegadores móviles.

### 7. Textos secundarios de modos de práctica

Los subtítulos de tarjetas de práctica dejan de truncarse forzosamente en una sola línea y admiten hasta dos líneas. Se preserva información útil en pantallas pequeñas.

### 8. PWA y tipografía offline

Google Sans regular/italic se incluye explícitamente entre los assets de PWA y en `globPatterns` de Workbox para que el modo offline conserve la tipografía principal cuando ya fue instalada/cargada.

### 9. Recuperación ante errores de render

Se incorpora un Error Boundary global con acciones claras de recarga/inicio. El mensaje explica que el progreso local no se elimina por un fallo de render, sin borrar ni reinicializar estado.

## Decisiones que NO se cambiaron

- No se ensanchó artificialmente la columna de lectura de lecciones/módulos en desktop: el ancho contenido mejora legibilidad.
- No se agregaron gradientes, glass, sombras grandes, badges decorativos ni barras laterales de color.
- No se añadió una topbar permanente en móvil: la navegación inferior sigue siendo suficiente para los cuatro destinos principales.
- No se cambió el sistema claro/oscuro ni el accent de curso.
- No se convirtió la vista en una cuadrícula de KPIs o tarjetas anidadas.

## Pendientes recomendados para release

1. Ejecutar axe/Playwright con dependencias instaladas.
2. Probar 320, 360, 390, 430, 768, 1024 y 1440 px en navegador real.
3. Validar navegación completa solo con teclado.
4. Verificar PWA offline y actualización por prompt instalada desde HTTPS/Netlify.
5. Añadir E2E de simulacro, respaldo/importación y recuperación tras recarga.

## Hardening previo al primer despliegue

### Scroll y continuidad de navegación

React Router conserva por defecto la posición del documento en navegación cliente. Para una plataforma de estudio esto generaba una transición incorrecta: completar una lección desde el final podía abrir la siguiente lección también al final. Se añadió `RouteScrollToTop` y una utilidad común de scroll para que cada ruta nueva empiece arriba. Los flujos paginados que no cambian de URL —simulacro, diagnóstico y práctica adaptativa— aplican la misma regla al cambiar de pregunta o de fase.

### Contraste de acciones

Se auditó especialmente el tema oscuro. El azul `#82A7FF` con texto blanco tenía contraste aproximado de 2.35:1 y el teal `#6EC7C9` con blanco aproximadamente 1.97:1, insuficientes para texto normal. Se introducen tokens de contenido sobre color:

- claro: `--color-on-brand: #FFFFFF` y `--color-on-course-accent: #FFFFFF`;
- oscuro: ambos utilizan `#0D1015` sobre los fondos claros de marca/acento.

Los botones deshabilitados tampoco usan `opacity: .5`: una superficie y texto específicos mantienen el estado visualmente inactivo pero legible. El contraste aproximado de esos pares es 4.69:1 en claro y 6.44:1 en oscuro.

### PWA y Netlify

Antes del primer despliegue se reforzó la instalación/offline:

- manifest con `id`, `lang`, `dir`, categorías y propósitos de icono explícitos;
- icono Apple Touch 180×180 y metadatos standalone para iOS/iPadOS;
- `theme-color` dinámico de acuerdo con el tema resuelto de Umbral;
- Google Sans y Apple Touch Icon incluidos entre assets precacheados;
- `maximumFileSizeToCacheInBytes` elevado a 8 MiB para que un bundle grande de lecciones/preguntas no quede fuera del precache de Workbox;
- `sw.js` y `manifest.webmanifest` con política HTTP de actualización adecuada en Netlify;
- assets con hash siguen usando caché larga e inmutable;
- actualización del service worker permanece por prompt, sin recarga automática durante una evaluación.

### Landmarks y superficies

Se eliminan landmarks `<main>` anidados dentro del `<main>` del `AppShell`, manteniendo un único landmark principal. El encabezado móvil de lección pasa de superficie translúcida con blur a superficie sólida, coherente con la regla visual de Umbral de evitar glassmorphism.
