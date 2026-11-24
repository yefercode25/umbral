import type { LessonBlock } from '../../../src/types/course'

const blocks: Record<string, Partial<Record<1 | 2 | 3, LessonBlock[]>>> = {
  "pgn-m18": {
    "1": [
      {
        "type": "comparison",
        "title": "Clasificada no es lo mismo que reservada",
        "columns": [
          "Control",
          "Aplicación"
        ],
        "rows": [
          [
            "Información pública",
            "Presunción de acceso; el sujeto obligado debe justificar una excepción legal."
          ],
          [
            "Clasificada (art. 18, Ley 1712)",
            "Protege derechos de personas, como intimidad y secretos comerciales, en los supuestos legales."
          ],
          [
            "Reservada (art. 19)",
            "Protege intereses públicos definidos por ley; no basta una etiqueta interna."
          ],
          [
            "Versión pública (art. 21)",
            "Mantiene protegida solo la parte indispensable; la reserva del contenido no oculta automáticamente la existencia del documento."
          ]
        ]
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Decidir acceso sin perder trazabilidad",
        "columns": [
          "Control",
          "Aplicación"
        ],
        "rows": [
          [
            "Solicitud externa",
            "Identificar objeto, destinatario y fundamento específico de las exclusiones; documentar el daño conforme al art. 28 de Ley 1712."
          ],
          [
            "Expediente disciplinario",
            "Comprobar etapa, calidad del solicitante y reserva especial del art. 115 CGD; el acceso de sujetos procesales no equivale a publicidad general."
          ],
          [
            "Copia de trabajo",
            "Preservar original con acceso controlado; generar una copia separada y comprobar que la supresión no sea reversible."
          ],
          [
            "Negativa",
            "Motivar y comunicar la norma precisa; distinguir insistencia por reserva (arts. 25 y 26 Ley 1755) de una apelación ordinaria."
          ]
        ]
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "La calidad del solicitante cambia la evaluación",
        "columns": [
          "Control",
          "Aplicación"
        ],
        "rows": [
          [
            "Veeduría pide cifras públicas",
            "Entregar lo separable si procede; no revelar teléfonos privados sin fundamento."
          ],
          [
            "Sujeto procesal solicita su expediente",
            "Revisar garantías y acceso bajo el régimen disciplinario, no aplicar sin más la regla del ciudadano externo."
          ],
          [
            "Superior solicita copia completa",
            "Verificar atribución, finalidad y necesidad; jerarquía sola no elimina los controles."
          ],
          [
            "Se descubre una columna oculta",
            "Revisar la copia antes de enviar: ocultar visualmente una columna no elimina el dato."
          ]
        ]
      }
    ]
  },
  "pgn-m19": {
    "1": [
      {
        "type": "comparison",
        "title": "Mapa procesal: identifica primero la actuación",
        "columns": [
          "Control",
          "Aplicación"
        ],
        "rows": [
          [
            "Sujeto procesal",
            "Tiene facultades reconocidas por el régimen; no todo informante tiene la misma posición procesal."
          ],
          [
            "Acto de impulso o prueba",
            "Prepara una decisión; verificar su oportunidad y posibilidad de impugnación en la norma especial."
          ],
          [
            "Decisión de fondo",
            "Resuelve lo que corresponde a la etapa y autoridad competente."
          ],
          [
            "Carga y deber",
            "Una carga procesal del interesado no reemplaza el deber de investigación de la autoridad disciplinaria."
          ]
        ]
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Cronología que permite controlar garantías",
        "columns": [
          "Control",
          "Aplicación"
        ],
        "rows": [
          [
            "Hito",
            "Registrar fecha real de acto, notificación o comunicación según corresponda."
          ],
          [
            "Término",
            "Identificar regla, inicio y vencimiento; no usar indistintamente días hábiles y calendario."
          ],
          [
            "Recurso",
            "Comprobar procedencia, oportunidad y autoridad; no todo acto admite apelación."
          ],
          [
            "Nulidad",
            "Identificar causal legal, afectación de garantías y posibilidad de saneamiento; no inferirla de cualquier error formal."
          ]
        ]
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Diferenciar un pliego de cargos de un fallo",
        "columns": [
          "Control",
          "Aplicación"
        ],
        "rows": [
          [
            "Investigación",
            "Recolectar y valorar tanto elementos de cargo como de descargo; la hipótesis todavía es revisable."
          ],
          [
            "Cargos (art. 222 CGD)",
            "Exigen demostración objetiva de la falta y prueba que comprometa la responsabilidad."
          ],
          [
            "Juzgamiento",
            "Autoridad distinta de quien instruye, con garantías y procedimiento aplicable."
          ],
          [
            "Fallo sancionatorio (art. 160 CGD)",
            "Exige certeza sobre existencia de la falta y responsabilidad del disciplinado."
          ]
        ]
      }
    ]
  },
  "pgn-m20": {
    "1": [
      {
        "type": "comparison",
        "title": "Principios disciplinarios como límites de la decisión",
        "columns": [
          "Control",
          "Aplicación"
        ],
        "rows": [
          [
            "Legalidad (art. 4 CGD)",
            "Identificar la norma aplicable a la conducta, su vigencia y reglas de integración."
          ],
          [
            "Ilicitud sustancial (art. 9)",
            "Analizar afectación sustancial del deber funcional sin justificación."
          ],
          [
            "Culpabilidad (art. 10)",
            "No hay responsabilidad objetiva; comprobar dolo o culpa conforme a la ley."
          ],
          [
            "Favorabilidad (art. 8)",
            "Aplicar la norma favorable según los presupuestos legales, incluso si es posterior."
          ]
        ]
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Garantías que obligan a revisar la hipótesis",
        "columns": [
          "Control",
          "Aplicación"
        ],
        "rows": [
          [
            "Debido proceso (art. 12)",
            "Separar instrucción y juzgamiento mediante autoridades diferentes, competentes e imparciales."
          ],
          [
            "Investigación integral (art. 13)",
            "Buscar con igual rigor hechos que comprometen y que excluyen responsabilidad."
          ],
          [
            "Presunción de inocencia (art. 14)",
            "No tratar como responsable a quien aún no tiene fallo ejecutoriado; resolver la duda razonable en favor del disciplinable."
          ],
          [
            "Defensa (art. 15)",
            "Garantizar ejercicio de defensa material y técnica conforme al régimen."
          ]
        ]
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Del hallazgo técnico a una inferencia jurídica limitada",
        "columns": [
          "Control",
          "Aplicación"
        ],
        "rows": [
          [
            "Registro de una cuenta compartida",
            "Prueba actividad de la cuenta, no identifica necesariamente a la persona."
          ],
          [
            "Aparece una orden de contingencia",
            "Contrastar autenticidad, alcance, deber funcional y posibles justificaciones."
          ],
          [
            "Se individualiza al operador",
            "Aún debe analizarse ilicitud, culpabilidad y condiciones legales de la etapa."
          ],
          [
            "Se mantiene duda razonable al decidir",
            "No sancionar sin certeza de falta y responsabilidad (art. 160 CGD)."
          ]
        ]
      }
    ]
  }
}
const sources: Record<string, string[]> = {
  "pgn-m18": [
    "ley-1712-2014",
    "ley-1581-2012",
    "ley-1755-2015",
    "ley-1952-2019"
  ],
  "pgn-m19": [
    "cpaca",
    "ley-1952-2019",
    "ley-2094-2021",
    "pgn-guia-disciplinaria"
  ],
  "pgn-m20": [
    "constitucion",
    "ley-1952-2019",
    "ley-2094-2021",
    "pgn-guia-disciplinaria"
  ]
}
export function auditedModuleBlocksM18M20(moduleId: string, lessonOrder: 1 | 2 | 3): LessonBlock[] { return blocks[moduleId]?.[lessonOrder] ?? [] }
export function auditedModuleSourcesM18M20(moduleId: string): string[] { return sources[moduleId] ?? [] }
