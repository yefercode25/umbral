import type { LessonBlock } from '../../../src/types/course'

/**
 * Auditoría editorial M9–M11. Apoyos contextualizados en las nueve lecciones,
 * sin añadir reactivos ni modificar los contenidos ya auditados.
 */
const blocks: Record<string, Partial<Record<1 | 2 | 3, LessonBlock[]>>> = {
  'pgn-m9': {
    1: [
      {
        type: 'comparison',
        title: 'Territorio, autonomía y competencia son conceptos distintos',
        columns: ['Concepto', 'Regla para aplicar a un expediente'],
        rows: [
          ['Estado unitario (art. 1)', 'Colombia es una república unitaria y descentralizada; las entidades territoriales ejercen autonomía dentro de Constitución y ley.'],
          ['Entidad territorial (art. 286)', 'Departamentos, distritos, municipios y territorios indígenas, según el régimen constitucional. Una región o asociación de municipios no es automáticamente nueva entidad territorial.'],
          ['Autonomía (art. 287)', 'Permite gobernarse mediante autoridades propias, administrar recursos, ejercer competencias y participar en rentas nacionales dentro de los límites constitucionales y legales.'],
          ['Distribución (art. 288)', 'Las competencias atribuidas a niveles territoriales operan conforme a coordinación, concurrencia y subsidiariedad, según la ley.'],
          ['Competencia de PGN', 'No se determina solo por el lugar del hecho: también importan materia, sujeto, nivel del servidor, etapa y normas de distribución interna.'],
        ],
      },
      {
        type: 'trap',
        title: 'Autonomía territorial no significa soberanía',
        text: 'Ni la descentralización permite crear una potestad disciplinaria ajena, ni la cercanía de una sede determina competencia. Un municipio puede tener asuntos propios y necesitar coordinación con otros niveles, sin que por eso una procuraduría provincial asuma automáticamente cualquier expediente allí ocurrido.',
      },
    ],
    2: [
      {
        type: 'comparison',
        title: 'Coordinar, concurrir y subsidiar no significan sustituir',
        columns: ['Principio', 'Decisión que ilustra su aplicación'],
        rows: [
          ['Coordinación', 'Departamento y municipios armonizan información, metas y actuaciones de un proyecto compartido dentro de su ámbito.'],
          ['Concurrencia', 'Dos o más niveles participan en una competencia o servicio de manera articulada, según la distribución que establezca la ley.'],
          ['Subsidiariedad', 'El nivel o instancia habilitada presta apoyo cuando se cumplen las condiciones legales de capacidad o imposibilidad del ente que necesita asistencia.'],
          ['Responsabilidad propia', 'Cada autoridad registra qué debía aportar y ejecutar; un convenio o acuerdo no convierte todos los deberes en intercambiables.'],
        ],
      },
      {
        type: 'example',
        title: 'Intervención en dos municipios',
        text: 'Una inversión departamental financia equipos para puestos de salud en dos municipios. La carpeta contiene actas de recibo municipal, registros de ejecución departamental y un convenio interadministrativo. El profesional debe separar qué hizo cada entidad y cuál es el régimen aplicable. El lugar de entrega no prueba por sí solo quién tenía que supervisar, pagar o conocer una eventual queja.',
      },
    ],
    3: [
      {
        type: 'comparison',
        title: 'La misma ubicación no resuelve la competencia de PGN',
        columns: ['Variación del hecho', 'Qué debe revisarse de nuevo'],
        rows: [
          ['El servidor es de nivel departamental', 'Factor subjetivo y reglas orgánicas aplicables a la dependencia competente de PGN.'],
          ['Se descubre que actuaban dos municipios', 'Conexidad, circunscripción, naturaleza de cada actuación y demás reglas de reparto.'],
          ['Hay una delegada con competencia funcional especial', 'La eventual asignación o competencia preferente exige el presupuesto y trámite previstos; no nace por cercanía.'],
          ['Aparece una etapa de juzgamiento', 'Verificar la estructura y el despacho competente para esa fase, sin asumir que quien instruye también decide.'],
        ],
      },
    ],
  },
  'pgn-m10': {
    1: [
      {
        type: 'comparison',
        title: 'Tres ámbitos misionales de la Procuraduría',
        columns: ['Función', 'Qué se busca y qué no debe confundirse'],
        rows: [
          ['Preventiva y control de gestión', 'Identificar y advertir riesgos de afectación de derechos o de gestión, solicitar información y seguir medidas dentro de competencias. No es sanción anticipada.'],
          ['Intervención', 'Participar ante autoridades administrativas o judiciales en los asuntos y condiciones previstos legalmente, en defensa del orden jurídico, patrimonio público, derechos y garantías.'],
          ['Disciplinaria', 'Evaluar conductas de sujetos disciplinables conforme a deberes, pruebas, competencia, etapas y garantías del Código General Disciplinario.'],
          ['Ministerio Público', 'Conjunto constitucional que comprende, entre otros, Procuraduría, Defensoría y personerías conforme al artículo 118; no equivale a un ministerio del Ejecutivo.'],
        ],
      },
      {
        type: 'trap',
        title: 'La alerta no equivale a la falta',
        text: 'Una queja, riesgo sanitario o porcentaje de ejecución inusual puede justificar verificación preventiva sin que exista automáticamente prueba de falta disciplinaria. Del mismo modo, ejercer una intervención procesal no permite al procurador reemplazar al juez o sancionar al interesado por esa sola intervención.',
      },
    ],
    2: [
      {
        type: 'comparison',
        title: 'Elegir la ruta misional según el objetivo',
        columns: ['Hecho recibido', 'Primer análisis'],
        rows: [
          ['Hospital reporta riesgo de interrupción de servicio', 'Determinar riesgo, derechos afectados, competencia y acciones preventivas de vigilancia o articulación que procedan.'],
          ['Autoridad solicita intervención en un proceso', 'Verificar asunto, atribución procesal, etapa y forma de intervención prevista.'],
          ['Queja con hechos de posible omisión funcional', 'Establecer si corresponde noticia disciplinaria y qué autoridad puede valorarla, sin sustituir la fase probatoria.'],
          ['Un mismo informe contiene riesgo y conducta posible', 'Separar objetivos, información y actuaciones; pueden concurrir rutas diferentes sin declararlas idénticas.'],
        ],
      },
      {
        type: 'example',
        title: 'Un acueducto en riesgo no exige esperar una sanción',
        text: 'Un municipio informa interrupciones del agua. La oficina recibe reportes técnicos incompletos, una petición de la comunidad y la respuesta de un prestador que anuncia un plan. La actuación preventiva puede solicitar cronogramas y verificar la implementación en su ámbito, mientras cualquier valoración disciplinaria se realiza por la ruta competente y con sus propias pruebas.',
      },
    ],
    3: [
      {
        type: 'comparison',
        title: 'Qué cambia cuando aparece evidencia posterior',
        columns: ['Novedad', 'Efecto sobre la ruta'],
        rows: [
          ['La administración ejecuta el plan correctivo', 'Verificar resultados y ajustar seguimiento preventivo; el plan ejecutado no prueba ni borra automáticamente hechos disciplinarios anteriores.'],
          ['Surge evidencia concreta de una omisión de servidor', 'Evaluar si procede remisión o actuación disciplinaria en autoridad competente; el riesgo inicial no bastaba para sancionar.'],
          ['La solicitud corresponde a un trámite judicial', 'Revisar si existe competencia de intervención; la oficina preventiva no decide ese proceso judicial.'],
          ['El informe tiene cifras contradictorias', 'Mantener hechos y supuestos claramente separados antes de emitir requerimientos o conceptos.'],
        ],
      },
    ],
  },
  'pgn-m11': {
    1: [
      {
        type: 'comparison',
        title: 'Estructura institucional y fase del procedimiento',
        columns: ['Nivel o dependencia', 'Aspecto a identificar'],
        rows: [
          ['Despachos y dependencias centrales', 'Especialidades y atribuciones fijadas en la estructura y actos vigentes; no toda delegada conoce cualquier asunto.'],
          ['Procuradurías regionales', 'Circunscripción y competencia definida por sujeto, materia, conexidad y reglas de distribución aplicables.'],
          ['Procuradurías distritales y provinciales', 'Conocer sus competencias ordinarias y particularidades, sin asumir por proximidad que pueden desplazar a una regional o delegada.'],
          ['Instrucción', 'Investigar y determinar la actuación procesal de esa fase según competencia; no se confunde con la potestad del despacho de juzgamiento.'],
          ['Juzgamiento', 'Valorar los cargos y decidir dentro de garantías e instancias definidas por el marco disciplinario.'],
        ],
      },
      {
        type: 'trap',
        title: 'Planta global no implica competencia global',
        text: 'Una denominación de empleo común puede encontrarse en varias dependencias, pero la asignación de funciones y la competencia para conocer de una actuación no dependen únicamente del título del cargo. La organización interna de PGN y la separación entre instrucción y juzgamiento deben consultarse en sus normas vigentes.',
      },
    ],
    2: [
      {
        type: 'comparison',
        title: 'Ruta de reparto antes de actuar de fondo',
        columns: ['Filtro', 'Dato por verificar'],
        rows: [
          ['Sujeto y entidad', 'Naturaleza y nivel del servidor o particular disciplinable, ámbito funcional y régimen aplicable.'],
          ['Materia', 'Si existen reglas especiales o especialidad asignada por el marco interno vigente.'],
          ['Territorio', 'Circunscripción y lugar relevante según los criterios normativos; no siempre la sede física donde llegó la queja.'],
          ['Etapa', 'Si corresponde instrucción, juzgamiento, recurso u otra actuación y cuál dependencia está habilitada.'],
          ['Conexidad y reglas especiales', 'Comprobar si hay asuntos relacionados o competencia preferente y cuáles son sus requisitos, sin atribuirla automáticamente.'],
        ],
      },
      {
        type: 'example',
        title: 'La dependencia receptora puede no ser la competente',
        text: 'Llega a una procuraduría provincial un escrito sobre servidores de varias entidades, con hechos extendidos a dos municipios y una actuación de instrucción ya iniciada en otro despacho. El profesional debe registrar, identificar el objeto, comprobar la distribución por sujeto, fase y conexidad, y tramitar la remisión o reparto por la vía institucional procedente, conservando antecedentes y constancias.',
      },
    ],
    3: [
      {
        type: 'comparison',
        title: 'Las reglas de conexidad y preferencia no son un atajo universal',
        columns: ['Supuesto nuevo', 'Conclusión provisional válida'],
        rows: [
          ['Un asunto conexo involucra niveles regional y provincial', 'Comprobar si opera la atribución a regional prevista para el supuesto específico, con sus condiciones y etapa.'],
          ['Se solicita que una delegada asuma preferentemente', 'Verificar habilitación, requisitos y concepto u otra autorización aplicable según la norma.'],
          ['El asunto pasó a fase de juzgamiento', 'Confirmar despacho distinto competente y garantías, sin entender que el instructor decide por continuidad.'],
          ['Existe una dependencia próxima a los hechos', 'La proximidad puede facilitar recolección de soportes, pero no reemplaza la competencia orgánica.'],
        ],
      },
    ],
  },
}

export function auditedModuleBlocksM9M11(moduleId: string, lessonOrder: 1 | 2 | 3): LessonBlock[] {
  return blocks[moduleId]?.[lessonOrder] ?? []
}

export function auditedModuleSourcesM9M11(moduleId: string): string[] {
  if (moduleId === 'pgn-m9') return ['constitucion', 'ley-1454-2011', 'decreto-262-2000', 'decreto-1851-2021']
  if (moduleId === 'pgn-m10') return ['constitucion', 'pgn-guia-preventiva', 'decreto-262-2000', 'ley-1952-2019']
  if (moduleId === 'pgn-m11') return ['decreto-262-2000', 'decreto-1851-2021', 'pgn-convocatoria-104-v4', 'pgn-manual-v9']
  return []
}
