import type { Question } from '../../../../src/types/course'

type QuestionDraft = Omit<Question, 'verifiedAt'>
const q = (draft: QuestionDraft): Question => ({ ...draft, verifiedAt: '2026-09-13' })

/** Preguntas añadidas por la auditoría de profundidad de alpha.6. */
export const dianDeepTheoryExpansionQuestions: Question[] = [
  q({
    id:'q-v6d-m1-01', moduleId:'m1', skillIds:['estado-estructura','competencia'], type:'pjs', difficulty:2,
    case:'Un servidor recibe una solicitud relacionada con una materia que corresponde a una autoridad distinta. El ciudadano insiste en que “cualquier entidad pública” debe decidir de fondo.',
    stem:'¿Cuál es el criterio inicial más sólido?',
    options:[
      {id:'a',text:'Resolver de fondo para evitar una nueva gestión al ciudadano.',rationale:'La orientación al ciudadano no habilita a una autoridad para ejercer una competencia que no tiene.'},
      {id:'b',text:'Identificar primero la competencia legal y actuar conforme al procedimiento aplicable cuando la autoridad receptora no sea competente.',rationale:'La competencia delimita quién puede decidir válidamente; el servicio debe prestarse sin desconocer esa regla.'},
      {id:'c',text:'Archivar la solicitud porque fue presentada ante una autoridad distinta.',rationale:'La sola falta de competencia no autoriza a ignorar la petición ni sustituye el trámite previsto para esa situación.'}
    ], correctOptionId:'b',
    explanation:'La función administrativa se ejerce dentro de competencias atribuidas. Un buen servicio no significa decidir sin habilitación, sino encauzar correctamente la actuación.',
    sourceIds:['constitucion-politica','cpaca','merf-ct-cr-3007']
  }),
  q({
    id:'q-v6d-m1-02', moduleId:'m1', skillIds:['funcion-publica','principios'], type:'single', difficulty:2,
    stem:'¿Qué relación existe entre celeridad y debido proceso en una actuación administrativa?',
    options:[
      {id:'a',text:'La celeridad permite omitir etapas cuando la administración conoce el resultado probable.',rationale:'La eficiencia no elimina garantías ni etapas exigidas por el ordenamiento.'},
      {id:'b',text:'Son principios incompatibles y debe escogerse uno según la urgencia.',rationale:'Los principios deben armonizarse, no tratarse como alternativas excluyentes.'},
      {id:'c',text:'La actuación debe ser oportuna sin sacrificar competencia, defensa, contradicción ni las formas esenciales del procedimiento.',rationale:'Esta lectura armoniza eficacia y celeridad con el debido proceso.'}
    ], correctOptionId:'c',
    explanation:'La rapidez administrativa es valiosa únicamente dentro del marco de legalidad y garantías procedimentales.',
    sourceIds:['constitucion-politica','cpaca']
  }),
  q({
    id:'q-v6d-m1-03', moduleId:'m1', skillIds:['estado-estructura','dian-estructura'], type:'pjs', difficulty:2,
    case:'En una reunión alguien afirma que, por pertenecer la DIAN a la Rama Ejecutiva, cualquier dependencia puede asumir una función tributaria asignada a otra.',
    stem:'¿Qué corrección es más precisa?',
    options:[
      {id:'a',text:'Pertenecer a la misma entidad o rama no elimina la distribución interna de funciones y competencias.',rationale:'La estructura administrativa distribuye responsabilidades y la competencia sigue siendo relevante.'},
      {id:'b',text:'La afirmación es correcta si el asunto tiene impacto fiscal.',rationale:'El impacto fiscal no crea competencia.'},
      {id:'c',text:'La distribución interna solo importa para asuntos disciplinarios.',rationale:'También importa para la validez y trazabilidad de actuaciones misionales.'}
    ], correctOptionId:'a',
    explanation:'La ubicación institucional ayuda a comprender el sistema, pero no reemplaza el análisis de competencia de la dependencia y del servidor.',
    sourceIds:['decreto-1742-2020','constitucion-politica']
  }),

  q({
    id:'q-v6d-m2-01', moduleId:'m2', skillIds:['servicio-ciudadanias','accesibilidad'], type:'pjs', difficulty:2,
    case:'Una persona manifiesta que no comprende una instrucción técnica publicada por la entidad y solicita orientación por un canal habilitado.',
    stem:'¿Qué actuación refleja mejor la política de servicio a las ciudadanías?',
    options:[
      {id:'a',text:'Remitir únicamente el texto normativo porque toda persona debe interpretarlo por sí misma.',rationale:'La norma puede ser la fuente, pero el servicio público también debe favorecer comprensión y acceso efectivo.'},
      {id:'b',text:'Explicar con lenguaje claro, mantener la precisión jurídica y orientar por el canal competente considerando necesidades de accesibilidad.',rationale:'Combina confianza, inclusión, accesibilidad y atención efectiva sin alterar la regla aplicable.'},
      {id:'c',text:'Modificar el requisito para facilitar el trámite aunque la dependencia no tenga esa atribución.',rationale:'El servicio no autoriza a cambiar requisitos jurídicos por fuera de la competencia.'}
    ], correctOptionId:'b',
    explanation:'Servicio a las ciudadanías no es simplemente amabilidad: busca acceso efectivo, oportuno, comprensible e inclusivo dentro de la legalidad.',
    sourceIds:['fp-relacion-estado-ciudadanias','cpaca']
  }),
  q({
    id:'q-v6d-m2-02', moduleId:'m2', skillIds:['servicio-ciudadanias','mejora-continua'], type:'single', difficulty:2,
    stem:'¿Cuál práctica convierte una queja recurrente en insumo de mejora del servicio?',
    options:[
      {id:'a',text:'Contabilizarla, identificar patrones y usar la evidencia para ajustar información, canal o proceso cuando corresponda.',rationale:'La escucha activa tiene valor cuando alimenta la mejora institucional.'},
      {id:'b',text:'Responder individualmente y evitar registrar el motivo para no aumentar indicadores negativos.',rationale:'Ocultar el patrón impide aprendizaje y afecta trazabilidad.'},
      {id:'c',text:'Clasificar todas las quejas como solicitudes de información.',rationale:'La clasificación debe reflejar la naturaleza real del requerimiento.'}
    ], correctOptionId:'a',
    explanation:'La política vigente conecta escucha, experiencia ciudadana y mejora continua; el registro confiable permite aprender del servicio prestado.',
    sourceIds:['fp-relacion-estado-ciudadanias','mipg']
  }),
  q({
    id:'q-v6d-m2-03', moduleId:'m2', skillIds:['gestion-documental','ciclo-documental'], type:'pjs', difficulty:2,
    case:'Un equipo termina un expediente y propone conservar únicamente una carpeta local con los archivos “más importantes”.',
    stem:'¿Cuál es el principal problema de esa propuesta?',
    options:[
      {id:'a',text:'Que una carpeta local siempre ocupa más espacio que un repositorio institucional.',rationale:'El problema central no es el espacio de almacenamiento.'},
      {id:'b',text:'Que todos los documentos públicos deben imprimirse obligatoriamente.',rationale:'La gestión documental no equivale a imprimir todo.'},
      {id:'c',text:'Que desconoce organización, trazabilidad, conservación, acceso y disposición conforme a instrumentos y procedimientos institucionales.',rationale:'La gestión documental cubre el ciclo y el contexto del documento, no una selección informal de archivos.'}
    ], correctOptionId:'c',
    explanation:'El documento administrativo debe gestionarse durante su ciclo de vida con reglas de organización, conservación, acceso y disposición.',
    sourceIds:['ley-594-2000','dian-pgd-2025','decreto-1080-2015-gestion-documental']
  }),
  q({
    id:'q-v6d-m2-04', moduleId:'m2', skillIds:['gestion-documental','trazabilidad'], type:'single', difficulty:3,
    stem:'¿Qué aporta la trazabilidad documental a un expediente?',
    options:[
      {id:'a',text:'Permite reconstruir origen, actuaciones, versiones y contexto de los documentos relevantes.',rationale:'La trazabilidad ayuda a demostrar qué ocurrió y sobre qué soporte se decidió.'},
      {id:'b',text:'Sustituye la necesidad de aplicar tablas e instrumentos archivísticos.',rationale:'La trazabilidad complementa, no reemplaza, la gestión documental.'},
      {id:'c',text:'Autoriza a conservar indefinidamente cualquier copia de trabajo.',rationale:'La conservación debe responder a instrumentos y necesidades institucionales, no a acumulación indiscriminada.'}
    ], correctOptionId:'a',
    explanation:'Un expediente confiable conserva contexto y evidencia suficiente para reconstruir la actuación, sin confundir trazabilidad con acumulación ilimitada.',
    sourceIds:['dian-pgd-2025','ley-594-2000']
  }),
  q({
    id:'q-v6d-m2-05', moduleId:'m2', skillIds:['transparencia','gestion-informacion'], type:'pjs', difficulty:3,
    case:'Una dependencia recibe una solicitud de información y detecta que parte del expediente contiene información con tratamiento restringido.',
    stem:'¿Qué enfoque es más adecuado?',
    options:[
      {id:'a',text:'Negar la totalidad del acceso siempre que exista un solo dato restringido.',rationale:'La existencia de información protegida no convierte automáticamente todo el expediente en reservado.'},
      {id:'b',text:'Aplicar las reglas de acceso, clasificación o reserva al contenido que corresponda y facilitar la información pública que sí pueda entregarse.',rationale:'Armoniza máxima publicidad con protección de información sometida a límites legales.'},
      {id:'c',text:'Entregar el expediente completo si el solicitante afirma que lo usará solo para fines académicos.',rationale:'La finalidad alegada no elimina las restricciones legales aplicables.'}
    ], correctOptionId:'b',
    explanation:'Transparencia exige facilitar acceso a información pública y, simultáneamente, proteger la información legítimamente clasificada o reservada.',
    sourceIds:['ley-1712-2014','dian-transparencia-informacion']
  }),

  q({
    id:'q-v6d-m3-01', moduleId:'m3', skillIds:['dian-estructura','competencia'], type:'single', difficulty:2,
    stem:'¿Qué utilidad tiene distinguir Nivel Central, Local y Delegado al estudiar CT-CR-3007?',
    options:[
      {id:'a',text:'Memorizar todas las dependencias aunque no se relacionen con el empleo.',rationale:'El objetivo no es memorizar indiscriminadamente el organigrama.'},
      {id:'b',text:'Ubicar cómo se distribuyen dirección, supervisión y ejecución y evitar atribuir una actuación a cualquier dependencia por igual.',rationale:'La estructura ayuda a razonar sobre responsabilidades y competencia.'},
      {id:'c',text:'Concluir que el Nivel Central ejecuta necesariamente todas las actuaciones individuales.',rationale:'Dirección o supervisión no equivale siempre a ejecución concreta.'}
    ], correctOptionId:'b',
    explanation:'La estructura es útil cuando permite conectar una función con el nivel y la dependencia competente, no cuando se memoriza como lista aislada.',
    sourceIds:['decreto-1742-2020','merf-ct-cr-3007']
  }),
  q({
    id:'q-v6d-m3-02', moduleId:'m3', skillIds:['dian-estructura','direccion-ejecucion'], type:'pjs', difficulty:3,
    case:'Una opción de respuesta atribuye a una dependencia directiva la realización automática de toda actuación operativa de cobro en los expedientes del país.',
    stem:'¿Qué señal debería hacerte revisar esa opción?',
    options:[
      {id:'a',text:'Que las funciones de dirigir, orientar o supervisar no son sinónimas de ejecutar personalmente cada actuación operativa.',rationale:'La redacción funcional del Decreto 1742 distingue roles y debe leerse con cuidado.'},
      {id:'b',text:'Que las actuaciones tributarias nunca pueden ejecutarse en el nivel local.',rationale:'Esa generalización es incorrecta.'},
      {id:'c',text:'Que ninguna dependencia directiva puede emitir lineamientos.',rationale:'Las dependencias directivas sí pueden tener funciones de dirección y orientación.'}
    ], correctOptionId:'a',
    explanation:'En PJS, un distractor frecuente usa una función institucional real pero confunde dirigir/supervisar con ejecutar un acto específico.',
    sourceIds:['decreto-1742-2020']
  }),
  q({
    id:'q-v6d-m3-03', moduleId:'m3', skillIds:['taci','dian-mision'], type:'single', difficulty:2,
    stem:'¿Por qué el sistema tributario, aduanero y cambiario aparece como conocimiento básico aunque el empleo se concentre en obligaciones tributarias?',
    options:[
      {id:'a',text:'Porque obliga a dominar con igual profundidad todos los procedimientos aduaneros y cambiarios.',rationale:'La ficha no convierte todos los subsistemas en núcleo funcional del cargo.'},
      {id:'b',text:'Porque reemplaza el estudio de cartera y devoluciones.',rationale:'El conocimiento general no desplaza las competencias específicas.'},
      {id:'c',text:'Porque ubica el trabajo tributario dentro del alcance institucional de la DIAN y ayuda a distinguir el ámbito pertinente del caso.',rationale:'Es conocimiento de contexto que debe leerse junto con las funciones concretas.'}
    ], correctOptionId:'c',
    explanation:'La amplitud institucional de la DIAN aporta contexto; la profundidad de estudio debe seguir el MERF y las funciones del empleo.',
    sourceIds:['merf-ct-cr-3007','decreto-1742-2020']
  }),
  q({
    id:'q-v6d-m3-04', moduleId:'m3', skillIds:['dian-estructura','pjs'], type:'pjs', difficulty:3,
    case:'Una pregunta presenta una actuación técnicamente posible, pero asignada a una dependencia que no tiene esa función en el supuesto descrito.',
    stem:'¿Qué elemento debe pesar más al elegir la respuesta?',
    options:[
      {id:'a',text:'Que la medida parezca eficiente.',rationale:'La eficiencia no corrige un problema de competencia.'},
      {id:'b',text:'Que la actuación, la etapa y la competencia coincidan en el caso concreto.',rationale:'Una actuación real puede ser incorrecta si corresponde a otra autoridad o momento.'},
      {id:'c',text:'Que la opción use más terminología institucional.',rationale:'La forma de redacción no determina procedencia.'}
    ], correctOptionId:'b',
    explanation:'La técnica PJS exige integrar hechos, competencia y etapa; reconocer una figura real no basta.',
    sourceIds:['decreto-1742-2020','merf-ct-cr-3007']
  }),

  q({
    id:'q-v6d-m4-01', moduleId:'m4', skillIds:['cpaca-actuacion','inicio-actuacion'], type:'pjs', difficulty:3,
    case:'Una actuación administrativa puede iniciarse por solicitud de una persona o por iniciativa de la administración, según el régimen aplicable.',
    stem:'¿Qué debe hacer primero el servidor ante un expediente recién recibido?',
    options:[
      {id:'a',text:'Identificar origen, hechos, competencia y procedimiento aplicable antes de escoger la actuación siguiente.',rationale:'Ese diagnóstico evita aplicar mecánicamente una etapa que no corresponde.'},
      {id:'b',text:'Notificar una decisión definitiva para acelerar el trámite.',rationale:'No puede saltarse la formación y análisis de la actuación.'},
      {id:'c',text:'Abrir siempre un periodo probatorio aunque no exista controversia fáctica.',rationale:'La necesidad de pruebas depende de la actuación y de los hechos que deban acreditarse.'}
    ], correctOptionId:'a',
    explanation:'El procedimiento se resuelve en secuencia: primero se entiende cómo nace la actuación, quién es competente y qué hechos deben tramitarse.',
    sourceIds:['cpaca']
  }),
  q({
    id:'q-v6d-m4-02', moduleId:'m4', skillIds:['cpaca-terceros','debido-proceso'], type:'single', difficulty:3,
    stem:'¿Por qué importa identificar a terceros que puedan resultar directamente afectados por una actuación?',
    options:[
      {id:'a',text:'Porque todo tercero adquiere automáticamente la calidad de autoridad decisora.',rationale:'Intervenir no significa decidir.'},
      {id:'b',text:'Porque puede ser necesario garantizar su participación en los términos del CPACA y proteger contradicción y debido proceso.',rationale:'La intervención de terceros responde a condiciones legales y a las garantías de la actuación.'},
      {id:'c',text:'Porque su presencia elimina la competencia de la entidad.',rationale:'La competencia no desaparece por la existencia de terceros interesados.'}
    ], correctOptionId:'b',
    explanation:'La actuación no se analiza solo entre administración y peticionario; cuando la ley lo prevé, terceros pueden tener una posición jurídicamente relevante.',
    sourceIds:['cpaca']
  }),
  q({
    id:'q-v6d-m4-03', moduleId:'m4', skillIds:['cpaca-pruebas','debido-proceso'], type:'pjs', difficulty:3,
    case:'Dos documentos del expediente ofrecen versiones incompatibles de un hecho determinante para decidir.',
    stem:'¿Qué enfoque es más defendible?',
    options:[
      {id:'a',text:'Elegir el documento más reciente sin valorar su contenido.',rationale:'La fecha por sí sola no resuelve la fuerza o pertinencia de la evidencia.'},
      {id:'b',text:'Decidir con base en la versión que favorezca a la administración.',rationale:'Eso desconoce imparcialidad y valoración objetiva.'},
      {id:'c',text:'Determinar qué hechos requieren prueba, incorporar o practicar la evidencia procedente y valorarla antes de decidir.',rationale:'La decisión debe apoyarse en hechos suficientemente establecidos dentro del procedimiento.'}
    ], correctOptionId:'c',
    explanation:'La prueba sirve para resolver hechos relevantes; no es una formalidad automática ni una selección por conveniencia.',
    sourceIds:['cpaca']
  }),
  q({
    id:'q-v6d-m4-04', moduleId:'m4', skillIds:['cpaca-irregularidades','eficacia'], type:'single', difficulty:3,
    stem:'Ante una irregularidad advertida durante la actuación, ¿cuál es la mejor lectura general del CPACA?',
    options:[
      {id:'a',text:'La autoridad debe valorar y sanear la irregularidad cuando jurídicamente proceda, evitando que el trámite continúe con un defecto que comprometa la decisión.',rationale:'El procedimiento incorpora mecanismos para corregir irregularidades dentro del marco legal.'},
      {id:'b',text:'Toda irregularidad obliga a reiniciar siempre la actuación desde cero.',rationale:'No todas las irregularidades tienen el mismo alcance ni efecto.'},
      {id:'c',text:'Las irregularidades se ignoran si el resultado final parece correcto.',rationale:'El debido proceso exige atender defectos procedimentales relevantes.'}
    ], correctOptionId:'a',
    explanation:'No debe confundirse corrección o saneamiento con indiferencia frente al procedimiento; el efecto concreto depende de la naturaleza del defecto.',
    sourceIds:['cpaca']
  }),
  q({
    id:'q-v6d-m4-05', moduleId:'m4', skillIds:['cpaca-publicidad','notificacion'], type:'pjs', difficulty:3,
    case:'Una oficina termina un acto particular y propone publicarlo en la web como única actuación de publicidad, sin revisar a quién debe darse a conocer ni la forma exigida.',
    stem:'¿Qué debería comprobar antes?',
    options:[
      {id:'a',text:'Solo si el documento tiene más de una página.',rationale:'La extensión no define el mecanismo de publicidad.'},
      {id:'b',text:'Si por la naturaleza del acto corresponde publicación, comunicación o notificación y qué requisitos debe cumplir el mecanismo aplicable.',rationale:'Las formas de dar a conocer actos no son intercambiables por conveniencia.'},
      {id:'c',text:'Si el interesado usa redes sociales.',rationale:'Ese dato no sustituye las reglas legales de publicidad/notificación.'}
    ], correctOptionId:'b',
    explanation:'Una decisión correcta puede perder eficacia práctica o comprometer garantías si se usa una forma de publicidad distinta de la exigida.',
    sourceIds:['cpaca']
  }),
  q({
    id:'q-v6d-m4-06', moduleId:'m4', skillIds:['cpaca-recursos','firmeza'], type:'single', difficulty:3,
    stem:'¿Qué diferencia conceptual debes conservar entre recurso y firmeza?',
    options:[
      {id:'a',text:'El recurso es un mecanismo de impugnación; la firmeza describe un estado del acto una vez se cumplen las condiciones legales correspondientes.',rationale:'Son momentos y conceptos distintos dentro del ciclo de la decisión.'},
      {id:'b',text:'Son sinónimos: interponer un recurso vuelve firme el acto.',rationale:'La interposición de un recurso no equivale a firmeza.'},
      {id:'c',text:'La firmeza ocurre antes de cualquier posibilidad de contradicción.',rationale:'Esa generalización desconoce el régimen de recursos y firmeza.'}
    ], correctOptionId:'a',
    explanation:'En preguntas de cronología, no confundas “se decidió” con “quedó firme”; primero identifica recursos y demás condiciones aplicables.',
    sourceIds:['cpaca']
  }),
  q({
    id:'q-v6d-m4-07', moduleId:'m4', skillIds:['cpaca-silencio','decision'], type:'pjs', difficulty:4,
    case:'Ha transcurrido un término sin que la administración haya emitido decisión expresa y una opción del examen afirma que “el silencio siempre significa aprobación”.',
    stem:'¿Cómo debes evaluar esa opción?',
    options:[
      {id:'a',text:'Aceptarla porque todo silencio administrativo favorece al interesado.',rationale:'El efecto del silencio no es universalmente positivo.'},
      {id:'b',text:'Rechazarla: debe identificarse el régimen aplicable y el efecto que la ley asigna al silencio en ese supuesto.',rationale:'El silencio positivo requiere habilitación normativa; no puede presumirse de forma general.'},
      {id:'c',text:'Aceptarla solo cuando la actuación tenga documentos completos.',rationale:'La completitud documental no transforma por sí sola la regla legal del silencio.'}
    ], correctOptionId:'b',
    explanation:'El silencio administrativo tiene efectos definidos por la ley; en PJS, desconfía de afirmaciones absolutas como “siempre equivale a aprobación”.',
    sourceIds:['cpaca']
  }),
  q({
    id:'q-v6d-m4-08', moduleId:'m4', skillIds:['cpaca-firmeza','ejecutoriedad'], type:'single', difficulty:3,
    stem:'¿Cuál secuencia conceptual evita un error frecuente?',
    options:[
      {id:'a',text:'Ejecutar primero, notificar después y finalmente revisar recursos.',rationale:'Invierte garantías y etapas esenciales.'},
      {id:'b',text:'Toda decisión es inmediatamente inmodificable desde su firma.',rationale:'La firma no agota automáticamente recursos, publicidad ni reglas de firmeza.'},
      {id:'c',text:'Decisión → forma de publicidad/notificación aplicable → recursos cuando procedan → firmeza → ejecutoriedad en los términos legales.',rationale:'Es un mapa mental útil, sujeto a las reglas específicas de cada actuación.'}
    ], correctOptionId:'c',
    explanation:'Firmeza y ejecutoriedad son conceptos relacionados pero no idénticos; la secuencia exacta depende de la norma aplicable.',
    sourceIds:['cpaca']
  }),
  q({
    id:'q-v6d-m4-09', moduleId:'m4', skillIds:['cpaca-motivacion','decision'], type:'pjs', difficulty:3,
    case:'El expediente contiene hechos y argumentos relevantes, pero el proyecto de decisión se limita a una frase conclusiva sin explicar por qué se adopta.',
    stem:'¿Qué riesgo es más evidente?',
    options:[
      {id:'a',text:'Que la decisión no permita comprender adecuadamente sus fundamentos y dificulte el ejercicio de contradicción o control.',rationale:'La motivación permite conectar hechos, normas y conclusión cuando es exigible.'},
      {id:'b',text:'Que el documento no tenga suficientes elementos gráficos.',rationale:'El problema es jurídico y argumentativo, no de diseño.'},
      {id:'c',text:'Que toda decisión deba contener una transcripción completa del expediente.',rationale:'Motivar no significa copiar todo el expediente.'}
    ], correctOptionId:'a',
    explanation:'La calidad de una decisión se mide por la relación comprensible entre evidencia, regla aplicable y conclusión, no por su extensión.',
    sourceIds:['cpaca']
  }),
  q({
    id:'q-v6d-m4-10', moduleId:'m4', skillIds:['cpaca-secuencia','pjs'], type:'pjs', difficulty:4,
    case:'En un caso aparecen simultáneamente una petición, una posible prueba, un tercero interesado y una futura decisión.',
    stem:'¿Qué estrategia de lectura reduce más los errores?',
    options:[
      {id:'a',text:'Escoger la figura jurídica más conocida y acomodar los hechos después.',rationale:'Eso favorece sesgo de confirmación.'},
      {id:'b',text:'Ordenar cronológicamente los hechos, ubicar competencia y determinar qué actuación corresponde en la etapa actual.',rationale:'El orden procedimental permite descartar opciones verdaderas pero prematuras o tardías.'},
      {id:'c',text:'Elegir la opción con más citas normativas.',rationale:'La cantidad de referencias no garantiza pertinencia.'}
    ], correctOptionId:'b',
    explanation:'La cronología es una herramienta de razonamiento: en PJS importa lo procedente ahora, no todo lo que podría ocurrir en el expediente.',
    sourceIds:['cpaca','merf-ct-cr-3007']
  }),

  q({
    id:'q-v6d-m5-01', moduleId:'m5', skillIds:['teoria-imposicion','deber-contribuir'], type:'single', difficulty:2,
    stem:'¿Qué idea conecta mejor el deber de contribuir con los principios del sistema tributario?',
    options:[
      {id:'a',text:'La obligación de contribuir existe sin límites constitucionales.',rationale:'El poder tributario también está sujeto a principios constitucionales.'},
      {id:'b',text:'Solo importa recaudar el mayor valor posible.',rationale:'La Constitución no reduce el sistema tributario al volumen de recaudo.'},
      {id:'c',text:'El deber de contribuir se desarrolla dentro de un sistema fundado, entre otros, en equidad, eficiencia y progresividad.',rationale:'Permite comprender finalidad y límites sin separar deber y principios.'}
    ], correctOptionId:'c',
    explanation:'La teoría de la imposición ayuda a interpretar la obligación dentro del marco constitucional, no como una regla aislada de cobro.',
    sourceIds:['constitucion-politica','estatuto-tributario']
  }),
  q({
    id:'q-v6d-m5-02', moduleId:'m5', skillIds:['teoria-imposicion','irretroactividad'], type:'pjs', difficulty:3,
    case:'Una opción propone aplicar a un periodo ya consolidado una regla tributaria posterior únicamente porque aumenta el recaudo.',
    stem:'¿Qué principio obliga a revisar esa conclusión?',
    options:[
      {id:'a',text:'Irretroactividad tributaria en los términos constitucionales aplicables.',rationale:'La dimensión temporal de la norma tributaria no puede ignorarse por conveniencia recaudatoria.'},
      {id:'b',text:'Publicidad comercial.',rationale:'No es el principio pertinente.'},
      {id:'c',text:'Libre competencia económica como regla única.',rationale:'No resuelve el problema temporal planteado.'}
    ], correctOptionId:'a',
    explanation:'En preguntas temporales distingue cuándo surge el hecho o periodo gravado y qué norma rige; no asumas aplicación retroactiva por utilidad fiscal.',
    sourceIds:['constitucion-politica']
  }),
  q({
    id:'q-v6d-m5-03', moduleId:'m5', skillIds:['obligacion-tributaria','elementos-tributo'], type:'single', difficulty:2,
    stem:'¿Para qué sirve identificar sujeto, hecho generador, base y tarifa cuando el caso lo exige?',
    options:[
      {id:'a',text:'Para reemplazar el análisis de la obligación formal.',rationale:'Los elementos del tributo no hacen desaparecer otros deberes formales.'},
      {id:'b',text:'Para comprender cómo se estructura la obligación sustancial y evitar calcular o exigir un tributo sin ubicar sus elementos relevantes.',rationale:'Es la función conceptual de esos elementos.'},
      {id:'c',text:'Para concluir que todos los tributos tienen exactamente las mismas reglas.',rationale:'Cada tributo tiene regulación propia.'}
    ], correctOptionId:'b',
    explanation:'La teoría se vuelve práctica cuando permite reconstruir por qué existe una obligación y sobre qué magnitud se determina.',
    sourceIds:['estatuto-tributario','decreto-1625-2016']
  }),
  q({
    id:'q-v6d-m5-04', moduleId:'m5', skillIds:['obligacion-formal','obligacion-sustancial'], type:'pjs', difficulty:2,
    case:'Un contribuyente cumplió una obligación formal de informar, pero todavía existe una suma sustancial exigible bajo el supuesto.',
    stem:'¿Qué conclusión es más adecuada?',
    options:[
      {id:'a',text:'Cumplir una obligación formal no extingue por sí mismo una obligación sustancial distinta.',rationale:'Debe identificarse qué obligación se cumplió y cuál permanece.'},
      {id:'b',text:'Toda obligación desaparece al presentar cualquier información.',rationale:'Confunde deberes de naturaleza distinta.'},
      {id:'c',text:'Las obligaciones formales carecen de relevancia para la DIAN.',rationale:'También son deberes administrados y objeto de control.'}
    ], correctOptionId:'a',
    explanation:'Una pregunta puede mezclar deberes formales y sustanciales; separarlos evita asumir efectos que una actuación no produce.',
    sourceIds:['estatuto-tributario','merf-ct-cr-3007']
  }),

  q({
    id:'q-v6d-m6-01', moduleId:'m6', skillIds:['recaudo','cadena-informacion'], type:'single', difficulty:2,
    stem:'¿Qué mapa resume mejor el flujo conceptual desde un pago hasta su uso en cartera?',
    options:[
      {id:'a',text:'Documento o pago recibido → registro/transmisión → imputación/procesamiento → reflejo en el estado de cuenta → validación de su realidad.',rationale:'Representa una cadena que convierte un dato de recaudo en información útil para decidir.'},
      {id:'b',text:'Pago → cobro coactivo automático.',rationale:'Ignora registro, imputación, estado de cuenta y validación.'},
      {id:'c',text:'Declaración → archivo definitivo sin controles posteriores.',rationale:'La información puede requerir procesamiento, conciliación o corrección.'}
    ], correctOptionId:'a',
    explanation:'El estado de cuenta es resultado de una cadena de información. Antes de cobrar o devolver, el dato debe representar la realidad fiscal.',
    sourceIds:['proc-correccion-inconsistencias-0033','proc-normalizacion-ccc-0276','merf-ct-cr-3007']
  }),
  q({
    id:'q-v6d-m6-02', moduleId:'m6', skillIds:['estado-cuenta','imputacion'], type:'pjs', difficulty:3,
    case:'El contribuyente aporta soporte de pago, pero el estado de cuenta continúa mostrando un saldo. El equipo aún no ha determinado la causa de la diferencia.',
    stem:'¿Qué actuación es más sólida antes de iniciar una nueva gestión de cobro?',
    options:[
      {id:'a',text:'Asumir que el soporte siempre prevalece sobre los registros institucionales.',rationale:'El soporte debe verificarse; tampoco puede ignorarse el sistema sin análisis.'},
      {id:'b',text:'Ignorar el soporte porque el sistema es infalible.',rationale:'Los procedimientos de corrección y normalización existen precisamente porque pueden presentarse inconsistencias.'},
      {id:'c',text:'Conciliar soportes, registro, imputación y estado de cuenta para establecer la realidad y exigibilidad del saldo.',rationale:'Evita cobrar sobre una inconsistencia no resuelta y preserva trazabilidad.'}
    ], correctOptionId:'c',
    explanation:'La función del empleo menciona depuración, reproceso de saldos y realidad fiscal; el sistema es una fuente crítica, no una presunción irrebatible.',
    sourceIds:['proc-correccion-inconsistencias-0033','proc-normalizacion-ccc-0276','merf-ct-cr-3007']
  }),
  q({
    id:'q-v6d-m6-03', moduleId:'m6', skillIds:['estado-cuenta','calidad-datos'], type:'single', difficulty:3,
    stem:'¿Qué condición hace que un estado de cuenta sea útil para una decisión de cartera?',
    options:[
      {id:'a',text:'Que tenga el mayor número posible de movimientos, aunque existan duplicados.',rationale:'Más datos no compensan errores de calidad.'},
      {id:'b',text:'Que los movimientos relevantes estén correctamente identificados, imputados y conciliados para reflejar la realidad fiscal disponible.',rationale:'La calidad del dato debe permitir confiar razonablemente en el saldo y su historia.'},
      {id:'c',text:'Que no pueda ser revisado por ningún funcionario.',rationale:'Los controles y correcciones autorizadas forman parte de la gestión de calidad.'}
    ], correctOptionId:'b',
    explanation:'La cantidad de registros no es sinónimo de calidad; exactitud, consistencia y trazabilidad son condiciones para usar el dato en una actuación.',
    sourceIds:['proc-normalizacion-ccc-0276','merf-ct-cr-3007']
  }),
  q({
    id:'q-v6d-m6-04', moduleId:'m6', skillIds:['recaudo','trazabilidad'], type:'pjs', difficulty:3,
    case:'Una inconsistencia se corrige manualmente en un sistema autorizado, pero no queda evidencia suficiente de qué se modificó ni por qué.',
    stem:'¿Qué debilidad se genera?',
    options:[
      {id:'a',text:'Pérdida de trazabilidad y dificultad para auditar la modificación aunque el saldo final parezca correcto.',rationale:'La calidad también exige poder explicar el origen de cambios relevantes.'},
      {id:'b',text:'Ninguna, porque solo importa el valor final.',rationale:'La trazabilidad es esencial para control y confianza.'},
      {id:'c',text:'Únicamente un problema de formato visual.',rationale:'Es un problema de control de información.'}
    ], correctOptionId:'a',
    explanation:'Una corrección válida debe quedar soportada de forma que pueda reconstruirse la actuación y su fundamento.',
    sourceIds:['proc-correccion-inconsistencias-0033','auditoria-accesos-dian-2025']
  }),

  q({
    id:'q-v6d-m7-01', moduleId:'m7', skillIds:['ear','autorizacion'], type:'pjs', difficulty:3,
    case:'Una entidad financiera quiere empezar a recibir recaudos administrados por la DIAN, pero aún no ha concluido el procedimiento institucional de autorización.',
    stem:'¿Qué lectura es correcta?',
    options:[
      {id:'a',text:'Puede operar de inmediato si ya presta servicios financieros al público.',rationale:'La condición de entidad financiera no sustituye el procedimiento de autorización como EAR.'},
      {id:'b',text:'Debe cumplir el procedimiento y requisitos aplicables antes de actuar como Entidad Autorizada para Recaudar.',rationale:'La autorización es una etapa propia del esquema de recaudo.'},
      {id:'c',text:'La autorización solo se revisa después de una sanción.',rationale:'Es un requisito previo al ejercicio de esa función.'}
    ], correctOptionId:'b',
    explanation:'Autorización, operación, seguimiento, conciliación y eventual sanción son momentos distintos del ciclo EAR.',
    sourceIds:['proc-autorizacion-ear-0028','merf-ct-cr-3007']
  }),
  q({
    id:'q-v6d-m7-02', moduleId:'m7', skillIds:['ear','conciliacion'], type:'single', difficulty:3,
    stem:'¿Por qué la conciliación es central en la relación con una EAR?',
    options:[
      {id:'a',text:'Porque permite comparar información y valores de recaudo para identificar diferencias que requieren explicación o corrección.',rationale:'Conciliar ayuda a verificar integridad y correspondencia de la cadena de recaudo.'},
      {id:'b',text:'Porque reemplaza toda auditoría y seguimiento posterior.',rationale:'La conciliación es un control, no la totalidad del sistema de supervisión.'},
      {id:'c',text:'Porque convierte cualquier diferencia en sanción automática.',rationale:'Una diferencia debe analizarse antes de atribuir responsabilidad o sanción.'}
    ], correctOptionId:'a',
    explanation:'La conciliación es una herramienta de control de información y valores; no debe confundirse con la consecuencia jurídica final de una inconsistencia.',
    sourceIds:['proc-conciliacion-ear-0373','proc-auditoria-ear-0032']
  }),
  q({
    id:'q-v6d-m7-03', moduleId:'m7', skillIds:['ear','sanciones'], type:'pjs', difficulty:4,
    case:'Durante el seguimiento se identifica una posible infracción de una EAR. Un funcionario propone imponer de inmediato la consecuencia más gravosa “para dar ejemplo”.',
    stem:'¿Qué debe primar?',
    options:[
      {id:'a',text:'La gravedad aparente definida por la opinión del funcionario.',rationale:'La sanción requiere tipicidad, procedimiento y valoración según el régimen aplicable.'},
      {id:'b',text:'La rapidez, aunque no se haya verificado el supuesto normativo.',rationale:'La celeridad no sustituye los presupuestos de una actuación sancionatoria.'},
      {id:'c',text:'Verificar hechos, norma, competencia y procedimiento antes de determinar si procede una sanción y cuál.',rationale:'La consecuencia debe surgir del régimen aplicable, no de una finalidad ejemplarizante informal.'}
    ], correctOptionId:'c',
    explanation:'En PJS, una sanción puede ser una figura real pero improcedente si aún no se han verificado el supuesto, la competencia o la etapa.',
    sourceIds:['proc-sanciones-ear-0030','cpaca']
  }),
  q({
    id:'q-v6d-m7-04', moduleId:'m7', skillIds:['grandes-contribuyentes','retencion-iva'], type:'single', difficulty:3,
    stem:'Según la Resolución DIAN 000248 de 2025, ¿qué efecto acompaña a los contribuyentes allí calificados como Grandes Contribuyentes para 2026, sin perjuicio de normas especiales?',
    options:[
      {id:'a',text:'Quedan exentos de presentar declaraciones electrónicas.',rationale:'La resolución dispone obligaciones de presentación y pago para los nuevos calificados.'},
      {id:'b',text:'Adquieren la calidad de agentes de retención del IVA en los términos señalados por la resolución.',rationale:'Es uno de los efectos expresos de la calificación contemplados en el acto.'},
      {id:'c',text:'Dejan de estar sujetos a mecanismos de control tributario.',rationale:'La calificación no elimina el control.'}
    ], correctOptionId:'b',
    explanation:'La condición de Gran Contribuyente tiene efectos jurídicos concretos; debe consultarse la resolución vigente y evitar generalizaciones históricas.',
    sourceIds:['res-248-2025-grandes-contribuyentes']
  }),

  q({
    id:'q-v6d-m10-01', moduleId:'m10', skillIds:['facilidades-pago','garantias'], type:'pjs', difficulty:3,
    case:'Una facilidad de pago exige garantía bajo el supuesto aplicable. El expediente contiene una garantía ofrecida, pero aún no se ha verificado su suficiencia ni perfeccionamiento.',
    stem:'¿Qué actuación es más prudente?',
    options:[
      {id:'a',text:'Dar por cumplido el requisito porque el deudor manifestó que la garantía es suficiente.',rationale:'La manifestación no sustituye la verificación institucional.'},
      {id:'b',text:'Continuar como si no existiera ninguna garantía y negar automáticamente toda facilidad.',rationale:'Primero debe analizarse la garantía aportada y el régimen aplicable.'},
      {id:'c',text:'Verificar requisitos, suficiencia y formalización de la garantía antes de tratarla como respaldo efectivo de la facilidad.',rationale:'La garantía solo cumple su función cuando jurídicamente resulta apta bajo el caso concreto.'}
    ], correctOptionId:'c',
    explanation:'Ofrecer una garantía y tener una garantía jurídicamente eficaz no son necesariamente el mismo momento; el expediente debe demostrar el cumplimiento del requisito.',
    sourceIds:['proc-facilidades-0272','dian-facilidades-faq-2026']
  }),
  q({
    id:'q-v6d-m10-02', moduleId:'m10', skillIds:['facilidades-pago','seguimiento'], type:'single', difficulty:3,
    stem:'¿Por qué una facilidad concedida no cierra por sí sola toda gestión de cartera?',
    options:[
      {id:'a',text:'Porque debe hacerse seguimiento a las condiciones y pagos, y el incumplimiento puede producir efectos previstos en el régimen aplicable.',rationale:'La facilidad organiza la normalización de la deuda y requiere control de cumplimiento.'},
      {id:'b',text:'Porque toda facilidad debe convertirse de inmediato en proceso concursal.',rationale:'Son instituciones distintas.'},
      {id:'c',text:'Porque las facilidades nunca tienen efectos sobre el cobro.',rationale:'Sí pueden afectar la ruta de normalización y cobro según su estado y reglas.'}
    ], correctOptionId:'a',
    explanation:'No basta con identificar que “existe una facilidad”: en PJS importa si está vigente, sus condiciones y su nivel real de cumplimiento.',
    sourceIds:['proc-facilidades-0272','dian-facilidades-faq-2026']
  }),

  q({
    id:'q-v6d-m17-01', moduleId:'m17', skillIds:['calidad-datos','sistemas-informacion'], type:'single', difficulty:2,
    stem:'¿Qué conjunto describe mejor dimensiones prácticas de calidad para información usada en decisiones?',
    options:[
      {id:'a',text:'Cantidad, color, tamaño y antigüedad.',rationale:'No son dimensiones suficientes para valorar la calidad de un dato operativo.'},
      {id:'b',text:'Exactitud, completitud, consistencia y oportunidad.',rationale:'Permiten preguntar si el dato representa correctamente el hecho, está completo, no se contradice y llega a tiempo.'},
      {id:'c',text:'Confidencialidad como único criterio.',rationale:'La seguridad es esencial, pero no agota la calidad de la información.'}
    ], correctOptionId:'b',
    explanation:'Un dato puede estar protegido y aun así ser incompleto o inconsistente; seguridad y calidad se complementan.',
    sourceIds:['merf-ct-cr-3007','auditoria-accesos-dian-2025']
  }),
  q({
    id:'q-v6d-m17-02', moduleId:'m17', skillIds:['calidad-datos','trazabilidad'], type:'pjs', difficulty:3,
    case:'Dos sistemas corporativos muestran estados distintos para una misma obligación y el funcionario debe decidir cuál usar en una actuación.',
    stem:'¿Qué debe hacer antes de escoger arbitrariamente uno?',
    options:[
      {id:'a',text:'Usar siempre el sistema que muestre el valor mayor.',rationale:'El valor más alto no es un criterio de calidad.'},
      {id:'b',text:'Usar el dato que aparezca primero en pantalla.',rationale:'El orden visual tampoco demuestra veracidad.'},
      {id:'c',text:'Identificar origen, fecha, reglas de actualización y trazabilidad; conciliar la inconsistencia según el procedimiento y sistema competente.',rationale:'La decisión debe apoyarse en información confiable y explicable.'}
    ], correctOptionId:'c',
    explanation:'Una inconsistencia entre sistemas es un problema de calidad y gobierno del dato que debe resolverse antes de convertirla en una actuación contra el contribuyente.',
    sourceIds:['merf-ct-cr-3007','proc-normalizacion-ccc-0276','auditoria-accesos-dian-2025']
  })
]
