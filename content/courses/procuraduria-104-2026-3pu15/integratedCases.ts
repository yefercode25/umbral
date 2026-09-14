import type { Question, QuestionOption } from '../../../src/types/course'

const VERIFIED_AT = '2026-09-14'

type IntegratedInput = {
  id: string
  scenarioId: string
  moduleId: string
  relatedModuleIds: string[]
  skillIds: string[]
  difficulty: 4 | 5
  caseText: string
  stem: string
  options: [string, string, string]
  rationales: [string, string, string]
  correct: 'a' | 'b' | 'c'
  explanation: string
  sourceIds: string[]
}

function integratedQuestion(input: IntegratedInput): Question {
  const ids = ['a', 'b', 'c'] as const
  const options: QuestionOption[] = ids.map((id, index) => ({
    id,
    text: input.options[index]!,
    rationale: input.rationales[index]!,
  }))
  return {
    id: input.id,
    moduleId: input.moduleId,
    skillIds: input.skillIds,
    type: 'pjs',
    difficulty: input.difficulty,
    case: input.caseText,
    stem: input.stem,
    options,
    correctOptionId: input.correct,
    explanation: input.explanation,
    sourceIds: input.sourceIds,
    verifiedAt: VERIFIED_AT,
    integrated: true,
    relatedModuleIds: input.relatedModuleIds,
    scenarioId: input.scenarioId,
  }
}

