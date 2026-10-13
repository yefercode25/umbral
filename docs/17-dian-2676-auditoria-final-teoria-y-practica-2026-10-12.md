# Cierre editorial — Umbral DIAN 2676, Gestor II (CT-CR-3007)

**Corte:** 12/10/2026 · **copia única:** `/mnt/data/umbral-pwa-master/` · **versión:** `2026.10.12-dian-final.2`.

## Qué se detectó y qué se corrigió

La versión anterior añadió talleres avanzados a los 29 módulos y clínicas jurídicas, pero **muchas lecciones originales continuaban siendo introducciones breves**. No era exacto afirmar que toda la teoría original había sido ampliada individualmente. En esta revisión se añadió **una lección sustantiva de fundamentos como primera actividad en CADA uno de los 29 módulos**; se mantuvo el material previo, sus enlaces y sus identificadores para proteger el progreso persistido.

Cada lección nueva incluye **fundamentación temática propia**, diferenciación de conceptos jurídicos o técnicos, explicación de procedimiento, matriz comparativa de tres contrastes, expediente o problema resuelto, método de cuatro pasos, variante de hecho que cambia la respuesta, error típico, ejercicio con **tres opciones y justificación individual** y fuentes del catálogo. En M18–M20 se añade autoinforme Likert usando los bancos de conductas del módulo; su ejercicio conceptual no se presenta como pregunta psicométrica oficial.

La nueva capa se ubica con orden 0: se estudia **antes** de las lecciones del módulo heredadas, no como apéndice que pueda omitirse accidentalmente al empezar de cero. La unidad y orden de los módulos no cambian.

## Cobertura de los 29 capítulos nuevos

| Tramo | Módulos | Profundización incorporada |
|---|---|---|
| Preparación | M0 | Jerarquía MERF / GOA / indicadores individuales; 11 funciones y límites competenciales |
| Institucional y administrativo | M1–M4 | Constitución/derechos/competencia, petición/reserva/MIPG, organización y TACI, actos/notificación/firmeza/especialidad tributaria |
| Tributario y recaudo | M5–M8 | Obligación sustancial/formal, conciliación y repercusiones informativas, control EAR y sus tres flujos, segmentación y evaluación de campañas |
| Cartera y cobro | M9–M14 | Exigibilidad/prescripción; facilidades/imputación; títulos/mandamiento/notificación; excepciones; cautelares y terceros; concurso y graduación de créditos |
| Devoluciones | M15–M16 | Clasificación del crédito, compensación previa, inadmisión/rechazo, investigación, garantía y pago efectivo |
| Información y permisos | M17 | Segregación funcional/técnica, trazabilidad y ciclo de vida de permisos |
| Comportamentales e integridad | M18–M20 | Diferencia entre PJS y autoinforme; ética nivel 4 y competencias nivel 3; valores e imparcialidad con Likert sin clave |
| Entrenamiento | M21–M23 | Tipología de distractores, libreta de errores y transferencia, límites del porcentaje de un simulacro independiente |
| Complemento condicionado | M24–M28 | Documentos/versiones, Excel y conciliación, estadística y sesgos, lógica y conjuntos, porcentajes y probabilidad |

## Práctica adicional y fidelidad a la guía

Se añadieron **38 preguntas originales**: 29 de comprobación conceptual o aplicación en la nueva primera lección de cada módulo, más **9 variantes PJS de dificultad 5** (M9–M17). De ellas, **26** están tipificadas PJS y **12** como repaso conceptual (M0 y M18–M28), evitando mezclar conocimiento de formato o razonamiento complementario con prueba funcional.

Las alternativas incorrectas se fundamentan en errores de *hecho, prueba, identidad de obligación, competencia, cronología o trámite*; no se inventan preguntas publicadas oficialmente. El banco ahora dispone de **723 preguntas**, el curso de **291 lecciones** y **96 fuentes registradas**. Se conservaron las **70 PJS/ejercicios añadidos en la profundización anterior**. El perfil «Expedientes profesionales» incluye el nuevo banco profesional; el filtro «Casos nuevos · 2026» permite acceder a sus preguntas. Se corrigió una expectativa obsoleta de tests: antes comprobaba 52 preguntas `q-goa26-` cuando en realidad había 70.

### Normatividad y límite de inferencia

