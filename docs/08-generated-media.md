# Sistema visual generado · Umbral alpha.6

Fecha de integración: 13 de septiembre de 2026.

## Objetivo

Integrar la nueva identidad visual y las piezas editoriales generadas para Umbral sin convertir ilustraciones promocionales en una segunda fuente de verdad. El contenido, las métricas, el progreso y las reglas del curso continúan saliendo del modelo de datos real de la aplicación.

## Assets de marca

- `public/media/brand/mark-gradient.webp`: emblema transparente usado por `BrandMark` en navegación.
- `public/media/brand/wordmark.webp`: lockup gráfico completo, utilizado en Ajustes como referencia de identidad.
- `public/media/brand/app-teal.webp`: variante turquesa.
- `public/media/brand/app-light.webp`: variante clara.
- `public/media/brand/app-dark.webp`: variante oscura.

## Assets editoriales

- `public/media/editorial/home-platform.webp`: Inicio. Se recorta hacia el área de producto para que el texto de la interfaz real siga siendo el protagonista.
- `public/media/editorial/course-dian-2676.webp`: portada visual del curso DIAN 2676.
- `public/media/editorial/practice-adaptive.webp`: ambientación de la entrada a práctica.
- `public/media/editorial/progress-overview.webp`: ambientación de Progreso. Se muestra deliberadamente atenuada porque contiene cifras y etiquetas ilustrativas que no representan el estado del usuario.
- `public/media/editorial/pwa-everywhere.webp`: panel PWA en Ajustes. La copia real de instalación/offline se renderiza como HTML por encima de la imagen.

## Iconos PWA

La identidad generada alimenta ahora:

- `public/icons/icon-192.png`
- `public/icons/icon-512.png`
- `public/icons/icon-maskable-512.png`
- `public/icons/apple-touch-icon.png`
- `public/icons/favicon-light.png`
- `public/icons/favicon-dark.png`
- `public/icons/brand-mark-256.png`

`vite.config.ts` mantiene los iconos principales y favicons dentro de `includeAssets`; los WebP editoriales quedan cubiertos por `globPatterns` de Workbox.

## Regla editorial crítica

Las imágenes fueron generadas como piezas de comunicación y pueden contener interfaces, números o etiquetas ilustrativas. Por ello:

1. Nunca se extraen de la imagen preguntas, porcentajes, módulos, estados o afirmaciones curriculares.
2. Las piezas con datos ilustrativos usan `alt=""` / `aria-hidden="true"` cuando son decorativas.
3. Progreso, práctica y curso muestran siempre por HTML las cifras y mensajes reales calculados desde el estado de Umbral.
4. Si una futura imagen contradice el curso o promete capacidades inexistentes, se recorta, atenúa o se reemplaza antes de usarla como pieza informativa.
5. La marca puede reutilizarse, pero no debe añadirse como decoración repetitiva dentro de cada tarjeta.

## Rendimiento

Los originales PNG no se cargan en runtime. Se generaron derivados WebP optimizados para reducir peso y el coste del precache. Los gráficos de contenido no esencial utilizan `loading="lazy"`; el hero principal de Inicio se carga de forma prioritaria por formar parte de la primera pantalla.
