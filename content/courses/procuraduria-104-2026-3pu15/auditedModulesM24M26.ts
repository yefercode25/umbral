import type { LessonBlock } from '../../../src/types/course'

const blocks: Record<string, Partial<Record<1 | 2 | 3, LessonBlock[]>>> = {
  "pgn-m24": {
    "1": [
      {
        "type": "comparison",
        "title": "Gravedad y sanción: dos decisiones relacionadas",
        "columns": [
          "Control",
          "Aplicación al cargo"
        ],
        "rows": [
          [
            "Clasificación (arts. 46 y 47 CGD)",
            "Las gravísimas se encuentran señaladas taxativamente; para graves y leves se aplican los criterios legales de clasificación."
          ],
          [
            "Gravedad no es culpabilidad",
            "Distinguir la categoría de la falta de la modalidad subjetiva. No deducir dolo de la gravedad del resultado."
          ],
          [
            "Sanciones (art. 48, servidores públicos)",
            "Gravísima dolosa: destitución e inhabilidad general de 10 a 20 años; gravísima con culpa gravísima: destitución e inhabilidad general de 8 a 10 años."
          ],
          [
            "Otras combinaciones",
            "Una conducta objetivamente gravísima realizada con culpa grave se clasifica como grave (art. 47.9). Grave dolosa: suspensión de 3 a 18 meses e inhabilidad especial por igual término; grave culposa: suspensión de 1 a 12 meses; leve dolosa: multa de 10 a 180 días de salario básico de la época; leve culposa: amonestación escrita."
          ],
          [
            "Graduación",
            "Aplicar los criterios del art. 50 dentro del rango que corresponda; no extender automáticamente esta tabla a particulares."
          ]
        ]
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "El reloj de la prescripción (art. 33 CGD)",
        "columns": [
          "Control",
          "Aplicación al cargo"
        ],
        "rows": [
          [
            "Instantánea",
            "Regla general de cinco años desde consumación."
          ],
          [
            "Permanente o continuada",
            "Cinco años desde el último hecho o acto relevante."
          ],
          [
            "Omisiva",
            "Cinco años desde el cese del deber de actuar."
          ],
          [
            "Interrupción",
            "La notificación del fallo de primera instancia interrumpe el término; en la regla general, si pasan dos años sin notificar la decisión de segunda instancia, opera la prescripción."
          ],
          [
            "Régimen especial",
            "Faltas del art. 52: doce años y regla de tres años tras interrupción. Verificar régimen temporal y favorabilidad; el art. 7 de Ley 2094 rige desde el 29 de diciembre de 2023."
          ]
        ]
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Cronología aplicada: fechas que sí cambian el resultado",
        "columns": [
          "Control",
          "Aplicación al cargo"
        ],
        "rows": [
          [
            "Supuesto didáctico",
            "Conducta instantánea consumada el 10 de enero de 2024 bajo el régimen vigente del art. 33, sin regla especial: referencia inicial de cinco años, hasta enero de 2029."
          ],
          [
            "Fallo de primera instancia",
            "Si se notifica el 5 de diciembre de 2028 antes de prescribir, el nuevo control se relaciona con el plazo de dos años para notificar segunda instancia."
          ],
          [
            "Cambio de premisa",
            "Si el fallo se firma en diciembre pero se notifica después de cumplido el plazo inicial, la firma no acredita interrupción oportuna."
          ],
          [
            "Control final",
            "Separar cómputos por conducta, verificar fechas y constancias, normas transitorias y circunstancias especiales; no confundir términos de instrucción con prescripción."
          ]
        ]
      }
    ]
  },
  "pgn-m25": {
    "1": [
      {
        "type": "comparison",
        "title": "Descomponer una noticia disciplinaria",
        "columns": [
          "Control",
          "Aplicación al cargo"
        ],
        "rows": [
          [
            "Hecho",
            "Describir acción u omisión, fecha, lugar y circunstancias; separar lo verificable de valoraciones."
          ],
          [
            "Fuente",
            "Distinguir queja, informe, actuación de oficio y otra información creíble; art. 86."
          ],
          [
            "Relevancia",
            "Relacionar el hecho con deber funcional posible, sin exigir al denunciante una calificación jurídica definitiva."
          ],
          [
            "Competencia",
            "Comprobar sujeto, materia, territorio y asignación; remitir por vía competente cuando corresponda."
          ]
        ]
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Tres rutas iniciales, tres presupuestos",
        "columns": [
          "Control",
          "Aplicación al cargo"
        ],
        "rows": [
          [
            "Inhibición (art. 209)",
            "Procede ante los supuestos legales manifiestos, como hechos irrelevantes, imposibles o absolutamente inconcretos; no procede recurso contra esta decisión."
          ],
          [
            "Indagación (art. 208)",
            "Cuando subsiste duda sobre identificación o individualización del posible autor de una falta; no es un trámite automático."
          ],
          [
            "Investigación (art. 211)",
            "Si la noticia, información o indagación permite identificar al posible autor y se cumplen los presupuestos legales."
          ],
          [
            "Anónimo",
            "Examinar requisitos mínimos legales y soportes, no aceptar ni descartar automáticamente por ausencia de firma."
          ]
        ]
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Una noticia no es una imputación",
        "columns": [
          "Control",
          "Aplicación al cargo"
        ],
        "rows": [
          [
            "Queja de usuario",
            "Preservar original, anexos y fecha; elaborar resumen separado, sin alterar el escrito."
          ],
          [
            "Informe técnico",
            "Identificar método, origen, alcance y limitaciones; una cuenta técnica no identifica necesariamente a una persona."
          ],
          [
            "Dato que contradice la queja",
            "Verificar la fuente antes de ajustar la hipótesis; registrar tanto hallazgos favorables como adversos."
          ],
          [
            "Decisión inicial",
            "Motivar según el presupuesto legal y la autoridad; no confundir inhibición con archivo tras una etapa abierta."
          ]
        ]
      }
    ]
  },
  "pgn-m26": {
    "1": [
      {
        "type": "comparison",
        "title": "Indagación previa: finalidad y límite",
        "columns": [
          "Control",
          "Aplicación al cargo"
        ],
        "rows": [
          [
            "Presupuesto (art. 208)",
            "Duda sobre identificación o individualización del posible autor de una falta disciplinaria."
          ],
          [
            "Medios probatorios",
            "Utilizar los legalmente reconocidos y documentar su utilidad para superar la duda."
          ],
          [
            "Término general",
            "Seis meses; no confundir con el término de investigación del art. 213."
          ],
          [
            "Excepción",
            "En asuntos de violaciones de derechos humanos o DIH puede extenderse otros seis meses conforme a la norma."
          ]
        ]
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Qué hacer cuando aparece evidencia de identidad",
        "columns": [
          "Control",
          "Aplicación al cargo"
        ],
        "rows": [
          [
            "Cuenta compartida",
            "Permite ubicar una actividad técnica, no individualiza por sí sola a una persona."
          ],
          [
            "Turnos y registros",
            "Contrastar autenticidad, asignación de credenciales, trazas y actuaciones automáticas."
          ],
          [
            "Identificación suficiente",
            "Allegado el medio probatorio que permita identificar o individualizar al posible autor, emitir inmediatamente la apertura de investigación según art. 208."
          ],
          [
            "No exigir certeza sancionatoria",
            "La apertura responde a identificación del posible autor y presupuestos de la etapa; el fallo exige otro estándar."
          ]
        ]
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Cómo terminar la indagación",
        "columns": [
          "Control",
          "Aplicación al cargo"
        ],
        "rows": [
          [
            "Autor identificado",
            "Auto de apertura de investigación cuando se satisface el presupuesto legal; no esperar a agotar todo el plazo."
          ],
          [
            "Autor no identificado",
            "Archivo según art. 208, parágrafo; la decisión prevista allí no hace tránsito a cosa juzgada material."
          ],
          [
            "Investigación no procede",
            "Archivo en los términos del mismo parágrafo; motivar y preservar soportes."
          ],
          [
            "Nueva información posterior",
            "Evaluar su mérito, efectos de la decisión previa y prescripción; no entender el archivo de indagación como permiso para reabrir indefinidamente."
          ]
        ]
      }
    ]
  }
}
const sources: Record<string, string[]> = {
  "pgn-m24": [
    "ley-1952-2019",
    "ley-2094-2021",
    "pgn-guia-disciplinaria"
  ],
  "pgn-m25": [
    "ley-1952-2019",
    "ley-2094-2021",
    "pgn-guia-investigacion",
    "pgn-guia-disciplinaria"
  ],
  "pgn-m26": [
    "ley-1952-2019",
    "ley-2094-2021",
    "pgn-guia-investigacion"
  ]
}
export function auditedModuleBlocksM24M26(moduleId: string, lessonOrder: 1 | 2 | 3): LessonBlock[] { return blocks[moduleId]?.[lessonOrder] ?? [] }
export function auditedModuleSourcesM24M26(moduleId: string): string[] { return sources[moduleId] ?? [] }
