# DIAN 2676 · Gestor II — Apropiación documental del MERF y GOA de pruebas escritas

**Corte de investigación:** 12 de octubre de 2026 (hora de Colombia).  
**Proyecto:** Umbral, única copia maestra `/mnt/data/umbral-pwa-master/`.  
**Alcance de este incremento:** conocimiento y evidencia documental; **sin cambios de funcionalidad, metadatos, preguntas ni interfaces de la aplicación**.  
**Criterio rector:** no mezclar lo previsto por el MERF de la ficha CT-CR-3007, las reglas de la convocatoria, lo contenido en la GOA, el número de inscripción en SIMO y las hipótesis curriculares internas de Umbral.

## 1. Fuentes y nivel de verificación

| Fuente | Enlace / ruta | Confirmación / limitación |
|---|---|---|
| Manual del empleo entregado por el usuario, dos páginas | `docs/referencias/DIAN-2026-FT-TAH-1824.pdf` | **Primaria y examinada directamente**; base para el cargo concreto. |
| Ficha pública DIAN FT-TAH-1824 | https://www.dian.gov.co/dian/entidad/ManualdeFunciones2024/FT_TAH_1824_Gestor_II_CT_CR_3007.pdf | URL que ya consta en `content/courses/dian-2676-gestor-ii/sources/sources.ts`; no se volvió a descargar en esta revisión. |
| Acuerdo 21 de 7 de noviembre de 2025 y Anexo | https://www.cnsc.gov.co/convocatorias/dian-2676?field_tipo_de_contenido_convocat_target_id=65 | Publicación constatada en índice oficial de CNSC. Reglas vinculantes. |
| Publicación de la GOA | https://www.cnsc.gov.co/node/69406 | **Confirmado en página oficial de CNSC**, publicación 8 de octubre de 2026. |
| PDF enlazado por CNSC | https://www.cnsc.gov.co/sites/default/files/2026-10/dian-2676_guia_orientacion_aspirante_presentacion-pruebas-escritas_0.pdf | **Enlace del documento extraído directamente de la página oficial**; no fue posible obtener su contenido binario desde el entorno. No se incorpora copia PDF ni se asevera haberlo leído directamente. |
| Aviso de publicación de GOA | https://www.cnsc.gov.co/node/69407 | Aviso de 8 de octubre de 2026. |
| Aviso de resultados VRM | https://www.cnsc.gov.co/node/69182 | Aviso oficial CNSC del 6 de octubre de 2026 con fechas exactas. |
| Índice de avisos oficiales del proceso | https://www.cnsc.gov.co/convocatorias/dian-2676?field_tipo_de_contenido_convocat_target_id=64 | Permite comprobar cambios y resoluciones. |
| Transcripción de la GOA | https://grupogeard.com/co/guias/guia-orientacion-aspirante-presentacion-pruebas-escritas-dian-2676/ | **Fuente secundaria**; contiene secciones 1–7 y detalles técnicos. Cuando el dato solo procede de esta reproducción, contrastar con el PDF de CNSC o SIMO. |
| Verificación editorial del calendario y formatos | https://www.meritaapp.com/guias/guia-orientacion-pruebas-escritas-dian-2676 | **Fuente secundaria**, 9 de octubre de 2026; concuerda en fecha, tipo de ítems y corte normativo. |
| Portal de indicadores por inscripción del operador | https://dian-2676-areandina.com.co/indicadores-dian-2667/ | Página comprobada mediante extracción renderizada: título «CONSULTA INDICADORES / PROCESO DE SELECCION DIAN 2676»; exige **número de inscripción**, sin el cual no se identificó el listado individual. |
| SIMO | https://simo.cnsc.gov.co/ | Fuente autoritativa para estado personal, citación individual, resultados y reclamaciones. No se accedió a ninguna cuenta. |

**Cautela específica:** la ruta del enlace de indicadores incluye la cadena `2667` aunque la página muestra `DIAN 2676`. No inferir por ese detalle que el temario pertenece a la convocatoria 2667. No sustituir el listado individual por los temas de concursos anteriores.

## 2. Identificación inequívoca del puesto (MERF entregado)