Las explicaciones se basan principalmente en la ficha MERF CT-CR-3007 aportada por el usuario, la GOA publicada por CNSC el 08/10/2026, Constitución, CPACA, Estatuto Tributario, Ley 1116 y fuentes DIAN que ya forman parte del catálogo del curso. La ampliación cita las normas donde procede, y evita convertir ejemplos en asesoría para casos reales. Los procedimientos y efectos jurídicos dependen del régimen aplicable y la prueba completa; no se deben inferir decisiones reales desde una simulación.

**Los ejes particulares del número de inscripción siguen sin aportarse.** Office, Excel, conjuntos y probabilidad se mantienen como contenido complementario, no confirmación oficial del operador. La fecha del examen y la citación personal se consultan en SIMO. Los porcentajes educativos de Umbral no son notas CNSC. El material es independiente de DIAN, CNSC y operador.

## Evaluación técnica de esta entrega

- Compilación estricta de contenido con TypeScript (`--strict`, `--noUncheckedIndexedAccess`, `--exactOptionalPropertyTypes`) para `course.ts` y selector de simulacros: **sin errores**.
- Compilación CommonJS temporal para evaluar el contenido y la selección de preguntas en Node 22: **sin errores**.
- Validación independiente: **8.559 aserciones correctas, cero errores**. Comprende unicidad de IDs; referencias módulo/lección/pregunta/fuente; checkpoint y matrices; casos nuevos, racionales, densidad mínima de teoría; orden inicial en los 29 módulos; y 120 selecciones de cada perfil de simulacro, sin duplicados ni preguntas conceptuales en simulacros funcionales.
- Se corrigieron cuatro lugares antiguos en contenidos y una pregunta transversal que seguían hablando de la GOA como no publicada (el documento fue divulgado en octubre de 2026).
- **Limitación:** `node_modules` no está disponible y la instalación `npm install` no concluyó en este entorno. No se declara ejecutado `npm run build`, `npm test`, `npm run lint` completo ni Playwright. Se requiere validación de navegador en equipo con dependencias instaladas.
- La auditoría automatizada de integridad **no acredita validación jurídica individual de todas las 685 preguntas anteriores ni reescritura de las lecciones originales**. La actuación en este ciclo consistió en añadir primera capa teórica sustantiva por módulo y nuevos ejercicios, conservando el legado.

## Cómo comenzar el curso de nuevo sin perder tu historial accidentalmente

1. Actualiza la raíz de tu proyecto con el ZIP incremental, sobrescribiendo exactamente las rutas entregadas.
2. Ejecuta `npm install` (o instalador habitual con el `pnpm-lock.yaml`) y `npm run build`, `npm run test`, `npm run lint`. Probar PWA/móvil/lector y simuladores antes de dar por validada la interfaz.
3. Abre Umbral → **Ajustes** → **Exportar respaldo** y guarda el JSON si deseas conservar el progreso previo.
4. En **Ajustes → Reiniciar progreso**, elige únicamente **Gestor II**, confirma la operación y vuelve a iniciar desde M0. El curso Procuraduría mantiene sus datos. Reiniciar sin respaldo borra el progreso de DIAN del dispositivo.
5. Empieza por cada **Fundamentos** nuevo, continúa lecciones, taller avanzado, expedientes y clínicas; haz después práctica PJS por tema y simulacro funcional. No confundas preguntas conceptuales de refuerzo con la prueba funcional oficial.

## Archivos de implementación

- `content/courses/dian-2676-gestor-ii/modules/masterTheory2026.ts` — 29 capítulos nuevos + 29 preguntas de comprobación.
- `content/courses/dian-2676-gestor-ii/questions/masterPractice2026.ts` — 9 variaciones profesionales PJS.
- `content/courses/dian-2676-gestor-ii/course.ts` — integración y versión.
- `content/courses/dian-2676-gestor-ii/modules/modules.ts` — primera lección en cada módulo.
- `content/courses/dian-2676-gestor-ii/modules/lessons.ts` — actualización de aviso GOA en material antiguo.
- `content/courses/dian-2676-gestor-ii/questions/transversalExpansion.ts` — actualización de pregunta sobre ejes individuales.
- `src/lib/questionSelection.ts` y `src/features/practice/PracticePage.tsx` — nuevas PJS elegibles en perfiles y filtro.
- `tests/content/course-integrity.test.ts` — expectativas y controles de los 29 fundamentos.
- `CHANGELOG.md` — trazabilidad de versión.

No se han modificado los módulos, bancos ni datos de Procuraduría; tampoco estilos, tipografía, rutas públicas, claves del almacenamiento, identificadores anteriores ni arquitectura PWA.
