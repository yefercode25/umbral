# Umbral — PWA de estudio

Plataforma de estudio **mobile-first, instalable y offline-first** para preparación progresiva de convocatorias públicas. La biblioteca es multi-curso y actualmente contiene **DIAN 2676 · Gestor II · CT-CR-3007** y **Procuraduría 104-2026 · Profesional Universitario 3PU-15**.

> **Copia maestra:** esta carpeta es la única base de trabajo. Los cambios se aplican sobre los mismos archivos; no se mantienen implementaciones paralelas.

> **Proyecto independiente:** Umbral no está afiliado, patrocinado, avalado ni publicado por la DIAN, la CNSC, la Procuraduría General de la Nación ni otra entidad pública. El contenido de preparación combina fuentes oficiales citadas con interpretación pedagógica y material de práctica propio.

## Experiencia visual · octubre 2026

Umbral ofrece una ruta de aprendizaje con nodos de unidades, módulos y lecciones, selector de curso persistente, controles táctiles, panel de avance y modo móvil inmersivo. La inspiración visual es Duolingo, sin vidas ni corazones: todas las lecciones publicadas son accesibles. Los progresos DIAN y Procuraduría continúan separados, con la misma clave `umbral:progress:v1`. Consulta `docs/12-migracion-visual-duolingo-2026-10-20.md`.

## Estado actual · biblioteca multi-curso

### Procuraduría 104-2026 · Profesional Universitario 3PU-15 · alpha.2

- **17 unidades, 85 módulos y 255 lecciones** con progresión fundamentos → aplicación → avanzado.
- **880 preguntas**: 850 preguntas base + 30 decisiones integradoras multi-módulo, respaldadas por **37 fuentes** registradas.
- Cobertura explícita de las 11 funciones del empleo, Derecho Constitucional, Administrativo, Procesal, Disciplinario y Probatorio, contratación, anticorrupción, ordenamiento territorial, gestión/documentación y herramientas comunes.
- Núcleo prioritario en instrucción disciplinaria y Derecho probatorio.
- Doble ruta para Ingeniería de Sistemas: evidencia técnica aplicada al expediente (M60–M64) + fundamentos profesionales de arquitectura, redes, seguridad, software y gobierno de datos (M80–M84).
- Las seis competencias comportamentales exactas del perfil se entrenan de forma separada.
- **6 laboratorios integradores propios** mantienen un expediente común durante cinco decisiones y cruzan instrucción, prueba, prevención, contratación, competencia y sistemas.
- M75–M79 se conservan como especializaciones condicionales y no entran por defecto al banco general de examen.
- Diagnóstico, práctica, adaptativo, simulacros, progreso, lector de voz y plan de estudio funcionan con estado independiente por curso.

Consulta `docs/11-procuraduria-104-2026-curriculum.md` para la matriz función → habilidad → módulos y la auditoría curricular.

### DIAN 2676 · Gestor II · versión vigente 2026.10.12

- 9 unidades y 29 módulos (M0–M28).
- **309 lecciones publicadas**, todas con al menos una actividad de recuperación, checkpoint, secuencia o simulador.
- **759 objetos `Question` reales** enlazados a **100 fuentes**.
- 8 laboratorios de casos integradores con 40 decisiones PJS encadenadas.
- simuladores interactivos de prescripción, cobro coactivo, estado de cuenta, ejecución sobre bienes, devoluciones, procesos concursales y perfil comportamental;
- diagnóstico, práctica adaptativa, cuaderno de errores, preguntas guardadas y dominio por habilidades;
- simulacros configurables de 10/20/40 ítems funcionales PJS + modalidad de repaso mixto + simulacro transversal complementario de 20 preguntas;
- los simulacros funcionales reservan cupos a preguntas integradoras y mantienen cobertura funcional en las sesiones amplias;
- navegación con preguntas pendientes y marcadas para revisar;
- corrección posterior con desempeño por módulo, explicación y enlaces a fuentes;
- persistencia local con exportación/importación de progreso;
- PWA instalable, navegación SPA con restauración al inicio, tema sistema/claro/oscuro y UI responsive.
- Sistema visual editorial integrado con iconos PWA, marca y piezas de apoyo visual contextual insertadas en lecciones clave; las imágenes sirven como refuerzo didáctico y nunca como fuente oficial de contenido o métricas.

La auditoría de integridad valida IDs, relaciones unidad→módulo→lección, checkpoints, fuentes, opciones, respuestas correctas, metadatos de preguntas integradoras y laboratorios de caso. Alpha.6 añade además control de aprendizaje activo por lección, ejercicios de secuencia, neutralización de patrones visuales de respuesta, un Error Boundary global y un hardening previo a despliegue de scroll, contraste y PWA.

### Evolución del banco

- Alpha.4: **439** preguntas.
- Alpha.5: +100 preguntas transversales → **539**.
- Alpha.6: +76 preguntas verificadas de profundidad teórica → **615 preguntas reales** cargadas en `course.questions`.

Alpha.6 no persigue volumen por sí mismo: expande teoría donde la auditoría encontró baja densidad, refuerza fuentes oficiales y obliga a que **todas las lecciones publicadas tengan aprendizaje activo**.