- Entidad: Unidad Administrativa Especial Dirección de Impuestos y Aduanas Nacionales — DIAN.
- Empleo: **Gestor II**; código **302**, grado **02**, nivel **Profesional**; carrera administrativa.
- **Ficha CT-CR-3007**; formato **FT-TAH-1824**, versión de ficha 01, vigencia desde 15/04/2024.
- Proceso misional: **Cumplimiento de obligaciones tributarias**.
- Subprocesos: **Administración de cartera** y **Recaudo-Devoluciones**.
- Aplicación: niveles **Central y Seccional**.
- Propósito: ejecutar acciones inherentes al cumplimiento de obligaciones tributarias conforme a normatividad, políticas y directrices institucionales.
- Estudios: título profesional en uno de los NBC previstos, incluido **Ingeniería de Sistemas, Telemática y afines**.
- Experiencia: **un (1) año de experiencia profesional**; tarjeta profesional cuando la ley lo exija; equivalencias según normativa aplicable.
- Fuente reglamentaria indicada en la ficha: **Resolución DIAN 0067 del 11 de abril de 2024**.
- El curso Umbral consigna **OPEC 236844**; este identificador se conoce del código de la aplicación, **no se corroboró contra una inscripción individual del usuario en SIMO**.

### 2.1 Once funciones, agrupadas sin perder su correspondencia

| # MERF | Núcleo funcional | Ruta Umbral documentada (`docs/10-content-review-ct-cr-3007.md`) |
|---|---|---|
| 1 | Diligencias de administración de cartera | M9–M13 |
| 2 | Representación DIAN en procesos especiales/concursales | M14 |
| 3 | Depuración de estado de cuenta, exigibilidad y realidad de obligación | M6, M9 |
| 4 | Devoluciones, compensaciones, disposición de recursos y pago | M15–M16 |
| 5 | Auditorías, capacitación, requisitos, seguimiento y sanciones a entidades recaudadoras | M7 |
| 6 | Incorporación, calidad y unificación de información de obligaciones | M6, M17 |
| 7 | Corrección de inconsistencias en declaraciones, recibos y reprocesos de saldos | M6 |
| 8 | Campañas masivas para cumplimiento formal y sustancial | M8 |
| 9 | Control a autorretenedores, grandes contribuyentes y agentes de retención de IVA | M8 |
| 10 | Sistemas de información corporativos de recaudo/cartera, permisos y datos | M17 |
| 11 | Funciones comunes del empleo y otras dentro de competencia | M1, M2, M18–M20 |

### 2.2 Conocimientos y competencias expresos en el MERF

**Competencias funcionales:** cobro coactivo; cobro persuasivo; medidas cautelares; procesos concursales; entidades autorizadas para recaudar; control extensivo de obligaciones; devoluciones y compensaciones.

**Competencias funcionales básicas / transversales:** Constitución (derechos fundamentales, principios, estructura); principios de función pública y apartados especificados de la Ley 1437 de 2011; transparencia; MIPG; gestión documental; PQRSF y servicio al ciudadano; Código de Buen Gobierno e Integridad; herramientas informáticas; generalidades de declaraciones y recaudo DIAN; introducción al sistema tributario, aduanero y cambiario; teoría de la imposición; evasión, elusión y contrabando.

**Competencias comportamentales detalladas en la segunda página:** comportamiento ético nivel **4**, adaptabilidad nivel **3**, comunicación efectiva nivel **3**, trabajo en equipo nivel **3**. También constan como básicas orientación al logro y al usuario/ciudadano. No confundir esta ficha con otros empleos de Gestor II.

## 3. Estado de convocatoria y cronología verificada

| Fecha | Hecho | Condición |
|---|---|---|
| 7 de noviembre de 2025 | Acuerdo 21 adopta reglas del proceso 2676 | Documento regulador, publicado por CNSC/DIAN. |
| 8 de octubre de 2026 | Publicación GOA de pruebas escritas | **Confirmación en CNSC**. |
| 12 de octubre de 2026 | Corte de esta revisión | Resultado VRM aún pendiente al corte. |
| **14 de octubre de 2026** | Publicación anunciada de resultados de Verificación de Requisitos Mínimos (VRM) | **Fecha anunciada oficialmente**; ingresar a SIMO para resultado individual Admitido/No admitido. |
| **15–16 de octubre de 2026** | Reclamaciones de **no admitidos** frente a VRM | Desde las 00:00 del 15 hasta las 23:59 del 16 en SIMO (aviso CNSC). |
| **8 de noviembre de 2026** | **Fecha programada para pruebas escritas** | Consta en sección 5 de la GOA *según transcripción externa concordante*; prevalecen actualizaciones CNSC y citación SIMO. |
| Pendiente publicación | Resultado de escritas, reclamaciones y demás etapas | No fijar fechas sin nuevo aviso oficial. |

