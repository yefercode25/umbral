# Umbral DIAN 2676 · Regeneración de Assets Visuales, Atlas Interactivo y Gimnasio de Decisión (21–22 de octubre de 2026)

## Alcance de la actualización incremental

1. **Regeneración integral de todos los assets visuales existentes (excepto logos e iconos de marca)** bajo la línea visual táctil y redondeada de Umbral (`#fffdf9`, tarjetas con borde inferior de profundidad, tipografía `Google Sans` y paleta semántica de alto contraste), conservando exactamente los mismos nombres y rutas:
   - `public/media/editorial/`: `home-platform.webp`, `course-dian-2676-cover.webp`, `course-dian-2676.webp`, `practice-adaptive.webp`, `progress-overview.webp`, `pwa-everywhere.webp` y `course-procuraduria-104-2026.webp`.
   - `public/media/lesson-support/`: las 19 infografías existentes de DIAN/plataforma y las 9 de Procuraduría.
   - `public/media/infographics/`: las 6 infografías sincronizadas (`account-checklist.webp`, `coactive-route.webp`, `course-map.webp`, `persuasive-vs-coactive.webp`, `pjs-method.webp`, `refunds-route.webp`).
   - Los archivos en `public/media/brand/` y `public/icons/` (logos e iconos de marca) se conservaron sin modificación.

2. **Nuevos mapas conceptuales e infografías DIAN 2676 (`public/media/lesson-support/`)** para cubrir todos los módulos (`M0` a `M28`) y las 9 unidades (`U0` a `U8`):
   - `goa-2676-exam-blueprint.webp`
   - `prescription-interruption-suspension.webp`
   - `coactive-exceptions-defense.webp`
   - `refunds-saldos-inadmision-matrix.webp`
   - `ley-2586-aduanas-transicion.webp`
   - `dian-systems-security-traceability.webp`
   - `dian-competencies-integrity-merf.webp`
   - `excel-logic-quantitative-toolkit.webp`

3. **Centro Visual Interactivo (`src/components/learning/DianVisualAtlas.tsx`)**:
   - **Mapa Conceptual Interactivo de 6 Nodos Operativos CT-CR-3007**: conecta determinación/declaración, recaudo EAR e imputación proporcional (Art. 804 ET), control extensivo/persuasivo/facilidades (Art. 814 ET), exigibilidad/prescripción 5 años (Arts. 817–819 ET), cobro coactivo/excepciones/embargos (Arts. 823–843-2 ET) y concursal/devoluciones (Ley 1116 y Arts. 850–865 ET).
   - **Gráficas Interactivas**: ponderaciones GOA 19/10/2026 por modalidad, simulador visual de imputación proporcional (Art. 804 ET) y tope de embargo (Art. 838 ET), y escalímetro visual de los 12 términos legales más evaluados.
   - **5 Matrices Comparativas de Alto Contraste** y **Galería Filtrable de las 27 Infografías HD**.

4. **Gimnasio Interactivo de Decisión (`src/components/learning/DianInteractiveWorkout.tsx`, ruta `/practice/workout`)**:
   - **Laboratorio 1 · Expediente en Vivo (Árbol de Decisión Ramificado)**: 3 misiones encadenadas (Cartera/Coactivo al límite de prescripción, Devolución con inadmisión/investigación previa/compensación, e Insolvencia Ley 1116 + Reserva Art. 583 ET) con medidores dinámicos de reloj de prescripción, estado de cuenta, etapa procesal y porcentaje de blindaje jurídico.
   - **Laboratorio 2 · Inspector de Actos DIAN («Caza el Vicio Jurídico»)**: 4 borradores de resoluciones y oficios donde el aspirante audita cláusula por cláusula para detectar excesos en el límite de embargo (Art. 838 ET), giros sin compensación previa (Art. 861 ET), facilidades mayores a 1 año sin garantía (Art. 814 ET) o violaciones a la reserva tributaria (Art. 583 ET).
   - **Laboratorio 3 · Flashcards 3D y Duelo de Asociación Rápida**: mazo de recuperación activa con persistencia local (`umbral:dian-flashcards:v1`) y tablero interactivo 6×2 para emparejar actuaciones DIAN con su término o límite normativo exacto.
   - **Laboratorio 4 · Rayos X de un Reactivo PJS**: deconstructor metodológico con 5 lentes activables en vivo (*Hecho y Etapa*, *Competencia*, *Norma y Corte 19/06/2026*, *Soporte Documental* y *Anatomía de Distractores*).
   - **Laboratorio 5 · Calculadora y Laboratorio Numérico ET**: simulador multimoneda de imputación proporcional (Art. 804 ET) + tope de embargo (Art. 838 ET) y simulador interactivo de conjuntos ($|A \cup B|$, $|A - B|$, $|B - A|$) y probabilidad condicional $P(A|B)$.

5. **Interactividad Transversal en Preguntas y Lecciones**:
   - `src/components/learning/QuestionCard.tsx`: incorpora en todas las tarjetas de pregunta el botón **Tachar / Descartar Distractor (`✂️`)** por opción y el panel desplegable **Guía PJS (`🧭`)** con el filtro de 3 pasos previo a responder.
   - `src/components/learning/LessonQuickReview.tsx` (integrado en `LessonPage.tsx`): genera automáticamente tarjetas de autocomprobación activa a partir de los conceptos, reglas, trampas y artículos de cada lección, añade lista de autoverificación de dominio y bloc de apuntes mnemotécnicos persistente por lección (`umbral:lesson-notes:v1`).
