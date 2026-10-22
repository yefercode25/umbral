# Umbral DIAN 2676 · Regeneración de Assets Visuales y Atlas Interactivo (21 de octubre de 2026)

## Alcance de la actualización incremental

1. **Regeneración integral de todos los assets visuales existentes (excepto logos e iconos de marca)** bajo la línea visual táctil y redondeada de Umbral (`#fffdf9`, tarjetas con borde inferior de profundidad, tipografía `Google Sans` y paleta semántica de alto contraste), conservando exactamente los mismos nombres y rutas:
   - `public/media/editorial/`: `home-platform.webp`, `course-dian-2676-cover.webp`, `course-dian-2676.webp`, `practice-adaptive.webp`, `progress-overview.webp`, `pwa-everywhere.webp` y `course-procuraduria-104-2026.webp`.
   - `public/media/lesson-support/`: las 19 infografías existentes de DIAN/plataforma (`course-map.webp`, `mipg-dimensions.webp`, `cpaca-route.webp`, `administrative-act-stages.webp`, `dian-structure-levels.webp`, `tax-imposition-theory.webp`, `account-checklist.webp`, `ear-cycle.webp`, `extensive-control.webp`, `persuasive-vs-coactive.webp`, `payment-facilities-guarantees.webp`, `coactive-route.webp`, `precautionary-measures.webp`, `concursal-credit-route.webp`, `refunds-route-v2.webp`, `refunds-route.webp`, `document-management-traceability.webp`, `pjs-method.webp`, `data-decision-foundations.webp`) y las 9 de Procuraduría.
   - `public/media/infographics/`: las 6 infografías sincronizadas (`account-checklist.webp`, `coactive-route.webp`, `course-map.webp`, `persuasive-vs-coactive.webp`, `pjs-method.webp`, `refunds-route.webp`).
   - Los archivos en `public/media/brand/` y `public/icons/` (logos e iconos de marca) se conservaron sin modificación.

2. **Nuevos mapas conceptuales e infografías DIAN 2676 (`public/media/lesson-support/`)** para cubrir todos los módulos (`M0` a `M28`) y las 9 unidades (`U0` a `U8`):
   - `goa-2676-exam-blueprint.webp` (Arquitectura oficial GOA 19/10/2026, corte 19/06/2026, pesos, PJS 3 opciones, Likert 4 niveles y jornada de 5 horas).
   - `prescription-interruption-suspension.webp` (Prescripción 5 años Art. 817 ET: inicio, interrupción Art. 818 vs. suspensión y pago válido de deuda prescrita Art. 819).
   - `coactive-exceptions-defense.webp` (Las 7 excepciones taxativas del Art. 831 ET, 2 de solidario/garante, término de 15 días, fallo en 1 mes y control jurisdiccional Art. 835).
   - `refunds-saldos-inadmision-matrix.webp` (Saldo a favor vs. pago en exceso/no debido y matriz Inadmisión Art. 858 vs. Rechazo Definitivo Art. 857).
   - `ley-2586-aduanas-transicion.webp` (Ley 2586 del 19/06/2026: corte GOA inclusivo, sustitución D.L. 920/2023 y transición Art. 112).
   - `dian-systems-security-traceability.webp` (Sistemas de información, accesos, reserva tributaria Art. 583 ET y calidad de datos).
   - `dian-competencies-integrity-merf.webp` (Competencias comportamentales MERF CT-CR-3007 niveles 3 y 4, integridad y autoinforme Likert).
   - `excel-logic-quantitative-toolkit.webp` (Excel aplicado a cartera, lógica proposicional, conjuntos y probabilidad).

3. **Nuevos componentes y mejoras visuales interactivas en la aplicación**:
   - `src/components/learning/DianVisualAtlas.tsx` (+ `.module.css`): centro visual interactivo con 4 vistas (Mapa Conceptual Interactivo de 6 nodos de Cartera/Recaudo/Cobro/Devoluciones, Gráficas de Ponderaciones GOA + Simulador Gráfico de Imputación Proporcional Art. 804 ET / Tope de Embargo Art. 838 ET + Escalímetro de 12 Términos Legales, 5 Matrices Comparativas PJS y Galería filtrable de las 27 láminas visuales).
   - `src/features/library/LibraryPage.tsx`: incorpora la pestaña **Atlas Visual y Gráficas** (`?tab=mapas`) e integra infografías ampliables en las pestañas de **Organigrama** y **Procesos** (10 rutas operativas).
   - `src/components/learning/LearningPath.tsx` y `content/courses/dian-2676-gestor-ii/modules/modules.ts`: integra miniaturas de mapa visual y visor modal ampliable en los encabezados de las 9 secciones del curso DIAN.
   - `src/features/home/HomePage.tsx`, `src/features/courses/CoursePage.tsx` y `src/features/courses/ModulePage.tsx`: radar visual de avance por bloques curriculares DIAN, portada visual interactiva e infografía de apoyo contextual en cada vista de módulo.
   - `src/features/progress/PracticeAnalyticsPanel.tsx`: gráficos de anillo SVG (cobertura y precisión), barra visual del intervalo de confianza de Wilson (95%) y barras visuales de evolución de simulacros.
