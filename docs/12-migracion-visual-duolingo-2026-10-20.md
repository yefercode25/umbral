# Umbral · Migración visual tipo Duolingo (20 de octubre de 2026)

## Alcance

Rediseño visual integral **sobre la copia maestra original**. El HTML de referencia `gemini-code-1792550768373.html` se usa exclusivamente como guía de lenguaje visual y de interacción: rutas nodales, módulos coloridos, botones táctiles con profundidad, tipografía redondeada, selector de curso y feedback claro. No se copia su motor de preguntas, su almacenamiento ni sus respuestas.

Se preservan los contenidos, IDs, rutas, bancos, fuentes, casos, modelos de dominio y registros de progreso de DIAN y Procuraduría.

## Cambios incluidos

- Tema general: tonos crema/blanco y superficies de tarjeta; paleta verde, azul, amarillo, morado y naranja; contraste ajustado para texto pequeño en botones y encabezados; sombras de profundidad en botones, tarjetas y elementos de selección; nuevo tratamiento tipográfico Fredoka + Nunito (Google Fonts cuando existe conectividad, Google Sans como respaldo offline).
- Estructura responsive: navegación fija a la izquierda en escritorio, barra inferior en móvil y panel contextual de progreso a la derecha cuando hay espacio. Vista de aprendizaje y práctica inmersiva sin navegación inferior durante sesiones específicas.
- Selector de curso visible en todas las pantallas principales mediante menú desplegable, además del explorador de biblioteca. Preferencia `activeCourseSlug` guardada en el mismo almacenamiento de ajustes `umbral:settings:v1`, sin migración destructiva y compatible con respaldos previos.
- Inicio convertido en ruta de aprendizaje del curso activo: secciones por unidad, nodos para cada módulo, estado completado/actual/pendiente, métricas, meta diaria y acceso directo a la próxima lección.
- Ficha de curso convertida en ruta de aprendizaje por unidad, conservando enlaces a plan, fuentes y práctica, avisos y estructura académica.
- Página de módulo convertida en ruta nodal de lecciones con acceso directo, duración, completitud y práctica.
- Todas las pantallas secundarias reciben adaptación del sistema de diseño: preguntas, evaluación, diagnóstico, práctica adaptativa, simulacros, casos integradores, cuaderno de errores, estadísticas, estudio, recursos de lección, narración, simuladores, fuentes y ajustes.
- Se mantienen los bloqueos derivados de la propia disponibilidad editorial (por ejemplo, un módulo sin lecciones publicadas); **no se introduce ninguna regla de desbloqueo gamificado**.

## Vidas: exclusión explícita

No se introduce un contador de corazones, ni límite de errores, ni espera, ni recarga de vidas. Las respuestas incorrectas siguen siendo oportunidades de aprendizaje y se mantienen en el cuaderno de errores original; las lecciones y módulos publicados son accesibles libremente.

## Permanencia de datos

- **Sin cambios** en `content/`, `tests/`, `src/types/` ni el contrato del almacén `umbral:progress:v1`.
- Se añade un campo de preferencia a `umbral:settings:v1`. El middleware de Zustand integra valores predeterminados cuando ese campo falta; no se requiere borrar ni reiniciar almacenamiento local.
- Los enlaces existentes, exportaciones y respaldos se mantienen. El esquema de `backup.ts` permite atributos adicionales de preferencias con `.passthrough()`.
- La estética no añade recompensas XP ficticias: el panel muestra lecciones completadas, aciertos reales, precisión y meta temporal derivadas del estado existente.

## Validaciones realizadas en este entorno

- Inspección de 68 archivos TS/TSX con parser de TypeScript: sin diagnósticos sintácticos.
- Comprobación de importaciones relativas a archivos locales: sin rutas rotas.
- Comprobación de referencias `styles.clase` frente a CSS Modules: sin referencias no resueltas.
- Inspección sintáctica de las 47 hojas CSS con tinycss2: sin errores de análisis.
- Comparación SHA-256 con el ZIP entregado: los 34 archivos en `content/`, los 9 de `tests/` y los 3 de `src/types/` están intactos.
- Búsqueda de lógica de vidas en `src/`: sin contador ni sistema de corazones.

**Límites:** El entorno carece de dependencias instaladas y de acceso al registro npm. No fue posible ejecutar `npm run build`, `npm run typecheck`, `npm run test` ni el navegador con la versión reconstruida. Estos controles deben realizarse en la máquina de desarrollo antes de publicar.

## Comprobación manual al integrar

1. Copiar y reemplazar los archivos del ZIP incremental sobre la raíz de la **misma copia maestra**, preservando los demás archivos y las carpetas `content/`, `public/` y las dependencias existentes.
2. Ejecutar `npm install` o instalar según `pnpm-lock.yaml` en un entorno con acceso a npm; luego `npm run typecheck`, `npm run test`, `npm run lint`, `npm run build` y `npm run dev`.
3. Verificar cambio DIAN ⇄ Procuraduría desde el selector móvil/escritorio, retorno a Inicio, refresco de página y progreso previo.
4. Abrir varios nodos de unidades/módulos/lecciones completados y pendientes; comprobar que todos los que tienen contenido publicado abren.
5. Probar respuestas correctas/incorrectas, práctica adaptativa, casos, diagnóstico y simulacro; confirmar ausencia absoluta de penalización por vidas.
6. Revisar 360/390/768/1024/1440 px, foco por teclado, contraste, tema oscuro, reducir movimiento y funcionamiento offline.
7. Reconstruir el `dist/` de producción: el directorio `dist/` antiguo que venía en el ZIP fuente **no debe publicarse sin recompilar**.

## Nota de autoría

Umbral conserva su identidad y es una plataforma educativa independiente. La inspiración visual de Duolingo no implica afiliación ni utilización de sus logotipos, recursos o personajes.
