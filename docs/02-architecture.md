# Arquitectura técnica

## Stack objetivo
- React + TypeScript estricto
- Vite
- React Router
- CSS Modules + CSS nativo con design tokens globales; sin Tailwind
- Radix Primitives para comportamiento accesible
- Motion for React para microinteracciones y transiciones
- Zustand + persist para estado y progreso crítico en localStorage
- Zod para validar manifiestos, preguntas y estado rehidratado
- MDX para lecciones enriquecidas con componentes React
- vite-plugin-pwa + Workbox para instalación/offline/actualizaciones
- React Flow para flujos de procesos y árboles de decisión
- Dexie/IndexedDB solo para historial voluminoso, caché auxiliar o futuras descargas; no sustituye el progreso crítico en localStorage
- Vitest + React Testing Library
- Playwright para E2E, responsive y PWA
- axe-core/Playwright para pruebas de accesibilidad

## Por qué Vite y no un framework SSR
La V1 es una PWA personal/offline con contenido versionado y sin autenticación obligatoria. Vite reduce complejidad, genera un `dist` estático ideal para Netlify y deja abierta la incorporación posterior de Functions o un backend de sincronización.

## Despliegue Netlify
- build: `pnpm build`
- publish: `dist`
- regla SPA de fallback a `index.html`
- cabeceras de caché diferenciadas: HTML corto; assets con hash inmutables
- prompt de actualización de service worker, nunca recargar automáticamente durante una evaluación

## Capas
- `src/app`: bootstrap, router, providers
- `src/components/ui`: design system base
- `src/components/learning`: bloques pedagógicos reutilizables
- `src/features`: lógica por dominio
- `src/stores`: estado local versionado
- `content/courses`: material de cada curso, aislado de la plataforma
- `src/lib`: utilidades puras, motor de calificación y migraciones

## Regla de proyecto maestro
No se crean proyectos paralelos. Todo cambio futuro se aplica sobre esta misma raíz y los mismos archivos cuando corresponda.
