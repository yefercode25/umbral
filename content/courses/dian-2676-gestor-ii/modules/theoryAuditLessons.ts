import type { Lesson } from '../../../../src/types/course'

/** Lecciones que cierran vacíos detectados en la auditoría teórica de alpha.6. */
export const dianTheoryAuditLessons: Lesson[] = [
  {
    id:'m8-l8', moduleId:'m8', order:8, title:'Un universo confiable antes de una campaña masiva', subtitle:'Cuando un error de selección se escala, también se escala el daño.', durationMinutes:13, skillIds:['control-extensivo','universo','calidad-datos'], status:'published',
    blocks:[
      {type:'lead',text:'El control extensivo trabaja con volumen. Por eso la primera decisión de calidad no es redactar el mensaje: es construir correctamente el universo de obligados sobre el que se actuará.'},
      {type:'steps',title:'Control de calidad del universo',items:['Definir obligación, periodo y población objetivo.','Aplicar criterios de inclusión y exclusión verificables.','Controlar identificadores y duplicados.','Contrastar novedades que cambien la condición del obligado.','Medir resultados sobre el mismo universo o explicar los cambios.']},
      {type:'trap',text:'Una campaña con miles de comunicaciones puede tener baja calidad si el universo contiene personas que ya cumplieron, registros repetidos o periodos equivocados.'},
      {type:'checkpoint',questionId:'q-v6a-m8-01'},
      {type:'sources',sourceIds:['proc-control-extensivo-0382','merf-ct-cr-3007']}
    ]
  },
  {
    id:'m9-l8', moduleId:'m9', order:8, title:'Prescripción con fechas: construye primero la cronología', subtitle:'Antes de contar, clasifica qué fecha inicia y qué actuación puede alterar el término.', durationMinutes:16, skillIds:['prescripcion','cronologia'], status:'published',
    blocks:[
      {type:'lead',text:'La prescripción es uno de los puntos donde una respuesta aparentemente simple falla por cronología. Una lista de fechas no sirve si no sabes qué papel jurídico cumple cada una.'},
      {type:'steps',title:'Método de cálculo razonado',items:['Identifica la obligación y el régimen aplicable.','Determina el hito que inicia el término.','Ordena cronológicamente las actuaciones del expediente.','Verifica cuáles tienen el efecto jurídico de alterar el cómputo.','Calcula solo después de clasificar las fechas.']},
      {type:'sequence-exercise',title:'Ordena el análisis de prescripción',text:'No empieces restando fechas. Primero define qué significa cada una.',items:[{id:'d',label:'Calcular el término con los efectos jurídicos ya identificados.'},{id:'b',label:'Ubicar el punto inicial del cómputo según el régimen.'},{id:'a',label:'Identificar la obligación y la norma aplicable.'},{id:'c',label:'Ordenar actuaciones y verificar cuáles modifican el cómputo.'}],correctOrder:['a','b','c','d'],explanation:'Una fecha solo cambia el resultado si la norma le atribuye un efecto sobre el término.'},
      {type:'checkpoint',questionId:'q-v6a-m9-02'},
      {type:'sources',sourceIds:['estatuto-tributario','proc-inicio-cobro-0269']}
    ]
  },
  {
    id:'m10-l10', moduleId:'m10', order:10, title:'Facilidad vigente no significa expediente terminado', subtitle:'Vigencia, cuotas, garantías y consecuencias del incumplimiento siguen importando.', durationMinutes:13, skillIds:['facilidades-pago','seguimiento','incumplimiento'], status:'published',
    blocks:[
      {type:'lead',text:'Una facilidad organiza la normalización de la deuda, pero su sola existencia no permite responder una PJS. Debes preguntar en qué estado está y qué obligaciones genera durante su ejecución.'},
      {type:'comparison',title:'Cuatro estados que cambian el caso',columns:['Dato','Por qué importa'],rows:[['Concedida','Existe un acto y condiciones que deben leerse.'],['Vigente y al día','La ruta de cobro debe considerar sus efectos actuales.'],['Garantía insuficiente o novedad relevante','Puede requerir verificación y actuación según el régimen.'],['Incumplida','Pueden activarse consecuencias previstas; no se improvisan.']]},
      {type:'checkpoint',questionId:'q-v6a-m10-02'},
      {type:'sources',sourceIds:['proc-facilidades-0272','dian-facilidades-faq-2026']}
    ]
  },
  {
    id:'m11-l6', moduleId:'m11', order:6, title:'Título y mandamiento: no inviertas la secuencia', subtitle:'Antes de mandar pagar, verifica el soporte jurídico y la exigibilidad de la obligación.', durationMinutes:14, skillIds:['cobro-coactivo','titulo-ejecutivo','mandamiento'], status:'published',
    blocks:[
      {type:'lead',text:'El mandamiento no crea mágicamente una deuda cobrable. Se apoya en una obligación real, exigible y respaldada por un título que cumpla las condiciones del régimen.'},
      {type:'sequence-exercise',title:'Orden del inicio coactivo',text:'Ordena los hitos principales del análisis inicial.',items:[{id:'d',label:'Notificar el mandamiento en la forma aplicable.'},{id:'b',label:'Confirmar competencia y exigibilidad.'},{id:'a',label:'Identificar y validar el título ejecutivo.'},{id:'c',label:'Proferir el mandamiento cuando estén reunidos los presupuestos.'}],correctOrder:['a','b','c','d'],explanation:'El título y la exigibilidad preceden la decisión de exigir coactivamente el pago.'},
      {type:'trap',text:'Un estado de cuenta es información crítica, pero no debes asumir que cualquier impresión sustituye por sí sola el título exigido en el caso.'},
      {type:'checkpoint',questionId:'q-v6a-m11-01'},
      {type:'sources',sourceIds:['estatuto-tributario','proc-inicio-cobro-0269','proc-mandamiento-0270']}
    ]
  },
  {
    id:'m13-l10', moduleId:'m13', order:10, title:'Auxiliares de la justicia: apoyo regulado, no autoridad decisora', subtitle:'Designación, relevo, actuación y honorarios deben quedar dentro del expediente.', durationMinutes:14, skillIds:['auxiliares-justicia','secuestro','trazabilidad'], status:'published',
    blocks:[
      {type:'lead',text:'En la ejecución sobre bienes intervienen actores distintos del funcionario que dirige el proceso. Los auxiliares de la justicia cumplen tareas reguladas y su participación también exige selección, control y soporte documental.'},
      {type:'definition',title:'Rol auxiliar',text:'Su intervención sirve a actuaciones específicas —por ejemplo, relacionadas con secuestro o administración de bienes— sin transferirles la competencia para decidir la existencia de la deuda.'},
      {type:'rule',title:'Todo vuelve al expediente',text:'Designación, aceptación o excusa, actuaciones, rendición o seguimiento y reconocimiento de honorarios deben poder reconstruirse documentalmente conforme a los procedimientos aplicables.'},
      {type:'checkpoint',questionId:'q-v6a-m13-02'},
      {type:'sources',sourceIds:['proc-auxiliares-justicia-0418','proc-honorarios-auxiliares-0420','proc-secuestro-0388']}
    ]
  },
  {
    id:'m13-l11', moduleId:'m13', order:11, title:'Ejecutar un bien exige mirar su situación completa', subtitle:'Titularidad, valor, cargas, otros procesos y costo-beneficio condicionan la estrategia.', durationMinutes:15, skillIds:['medidas-cautelares','investigacion-bienes','costo-beneficio','extincion-dominio'], status:'published',
    blocks:[
      {type:'lead',text:'Encontrar un activo no equivale a tener una solución. Antes de ejecutar hay que entender si pertenece al deudor, qué afectaciones tiene, qué valor puede realizarse y qué otras actuaciones jurídicas recaen sobre él.'},
      {type:'comparison',title:'Preguntas sobre el activo',columns:['Dimensión','Pregunta'],rows:[['Jurídica','¿Titularidad y situación permiten la medida?'],['Económica','¿Valor y costos hacen razonable la actuación?'],['Procesal','¿Existe otra actuación que exija coordinación?'],['Operativa','¿Qué medida es eficaz y proporcional dentro del expediente?']]},
      {type:'tip',text:'Posibilidad jurídica y conveniencia operativa no son sinónimos. La decisión profesional integra ambas sin sacrificar legalidad.'},
      {type:'checkpoint',questionId:'q-v6a-m13-03'},
      {type:'checkpoint',questionId:'q-v6a-m13-04'},
      {type:'sources',sourceIds:['proc-investigacion-bienes-0326','proc-medidas-0327','proc-avaluo-0389','proc-extincion-0330']}
    ]
  },
  {
    id:'m14-l11', moduleId:'m14', order:11, title:'Crédito fiscal en concurso: depurar, presentar y seguir', subtitle:'La DIAN debe llegar al proceso con una acreencia defendible y actuar en la oportunidad correspondiente.', durationMinutes:16, skillIds:['concursales','credito-fiscal','depuracion'], status:'published',
    blocks:[
      {type:'lead',text:'Representar a la DIAN en un proceso concursal no consiste únicamente en “cobrar”. El crédito debe verificarse y presentarse dentro de las reglas, oportunidades y escenarios de decisión del proceso.'},
      {type:'steps',title:'Ruta mental',items:['Conocer oportunamente el proceso concursal.','Depurar y soportar la acreencia fiscal.','Identificar oportunidad y actuación que corresponden a la etapa.','Atender objeciones, decisiones y eventos posteriores.','Coordinar el resultado con cartera y sistemas de información.']},
      {type:'trap',text:'Una actuación válida en reconocimiento de acreencias puede ser tardía o improcedente en una etapa posterior. En PJS, ubica siempre el momento procesal.'},
      {type:'checkpoint',questionId:'q-v6a-m14-01'},
      {type:'sources',sourceIds:['ley-1116-2006','proc-inicio-concursales-0431','proc-reorganizacion-0273','proc-liquidacion-judicial-0368']}
    ]
  },
  {
    id:'m15-l6', moduleId:'m15', order:6, title:'De dónde nace el crédito: no todo valor a devolver tiene el mismo origen', subtitle:'Saldo a favor, pago en exceso y pago de lo no debido conducen a preguntas distintas.', durationMinutes:13, skillIds:['devoluciones','origen-credito','compensacion'], status:'published',
    blocks:[
      {type:'lead',text:'Antes de revisar términos o formularios, identifica por qué existe el valor reclamado. El origen determina qué presupuesto jurídico, soporte y procedimiento debes consultar.'},
      {type:'comparison',title:'Mapa de origen',columns:['Situación','Pregunta inicial'],rows:[['Saldo a favor','¿De qué declaración o determinación surge y está disponible para solicitar?'],['Pago en exceso','¿Qué valor fue pagado por encima de lo debido y cómo se demuestra?'],['Pago de lo no debido','¿Por qué el pago carecía de obligación que lo sustentara?'],['Compensación','¿Qué crédito y qué obligación pueden cruzarse bajo el régimen aplicable?']]},
      {type:'checkpoint',questionId:'q-v6a-m15-01'},
      {type:'sources',sourceIds:['estatuto-tributario','proc-pagos-exceso-0128','dian-devoluciones-servicio-2026']}
    ]
  },
  {
    id:'m16-l13', moduleId:'m16', order:13, title:'Verificación y riesgo: una alerta no es una decisión', subtitle:'Marca, evidencia, investigación y causal jurídica son niveles distintos del análisis.', durationMinutes:15, skillIds:['devoluciones','verificacion','investigacion-previa'], status:'published',
    blocks:[
      {type:'lead',text:'Los controles de riesgo ayudan a priorizar y profundizar análisis. El error aparece cuando la marca se trata como si fuera, por sí sola, prueba definitiva de improcedencia.'},
      {type:'comparison',title:'No saltes de una capa a otra',columns:['Capa','Función'],rows:[['Marca o señal','Indica que el caso requiere atención adicional.'],['Verificación','Contrasta información y soportes dentro del trámite.'],['Investigación previa','Actuación de fiscalización cuando se cumplen los supuestos aplicables.'],['Decisión','Aplica la consecuencia jurídica soportada en hechos y norma.']]},
      {type:'checkpoint',questionId:'q-v6a-m16-01'},
      {type:'checkpoint',questionId:'q-v6a-m16-02'},
      {type:'sources',sourceIds:['guia-devoluciones-ct-cot-0038','concepto-devoluciones-16116-2025','estatuto-tributario']}
    ]
  },
  {
    id:'m16-l14', moduleId:'m16', order:14, title:'Decisión favorable → compensación o pago: completa el ciclo', subtitle:'Para CT-CR-3007 el trabajo no termina cuando el acto se firma.', durationMinutes:14, skillIds:['devoluciones','pago','secuencia'], status:'published',
    blocks:[
      {type:'lead',text:'La función del empleo incluye tramitar devoluciones/compensaciones, disposición de recursos y gestión del pago. Esto obliga a mirar el tramo posterior a la decisión favorable.'},
      {type:'sequence-exercise',title:'Ordena la ruta general',text:'Ubica los hitos sin asumir que todos los casos terminan exactamente igual.',items:[{id:'c',label:'Adoptar la decisión que corresponda.'},{id:'a',label:'Recibir y validar la solicitud y sus requisitos.'},{id:'d',label:'Materializar compensación o gestionar el pago cuando proceda.'},{id:'b',label:'Analizar y verificar la procedencia con los controles aplicables.'}],correctOrder:['a','b','c','d'],explanation:'La materialización favorable depende de una decisión precedida por recepción y análisis; no es el punto de partida.'},
      {type:'checkpoint',questionId:'q-v6a-m16-03'},
      {type:'sources',sourceIds:['merf-ct-cr-3007','guia-devoluciones-ct-cot-0038','proc-devoluciones-manual-0125']}
    ]
  },
  {
    id:'m17-l9', moduleId:'m17', order:9, title:'Ciclo de vida de accesos: alta, cambio y retiro oportuno', subtitle:'El permiso correcto hoy puede convertirse en exceso mañana.', durationMinutes:13, skillIds:['accesos','minimo-privilegio','ciclo-vida'], status:'published',
    blocks:[
      {type:'lead',text:'La auditoría institucional de accesos demuestra que el problema no es solo crear usuarios. También importa modificar permisos cuando cambia la función e inactivar cuentas y roles cuando desaparece la necesidad.'},
      {type:'process',title:'Ciclo de acceso',nodes:[{id:'a',label:'Solicitud',hint:'Necesidad y responsable identificados.'},{id:'b',label:'Autorización',hint:'Privilegio acorde con la función.'},{id:'c',label:'Uso y revisión',hint:'Trazabilidad y verificación periódica.'},{id:'d',label:'Cambio',hint:'Ajuste por traslado o nuevas funciones.'},{id:'e',label:'Retiro',hint:'Inactivación oportuna al terminar la necesidad.'}]},
      {type:'rule',title:'Mínimo privilegio',text:'Otorga lo necesario para la tarea autorizada, durante el tiempo necesario. “Por si acaso” no es una justificación de seguridad.'},
      {type:'checkpoint',questionId:'q-v6a-m17-01'},
      {type:'sources',sourceIds:['auditoria-accesos-dian-2025','manual-seguridad-dian','merf-ct-cr-3007']}
    ]
  },
  {
    id:'m19-l6', moduleId:'m19', order:6, title:'Comportamiento ético nivel 4: sostener el criterio bajo presión', subtitle:'El nivel alto se observa también en cómo influyes en el comportamiento del equipo.', durationMinutes:12, skillIds:['comportamiento-etico','nivel-4'], status:'published',
    blocks:[
      {type:'lead',text:'En una prueba comportamental no se resuelve un artículo jurídico; se observa la coherencia entre conductas, contexto y nivel esperado. Para CT-CR-3007 el comportamiento ético está en nivel 4.'},
      {type:'rule',title:'Qué sugiere un nivel alto',text:'No basta con evitar una conducta incorrecta de forma pasiva. Importan la consistencia, la responsabilidad y la capacidad de actuar como referente cuando hay presión por resultados o atajos.'},
      {type:'trap',text:'No conviertas la práctica en una fórmula de “marcar siempre totalmente de acuerdo”. La consistencia entre afirmaciones y la lectura de conductas observables es más importante que adivinar extremos.'},
      {type:'checkpoint',questionId:'q-v6a-m19-01'},
      {type:'sources',sourceIds:['merf-ct-cr-3007','res-65-2024','codigo-integridad-dian']}
    ]
  },
  {
    id:'m21-l5', moduleId:'m21', order:5, title:'Método PJS en cinco movimientos: de los hechos a la actuación', subtitle:'Una secuencia estable reduce errores por impulso y distractores plausibles.', durationMinutes:13, skillIds:['tecnica-pjs','cronologia','distractores'], status:'published',
    blocks:[
      {type:'lead',text:'Cuando el caso es largo, la mejor defensa contra el ruido es un método repetible. Umbral usa cinco pasos: hechos, competencia, etapa, regla y actuación.'},
      {type:'sequence-exercise',title:'Ordena el método Umbral',text:'Pon la lectura en el orden que evita elegir primero y justificar después.',items:[{id:'e',label:'Elegir la actuación procedente.'},{id:'b',label:'Identificar quién tiene competencia.'},{id:'d',label:'Aplicar la regla que gobierna esa etapa.'},{id:'a',label:'Separar hechos relevantes de contexto.'},{id:'c',label:'Ubicar la etapa del procedimiento.'}],correctOrder:['a','b','c','d','e'],explanation:'La actuación se elige al final. Empezar por la opción que “suena mejor” aumenta el sesgo de confirmación.'},
      {type:'checkpoint',questionId:'q-v6a-m21-01'},
      {type:'sources',sourceIds:['cnsc-2676-especificaciones-pruebas','merf-ct-cr-3007']}
    ]
  },
  {
    id:'m24-l6', moduleId:'m24', order:6, title:'Outlook: destinatarios, adjuntos y permisos también son información', subtitle:'Para, CC, CCO y enlaces compartidos cambian quién ve qué y con qué privilegios.', durationMinutes:12, skillIds:['outlook','correo','permisos'], status:'published',
    blocks:[
      {type:'comparison',title:'Antes de enviar',columns:['Elemento','Control'],rows:[['Para','Destinatario principal que debe actuar o recibir.'],['CC','Copia visible para quienes necesitan conocimiento.'],['CCO','Copia cuya dirección no se muestra a los demás receptores.'],['Adjunto','Verificar archivo, versión, sensibilidad y destinatarios.'],['Vínculo','Revisar si permite ver, editar o compartir y si ese privilegio es necesario.']]},
      {type:'trap',text:'“El enlace funciona” no significa que los permisos sean correctos. Un documento institucional puede quedar expuesto o editable por más personas de las necesarias.'},
      {type:'checkpoint',questionId:'q-v6a-m24-01'},
      {type:'checkpoint',questionId:'q-v6a-m24-02'},
      {type:'sources',sourceIds:['microsoft-outlook-email','microsoft-outlook-attachments','manual-seguridad-dian']}
    ]
  },
  {
    id:'m24-l7', moduleId:'m24', order:7, title:'DOCX, XLSX, CSV y PDF: el formato define qué conservas', subtitle:'No todos los archivos preservan fórmulas, hojas, estilos, edición o presentación final.', durationMinutes:13, skillIds:['formatos-archivo','productividad-digital'], status:'published',
    blocks:[
      {type:'lead',text:'Elegir formato es una decisión funcional. Para editar un documento necesitas propiedades distintas de las que buscas al distribuir una versión final o intercambiar datos tabulares.'},
      {type:'comparison',title:'Usos frecuentes',columns:['Formato','Fortaleza principal','Precaución'],rows:[['DOCX','Edición estructurada en Word.','Puede cambiar si se abre en herramientas o versiones con compatibilidad diferente.'],['XLSX','Libro de Excel con estructura, fórmulas y múltiples hojas.','No lo confundas con un archivo de datos plano.'],['CSV','Intercambio tabular simple.','No conserva todas las hojas, fórmulas o formato del libro.'],['PDF','Distribución con presentación estable.','No es el formato fuente ideal para continuar editando contenido estructurado.']]},
      {type:'checkpoint',questionId:'q-v6a-m24-03'},
      {type:'checkpoint',questionId:'q-v6a-m24-04'},
      {type:'sources',sourceIds:['microsoft-word-file-formats','microsoft-excel-file-formats','microsoft-office-file-formats']}
    ]
  },
  {
    id:'m25-l9', moduleId:'m25', order:9, title:'Importar datos sin cambiar su significado', subtitle:'Un identificador que parece número puede necesitar tratarse como texto.', durationMinutes:12, skillIds:['excel','csv','calidad-datos'], status:'published',
    blocks:[
      {type:'lead',text:'Excel intenta interpretar tipos de datos. Esa ayuda puede convertirse en un problema cuando códigos, NIT con estructura específica, números de expediente u otros identificadores se transforman durante la importación.'},
      {type:'rule',title:'Primero significado, después tipo',text:'Pregunta si el campo se usa para calcular o para identificar. Un código “00125” puede perder información si se convierte sin control en el número 125.'},
      {type:'tip',text:'Conserva una copia del archivo fuente y valida conteos, encabezados, tipos y valores críticos después de importar o exportar.'},
      {type:'checkpoint',questionId:'q-v6a-m25-01'},
      {type:'sources',sourceIds:['microsoft-excel-file-formats','microsoft-excel-formulas']}
    ]
  },
  {
    id:'m26-l7', moduleId:'m26', order:7, title:'Población, muestra y sesgo: no generalices antes de preguntar quién quedó por fuera', subtitle:'La precisión matemática no corrige una muestra mal seleccionada.', durationMinutes:14, skillIds:['datos','poblacion-muestra','sesgo-muestreo'], status:'published',
    blocks:[
      {type:'definition',title:'Población',text:'Conjunto de unidades sobre el que se quiere describir o inferir algo, definido por el problema.'},
      {type:'definition',title:'Muestra',text:'Subconjunto observado de esa población. Su utilidad depende de cómo fue seleccionado y de qué tan bien responde a la pregunta.'},
      {type:'example',title:'Sesgo de selección',text:'Si quieres medir la experiencia de todos los usuarios y preguntas únicamente a quienes interpusieron una queja, el resultado describe muy bien a ese grupo, pero no necesariamente a toda la población.'},
      {type:'checkpoint',questionId:'q-v6a-m26-01'},
      {type:'checkpoint',questionId:'q-v6a-m26-02'},
      {type:'sources',sourceIds:['openstax-statistics-center']}
    ]
  },
  {
    id:'m27-l6', moduleId:'m27', order:6, title:'Cuantificadores y conteo: una palabra puede cambiar toda la conclusión', subtitle:'Todos, alguno, ninguno y al menos uno no son adornos del enunciado.', durationMinutes:12, skillIds:['logica','cuantificadores','conteo'], status:'published',
    blocks:[
      {type:'comparison',title:'Lee literalmente',columns:['Expresión','Qué exige'],rows:[['Todos A cumplen X','Cada elemento de A debe cumplir; un contraejemplo basta para refutar.'],['Existe al menos un A que cumple X','Basta encontrar un elemento válido.'],['Ningún A cumple X','No puede existir intersección entre A y X.'],['A o B','En lógica/conjuntos suele incluir los casos que están en ambos, salvo que el problema diga exclusión.']]},
      {type:'example',title:'Conteo sin duplicados',text:'Si 90 casos están en A, 70 en B y 25 en ambos, la unión contiene 90 + 70 − 25 = 135 casos únicos.'},
      {type:'checkpoint',questionId:'q-v6a-m27-01'},
      {type:'checkpoint',questionId:'q-v6a-m27-02'},
      {type:'sources',sourceIds:['openstax-statistics-probability']}
    ]
  }
]
