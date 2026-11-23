# Auditoría UX · Menos repetición, más estudio (noviembre de 2026)

## Problema observado
En cada visita al módulo o lección se presentaban nuevamente las mismas láminas informativas, porque el catálogo `getLessonSupportGraphic` tiene un fallback por módulo y las vistas `ModulePage`, `CoursePage` y `LearningPath` volvían a mostrar imágenes asociadas. Esta reiteración desplazaba las lecciones y dificultaba comenzar a estudiar, especialmente en ventanas estrechas y móviles. Los banners de Inicio, Práctica y Progreso también ocupaban espacio antes de las tareas principales.

## Criterio de experiencia
1. **Primero la tarea**: continuar una lección, abrir el módulo o responder una pregunta.
2. **Visuales bajo demanda**: conservar todas las infografías originales y sus rutas públicas; consultarlas en Biblioteca > Atlas Visual, donde existe visor, mapas, gráficas y comparativas.
3. **Evitar redundancia**: no duplicar portadas, miniaturas y apoyos gráficos a lo largo del mismo recorrido.
4. **Progreso real**: conservar IDs, estado persistente, motor de preguntas, fuentes normativas, notas, casos y estructura de los cursos.
5. **Mejor escaneo**: lista vertical compacta de lecciones con número, título, duración y estado, sin zigzag ni tarjetas gráficas gigantes.
6. **Práctica contextual**: el botón «Practicar» de un módulo filtra el banco por ese módulo mediante `?course=<slug>&module=<id>`. El filtro puede cambiarse sin perder el módulo y existe un enlace para regresar al banco completo.
7. **Opciones secundarias sin distracción**: diagnóstico, simulacros, práctica adaptativa, cuaderno de errores, casos y gimnasio se conservan bajo «Otras formas de practicar».

## Alcance de la modificación
- Inicio: retira la imagen hero redundante, el radar largo de bloques y accesos duplicados; mantiene acceso directo a la próxima lección, métricas y ruta.
- Curso: retira portada, lámina repetida y CTA duplicado del Atlas; mantiene los enlaces a plan, biblioteca, fuentes y práctica.
- Ruta por unidades: oculta miniaturas y modales redundantes; no modifica el orden ni la accesibilidad de los módulos.
- Módulo: elimina la infografía automática y el enlace repetitivo al Atlas; muestra lecciones inmediatamente después del resumen y habilita práctica contextual.
- Lección: oculta la imagen de apoyo repetida, manteniendo el contenido pedagógico, ejercicios, narrador y autocomprobación.
- Práctica: elimina banner editorial, presenta preguntas y filtros al comienzo y pliega acciones secundarias.
- Progreso: retira imagen editorial decorativa; mantiene indicadores, analítica y desglose de módulos.

## No se modificó
- `content/`, bancos de preguntas, respuestas, fuentes, unidades, lecciones o identificadores.
- `src/stores/`, claves de `localStorage`, respaldos, migraciones ni cálculo de dominio.
- `public/`, imágenes, fuentes, manifest PWA, rutas de recursos, service worker ni despliegue.

## Validación pendiente en entorno con dependencias
Ejecutar `npm run lint`, `npm run typecheck`, `npm run test`, `npm run check:contrast`, `npm run build` y, si el navegador está configurado, `npm run e2e`.

Comprobación manual:
1. Inicio y curso DIAN y Procuraduría, tamaños 360, 390, 768 y 1280 px: lecciones visibles sin infografías al ingresar.
2. Vista de módulo: orden completo, estado y avance, acceso correcto a cada lección.
3. Lección: narración, actividades, guardado de nota, marcado y progreso sin imagen repetida.
4. Botón de práctica del módulo: ruta `/practice?course=...&module=...`, lista filtrada y retorno al banco completo.
5. Filtros, mezcla de preguntas, diagnóstico, simulacros, prácticas adaptativas, cuaderno y gimnasio desde el desplegable.
6. Atlas y biblioteca: las imágenes originales, visor y categorías siguen funcionando.
7. Tema claro/oscuro, teclado, contraste, PWA offline y respaldo de estado.

**Estado:** cambios de código auditados por inspección; la compilación y pruebas automáticas no se han ejecutado en esta sesión.
