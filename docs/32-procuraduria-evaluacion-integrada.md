# Evaluación dentro del módulo · Procuraduría 104-2026

Se utiliza el banco preexistente, sin crear ni eliminar preguntas. El flujo que debe seguirse es:
1. Lección 1, fundamentos: dos checkpoints conceptuales y situacionales del módulo.
2. Lección 2, aplicación: dos checkpoints sobre procedimiento y regla.
3. Lección 3, avanzado: evaluación integrada de tres situaciones de ese mismo módulo (dos transferencias y una situacional existente). Se omiten en pantalla los dos checkpoints genéricos del final de la tercera lección, para evitar repetir evaluaciones y sobrecargar.
4. Criterio: al menos 2/3 correctas en el cierre para marcar la tercera lección como completada; después se puede seguir al módulo siguiente. Los dos checkpoints de las primeras lecciones deben haberse respondido al menos una vez, aunque los errores permiten continuar y se usan para priorizar el refuerzo posterior. Al no aprobar, mostrar fundamentos y permitir otro intento con preguntas existentes.
5. Los módulos y las lecciones ya completadas antes de este cambio conservan su progreso. Los usuarios pueden consultar lecciones futuras desde el mapa sin un bloqueo global de acceso, pero no reciben aprobación de un módulo nuevo sin realizar su cierre.
6. La práctica global y simulacros permanecen disponibles como entrenamiento voluntario, sin un módulo adicional obligatorio. La vista del módulo deja de promocionar un bloque de práctica independiente.

La selección y el umbral están definidos en `src/lib/moduleReview.ts`. El componente de evaluación se encuentra en `src/components/learning/ModuleReview.tsx`.

Los 255 SVG, la estructura 17/85/255, las 1948 preguntas y los 42 enlaces de fuentes permanecen iguales. No se modifica el historial de respuestas ni la configuración de Netlify/pnpm.
