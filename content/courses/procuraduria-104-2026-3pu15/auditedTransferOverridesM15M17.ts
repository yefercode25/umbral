import type { FoundationTransferOverride } from './foundationTransferOverrides'

/** Reescritura de seis preguntas ya existentes: ninguna cambia su ID. */
export const auditedTransferOverridesM15M17: Record<string, [FoundationTransferOverride, FoundationTransferOverride]> = {
  'pgn-m15': [
    {
      caseText: 'Una oficina expide una resolución individual que resuelve una solicitud de una persona. El sistema conserva el documento con firma y una nota de que se envió una citación, pero no existe constancia de notificación personal, por aviso ni otra modalidad legalmente válida. Un analista de correspondencia considera que el término para recursos transcurrió desde la firma porque la resolución está almacenada desde esa fecha.',
      stem: '¿Qué verificación debe hacerse antes de afirmar que la decisión es eficaz frente al interesado y está en firme?',
      correct: {
        text: 'Revisar la naturaleza de la decisión, la exigencia de notificación y las constancias de su cumplimiento, los recursos procedentes y el supuesto legal de firmeza, diferenciando cada hito.',
        reason: 'Una resolución firmada y una citación no acreditan por sí solas notificación surtida ni firmeza frente al destinatario.',
      },
      other: [
        {
          text: 'Contar el término de recursos desde la fecha del archivo PDF, porque guardar el acto demuestra comunicación al interesado y produce ejecutoria.',
          reason: 'La fecha de expedición o almacenamiento no sustituye las formas legales de notificación.',
        },
        {
          text: 'Declarar nula la resolución por carecer aún de constancia de notificación, sin analizar su validez, eficacia y posibilidad de cumplir el trámite legal.',
          reason: 'La posible falta de notificación exige distinguir eficacia y demás efectos; no implica automáticamente nulidad del acto.',
        },
      ],
      explanation: 'CPACA: la expedición y la validez del acto no equivalen al cumplimiento de la notificación, y la firmeza del artículo 87 depende de sus condiciones legales. Deben analizarse naturaleza, destinatario, recursos y soportes reales.',
      difficulty: 4,
    },
    {
      caseText: 'El área de archivo recibe una diligencia que demuestra que una resolución particular fue notificada personalmente al interesado el jueves y que se entregó copia con indicación de recursos. Una hoja Excel conserva como fecha de notificación el lunes, cuando se había enviado una citación. Además, un equipo debate si el acto ya puede ejecutarse materialmente por el solo hecho de tener firma, sin comprobar recursos ni firmeza.',
      stem: '¿Cómo modifica la constancia la lectura del expediente y qué condición adicional debe revisarse antes de hablar de ejecución?',
      correct: {
        text: 'Corregir la fecha a la notificación legal acreditada, verificar si había recursos y su oportunidad, determinar la causal de firmeza aplicable y distinguirla de la posibilidad de ejecución según la ley.',
        reason: 'La constancia nueva cambia un hito jurídico verificable; notificación, firmeza y ejecución son conceptos relacionados pero diferentes.',
      },
      other: [
        {
          text: 'Conservar la fecha de citación porque siempre inicia recursos, y declarar firme el acto desde el lunes para evitar modificar indicadores de correspondencia.',
          reason: 'Una citación no reemplaza la notificación surtida y una métrica interna no prevalece sobre el expediente.',
        },
        {
          text: 'Declarar que el acto es nulo por haberse notificado después de firmado, aunque se hubiera cumplido válidamente la diligencia legal en la fecha acreditada.',
          reason: 'La existencia de fechas distintas de expedición y notificación no demuestra por sí sola causal de nulidad.',
        },
      ],
      explanation: 'Los arts. 67–69 y 87 del CPACA permiten distinguir citación, notificación, oportunidad de recursos y firmeza. La ejecución se analiza bajo reglas propias, sin tomar la fecha de firma como habilitación universal.',
      difficulty: 5,
    },
  ],
  'pgn-m16': [
    {
      caseText: 'Un funcionario revisa una actuación disciplinaria en etapa de instrucción. Para calcular un plazo, utiliza una plantilla de CPACA usada para actuaciones administrativas ordinarias, aunque el Código General Disciplinario regula esa etapa de manera específica. Un compañero sostiene que debe usarse la cifra del régimen general porque está más familiarizado con ella; otro propone considerar vencido el proceso sumando dos términos de objetos distintos.',
      stem: '¿Qué regla evita mezclar el régimen general con la regulación especial del procedimiento disciplinario?',
      correct: {
        text: 'Identificar fase, sujeto y norma específica del CGD para su plazo y presupuestos; examinar solo después si una cuestión no prevista admite aplicación general supletoria sin contradecir el régimen especial.',
        reason: 'La regulación especial gobierna lo que contempla expresamente, mientras una eventual aplicación del CPACA depende de su pertinencia jurídica.',
      },
      other: [
        {
          text: 'Aplicar el plazo genérico del CPACA en todas las fases disciplinarias porque un término menor resulta más eficiente que la norma especial.',
          reason: 'La celeridad no deroga la ley especial ni modifica el presupuesto que habilita la fase.',
        },
        {
          text: 'Sumar los términos de CPACA y CGD para evitar vencimientos prematuros y considerar que la suma crea un nuevo plazo legal de trámite.',
          reason: 'Los términos no se suman por conveniencia entre regímenes distintos, sin habilitación normativa.',
        },
      ],
      explanation: 'El artículo 34 del CPACA y el Código General Disciplinario obligan a identificar el procedimiento y su norma especial. Los plazos y efectos no se promedian ni sustituyen mediante plantillas de oficina.',
      difficulty: 4,
    },
    {
      caseText: 'La oficina descubre que dos actuaciones anotadas como «disciplinarias» eran distintas: una sí pertenece a la investigación regulada por el CGD y la otra es una petición ciudadana de acceso a copias de algunos documentos. La plantilla aplicó el mismo término procesal a las dos. Un profesional propone mantener la clasificación para no rehacer el reporte; otro quiere declarar nulos ambos trámites antes de revisar sus garantías.',
      stem: '¿Qué cambia al conocer el verdadero objeto de cada actuación y cómo se deben corregir sus términos?',
      correct: {
        text: 'Reclasificar los trámites, aplicar CGD a la investigación y petición y acceso a la solicitud autónoma; verificar efectos del error.',
        reason: 'El cambio de objeto determina qué régimen y plazo corresponden a cada expediente y exige distinguir irregularidad de consecuencia procesal.',
      },
      other: [
        {
          text: 'Mantener un solo plazo por conveniencia estadística aunque la fuente pruebe que una pretensión era petición de documentos.',
          reason: 'La clasificación errónea puede producir un cálculo de término incorrecto y no se corrige escondiendo el hecho.',
        },
        {
          text: 'Declarar nulidad absoluta de toda actuación por haber usado una plantilla equivocada, sin comprobar el defecto, el procedimiento y la autoridad habilitada.',
          reason: 'Los efectos jurídicos de una irregularidad no son automáticos y deben examinarse por régimen, presupuesto y garantía.',
        },
      ],
      explanation: 'El CPACA como régimen general, la Ley 1755 y el CGD tienen objetos y normas que deben identificarse antes de computar términos. El dato adicional cambia la clasificación y exige una corrección explicada y trazable.',
      difficulty: 5,
    },
  ],
  'pgn-m17': [
    {
      caseText: 'Una alcaldía recibe una solicitud con copia de un expediente y una consulta sobre las funciones de otra entidad. Hay datos personales de terceros en algunos anexos. El profesional la registró como una sola petición general con plazo de 15 días y marca la carpeta «respondida» porque existe un borrador del texto de consulta, sin envío acreditado. Se propone negar todos los documentos por la presencia de datos protegidos.',
      stem: '¿Cuál procedimiento permite aplicar las distintas reglas de petición y acreditar la respuesta completa?',
      correct: {
        text: 'Separar copias, consulta y asunto de autoridad ajena; verificar términos, traslado por incompetencia, acceso parcial y reserva, y conservar prueba de comunicación efectiva de respuestas de fondo para cada componente.',
        reason: 'El mismo radicado admite componentes diferentes y la protección parcial no implica negación total de lo público.',
      },
      other: [
        {
          text: 'Contar 15 días para todo, cerrar al redactar un borrador y declarar que los demás componentes se respondieron por referirse al mismo correo.',
          reason: 'Un borrador no garantiza respuesta de fondo ni comunicación; los objetos pueden tener reglas y plazos distintos.',
        },
        {
          text: 'Negar íntegro el expediente y no tramitar la consulta, porque basta identificar un dato personal para que ninguna información pueda entregarse.',
          reason: 'El acceso a documentos se analiza según reserva específica, datos y posibilidad de versión pública.',
        },
      ],
      explanation: 'Ley 1755 de 2015: art. 14 (15 días general, 10 días documentos e información, 30 días consulta, salvo reglas especiales) y art. 21 (autoridad no competente). Ley 1712/2014 y Ley 1581/2012 permiten diferenciar acceso y protección de datos.',
      difficulty: 4,
    },
    {
      caseText: 'Tras registrar una petición de información y consulta, la alcaldía comprueba que no tiene competencia para resolver el segundo punto. El traslado se prepara dentro de los cinco días de la recepción escrita; también se encuentra una parte pública de los anexos inicialmente reservados. La tabla sigue marcando toda la solicitud como cerrada desde que se elaboró el borrador y el funcionario desea mantener la fecha para evitar un reporte tardío.',
      stem: '¿Qué ajuste exige la nueva información sobre competencia, acceso y fechas de respuesta?',
      correct: {
        text: 'Documentar aviso y remisión por incompetencia según art. 21, distinguir desde cuándo cuenta el término para la autoridad competente, tramitar el acceso parcial procedente y corregir el estado hasta verificar las respuestas efectivamente comunicadas.',
        reason: 'Una petición mixta exige trazabilidad por componente y un traslado válido, no un cierre basado en fecha de borrador.',
      },
      other: [
        {
          text: 'Mantener el cierre total desde la elaboración interna porque un borrador y el traslado pendiente son suficientes para dar por contestado al ciudadano.',
          reason: 'Ni la preparación de respuesta ni la etiqueta de estado acreditan comunicación efectiva o contestación de fondo.',
        },
        {
          text: 'Responder por la otra autoridad para evitar el traslado y divulgar íntegros los anexos, incluida información personal protegida, por celeridad.',
          reason: 'La celeridad no crea competencia ni dispensa la protección legal de datos de terceros.',
        },
      ],
      explanation: 'Ley 1755: la falta de competencia debe informarse y tramitarse conforme al art. 21 y el plazo de la competente se cuenta desde recepción por ella. El acceso parcial a información pública se analiza según restricciones aplicables y toda comunicación debe ser comprobable.',
      difficulty: 5,
    },
  ],
}
