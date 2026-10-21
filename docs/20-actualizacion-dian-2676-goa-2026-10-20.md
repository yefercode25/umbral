# Umbral · DIAN 2676 · revisión GOA y corte normativo — 20/10/2026

## Alcance y método

Revisión **exclusiva** del curso DIAN 2676, Gestor II · CT-CR-3007. No se modificaron los contenidos del curso de Procuraduría, las imágenes, la aplicación PWA ni los contratos de progreso persistente.

Fuentes consultadas:

1. Aviso oficial CNSC del **19/10/2026** sobre actualización por corte normativo: https://www.cnsc.gov.co/node/69688 — **comprobado directamente**.
2. Página oficial CNSC de **Guías** del proceso: https://www.cnsc.gov.co/node/69406 — **comprobado el enlace público al archivo** `dian_2676_guia_orientacion_aspirante_19102026.pdf`.
3. PDF actualizado enlazado por la CNSC: https://www.cnsc.gov.co/sites/default/files/2026-10/dian_2676_guia_orientacion_aspirante_19102026.pdf — **identificado, pero no descargado ni leído íntegramente**: la descarga devolvió error desde las herramientas disponibles. La publicación del enlace oficial **no equivale** a haber verificado el texto dentro del PDF.
4. GOA anterior y su revisión comentada sobre duración, PJS y Likert: https://www.meritaapp.com/guias/guia-orientacion-pruebas-escritas-dian-2676 — **fuente secundaria** basada en la edición ajustada del 16/10, no en la edición íntegra del 19/10.
5. MERF CT-CR-3007 suministrado por el usuario: `/mnt/data/DIAN-2026.pdf` (2 páginas), con funciones, competencias y perfil del empleo.

## Matriz de cambios

| Dato | Estado anterior en Umbral | Tratamiento al 20/10/2026 |
|---|---|---|
| Versión de GOA | 08/10/2026 | Actualizar fuente visible al PDF enlazado por CNSC con nombre `19102026` y añadir aviso CNSC 19/10. |
| Cambio normativo | Frase categórica «antes del 19 de junio de 2026» | Señalar explícitamente que CNSC comunicó una **actualización del corte**; no definir todavía si las normas expedidas exactamente el 19/06 están incluidas hasta disponer del párrafo de la edición de 19/10. |
| Duración | Ambigüedad cuatro horas y hora de cierre | Edición ajustada 16/10: **cinco horas** según revisión enlazada; comprobar que permanece en 19/10 y ratificar citación SIMO. |
| Fecha prueba | 08/11/2026 | Mantener como fecha programada en ediciones de octubre, sujeta a citación y avisos oficiales. |
| Temario personal | No aportado | Mantener estado provisional. La sección de indicadores depende del portal del operador y número de inscripción. |
| PJS | Tres alternativas con clave objetiva | Conservar el entrenamiento y aclarar que sus resultados no equivalen al puntaje CNSC. |
| Comportamentales / Integridad | Likert de cuatro niveles | Mantener sin clave artificial; contextualizar controles de consistencia y deseabilidad social. |
| Complementos | Excel, ofimática, estadística, probabilidad | Conservar como complementarios no confirmados como ejes particulares. |
| MIPG | Versiones 6.1 (febrero) y 7 (agosto) diferenciadas | Conservar contraste histórico y evitar proyectar la versión de agosto hacia el marco de junio. |

## Riesgo y acción pendiente

**No puede darse por verificado el alcance exacto de la versión de 19/10/2026 sin leer su apartado 4.3.** El aviso oficial indica que hubo una actualización sobre corte normativo, pero no expone el texto de la modificación. No se atribuyeron cambios de preguntas a normas aduaneras, tributarias o administrativas que no se pudieran cotejar. Si se aporta el PDF o vuelve a estar accesible, el siguiente paso es comparar el párrafo literal del corte con la edición anterior y revisar las preguntas o lecciones realmente alcanzadas, preservando identificadores de contenido existente.

## Cambios implementados

- `content/courses/dian-2676-gestor-ii/course.ts`: portada informativa, aviso al estudiante, versión y fecha.
- `content/courses/dian-2676-gestor-ii/sources/sources.ts`: enlace al PDF oficial 19/10, fuente adicional del aviso CNSC y notas de verificabilidad.
- `content/courses/dian-2676-gestor-ii/modules/officialGuide2026Lesson.ts`: contenidos sobre jerarquía documental, verificación del corte, módulos a contrastar, formato de las tres pruebas, jornada, cronograma y caso práctico interactivo.
- `content/courses/dian-2676-gestor-ii/course-notes.md`: trazabilidad y límites.
- `src/lib/supportGraphics.ts`: etiqueta únicamente la infografía MIPG asociada a `m2-l6` como **versión 7 de agosto** (seis dimensiones, posterior al corte); el material visual existente se conserva, pero se evita confundirlo con la versión 6.1 de febrero (siete).
- `tests/content/course-integrity.test.ts`: versión y 101 fuentes sin alterar las cifras de lecciones o preguntas.

Se preservan **9 unidades, 29 módulos, 309 lecciones y 759 preguntas**. Se suma **una fuente oficial**, para un total de 101. No se modificaron las preguntas existentes: evitar asignar resultados históricos a un enunciado nuevo con el mismo ID. Tampoco se modificaron los contenidos de Procuraduría.
