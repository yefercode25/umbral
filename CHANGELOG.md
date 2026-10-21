# Changelog

## 2026.10.20 · Corrección transversal de contraste y legibilidad (claro/oscuro)

- Se corrige el botón «Completar y continuar»: las reglas de tipografía del pie de lección se acotan al bloque de información y dejan de sobrescribir los `span` de los botones.
- Se introduce `--course-accent-ink` para distinguir el color editorial de cada curso de la tinta de lectura accesible. Se ajustan titulares pequeños, enlaces, mensajes de simuladores y ayudas contextualizadas.
- Se revisan tokens de texto terciario, estados correcto/atención/error, anillos de foco y controles deshabilitados; se preserva la paleta táctil tipo Duolingo.
- Se corrigen contrastes de nodos verdes, dorados y pendientes, casillas seleccionadas en simulacros, botones de ejercicios y la acción principal de Inicio en tema oscuro.
- Se añade `pnpm run check:contrast`: 46 verificaciones de pares de color y tres defensas contra regresiones de selectores (sin dependencias adicionales).
- Se documentan las comprobaciones estáticas y las limitaciones de pruebas de navegador en `docs/19-auditoria-contraste-ui-2026-10-20.md`.
- No se modifican preguntas, lecciones, fuentes, rutas educativas ni datos de progreso.


## 2026.10.20 · Integración de iconografía Umbral (principal clara)

- Se adoptan los nuevos iconos generados conservando las rutas de recursos existentes; **variante clara** como principal en el menú lateral, cabecera móvil, favicon clásico, iconos PWA e icono de Apple.
- Se regeneran `favicon-light`, `favicon-dark`, `brand-mark`, máscara segura para PWA, las tres previsualizaciones de Ajustes y el wordmark.
- `BrandMark` sustituye la letra decorativa `U` por el icono real de Umbral para escritorio y móvil.
- El manifiesto alinea los colores de instalación con el fondo claro; no se modifican bancos, identificadores, progresos ni mecánicas educativas.


## 2026.10.20 · Migración visual táctil e interfaz tipo Duolingo

- Se adapta la interfaz completa a tarjetas, botones 3D, tipografía redondeada, rutas con nodos, indicadores de avance y navegación responsiva; selector de curso con preferencia local persistente.
- Inicio, curso y módulo muestran rutas de aprendizaje por unidades, módulos y lecciones, respetando todos los identificadores, estados y enlaces publicados; sin bloqueo por vidas.
- Panel lateral basado en lecciones, aciertos y metas reales, sin corazones, contadores de vida ni recompensas ficticias.
- El motor de aprendizaje, bancos DIAN/Procuraduría, fuentes, progreso y pruebas de contenido originales permanecen intactos.
- Véase `docs/12-migracion-visual-duolingo-2026-10-20.md` para alcance, límites de validación y prueba posterior al despliegue.


## 2026.09.14-alpha.2 · Auditoría profunda de contenido Procuraduría 104-2026

### Profundidad curricular
- La auditoría detecta que alpha.1 tenía buena cobertura estructural, pero demasiada uniformidad editorial en la generación de lecciones y preguntas; alpha.2 conserva la arquitectura y añade contenido específico por materia en todos los módulos del banco principal.
- El curso pasa a **17 unidades, 85 módulos, 255 lecciones, 880 preguntas y 37 fuentes**. Los cinco módulos nuevos M80–M84 refuerzan el área profesional de Ingeniería de Sistemas sin presentar esa ampliación como distribución oficial de la prueba.
- Todos los módulos evaluables por defecto (M0–M74 y M80–M84) incorporan ahora al menos un bloque de fundamento específico adicional a la plantilla pedagógica común. M75–M79 permanece deliberadamente condicional.
- Se incorporan anclajes normativos puntuales del Código General Disciplinario para ilicitud/culpabilidad/debido proceso, indagación, investigación, sujetos procesales, cierre, evaluación/cargos, nulidades, carga e imparcialidad probatoria, contradicción, sana crítica, apoyo técnico y aseguramiento de evidencia.
- El módulo de preservación digital aclara expresamente que la cadena de custodia no aparece como un régimen autónomo completo dentro del CGD y que la Guía Disciplinaria la conecta con aseguramiento de prueba, apoyo técnico e integración normativa.

### Casos integradores
- Se añaden **30 preguntas PJS integradoras** agrupadas en **6 expedientes de cinco decisiones**: alteración de datos, ruta completa de instrucción, petición/población vulnerable, riesgo preventivo en contratación, competencia/despacho comisorio y cambio de software.
- `/practice/cases` deja de estar acoplado a DIAN y funciona con laboratorios específicos de cada curso; Procuraduría habilita sus seis expedientes propios.

