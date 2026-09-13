# Infografías de apoyo · Integración en Umbral

## Objetivo

Usar recursos gráficos como **apoyo dentro del estudio** del curso **DIAN 2676 · Gestor II**, evitando tratarlos como una galería suelta o como sustituto de las lecciones, preguntas, simuladores o fuentes oficiales.

## Assets incorporados

Los recursos quedaron agrupados en `public/media/lesson-support/`:

- `course-map.webp`
- `mipg-dimensions.webp`
- `cpaca-route.webp`
- `account-checklist.webp`
- `ear-cycle.webp`
- `persuasive-vs-coactive.webp`
- `coactive-route.webp`
- `concursal-credit-route.webp`
- `refunds-route.webp`
- `pjs-method.webp`

## Criterio de integración

La integración ya no se presenta como sección general tipo “atajo visual” en Curso o Práctica. En cambio, cada pieza aparece **dentro de la lectura de determinadas lecciones**, justo después del encabezado de la lección y antes del contenido principal.

Esto permite que la imagen funcione como:

- orientación rápida del tema;
- mapa mental previo a la lectura;
- apoyo visual durante el estudio;
- refuerzo del procedimiento o la comparación explicada en la lección.

## Ubicación actual por lección

- `m0-l3` → mapa del curso
- `m2-l6` → MIPG vigente
- `m4-l7` → ruta de la actuación administrativa
- `m6-l1` → checklist de estado de cuenta
- `m7-l9` → ciclo EAR
- `m10-l6` → cobro persuasivo vs. cobro coactivo
- `m11-l1` → ruta general del cobro coactivo
- `m14-l1` → ruta del crédito fiscal en concurso
- `m16-l1` → ruta básica de devoluciones y compensaciones
- `m21-l3` → método para resolver una PJS

## Implementación técnica

- Catálogo y mapeo por lección en `src/lib/supportGraphics.ts`.
- Nuevo componente `LessonSupportGraphic` en `src/components/learning/`.
- Integración en `src/features/lessons/LessonPage.tsx`.
- Se retira la inserción de infografías sueltas desde:
  - `src/features/courses/CoursePage.tsx`
  - `src/features/courses/ModulePage.tsx`
  - `src/features/practice/PracticePage.tsx`

## Regla pedagógica

Estas imágenes:

- complementan la comprensión;
- no reemplazan el contenido verificable;
- no deben tratarse como fuente normativa oficial;
- deben mantenerse contextualizadas dentro de la lección correspondiente.

## Interacción del usuario

Cada imagen de apoyo insertada en una lección ahora puede:

- abrirse en grande con clic;
- visualizarse en un visor modal;
- ampliarse o reducirse con botones;
- usar zoom con rueda del mouse;
- restablecerse rápidamente al 100 %.