## Principios

- Mobile-first; desktop sin degradación.
- Progreso crítico persistido en `localStorage` con esquema versionado y migraciones.
- Contenido disponible offline mediante PWA/service worker.
- UI propia: Radix Primitives sin estilos + **CSS Modules y CSS nativo con design tokens**. No Tailwind.
- Accesibilidad WCAG 2.2 AA como mínimo.
- Todo contenido evaluable referencia fuentes y fecha de verificación.
- Separación entre plataforma, cursos, contenido y motor de evaluación.
- Sin backend obligatorio en V1. Exportación/importación de progreso para respaldo.
- El currículo diferencia contenido oficial, interpretación pedagógica y ponderaciones internas de Umbral.


## Bloque transversal complementario · M24–M28

La Unidad 8 incluye **Ofimática y productividad digital, Excel aplicado, interpretación y análisis de datos, razonamiento lógico/conjuntos y matemática práctica/probabilidad**. El bloque está marcado pedagógicamente como **complementario y provisional** con carácter complementario y sujeto a los indicadores particulares de la inscripción. La GOA del concurso se publicó el 8 de octubre de 2026.

- M24–M26 tienen prioridad práctica mayor por la mención expresa de **Herramientas Informáticas** en el MERF y por su utilidad directa para trabajar con información.
- M27–M28 cubren lógica, conjuntos, porcentajes y probabilidad como preparación prudente; no se presentan como ejes oficiales confirmados por CNSC.
- El filtro `Transversal` en `/practice` separa las preguntas de M24–M28 del banco principal.
- El simulacro `Transversal complementario` toma 20 preguntas únicamente de M24–M28.
- La práctica adaptativa aplica una penalización inicial ligera a M24–M28 para que el contenido provisional no desplace por defecto el núcleo CT-CR-3007; los errores reales sí pueden volver a elevar su prioridad.

## Entrenamiento integrador

`/practice/cases` contiene ocho laboratorios que conservan un expediente común durante cinco decisiones. Los casos cubren:

1. estado de cuenta → normalización → exigibilidad → cobro;
2. facilidad de pago → saldo a favor → compensación/devolución;
3. conciliación de una EAR → corrección → eventual sanción;
4. título y defensa → cautela → secuestro/ejecución;
5. crédito fiscal dentro de un proceso concursal;
6. devolución con marcas de riesgo y sustanciación;
7. campaña de control extensivo;
8. accesos, mínimo privilegio e integridad.

Las preguntas de estos laboratorios también forman parte del banco general y de los simulacros funcionales. Se identifican mediante `integrated`, `scenarioId` y `relatedModuleIds`.

## Validación técnica

La configuración de despliegue deja la PWA preparada para Netlify: fallback SPA, manifest, iconos `any`/`maskable`, Apple Touch Icon, precache del contenido y fuentes, actualización por prompt y `sw.js` sin caché HTTP persistente. El precache admite bundles de hasta 8 MiB para evitar que el banco de contenido quede fuera del modo offline por el límite predeterminado de Workbox.

En este entorno la instalación completa de dependencias puede depender de conectividad al registry. Hasta que `npm install` finalice y se ejecute el pipeline completo, no se debe confundir la auditoría estática/transpilación con un build Vite validado. Antes del despliegue definitivo ejecutar:

```bash
npm install
npm run lint
npm run check:contrast
npm run typecheck
npm run test
npm run build
```

## Documentos

- `docs/01-product-and-brand.md`
- `docs/02-architecture.md`
- `docs/03-design-system.md`
- `docs/04-study-plan-dian.md`
- `docs/05-data-and-progress.md`
- `docs/06-content-audit-alpha6.md`
- `docs/07-ui-audit-alpha6.md`
- `docs/08-generated-media.md`
- `docs/09-infographic-support.md`
- `docs/10-content-review-ct-cr-3007.md`
- `docs/11-procuraduria-104-2026-curriculum.md`
- `NOTICE.md`
- `THIRD_PARTY_NOTICES.md`
- `LICENSE`
- `CHANGELOG.md`

## Fuente tipográfica

El proyecto mantiene actualmente los binarios de **Google Sans** dentro de `public/fonts/`, por decisión del propietario del proyecto. Google Sans es un recurso de terceros y **no queda cubierto ni relicenciado por la licencia MIT de Umbral**.

La inclusión de esos archivos en este repositorio no concede por sí sola derechos adicionales de uso o redistribución. Quien clone, haga fork, empaquete o redistribuya el proyecto es responsable de verificar que cuenta con la autorización o términos aplicables para esos binarios; de no ser así, debe retirarlos o reemplazarlos por una tipografía cuya licencia sea compatible con su uso. Umbral mantiene fallbacks de sistema para que la aplicación siga siendo funcional sin esos archivos.

Consulta `THIRD_PARTY_NOTICES.md` para el detalle de materiales de terceros.

## Licencia

El código original de Umbral se publica bajo **MIT License**. La licencia no se extiende automáticamente a fuentes, marcas, logos, documentos oficiales, normativa, referencias externas u otros materiales de terceros. Consulta `LICENSE`, `NOTICE.md` y `THIRD_PARTY_NOTICES.md`.