### Fuentes y prudencia editorial
- Se añaden Resoluciones 076, 108 y 133 de 2026, portal oficial del concurso, Decreto 1851 de 2021 y referencias MinTIC MRAE/MSPI para el refuerzo profesional.
- Se corrige el enlace editorial de la Convocatoria 104 para apuntar al portal oficial del concurso y se documenta que la **versión 4 aportada para el curso prevalece** frente a versiones anteriores encontradas en línea.
- No se fija una fecha de examen dentro del contenido: el cronograma sigue tratándose como información dinámica del concurso y debe consultarse en los canales oficiales.
- El filtro transversal de práctica deja de incluir accidentalmente M75–M79: ahora agrupa M55–M74 y M80–M84, mientras las cinco especializaciones condicionales solo se alcanzan por su ruta explícita.

### Calidad
- La auditoría runtime valida **17/85/255/880/37**, 510 checkpoints, 170 simuladores de decisión, 30 preguntas integradoras, 6 casos, IDs únicos y **0 referencias rotas**.
- Compilación TypeScript estricta del núcleo de contenido con `strict`, `noUncheckedIndexedAccess` y `exactOptionalPropertyTypes`: sin diagnósticos.
- Se agregan pruebas específicas de laboratorios integradores y controles para que los módulos del banco principal no regresen a contenido exclusivamente genérico.

## 2026.09.14-alpha.1 · Procuraduría 104-2026

### Nuevo curso · Profesional Universitario 3PU-15
- Se incorpora el segundo curso real de Umbral: `Procuraduría 104-2026 · Profesional Universitario 3PU-15`, manteniendo progreso, práctica y estadísticas independientes del curso DIAN.
- El currículo parte de cero y alcanza nivel avanzado en **16 unidades, 80 módulos, 240 lecciones y 800 preguntas**, respaldadas por **30 fuentes** registradas.
- Cada módulo contiene tres capas pedagógicas: fundamentos desde cero, aplicación paso a paso y nivel avanzado/trampas; además aporta diez preguntas de dificultad progresiva.
- Se priorizan Derecho Disciplinario, instrucción y Derecho Probatorio por su conexión directa con las funciones de apoyo en instrucción, práctica/recaudo de pruebas y despachos comisorios.
- Se incorpora Derecho Constitucional, Administrativo y Procesal, PGN y Ministerio Público, función preventiva/intervención, contratación, anticorrupción, ordenamiento territorial, gestión pública, calidad, gestión documental, atención, ofimática y análisis de datos.
- Se crea una especialización aplicada para Ingeniería de Sistemas: calidad de datos, accesos, logs, autenticación, bases de datos, correo, metadatos, hash, preservación digital e informe técnico, separando hallazgo técnico, inferencia y valoración jurídica.
- Se entrenan exclusivamente las seis competencias comportamentales indicadas por el perfil 3PU-15.
- M75–M79 queda como ruta condicional de Economía/Hacienda Pública y Fuerza Pública; se excluye del banco de examen predeterminado hasta contar con una razón oficial para priorizarlo.

### Arquitectura multi-curso
- Curso, módulos, lecciones, fuentes, plan de estudio, práctica general, diagnóstico, adaptativo, simulacros, cuaderno de errores, progreso, Inicio, Ajustes y navegación dejan de depender de un único curso hardcodeado.
- `practiceConfig` define por curso núcleo, transversal, diagnóstico, examen, estudio, prioridad adaptativa y disponibilidad de laboratorios integradores.
- La navegación contextual conserva `?course=` para evitar que práctica o progreso cambien de convocatoria al navegar desde un curso.
- Los laboratorios integradores existentes permanecen deliberadamente exclusivos de DIAN mientras se diseñan expedientes encadenados propios para Procuraduría.

### Aprendizaje jurídico y técnico
- Nuevo bloque `decision-simulator` con decisión A/B/C y feedback posterior, reutilizable en lecciones jurídicas y técnicas.
- Se agregan apoyos editoriales específicos dentro de módulos críticos: mapa de las 11 funciones, diccionario jurídico mínimo, arquitectura de proceso, ruta desde noticia disciplinaria, pilares probatorios, calidad de información, lectura de logs e informe técnico informático.
- El lector de voz reconoce los nuevos bloques sin revelar racionales de respuesta antes de que el estudiante decida.

