import type { LessonBlock } from '../../../src/types/course'

/**
 * Auditoría editorial M12–M14 (2026-11-23).
 * Cada lección profundiza el punto que luego se comprueba en sus preguntas.
 * No agrega preguntas ni cambia la estructura de los módulos.
 */
const blocks: Record<string, Partial<Record<1 | 2 | 3, LessonBlock[]>>> = {
  'pgn-m12': {
    1: [
      {
        type: 'comparison', title: 'Una situación no determina por sí sola la función misional',
        columns: ['Ruta', 'Preguntas que permiten identificarla'],
        rows: [
          ['Preventiva', '¿Existe un riesgo de afectación de derechos o de gestión que requiere advertencia, seguimiento o articulación dentro de las atribuciones de la entidad?'],
          ['Disciplinaria', '¿Hay noticia sobre conducta de un sujeto disciplinable y posibles deberes infringidos que deben examinarse con procedimiento, competencia y prueba?'],
          ['Intervención', '¿Existe un proceso judicial o actuación administrativa ante otra autoridad en la que corresponda ejercer funciones de Ministerio Público?'],
          ['Concurrencia de rutas', '¿Los mismos documentos soportan objetivos distintos? Separar informes y actuaciones evita convertir una alerta en sanción o una intervención en decisión del juez.'],
        ],
      },
      {
        type: 'trap', title: 'Un contrato en riesgo no significa una falta probada',
        text: 'La alerta de una licitación puede justificar una actuación preventiva dentro de competencia. Para atribuir responsabilidad disciplinaria se requieren presupuestos y garantías diferentes. No se debe «formular cargos para prevenir» ni esperar necesariamente un daño consumado para vigilar riesgos.',
      },
    ],
    2: [
      {
        type: 'comparison', title: 'Aplicación: contratación antes de la adjudicación',
        columns: ['Documento del expediente', 'Qué verificar y para qué'],
        rows: [
          ['Estudio previo y requisitos', 'Identificar exigencias potencialmente restrictivas, riesgos para interés público y autoridad competente para corregirlos.'],
          ['Observaciones de oferentes', 'Distinguir alertas verificables de desacuerdos comerciales; solicitar soporte antes de emitir conclusiones.'],
          ['Respuesta de la entidad', 'Analizar motivación y medidas adoptadas; la función preventiva no sustituye la evaluación de propuestas ni la adjudicación.'],
          ['Noticia de posible omisión funcional', 'Separar la verificación preventiva del análisis disciplinario por la vía correspondiente.'],
        ],
      },
      {
        type: 'example', title: 'Una cláusula restrictiva y dos objetivos',
        text: 'En los pliegos aparece una exigencia de marca sin justificación técnica evidente. La Procuraduría puede examinar preventivamente el riesgo y requerir información en su ámbito; si después se conocen hechos concretos sobre deberes funcionales, deben evaluarse por la ruta disciplinaria competente, con sus pruebas y garantías. La oficina no adjudica directamente el contrato.',
      },
    ],
    3: [
      {
        type: 'comparison', title: 'Cuando la información cambia, también cambia el alcance',
        columns: ['Hecho nuevo', 'Ajuste correcto de la actuación'],
        rows: [
          ['La entidad corrige la cláusula', 'Verificar motivación, publicación y efecto real de la corrección; una mejora no borra automáticamente hechos anteriores.'],
          ['Aparece comunicación sobre posible favorecimiento', 'Preservar fuente, examinar pertinencia y competencia; la sospecha no establece por sí sola dolo o falta.'],
          ['Un juez conoce una controversia del proceso', 'Verificar si hay competencia de intervención; no sustituir el pronunciamiento judicial.'],
          ['Se demuestra que el requisito era necesario y proporcionado', 'Actualizar la valoración preventiva y explicar qué premisa inicial dejó de sostenerse.'],
        ],
      },
    ],
  },
  'pgn-m13': {
    1: [
      {
        type: 'comparison', title: 'Competencia, reparto, delegación y comisión no son equivalentes',
        columns: ['Concepto', 'Límite de aplicación'],
        rows: [
          ['Competencia', 'Atribución legal u orgánica para conocer y decidir según sujeto, materia, territorio, etapa e instancias pertinentes.'],
          ['Reparto', 'Asignación administrativa de un asunto conforme a reglas de competencia; una bandeja de entrada no crea potestades inexistentes.'],
          ['Delegación', 'Transferencia de ejercicio de funciones cuando y como el ordenamiento lo permite, con acto y límites aplicables; no se presume por instrucción verbal.'],
          ['Comisión probatoria', 'Encargo de una diligencia determinada a autoridad o funcionario habilitado, dentro de objeto, plazo, condiciones y garantías del proceso.'],
          ['Instrucción y juzgamiento', 'Se verifican por separado, conforme al CGD y estructura PGN; practicar una diligencia no habilita para formular cargos o fallar.'],
        ],
      },
      {
        type: 'trap', title: 'Comisionado para testimonio no es comisionado para decidir',
        text: 'Si se encarga recibir una declaración, la comisión debe ejecutarse dentro de sus límites: citación, identificación, garantías, registro y remisión de resultados. Un comisionado no puede convertir la diligencia en decisión de fondo solo porque detecta un hecho nuevo.',
      },
    ],
    2: [
      {
        type: 'comparison', title: 'Lista mínima antes, durante y después de la prueba comisionada',
        columns: ['Momento', 'Control'],
        rows: [
          ['Antes', 'Leer acto de comisión, objeto preciso, habilitación, medio probatorio, persona citada y reglas de tiempo y comunicación.'],
          ['Durante', 'Comprobar identidad, respetar garantías y contradicción conforme a la fase, registrar fielmente respuestas y eventual novedad relevante.'],
          ['Después', 'Cerrar acta, conservar soportes e integridad, remitir expediente de diligencia al comitente y señalar lo que excede el encargo.'],
          ['Ante una pregunta fuera de objeto', 'Documentar la novedad y solicitar instrucciones de autoridad competente; no expandir el objeto de la comisión unilateralmente.'],
        ],
      },
      {
        type: 'example', title: 'Un testigo menciona otro contrato',
        text: 'El funcionario comisionado para tomar una declaración sobre la supervisión de un contrato escucha que la persona conoce posibles irregularidades en otro proceso. Debe registrar lo relevante conforme a reglas de la diligencia e informar al comitente sobre la novedad; no se atribuye por sí solo el inicio de otra investigación ni cambia de objeto o firma cargos.',
      },
    ],
    3: [
      {
        type: 'comparison', title: 'Tres situaciones que modifican el alcance de una comisión',
        columns: ['Variación del expediente', 'Decisión razonada'],
        rows: [
          ['Se descubre que el acto no incluye un documento solicitado', 'Revisar el objeto y pedir definición al comitente antes de ampliar el recaudo.'],
          ['Una persona requiere garantía procesal específica', 'Aplicar las reglas de la prueba y documentar el tratamiento, sin abreviar el acto por rapidez.'],
          ['Se cuestiona la competencia del despacho de origen', 'Poner en conocimiento el hecho y verificar la actuación procedente; la comisión no sana automáticamente incompetencias.'],
          ['La diligencia está concluida y aparece contradicción', 'Remitir acta, soportes y salvedades; la valoración y demás decisiones siguen en su autoridad y fase.'],
        ],
      },
    ],
  },
  'pgn-m14': {
    1: [
      {
        type: 'comparison', title: 'El aporte de un profesional no se mide por cuántas conclusiones sancionatorias firma',
        columns: ['Producto del 3PU-15', 'Qué necesita para ser útil'],
        rows: [
          ['Análisis de expedientes', 'Identificar problema, obligaciones, documentos de origen, vacíos y cronología que la autoridad debe valorar.'],
          ['Recaudo y práctica de pruebas', 'Atender la atribución o comisión válida, con objeto, garantías, metodología y registro verificables.'],
          ['Informes especializados', 'Separar observaciones directas, hipótesis, límites y fuentes; indicar qué requiere una comprobación posterior.'],
          ['Gestión de información', 'Utilizar hojas de cálculo o registros de sistema para detectar datos y contrastar versiones, sin convertir la fórmula en atribución de dolo.'],
        ],
      },
      {
        type: 'trap', title: 'Una bitácora no demuestra intencionalidad',
        text: 'El registro de un cambio en una plataforma puede probar una operación dentro de sus condiciones de confiabilidad. Identificar a una persona, su autorización y la intención requiere otras fuentes y valoración. La competencia técnica del ingeniero permite mejorar los soportes del expediente, no reemplazar al titular de la decisión jurídica.',
      },
    ],
    2: [
      {
        type: 'comparison', title: 'Estructura de un informe técnico para instrucción disciplinaria',
        columns: ['Apartado', 'Evidencia necesaria'],
        rows: [
          ['Encargo y alcance', 'Qué pregunta se debe responder y qué decisiones corresponden a otra autoridad.'],
          ['Fuentes y adquisición', 'De dónde provienen logs, documentos, archivos o bases; quién extrajo datos, rango, formato y zona horaria.'],
          ['Método', 'Búsquedas, correlaciones, filtros, integridad y cualquier limitación que afecte la reproducibilidad.'],
          ['Resultados', 'Hechos observables separados de explicaciones alternativas, inferencias y su grado de soporte.'],
          ['Anexos y cierre', 'Ruta, versiones, actas y evidencias necesarias para que otra persona pueda revisar el trabajo.'],
        ],
      },
      {
        type: 'example', title: 'Excel, log y cuenta compartida',
        text: 'En una hoja se observa que una solicitud cambió de estado a las 22:15; un registro de sistema muestra una cuenta de servicio. La coincidencia temporal orienta la investigación, pero no atribuye por sí sola a su titular una conducta voluntaria. El informe debe documentar extracción, integridad, cambios de zona horaria, posibles automatizaciones y límites de la inferencia.',
      },
    ],
    3: [
      {
        type: 'comparison', title: 'Cuando surge evidencia nueva, corrige solo lo que esa fuente demuestra',
        columns: ['Novedad', 'Ajuste del informe'],
        rows: [
          ['Un proceso automático coincide con la hora del cambio', 'Reabrir hipótesis sobre ejecución manual; examinar configuración y autorizaciones sin afirmar automáticamente regularidad.'],
          ['Una nueva copia presenta hash diferente', 'Verificar origen, transformaciones, integridad y relación con la fuente antes de afirmar manipulación.'],
          ['La cuenta fue usada desde diferentes dispositivos', 'Correlacionar sesiones, autenticaciones y equipos; titularidad de cuenta no equivale a ejecución.'],
          ['La autoridad solicita declarar dolo', 'Responder en términos de hechos y alcance técnico; remitir la valoración subjetiva a quien tenga competencia.'],
        ],
      },
    ],
  },
}

export function auditedModuleBlocksM12M14(moduleId: string, lessonOrder: 1 | 2 | 3): LessonBlock[] {
  return blocks[moduleId]?.[lessonOrder] ?? []
}

export function auditedModuleSourcesM12M14(moduleId: string): string[] {
  if (moduleId === 'pgn-m12') return ['constitucion', 'pgn-guia-preventiva', 'pgn-guia-disciplinaria', 'decreto-262-2000']
  if (moduleId === 'pgn-m13') return ['decreto-1851-2021', 'ley-1952-2019', 'ley-2094-2021', 'pgn-guia-pruebas']
  if (moduleId === 'pgn-m14') return ['pgn-convocatoria-104-v4', 'pgn-manual-v9', 'pgn-guia-pruebas', 'ley-1952-2019']
  return []
}
