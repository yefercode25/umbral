import type { Lesson } from '../../../../src/types/course'

/** Actualización de GOA 08/10/2026. Verificar siempre SIMO y avisos antes de la prueba. */
export const dianOfficialGuideLesson: Lesson = {
  id: 'm0-goa-2026', moduleId: 'm0', order: 6,
  title: 'La GOA 2026 aplicada a Gestor II: formato, cronograma y prioridades',
  subtitle: 'Qué confirma la CNSC y qué depende todavía de la inscripción individual',
  durationMinutes: 24, skillIds: ['goa-2676','formato-pruebas','estrategia-estudio'], status: 'published',
  blocks: [
    { type: 'lead', text: 'La CNSC publicó el 8 de octubre de 2026 la Guía de Orientación al Aspirante (GOA) de pruebas escritas DIAN 2676, en coordinación con el operador Fundación Universitaria del Área Andina. La ficha CT-CR-3007 acredita las funciones del empleo, pero no sustituye el listado de indicadores individualizado por inscripción. Umbral es material de preparación independiente.' },
    { type: 'comparison', title: 'Qué documento demuestra cada cosa', columns: ['Documento', 'Alcance', 'Qué NO demuestra'], rows: [
      ['Ficha MERF CT-CR-3007', 'Misión, once funciones, requisitos y competencias del Gestor II.', 'No fija el banco concreto de ítems ni la distribución de ejes por inscripción.'],
      ['GOA octubre 2026', 'Orientaciones de aplicación, formato de instrumentos y reglas generales de evaluación.', 'No permite asignar indicadores particulares sin consulta individual.'],
      ['Indicadores por inscripción', 'Desglose que debe consultarse en el portal del operador con el número de inscripción.', 'Una ruta cuya URL contiene “2667” no significa que trate de otro proceso: el portal se identifica como DIAN 2676.'],
      ['Citación SIMO', 'Sede, fecha, condiciones y demás instrucciones individuales.', 'No es sustituida por el cronograma general ni por una publicidad de terceros.'],
    ] },
    { type: 'comparison', title: 'Evaluaciones para Ingreso ordinario con experiencia requerida: supuesto que debe confirmarse', columns: ['Componente', 'Carácter', 'Ponderación bajo este supuesto'], rows: [
      ['Funcionales', 'Eliminatorio · mínimo 70,00/100', '65 %'],
      ['Comportamentales', 'Clasificatorio · sin clave de acierto', '15 %'],
      ['Integridad', 'Clasificatorio · autoinforme', '10 %'],
      ['Valoración de antecedentes', 'Clasificatorio · otra etapa', '10 %'],
    ] },
    { type: 'rule', title: 'Modalidad real antes de memorizar porcentajes', text: 'La tabla anterior aplica únicamente si la inscripción es Ingreso ordinario y el empleo exige experiencia. Ascenso y otros supuestos pueden tener reglas distintas. La ficha pide un año de experiencia profesional, pero no acredita por sí sola tu modalidad efectivamente inscrita.' },
    { type: 'comparison', title: 'Diferencias que cambian la práctica', columns: ['Componente', 'Formato descrito por GOA', 'Entrenamiento apropiado'], rows: [
      ['Funcionales', 'Pruebas de juicio situacional: caso, enunciado y tres alternativas; una mejor respuesta.', 'Expedientes: competencia, tiempo, soporte, norma y distractores plausibles.'],
      ['Comportamentales', 'Afirmaciones de autoinforme con cuatro niveles de acuerdo.', 'Comprender la competencia y responder de forma coherente con la conducta habitual.'],
      ['Integridad', 'Autoinforme de cuatro niveles de acuerdo.', 'Reflexión sobre valores y coherencia; no asignar “respuesta correcta”.'],
      ['Conocimiento conceptual', 'Actividad de aprendizaje dentro de Umbral.', 'Útil para dominar base normativa, pero no reemplaza simulacro funcional PJS.'],
    ] },
    { type: 'steps', title: 'Secuencia de preparación con evidencia', items: [
      'Consultar SIMO para verificar modalidad, OPEC e información individual, sin compartir contraseñas.',
      'Descargar indicadores desde el portal del operador usando el número de inscripción y conservar copia.',
      'Cruzar cada indicador literal con las funciones del MERF y los módulos de Umbral; marcar núcleo, complemento o brecha.',
      'Estudiar el texto normativo expedido y vigente antes del 19 de junio de 2026 según corte señalado en GOA; no dar por examinable una reforma posterior.',
      'Entrenar PJS de tres alternativas y registrar fallos por evidencia, competencia, plazo, etapa y norma.',
      'Revisar citación y actualizaciones en SIMO/CNSC antes del examen, especialmente hora, sede e instrucciones de ingreso.',
    ] },
    { type: 'comparison', title: 'Cronograma conocido al 12/10/2026', columns: ['Hito', 'Fecha conocida', 'Cautela'], rows: [
      ['Publicación de GOA', '08/10/2026', 'Confirmada en página oficial CNSC.'],
      ['Resultados VRM', '14/10/2026', 'Anunciada por aviso CNSC; consultar Admitido/No admitido en SIMO.'],
      ['Reclamaciones VRM de no admitidos', '15 y 16/10/2026', 'Por SIMO dentro de la ventana indicada.'],
      ['Pruebas escritas', '08/11/2026', 'Programación reproducida de la GOA; verificar ratificación y citación individual.'],
      ['Hora de ingreso', 'Apertura 07:15; inicio 08:00; puertas 08:30', 'Consultar el documento original y tu citación. La transcripción consultada tiene discrepancia entre duración y hora final.'],
    ] },
    { type: 'trap', title: 'No equipares aciertos de Umbral con puntaje CNSC', text: 'Obtener, por ejemplo, 32/40 respuestas correctas en Umbral representa 80 % de acierto del banco privado. No demuestra que obtendrás 80,00 en la escala oficial ni garantiza superar el mínimo. Los autoinformes no se pueden sumar como preguntas con respuesta correcta.' },
    { type: 'decision-simulator', title: 'Decisión de estudio tras publicación de GOA', text: 'Distingue lo que sabes con fuente de lo que no puedes afirmar sin indicadores individuales.',
      scenario: 'La GOA ya está disponible. Un compañero propone crear un examen “100 % oficial” de 40 preguntas que combine Excel, probabilidad y cobro, califique integridad con una respuesta ideal y muestre un resultado supuestamente equivalente al de la CNSC. No se han obtenido tus indicadores específicos.',
      prompt: '¿Qué decisión editorial y de entrenamiento es la más adecuada?',
      options: [
        { id: 'a', text: 'Publicar el simulacro como oficial porque la guía ya tiene fecha.', correct: false, rationale: 'La publicación de la GOA no avala bancos privados ni asigna ejes individuales; tampoco autoriza calificar autoinformes con clave.' },
        { id: 'b', text: 'Separar los componentes, entrenar PJS en funcionales, mantener complementos identificados y consultar los indicadores por inscripción.', correct: true, rationale: 'Respeta el formato confirmado, la fuente del empleo, los límites del curso independiente y la evidencia individual pendiente.' },
        { id: 'c', text: 'Eliminar todo el estudio funcional y practicar exclusivamente afirmaciones de integridad.', correct: false, rationale: 'Desplaza el componente eliminatorio y la mayor parte de las funciones específicas del MERF.' },
      ] },
    { type: 'sources', sourceIds: ['goa-cnsc-2676-2026','cnsc-2676-especificaciones-pruebas','merf-ct-cr-3007'] },
  ],
}
