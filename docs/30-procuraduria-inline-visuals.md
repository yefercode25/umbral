# Integración contextual de gráficos de Procuraduría · noviembre de 2026

## Problema corregido
Los diagramas de Procuraduría se insertaban antes del cuerpo de la lección, dentro de desplegables, o se ofrecían únicamente como archivos SVG en otra pestaña. Eso separaba el apoyo visual de la explicación y obligaba a interrumpir la lectura.

## Experiencia corregida
- **Lección 1 (85 módulos):** mapa de conceptos visible de forma permanente después de la explicación y la tabla de las tres reglas, justo antes del microcaso que invita a aplicarlas.
- **Lección 2 (85 módulos):** ruta SVG visible en el mismo bloque del método operativo. No se duplica la cuadrícula HTML; los pasos textuales se conservan en una lista accesible a lectores de pantalla.
- **Lección 3 (85 módulos):** gráfico del escenario y distractores, después de la tabla de análisis avanzado y antes del cambio de premisa.

Los diagramas se muestran **en el flujo normal de lectura**, sin desplegables y sin colocarlos al comienzo de la lección. Pueden ampliarse pulsando directamente sobre la imagen. Conservan carga diferida para optimizar PWA y acceso sin conexión si ya fueron almacenados.

## Integridad
Esta intervención se aplica solo cuando `course.id === 'procuraduria-104-2026-3pu15'`. No cambia los 255 IDs de lección, los bancos de preguntas, el progreso ni las fuentes. Los diagramas SVG existentes permanecen sin modificaciones. Tampoco se cambia `package.json`, `pnpm-lock.yaml` o `netlify.toml`.

## Verificación
- Pruebas de posición para las tres lecciones de cada uno de los 85 módulos.
- GitHub Actions: TypeScript, ESLint, Vitest, 255 SVG y compilación PWA.
- Vista previa Netlify y comprobación de producción tras fusionar.
