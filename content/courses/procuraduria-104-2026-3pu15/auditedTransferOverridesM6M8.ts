import type { FoundationTransferOverride } from './foundationTransferOverrides'

/** Revisión por tríos M6–M8. Reescribe ítems existentes, no crea IDs. */
export const auditedTransferOverridesM6M8: Record<string, [FoundationTransferOverride, FoundationTransferOverride]> = {
  'pgn-m6': [
    {
      caseText: 'Una alcaldía reporta pagos a un proveedor por una dotación escolar que aparentemente no se entregó en su totalidad. La Procuraduría recibe un informe sobre deberes funcionales de supervisores; la Contraloría revisa soportes de ejecución y posible afectación patrimonial; la Fiscalía abre verificaciones sobre una denuncia penal. Un servidor propone resolver todo en un único concepto de la Procuraduría porque los hechos y las actas de contrato son los mismos.',
      stem: '¿Cuál es el tratamiento institucional apropiado de los soportes compartidos sin confundir competencias?',
      correct: {
        text: 'Distinguir objeto, autoridad y etapas de cada actuación, preservar las evidencias y remitir o aportar información pertinente conforme a los canales competentes, sin sustituir las decisiones de otros regímenes.',
        reason: 'La coexistencia de hechos investigados no fusiona las competencias de Ministerio Público, control fiscal y autoridades penales.',
      },
      other: [
        {
          text: 'Concluir desde el expediente disciplinario el valor final del detrimento fiscal y la responsabilidad penal de todos los firmantes, porque ya existe una queja por el mismo contrato.',
          reason: 'Una denuncia no acredita responsabilidad y un trámite disciplinario no reemplaza las atribuciones de las otras autoridades.',
        },
        {
          text: 'Suspender toda respuesta disciplinaria y fiscal hasta que exista condena penal, porque un proceso ante la Fiscalía excluye cualquier otra actuación sobre esos hechos.',
          reason: 'Las investigaciones pueden atender objetos jurídicos diferentes; su procedencia debe determinarse por sus propios presupuestos.',
        },
      ],
      explanation: 'Artículos 113, 117, 118, 119 y 250 constitucionales. La Procuraduría pertenece al Ministerio Público, la Contraloría ejerce control fiscal y la Fiscalía integra la Rama Judicial. Una misma documentación puede aportar a análisis distintos, pero no impone idéntica conclusión.',
      difficulty: 4,
    },
    {
      caseText: 'Durante la valoración de un contrato de suministro, llega un certificado de bodega que demuestra que 70 de 100 bienes sí fueron recibidos. Una denuncia original afirmaba que no había entrega alguna. La Contraloría aún verifica el saldo; la Procuraduría analiza la actuación del supervisor y la Fiscalía tiene una noticia de posible falsedad documental. La dirección pide mantener literalmente todas las conclusiones del primer informe por temor a «contradecir» lo enviado.',
      stem: '¿Qué conclusión puede actualizarse con el nuevo certificado sin inferir efectos automáticos en las tres autoridades?',
      correct: {
        text: 'Corregir el hecho de ausencia total de entrega, identificar los 30 bienes pendientes de verificar y separar cómo afecta la nueva evidencia a cada objeto, manteniendo cuestiones de deber, daño o delito abiertas para su autoridad.',
        reason: 'La prueba de entrega parcial cambia un hecho relevante, pero no resuelve sin más responsabilidad, dolo o daño patrimonial.',
      },
      other: [
        {
          text: 'Declarar cerrado todo expediente porque comprobar 70 entregas demuestra automáticamente que los pagos restantes eran conformes y que no pudo existir ninguna conducta irregular.',
          reason: 'El soporte parcial no demuestra la conformidad de los bienes restantes ni elimina otros hechos que requieren valoración.',
        },
        {
          text: 'Conservar la tesis de cero entregas aunque existe soporte contrario y remitirla como conclusión definitiva, pues las distintas autoridades deben recibir un informe idéntico.',
          reason: 'Una fuente incorporada y relevante debe ser evaluada; consistencia formal no justifica mantener hechos desmentidos.',
        },
      ],
      explanation: 'La prueba nueva exige actualizar el alcance del hecho acreditado y su efecto sobre cada hipótesis. La articulación interinstitucional respeta competencias separadas y no transforma una decisión ajena en determinación propia.',
      difficulty: 5,
    },
  ],
  'pgn-m7': [
    {
      caseText: 'Una dependencia de atención al ciudadano registra solicitudes por orden de llegada. El jefe indica por teléfono que la petición de su vecino debe tramitarse antes. El funcionario encuentra un segundo expediente, presentado después, con elementos que podrían justificar atención prioritaria por razones legalmente relevantes. La hoja de Excel marca ambos como «urgentes» sin discriminar su fundamento, y la dirección exige publicar la lista completa con nombres y datos de contacto.',
      stem: '¿Cómo se aplica el principio de imparcialidad junto con celeridad y publicidad antes de cambiar el orden de trámite?',
      correct: {
        text: 'Verificar los supuestos y normas de prioridad, documentar los cambios respaldados en hechos y criterios jurídicos objetivos, conservar el orden restante y limitar divulgación de información protegida.',
        reason: 'La urgencia alegada y el vínculo personal no son equivalentes a una prioridad jurídicamente fundada; publicidad exige analizar protección de datos.',
      },
      other: [
        {
          text: 'Adelantar primero al vecino del jefe y después escoger al azar un expediente atrasado, pues el equilibrio de tiempos demuestra imparcialidad de la entidad.',
          reason: 'La igualdad y la imparcialidad se valoran frente a criterios aplicables, no mediante favoritismos compensatorios.',
        },
        {
          text: 'Publicar todos los datos personales y la etiqueta de urgencia del archivo, porque el principio de publicidad prevalece siempre sobre la privacidad de cualquier peticionario.',
          reason: 'El acceso a la información puede estar sujeto a reservas o restricciones legales y exige protección de datos personales.',
        },
      ],
      explanation: 'Art. 209: igualdad, moralidad, eficacia, economía, celeridad, imparcialidad y publicidad orientan la administración. Para un caso de peticiones, la decisión requiere comprobar prioridad legal y trazabilidad, sin que un filtro de Excel o una llamada creen privilegios.',
      difficulty: 4,
    },
    {
      caseText: 'Un ciudadano solicita información sobre una actuación de gestión. La primera versión del expediente contiene cifras públicas, nombres y datos de contacto de terceros; más tarde una revisión confirma que ciertas columnas deben recibir tratamiento legal de protección. La oficina ya había anunciado que publicaría el archivo sin cambios para demostrar transparencia. El responsable propone ahora negar todo el documento para evitar riesgos.',
      stem: '¿Qué ajuste resulta coherente con publicidad, eficacia y protección de datos sin hacer una exclusión total o divulgación indiscriminada?',
      correct: {
        text: 'Identificar la naturaleza jurídica de cada campo, analizar las restricciones aplicables y entregar o publicar la parte accesible cuando proceda, motivando los tratamientos de información reservada o protegida.',
        reason: 'La publicación tiene que distinguir información pública de datos sometidos a protección; la reserva parcial no necesariamente cubre todo.',
      },
      other: [
        {
          text: 'Publicar el archivo íntegro porque una vez anunciado el principio de publicidad obliga a mantener la decisión sin revisar los nuevos hechos.',
          reason: 'Una intención previa de publicar no supera las condiciones legales de acceso y tratamiento de datos.',
        },
        {
          text: 'Denegar todo el expediente sin examinar si los registros protegidos pueden separarse de los de acceso público.',
          reason: 'Las restricciones deben analizarse y motivarse conforme a su alcance, no extenderse por simple conveniencia.',
        },
      ],
      explanation: 'La eficacia y publicidad no justifican incumplir restricciones legales. Es preciso valorar cada campo, la finalidad y la posibilidad de acceso parcial o versión pública, conservando evidencia de los criterios aplicados.',
      difficulty: 5,
    },
  ],
  'pgn-m8': [
    {
      caseText: 'La alcaldía celebró un contrato de mantenimiento de puentes; el acta de recibo se firmó dos semanas después del plazo. Un informe señala al supervisor como responsable sin revisar el manual de funciones ni la fecha de designación. Hay comunicaciones en las que él exigió correcciones al contratista y otras que no tienen respuesta documentada. Un superior pide abrir conjuntamente un «proceso fiscal, penal y disciplinario» en la misma oficina para sancionar de inmediato.',
      stem: '¿Qué debe establecer la dependencia antes de asociar la demora a responsabilidad funcional?',
      correct: {
        text: 'Precisar la calidad del sujeto, la designación y el deber concreto, reconstruir actuaciones y omisiones con soportes, y distinguir la competencia y los supuestos de cada posible régimen.',
        reason: 'No basta la demora ni el cargo: deber funcional, hechos, atribución y competencia deben demostrarse individualmente.',
      },
      other: [
        {
          text: 'Declarar al supervisor culpable en los tres regímenes porque una firma en el acta permite presumir que produjo cualquier retraso contractual.',
          reason: 'Firmar una actuación no acredita automáticamente todas las conductas ni habilita a una dependencia a imponer distintas responsabilidades.',
        },
        {
          text: 'Cerrar sin verificar porque el contratista ejecutó tarde la obra; la conducta del contratista excluye de manera automática cualquier omisión del servidor.',
          reason: 'Las actuaciones de un tercero pueden modificar la hipótesis, pero no resuelven por sí solas los deberes independientes del servidor.',
        },
      ],
      explanation: 'Constitución arts. 6, 121, 123 y 124: el servidor ejerce funciones legales y la responsabilidad por acción, omisión o extralimitación requiere examen concreto. En materia disciplinaria no hay responsabilidad objetiva; otras consecuencias se tramitan según sus regímenes.',
      difficulty: 4,
    },
    {
      caseText: 'Luego de la queja por retraso contractual, se aporta un informe que documenta que el supervisor requirió por escrito al proveedor durante la ejecución, pero falta evidencia de algunas revisiones técnicas obligatorias según el alcance de su designación. Un trabajador externo afirma que el supervisor no podía realizar inspecciones en una fecha específica. La oficina tiene un borrador de imputación que no considera ese nuevo hecho ni determina el deber funcional cuestionado.',
      stem: '¿Cómo debe actualizarse el análisis de una presunta omisión sin declarar de antemano responsabilidad ni archivo definitivo?',
      correct: {
        text: 'Contrastar deberes y facultades del supervisor con la cronología de actuaciones y las nuevas fuentes; precisar qué omisiones continúan plausibles y cuáles ya no se sostienen antes de definir la actuación legal que corresponda.',
        reason: 'La prueba de actuaciones positivas y posibles impedimentos incide en hechos y valoración, sin decidir automáticamente el expediente.',
      },
      other: [
        {
          text: 'Mantener íntegra la imputación sin registrar los requerimientos escritos, porque el retraso original demuestra todas las omisiones atribuidas.',
          reason: 'Ignorar actuaciones acreditadas y datos contradictorios impide una valoración integral y puede sostener una hipótesis falsa.',
        },
        {
          text: 'Cerrar toda la actuación de inmediato porque un solo requerimiento demuestra que ningún deber del supervisor pudo haber sido incumplido.',
          reason: 'Un cumplimiento parcial puede ser relevante, pero no necesariamente acredita satisfacción de todas las obligaciones.',
        },
      ],
      explanation: 'La revisión de responsabilidad funcional requiere norma, deber exigible, prueba de conducta u omisión y valoración de circunstancias. Deben analizarse elementos favorables y desfavorables y no confundir responsabilidad contractual, fiscal, penal y disciplinaria.',
      difficulty: 5,
    },
  ],
}