- El simulador jurídico presenta las opciones en un orden determinista por escenario y el lector utiliza exactamente ese mismo orden A/B/C, evitando patrones de posición sin desalinear audio e interfaz.
- Las preguntas avanzadas de Procuraduría ya no se marcan artificialmente como integradoras: `integrated` queda reservado para futuros casos que relacionen realmente varios módulos.

### Auditoría
- Se añade `tests/content/procuraduria-course-integrity.test.ts` para validar snapshot, IDs, relaciones, fuentes, preguntas, checkpoints, aprendizaje activo, rutas condicionales y especialización técnica.
- Se actualizan las pruebas de selección de preguntas y narración para operar sobre DIAN y Procuraduría.
- Se documenta el currículo y la matriz función → habilidad → módulos en `docs/11-procuraduria-104-2026-curriculum.md`.

## 2026.09.13-alpha.6

### Preparación para repositorio público
- Se añade `LICENSE` con licencia MIT para el código original de Umbral.
- Se añaden `NOTICE.md` y `THIRD_PARTY_NOTICES.md` para separar claramente código propio, materiales oficiales y recursos de terceros.
- Se documenta que Google Sans permanece en `public/fonts/` por decisión del propietario, pero sus binarios no quedan relicenciados bajo MIT y cada redistribuidor debe verificar sus derechos de uso/distribución.
- `README.md` incorpora aviso de independencia frente a DIAN/CNSC y límites de la licencia.
- `package.json` incorpora descripción pública, licencia y palabras clave del proyecto.

- Se agrega `workbox-window@7.4.1` como dependencia de desarrollo directa, requerida por `virtual:pwa-register/react`; corrige el fallo de Rolldown/Vite 8 al resolver el registro PWA bajo instalaciones pnpm estrictas.

### Correcciones de TypeScript para despliegue
- Se corrigen errores provocados por `noUncheckedIndexedAccess` y `exactOptionalPropertyTypes` en preguntas transversales, simuladores, diagnóstico, simulacros y navegación.
- Los simuladores ahora resuelven de forma segura el escenario activo sin asumir que un acceso por índice siempre existe.
- Las permutaciones de preguntas, opciones y secuencias evitan asignaciones potencialmente `undefined` durante los intercambios.
- Se corrigen props opcionales (`explanation`, `firstLessonId`, `end`, `reason` y `case`) para respetar la configuración estricta del proyecto.
- Se añaden guardas explícitas en diagnóstico, perfil de simulacro y selección ponderada para evitar estados imposibles durante compilación y ejecución.
- El helper de preguntas transversales valida los identificadores A/B/C antes de construir cada pregunta.


### Revisión de suficiencia editorial CT-CR-3007
- Se reaudita el contenido contra las 11 funciones esenciales y las competencias funcionales básicas de la ficha CT-CR-3007; el volumen actual se considera suficiente para una primera versión y se prioriza precisión sobre crecimiento artificial.
- `m0-l1` incorpora una matriz función → módulo para que el estudiante vea exactamente dónde se entrena cada función esencial, incluyendo ámbito Central/Seccional y la diferencia entre ámbito de aplicación y competencia concreta.
- `m0-l3` elimina el texto obsoleto sobre módulos “en preparación” y separa la ruta principal M0–M23 del bloque complementario M24–M28.
- `m7-l9` desarrolla expresamente auditoría, capacitación, verificación de requisitos, seguimiento y sanción a EAR, evitando reducir toda la función a control sancionatorio.
- Se añade `docs/10-content-review-ct-cr-3007.md` con la matriz de cobertura y el criterio editorial de no aumentar teoría sin un vacío verificable.


- En móvil, el lector flotante se reduce a un botón circular de solo icono y se posiciona por encima de la barra de navegación inferior para no cubrir opciones; se elimina el emoji y cualquier texto visible del botón.

- El lector en voz alta deja de ocupar espacio dentro del flujo de lectura y pasa a un botón flotante inferior derecho; al pulsarlo se despliega el panel configurable con voz, velocidad, progreso y controles.

### Lectura en voz alta por lección
- Todas las lecciones incorporan un lector nativo basado en Web Speech API, sin dependencia adicional ni envío de contenido a servicios externos.
- El lector permite reproducir, pausar, continuar y detener la narración, con progreso por fragmentos para evitar cortes en textos extensos.
- Cada usuario puede elegir voz disponible en su dispositivo y velocidad entre 0.75× y 1.5×; ambas preferencias se conservan en `umbral:settings:v1`.
- La narración incluye contenido pedagógico, pasos, tablas, procesos, actividades y opciones de checkpoints, pero omite explicaciones y racionales que revelarían respuestas antes de contestar.
- La lectura se cancela automáticamente al cambiar de lección o abandonar la vista.

