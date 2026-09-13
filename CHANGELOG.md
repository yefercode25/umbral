# Changelog

## 2026.09.13-alpha.6

### Hardening de navegación, contraste y PWA
- Las transiciones entre rutas reinician el scroll al inicio para que una lección, módulo o vista nueva no herede la posición vertical anterior.
- Simulacros, diagnóstico y práctica adaptativa también vuelven al inicio al cambiar de pregunta o de fase dentro de la misma ruta.
- Se añaden tokens de contraste `--color-on-brand` y `--color-on-course-accent`; en tema oscuro los fondos azul/teal claros usan texto oscuro en lugar de blanco.
- Los botones deshabilitados dejan de depender de `opacity`; ahora conservan legibilidad con superficie y texto específicos sin parecer acciones disponibles.
- Se elimina el efecto translúcido del encabezado móvil de lección para mantener la línea visual sólida de Umbral.
- Se corrigen landmarks HTML anidados en lección, diagnóstico y simulacro.
- PWA endurecida para despliegue: manifest con `id`, idioma y categorías; icono Apple Touch 180×180; metadatos standalone para iOS; `theme-color` sincronizado con el tema de Umbral; límite de precache elevado a 8 MiB para que el bundle de contenido no quede fuera del modo offline; cabeceras Netlify específicas para `sw.js` y `manifest.webmanifest`.
- Netlify incorpora cabeceras básicas de seguridad (`nosniff`, `strict-origin-when-cross-origin`, `DENY` para framing).

### Auditoría de profundidad y teoría
- Reconstrucción del incremental alpha.6 sobre la copia maestra alpha.5 suministrada.
- Auditoría completa de cobertura contra CT-CR-3007 y el mapa M0–M28.
- El curso pasa a **211 lecciones, 615 preguntas y 93 fuentes**.
- 36 lecciones nuevas respecto de alpha.5 y 76 preguntas nuevas, con refuerzo de Estado/competencia, servicio a las ciudadanías, gestión documental, CPACA, estructura DIAN, teoría de la imposición, recaudo, EAR, garantías, auxiliares de justicia, devoluciones, calidad de datos, Excel/análisis y ofimática complementaria.
- La referencia reglamentaria de gestión documental se actualiza a la versión integrada del Decreto 1080 de 2015, junto con el PGD DIAN versión 3 de 2025.

### Aprendizaje activo
- Nuevo bloque `sequence-exercise` para practicar orden procedimental con controles accesibles de subir/bajar.
- Secuencias aplicadas a ruta del curso, MIPG, CPACA, prescripción, título/mandamiento, devoluciones y técnica PJS.
- Se añadieron checkpoints a las lecciones que todavía eran puramente expositivas.
- La auditoría ahora exige que toda lección publicada contenga al menos un checkpoint, secuencia o simulador.
- Se eliminó la reutilización accidental de checkpoints entre lecciones.

### Práctica y calidad de preguntas
- `/practice` carga 20 preguntas inicialmente y 20 adicionales bajo demanda.
- `Mezclar` usa una permutación determinista real del banco filtrado.
- El filtro Núcleo CT-CR-3007 incluye M9–M16 completo, incluido M14.
- Las opciones se presentan en un orden determinista independiente de sus IDs internos para neutralizar el patrón histórico A/B/C sin alterar calificación ni progreso.
- Las filas visuales de opciones se igualan dentro de cada pregunta para reducir pistas por longitud.

### UI / UX y resiliencia
- Error Boundary global con recuperación por recarga o regreso al inicio.
- Navegación inferior móvil con superficie sólida, sin efecto glass.
- Mejor ajuste de listas de lecciones en pantallas estrechas y subtítulos de modos de práctica sin truncado agresivo.
- `QuestionCard` anuncia la retroalimentación con `aria-live`.
- `SequenceExercise` usa IDs accesibles generados con `useId()`.
- Google Sans se incorpora explícitamente al precache PWA.

### Calidad
- Auditoría runtime del contenido: 9 unidades, 29 módulos, 211 lecciones, 615 preguntas, 93 fuentes y **0 errores estructurales**.
- 0 IDs duplicados, 0 referencias rotas, 0 checkpoints huérfanos y 0 lecciones fuera de módulo.
- La GOA específica de pruebas escritas DIAN 2676 continúa tratándose como pendiente al corte; M24–M28 conserva clasificación complementaria/provisional.
- `docs/06-content-audit-alpha6.md` y `docs/07-ui-audit-alpha6.md` documentan cobertura, decisiones y pendientes.


## 2026.09.13-alpha.5

### Unidad 8 · Herramientas y razonamiento transversal
- Nuevo bloque complementario M24–M28, separado del núcleo funcional mientras la GOA definitiva siga pendiente.
- 30 lecciones nuevas y 100 preguntas verificadas: 15 de ofimática/productividad digital, 30 de Excel, 20 de análisis de datos, 15 de lógica/conjuntos y 20 de matemática/probabilidad.
- 11 fuentes de apoyo nuevas: documentación oficial de Microsoft Support y referencias educativas abiertas de OpenStax.
- El curso pasa a 9 unidades, 29 módulos, 175 lecciones, 539 preguntas y 81 fuentes.

