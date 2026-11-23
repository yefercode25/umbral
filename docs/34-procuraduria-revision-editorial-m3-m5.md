# Auditoría editorial Procuraduría · módulos M3, M4 y M5
**Fecha:** 23 de noviembre de 2026 · **Versión:** 2026.11.23-beta.6

## Objetivo y criterio editorial
Continuar la revisión de Procuraduría 104-2026 por grupos de tres módulos, como se acordó, comparando la teoría y sus ejemplos con las preguntas que se utilizan para completar el módulo. Se corrige la calidad de contenidos y preguntas existentes, **sin aumentar el banco**.

## M3 · Estrategia para la prueba de conocimientos
**Estado previo:** introduce diagnóstico y reasignación de tiempo, pero podía permitir confundir el mínimo eliminatorio (65/100) con el peso del 70 % de conocimientos en el concurso. Las preguntas de transferencia se resolvían con indicaciones genéricas de «verificar etapa».

**Cambios:** explicación comparativa de puntuación mínima, ponderación, pruebas comportamentales y antecedentes, con separación explícita entre requisitos oficiales y estrategia pedagógica. Ejemplo de 17/20 en Constitución y 9/20 en prueba disciplinaria, con propuesta de sesiones según causa del error. En la parte avanzada, distingue fallos de conocimiento, supuesto, lectura, presión y familiaridad por repetición. Tres casos de cierre reescritos para evaluar esos conceptos.

## M4 · Tu profesión dentro del expediente
**Estado previo:** mensaje adecuado sobre no confundir log con autoría, pero insuficiente para producir un informe profesional reproducible o explicar cómo un hecho nuevo altera la conclusión técnica.

**Cambios:** separación de dato, hecho técnico, hipótesis personal y decisión disciplinaria; estructura de informe con objeto, procedencia, extracción, integridad, zona horaria, metodología, límites y corroboración. Ejemplo de cuenta compartida y tarea automática. Casos de cierre distinguen identificación técnica de la autorización, la culpabilidad y el valor limitado de una coincidencia de hash.

## M5 · Constitución y Estado Social de Derecho
**Estado previo:** correcta regla general de que celeridad no desplaza defensa; faltaban anclajes operativos de artículos y distinción entre actuar con garantías y omitir toda medida posible.

**Cambios:** tabla pedagógica de artículos 1, 2, 6, 29, 121 y 209. Aplicación a situaciones donde una comunicación es exigible en una etapa, y a opciones donde existe riesgo público que sí requiere medidas proporcionadas, sin prejuzgar responsabilidad. Casos reescritos con distractores plausibles en lugar de simples negativas a la garantía.

## Integridad y alcance
- 9 lecciones intervenidas (M3–M5, tres por módulo).
- 9 preguntas existentes reescritas: `situational-1` y `transfer-1/2` en cada uno de los tres módulos.
- **0 preguntas nuevas**: permanecen 85 módulos, 255 lecciones y 1948 registros de preguntas.
- Se preservan IDs, letras de respuesta correcta, progreso, historial, SVG, dependencias y curso DIAN.
- No se declara revisado el resto (M6–M84); el próximo grupo es **M6–M8**.
- Fuentes adicionales enlazadas en los módulos a través de sus identificadores existentes. No se añaden referencias ajenas al registro ni se inventa distribución oficial de ítems.

## Sustento documental contrastado
- Procuraduría, Resolución 076 de 2026 (y modificaciones de las resoluciones 108, 133, 212 y 243): https://apps.procuraduria.gov.co/normograma/compilacion/docs/resolucion_procuraduria_0076_2026.htm
- Procuraduría, Resolución 212 de 2026: https://apps.procuraduria.gov.co/normograma/compilacion/docs/resolucion_procuraduria_0212_2026.htm
- Procuraduría, Resolución 243 de 2026: https://apps.procuraduria.gov.co/normograma/compilacion/docs/resolucion_procuraduria_0243_2026.htm
- Constitución Política, textos de los artículos 1, 2, 6, 29, 121 y 209: https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4125
- Funciones y tipos de responsabilidad dentro del marco constitucional y disciplinario: Código General Disciplinario, Ley 1952 de 2019, reformada por Ley 2094 de 2021. https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=90324

## Verificación
La prueba automatizada `tests/content/procuraduria-auditoria-m3-m5.test.ts` exige los nueve bloques pedagógicos, fuentes apropiadas, tres cierres pertinentes por módulo y claves inalteradas. La CI general verifica tipos, lint, pruebas, 255 SVG y PWA. Se fusiona solo con resultados satisfactorios y vista previa Netlify correcta.