### Corrección de desarrollo local, visor y CSP
- Se corrige el error de runtime del visor de infografías: `SearchMinus`/`SearchPlus` no forman parte de los exports disponibles en la versión instalada de `lucide-react`; se sustituyen por `Minus`/`Plus` y `Maximize2`.
- En desarrollo local se desregistran service workers antiguos y se limpian caches PWA de Umbral/Workbox para evitar que una versión de producción previa controle `localhost:5173` durante Vite.
- Se añade `favicon.ico` real para eliminar la petición 404 automática del navegador.
- Netlify incorpora una CSP explícita y compatible con la PWA (`script-src 'self'`, worker local, imágenes/font local y estilos inline requeridos por la UI), junto a las cabeceras de seguridad existentes.
- Los avisos `script-src 'none'` no se originaban en el `index.html`, Vite ni `netlify.toml` actuales; la limpieza de SW/caché evita el caso controlable desde la aplicación y la CSP de producción queda declarada de forma explícita.

### Integración contextual de infografías en lecciones
- El apoyo visual insertado en lecciones ahora abre un visor ampliado con fondo modal, zoom, restablecimiento y cierre, para estudiar los detalles sin salir de la lección.
- Se confirma la eliminación del bloque tipo “Apoyos rápidos antes de practicar” en `/practice`, manteniendo allí solo material funcional de entrenamiento.
- Se retiran las secciones generales de infografías en Curso, Módulo y Práctica para evitar piezas sueltas fuera del flujo real de estudio.
- Las infografías pasan a mostrarse dentro de lecciones concretas mediante `LessonSupportGraphic`, justo después del encabezado y antes del contenido de lectura.
- Se generan cuatro nuevas piezas de apoyo: MIPG vigente, ruta de la actuación administrativa, ciclo EAR y ruta del crédito fiscal en concurso.
- El catálogo de apoyos visuales se reorganiza por lección en `src/lib/supportGraphics.ts`, alcanzando diez recursos contextuales para estudio.
- `docs/09-infographic-support.md` se actualiza para documentar la ubicación puntual de cada recurso dentro del curso.

### Infografías de apoyo temático
- Se agregan seis recursos gráficos de estudio en `public/media/infographics`, optimizados a WebP y alineados con el curso DIAN 2676.
- La vista del curso incorpora la sección `Recursos gráficos para repaso rápido` con el mapa general y cinco apoyos temáticos adicionales.
- La vista de módulo ahora muestra un apoyo visual contextual cuando el tema principal coincide con estado de cuenta, cobro persuasivo/coactivo, cobro coactivo, devoluciones o técnica PJS.
- `/practice` incorpora la sección `Apoyos rápidos antes de practicar` para reforzar PJS, lectura de estado de cuenta y distinción entre rutas de cobro antes del banco general.
- Se crea `SupportGraphicSection` como componente reusable y `src/lib/supportGraphics.ts` como catálogo central de metadatos y asignación por módulo.
- `docs/09-infographic-support.md` documenta rutas, ubicación funcional y criterio pedagógico de integración.

### Sistema visual generado e integración editorial
- Se integra el nuevo conjunto de marca y gráficos editoriales de Umbral sin reemplazar la información real de la aplicación por texto sintético de las composiciones.
- `BrandMark` utiliza el emblema generado con transparencia, manteniendo el wordmark tipográfico real para legibilidad en claro y oscuro.
- Inicio incorpora el banner de plataforma como arte de fondo recortado; la capa de contenido real permanece por encima y conserva contraste.
- El curso DIAN 2676 incorpora una pieza editorial dedicada en su hero, con recorte responsive y sin convertir la imagen en fuente curricular.
- Práctica y Progreso incorporan visuales propios como ambientación; en Progreso la imagen se atenúa para evitar que cifras o etiquetas sintéticas compitan con las métricas calculadas por la app.
- Ajustes incorpora una sección PWA/identidad con el visual multidispositivo, wordmark y variantes de icono.
- Los iconos PWA 192/512, maskable y Apple Touch se regeneran desde la nueva identidad; se añaden favicons claro/oscuro.
- Todos los assets editoriales se optimizan a WebP y quedan cubiertos por el precache de Workbox.
- `docs/08-generated-media.md` documenta usos, rutas y la regla de no tratar texto generado dentro de imágenes como contenido oficial.

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