### Práctica y evaluación
- Nuevo filtro `Transversal` en el banco general.
- Nuevo perfil de simulacro `Transversal complementario` de 20 preguntas limitado a M24–M28.
- El diagnóstico principal queda enfocado en M1–M20 para no mezclar el bloque provisional con la línea base del perfil.
- La práctica adaptativa reduce ligeramente la prioridad inicial del bloque transversal, sin impedir que errores reales lo vuelvan prioritario.
- El plan de 8 semanas incorpora M24–M28 como bloque en paralelo, sin desplazar cartera, cobro, recaudo ni devoluciones.

### Calidad
- Auditoría estructural alpha.5: 9 unidades, 29 módulos, 175 lecciones, 539 preguntas, 81 fuentes y 0 referencias rotas.
- 65 archivos TypeScript/TSX transpilados para control sintáctico: 0 diagnósticos de sintaxis.
- Selector de simulacros probado repetidamente incluyendo el nuevo perfil transversal: tamaños correctos, sin duplicados y alcance M24–M28 válido.

## 2026.09.13-alpha.4

### Curso DIAN 2676 · Gestor II
- 145 lecciones publicadas, 439 objetos `Question` reales y 70 fuentes registradas.
- 40 nuevas preguntas de fundamentos y competencias para M1–M5 y M18–M20.
- 59 preguntas adicionales de refuerzo funcional para M0–M17, con mayor densidad en normalización, EAR, control extensivo, cartera, cobro, cautelares, concursales y devoluciones.
- 40 preguntas PJS integradoras agrupadas en ocho expedientes de cinco decisiones.
- Nuevas lecciones sobre realidad del saldo antes del cobro, conciliación EAR, universo confiable en control extensivo, facilidad vigente + saldo a favor, sustanciación de devoluciones y ciclo de vida de accesos.
- Nuevas fuentes oficiales para normalización de Cuenta Corriente Contribuyente, sustanciación de devoluciones, autorización de EAR y facilidades de pago.

### Casos integradores
- Nueva ruta `/practice/cases` y detalle `/practice/cases/:caseId`.
- Ocho laboratorios: estado de cuenta, facilidad/devolución, EAR, ejecución coactiva, concursal, devolución con riesgo, control extensivo y gobierno de accesos.
- Cada laboratorio muestra expediente base, hechos, módulos relacionados, progreso, cinco decisiones secuenciales y fuentes oficiales.
- Nuevo filtro `Integradoras` dentro del banco general de práctica.

### Simulacros
- Los perfiles funcionales reservan un mínimo de preguntas integradoras: 2 en 10 ítems, 4 en 20 y 10 en 40.
- Las sesiones de 20/40 mantienen cobertura M1–M17 y después aplican ponderación pedagógica interna.
- Nuevas pruebas de integridad para los laboratorios y para la cuota de preguntas integradoras.

### Calidad y trazabilidad
- El modelo de pregunta incorpora `integrated`, `relatedModuleIds` y `scenarioId`.
- Se amplió la auditoría para validar módulos relacionados, escenarios y condición PJS de preguntas integradoras.
- El banco pasa de 300 preguntas en alpha.3 a 439 en alpha.4 (+139), manteniendo conteo directo de objetos `Question` cargados por el curso.


## 2026.09.13-alpha.3

### Curso DIAN 2676 · Gestor II
- Se mantiene completo el mapa curricular M0–M23.
- 139 lecciones, 300 preguntas y 66 fuentes registradas.
- Nueva lección M2: MIPG vigente organizado en seis dimensiones.
- Nueva lección M17: ciclo real de gestión de accesos basado en auditoría DIAN AGA 2025-002.
- Ampliación del banco funcional en Constitución/función pública, DIAN/TACI, CPACA, obligación tributaria, estado de cuenta, EAR, control extensivo, cartera, cobro persuasivo, coactivo, medidas cautelares y devoluciones.
- Integración de fuentes recientes de procedimientos de cartera, EAR, concursales y devoluciones.

### Evaluación y práctica
- Simulacro configurable con perfiles funcionales de 10, 20 y 40 preguntas PJS.
- Perfil de repaso mixto de 20 preguntas.
- Navegación libre entre preguntas, pendientes y marcación para revisar.
- Cronómetro ascendente sin inventar límite oficial mientras la GOA esté pendiente.
- Resultado por módulo y revisión posterior con fuentes oficiales enlazadas.
- El selector funcional restringe el banco a M1–M17 y usa ponderación pedagógica interna explícitamente no oficial.

### UI / UX
- Se conserva CSS nativo + CSS Modules; no Tailwind.
- Eliminadas barras decorativas laterales de estados/correcciones.
- Ajustadas variables visuales compartidas para simuladores en claro y oscuro.
- Estados de pregunta respondida, actual y marcada accesibles desde el navegador del simulacro.

### Calidad
- Auditoría de integridad de contenido: 0 referencias rotas en el corte actual.
- Prueba repetida del selector de simulacros: tamaños correctos, sin preguntas duplicadas y alcance funcional válido.
- Transpilación sintáctica TypeScript disponible como validación auxiliar mientras el entorno no complete la instalación de dependencias.
