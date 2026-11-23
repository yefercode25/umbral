# Plan y ejecución · Procuraduría 104-2026 (3PU-15)
**Corte de trabajo:** 22 de noviembre de 2026  
**Base técnica:** rama `main` después de fusionar el PR #1 de simplificación visual  
**Versión pedagógica propuesta:** `2026.11.22-beta.1`  
**Estado:** cambios propuestos para revisión, sin alterar `main`

## 1. Problema que se corrige

La versión alpha.2 empleaba diez plantillas para generar las 850 preguntas base de los 85 módulos. Las preguntas 1–6 de cada módulo también se insertaban como checkpoints de sus tres lecciones (510 reactivos reutilizados en la práctica). En las lecciones 2 y 3 había además dos simuladores que repetían la decisión o la secuencia contenida en esos checkpoints.

La unicidad de los IDs no garantiza diversidad de enunciados o decisiones. El riesgo es aprender a reconocer respuestas previamente vistas, sin transferir conocimientos a expedientes nuevos.

## 2. Criterio de preparación ante preguntas inesperadas

La experiencia del examen DIAN muestra que un aspirante puede conocer temas del programa y aun así encontrar supuestos nunca practicados. Para Procuraduría, esto no autoriza a sumar sin criterio todos los regímenes imaginables. Los conocimientos esenciales de la convocatoria 104-2026, versión 4 (Res. 243/2026), determinan el núcleo. Su aplicación se ejercita a través de casos con:

- Hechos incompletos, identificación dudosa de intervinientes y autoridades concurrentes.
- Secuencia jurídica y consecuencias de actuar fuera de etapa.
- Documentos contradictorios, fuentes de distinto valor, versiones y fechas.
- Pruebas favorables y desfavorables, exclusión, contradicción y carga estatal.
- Conflictos entre protección de información, transparencia y derecho de petición.
- Planeación contractual, supervisión, recibidos, pólizas y controles.
- Evidencia digital, registros, tiempos, NAT, permisos, copia y trazabilidad.
- Decisiones urgentes en las que no puede omitirse una garantía.
- Datos que cambian la hipótesis a mitad del expediente.
- Límites del profesional 3PU-15: aportar soporte técnico y jurídicamente útil sin usurpar decisión de otra autoridad.

El supuesto de maquinaria extranjera de uso temporal dañada por incendio se incorpora solo como **caso interdisciplinario de supervisión, prueba y competencias** en M52. No se convierte en materia general de tributación aduanera ni se presume que un siniestro genera una falta disciplinaria.

## 3. Cambios implementados en esta rama

| Línea | Implementación | Control de calidad |
|---|---|---|
| 1. Separación de bancos | 510 checkpoints históricos permanecen en las lecciones; las modalidades evaluativas reciben únicamente 850 nuevas situaciones y 30 integradoras | Intersección entre checkpoints y banco evaluable = 0 |
| 2. Escenarios nuevos | 10 situaciones por cada uno de los 85 módulos, con tres opciones, contexto de expediente, dificultad y fuentes | 850 IDs nuevos, sin colisiones |
| 3. Escenarios personalizados | 32 perfiles redactados por tema y contextualización del resto según datos específicos del blueprint | No reutilizar un texto idéntico de caso dentro de un módulo |
| 4. Alta complejidad | 15 reactivos escritos individualmente en M17, M18, M24, M26, M29, M30, M32, M35, M37, M44, M51, M52, M61, M66, M82 | Revisar normas, competencia, inferencia y calidad del distractor |
| 5. Lecciones menos repetitivas | Se reemplazan los simuladores duplicados por lectura guiada del expediente y cambio de premisa; se conserva una comprobación distinta por ID | Dos checkpoints por lección; seis por módulo |
| 6. Experiencia de práctica | Banco exclusivo aplicado a práctica libre, diagnóstico, adaptativa, simulacros, estadísticas, plan y avance de módulo | No afectar la selección DIAN |
| 7. Historia existente | No se eliminan IDs, respuestas, errores ni marcadores de preguntas históricas; los reactivos nuevos no heredan una respuesta registrada para un enunciado distinto | Progreso de cursos y `localStorage` intactos |

