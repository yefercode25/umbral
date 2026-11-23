# Auditoría editorial Procuraduría · M15, M16 y M17
**Fecha:** 23 de noviembre de 2026 · **Versión:** 2026.11.23-beta.10

## Alcance
Sexto lote de tres módulos. Revisión de los blueprints, sus nueve lecciones y sus tres preguntas de cierre por módulo. Se mejora la correspondencia entre lo estudiado y lo evaluado, **sin añadir preguntas, lecciones ni módulos**.

### M15 · Acto administrativo
**Hallazgo:** la diferencia entre acto de trámite, decisión definitiva, eficacia y ejecutoria se enunciaba, pero faltaba un ejemplo del efecto de la citación, el correo interno y la notificación real sobre el cómputo de recursos.
**Mejora:** clasificación de contenido y efectos (CPACA, art. 43), competencia y motivación; publicidad o notificación según la clase de acto, formas y constancias (arts. 65 y 67–69), recursos aplicables (art. 74), firmeza (art. 87) y ejecución (art. 89). Caso de resolución firmada el lunes, citada, y notificada después. Tres cierres existentes ahora exigen distinguir firma, citación, constancia de notificación, firmeza y consecuencias sin declarar nulidad automática.

### M16 · CPACA desde cero
**Hallazgo:** la frase «aplicar primero la ley especial» era correcta, pero insuficiente para resolver errores reales de clasificación, plazos y recursos.
**Mejora:** artículo 34 de Ley 1437 y su relación con un procedimiento especial (CGD). Diferenciación de etapa disciplinaria frente a petición autónoma de copias, con ejemplos de hojas Excel que mezclan términos. No se promedian plazos, no se desplaza la regulación especial por escoger un plazo más corto y no se declara automáticamente nulidad por cualquier defecto. Tres cierres existentes muestran el régimen correcto y qué cambia cuando una actuación inicialmente clasificada como disciplinaria era en realidad una solicitud de documentos.

### M17 · Derecho de petición
**Hallazgo:** el módulo mencionaba modalidades, reservas y términos, pero faltaba enseñar su cómputo y diferencias en una petición con varias pretensiones y una autoridad incompetente.
**Mejora:** Ley 1755 de 2015, art. 14: regla general de 15 días, documentos e información 10 y consultas 30, sin desconocer disposiciones especiales; art. 21: aviso y traslado cuando no hay competencia (en petición escrita, informar dentro de cinco días y contar el término desde recepción por autoridad competente). Incluye análisis de acceso parcial, datos protegidos, respuesta de fondo y prueba de comunicación. Caso de Excel que marca «respondido» aunque la contestación sigue en borradores. Los tres cierres existentes exigen clasificar componentes, verificar traslado y corregir el estado documental.

## Inventario y protección
- **9 lecciones reforzadas** con bloques propios situados en el momento de enseñanza.
- **9 preguntas existentes reescritas**: una `situational-1` y dos `transfer-1/2` por módulo, las mismas usadas en el cierre integrado.
- **0 ítems nuevos**. Permanecen 85 módulos, 255 lecciones, 1948 registros de preguntas, 42 fuentes y las 264 ilustraciones SVG.
- Se conservan IDs y claves correctas de los ítems y el historial enlazado, sin modificar el curso DIAN.
- No se tocan `package.json`, `pnpm-lock.yaml`, `netlify.toml`, ni estructura PWA o almacenamiento.
- La prueba `tests/content/procuraduria-auditoria-m15-m17.test.ts` valida fuentes, contenidos de las nueve lecciones, cierres, claves, inventario y no regresión de M0–M14.

## Fuentes oficiales contrastadas
- [Ley 1437 de 2011, CPACA, compilación de Función Pública](https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=41249): arts. 34, 43, 65, 67–69, 74, 87, 89.
- [Ley 1755 de 2015, derecho fundamental de petición](https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=65334): arts. 14 y 21.
- [Ley 1952 de 2019, Código General Disciplinario](https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=90324), reformada por Ley 2094 de 2021.
- Ley 1712 de 2014 sobre acceso a información pública y Ley 1581 de 2012 sobre protección de datos, ya referenciadas en el catálogo del curso.

La explicación representa reglas generales y no sustituye verificar excepciones o regímenes especiales de la actuación concreta. No se atribuye a la entidad operadora una cantidad de preguntas, ponderación por módulo ni formulación exacta del examen.

**Próximo grupo a revisar:** M18, M19 y M20.
