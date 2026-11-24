import type { LessonBlock } from '../../../src/types/course'

const blocks: Record<string, Partial<Record<1 | 2 | 3, LessonBlock[]>>> = {
  "pgn-m21": {
    "1": [
      {
        "type": "comparison",
        "title": "Quién está sometido al régimen disciplinario",
        "columns": [
          "Concepto",
          "Aplicación al cargo"
        ],
        "rows": [
          [
            "Servidor activo o retirado",
            "Art. 25 CGD: revisar su calidad al momento de la conducta; retirarse no extingue automáticamente la acción."
          ],
          [
            "Particular contratista",
            "El contrato por sí solo no lo convierte en sujeto disciplinable; comprobar funciones públicas, administración de recursos públicos, interventoría o supervisión y demás supuestos del art. 70."
          ],
          [
            "Competencia",
            "Separar calidad de sujeto, autoridad habilitada, poder preferente y reglas especiales."
          ],
          [
            "Quejoso",
            "Puede aportar información y ejercer las facultades legales; no equivale en general a sujeto procesal."
          ]
        ]
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "De la noticia a la actuación procedente",
        "columns": [
          "Concepto",
          "Aplicación al cargo"
        ],
        "rows": [
          [
            "Art. 86",
            "La noticia puede provenir de oficio, queja, informe o fuente que merezca credibilidad."
          ],
          [
            "Anónimo",
            "Examinar requisitos mínimos legales; la ausencia de firma por sí sola no resuelve la procedencia."
          ],
          [
            "Art. 209",
            "Inhibición ante hechos manifiestamente temerarios, irrelevantes, imposibles, inconcretos o cuando no pueda iniciarse la acción."
          ],
          [
            "Arts. 208 y 211",
            "Si hay duda sobre identificación del posible autor, estudiar indagación previa; si está identificado y se cumplen presupuestos, iniciar investigación."
          ]
        ]
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Una noticia cambia con nuevos soportes",
        "columns": [
          "Concepto",
          "Aplicación al cargo"
        ],
        "rows": [
          [
            "Acusación genérica",
            "No abrir investigación colectiva por presión; verificar si procede decisión inhibitoria."
          ],
          [
            "Anónimo con documentos concretos",
            "Valorar credibilidad y requisitos legales; preservar documentos y examinar relevancia."
          ],
          [
            "Autor todavía desconocido",
            "Examinar indagación previa y diligencias orientadas a identificarlo."
          ],
          [
            "Autor identificado",
            "Examinar apertura de investigación y competencia; no tratar identificación como prueba de responsabilidad."
          ]
        ]
      }
    ]
  },
  "pgn-m22": {
    "1": [
      {
        "type": "comparison",
        "title": "Tres filtros antes de atribuir responsabilidad",
        "columns": [
          "Concepto",
          "Aplicación al cargo"
        ],
        "rows": [
          [
            "Tipicidad",
            "Relacionar conducta concreta con la descripción normativa de falta y deber, prohibición u otra regla funcional aplicable."
          ],
          [
            "Ilicitud sustancial (art. 9)",
            "Examinar afectación sustancial del deber funcional sin justificación; no exige necesariamente daño patrimonial."
          ],
          [
            "Culpabilidad (art. 10)",
            "Demostrar modalidad subjetiva sancionable; prohibida la responsabilidad objetiva."
          ],
          [
            "Acción u omisión (art. 27)",
            "Precisar qué hizo o dejó de hacer el sujeto y qué deber tenía en ese contexto."
          ]
        ]
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Dolo, culpa y exclusión no son equivalentes",
        "columns": [
          "Concepto",
          "Aplicación al cargo"
        ],
        "rows": [
          [
            "Dolo (art. 28)",
            "Conocimiento de hechos, ilicitud y voluntad de realización."
          ],
          [
            "Culpa (art. 29)",
            "Infracción del cuidado funcional exigible, con previsibilidad en los términos legales; examinar gravedad o carácter gravísimo."
          ],
          [
            "Culpa leve",
            "No es sancionable en el régimen general del CGD."
          ],
          [
            "Art. 31",
            "Contrastar causales de exclusión, por ejemplo fuerza mayor o cumplimiento de orden legítima, con sus requisitos; no basta alegarlas."
          ]
        ]
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Una falla de sistema no resuelve el caso",
        "columns": [
          "Concepto",
          "Aplicación al cargo"
        ],
        "rows": [
          [
            "Falla acreditada",
            "Examinar relación causal, duración y deber funcional comprometido."
          ],
          [
            "Protocolo de contingencia",
            "Verificar si existía, era conocido y era viable en las circunstancias."
          ],
          [
            "Alternativa disponible",
            "Reevaluar cuidado y previsibilidad; no inferir dolo automáticamente."
          ],
          [
            "Informe final",
            "Diferenciar hechos probados, inferencias, justificaciones y estándar aplicable a la etapa."
          ]
        ]
      }
    ]
  },
  "pgn-m23": {
    "1": [
      {
        "type": "comparison",
        "title": "Cinco figuras que no deben confundirse",
        "columns": [
          "Concepto",
          "Aplicación al cargo"
        ],
        "rows": [
          [
            "Deber / prohibición (arts. 38 y 39 CGD)",
            "Obligación funcional frente a conducta vedada; identificar regla concreta y contexto."
          ],
          [
            "Inhabilidad",
            "Restricción legal para acceder o ejercer determinada condición o función, según supuesto y vigencia."
          ],
          [
            "Incompatibilidad",
            "Restricción legal para ejercer simultánea o sucesivamente actividades o funciones en los supuestos previstos."
          ],
          [
            "Conflicto de interés e impedimento",
            "Interés particular y directo que se enfrenta al interés general; declarar impedimento cuando concurre causal legal."
          ]
        ]
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Impedimento y recusación según la actuación",
        "columns": [
          "Concepto",
          "Aplicación al cargo"
        ],
        "rows": [
          [
            "Actuación administrativa",
            "Identificar causales y trámite de CPACA arts. 11 y 12 cuando aplique."
          ],
          [
            "Actuación disciplinaria",
            "Aplicar causales y trámite especial del CGD, sin trasladar automáticamente plazos del régimen general."
          ],
          [
            "Manifestación",
            "Revelar por escrito hechos y causal a la autoridad competente; no resolver unilateralmente el fondo del asunto."
          ],
          [
            "Recusación",
            "La plantea quien está habilitado conforme al régimen; el trámite legal determina efectos y decisión."
          ]
        ]
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Distinguir relación personal de interés directo",
        "columns": [
          "Concepto",
          "Aplicación al cargo"
        ],
        "rows": [
          [
            "Cónyuge con interés económico directo",
            "Verificar art. 44 y causal aplicable; tramitar impedimento antes de intervenir."
          ],
          [
            "Conocido sin interés directo acreditado",
            "No declarar automáticamente inhabilidad; examinar hechos y otras causales pertinentes."
          ],
          [
            "Declaración general de intereses",
            "No reemplaza el trámite particular del impedimento si se presenta la causal."
          ],
          [
            "Reasignación",
            "Documentar decisión y nueva autoridad; no borrar actuaciones ni delegar informalmente."
          ]
        ]
      }
    ]
  }
}
const sources: Record<string, string[]> = {
  "pgn-m21": [
    "ley-1952-2019",
    "ley-2094-2021",
    "pgn-guia-disciplinaria"
  ],
  "pgn-m22": [
    "ley-1952-2019",
    "ley-2094-2021",
    "pgn-guia-disciplinaria"
  ],
  "pgn-m23": [
    "ley-1952-2019",
    "ley-1474-2011",
    "constitucion",
    "cpaca"
  ]
}
export function auditedModuleBlocksM21M23(moduleId: string, lessonOrder: 1 | 2 | 3): LessonBlock[] { return blocks[moduleId]?.[lessonOrder] ?? [] }
export function auditedModuleSourcesM21M23(moduleId: string): string[] { return sources[moduleId] ?? [] }