El aviso VRM precisa que la verificación de requisitos mínimos **no es una prueba** y que incumplirlos puede causar exclusión. No confundir esta etapa con resultados del examen.

## 4. Arquitectura de evaluación (GOA, sección 4.2 / Acuerdo, artículo 17)

**Supuesto explícito del perfil:** Gestor II, nivel Profesional, requiere experiencia; si la inscripción individual es **Ingreso ordinario**, aplica la siguiente tabla:

| Instrumento | Carácter | Ponderación de selección | Mínimo aprobatorio |
|---|---|---:|---|
| Competencias funcionales | Eliminatorio | **65 %** | **70,00/100** |
| Competencias comportamentales | Clasificatorio | **15 %** | No aplica |
| Integridad | Clasificatorio | **10 %** | No aplica |
| Valoración de antecedentes | Clasificatorio | **10 %** | No aplica |

**No extrapolar:** para empleos sin experiencia mínima, Ascenso o cupos de discapacidad hay ponderaciones distintas. Confirmar modalidad efectivamente inscrita antes de actualizar simulaciones que muestren «porcentaje oficial».

### 4.1 Tipo real de preguntas

- **Funcionales — Prueba de Juicio Situacional (PJS):** un caso contextualizado, un enunciado orientado a la acción y **tres opciones** con **una mejor respuesta válida**. La complejidad varía. El entrenamiento debe justificar tanto la correcta como los distractores plausibles en el ámbito de competencia del empleo.
- **Comportamentales e integridad — autoinforme Likert:** afirmaciones y cuatro grados de acuerdo, desde «Totalmente en desacuerdo» hasta «Totalmente de acuerdo». No hay una «clave correcta» convencional. Las guías mencionan subescalas de control para detectar autodescripciones excesivamente favorables. Evitar enseñar «respuestas perfectas» o calificarlas con lógica PJS.
- **Escala:** 0 a 100 con dos decimales truncados, según la transcripción de la sección 4.7; la puntuación no debe equipararse automáticamente con mero porcentaje de aciertos sin sustento psicométrico.
- **Corte normativo del contenido examinable:** normas **vigentes y expedidas antes del 19 de junio de 2026** (sección 4.3). Una actualización posterior puede ser jurídicamente vigente pero no por ello temario evaluable. Verificar que cada lectura/caso de Umbral respete ese corte.

### 4.2 Ejes temáticos específicos

La sección 4.3 **no publica una tabla universal por Gestor II**: remite a los ejes/indicadores definidos por empleo consultables en el portal del operador, que solicita el número de inscripción. **No se recuperó el listado individual**. Queda prohibido tratar M0–M28 de Umbral como si equivalieran íntegramente a «ejes oficiales». Se debe construir, una vez obtenidos, una matriz **eje exacto → función MERF → módulo → lecciones/preguntas → fuente con corte normativo → brecha**, sin alterar la evidencia.

## 5. Jornada y logística, sujeta a citación definitiva

La transcripción de la guía sitúa el examen el 8/11/2026, con apertura de sedes a las **7:15 a. m.**, inicio a las **8:00 a. m.** y cierre definitivo de puertas a las **8:30 a. m.**; quien ingrese entre las 8:00 y 8:30 no recibe tiempo extra. Se recomienda llegar **una hora antes** y reconocer el lugar con antelación. La guía dice que la duración es de **cuatro horas**, pero al mismo tiempo afirma que la sesión termina a la **1:00 p. m.**; **inconsistencia que debe resolverse contra documento original y citación**, no afirmar un horario final sin reservas.

