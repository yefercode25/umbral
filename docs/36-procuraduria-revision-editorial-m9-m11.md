# Auditoría editorial de Procuraduría · módulos M9, M10 y M11
**Fecha:** 23 de noviembre de 2026 · **Versión:** 2026.11.23-beta.8

## Objetivo y resultado
Cuarto lote de revisión de contenido, de tres módulos por vez, a partir de los blueprints reales de `M9–M11`, las tres lecciones de cada módulo y las tres preguntas existentes que se utilizan en el cierre. El contenido introductorio era válido, pero no ofrecía suficientes criterios para decidir asuntos territoriales, funciones misionales de PGN y reparto entre sus dependencias. La mejora se enfoca en aplicar reglas a expedientes con novedades, no en añadir cantidad de ítems.

## M9 · Organización territorial
**Punto detectado:** la autonomía y los niveles territoriales estaban explicados de forma general, pero una pregunta sobre un caso en dos municipios necesitaba distinguir primero sujeto, deber, materia y competencia de PGN, no elegir la oficina geográficamente más cercana.
**Ajustes:** microcomparación de los arts. 1 y 286–288 constitucionales; entidad territorial, autonomía no soberana, concurrencia, coordinación y subsidiariedad en la Ley 1454 de 2011. Ejemplo de convenio de dotación de salud ejecutado entre departamento y dos municipios. El cierre evalúa obligaciones de cada nivel, actas de entrega, radicación y novedades documentales que alteran supuestos de reparto.

## M10 · Ministerio Público y Procuraduría
**Punto detectado:** la descripción constitucional era correcta, pero faltaba mostrar qué actuación preventiva puede adelantarse sin un fallo disciplinario y qué distingue la intervención de la sanción.
**Ajustes:** comparación entre vigilancia preventiva, intervención ante autoridades y disciplina, sus fines y los límites de competencia. Microcaso de servicio de agua con afectación al hospital, cronograma sin ejecutar y posterior avance parcial. El cierre distingue vigilancia de riesgo, noticia disciplinaria e intervención en un proceso; no presupone culpabilidad a partir de una queja.

## M11 · Estructura de la PGN
**Punto detectado:** nombres de dependencias centrales y territoriales no bastan para asignar asuntos, especialmente cuando cambian sujeto, fase o conexidad.
**Ajustes:** matriz entre oficinas centrales y regionales, distritales y provinciales; instrucción frente a juzgamiento; competencias funcionales, subjetivas y territoriales; eventuales reglas de conexidad y competencia preferente. Un expediente recibido por una provincial contiene actuaciones de otros despachos y hechos de posibles competencias regionales: la decisión exige comprobar la norma y el reparto vigente, no asumir por proximidad ni por el nombre del cargo 3PU-15.

## Alcance y garantía de integridad
- **9 lecciones reforzadas**, cada una con una comparación contextual y, donde ayuda, un caso o advertencia distinta.
- **9 preguntas existentes reescritas**, `situational-1` y `transfer-1/2` de M9, M10 y M11, que constituyen la evaluación de cierre.
- **0 preguntas nuevas**. Permanecen 85 módulos, 255 lecciones, 1948 registros de preguntas y 42 fuentes oficiales/técnicas registradas.
- ID y opción correcta de los nueve ítems conservados; las respuestas y el progreso anteriores permanecen enlazados al mismo registro.
- Sin cambios en contenido M0–M8, M12–M84, DIAN, SVG, `package.json`, `pnpm-lock.yaml` o `netlify.toml`.
- Contenido para aprendizaje independiente, no preguntas ni distribución temática confirmadas por el operador del concurso.
- La prueba `tests/content/procuraduria-auditoria-m9-m11.test.ts` valida cantidad, citas internas, nueve aportes pedagógicos, tres cierres, claves de respuesta y no regresión de módulos anteriores.

## Fuentes normativas verificadas en la revisión
- **Constitución Política de Colombia**, arts. 1, 113, 118, 277 y 286–288: https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4125
- **Ley 1454 de 2011**, ordenamiento territorial y principios de articulación: https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=43210
- **Decreto Ley 262 de 2000**, funciones y competencias de Procuraduría con modificaciones compiladas: https://apps.procuraduria.gov.co/normograma/compilacion/docs/decreto_0262_2000.htm
- **Decreto 1851 de 2021**, modificaciones a estructura, separación entre instrucción y juzgamiento, factores de competencia y reglas específicas de conexidad: https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=175150
- **Guía de función preventiva de la PGN**: https://apps.procuraduria.gov.co/gp/gp/la_funcion_preventiva.html
- **Manual específico y convocatoria 104-2026 v4**, incluidos en las fuentes internas del curso.

## Próximo grupo
M12, M13 y M14. No se considera completada la auditoría de los módulos restantes.