export const procuraduriaIntegratedQuestions: Question[] = [
  // Caso 1 · Alteración de datos y autor por identificar
  integratedQuestion({
    id:'pgn-int-data-01', scenarioId:'pgn-case-data-alteration', moduleId:'pgn-m25', relatedModuleIds:['pgn-m25','pgn-m26','pgn-m35','pgn-m40','pgn-m61','pgn-m84'], skillIds:['pgn-skill-25','pgn-skill-26','pgn-skill-61'], difficulty:4,
    caseText:'Una dependencia detecta que el estado de un expediente cambió fuera del flujo ordinario. El sistema registra una modificación realizada por una cuenta de servicio compartida. No se conoce todavía qué persona ejecutó materialmente la acción.',
    stem:'¿Cuál es el primer enfoque procesal y técnico más sólido?',
    options:['Delimitar el hecho, preservar los registros disponibles, verificar competencia y establecer si existe duda real sobre la identificación del posible autor antes de escoger la ruta disciplinaria.','Abrir de inmediato investigación contra el administrador del sistema porque tenía privilegios suficientes para cambiar el dato.','Restaurar el valor anterior en la base de datos y cerrar el incidente, porque el problema funcional ya quedó corregido.'],
    rationales:['Separa el hecho técnico de la atribución personal y permite decidir la ruta procesal con soporte.','Capacidad técnica o privilegios no prueban por sí solos autoría material.','Corregir la operación no sustituye la preservación, análisis y eventual actuación disciplinaria.'], correct:'a',
    explanation:'La noticia debe convertirse primero en hechos verificables. Si existe duda sobre la identificación o individualización del posible autor, la indagación previa puede ser la figura procedente; la decisión depende de competencia, suficiencia inicial y evidencia preservada.',
    sourceIds:['ley-1952-2019','ley-2094-2021','pgn-guia-disciplinaria','mintic-mspi-2025'],
  }),
  integratedQuestion({
    id:'pgn-int-data-02', scenarioId:'pgn-case-data-alteration', moduleId:'pgn-m44', relatedModuleIds:['pgn-m40','pgn-m44','pgn-m61','pgn-m63','pgn-m84'], skillIds:['pgn-skill-44','pgn-skill-61','pgn-skill-63'], difficulty:4,
    caseText:'Antes de que el equipo técnico continúe revisando, un analista propone exportar los logs a Excel y trabajar únicamente sobre esa copia. El sistema fuente conserva rotación limitada de registros.',
    stem:'¿Qué actuación protege mejor la utilidad probatoria del material?',
    options:['Preservar de manera documentada los registros fuente o una extracción verificable, registrar origen, periodo, zona horaria y método, y trabajar después sobre copias de análisis.','Copiar y pegar las filas visibles en un documento de texto; mientras el contenido se vea igual no importa el procedimiento de extracción.','Esperar a conocer al responsable antes de preservar, porque solo entonces los logs adquieren valor probatorio.'],
    rationales:['La trazabilidad de adquisición y preservación permite explicar qué fue analizado y detectar alteraciones posteriores.','Una copia manual puede perder campos, contexto, orden, metadatos y reproducibilidad.','Preservar temprano evita que la rotación o cambios del sistema hagan desaparecer información relevante.'], correct:'a',
    explanation:'La preservación no determina culpabilidad; protege la posibilidad de analizar y controvertir el elemento posteriormente. En evidencia digital importan contenido, origen, contexto, integridad y documentación del procedimiento.',
    sourceIds:['ley-1952-2019','pgn-guia-pruebas','ley-527-1999','mintic-mspi-2025'],
  }),
  integratedQuestion({
    id:'pgn-int-data-03', scenarioId:'pgn-case-data-alteration', moduleId:'pgn-m61', relatedModuleIds:['pgn-m38','pgn-m39','pgn-m61','pgn-m81'], skillIds:['pgn-skill-38','pgn-skill-39','pgn-skill-61'], difficulty:5,
    caseText:'La cuenta de servicio fue usada desde una IP interna asignada a una sede. La sede utiliza NAT y varias estaciones salen por la misma dirección. El registro de autenticación individual no está todavía incorporado.',
    stem:'¿Qué puede afirmarse responsablemente en ese momento?',
    options:['La IP ayuda a acotar infraestructura y tiempo, pero no identifica por sí sola a una persona; deben buscarse registros de autenticación, equipo, sesión y otras fuentes independientes.','La persona responsable es quien aparece como titular administrativo del enlace de la sede.','La IP no tiene ningún valor y debe excluirse por completo del análisis.'],
    rationales:['Reconoce el alcance real del dato y propone corroboración sin sobreinferir.','Confunde titularidad administrativa con autoría de un evento técnico.','Un dato puede ser útil para correlacionar aunque no sea suficiente para atribuir individualmente.'], correct:'a',
    explanation:'Un registro técnico debe valorarse por lo que demuestra y por sus limitaciones. La atribución robusta requiere correlación de fuentes y una línea temporal coherente.',
    sourceIds:['pgn-guia-pruebas','mintic-mspi-2025'],
  }),
  integratedQuestion({
    id:'pgn-int-data-04', scenarioId:'pgn-case-data-alteration', moduleId:'pgn-m42', relatedModuleIds:['pgn-m35','pgn-m39','pgn-m42','pgn-m64'], skillIds:['pgn-skill-42','pgn-skill-64'], difficulty:5,
    caseText:'El profesional de sistemas concluye que la modificación fue técnicamente realizada mediante una operación concreta y que la cuenta usada tenía privilegios de escritura. Le piden afirmar en su informe que el titular de la cuenta actuó dolosamente.',
    stem:'¿Cómo debe responder desde su rol técnico?',
    options:['Describir método, hallazgos, correlaciones y límites técnicos; explicar que la determinación de dolo y responsabilidad exige valoración jurídica y probatoria integral por la autoridad competente.','Afirmar dolo porque una operación de escritura siempre es deliberada.','Eliminar del informe cualquier hallazgo sobre la cuenta para evitar participar en una decisión jurídica.'],
    rationales:['Mantiene el valor del aporte experto sin invadir la conclusión jurídica.','Intencionalidad jurídica no se deduce únicamente de que una operación técnica requiera una acción.','El límite del rol no impide documentar hechos técnicos relevantes y reproducibles.'], correct:'a',
    explanation:'El experto aporta conocimiento especializado; la autoridad competente integra ese aporte con el resto de la prueba y el marco jurídico. Hallazgo técnico, inferencia técnica y responsabilidad no son sinónimos.',
    sourceIds:['ley-1952-2019','pgn-guia-pruebas','pgn-convocatoria-104-v4'],
  }),
  integratedQuestion({
    id:'pgn-int-data-05', scenarioId:'pgn-case-data-alteration', moduleId:'pgn-m39', relatedModuleIds:['pgn-m27','pgn-m35','pgn-m38','pgn-m39'], skillIds:['pgn-skill-27','pgn-skill-39'], difficulty:5,
    caseText:'Después aparecen registros que muestran que una tarea automática también podía ejecutar la misma actualización. La hipótesis inicial atribuía el cambio a una intervención manual.',
    stem:'¿Qué demuestra una valoración probatoria madura?',
    options:['Reformular la hipótesis, comparar los patrones de la tarea automática con el evento investigado y explicar qué evidencia favorece o debilita cada explicación.','Mantener la hipótesis inicial porque cambiarla mostraría que la investigación estuvo equivocada.','Archivar automáticamente porque ahora existen dos explicaciones posibles.'],
    rationales:['La nueva evidencia debe incorporarse con igual rigor, incluso si contradice la hipótesis inicial.','Persistir sin analizar la contradicción introduce sesgo de confirmación.','La existencia de hipótesis alternativas exige investigarlas y valorarlas, no produce por sí sola una decisión de archivo.'], correct:'a',
    explanation:'La sana crítica exige valoración conjunta y motivada. Una hipótesis es una herramienta revisable; no debe convertirse en una conclusión protegida frente a evidencia nueva.',
    sourceIds:['ley-1952-2019','pgn-guia-pruebas'],
  }),

  // Caso 2 · Expediente disciplinario completo
  integratedQuestion({
    id:'pgn-int-proc-01', scenarioId:'pgn-case-instruction', moduleId:'pgn-m27', relatedModuleIds:['pgn-m20','pgn-m25','pgn-m27','pgn-m28'], skillIds:['pgn-skill-25','pgn-skill-27'], difficulty:4,
    caseText:'Una queja viene acompañada de documentos y permite identificar al servidor presuntamente involucrado. Los hechos descritos podrían comprometer un deber funcional y la dependencia resulta competente.',
    stem:'¿Qué debe evitar el profesional al apoyar la apertura de investigación?',
    options:['Redactar los hechos como una relación clara y verificable, ordenar o proponer pruebas pertinentes y preservar la presunción de inocencia sin presentar como probada la responsabilidad.','Usar en el auto expresiones que den por establecida la falta para mostrar que la investigación tiene fundamento.','Omitir la identificación del posible autor hasta el cierre para evitar cualquier afectación a su presunción de inocencia.'],
    rationales:['La apertura delimita el objeto y las pruebas sin prejuzgar responsabilidad.','Fundamentar la investigación no autoriza anticipar el juicio de responsabilidad.','Si el autor está identificado, la investigación se abre precisamente respecto de esa persona con las garantías correspondientes.'], correct:'a',
    explanation:'La investigación tiene objeto propio y su decisión de apertura debe contener elementos definidos por el CGD, entre ellos identidad, hechos disciplinariamente relevantes y pruebas cuya práctica se ordena.',
    sourceIds:['ley-1952-2019','ley-2094-2021','pgn-guia-investigacion'],
  }),
  integratedQuestion({
    id:'pgn-int-proc-02', scenarioId:'pgn-case-instruction', moduleId:'pgn-m28', relatedModuleIds:['pgn-m28','pgn-m35','pgn-m37'], skillIds:['pgn-skill-28','pgn-skill-37'], difficulty:4,
    caseText:'Durante la investigación se incorpora un documento relevante. La defensa solicita conocerlo y controvertirlo. Un integrante del equipo propone reservarlo hasta el cierre para “proteger la estrategia investigativa”.',
    stem:'¿Qué principio debe orientar la respuesta?',
    options:['Revisar la regla procesal aplicable y garantizar las oportunidades de conocimiento y contradicción de la prueba, sin crear reservas que la ley no establezca.','Mantener toda prueba secreta durante la investigación porque la autoridad tiene la carga de probar.','Entregar cualquier información del expediente sin revisar si existen reservas legales específicas o datos protegidos.'],
    rationales:['La contradicción forma parte de las garantías probatorias y debe conciliarse con reservas legales reales.','La carga estatal no elimina derechos de defensa ni crea secreto general del expediente.','El acceso tampoco es absoluto cuando existe una restricción constitucional o legal aplicable.'], correct:'a',
    explanation:'El derecho de contradicción exige tratar la evidencia dentro de las oportunidades y reglas del procedimiento. Transparencia y defensa conviven con reservas legales específicas, no con reservas inventadas.',
    sourceIds:['ley-1952-2019','pgn-guia-pruebas','ley-1712-2014'],
  }),
  integratedQuestion({
    id:'pgn-int-proc-03', scenarioId:'pgn-case-instruction', moduleId:'pgn-m29', relatedModuleIds:['pgn-m27','pgn-m29','pgn-m30'], skillIds:['pgn-skill-29','pgn-skill-30'], difficulty:5,
    caseText:'La investigación ha recaudado las pruebas decretadas y el equipo considera que no quedan diligencias necesarias. Antes de evaluar archivo o cargos, alguien propone pasar inmediatamente a formular cargos.',
    stem:'¿Cuál es la secuencia más segura?',
    options:['Verificar que la investigación pueda cerrarse conforme al CGD, adoptar y comunicar el cierre, respetar la oportunidad de alegatos precalificatorios y luego evaluar el mérito para archivo o cargos.','Formular cargos primero y permitir los alegatos después, porque la defensa podrá controvertir en juzgamiento.','Archivar o formular cargos sin cierre cuando la autoridad considere suficiente la prueba, pues el cierre es solo una formalidad interna.'],
    rationales:['Respeta la transición entre investigación, cierre, alegación y evaluación de mérito.','La existencia de defensa posterior no subsana automáticamente la omisión de una oportunidad procesal anterior.','La etapa y las oportunidades procesales no son optativas por conveniencia.'], correct:'a',
    explanation:'La calidad del expediente depende tanto del soporte como de la secuencia. El cierre de investigación y la oportunidad de alegatos precalificatorios cumplen una función procesal propia antes de la evaluación de mérito.',
    sourceIds:['ley-1952-2019','ley-2094-2021','pgn-guia-disciplinaria'],
  }),
  integratedQuestion({
    id:'pgn-int-proc-04', scenarioId:'pgn-case-instruction', moduleId:'pgn-m30', relatedModuleIds:['pgn-m20','pgn-m22','pgn-m30','pgn-m39'], skillIds:['pgn-skill-30','pgn-skill-39'], difficulty:5,
    caseText:'La conducta material está documentada, pero la prueba sobre la participación individual y la modalidad subjetiva es débil. Existe presión externa para formular cargos por la gravedad del resultado.',
    stem:'¿Qué debe gobernar la evaluación?',
    options:['El estándar y los presupuestos jurídicos de la etapa: valorar integralmente si existe base fáctica, jurídica y probatoria suficiente para cargos o si corresponde otra decisión motivada.','La gravedad del resultado, porque cuanto mayor sea el impacto menor debe ser la exigencia probatoria para formular cargos.','La expectativa pública, porque formular cargos no produce todavía una sanción y por eso no requiere una base probatoria definida.'],
    rationales:['La actuación debe motivarse con el estándar de la etapa y no por presión externa.','La gravedad no reduce garantías ni convierte el resultado en prueba de autoría o culpabilidad.','Que una decisión no sea sancionatoria no significa que pueda adoptarse sin sus presupuestos.'], correct:'a',
    explanation:'Archivo y cargos no son respuestas emocionales al resultado. La instrucción debe conectar hechos, deber funcional, participación, ilicitud, culpabilidad y prueba dentro del estándar aplicable.',
    sourceIds:['ley-1952-2019','ley-2094-2021','pgn-guia-disciplinaria'],
  }),
  integratedQuestion({
    id:'pgn-int-proc-05', scenarioId:'pgn-case-instruction', moduleId:'pgn-m34', relatedModuleIds:['pgn-m11','pgn-m13','pgn-m30','pgn-m34'], skillIds:['pgn-skill-13','pgn-skill-34'], difficulty:5,
    caseText:'Terminada la instrucción, un funcionario de la dependencia que realizó actos de investigación propone continuar él mismo hasta proferir el fallo para evitar demoras.',
    stem:'¿Qué debe revisarse antes de aceptar esa propuesta?',
    options:['La distribución de competencias y la separación entre instrucción y juzgamiento prevista para la estructura disciplinaria, evitando que conveniencia operativa sustituya la garantía funcional.','Solo si el funcionario conoce suficientemente el expediente; si lo conoce mejor que los demás, puede juzgarlo.','Si el disciplinable está de acuerdo, porque la separación entre instrucción y juzgamiento puede renunciarse por economía procesal.'],
    rationales:['La competencia y separación funcional no dependen de conveniencia ni conocimiento personal del expediente.','Conocer el expediente no crea competencia jurídica.','Las garantías estructurales no se sustituyen simplemente por acuerdo entre participantes.'], correct:'a',
    explanation:'La reforma estructural de la PGN refuerza la separación entre instrucción y juzgamiento. Debe verificarse qué dependencia y autoridad conocen cada etapa según sujeto, territorio y reglas vigentes.',
    sourceIds:['decreto-1851-2021','ley-2094-2021','decreto-262-2000'],
  }),

  // Caso 3 · Petición, expediente y población vulnerable
  integratedQuestion({
    id:'pgn-int-pet-01', scenarioId:'pgn-case-petition-vulnerable', moduleId:'pgn-m17', relatedModuleIds:['pgn-m17','pgn-m18','pgn-m49','pgn-m59'], skillIds:['pgn-skill-17','pgn-skill-49'], difficulty:4,
    caseText:'Una mujer víctima de violencia solicita orientación y copia de documentos relacionados con una actuación en la que aparecen datos de terceros. Su petición llega a una dependencia que no tiene competencia para decidir una parte de lo solicitado.',
    stem:'¿Qué enfoque inicial es más correcto?',
    options:['Clasificar cada pretensión, brindar atención accesible y digna, identificar competencia, trasladar lo que corresponda y analizar por separado acceso, reserva y protección de datos.','Rechazar toda la petición por falta parcial de competencia.','Entregar todos los documentos inmediatamente porque la condición de vulnerabilidad elimina las reglas de reserva y datos personales.'],
    rationales:['Separa problemas jurídicos distintos y evita que uno invalide todo el trámite.','La falta de competencia puede exigir traslado o gestión específica, no abandono de toda la solicitud.','El enfoque diferencial facilita acceso efectivo, pero no suprime derechos de terceros ni reservas legales.'], correct:'a',
    explanation:'Derecho de petición, competencia, transparencia, protección de datos y enfoque diferencial deben analizarse por capas. La respuesta de fondo exige gestionar cada componente conforme a su regla.',
    sourceIds:['ley-1755-2015','ley-1712-2014','ley-1581-2012','ley-1257-2008'],
  }),
  integratedQuestion({
    id:'pgn-int-pet-02', scenarioId:'pgn-case-petition-vulnerable', moduleId:'pgn-m18', relatedModuleIds:['pgn-m17','pgn-m18'], skillIds:['pgn-skill-18'], difficulty:4,
    caseText:'El documento pedido contiene información pública en varias páginas y, en otras, números telefónicos, direcciones privadas y datos sensibles de terceros.',
    stem:'¿Qué análisis evita los dos extremos más comunes?',
    options:['Determinar qué información puede entregarse, qué datos deben protegerse y si es viable una versión pública o entrega parcial con motivación de las restricciones.','Negar el documento completo porque contiene al menos un dato personal.','Entregarlo sin modificación porque todo documento dentro de una entidad pública es necesariamente público.'],
    rationales:['Aplica máxima publicidad con límites legales y minimización de exposición.','La presencia de información protegida no siempre convierte en reservado todo el documento.','La naturaleza pública del soporte no elimina reservas legales ni protección de datos.'], correct:'a',
    explanation:'Un mismo documento puede contener capas con regímenes diferentes. La decisión debe identificar y motivar la restricción concreta y favorecer acceso a lo que legalmente sí puede conocerse.',
    sourceIds:['ley-1712-2014','ley-1581-2012','cpaca'],
  }),
  integratedQuestion({
    id:'pgn-int-pet-03', scenarioId:'pgn-case-petition-vulnerable', moduleId:'pgn-m49', relatedModuleIds:['pgn-m5','pgn-m17','pgn-m49'], skillIds:['pgn-skill-49'], difficulty:4,
    caseText:'La solicitante manifiesta dificultad para comprender lenguaje jurídico y no puede desplazarse fácilmente. Un funcionario considera que basta con enviarle una respuesta técnicamente correcta en formato estándar.',
    stem:'¿Qué añade el enfoque de derechos y accesibilidad?',
    options:['Mantener la corrección jurídica y, además, procurar comunicación comprensible, canal accesible y orientación suficiente para que pueda ejercer efectivamente sus derechos.','Cambiar el contenido jurídico de la decisión para favorecerla debido a su condición personal.','Omitir explicaciones para evitar influir en la solicitante.'],
    rationales:['La igualdad material puede exigir remover barreras sin alterar imparcialidad ni legalidad.','Enfoque diferencial no significa decidir sin criterios jurídicos objetivos.','La claridad y orientación forman parte de una atención efectiva, no de una interferencia indebida.'], correct:'a',
    explanation:'Trato digno y enfoque diferencial buscan acceso efectivo. No sustituyen la norma, pero sí exigen reconocer barreras y adaptar la forma de atención dentro de las posibilidades institucionales.',
    sourceIds:['constitucion','ley-1618-2013','ley-1257-2008','ley-1755-2015'],
  }),
  integratedQuestion({
    id:'pgn-int-pet-04', scenarioId:'pgn-case-petition-vulnerable', moduleId:'pgn-m59', relatedModuleIds:['pgn-m17','pgn-m59'], skillIds:['pgn-skill-59'], difficulty:4,
    caseText:'El borrador de respuesta contiene seis páginas de citas normativas, pero no responde de manera directa dos preguntas concretas formuladas por la ciudadana.',
    stem:'¿Qué mejora es prioritaria?',
    options:['Reestructurar la respuesta para contestar clara, congruente y de fondo cada petición, usando la norma como soporte y no como sustituto de la explicación.','Añadir más transcripciones normativas para demostrar mayor rigor.','Eliminar toda referencia jurídica y responder únicamente en lenguaje cotidiano.'],
    rationales:['Una respuesta de fondo conecta la pregunta con la decisión, sus razones y la información procedente.','Extensión y cantidad de citas no garantizan congruencia.','Claridad no exige abandonar el fundamento jurídico.'], correct:'a',
    explanation:'El buen documento institucional combina precisión jurídica, respuesta concreta, trazabilidad y lenguaje comprensible. La norma debe sostener la respuesta, no ocultarla.',
    sourceIds:['ley-1755-2015','cpaca','pgn-convocatoria-104-v4'],
  }),
  integratedQuestion({
    id:'pgn-int-pet-05', scenarioId:'pgn-case-petition-vulnerable', moduleId:'pgn-m58', relatedModuleIds:['pgn-m17','pgn-m18','pgn-m58'], skillIds:['pgn-skill-58'], difficulty:5,
    caseText:'Después de responder, una copia editada se guarda fuera del expediente oficial y meses después nadie puede establecer cuál fue la versión efectivamente comunicada.',
    stem:'¿Qué principio operativo se vulneró principalmente?',
    options:['Trazabilidad documental: la actuación debe quedar incorporada, organizada y asociada a la versión y constancia que permitan reconstruir qué se decidió y comunicó.','Publicidad absoluta: toda versión de trabajo debería haberse publicado en internet.','Autonomía profesional: cada funcionario puede conservar su propia versión como documento oficial.'],
    rationales:['La gestión documental permite reconstruir la historia auténtica de la actuación y sus soportes.','Publicidad no significa publicar borradores ni sustituye el expediente institucional.','Copias personales no reemplazan el sistema oficial de gestión y archivo.'], correct:'a',
    explanation:'El expediente es memoria institucional y probatoria de la actuación. Versiones, radicación, comunicación y soportes deben conservar una historia verificable.',
    sourceIds:['ley-594-2000','pgn-manual-calidad','ley-1755-2015'],
  }),

  // Caso 4 · Riesgo preventivo en contratación
  integratedQuestion({
    id:'pgn-int-prev-01', scenarioId:'pgn-case-preventive-contract', moduleId:'pgn-m45', relatedModuleIds:['pgn-m45','pgn-m47','pgn-m50','pgn-m51'], skillIds:['pgn-skill-45','pgn-skill-50'], difficulty:4,
    caseText:'Una entidad territorial prepara una contratación para un servicio crítico. En los estudios previos se observan requisitos poco claros y un cronograma que podría afectar la continuidad del servicio, pero todavía no existe evidencia de una falta disciplinaria individual.',
    stem:'¿Cuál es el enfoque preventivo más apropiado?',
    options:['Delimitar el riesgo para la gestión y los derechos involucrados, verificar información y competencia preventiva, formular actuaciones orientadas a evitar o mitigar el riesgo sin prejuzgar responsabilidad.','Abrir automáticamente proceso disciplinario contra el ordenador del gasto porque todo riesgo contractual es una falta.','Rediseñar directamente los estudios previos de la entidad y ordenar qué proveedor debe contratarse.'],
    rationales:['La prevención busca anticipar afectaciones dentro de competencia y sin sustituir a la administración.','Riesgo y responsabilidad disciplinaria son categorías diferentes.','El control preventivo no convierte a la PGN en administradora del proceso contractual.'], correct:'a',
    explanation:'Una actuación preventiva identifica riesgo, impacto, evidencia y acciones posibles sin coadministrar ni anticipar responsabilidad disciplinaria.',
    sourceIds:['pgn-guia-preventiva','ley-80-1993','decreto-1082-2015'],
  }),
  integratedQuestion({
    id:'pgn-int-prev-02', scenarioId:'pgn-case-preventive-contract', moduleId:'pgn-m51', relatedModuleIds:['pgn-m50','pgn-m51','pgn-m54'], skillIds:['pgn-skill-51','pgn-skill-54'], difficulty:4,
    caseText:'El análisis de mercado usa una sola cotización y no explica por qué los requisitos técnicos corresponden a la necesidad. Un miembro del equipo afirma que eso prueba corrupción.',
    stem:'¿Cómo debe clasificarse inicialmente el hallazgo?',
    options:['Como una posible debilidad de planeación o señal de riesgo que requiere contexto y verificación; por sí sola no demuestra corrupción ni responsabilidad individual.','Como prueba definitiva de direccionamiento contractual.','Como un hecho irrelevante porque la entidad tiene autonomía para planear.'],
    rationales:['Distingue anomalía, riesgo, hallazgo y prueba, evitando sobreinterpretación.','Una debilidad puede ser relevante sin acreditar por sí sola intención o acuerdo corrupto.','La autonomía se ejerce dentro de principios y deberes de planeación y transparencia.'], correct:'a',
    explanation:'El análisis profesional debe describir la señal con precisión, buscar explicación y corroboración, y evitar convertir un indicador de riesgo en una conclusión sancionatoria.',
    sourceIds:['ley-80-1993','ley-1150-2007','decreto-1082-2015','ley-1474-2011'],
  }),
  integratedQuestion({
    id:'pgn-int-prev-03', scenarioId:'pgn-case-preventive-contract', moduleId:'pgn-m47', relatedModuleIds:['pgn-m45','pgn-m47','pgn-m56'], skillIds:['pgn-skill-47','pgn-skill-56'], difficulty:5,
    caseText:'La PGN realiza seguimiento preventivo y la entidad ajusta el cronograma. El equipo quiere medir la efectividad únicamente contando cuántos oficios fueron enviados.',
    stem:'¿Qué indicador sería conceptualmente más útil?',
    options:['Uno que relacione el riesgo identificado con cambios verificables o resultados relevantes, complementado con evidencia de oportunidad y seguimiento, no solo con volumen de comunicaciones.','El número bruto de páginas producidas en los oficios.','La cantidad de funcionarios copiados en cada comunicación.'],
    rationales:['Un indicador útil debe acercarse al resultado o control del riesgo y no confundir actividad con efecto.','Producción documental no demuestra por sí misma gestión efectiva del riesgo.','Cantidad de destinatarios tampoco mide cambio o cumplimiento.'], correct:'a',
    explanation:'Control de gestión requiere distinguir insumo, actividad, producto, resultado e impacto. La evidencia de actuación sigue siendo necesaria, pero el volumen no reemplaza la medición del propósito.',
    sourceIds:['pgn-guia-preventiva','pgn-sgc','decreto-1499-2017'],
  }),
  integratedQuestion({
    id:'pgn-int-prev-04', scenarioId:'pgn-case-preventive-contract', moduleId:'pgn-m54', relatedModuleIds:['pgn-m45','pgn-m54','pgn-m20'], skillIds:['pgn-skill-54','pgn-skill-20'], difficulty:5,
    caseText:'Durante la actuación preventiva aparecen correos que sugieren una posible coordinación indebida. Todavía no se ha autenticado el contexto completo ni se ha definido la ruta para esos hechos.',
    stem:'¿Cuál es la respuesta institucionalmente más prudente?',
    options:['Preservar y analizar la información conforme a competencia, diferenciar el seguimiento preventivo de una eventual noticia disciplinaria y activar la ruta correspondiente sin declarar responsabilidad anticipadamente.','Incluir en el informe preventivo que existe corrupción demostrada porque los correos parecen comprometedores.','Ignorar los correos porque una actuación preventiva nunca puede generar información relevante para otra función misional.'],
    rationales:['Mantiene separación funcional y permite que nueva información sea tratada por la ruta competente.','La apariencia incriminatoria no reemplaza autenticación, contradicción ni valoración integral.','La información puede ser relevante; lo importante es tramitarla sin mezclar finalidades ni competencias.'], correct:'a',
    explanation:'Las funciones misionales pueden relacionarse, pero cada una conserva su finalidad, competencia y procedimiento. Una alerta preventiva no es una sanción ni una declaración de responsabilidad.',
    sourceIds:['pgn-guia-preventiva','ley-1952-2019','ley-1474-2011'],
  }),
  integratedQuestion({
    id:'pgn-int-prev-05', scenarioId:'pgn-case-preventive-contract', moduleId:'pgn-m52', relatedModuleIds:['pgn-m50','pgn-m52','pgn-m54'], skillIds:['pgn-skill-52','pgn-skill-54'], difficulty:5,
    caseText:'El contrato ya está en ejecución y el supervisor certifica cumplimiento aunque varios entregables no tienen soporte verificable. El equipo preventivo debe analizar el riesgo sin asumir el rol del supervisor.',
    stem:'¿Qué enfoque conserva mejor los límites institucionales?',
    options:['Contrastar obligaciones, evidencias y controles de seguimiento, documentar la brecha y formular la actuación preventiva o traslado que corresponda sin sustituir la decisión contractual de la entidad.','Firmar una nueva certificación desde la PGN indicando qué entregables sí deben pagarse.','Ordenar directamente la terminación del contrato como medida preventiva ordinaria.'],
    rationales:['Permite vigilar la gestión y sustentar la alerta sin coadministrar.','La PGN no sustituye al supervisor contractual mediante una certificación propia de ejecución.','La prevención no otorga una potestad general para adoptar las decisiones contractuales de la entidad vigilada.'], correct:'a',
    explanation:'El análisis preventivo puede examinar deberes, evidencias y riesgos, pero debe conservar la frontera entre control y administración activa del contrato.',
    sourceIds:['ley-80-1993','ley-1474-2011','pgn-guia-preventiva'],
  }),

  // Caso 5 · Competencia territorial y despacho comisorio
  integratedQuestion({
    id:'pgn-int-comp-01', scenarioId:'pgn-case-competence-commission', moduleId:'pgn-m13', relatedModuleIds:['pgn-m11','pgn-m13','pgn-m33','pgn-m34'], skillIds:['pgn-skill-13'], difficulty:5,
    caseText:'Una actuación involucra a un servidor del orden departamental y hechos ocurridos en más de una jurisdicción territorial. Dos dependencias consideran que podrían conocer el asunto.',
    stem:'¿Qué debe hacerse antes de practicar decisiones de fondo?',
    options:['Aplicar los factores y reglas vigentes de competencia —sujeto, materia, territorio, nivel y etapa— y resolver el conflicto por la vía institucional prevista.','Permitir que conozca la dependencia que recibió primero el correo, porque la radicación siempre fija competencia.','Dividir automáticamente el expediente por territorio, aunque los hechos estén conectados.'],
    rationales:['La competencia exige una lectura normativa y puede incluir reglas de conexidad y solución de conflictos.','El orden de llegada no sustituye los factores legales de competencia.','La conexidad puede precisamente exigir tratamiento conjunto según la regla aplicable.'], correct:'a',
    explanation:'Competencia no es un detalle administrativo: habilita la actuación. El Decreto 1851 reconfigura competencias de instrucción y juzgamiento en niveles central y territorial y contiene reglas específicas de conexidad.',
    sourceIds:['decreto-1851-2021','decreto-262-2000','ley-1952-2019'],
  }),
  integratedQuestion({
    id:'pgn-int-comp-02', scenarioId:'pgn-case-competence-commission', moduleId:'pgn-m33', relatedModuleIds:['pgn-m13','pgn-m33','pgn-m41'], skillIds:['pgn-skill-33'], difficulty:4,
    caseText:'La dependencia competente comisiona a otra procuraduría territorial exclusivamente para recibir un testimonio. Durante la diligencia aparece un dato que podría justificar otra prueba.',
    stem:'¿Qué límite debe respetar la autoridad comisionada?',
    options:['Cumplir el objeto de la comisión, documentar la novedad y remitirla al comitente para que decida lo que exceda el encargo, salvo habilitación normativa específica.','Abrir una nueva investigación y decretar todas las pruebas que considere, porque ya conoce el expediente.','Ignorar la nueva información y omitirla del acta porque no estaba prevista en la comisión.'],
    rationales:['La comisión habilita una diligencia concreta y las novedades deben quedar trazables para decisión del competente.','Practicar una diligencia no transfiere automáticamente toda la competencia del proceso.','Documentar incidencias relevantes forma parte de una actuación diligente.'], correct:'a',
    explanation:'El despacho comisorio debe leerse por su objeto y alcance. La autoridad comisionada ejecuta lo encomendado y devuelve oportunamente la actuación con constancias y novedades.',
    sourceIds:['ley-1952-2019','pgn-guia-pruebas','decreto-1851-2021'],
  }),
  integratedQuestion({
    id:'pgn-int-comp-03', scenarioId:'pgn-case-competence-commission', moduleId:'pgn-m11', relatedModuleIds:['pgn-m10','pgn-m11','pgn-m13'], skillIds:['pgn-skill-11','pgn-skill-13'], difficulty:5,
    caseText:'Un expediente es asignado a una procuraduría provincial de instrucción. Un integrante del equipo asume que, por pertenecer a la PGN, cualquier procuraduría puede decidir cualquier actuación disciplinaria.',
    stem:'¿Qué corrección conceptual es necesaria?',
    options:['La PGN es una organización única, pero sus órganos tienen competencias distribuidas por nivel, sujeto, materia, territorio y etapa; pertenecer a la entidad no crea competencia universal.','Todas las dependencias de la PGN tienen competencia concurrente y solo se reparten por conveniencia interna.','La competencia territorial nunca importa en materia disciplinaria porque la PGN tiene alcance nacional.'],
    rationales:['Distingue unidad institucional de distribución jurídica de atribuciones.','El reparto interno no sustituye el marco de competencias previsto en normas y actos de organización.','El alcance nacional de la entidad coexiste con competencias territoriales específicas.'], correct:'a',
    explanation:'Para resolver casos debes ubicar la dependencia dentro de la arquitectura vigente y luego preguntar qué puede hacer exactamente en esa etapa y respecto de ese sujeto.',
    sourceIds:['decreto-1851-2021','decreto-262-2000','pgn-manual-v9'],
  }),
  integratedQuestion({
    id:'pgn-int-comp-04', scenarioId:'pgn-case-competence-commission', moduleId:'pgn-m34', relatedModuleIds:['pgn-m13','pgn-m34'], skillIds:['pgn-skill-34'], difficulty:5,
    caseText:'Después de formularse y notificarse el pliego de cargos, el expediente debe continuar. Un funcionario de instrucción propone resolver personalmente la controversia de fondo porque conoce todas las pruebas.',
    stem:'¿Qué criterio prevalece?',
    options:['La competencia de la etapa de juzgamiento y la separación funcional; el conocimiento previo del expediente no habilita a asumir una competencia distinta.','La economía procesal, porque evita que un nuevo funcionario tenga que leer el expediente.','La voluntad del investigado, que puede autorizar al instructor para que juzgue si así se acelera el trámite.'],
    rationales:['La arquitectura disciplinaria separa etapas y autoridades para proteger imparcialidad y garantías.','Eficiencia opera dentro de competencia, no por encima de ella.','La competencia no se crea por acuerdo privado cuando está definida normativamente.'], correct:'a',
    explanation:'La separación entre instrucción y juzgamiento debe ser una regla mental automática al leer el organigrama y las competencias posteriores a la reforma.',
    sourceIds:['decreto-1851-2021','ley-2094-2021'],
  }),
  integratedQuestion({
    id:'pgn-int-comp-05', scenarioId:'pgn-case-competence-commission', moduleId:'pgn-m33', relatedModuleIds:['pgn-m33','pgn-m58'], skillIds:['pgn-skill-33','pgn-skill-58'], difficulty:4,
    caseText:'La diligencia comisionada se practica correctamente, pero los audios y el acta permanecen en una carpeta personal y no se remiten con constancia al expediente de origen.',
    stem:'¿Por qué sigue existiendo un problema aunque la prueba haya sido practicada?',
    options:['Porque la actuación debe ser devuelta e incorporada con trazabilidad al expediente para que pueda conocerse, valorarse y controvertirse conforme a las reglas aplicables.','Porque toda prueba practicada por comisión es inválida si se usa un archivo digital.','Porque la autoridad comisionada debería conservar siempre el original y enviar solo un resumen verbal.'],
    rationales:['Una prueba útil necesita además integración documentada al expediente y disponibilidad para el procedimiento.','El soporte digital no invalida automáticamente la prueba.','La trazabilidad exige entrega formal de la actuación, no memoria informal.'], correct:'a',
    explanation:'Despacho comisorio y gestión documental se conectan: practicar la diligencia es solo una parte; también importa documentar, preservar y devolver lo actuado.',
    sourceIds:['ley-1952-2019','pgn-guia-pruebas','ley-594-2000'],
  }),

  // Caso 6 · Cambio de software y trazabilidad
  integratedQuestion({
    id:'pgn-int-sw-01', scenarioId:'pgn-case-software-change', moduleId:'pgn-m83', relatedModuleIds:['pgn-m60','pgn-m64','pgn-m80','pgn-m83'], skillIds:['pgn-skill-83'], difficulty:4,
    caseText:'Una actualización de software cambia automáticamente el estado de ciertos registros. El ticket de cambio existe, pero el comportamiento observado no aparece en el requisito funcional aprobado.',
    stem:'¿Qué debe reconstruirse primero?',
    options:['La cadena requisito → código/configuración → revisión → pruebas → artefacto desplegado → ejecución real, para ubicar dónde surgió la diferencia.','Quién fue el último desarrollador en hacer commit, porque esa persona es responsable de todo comportamiento de producción.','Solo la versión actual del código fuente; si allí no aparece el cambio, el evento no pudo ocurrir.'],
    rationales:['Permite localizar la discrepancia sin confundir autoría, aprobación y efecto técnico.','Un commit no resume pipeline, configuración, revisiones ni despliegues.','Producción puede diferir por artefactos, configuración, migraciones, jobs o cambios fuera de la rama observada.'], correct:'a',
    explanation:'El análisis de software debe ser reproducible y sistémico. Un cambio se entiende conectando necesidad, implementación, controles y versión realmente desplegada.',
    sourceIds:['mintic-mrae-v3','mintic-mspi-2025','pgn-convocatoria-104-v4'],
  }),
  integratedQuestion({
    id:'pgn-int-sw-02', scenarioId:'pgn-case-software-change', moduleId:'pgn-m84', relatedModuleIds:['pgn-m60','pgn-m62','pgn-m83','pgn-m84'], skillIds:['pgn-skill-62','pgn-skill-84'], difficulty:5,
    caseText:'La aplicación registra cambios con una cuenta de servicio. La auditoría de base de datos muestra la sentencia ejecutada, pero no el usuario final que originó la solicitud.',
    stem:'¿Qué fuente adicional sería especialmente valiosa para correlacionar el evento?',
    options:['Logs de aplicación o API que relacionen sesión, identidad de usuario, petición y momento con la operación ejecutada por la cuenta de servicio.','La fotografía del funcionario que normalmente usa el módulo.','El nombre del administrador de la base de datos, aunque no exista evidencia de acceso en ese periodo.'],
    rationales:['Conecta la identidad de aplicación con la operación técnica downstream y puede cerrar parte de la cadena de trazabilidad.','La costumbre de uso no prueba el evento específico.','El rol administrativo no equivale a participación en una transacción concreta.'], correct:'a',
    explanation:'En arquitecturas por capas, la cuenta técnica puede ocultar la identidad originadora si no se correlacionan registros entre aplicación, API, base de datos e infraestructura.',
    sourceIds:['mintic-mrae-v3','mintic-mspi-2025','ley-527-1999'],
  }),
  integratedQuestion({
    id:'pgn-int-sw-03', scenarioId:'pgn-case-software-change', moduleId:'pgn-m82', relatedModuleIds:['pgn-m44','pgn-m60','pgn-m82','pgn-m83'], skillIds:['pgn-skill-82'], difficulty:5,
    caseText:'Al detectar el comportamiento anómalo, el equipo propone restaurar de inmediato una copia anterior y borrar los logs para liberar espacio, mientras otra área solicita preservar la evidencia.',
    stem:'¿Cuál es la estrategia más equilibrada?',
    options:['Contener el impacto y recuperar el servicio con un plan controlado que preserve antes los registros y estados necesarios para análisis, documentando cada acción y sus efectos.','Conservar toda la infraestructura sin cambios durante semanas aunque el servicio crítico permanezca caído.','Priorizar disponibilidad borrando toda evidencia, porque la continuidad siempre prevalece sobre cualquier investigación posterior.'],
    rationales:['Integra disponibilidad con preservación y trazabilidad mediante acciones proporcionales y documentadas.','Preservar no exige ignorar continuidad; se pueden diseñar adquisiciones y contención compatibles con recuperación.','La continuidad es importante, pero destruir evidencia evitable puede impedir explicar el incidente y corregir su causa.'], correct:'a',
    explanation:'Seguridad y operación requieren equilibrar objetivos. La respuesta madura preserva lo necesario, contiene, recupera y registra el procedimiento en lugar de escoger un extremo.',
    sourceIds:['mintic-mspi-2025','pgn-guia-pruebas'],
  }),
  integratedQuestion({
    id:'pgn-int-sw-04', scenarioId:'pgn-case-software-change', moduleId:'pgn-m64', relatedModuleIds:['pgn-m39','pgn-m42','pgn-m64','pgn-m83'], skillIds:['pgn-skill-64'], difficulty:5,
    caseText:'El informe técnico dice: “El usuario X alteró maliciosamente el sistema”, pero la evidencia disponible solo demuestra que su cuenta inició sesión y que minutos después una tarea automatizada produjo el cambio.',
    stem:'¿Cómo debe corregirse la conclusión?',
    options:['Separar hechos observados de inferencias, documentar la secuencia temporal y señalar que la evidencia disponible no permite atribuir todavía la modificación material ni la intención al usuario.','Mantener la frase porque la proximidad temporal es suficiente para establecer autoría e intención.','Eliminar toda referencia a la sesión del usuario porque no prueba por sí sola la alteración.'],
    rationales:['La conclusión debe ser proporcional al soporte y explicitar límites y hipótesis alternativas.','Correlación temporal aislada no demuestra automáticamente causalidad ni intención.','Un dato insuficiente puede seguir siendo relevante si se describe con su alcance correcto.'], correct:'a',
    explanation:'El informe técnico gana fuerza cuando distingue observación, inferencia y limitación. Sobreaﬁrmar convierte un dato útil en una conclusión vulnerable.',
    sourceIds:['pgn-guia-pruebas','pgn-convocatoria-104-v4','mintic-mspi-2025'],
  }),
  integratedQuestion({
    id:'pgn-int-sw-05', scenarioId:'pgn-case-software-change', moduleId:'pgn-m80', relatedModuleIds:['pgn-m39','pgn-m60','pgn-m80','pgn-m84'], skillIds:['pgn-skill-80','pgn-skill-84'], difficulty:5,
    caseText:'Finalmente se comprueba que el comportamiento surgió de una combinación entre una regla de negocio antigua, una migración incompleta y un job programado. Ninguna fuente aislada mostraba toda la causa.',
    stem:'¿Qué aprendizaje transversal debe conservarse?',
    options:['En sistemas complejos la explicación puede ser multicausal; hay que reconstruir componentes, datos, dependencias y línea temporal y luego valorar conjuntamente las fuentes antes de atribuir una conducta.','Siempre debe elegirse una única causa principal aunque la evidencia muestre interacción entre varios factores.','Si hubo una falla técnica, queda descartada cualquier posible conducta humana relacionada con configuración, aprobación o control.'],
    rationales:['Integra arquitectura de sistemas y sana crítica: múltiples fuentes pueden explicar juntas un resultado.','Forzar una causa única puede simplificar de manera indebida sistemas y eventos complejos.','Una causa técnica y una conducta humana pueden coexistir; corresponde analizar cada una con evidencia y competencia.'], correct:'a',
    explanation:'Este caso resume el puente entre Ingeniería de Sistemas y prueba: reconstruir técnicamente sin sobreinferir y entregar una explicación que pueda ser contrastada por la autoridad y los sujetos procesales.',
    sourceIds:['mintic-mrae-v3','mintic-mspi-2025','pgn-guia-pruebas'],
  }),
]