- Identificación: cédula física válida, cédula digital bajo los requisitos descritos, pasaporte vigente o contraseña de Registraduría en las condiciones previstas por GOA. Verificar la casuística en PDF original.
- Material para marcar: lápiz negro **No. 2**, sacapuntas y borrador. Solo la **hoja de respuestas** es calificable; llenar completamente círculos y evitar marcas dobles.
- Restricciones de ingreso/uso de equipos electrónicos, calculadoras, libros y apuntes. Revisar indicaciones sobre teléfono y ajustes razonables con la GOA y personal de aplicación.
- La citación individual se publica en **SIMO al menos cinco días hábiles antes**, conforme sección 5 de la GOA transcrita.

## 6. Diagnóstico de divergencias actuales en el código maestro de Umbral

Inspeccionado `content/courses/dian-2676-gestor-ii/course.ts`:

1. `officialGuideStatus: 'pending'` **ya está desactualizado** (GOA 08/10/2026). Debe cambiarse a `published` en una futura actualización funcional explícita.
2. `disclaimer` todavía indica «se ajustará cuando se publique la GOA definitiva». Reformularlo preservando la naturaleza independiente del curso y el hecho de que ya se publicó; **no** presentar como avalado por DIAN/CNSC.
3. Fecha `updatedAt: '2026-09-13'` y versión `2026.09.13-alpha.6`: muestran el corte antiguo; actualizarlos solo cuando se aplique una revisión real de contenido.
4. `questions` agrupa `single` y `pjs`: el formato oficial funcional es PJS. Se necesita evaluación editorial para identificar preguntas conceptuales útiles en práctica de aprendizaje versus preguntas en modo **simulacro oficial**. No eliminar contenidos sin matriz de trazabilidad.
5. El bloque M24–M28 fue añadido antes de existir GOA; mantener como **complemento/provisional** hasta cotejar ejes exactos. Herramientas informáticas sí figuran en MERF, pero Office, probabilidad y conjuntos **no se confirman automáticamente** como ejes específicos por el mero hecho de ser útiles para la preparación.
6. Competencias comportamentales y de integridad deben entrenarse por Likert **sin respuestas correctas/incorrectas** y separadas de métricas PJS. Revisar flujos y reportes antes de adecuar datos.
7. Simulacros de práctica no deben publicitar distribuciones de contenido, pesos ni estimadores como oficiales sin fuente individual de ejes/OPEC.

**Este documento es una actualización de conocimiento.** No se ejecutaron ni simularon cambios en interfaces, motor de examen, base de preguntas ni progreso del estudiante.

## 7. Próximas acciones propuestas (no ejecutadas)

1. Obtener **ejes específicos por número de inscripción** en portal del operador (sin compartir credenciales ni claves de SIMO), comprobar OPEC, modalidad y fecha; guardar evidencia documental si el usuario la aporta.
2. Contrastar los ejes exactos con los **29 módulos**, lecciones y 615 preguntas existentes; clasificar obligatorio, complementario y brecha.
3. Hacer auditoría normativa al **19/06/2026**; mantener referencias históricas explícitas cuando sirvan solo de contexto y no como fuente de respuestas evaluables.
4. Ajustar, en parche incremental futuro, metadatos y presentación de GOA, fechas, puntuaciones, prácticas PJS, Likert y cronómetro según citación verificada, preservando estado y diseño.
5. Revalidar guía y avisos en CNSC/SIMO ante cambios; no asumir que cronogramas tentativos permanecen inmóviles.

## 8. Referencias internas

- `docs/04-study-plan-dian.md` (mapa de 29 módulos).
- `docs/06-content-audit-alpha6.md` (auditoría anterior a GOA: explicaba ausencia oficial al 13/09/2026; **histórico**, no vigente respecto al estado de publicación de la GOA).
- `docs/10-content-review-ct-cr-3007.md` (mapeo de once funciones).
- `docs/14-auditoria-tecnica-y-copia-maestra-2026-10-12.md` (auditoría global).
- `content/courses/dian-2676-gestor-ii/course.ts` (metadatos antiguos cuya revisión queda pendiente).

*Documento realizado para estudio y gestión interna del proyecto educativo independiente Umbral; no constituye publicación oficial DIAN/CNSC ni certificación del temario particular de una inscripción.*
