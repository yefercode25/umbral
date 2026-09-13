import type { Question } from '../../../../src/types/course'

const verifiedAt = '2026-09-13'

export const dianFoundationExpansionQuestions: Question[] = [
  // M1 · Estado, Constitución y función pública
  {
    id: 'q-found-m1-01', moduleId: 'm1', skillIds: ['funcion-publica','legalidad','competencia'], type: 'pjs', difficulty: 3,
    case: 'Un servidor recibe una solicitud urgente relacionada con cartera. Para “ayudar al ciudadano”, considera adoptar una decisión que corresponde a otra dependencia porque sabe cómo resolverla.',
    stem: '¿Cuál es la actuación más adecuada?',
    options: [
      { id: 'a', text: 'Resolver directamente porque la celeridad prevalece sobre la competencia.', rationale: 'La celeridad no habilita a una autoridad para asumir competencias que no tiene.' },
      { id: 'b', text: 'Encauzar la actuación hacia la autoridad competente y orientar al ciudadano, preservando oportunidad y legalidad.', rationale: 'Servicio y celeridad deben operar dentro del marco de competencia.' },
      { id: 'c', text: 'Archivar sin informar porque la solicitud llegó a la dependencia equivocada.', rationale: 'La administración debe gestionar la petición conforme a las reglas aplicables, no desentenderse del ciudadano.' },
    ], correctOptionId: 'b', explanation: 'La función administrativa combina servicio, eficacia y celeridad con legalidad y competencia. Un buen servidor no sacrifica una regla estructural para parecer más rápido.', sourceIds: ['constitucion-politica','cpaca'], verifiedAt,
  },
  {
    id: 'q-found-m1-02', moduleId: 'm1', skillIds: ['debido-proceso','igualdad','imparcialidad'], type: 'pjs', difficulty: 3,
    case: 'Dos contribuyentes se encuentran en situaciones jurídicamente equivalentes. Un funcionario propone dar trámite preferente a uno de ellos porque es conocido de la dirección regional.',
    stem: '¿Qué principio resulta especialmente comprometido?',
    options: [
      { id: 'a', text: 'Imparcialidad e igualdad en la actuación administrativa.', rationale: 'La relación personal no es criterio jurídico para alterar el tratamiento de casos equivalentes.' },
      { id: 'b', text: 'Publicidad, porque toda actuación debe publicarse en redes sociales.', rationale: 'La publicidad tiene alcance jurídico propio y no significa difusión irrestricta.' },
      { id: 'c', text: 'Economía, porque atender a un conocido siempre cuesta menos.', rationale: 'No existe esa regla y el argumento no justifica trato diferencial.' },
    ], correctOptionId: 'a', explanation: 'La administración debe decidir con criterios objetivos y sin favoritismos. En PJS, una opción “práctica” puede ser incorrecta si introduce un privilegio sin fundamento.', sourceIds: ['constitucion-politica','cpaca'], verifiedAt,
  },
  {
    id: 'q-found-m1-03', moduleId: 'm1', skillIds: ['estado','separacion-funciones','estructura-publica'], type: 'single', difficulty: 2,
    stem: '¿Cuál afirmación describe mejor la relación entre estructura del Estado y actuación de la DIAN?',
    options: [
      { id: 'a', text: 'La DIAN puede ejercer cualquier función estatal si con ello recauda más.', rationale: 'Las autoridades actúan dentro de competencias constitucionales y legales.' },
      { id: 'b', text: 'La DIAN integra la administración pública y ejerce las competencias que el ordenamiento le asigna dentro de la estructura estatal.', rationale: 'La entidad no actúa por poder general sino por atribuciones definidas.' },
      { id: 'c', text: 'La DIAN es una autoridad judicial porque decide asuntos tributarios.', rationale: 'Ejercer funciones administrativas tributarias no convierte a la entidad en rama judicial.' },
    ], correctOptionId: 'b', explanation: 'Comprender la estructura estatal evita errores de competencia: una autoridad administrativa puede adoptar decisiones relevantes sin dejar de estar sometida a la Constitución y la ley.', sourceIds: ['constitucion-politica','decreto-1742-2020'], verifiedAt,
  },
  {
    id: 'q-found-m1-04', moduleId: 'm1', skillIds: ['interes-general','derechos','proporcionalidad'], type: 'pjs', difficulty: 4,
    case: 'Para acelerar una campaña de cumplimiento se propone publicar un listado con datos personales detallados de todos los contribuyentes contactados, aunque la finalidad puede cumplirse con información agregada.',
    stem: '¿Cuál es el mejor razonamiento?',
    options: [
      { id: 'a', text: 'El interés fiscal permite divulgar cualquier dato sin límite.', rationale: 'El interés general no elimina automáticamente derechos ni reglas de tratamiento de información.' },
      { id: 'b', text: 'Debe escogerse una alternativa que cumpla la finalidad institucional respetando los derechos y restricciones aplicables al tratamiento y divulgación de información.', rationale: 'La actuación pública debe armonizar fines institucionales con garantías constitucionales.' },
      { id: 'c', text: 'Nunca puede publicarse ninguna información relacionada con gestión tributaria.', rationale: 'La transparencia y publicidad también existen, aunque sujetas a límites y reservas.' },
    ], correctOptionId: 'b', explanation: 'Los fines públicos no autorizan medios ilimitados. La respuesta sólida identifica finalidad, competencia y límites de derechos antes de actuar.', sourceIds: ['constitucion-politica','ley-1712-2014','manual-seguridad-dian'], verifiedAt,
  },
  {
    id: 'q-found-m1-05', moduleId: 'm1', skillIds: ['responsabilidad-servidor','motivacion','trazabilidad'], type: 'pjs', difficulty: 3,
    case: 'Un funcionario detecta que una decisión propuesta afectará la situación fiscal de un contribuyente. Su superior le dice que no deje constancia del análisis porque “es una instrucción interna”.',
    stem: '¿Qué debe privilegiar?',
    options: [
      { id: 'a', text: 'La instrucción verbal, aunque impida reconstruir por qué se tomó la decisión.', rationale: 'La obediencia no sustituye los deberes de legalidad, motivación y trazabilidad cuando sean exigibles.' },
      { id: 'b', text: 'El cumplimiento de la normativa y la documentación suficiente de la actuación dentro de su competencia.', rationale: 'Una decisión pública debe poder sostenerse por razones jurídicas y evidencia.' },
      { id: 'c', text: 'Destruir los antecedentes para evitar desacuerdos posteriores.', rationale: 'Esto vulnera la integridad documental y la rendición de cuentas.' },
    ], correctOptionId: 'b', explanation: 'La responsabilidad del servidor no desaparece por una orden informal. En un expediente, la trazabilidad protege tanto al ciudadano como a la administración.', sourceIds: ['constitucion-politica','cpaca','ley-594-2000'], verifiedAt,
  },

  // M2 · Transparencia, PQRSF, MIPG y gestión
  {
    id: 'q-found-m2-01', moduleId: 'm2', skillIds: ['transparencia','version-publica','reserva'], type: 'pjs', difficulty: 4,
    case: 'Una persona solicita copia de un documento institucional que contiene una sección pública y otra amparada por una reserva legal debidamente identificada.',
    stem: '¿Cuál es la respuesta más adecuada?',
    options: [
      { id: 'a', text: 'Negar todo el documento sin analizar si puede separarse la información.', rationale: 'La reserva de una parte no necesariamente vuelve reservado todo el documento.' },
      { id: 'b', text: 'Entregar una versión pública de lo no reservado y motivar la protección de la parte excluida conforme a la ley.', rationale: 'La máxima publicidad convive con excepciones que deben aplicarse de manera justificada y delimitada.' },
      { id: 'c', text: 'Entregar todo porque el principio de transparencia elimina cualquier reserva.', rationale: 'La ley reconoce información exceptuada cuando concurren sus presupuestos.' },
    ], correctOptionId: 'b', explanation: 'La transparencia no se gestiona con extremos. Primero se identifica qué puede divulgarse y qué está legítimamente protegido.', sourceIds: ['ley-1712-2014'], verifiedAt,
  },
  {
    id: 'q-found-m2-02', moduleId: 'm2', skillIds: ['derecho-peticion','terminos','clasificacion'], type: 'single', difficulty: 2,
    stem: 'Como regla general, ¿qué distinción de términos resulta correcta bajo la Ley 1755 de 2015?',
    options: [
      { id: 'a', text: 'Peticiones generales: 15 días; documentos e información: 10 días; consultas: 30 días.', rationale: 'Es la diferenciación general prevista por la ley, salvo norma especial.' },
      { id: 'b', text: 'Todas las peticiones tienen siempre 30 días.', rationale: 'La ley distingue tipos de petición y términos.' },
      { id: 'c', text: 'Documentos: 30 días; consultas: 10 días.', rationale: 'Invierte los términos generales.' },
    ], correctOptionId: 'a', explanation: 'Antes de contar días hay que clasificar la petición y verificar si existe una regla especial aplicable al asunto.', sourceIds: ['ley-1755-2015'], verifiedAt,
  },
  {
    id: 'q-found-m2-03', moduleId: 'm2', skillIds: ['gestion-documental','expediente','trazabilidad'], type: 'pjs', difficulty: 3,
    case: 'Durante una actuación de cartera se reciben soportes por correo institucional. Un servidor propone conservarlos únicamente en su bandeja personal porque “allí no se pierden”.',
    stem: '¿Qué debe hacerse?',
    options: [
      { id: 'a', text: 'Mantenerlos solo en el correo del servidor.', rationale: 'La información del expediente no debe depender de una bandeja personal.' },
      { id: 'b', text: 'Incorporarlos y gestionarlos en el expediente o repositorio institucional definido, preservando clasificación, integridad y trazabilidad.', rationale: 'La gestión documental acompaña el documento durante su ciclo institucional.' },
      { id: 'c', text: 'Imprimirlos y destruir toda evidencia electrónica sin aplicar el procedimiento documental.', rationale: 'El cambio de soporte no autoriza eliminar trazabilidad ni desconocer reglas institucionales.' },
    ], correctOptionId: 'b', explanation: 'La gestión documental no es “guardar archivos”; es asegurar que la evidencia institucional pueda localizarse, conservarse y contextualizarse correctamente.', sourceIds: ['ley-594-2000'], verifiedAt,
  },
  {
    id: 'q-found-m2-04', moduleId: 'm2', skillIds: ['mipg','mejora-continua','gestion-conocimiento'], type: 'pjs', difficulty: 4,
    case: 'Tres seccionales repiten durante meses la misma inconsistencia en la actualización de saldos. Cada equipo corrige casos individuales, pero nadie analiza la causa común.',
    stem: 'Desde una lógica MIPG, ¿qué actuación agrega más valor?',
    options: [
      { id: 'a', text: 'Continuar corrigiendo casos sin compartir lo aprendido.', rationale: 'Resuelve síntomas, pero no fortalece aprendizaje institucional ni prevención.' },
      { id: 'b', text: 'Consolidar evidencia, identificar la causa, compartir conocimiento y ajustar controles o procesos para evitar recurrencia.', rationale: 'MIPG integra ejecución, conocimiento, seguimiento y mejora.' },
      { id: 'c', text: 'Ocultar la recurrencia para no afectar indicadores.', rationale: 'Distorsiona la gestión y bloquea la mejora.' },
    ], correctOptionId: 'b', explanation: 'La gestión pública madura no termina en resolver el caso individual: aprende del patrón y retroalimenta procesos y controles.', sourceIds: ['mipg'], verifiedAt,
  },
  {
    id: 'q-found-m2-05', moduleId: 'm2', skillIds: ['servicio-ciudadano','pqrsf','orientacion'], type: 'pjs', difficulty: 3,
    case: 'Un ciudadano formula una queja confusa y mezcla una inconformidad de servicio con una solicitud concreta de información sobre su trámite.',
    stem: '¿Qué enfoque es más adecuado?',
    options: [
      { id: 'a', text: 'Rechazarla porque utilizó una categoría incorrecta.', rationale: 'La forma utilizada por el ciudadano no debe impedir identificar el contenido real de su solicitud.' },
      { id: 'b', text: 'Identificar los componentes de la comunicación, tramitar cada uno por la ruta que corresponda y orientar de forma clara.', rationale: 'La administración debe comprender la necesidad y encauzarla correctamente.' },
      { id: 'c', text: 'Responder únicamente la parte más fácil y omitir el resto.', rationale: 'Dejaría necesidades sin atender y afectaría la integralidad de la respuesta.' },
    ], correctOptionId: 'b', explanation: 'Orientación al ciudadano no significa prometer resultados favorables; significa comprender, encauzar y responder correctamente dentro de la competencia institucional.', sourceIds: ['ley-1755-2015','mipg'], verifiedAt,
  },

  // M3 · DIAN y sistema TACI
  {
    id: 'q-found-m3-01', moduleId: 'm3', skillIds: ['dian','mision','ct-cr-3007'], type: 'single', difficulty: 2,
    stem: '¿Cuál descripción ubica mejor el empleo CT-CR-3007 dentro de la DIAN?',
    options: [
      { id: 'a', text: 'Es un empleo misional asociado al Cumplimiento de obligaciones tributarias, con subprocesos de Administración de cartera y Recaudo-Devoluciones.', rationale: 'Es la ubicación funcional señalada en el MERF del empleo.' },
      { id: 'b', text: 'Es un empleo exclusivamente de fiscalización aduanera.', rationale: 'No corresponde a los subprocesos asignados a la ficha.' },
      { id: 'c', text: 'Es un empleo administrativo sin relación con la gestión tributaria.', rationale: 'La ficha es expresamente misional y tributaria.' },
    ], correctOptionId: 'a', explanation: 'Esta ubicación es la brújula del curso: permite estudiar conocimientos transversales sin perder de vista dónde se concentra la responsabilidad del cargo.', sourceIds: ['merf-ct-cr-3007','decreto-1742-2020'], verifiedAt,
  },
  {
    id: 'q-found-m3-02', moduleId: 'm3', skillIds: ['taci','alcance-transversal','priorizacion-estudio'], type: 'pjs', difficulty: 3,
    case: 'Un aspirante decide dedicar la mayor parte de su tiempo a valoración aduanera especializada porque el MERF menciona una introducción al sistema tributario, aduanero y cambiario.',
    stem: '¿Qué ajuste de estudio es más razonable?',
    options: [
      { id: 'a', text: 'Mantener todo el tiempo en valoración aduanera porque TACI exige especialización profunda en los tres sistemas.', rationale: 'La ficha pide introducción transversal, mientras sus funciones específicas se concentran en cartera, recaudo y devoluciones.' },
      { id: 'b', text: 'Conservar una base transversal TACI, pero priorizar la profundidad de los subprocesos y competencias específicas de CT-CR-3007.', rationale: 'Equilibra conocimientos básicos con pertinencia funcional.' },
      { id: 'c', text: 'Eliminar por completo cualquier noción aduanera y cambiaria.', rationale: 'El MERF sí incluye introducción al sistema TACI entre sus competencias básicas.' },
    ], correctOptionId: 'b', explanation: 'La priorización no consiste en ignorar TACI, sino en diferenciar amplitud básica de profundidad funcional.', sourceIds: ['merf-ct-cr-3007'], verifiedAt,
  },
  {
    id: 'q-found-m3-03', moduleId: 'm3', skillIds: ['estructura-dian','nivel-central','seccional'], type: 'pjs', difficulty: 3,
    case: 'Una directriz operativa expedida por el nivel competente busca unificar la forma en que varias seccionales realizan una actividad del subproceso de cartera.',
    stem: '¿Qué idea institucional refleja mejor esta situación?',
    options: [
      { id: 'a', text: 'Que cada seccional puede ignorar lineamientos centrales y crear cualquier procedimiento propio.', rationale: 'La ficha del empleo exige actuar conforme a políticas, procedimientos y directrices institucionales.' },
      { id: 'b', text: 'Que la operación seccional debe articularse con las competencias, políticas y directrices institucionales vigentes.', rationale: 'La aplicación de la ficha comprende niveles Central y Seccional y su propósito menciona directrices de Nivel Central.' },
      { id: 'c', text: 'Que el nivel central sustituye siempre al funcionario responsable del expediente.', rationale: 'La coordinación institucional no elimina responsabilidades ni competencias concretas.' },
    ], correctOptionId: 'b', explanation: 'La DIAN funciona con distribución de competencias y lineamientos comunes. Unificar criterios no significa borrar la responsabilidad de cada actor.', sourceIds: ['merf-ct-cr-3007','decreto-1742-2020'], verifiedAt,
  },
  {
    id: 'q-found-m3-04', moduleId: 'm3', skillIds: ['proceso-misional','subprocesos','integracion'], type: 'pjs', difficulty: 4,
    case: 'En un expediente de devolución aparece una deuda exigible del mismo contribuyente. Un aspirante afirma que devoluciones y cartera deben estudiarse como mundos totalmente aislados.',
    stem: '¿Qué lectura se ajusta mejor a CT-CR-3007?',
    options: [
      { id: 'a', text: 'Los subprocesos pueden interactuar; por eso el empleo exige comprender tanto Recaudo-Devoluciones como Administración de cartera.', rationale: 'La propia ficha asigna ambos subprocesos y varias situaciones operativas los conectan.' },
      { id: 'b', text: 'La existencia de una deuda nunca puede ser relevante en una devolución.', rationale: 'La normativa contempla relaciones entre saldos, compensaciones y obligaciones a cargo.' },
      { id: 'c', text: 'Solo debe conocerse el subproceso que aparezca primero en el manual.', rationale: 'La ficha asigna ambos de manera expresa.' },
    ], correctOptionId: 'a', explanation: 'Los mejores casos situacionales cruzan subprocesos. Entender la arquitectura misional ayuda a detectar cuándo una actuación depende de información producida por otra ruta.', sourceIds: ['merf-ct-cr-3007','estatuto-tributario'], verifiedAt,
  },
  {
    id: 'q-found-m3-05', moduleId: 'm3', skillIds: ['politicas-institucionales','procedimientos','responsabilidad'], type: 'pjs', difficulty: 3,
    case: 'Un funcionario conoce una práctica informal que “siempre se ha hecho así”, pero el procedimiento institucional vigente establece una secuencia distinta.',
    stem: '¿Cuál referencia debe prevalecer en su actuación?',
    options: [
      { id: 'a', text: 'La costumbre informal, porque tiene más antigüedad.', rationale: 'Una práctica no reemplaza el marco normativo y procedimental vigente.' },
      { id: 'b', text: 'La normativa, competencia y procedimiento institucional vigente, dejando trazabilidad cuando exista una situación que requiera escalamiento.', rationale: 'El empleo debe actuar conforme a normas, políticas, planes y procedimientos institucionales.' },
      { id: 'c', text: 'La opción que produzca mayor recaudo, aunque contradiga el procedimiento.', rationale: 'El resultado fiscal no autoriza desconocer legalidad ni procedimiento.' },
    ], correctOptionId: 'b', explanation: 'En PJS, “siempre se ha hecho así” es un distractor clásico. La decisión debe poder justificarse con reglas vigentes, no con hábitos.', sourceIds: ['merf-ct-cr-3007','codigo-buen-gobierno-dian'], verifiedAt,
  },

  // M4 · Procedimiento administrativo general
  {
    id: 'q-found-m4-01', moduleId: 'm4', skillIds: ['norma-especial','cpaca','subsidiariedad'], type: 'pjs', difficulty: 4,
    case: 'Una actuación tributaria tiene una regla especial expresa sobre su trámite. Un servidor encuentra además una regla general del CPACA que regula la materia de forma distinta.',
    stem: '¿Cuál es el primer criterio de análisis?',
    options: [
      { id: 'a', text: 'Aplicar automáticamente el CPACA porque toda norma administrativa general desplaza la tributaria.', rationale: 'La existencia de un régimen especial exige revisar su prevalencia y la aplicación supletoria de reglas generales.' },
      { id: 'b', text: 'Identificar primero la norma especial aplicable y acudir a la regulación general en aquello que corresponda de manera supletoria o compatible.', rationale: 'La especialidad evita trasladar mecánicamente reglas generales a procedimientos con regulación propia.' },
      { id: 'c', text: 'Escoger la regla que resulte más cómoda para la dependencia.', rationale: 'La selección normativa no depende de conveniencia operativa.' },
    ], correctOptionId: 'b', explanation: 'Una pregunta situacional puede ofrecer dos normas verdaderas; la clave es determinar cuál gobierna concretamente el procedimiento.', sourceIds: ['cpaca','estatuto-tributario'], verifiedAt,
  },
  {
    id: 'q-found-m4-02', moduleId: 'm4', skillIds: ['notificacion','debido-proceso','eficacia-acto'], type: 'pjs', difficulty: 4,
    case: 'Se proyecta continuar una actuación basándose en un acto respecto del cual existen dudas serias sobre si la notificación se realizó de acuerdo con el procedimiento aplicable.',
    stem: '¿Qué debe verificarse antes de avanzar?',
    options: [
      { id: 'a', text: 'La regularidad de la notificación y los efectos que tenga sobre eficacia, términos y defensa según el régimen aplicable.', rationale: 'La notificación puede determinar desde cuándo produce efectos una actuación y cuándo corren términos.' },
      { id: 'b', text: 'Únicamente si el contribuyente conoce informalmente el contenido.', rationale: 'El conocimiento informal no reemplaza automáticamente las formas y efectos previstos por la norma.' },
      { id: 'c', text: 'Nada, porque toda firma interna vuelve eficaz el acto frente al administrado.', rationale: 'La expedición y la eficacia frente al destinatario no son necesariamente el mismo momento.' },
    ], correctOptionId: 'a', explanation: 'En procedimientos de cobro y devoluciones, una fecha de notificación puede cambiar completamente la respuesta correcta. Por eso se verifica antes de contar términos.', sourceIds: ['cpaca','estatuto-tributario'], verifiedAt,
  },
  {
    id: 'q-found-m4-03', moduleId: 'm4', skillIds: ['motivacion','decision-administrativa','evidencia'], type: 'pjs', difficulty: 3,
    case: 'Dos opciones son jurídicamente posibles, pero una decisión afectará de manera directa la situación de un contribuyente. El expediente contiene hechos que deben valorarse para escoger entre ellas.',
    stem: '¿Qué fortalece la decisión administrativa?',
    options: [
      { id: 'a', text: 'Explicar los hechos relevantes, la regla aplicable y la razón que conecta ambos con la decisión.', rationale: 'La motivación permite comprender y controlar el razonamiento de la administración.' },
      { id: 'b', text: 'Usar únicamente una frase genérica: “por conveniencia de la entidad”.', rationale: 'No demuestra cómo los hechos y normas conducen a la decisión.' },
      { id: 'c', text: 'Evitar cualquier soporte para que la decisión no pueda discutirse.', rationale: 'Esto contradice debido proceso, control y trazabilidad.' },
    ], correctOptionId: 'a', explanation: 'Motivar no es llenar páginas: es mostrar la cadena hechos → norma → conclusión con el nivel de detalle que la actuación requiera.', sourceIds: ['cpaca'], verifiedAt,
  },
  {
    id: 'q-found-m4-04', moduleId: 'm4', skillIds: ['recursos','acto-tramite','acto-definitivo'], type: 'pjs', difficulty: 4,
    case: 'Una persona intenta interponer un recurso contra una actuación puramente preparatoria dentro de un procedimiento, pero la norma especial no contempla recurso contra ella.',
    stem: '¿Qué debe analizar el funcionario?',
    options: [
      { id: 'a', text: 'La naturaleza de la actuación y el régimen de recursos aplicable, en lugar de asumir que toda actuación admite recurso.', rationale: 'Los recursos dependen del tipo de decisión y de la regulación concreta.' },
      { id: 'b', text: 'Conceder siempre cualquier recurso solicitado.', rationale: 'La procedencia del recurso es jurídica, no voluntaria.' },
      { id: 'c', text: 'Negarse a explicar la razón porque los recursos nunca requieren análisis.', rationale: 'La decisión sobre procedencia también debe fundarse en el marco aplicable.' },
    ], correctOptionId: 'a', explanation: 'En el procedimiento administrativo no basta ver la palabra “recurso”: hay que identificar qué acto se impugna, cuál régimen lo gobierna y qué recurso está previsto.', sourceIds: ['cpaca','estatuto-tributario'], verifiedAt,
  },
  {
    id: 'q-found-m4-05', moduleId: 'm4', skillIds: ['expediente','prueba','verdad-material'], type: 'pjs', difficulty: 4,
    case: 'El sistema muestra un dato que favorece continuar una actuación, pero el expediente contiene un documento auténtico que contradice ese dato y puede cambiar el resultado.',
    stem: '¿Cuál es el enfoque correcto?',
    options: [
      { id: 'a', text: 'Ignorar el documento porque el sistema siempre prevalece sobre la evidencia.', rationale: 'Los sistemas apoyan la gestión, pero una inconsistencia relevante debe verificarse y corregirse por la ruta competente.' },
      { id: 'b', text: 'Valorar la evidencia, verificar la inconsistencia y asegurar que la decisión se base en hechos correctamente determinados.', rationale: 'La actuación administrativa debe apoyarse en información confiable y en el expediente.' },
      { id: 'c', text: 'Modificar informalmente el dato sin dejar rastro de quién lo hizo ni por qué.', rationale: 'La corrección sin trazabilidad también es defectuosa.' },
    ], correctOptionId: 'b', explanation: 'Este patrón aparecerá repetidamente en CT-CR-3007: dato de sistema, soporte documental y procedimiento de corrección deben converger en una realidad fiscal trazable.', sourceIds: ['cpaca','proc-correccion-inconsistencias-0033'], verifiedAt,
  },

  // M5 · Teoría de la imposición y obligación tributaria
  {
    id: 'q-found-m5-01', moduleId: 'm5', skillIds: ['obligacion-sustancial','obligaciones-formales'], type: 'single', difficulty: 2,
    stem: '¿Cuál distinción es correcta entre obligación sustancial y obligaciones formales?',
    options: [
      { id: 'a', text: 'La sustancial se relaciona con el pago del tributo; las formales comprenden deberes instrumentales como declarar, informar o practicar retenciones cuando corresponda.', rationale: 'Distingue el contenido económico principal de deberes que hacen posible control y administración.' },
      { id: 'b', text: 'Toda obligación formal implica necesariamente que existe un saldo a pagar.', rationale: 'Puede existir incumplimiento formal sin que de ese solo hecho resulte un saldo sustancial idéntico.' },
      { id: 'c', text: 'Las obligaciones formales no tienen relevancia para la DIAN.', rationale: 'Son esenciales para control, información y cumplimiento.' },
    ], correctOptionId: 'a', explanation: 'Esta distinción es básica para comprender control extensivo: una campaña puede gestionar incumplimientos formales, sustanciales o ambos.', sourceIds: ['estatuto-tributario','merf-ct-cr-3007'], verifiedAt,
  },
  {
    id: 'q-found-m5-02', moduleId: 'm5', skillIds: ['retencion','agente-retenedor','obligaciones-terceros'], type: 'pjs', difficulty: 3,
    case: 'Una sociedad actúa como agente retenedor. Un aspirante concluye que sus deberes se limitan a pagar únicamente sus propios impuestos.',
    stem: '¿Qué concepto corrige mejor esa conclusión?',
    options: [
      { id: 'a', text: 'La ley puede imponer a terceros deberes de practicar, declarar y consignar retenciones dentro del sistema de recaudo anticipado.', rationale: 'El agente retenedor cumple obligaciones específicas por mandato legal.' },
      { id: 'b', text: 'Un agente retenedor es siempre el contribuyente económico del impuesto retenido.', rationale: 'Las calidades y responsabilidades pueden ser distintas.' },
      { id: 'c', text: 'La retención es voluntaria cuando el agente considera que facilita el recaudo.', rationale: 'Cuando la ley establece la obligación, no depende de voluntad del agente.' },
    ], correctOptionId: 'a', explanation: 'CT-CR-3007 menciona expresamente control sobre autorretenedores, grandes contribuyentes y agentes retenedores de IVA; por eso hay que comprender roles, no solo el concepto de contribuyente.', sourceIds: ['estatuto-tributario','merf-ct-cr-3007'], verifiedAt,
  },
  {
    id: 'q-found-m5-03', moduleId: 'm5', skillIds: ['legalidad-tributaria','elementos-tributo','reserva-ley'], type: 'single', difficulty: 3,
    stem: '¿Qué idea resume mejor el principio de legalidad tributaria?',
    options: [
      { id: 'a', text: 'Los tributos y sus elementos esenciales se someten a las competencias y reglas constitucionales y legales; la administración no puede crearlos libremente por conveniencia.', rationale: 'La potestad tributaria tiene fundamento y límites constitucionales.' },
      { id: 'b', text: 'Cada funcionario puede crear un tributo temporal si mejora el recaudo.', rationale: 'La administración no dispone de una potestad general para crear tributos.' },
      { id: 'c', text: 'La legalidad solo importa cuando el contribuyente presenta una demanda.', rationale: 'Rige desde la actuación administrativa misma.' },
    ], correctOptionId: 'a', explanation: 'En una PJS, una opción fiscalmente “eficiente” sigue siendo incorrecta si carece de fundamento jurídico.', sourceIds: ['constitucion-politica','estatuto-tributario'], verifiedAt,
  },
  {
    id: 'q-found-m5-04', moduleId: 'm5', skillIds: ['hecho-generador','sujeto','causacion'], type: 'pjs', difficulty: 3,
    case: 'Un funcionario observa un pago realizado por una persona y concluye, solo por ese hecho, que necesariamente se configuraron todos los elementos de una obligación tributaria a su cargo.',
    stem: '¿Qué debe hacer antes de esa conclusión?',
    options: [
      { id: 'a', text: 'Identificar el tributo, el hecho generador, los sujetos y demás elementos relevantes conforme a la norma aplicable.', rationale: 'El pago aislado no sustituye el análisis jurídico de la obligación.' },
      { id: 'b', text: 'Asumir que cualquier transferencia a la DIAN crea una obligación tributaria.', rationale: 'Puede haber pagos en exceso, pagos de lo no debido u otras situaciones que precisamente requieren calificación.' },
      { id: 'c', text: 'Ignorar toda información del contribuyente.', rationale: 'La determinación correcta exige hechos y soporte.' },
    ], correctOptionId: 'a', explanation: 'Comprender cómo nace una obligación evita errores posteriores en estado de cuenta, devolución y cobro.', sourceIds: ['estatuto-tributario'], verifiedAt,
  },
  {
    id: 'q-found-m5-05', moduleId: 'm5', skillIds: ['cumplimiento','formal-sustancial','control'], type: 'pjs', difficulty: 4,
    case: 'Una campaña detecta que un grupo presentó declaraciones oportunamente, pero parte de los valores exigibles no fueron pagados. Otro grupo pagó, pero omitió una obligación formal de información.',
    stem: '¿Cómo debe entenderse el universo de incumplimiento?',
    options: [
      { id: 'a', text: 'Solo existe incumplimiento en el primer grupo porque únicamente importa el dinero.', rationale: 'El sistema también administra deberes formales cuando la ley los impone.' },
      { id: 'b', text: 'Existen incumplimientos de naturaleza diferente y la gestión debe clasificarlos para aplicar la ruta que corresponda.', rationale: 'Control extensivo distingue y gestiona obligaciones formales y sustanciales.' },
      { id: 'c', text: 'Ambos grupos deben recibir exactamente la misma actuación sin revisar obligación, periodo ni estado.', rationale: 'La masividad no elimina la necesidad de segmentar correctamente.' },
    ], correctOptionId: 'b', explanation: 'La teoría básica adquiere sentido cuando permite clasificar el incumplimiento y escoger una actuación proporcional y pertinente.', sourceIds: ['estatuto-tributario','proc-control-extensivo-0382'], verifiedAt,
  },

  // M18 · Comportamentales básicas
  {
    id: 'q-found-m18-01', moduleId: 'm18', skillIds: ['orientacion-logro','calidad','priorizacion'], type: 'pjs', difficulty: 3,
    case: 'Un servidor tiene una meta diaria alta. Para alcanzarla podría cerrar expedientes sin revisar alertas relevantes o procesar menos casos realizando las verificaciones obligatorias.',
    stem: '¿Qué conducta refleja mejor orientación al logro en el servicio público?',
    options: [
      { id: 'a', text: 'Alcanzar la cifra aun sacrificando controles esenciales.', rationale: 'El logro institucional incluye calidad y cumplimiento, no solo volumen.' },
      { id: 'b', text: 'Organizar el trabajo para cumplir metas con calidad, identificar cuellos de botella y escalar riesgos sin omitir verificaciones requeridas.', rationale: 'Combina resultado, responsabilidad y mejora.' },
      { id: 'c', text: 'Renunciar a cualquier meta porque revisar calidad toma tiempo.', rationale: 'Calidad y productividad deben gestionarse conjuntamente.' },
    ], correctOptionId: 'b', explanation: 'En competencias comportamentales, la respuesta fuerte suele integrar resultado con estándares institucionales, no escoger un extremo.', sourceIds: ['res-65-2024'], verifiedAt,
  },
  {
    id: 'q-found-m18-02', moduleId: 'm18', skillIds: ['orientacion-ciudadano','claridad','limites'], type: 'pjs', difficulty: 3,
    case: 'Un contribuyente exige que el funcionario le garantice que una solicitud será decidida a su favor antes de que se revise el expediente.',
    stem: '¿Cuál respuesta refleja mejor orientación al usuario y al ciudadano?',
    options: [
      { id: 'a', text: 'Prometer el resultado para que el ciudadano quede satisfecho.', rationale: 'La orientación de servicio no autoriza prejuzgar ni comprometer una decisión.' },
      { id: 'b', text: 'Explicar con claridad el trámite, requisitos, canales y tiempos aplicables, sin prometer una decisión que depende del análisis del caso.', rationale: 'Ayuda al ciudadano respetando imparcialidad y competencia.' },
      { id: 'c', text: 'Negarse a brindar cualquier orientación porque la decisión aún no existe.', rationale: 'Sí puede y debe orientarse sobre el procedimiento dentro de los límites del rol.' },
    ], correctOptionId: 'b', explanation: 'Servicio excelente no es decir siempre “sí”; es reducir incertidumbre con información clara, veraz y útil.', sourceIds: ['res-65-2024','mipg'], verifiedAt,
  },
  {
    id: 'q-found-m18-03', moduleId: 'm18', skillIds: ['comunicacion-efectiva','escucha','adaptacion-mensaje'], type: 'pjs', difficulty: 3,
    case: 'Durante una capacitación a contribuyentes, el expositor nota que la audiencia no comprende la terminología técnica que está utilizando.',
    stem: '¿Qué debería hacer?',
    options: [
      { id: 'a', text: 'Continuar igual para demostrar dominio técnico.', rationale: 'Comunicar no es solamente emitir información; importa que el mensaje sea comprensible para el receptor.' },
      { id: 'b', text: 'Ajustar ejemplos y lenguaje sin perder precisión, verificar comprensión y responder preguntas relevantes.', rationale: 'La comunicación efectiva adapta el método al interlocutor y al propósito.' },
      { id: 'c', text: 'Eliminar todo contenido técnico aunque sea indispensable.', rationale: 'Adaptar no equivale a volver inexacta la información.' },
    ], correctOptionId: 'b', explanation: 'Una comunicación de calidad conserva exactitud y cambia la forma cuando el contexto lo exige.', sourceIds: ['res-65-2024'], verifiedAt,
  },
  {
    id: 'q-found-m18-04', moduleId: 'm18', skillIds: ['trabajo-equipo','colaboracion','responsabilidad'], type: 'pjs', difficulty: 3,
    case: 'Un expediente complejo requiere información de otra dependencia. Un funcionario decide no solicitar apoyo porque quiere demostrar que puede resolverlo solo.',
    stem: '¿Qué conducta es más adecuada?',
    options: [
      { id: 'a', text: 'Coordinar oportunamente con quienes tienen la información o competencia necesaria, manteniendo clara la responsabilidad de cada actor.', rationale: 'La colaboración efectiva no diluye responsabilidades y mejora la solución del problema.' },
      { id: 'b', text: 'Evitar cualquier coordinación para proteger la autonomía personal.', rationale: 'El aislamiento puede deteriorar oportunidad y calidad.' },
      { id: 'c', text: 'Trasladar todo el expediente y desentenderse del resultado.', rationale: 'Colaborar no equivale a abandonar la responsabilidad propia.' },
    ], correctOptionId: 'a', explanation: 'Trabajo en equipo significa articular capacidades para cumplir el propósito institucional, no “hacer favores” ni trasladar responsabilidades.', sourceIds: ['res-65-2024'], verifiedAt,
  },
  {
    id: 'q-found-m18-05', moduleId: 'm18', skillIds: ['adaptabilidad','cambio','aprendizaje'], type: 'pjs', difficulty: 3,
    case: 'Se implementa un procedimiento institucional actualizado que cambia algunos pasos que el equipo llevaba años realizando de otra manera.',
    stem: '¿Qué conducta muestra mejor adaptabilidad?',
    options: [
      { id: 'a', text: 'Seguir usando indefinidamente el procedimiento anterior porque es más familiar.', rationale: 'La resistencia automática al cambio impide ajustarse a reglas y necesidades nuevas.' },
      { id: 'b', text: 'Comprender el cambio, anticipar su impacto en el trabajo, actualizar la práctica y ayudar a resolver dificultades de implementación.', rationale: 'La adaptabilidad implica ajustar la conducta y contribuir a que el cambio funcione.' },
      { id: 'c', text: 'Aplicar parcialmente cada versión según la preferencia personal.', rationale: 'Generaría inconsistencia y riesgo operativo.' },
    ], correctOptionId: 'b', explanation: 'Adaptabilidad no es aceptar cualquier novedad sin criterio; es comprender el cambio válido, aprender y ajustar oportunamente la actuación.', sourceIds: ['res-65-2024'], verifiedAt,
  },

  // M19 · Competencias específicas y niveles CT-CR-3007
  {
    id: 'q-found-m19-01', moduleId: 'm19', skillIds: ['comportamiento-etico-n4','coherencia','presion'], type: 'pjs', difficulty: 4,
    case: 'Un superior sugiere alterar la fecha de una actuación para que un indicador del equipo aparezca cumplido. Nadie externo parece poder detectarlo.',
    stem: '¿Qué conducta es coherente con Comportamiento ético nivel 4?',
    options: [
      { id: 'a', text: 'Modificar la fecha porque protege la imagen del equipo.', rationale: 'El resultado institucional no justifica falsear la realidad.' },
      { id: 'b', text: 'Mantener la información veraz, actuar conforme a las reglas y gestionar la presión por canales apropiados.', rationale: 'El nivel alto de comportamiento ético exige coherencia incluso bajo presión.' },
      { id: 'c', text: 'Cambiar la fecha solo si todos están de acuerdo.', rationale: 'El consenso no vuelve ética una conducta improcedente.' },
    ], correctOptionId: 'b', explanation: 'La competencia se observa precisamente cuando existe costo o presión para apartarse del estándar ético.', sourceIds: ['res-65-2024','merf-ct-cr-3007'], verifiedAt,
  },
  {
    id: 'q-found-m19-02', moduleId: 'm19', skillIds: ['adaptabilidad-n3','anticipacion','impacto-cambio'], type: 'pjs', difficulty: 4,
    case: 'Se anuncia que un sistema de cartera migrará a una nueva versión en dos semanas. El cambio modificará roles, pantallas y secuencia de algunas tareas.',
    stem: '¿Qué conducta se aproxima más a Adaptabilidad nivel 3?',
    options: [
      { id: 'a', text: 'Esperar al día de salida y reaccionar únicamente cuando aparezcan errores.', rationale: 'Es una respuesta reactiva que no anticipa repercusiones.' },
      { id: 'b', text: 'Identificar procesos afectados, anticipar riesgos, actualizar la forma de trabajo y preparar al equipo para la transición.', rationale: 'El nivel 3 enfatiza anticipación y ajuste frente al cambio.' },
      { id: 'c', text: 'Solicitar conservar permanentemente el sistema anterior para no aprender uno nuevo.', rationale: 'No demuestra adaptación a una modificación institucional válida.' },
    ], correctOptionId: 'b', explanation: 'En este nivel no basta tolerar el cambio: se espera comprender sus efectos y actuar anticipadamente.', sourceIds: ['res-65-2024','merf-ct-cr-3007'], verifiedAt,
  },
  {
    id: 'q-found-m19-03', moduleId: 'm19', skillIds: ['comunicacion-n3','impacto-interlocutor','canal'], type: 'pjs', difficulty: 4,
    case: 'Debe comunicarse a un contribuyente una inconsistencia compleja que puede corregirse por un procedimiento específico. Un correo breve con lenguaje jurídico probablemente generará más confusión.',
    stem: '¿Qué conducta refleja mejor Comunicación efectiva nivel 3?',
    options: [
      { id: 'a', text: 'Escoger el canal y lenguaje adecuados, explicar el problema y la ruta de solución, y comprobar que el mensaje esencial fue comprendido.', rationale: 'El nivel exige considerar método e impacto en el interlocutor.' },
      { id: 'b', text: 'Usar siempre el mismo formato sin considerar destinatario ni complejidad.', rationale: 'La uniformidad mecánica puede reducir eficacia comunicativa.' },
      { id: 'c', text: 'Evitar comunicar la inconsistencia para no incomodar al ciudadano.', rationale: 'Ocultar información necesaria no es comunicación efectiva.' },
    ], correctOptionId: 'a', explanation: 'La comunicación competente es intencional: elige contenido, canal y forma según el propósito y las características del interlocutor.', sourceIds: ['res-65-2024','merf-ct-cr-3007'], verifiedAt,
  },
  {
    id: 'q-found-m19-04', moduleId: 'm19', skillIds: ['trabajo-equipo-n3','clima','valoracion-aportes'], type: 'pjs', difficulty: 4,
    case: 'En una reunión, una persona recién vinculada identifica una falla que el equipo experimentado no había advertido. El coordinador puede ignorarla por su poca antigüedad o analizar el aporte.',
    stem: '¿Qué conducta corresponde mejor a Trabajo en equipo nivel 3?',
    options: [
      { id: 'a', text: 'Escuchar y valorar el aporte por su mérito, promover colaboración y mantener un clima donde puedan plantearse mejoras.', rationale: 'El nivel 3 incluye valoración de aportes y fortalecimiento de la colaboración.' },
      { id: 'b', text: 'Descartar la idea porque la jerarquía determina quién puede detectar problemas.', rationale: 'Reduce colaboración y desaprovecha conocimiento útil.' },
      { id: 'c', text: 'Aceptar toda propuesta sin análisis para evitar conflictos.', rationale: 'Valorar aportes no significa renunciar al juicio técnico.' },
    ], correctOptionId: 'a', explanation: 'Un equipo de alto funcionamiento escucha, analiza y decide por evidencia, preservando un clima que permita aportar.', sourceIds: ['res-65-2024','merf-ct-cr-3007'], verifiedAt,
  },
  {
    id: 'q-found-m19-05', moduleId: 'm19', skillIds: ['perfil-competencias','niveles','ct-cr-3007'], type: 'single', difficulty: 2,
    stem: '¿Cuál combinación de niveles comportamentales específicos corresponde al MERF CT-CR-3007?',
    options: [
      { id: 'a', text: 'Comportamiento ético 4; Adaptabilidad 3; Comunicación efectiva 3; Trabajo en equipo 3.', rationale: 'Es la combinación consignada en la ficha del empleo.' },
      { id: 'b', text: 'Todas las competencias en nivel 1.', rationale: 'No corresponde al perfil de la ficha.' },
      { id: 'c', text: 'Comportamiento ético 2 y las demás en nivel 4.', rationale: 'Invierte los niveles definidos para este empleo.' },
    ], correctOptionId: 'a', explanation: 'No basta memorizar el número: los casos deben entrenarte para reconocer las conductas observables asociadas a esos niveles.', sourceIds: ['merf-ct-cr-3007','res-65-2024'], verifiedAt,
  },

  // M20 · Integridad
  {
    id: 'q-found-m20-01', moduleId: 'm20', skillIds: ['honestidad','conflicto-interes','transparencia'], type: 'pjs', difficulty: 4,
    case: 'Un funcionario advierte que una persona cercana tiene interés económico directo en un trámite que le fue asignado.',
    stem: '¿Qué conducta protege mejor la integridad de la actuación?',
    options: [
      { id: 'a', text: 'Ocultar la relación y decidir rápidamente para demostrar imparcialidad.', rationale: 'Ocultar una situación relevante aumenta el riesgo y reduce confianza.' },
      { id: 'b', text: 'Informar la situación y aplicar el mecanismo institucional/jurídico que corresponda para gestionar el posible conflicto.', rationale: 'La integridad exige transparencia y prevención, no solo convicción subjetiva de ser imparcial.' },
      { id: 'c', text: 'Pedir a la persona cercana qué decisión considera justa.', rationale: 'Profundizaría el conflicto en lugar de gestionarlo.' },
    ], correctOptionId: 'b', explanation: 'La integridad se protege antes de que exista una decisión cuestionable, gestionando de manera abierta los riesgos de conflicto.', sourceIds: ['codigo-integridad-dian','codigo-buen-gobierno-dian'], verifiedAt,
  },
  {
    id: 'q-found-m20-02', moduleId: 'm20', skillIds: ['respeto','trato-digno','presion-ciudadano'], type: 'pjs', difficulty: 3,
    case: 'Un contribuyente llega molesto y utiliza un tono fuerte, aunque no amenaza a nadie. El funcionario conoce la respuesta técnica que debe darle.',
    stem: '¿Qué conducta refleja mejor respeto?',
    options: [
      { id: 'a', text: 'Responder con el mismo tono para establecer autoridad.', rationale: 'Escalar el conflicto no mejora el servicio ni el trato digno.' },
      { id: 'b', text: 'Mantener trato digno y firme, escuchar lo necesario, explicar la ruta aplicable y establecer límites adecuados si la interacción se vuelve irrespetuosa.', rationale: 'Respeto no exige tolerar abusos, pero sí conservar profesionalismo.' },
      { id: 'c', text: 'Modificar el resultado del trámite para calmarlo.', rationale: 'El trato respetuoso no altera la legalidad ni la imparcialidad de la decisión.' },
    ], correctOptionId: 'b', explanation: 'La integridad se prueba también en interacciones difíciles. Firmeza y respeto pueden coexistir.', sourceIds: ['codigo-integridad-dian','res-65-2024'], verifiedAt,
  },
  {
    id: 'q-found-m20-03', moduleId: 'm20', skillIds: ['diligencia','oportunidad','calidad'], type: 'pjs', difficulty: 3,
    case: 'Un expediente tiene vencimiento próximo. El servidor puede enviarlo incompleto para “cumplir el término” o reorganizar prioridades y pedir apoyo oportunamente para terminarlo con los controles requeridos.',
    stem: '¿Qué expresa mejor la diligencia?',
    options: [
      { id: 'a', text: 'Entregar cualquier cosa antes del plazo, aunque no cumpla requisitos esenciales.', rationale: 'La diligencia integra oportunidad con calidad y responsabilidad.' },
      { id: 'b', text: 'Gestionar prioridades, alertar riesgos y completar correctamente la actuación dentro de los mecanismos disponibles.', rationale: 'Actuar diligentemente implica anticipar y resolver obstáculos sin sacrificar estándares.' },
      { id: 'c', text: 'Dejar vencer el término sin informar porque la calidad siempre justifica la demora.', rationale: 'La calidad no elimina el deber de gestionar oportunamente el trabajo.' },
    ], correctOptionId: 'b', explanation: 'La falsa dicotomía “rápido o bien” aparece con frecuencia como distractor. El servidor diligente gestiona ambos objetivos.', sourceIds: ['codigo-integridad-dian'], verifiedAt,
  },
  {
    id: 'q-found-m20-04', moduleId: 'm20', skillIds: ['justicia','imparcialidad','criterios-objetivos'], type: 'pjs', difficulty: 4,
    case: 'Dos expedientes cumplen las mismas condiciones para una actuación. Un directivo pide favorecer uno porque el interesado “tiene buenos contactos”.',
    stem: '¿Qué valor debe guiar especialmente la decisión?',
    options: [
      { id: 'a', text: 'Justicia, aplicando criterios objetivos y el mismo marco a situaciones equivalentes.', rationale: 'El trato no puede depender de influencias personales.' },
      { id: 'b', text: 'Compromiso entendido como obedecer cualquier instrucción superior.', rationale: 'El compromiso con el servicio público no implica ejecutar órdenes contrarias a integridad y legalidad.' },
      { id: 'c', text: 'Diligencia entendida como resolver primero a quien tiene más influencia.', rationale: 'La oportunidad no se define por conexiones personales.' },
    ], correctOptionId: 'a', explanation: 'Los valores del código se complementan. Ninguno convierte el favoritismo en una conducta adecuada.', sourceIds: ['codigo-integridad-dian','constitucion-politica'], verifiedAt,
  },
  {
    id: 'q-found-m20-05', moduleId: 'm20', skillIds: ['compromiso','bien-publico','mejora'], type: 'pjs', difficulty: 3,
    case: 'Un servidor detecta una falla recurrente que no afecta todavía sus propios expedientes, pero sí genera errores en otros equipos y molestias a ciudadanos.',
    stem: '¿Qué conducta refleja mejor compromiso con el servicio público?',
    options: [
      { id: 'a', text: 'Ignorarla porque no está en sus casos actuales.', rationale: 'Limita la responsabilidad a una visión puramente individual.' },
      { id: 'b', text: 'Documentar el patrón y comunicarlo por el canal adecuado para que pueda corregirse o prevenirse, sin invadir competencias ajenas.', rationale: 'Contribuye al propósito institucional y a la mejora sin asumir funciones que no corresponden.' },
      { id: 'c', text: 'Publicar datos internos del problema en redes sociales para presionar una solución.', rationale: 'La mejora debe gestionarse respetando confidencialidad y canales institucionales.' },
    ], correctOptionId: 'b', explanation: 'Compromiso no es heroísmo improvisado: es actuar responsablemente en favor del servicio y contribuir a mejorar lo que puede afectar a la ciudadanía.', sourceIds: ['codigo-integridad-dian','codigo-buen-gobierno-dian'], verifiedAt,
  },
]
