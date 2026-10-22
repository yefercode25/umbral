# Umbral DIAN · Biblioteca, indicadores y análisis formativo

Fecha: 21 de octubre de 2026. Base: única copia maestra `umbral-pwa-master`.

## Alcance implementado

- En navegación inferior y escritorio, se sustituye **Cursos** por **Biblioteca** (`/library`). El cambio de curso sigue en `CourseSwitcher` y en `/courses`; no se destruyen rutas previas ni el avance de Procuraduría.
- Biblioteca DIAN: 20 fichas didácticas de normas/documentos (descripción, relevancia, puntos a estudiar, ejemplo hipotético, errores frecuentes, condición de vigencia, enlace a fuente), estructura institucional jerarquizada de referencia, tres mapas de procesos y once términos de glosario. La categoría «Complementario» evita equiparar automáticamente la Ley 2586/2026 con un eje evaluable del empleo CT-CR-3007.
- `/library/indicators`: matriz **vacía de indicadores oficiales** al principio. El estudiante registra denominaciones literales de los ejes que consulte en el portal oficial y relaciona manualmente los módulos publicados del curso. Las cifras muestran cantidad de lecciones y preguntas relacionadas, completadas y practicadas, sin declarar cobertura oficial completa. Registros locales en `localStorage` bajo `umbral-dian-official-indicators-v1`, incluidos en nuevas exportaciones de respaldo Umbral (respaldos anteriores siguen siendo compatibles): no solicitar datos personales, ni número de inscripción ni contraseña.
- Panel de progreso DIAN: intentos y aciertos, preguntas distintas, repeticiones, detalle por módulo y dificultad editorial, intervalo estadístico Wilson de intentos (advertencias de dependencia de observaciones), y serie de resúmenes de próximos simulacros. Se guardan hasta 60 sesiones por curso en campo opcional `practiceSessions` (compatible con esquema antiguo; sin borrar registros). El control de entrega impide duplicación por doble clic.
- Test de integridad de biblioteca y tests del cálculo Wilson añadidos.

## Qué NO es oficial

1. Los indicadores **no están transcritos en la GOA**. Se publican por empleo en el sitio del operador. Sin la consulta personal a ese sitio, ninguna lista temática inferida se declara «indicador oficial». El enlace impreso en la GOA termina en `...2667/` aunque el proceso es 2676; verificar antes de usar.
2. La psicometría real de CNSC aplica análisis de ítems y procedimientos estadísticos reservados (GOA 4.7). El intervalo Wilson aquí es puramente **descriptivo sobre intentos registrados**, muchos repetidos y no independientes. No constituye calificación oficial, probabilidad de superar el examen, ni modelo IRT calibrado.
3. La dificultad (1–5) es asignación editorial de Umbral, no calibración de parámetros del examen. No hubo datos de una muestra de aspirantes para calibrar ítems. El mínimo oficial 70,00 funcional se aplica a escala oficial, NO al porcentaje bruto de Umbral.
4. El organigrama está simplificado desde Decreto 1742/2020. Consultar resoluciones de modificación y la página de organigrama para vigencia exacta de dependencias.
5. La biblioteca es **orientación de estudio, no asesoría tributaria**: verificar texto original, alcance, vigencia y aplicación por fecha de los hechos en cada caso.

## Fuentes prioritarias

- CNSC, [GOA DIAN 2676, actualización 19-10-2026](https://www.cnsc.gov.co/sites/default/files/2026-10/dian_2676_guia_orientacion_aspirante_19102026.pdf), §§ 4.3–4.7. Corte de expedición **hasta** 19 de junio 2026; estructura PJS y Likert, calificación y métodos psicométricos.
- CNSC, [Proceso DIAN 2676 / Acuerdo 21 de 2025](https://www.cnsc.gov.co/convocatorias/dian-2676).
- DIAN, [Decreto 1742 de 2020](https://normograma.dian.gov.co/dian/compilacion/docs/decreto_1742_2020.htm), arts. 4–7, 13.
- DIAN, [organigrama](https://www.dian.gov.co/dian/entidad/Paginas/Organigrama.aspx) y resoluciones.
- DIAN, [Ley 2586 de 2026](https://normograma.dian.gov.co/dian/compilacion/docs/ley_2586_2026.htm), arts. 1 y 114 y disposiciones transitorias.
- Resto de documentos: enlaces individuales en cada ficha y fuentes del curso (`/courses/dian-2676-gestor-ii/sources`).

## Verificación antes de fusionar

Ejecutar `npm install` (o `pnpm install`), `npm run typecheck`, `npm run test`, `npm run build` y pruebas manuales en tema claro/oscuro y móvil. Comprobar navegación de ambos cursos y continuidad del progreso anterior. El entorno de preparación puede carecer de conexión a npm; en ese caso indicar la validación pendiente expresamente.

## Verificaciones en entorno de preparación

- 119 archivos TS/TSX (excluyendo declaraciones `*.d.ts`) analizados sintácticamente sin errores de transpile.
- 50 CSS interpretados con PostCSS sin errores de sintaxis; referencias de clases CSS de las páginas nuevas contrastadas.
- 0 importaciones relativas sin resolver.
- Integridad programática de catálogo: 20 fichas, 20 referencias disponibles, 6 áreas provisionales cuyos módulos existen, curso DIAN con 310 lecciones, 765 preguntas, 103 fuentes; Wilson probado en extremos.
- TypeScript estricto de los tres archivos puros de datos/analítica pasó con `tsc --strict --noEmit`.
- `npm` sin acceso a registry (`EAI_AGAIN`): no se pudo ejecutar compilación global, `vitest`, pruebas E2E ni inspección visual en navegador; validaciones pendientes antes de fusionar a producción.

## Compatibilidad y aislamiento

- La ruta previa `/courses` y todos sus detalles permanecen.
- Las sesiones nuevas se registran únicamente para DIAN, sin cambio de comportamiento del simulador Procuraduría.
- `PracticeSession` es campo opcional de progreso; las estadísticas previas se siguen consultando en `questionStats`.
- La copia JSON exportada incluye los indicadores de DIAN (opcional para respaldos anteriores).
