# Verificación de navegador de Procuraduría

Esta comprobación utiliza Chromium sobre el artefacto de producción de Vite, no el servidor de desarrollo. Ejecutar localmente con Node 22 y dependencias instaladas:

```sh
npm run build
npx playwright install chromium
npm run e2e -- --config=playwright.pgn.config.mjs
```

Verifica los ocho perfiles, selección mediante teclado, navegación y conservación de respuestas/marcadores, ausencia de corrección anticipada, entrega de 10 preguntas y registro único de sesión, persistencia tras recargar, aislamiento del progreso DIAN y disponibilidad offline una vez instalado el service worker. El contexto de prueba es nuevo y no utiliza datos de estudiantes. La prueba no certifica todos los navegadores ni dispositivos ni la totalidad de la experiencia PWA.
