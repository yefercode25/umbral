# Rediseño de los diagramas SVG de Procuraduría · 22/11/2026

## Objetivo

Corregir la apariencia de los esquemas de Procuraduría 104-2026 para que acompañen visualmente las lecciones de Umbral sin introducir láminas externas con títulos gigantes, pies decorativos o fondos claros incompatibles con el tema oscuro.

## Alcance

- **255 SVG de lecciones:** 85 diagramas de conceptos (lección 1), 85 secuencias de aplicación (lección 2) y 85 árboles de escenarios y distractores (lección 3), a partir de `blueprints.ts`.
- **9 SVG generales:** reformulados como esquemas mínimos sin textos ornamentales.
- **Estilo:** paleta oscura de la aplicación, verde acento, paneles compactos, bordes discretos y tipografía Google Sans con fallback.
- **Accesibilidad:** los archivos mantienen `title` y `desc` **no visibles**, para lectores de pantalla, aunque se eliminaron sus encabezados y pies visibles.
- **Interfaz:** el contenedor del SVG ya no dibuja un segundo marco dentro de la tarjeta de Umbral. Permanecen los gráficos opcionales, cerrados inicialmente, conforme al PR de simplificación.
- **Contenido:** no se reescriben fuentes, respuestas ni las lecciones. Los gráficos son esquemas didácticos basados en las reglas, pasos y distractores existentes; no sustituyen la norma vigente.

## Reproducibilidad y despliegue

El generador es `scripts/regenerate-procuraduria-svgs.mjs`. Se ejecuta con:

```sh
node scripts/regenerate-procuraduria-svgs.mjs
node scripts/check-procuraduria-module-svgs.mjs
```

El workflow del PR ejecuta el generador, exige un `git diff` limpio para todos los SVG, valida la estructura y unicidad de los 255 diagramas de lección y ejecuta TypeScript, ESLint, Vitest y compilación PWA. No se cambian `package.json`, `pnpm-lock.yaml` ni `netlify.toml`.

## Norma de colaboración para este proyecto

Las modificaciones del proyecto Umbral solicitadas en este chat deben trabajarse **directamente sobre el repositorio `yefercode25/umbral`**, en ramas nuevas basadas en el `main` más reciente, con PR, controles de CI y verificación de Netlify. No entregar ZIP como sustituto de la integración solicitada. Mantener intacto el historial de respuestas, los IDs de contenido y la configuración del gestor de paquetes.
