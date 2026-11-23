# Auditoría editorial de Procuraduría · módulos M0, M1 y M2
**Fecha:** 23 de noviembre de 2026 · **Versión:** 2026.11.23-beta.5

## Veredicto
El recorrido de las tres lecciones por módulo tiene una estructura útil, pero no equivalía a una preparación plenamente aplicada: M0 y M1 ofrecían buenos listados introductorios sin suficientes contrastes operativos, mientras que M2 se apoyaba casi por completo en textos generales reutilizados. Los casos automatizados del inicio también eran excesivamente genéricos y podían evaluar el método «competencia, etapa, evidencia» sin comprobar lo específico que se acababa de aprender.

No se justifica aumentar el número de preguntas. La revisión consiste en explicar mejor, dar ejemplos concretos y **redactar de nuevo nueve preguntas situacionales existentes**, conservando sus IDs y la posición de la opción correcta, así como la selección de los tres cierres de módulo.

## M0 · Tu empleo y la Convocatoria 104-2026
**Bien:** 11 funciones del cargo mapeadas con conocimientos de estudio; evita convertir la profesión de origen en un examen exclusivo de TI.
**Vacíos corregidos:**
- Diferencia convocatoria específica vigente (104-2026, versión 4) y cadena de resoluciones 076, 108, 133, 212 y 243 del plan pedagógico de Umbral.
- Aclara límites entre analizar información, apoyar instrucción, redactar informes y adoptar decisiones reservadas a autoridades competentes.
- Reorienta el contexto del examen desde «detectar autor de un log» hacia funciones concretas del Profesional Universitario de perfil multidisciplinario.
- Tres preguntas de cierre existentes: análisis del alcance del cargo, una decisión situacional en instrucción y contraste de versiones de convocatoria.

## M1 · Derecho para quien empieza desde cero
**Bien:** glosario de diez conceptos y secuencia de identificación del problema.
**Vacíos corregidos:**
- Contrasta actuación/acto, competencia/conocimiento, comunicación/notificación, afirmación/prueba y fecha/término.
- Incluye situaciones en las que una norma es verdadera, pero la autoridad receptora no puede adoptar una decisión sobre todo el asunto.
- Los tres casos de cierre existentes trabajan conceptos jurídicos aplicados, competencias parciales y efectos procesales, en lugar de una plantilla de «la opción más rápida».

## M2 · Método de estudio jurídico
**Bien:** recuperación activa y registro de errores en vez de releer artículos.
**Vacíos corregidos:**
- Introduce ejemplo verificado a partir del **artículo 208** del Código General Disciplinario, modificado por la Ley 2094 de 2021: la indagación previa depende de la duda sobre la identificación del posible autor; tiene un término general de seis meses, con una extensión especial posible para infracciones de derechos humanos o derecho internacional humanitario.
- Demuestra por qué una cifra memorizada no resuelve dos expedientes con hechos diferentes y cómo escribir una regla condicional.
- Enseña a registrar la causa concreta del error: hecho omitido, norma, distractor y transferencia.
- Los tres casos de cierre existentes distinguen diagnóstico del error, aplicación de la regla y transferencia cuando cambia la premisa.

## Criterios de diseño editorial
- No convertir cualquier diferencia de criterio en una presunta irregularidad penal o disciplinaria sin prueba.
- No atribuir a la convocatoria una distribución oficial de preguntas por temas ni por profesión.
- Mantener los diagramas y bloques de lectura en su posición actual, sin añadir banners.
- Añadir solo bloques que preparan una comprobación que ya está incluida.
- Preservar los identificadores históricos `pgn-mX-situational-1` y `pgn-mX-transfer-1/2`, sin cambiar el valor de `correctOptionId`; no agregar preguntas ni lecciones.
- Mantener `package.json`, `pnpm-lock.yaml`, `netlify.toml`, progresos y curso DIAN intactos.

## Fuentes contrastadas
1. Resolución 076 de 2026, modificada por las resoluciones 108, 133, 212 y 243: https://apps.procuraduria.gov.co/normograma/compilacion/docs/resolucion_procuraduria_0076_2026.htm
2. Modificaciones de formatos (incluye la convocatoria 104): https://apps.procuraduria.gov.co/normograma/compilacion/docs/resolucion_procuraduria_0243_2026.htm
3. Cambios y redistribución de vacantes: https://apps.procuraduria.gov.co/normograma/compilacion/docs/resolucion_procuraduria_0212_2026.htm
4. Código General Disciplinario, art. 208: https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=90324
5. Reforma, Ley 2094 de 2021: https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=165113
6. Documento base específico del curso: Convocatoria 104-2026, versión 4, disponible según las publicaciones del portal oficial del concurso.

## Verificación
`tests/content/procuraduria-foundations-m0-m2.test.ts` comprueba que nueve lecciones contienen apoyos propios, que los tres cierres conservan número y vinculación temática, que fuentes adicionales están enlazadas y que los IDs/opciones correctas no cambian. El resto del curso debe conservar sus pruebas de integridad habituales.

**Próximo lote:** M3–M5. No se declara revisado el contenido de los otros 82 módulos.
