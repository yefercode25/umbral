import type { BehaviorStatement } from '../../../../src/types/course'

type Seed = [competency: string, text: string, direction: 'direct' | 'inverse', note: string]

/** Muestras pedagógicas inéditas. Sin perfil deseable, baremos oficiales ni calificación. */
const sets: Record<string, Seed[]> = {
  m18: [
    ['Comportamiento ético', 'Cuando detecto un error que yo mismo cometí, lo informo por el canal adecuado y colaboro en corregirlo.', 'direct', 'Reflexiona sobre responsabilidad y transparencia ante consecuencias para otros.'],
    ['Comportamiento ético', 'Si un dato incorrecto no parece generar quejas, prefiero no mencionarlo para evitar reprocesos.', 'inverse', 'Examina cómo actúas cuando no existe vigilancia inmediata.'],
    ['Comunicación efectiva', 'Antes de explicar un trámite complejo, compruebo qué información necesita y comprende mi interlocutor.', 'direct', 'La comprensión es tan importante como la exactitud del contenido.'],
    ['Comunicación efectiva', 'Cuando el destinatario no comprende mi explicación, repito el mismo mensaje con las mismas palabras.', 'inverse', 'Considera cómo ajustas canales, ejemplos y lenguaje frente a una barrera real.'],
    ['Trabajo en equipo', 'Comparto a tiempo información que puede ayudar a otros a cumplir una tarea conjunta.', 'direct', 'La cooperación requiere circulación responsable de información necesaria.'],
    ['Trabajo en equipo', 'Si otra área detecta un error en mi proceso, considero preferible no involucrarla en su solución.', 'inverse', 'Reflexiona sobre coordinación y aprendizaje ante hallazgos compartidos.'],
    ['Adaptabilidad', 'Cuando se actualiza un procedimiento, identifico qué tareas cambian y ajusto mi trabajo conforme a las instrucciones válidas.', 'direct', 'Distingue adaptación responsable de cambio improvisado.'],
    ['Adaptabilidad', 'Sigo usando una plantilla anterior aunque se haya aprobado formalmente una nueva, porque ya conozco la vieja.', 'inverse', 'Piensa en tu relación habitual con cambios institucionales comprobados.'],
    ['Orientación al logro', 'Antes de cerrar una tarea reviso si el resultado cumple las condiciones de calidad y plazo comprometidos.', 'direct', 'Logro no es volumen sin comprobación.'],
    ['Orientación al logro', 'Si entregué muchos informes, considero innecesario verificar su exactitud antes del cierre.', 'inverse', 'La calidad hace parte del resultado esperado.'],
    ['Orientación al usuario y al ciudadano', 'Ante una solicitud difícil, explico con claridad la ruta y verifico que la persona conozca qué puede hacer.', 'direct', 'Orientar implica comprensión, respeto y aplicación de las reglas.'],
    ['Orientación al usuario y al ciudadano', 'Doy prioridad a quienes conozco personalmente cuando hay varios usuarios esperando el mismo trámite.', 'inverse', 'Reflexiona sobre trato imparcial y criterios legítimos de priorización.'],
  ],
  m19: [
    ['Comportamiento ético · nivel 4', 'Si observo una práctica informal que compromete la integridad de datos fiscales, busco una corrección institucional sostenible.', 'direct', 'La reflexión excede el cumplimiento individual y alcanza prevención organizacional.'],
    ['Comportamiento ético · nivel 4', 'Cuando una práctica irregular beneficia a mi equipo, evito proponer su revisión porque ya todos la aceptaron.', 'inverse', 'Explora cómo respondes a presión y normalización de conductas inadecuadas.'],
    ['Comportamiento ético · nivel 4', 'Promuevo que las decisiones con impacto en ciudadanos queden sustentadas y sean revisables.', 'direct', 'Observa si impulsas mecanismos verificables y no solo declaraciones de intención.'],
    ['Adaptabilidad · nivel 3', 'Al recibir una nueva regla de trámite, evalúo cómo altera plazos, responsables y resultados antes de continuar.', 'direct', 'Reconocer consecuencias es distinto de adoptar cambios a ciegas.'],
    ['Adaptabilidad · nivel 3', 'Me cuesta ajustar un método incluso cuando se demuestra que causa errores repetidos.', 'inverse', 'Considera situaciones sostenidas, no una ocasión aislada.'],
    ['Adaptabilidad · nivel 3', 'Ante una novedad no prevista, contrasto alternativas y comunico las adaptaciones que requieren aprobación.', 'direct', 'Adaptarse no es exceder atribuciones para resolver más rápido.'],
    ['Comunicación efectiva · nivel 3', 'Cuando explico una decisión compleja a otra dependencia, distingo hechos, norma aplicable y pasos siguientes.', 'direct', 'Una comunicación profesional permite reconstruir y ejecutar lo decidido.'],
    ['Comunicación efectiva · nivel 3', 'Si alguien pide aclaraciones sobre un trámite, supongo que no escuchó y cierro la conversación.', 'inverse', 'Identifica cómo reaccionas ante señales de comprensión insuficiente.'],
    ['Comunicación efectiva · nivel 3', 'Adapto ejemplos y canales sin modificar el contenido jurídico que debo transmitir.', 'direct', 'Diferencia claridad del mensaje y alteración de la regla aplicable.'],
    ['Trabajo en equipo · nivel 3', 'Cuando una decisión afecta a otra oficina, busco oportunamente su aporte antes de ejecutar una acción conjunta.', 'direct', 'Coordinar requiere reconocer dependencias reales entre tareas.'],
    ['Trabajo en equipo · nivel 3', 'Si una propuesta de otra persona resulta mejor que la mía, me cuesta apoyarla durante su ejecución.', 'inverse', 'Reflexiona sobre colaboración incluso cuando no prevalece tu postura.'],
    ['Trabajo en equipo · nivel 3', 'Comparto los resultados y aprendizajes de una corrección para reducir la recurrencia del error en el equipo.', 'direct', 'El aprendizaje compartido convierte un hallazgo individual en mejora colectiva.'],
  ],
  m20: [
    ['Honestidad', 'Cuando no tengo certeza sobre un dato, indico qué falta verificar antes de presentarlo como concluyente.', 'direct', 'La exactitud importa incluso si expresar incertidumbre retrasa una respuesta.'],
    ['Honestidad', 'Si un reporte muestra un indicador favorable por un error conocido, prefiero divulgarlo y corregirlo después.', 'inverse', 'Piensa en transparencia y responsabilidad al presentar resultados.'],
    ['Respeto', 'Trato con dignidad a una persona molesta sin alterar los requisitos legales del trámite.', 'direct', 'La empatía puede coexistir con el cumplimiento de normas.'],
    ['Respeto', 'Considero aceptable usar un tono despectivo cuando alguien repite la misma consulta varias veces.', 'inverse', 'Evalúa el trato incluso en situaciones de desgaste cotidiano.'],
    ['Compromiso', 'Cuando una persona no comprende el siguiente paso, procuro orientarla hacia el canal realmente competente.', 'direct', 'El interés de servicio va más allá de una respuesta de salida rápida.'],
    ['Compromiso', 'Si un asunto queda formalmente fuera de mis tareas, no considero necesario orientar sobre quién puede atenderlo.', 'inverse', 'Distingue no usurpar competencias de abandonar la orientación.'],
    ['Diligencia', 'Reviso soportes críticos antes de cerrar una actuación que puede afectar derechos u obligaciones.', 'direct', 'Celeridad y calidad forman un mismo estándar de cuidado.'],
    ['Diligencia', 'Prefiero cerrar el expediente hoy aunque existan inconsistencias que podrían resolverse mañana.', 'inverse', 'Reflexiona sobre precisión bajo presión por productividad.'],
    ['Justicia', 'Aplico el mismo criterio procedimental a personas en situaciones equivalentes, sin atender relaciones personales.', 'direct', 'La imparcialidad necesita criterios comprobables.'],
    ['Justicia', 'Si conozco personalmente al solicitante, considero razonable darle ventajas que no recibirían otros.', 'inverse', 'Distingue trato humano de privilegios injustificados.'],
  ],
}

export const dianAdvancedBehaviorStatements: Record<string, BehaviorStatement[]> = Object.fromEntries(
  Object.entries(sets).map(([moduleId, entries]) => [moduleId, entries.map(([competency, text, direction, note], index) => ({ id: `${moduleId}-s${index + 1}`, competency, text, direction, note }))]),
)
