# Auditoría y ampliación del curso Procuraduría 104-2026 · 3PU-15
**Corte de revisión:** 22 de noviembre de 2026
**Versión del currículo:** 2026.11.22-beta.3
**Alcance:** mejorar transferencia, dificultad, ofimática transversal y experiencia de las lecciones; no modificar DIAN ni comprometer los datos históricos del estudiante

## 1. Evaluación del estado anterior
La beta.1 tiene una cobertura curricular amplia (17 unidades, 85 módulos, 255 lecciones) y 850 preguntas situacionales, pero la generación original de diez ítems por módulo contiene enunciados y esquemas de decisión repetitivos. Una respuesta correcta en un patrón simplificado no garantiza comprender plazos, competencia, validez de la prueba y el efecto de un hecho nuevo.

Además, el plan daba demasiado protagonismo al «refuerzo profesional de Ingeniería de Sistemas», que no constituye por sí mismo una prueba diferente: se estudian conocimientos comunes y específicos del empleo **de la Convocatoria 104-2026**, no una prueba especial creada por la carrera previa del aspirante. El alcance exacto de las pruebas será el que publiquen la convocatoria y su guía oficial correspondiente; no presuponer igualdad entre empleos diferentes.

## 2. Fuentes contrastadas
**Oficiales**:
- Resolución 076/2026, artículo 18: conocimientos del nivel profesional, eliminatoria con mínimo 65/100, peso 70 %; comportamentales 20 %; antecedentes 10 %. Artículos 19 y 20: núcleo general/específico y clasificación comportamental. https://apps.procuraduria.gov.co/normograma/compilacion/docs/resolucion_procuraduria_0076_2026.htm
- Resoluciones modificatorias 212/2026 y 243/2026: https://apps.procuraduria.gov.co/normograma/compilacion/docs/resolucion_procuraduria_0212_2026.htm y https://apps.procuraduria.gov.co/normograma/compilacion/docs/resolucion_procuraduria_0243_2026.htm
- Código General Disciplinario y su reforma: https://apps.procuraduria.gov.co/normograma/compilacion/docs/ley_1952_2019.htm y https://apps.procuraduria.gov.co/normograma/compilacion/docs/ley_2094_2021.htm
- Gestión documental y expediente: https://www.cancilleria.gov.co/normograma/compilacion/docs/acuerdo_archivo_0001_2024.htm
- SUBTOTALES de Excel (distinción de filas filtradas y ocultas manualmente): https://support.microsoft.com/es-es/excel/functions/subtotal-function
- Control de cambios de Word: https://support.microsoft.com/es-es/word/track-changes-and-view-add-or-edit-comments

**Experiencias de aspirantes (no oficiales)**: comentarios en Reddit (16–17 de noviembre de 2026) aconsejan partir de funciones y conocimientos del empleo y ajustar al publicarse los ejes temáticos. No aportan claves o formatos oficiales ni permiten afirmar que una pregunta exacta aparecerá.
https://www.reddit.com/r/Colombia/comments/1xxw6r7/concursos_de_m%C3%A9rito_colombia/

**Material comercial:** algunos portales muestran simulacros propios; las preguntas que anuncian no son el cuadernillo reservado del operador. Existe información contradictoria acerca del número de opciones y formato; por ello Umbral conserva tres alternativas de entrenamiento y **no lo presenta como confirmación del formato oficial**.

## 3. Cambios aplicados
- 170 nuevos ejercicios de transferencia, **dos por cada uno de los 85 módulos**; combinan información de expediente, cambios de premisa, competencia y soporte. IDs `pgn-mX-transfer-1/2` nuevos; **no se reescriben las respuestas históricas**.
- 48 preguntas escritas individualmente en 12 expedientes con cuatro decisiones distintas: peticiones mixtas y protección de datos, alteración de registros, maquinaria siniestrada, Excel e indicadores, versiones Word, prevención de riesgos locales, actos y notificaciones, pruebas contradictorias, ciberseguridad, cambios de software, comportamiento institucional y gestión territorial.
- Nuevo perfil de entrenamiento **Expedientes complejos · Procuraduría**, 20 preguntas por sesión, extraídas de escenarios integradores, dossiers y transferencia; la sesión funcional existente conserva cobertura general.
- Teoría aplicada de Word, Excel, indicadores, gestión documental y trazabilidad en 14 módulos del contenido común: comparación de fuentes, SUBTOTALES vs SUMA, claves de radicados, fechas, filtros, control de cambios y documentos electrónicos.
- Prioridad de los simulacros funcionales en el núcleo general/misional M0–M74. M75–M79 permanece condicional; M80–M84 se conserva como profundización optativa y en práctica transversal, sin sesgar el supuesto examen común hacia Ingeniería de Sistemas.
- Eliminada la **sección repetitiva de recuperación** que llevaba la etiqueta solicitada; se mantienen solo **Mis apuntes**, con la misma clave `umbral:lesson-notes:v1` y los identificadores previos, sin borrado de datos.
- Nuevas referencias oficiales 212/243 y tres fuentes técnicas (Microsoft Word, Excel y AGN).

## 4. Inventario
| Concepto | Antes | Ahora |
|---|---:|---:|
| Unidades / módulos / lecciones | 17 / 85 / 255 | 17 / 85 / 255 |
| Preguntas históricas conservadas | 850 | 850 |
| Situacionales de la beta anterior | 850 | 850 |
| Casos de transferencia por módulo | 0 | 170 |
| Preguntas de expedientes de alta complejidad | 0 | 48 |
| Casos integradores previos | 30 | 30 |
| **Preguntas del banco evaluable** | **880** | **1098** |
| Registros de preguntas totales | 1730 | 1948 |
| Fuentes registradas | 37 | 42 |

Los 510 checkpoints de lección siguen excluidos de simulacros. No se eliminan respuestas previas: cualquier cambio en el enunciado se introduce como un ID nuevo.

## 5. Límites y trabajo pendiente
Esta entrega corrige el sesgo de práctica y añade **218 escenarios nuevos**, pero no convierte automáticamente los 850 ítems templados anteriores en preguntas editoriales individuales. Los reactivos de alta complejidad dependen de la coherencia entre situación, norma vigente, etapa y opciones: se recomienda seguir auditando los módulos de mayor riesgo, identificando posibles claves ambiguas antes de dar por definitivo el curso.

Hasta que la entidad publique los ejes y orientaciones particulares del empleo, ninguna distribución por módulos, número de preguntas, ponderación interna ni formato de tres alternativas debe atribuirse al operador del concurso.

## 6. Criterios de aceptación automatizada
- TypeScript, ESLint, todas las pruebas existentes, prueba nueva de 170+48 y compilación PWA.
- Integridad de 85 módulos, 255 lecciones, 510 checkpoints, 1948 registros y 42 fuentes.
- No repetir IDs entre preguntas históricas y nuevas; al menos dos preguntas de transferencia para cada módulo.
- La sesión «Expedientes» escoge solo preguntas nuevas o integradoras.
- Las nuevas situaciones citan fuentes existentes y mantienen tres opciones con clave y explicación.
- DIAN conserva su banco y selector original; notas personales siguen siendo legibles.
- No modificar `package.json`, `pnpm-lock.yaml` ni `netlify.toml`.
