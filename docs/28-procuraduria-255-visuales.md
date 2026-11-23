# Ampliación visual específica · Procuraduría 104-2026 (3PU-15)

## Alcance y fuente
Esta entrega añade **255 esquemas SVG exclusivos de Procuraduría**, basados en `content/courses/procuraduria-104-2026-3pu15/blueprints.ts`: tres ayudas por módulo, 85 módulos y 17 unidades. La redacción base de reglas, pasos, escenarios y distractores procede del contenido publicado del curso; no introduce reglas normativas o plazos no verificados.

## Tres formas de visualizar cada módulo
1. **Lección de fundamentos:** mapa de tres reglas clave, con tarjetas legibles. Recurso opcional desplegable, inicialmente cerrado.
2. **Lección de aplicación:** ruta de los cuatro pasos particulares del módulo. La lección conserva la ruta HTML accesible y ofrece abrir el SVG ampliado, sin mostrar el contenido duplicado en dos bloques grandes.
3. **Lección avanzada:** escenario y dos atajos de razonamiento procedentes del blueprint; orienta la detección de trampas sin entregar la respuesta correcta. Recurso opcional desplegable.

Estos recursos se suman a las nueve guías temáticas generales existentes. La biblioteca del curso PGN ahora permite buscar los 85 módulos y abrir los 255 SVG desde una sola página. La biblioteca DIAN permanece sin cambios funcionales.

## Diseño
- SVG nativo, sin fuentes externas, scripts, imágenes embebidas ni dependencias.
- Colores por unidad; sin efectos decorativos que desplacen las lecciones.
- `<title>` y `<desc>` integrados para identificación accesible, con contenido textual principal conservado en HTML.
- Formato adaptable mediante `viewBox`; enlace para abrir imagen ampliada.
- No aparecen ilustraciones de gran tamaño automáticamente al ingresar en una lección.

## Calidad y despliegue
- `tests/content/procuraduria-module-visuals.test.ts`: cobertura de 255 rutas y exclusión de DIAN.
- `scripts/check-procuraduria-module-svgs.mjs`: 255 ficheros existentes, estructura básica SVG, identidad por módulo/lección, ausencia de elementos activos y no duplicación binaria.
- `.github/workflows/check.yml`: incorpora el verificador en el pipeline.
- Se conserva sin modificar `package.json`, `pnpm-lock.yaml` y `netlify.toml`; **no regenerar el lockfile de manera manual**.

## Límite pedagógico
Estos diagramas se basan en los materiales del curso y son complementarios; no sustituyen normas oficiales, análisis jurisprudencial ni revisión individual de los reactivos. Algunos procedimientos de la vida real tienen excepciones no representadas en una ruta de cuatro pasos.
