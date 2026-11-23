# Auditoría editorial Procuraduría · M6, M7 y M8
**Fecha de revisión:** 23 de noviembre de 2026 · **Versión:** 2026.11.23-beta.7

## Criterio de revisión
Tercera revisión por grupos de tres módulos. La evaluación se hizo sobre los blueprints reales, sus nueve lecciones y el cierre de tres preguntas de cada módulo. Se amplía lo necesario para enseñar las distinciones que se evalúan. No se agregan preguntas ni nuevas prácticas externas.

### M6 · Estructura del Estado colombiano
**Situación anterior:** presenta las ramas y la diferencia genérica entre investigación disciplinaria, fiscal y penal; faltaban mapa institucional y consecuencias concretas sobre documentos compartidos.

**Correcciones:** tabla que ubica las ramas del poder, Procuraduría y Ministerio Público, Contraloría y control fiscal, Fiscalía y Rama Judicial, Defensoría y personerías; distinción terminológica «Fiscalía ≠ fiscal»; caso de un contrato con requerimientos de tres autoridades; reglas sobre prueba compartida, autonomía de objeto y límites de inferir responsabilidad de una investigación abierta. El cierre ahora pregunta por competencias, documentos y una certificación de entrega parcial que cambia la hipótesis.

### M7 · Función administrativa y principios
**Situación anterior:** señala los principios pero no desarrolla suficientemente cómo se resuelven dos principios concurrentes cuando existe conflicto entre orden de atención, urgencia y acceso a documentos.

**Correcciones:** aplicación del art. 209 constitucional y el CPACA a una matriz de correspondencia: igualdad, moralidad, eficacia, economía, celeridad, imparcialidad, publicidad y coordinación. Ejemplo de radicado de persona conocida vs. prioridad legal sustentada; distinguir una etiqueta de Excel del derecho real a atención prioritaria. Caso de divulgación parcial de información pública con datos protegidos. Los cierres evalúan órdenes, protección de datos, prioridad legal y cambios de premisa.

### M8 · Servidor público y responsabilidad
**Situación anterior:** identifica omisión y extralimitación, pero necesitaba desarrollar la calidad de sujeto, el deber concreto, prueba y competencia antes de relacionar el hecho con una responsabilidad.

**Correcciones:** artículos constitucionales 6, 121, 123 y 124; calidad de servidor público y distinción frente a particulares disciplinables cuando la ley lo prevé, sin darla por supuesta. Caso de un supervisor contractual con demora, registros contradictorios y deberes específicos. Comparación separada de consecuencias disciplinarias, fiscales, penales y civiles/administrativas. Cierre de tres casos sobre deber, información contradictoria y límites de la atribución.

## Verificación editorial
- **Nueve lecciones reforzadas:** M6–M8, cada una con aportes propios que preparan las preguntas existentes.
- **Nueve preguntas reescritas, ninguna nueva:** `pgn-m6/m7/m8-situational-1` y `pgn-m6/m7/m8-transfer-1/2`. Se mantienen los IDs y la letra de respuesta correcta de cada pregunta.
- **No se alteran las cifras:** 85 módulos, 255 lecciones, 1948 registros de preguntas, 42 fuentes y 264 SVG de Procuraduría.
- **Integridad:** se preservan estructura de lecciones, notas, historial, curso DIAN, `package.json`, `pnpm-lock.yaml` y `netlify.toml`.
- **Alcance:** seis módulos anteriores M0–M5 siguen intactos. No se declara revisado el resto M9–M84.
- **Pruebas:** `tests/content/procuraduria-auditoria-m6-m8.test.ts`, TypeScript, ESLint, Vitest, SVG y compilación PWA.

## Fuentes oficiales verificadas
1. Constitución Política de Colombia: arts. 6, 113, 116, 117–119, 121, 123, 124, 209, 250 y 267. [Función Pública, Gestor Normativo](https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4125).
2. Procuraduría General de la Nación: [objetivos y funciones institucionales](https://www.procuraduria.gov.co/procuraduria/conozca-entidad/Pages/objetivos-funciones.aspx). Distinción de misión preventiva, intervención y disciplinaria.
3. Ley 1952 de 2019, Código General Disciplinario, y Ley 2094 de 2021: [compilación de Función Pública](https://www1.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=90324). Responsabilidad funcional, sujetos disciplinables, garantías y límites.
4. Ley 1437 de 2011 (CPACA), y Ley 1581 de 2012 sobre protección de datos, ya incorporadas en las referencias del currículo.

**Siguiente lote:** M9–M11. No presuponer ponderaciones oficiales por módulo o profesión; el curso es un recurso formativo independiente.