**Inventario esperado:** 17 unidades, 85 módulos, 255 lecciones, 37 fuentes; 850 preguntas históricas, 850 preguntas nuevas y 30 integradoras = 1.730 registros; de esos, **880** componen el banco de práctica y simulacros, y **510** fueron utilizados como checkpoints de lección. Se conservan 340 preguntas históricas no utilizadas como checkpoints para que su identidad y trazabilidad no desaparezcan de historiales previos; no forman parte de la práctica nueva.

## 4. Secuencia de auditoría jurídica y pedagógica que sigue abierta

La presente versión contiene una **primera reconstrucción transversal**, no un banco completamente validado por revisión humana pregunta por pregunta. Antes de considerarla definitiva, completar:

1. **Auditoría temática individual de los 85 módulos:** contrastar cada enunciado y las tres opciones con la versión 4 de la convocatoria, fuentes oficiales y reformas vigentes. Marcar cualquier enunciado cuya fuente no permita resolver inequívocamente las alternativas.
2. **Diversificación adicional de casos:** los 32 perfiles individuales cubren temas de mayor exposición; los otros 53 módulos tienen personalización de sus blueprints y deben recibir sucesivamente expedientes editoriales propios, no solo variaciones de plantilla.
3. **Banco de dilemas avanzados:** más distractores donde dos alternativas sean jurídicamente posibles en abstracto pero solo una proceda por etapa, competencia o hecho particular. Incluir cálculos de términos únicamente cuando el régimen y el punto inicial estén verificados.
4. **Transferencia intermodular:** expandir los seis expedientes integradores ya existentes con secuencias de hechos y evidencias que alteren legítimamente la decisión, evitando duplicar las situaciones sencillas.
5. **Comportamentales:** verificar que no se presenten respuestas “moralmente ideales” como si la prueba psicométrica tuviera una clave universal; diferenciar entrenamiento en razonamiento situacional de inventarios conductuales.
6. **Fuente y vigencia:** actualizar el catálogo con comunicaciones del concurso posteriores al 14 de septiembre; no inventar distribución temática, fecha de examen ni formato final sin guía oficial publicada.
7. **Evaluación con usuarios:** probar recorridos completos en celular y escritorio, variedad real, comprensión de explicación y tiempo razonable de lectura en sesiones de 10, 20 y 40 preguntas.

## 5. Validación y criterios de aceptación

Los tests nuevos deben constatar:
- 850 situaciones nuevas, exactamente 10 por módulo y sin IDs duplicados.
- Cada situación incluye caso suficiente, pregunta específica, tres opciones distinguibles, explicación y referencias.
- La opción correcta no ocupa siempre el mismo ID.
- La práctica no recupera los 510 checkpoints ya presentados en lecciones.
- Diagnóstico, simulacros, adaptativa y módulo tienen un banco coherente.
- DIAN conserva exactamente su selección anterior.

La acción de CI del pull request ejecuta `npm run typecheck`, `npm run lint`, `npm run test` y `npm run build`. Ningún resultado debe declararse aprobado antes de contar con el registro efectivo de la ejecución.

## 6. Fuentes de referencia

- Convocatoria 104-2026 v4 (Res. 243/2026): https://meritoconstruyendoexcelencia.com.co/statics/convocatorias/104-2026/view.pdf
- Código General Disciplinario, PGN: https://apps.procuraduria.gov.co/normograma/compilacion/docs/ley_1952_2019.htm
- Ley 2094 de 2021, PGN: https://apps.procuraduria.gov.co/normograma/compilacion/docs/ley_2094_2021.htm
- Guía disciplinaria de pruebas, PGN: https://apps.procuraduria.gov.co/guia/gd_1952/pruebas.html
- Ley 1755 de 2015: https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=65334

## 7. Regla para cambios sucesivos

Partir del HEAD del PR más reciente, no del ZIP anterior. Modificar la misma arquitectura, conservar IDs históricos y no introducir cambios de diseño no relacionados. Los siguientes ajustes a este banco deben ser de calidad jurídica y pedagógica, acompañados de pruebas, no simples incrementos automáticos de cantidad.
