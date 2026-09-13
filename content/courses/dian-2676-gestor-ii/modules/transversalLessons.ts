import type { Lesson } from '../../../../src/types/course'

export const dianTransversalLessons: Lesson[] = [
  {
    id:'m24-l1', moduleId:'m24', order:1, title:'Por qué existe este bloque complementario', subtitle:'Herramientas informáticas sí aparecen en el MERF; matemática y razonamiento se conservan como preparación prudente mientras llega la GOA.', durationMinutes:9, skillIds:['transversal-criterio','herramientas-informaticas'], status:'published',
    blocks:[
      {type:'lead',text:'El MERF de CT-CR-3007 incluye expresamente Herramientas Informáticas dentro de las competencias funcionales básicas. Por eso Umbral incorpora ofimática y análisis de datos. Los contenidos de conjuntos y probabilidad se marcan como complementarios/provisionales: sirven para cubrir razonamiento transversal sin desplazar el núcleo de cartera, recaudo y devoluciones.'},
      {type:'comparison',title:'Qué prioridad darle',columns:['Bloque','Prioridad actual'],rows:[['Excel y manejo de información','Alta como competencia transversal.'],['Word, PowerPoint y productividad digital','Media; útil para tareas institucionales y preguntas básicas.'],['Interpretación de datos, porcentajes y tasas','Alta por su utilidad práctica.'],['Conjuntos, lógica y probabilidad','Complementaria hasta que la GOA confirme contenidos.']]},
      {type:'rule',title:'No reemplaza el núcleo funcional',text:'Este bloque se estudia en paralelo. Si debes elegir entre repasar cobro coactivo y profundizar probabilidad, prioriza primero el contenido directamente conectado con CT-CR-3007.'},
      {type:'checkpoint',questionId:'q-tr-m24-01'},
      {type:'checkpoint',questionId:'q-tr-m24-02'},
      {type:'sources',sourceIds:['merf-ct-cr-3007']}
    ]
  },
  {
    id:'m24-l2', moduleId:'m24', order:2, title:'Word: estructura antes que formato', subtitle:'Un documento profesional se organiza con jerarquía, estilos y revisión; no con espacios y cambios manuales repetidos.', durationMinutes:13, skillIds:['word','documentos','estilos'], status:'published',
    blocks:[
      {type:'lead',text:'En tareas administrativas es frecuente recibir oficios, informes o conceptos que deben conservar una estructura clara. La lógica correcta es separar contenido y estructura del acabado visual: títulos, subtítulos, listas, tablas, encabezados y saltos deben usarse con intención.'},
      {type:'steps',title:'Flujo recomendado',items:['Definir estructura del documento y jerarquía de títulos.','Aplicar estilos coherentes en lugar de formatear cada párrafo manualmente.','Usar tablas cuando la relación fila-columna aporte claridad.','Revisar ortografía, saltos, numeración y encabezados antes de exportar o imprimir.','Verificar la vista final y que no queden marcas de revisión involuntarias.']},
      {type:'trap',title:'Error típico',text:'Usar espacios, tabulaciones o saltos repetidos para “acomodar” contenido suele romper el documento cuando cambia una fuente, un margen o una página.'},
      {type:'checkpoint',questionId:'q-tr-m24-03'},
      {type:'checkpoint',questionId:'q-tr-m24-04'},
      {type:'checkpoint',questionId:'q-tr-m24-05'},
      {type:'sources',sourceIds:['microsoft-word-basic']}
    ]
  },
  {
    id:'m24-l3', moduleId:'m24', order:3, title:'Control de cambios: revisar no es solo mirar', subtitle:'Aceptar, rechazar y conservar trazabilidad evita confundir borradores con versiones finales.', durationMinutes:11, skillIds:['word','control-cambios','trazabilidad'], status:'published',
    blocks:[
      {type:'definition',title:'Control de cambios',text:'Word puede registrar inserciones, eliminaciones y cambios de formato. Durante la revisión se decide qué cambios aceptar o rechazar; ocultar las marcas no equivale a eliminarlas.'},
      {type:'rule',title:'Ocultar ≠ resolver',text:'Una vista sin marcas puede mostrar un documento limpio, pero los cambios pendientes siguen existiendo hasta que sean aceptados o rechazados.'},
      {type:'example',title:'Caso institucional',text:'Si recibes un borrador revisado por varias personas, antes de convertirlo en versión final conviene comprobar comentarios y cambios pendientes, resolverlos y conservar la versión que corresponda según el procedimiento documental.'},
      {type:'checkpoint',questionId:'q-tr-m24-06'},
      {type:'checkpoint',questionId:'q-tr-m24-07'},
      {type:'checkpoint',questionId:'q-tr-m24-08'},
      {type:'sources',sourceIds:['microsoft-word-track','microsoft-word-basic']}
    ]
  },
  {
    id:'m24-l4', moduleId:'m24', order:4, title:'PowerPoint: una diapositiva debe comunicar una idea', subtitle:'Estructura, contraste y jerarquía importan más que llenar cada espacio disponible.', durationMinutes:11, skillIds:['powerpoint','comunicacion-visual'], status:'published',
    blocks:[
      {type:'lead',text:'Una presentación sirve para acompañar una explicación, no para convertir cada diapositiva en una página de informe. El criterio central es que la audiencia identifique rápidamente qué debe entender.'},
      {type:'steps',title:'Diseño funcional',items:['Define el mensaje principal de cada diapositiva.','Reduce texto y usa jerarquía tipográfica clara.','Elige gráficos o diagramas solo cuando explican mejor una relación.','Mantén colores, tipografías y alineaciones consistentes.','Evita animaciones decorativas que compitan con el contenido.']},
      {type:'tip',title:'SmartArt con criterio',text:'Puede ser útil para procesos, jerarquías o relaciones; no debe sustituir una tabla o un gráfico cuando lo importante son valores numéricos.'},
      {type:'checkpoint',questionId:'q-tr-m24-09'},
      {type:'checkpoint',questionId:'q-tr-m24-10'},
      {type:'checkpoint',questionId:'q-tr-m24-11'},
      {type:'sources',sourceIds:['microsoft-powerpoint-basic','microsoft-smartart']}
    ]
  },
  {
    id:'m24-l5', moduleId:'m24', order:5, title:'Productividad digital: archivos, versiones y datos sensibles', subtitle:'Encontrar el archivo correcto y saber cuál es la versión vigente también es una competencia de trabajo.', durationMinutes:12, skillIds:['productividad-digital','versiones','seguridad-informacion'], status:'published',
    blocks:[
      {type:'comparison',title:'Decisiones simples que evitan errores',columns:['Situación','Práctica preferible'],rows:[['Varias versiones de un informe','Nombre consistente + fecha/versión + ubicación institucional.'],['Documento en revisión','Control de cambios o flujo de revisión, no copias anónimas.'],['Archivo con datos sensibles','Acceso mínimo necesario y canal institucional.'],['Documento definitivo','Conservar fuente editable cuando corresponda y generar versión de distribución controlada.']]},
      {type:'rule',title:'Trazabilidad antes que comodidad',text:'Compartir una cuenta, enviar datos sensibles por canales no autorizados o conservar copias personales sin control puede resolver una urgencia inmediata y crear un problema mayor de seguridad y auditoría.'},
      {type:'checkpoint',questionId:'q-tr-m24-12'},
      {type:'checkpoint',questionId:'q-tr-m24-13'},
      {type:'checkpoint',questionId:'q-tr-m24-14'},
      {type:'checkpoint',questionId:'q-tr-m24-15'},
      {type:'sources',sourceIds:['manual-seguridad-dian','modelo-seguridad-dian','microsoft-word-basic']}
    ]
  },

  {
    id:'m25-l1', moduleId:'m25', order:1, title:'Excel: piensa primero en datos tabulares', subtitle:'Una fila debe representar un registro y cada columna una variable coherente.', durationMinutes:13, skillIds:['excel','estructura-datos'], status:'published',
    blocks:[
      {type:'definition',title:'Tabla limpia',text:'Para analizar datos con confiabilidad, cada columna debe tener un significado estable y una sola fila de encabezados. Mezclar subtotales, títulos decorativos y datos dentro del mismo rango dificulta filtros, fórmulas y tablas dinámicas.'},
      {type:'comparison',title:'Antes de analizar',columns:['Buena estructura','Estructura problemática'],rows:[['Una fila = una obligación','Varias obligaciones dentro de una misma celda.'],['Una columna = un atributo','Columnas que mezclan fecha, texto y valor sin criterio.'],['Encabezados únicos','Encabezados duplicados o filas de títulos intermedias.'],['Tipos consistentes','Números guardados unas veces como texto y otras como número.']]},
      {type:'checkpoint',questionId:'q-tr-m25-01'},
      {type:'checkpoint',questionId:'q-tr-m25-02'},
      {type:'checkpoint',questionId:'q-tr-m25-03'},
      {type:'sources',sourceIds:['microsoft-excel-pivottable','merf-ct-cr-3007']}
    ]
  },
  {
    id:'m25-l2', moduleId:'m25', order:2, title:'Referencias relativas, absolutas y mixtas', subtitle:'Copiar una fórmula cambia unas referencias y conserva otras.', durationMinutes:15, skillIds:['excel','referencias-celda','formulas'], status:'published',
    blocks:[
      {type:'comparison',title:'Tres referencias',columns:['Tipo','Ejemplo','Al copiar'],rows:[['Relativa','A1','Se ajustan fila y columna.'],['Absoluta','$A$1','No cambia fila ni columna.'],['Mixta','$A1 o A$1','Se fija solo columna o solo fila.']]},
      {type:'example',title:'Tasa fija',text:'Si B2 contiene una base y F1 contiene una tasa única para todas las filas, una fórmula como =B2*$F$1 permite copiar hacia abajo conservando la celda de la tasa.'},
      {type:'trap',text:'Una fórmula puede dar un resultado correcto en la primera fila y volverse incorrecta al copiarla si la referencia que debía permanecer fija quedó como relativa.'},
      {type:'checkpoint',questionId:'q-tr-m25-04'},
      {type:'checkpoint',questionId:'q-tr-m25-05'},
      {type:'checkpoint',questionId:'q-tr-m25-06'},
      {type:'checkpoint',questionId:'q-tr-m25-07'},
      {type:'sources',sourceIds:['microsoft-excel-formulas']}
    ]
  },
  {
    id:'m25-l3', moduleId:'m25', order:3, title:'Fórmulas para clasificar y resumir', subtitle:'SUMA, CONTAR, PROMEDIO y lógica condicional resuelven gran parte del análisis operativo básico.', durationMinutes:16, skillIds:['excel','formulas','funciones-condicionales'], status:'published',
    blocks:[
      {type:'lead',text:'En una prueba es más importante reconocer qué operación corresponde que recordar cada detalle de sintaxis. Primero define la pregunta: sumar, contar, promediar, comparar o clasificar.'},
      {type:'comparison',title:'Pregunta → herramienta',columns:['Necesidad','Familia de función'],rows:[['Totalizar valores','SUMA / SUMAR.SI según criterio.'],['Contar registros','CONTAR / CONTAR.SI según criterio.'],['Obtener tendencia central simple','PROMEDIO.'],['Clasificar según una condición','SI y combinaciones lógicas.']]},
      {type:'example',title:'Semáforo de cartera',text:'Una fórmula condicional puede clasificar una fila como “Revisar” cuando el saldo es positivo y además existe una marca de inconsistencia. La clasificación ayuda a priorizar, pero no reemplaza la verificación jurídica.'},
      {type:'checkpoint',questionId:'q-tr-m25-08'},
      {type:'checkpoint',questionId:'q-tr-m25-09'},
      {type:'checkpoint',questionId:'q-tr-m25-10'},
      {type:'checkpoint',questionId:'q-tr-m25-11'},
      {type:'sources',sourceIds:['microsoft-excel-formulas']}
    ]
  },
  {
    id:'m25-l4', moduleId:'m25', order:4, title:'Ordenar no es filtrar', subtitle:'Uno cambia el orden visible; el otro restringe temporalmente qué filas ves.', durationMinutes:13, skillIds:['excel','ordenar','filtrar'], status:'published',
    blocks:[
      {type:'comparison',title:'Diferencia esencial',columns:['Acción','Efecto'],rows:[['Ordenar','Reorganiza filas por texto, número, fecha u otros criterios.'],['Filtrar','Oculta temporalmente filas que no cumplen el criterio.'],['Borrar filtro','Vuelve a mostrar las filas ocultas por ese filtro.'],['Deshacer una ordenación','Busca restaurar el orden anterior; no es lo mismo que “borrar un filtro”.']]},
      {type:'tip',title:'Antes de ordenar',text:'Si el orden original tiene valor operativo y no existe otra clave para recuperarlo, conviene conservar un identificador o una columna de secuencia.'},
      {type:'checkpoint',questionId:'q-tr-m25-12'},
      {type:'checkpoint',questionId:'q-tr-m25-13'},
      {type:'checkpoint',questionId:'q-tr-m25-14'},
      {type:'checkpoint',questionId:'q-tr-m25-15'},
      {type:'sources',sourceIds:['microsoft-excel-sort','microsoft-excel-filter']}
    ]
  },
  {
    id:'m25-l5', moduleId:'m25', order:5, title:'Porcentajes, fechas y tasas en Excel', subtitle:'El formato visual no cambia el significado matemático del dato.', durationMinutes:15, skillIds:['excel','porcentajes','fechas'], status:'published',
    blocks:[
      {type:'rule',title:'Porcentaje',text:'Un 8% equivale numéricamente a 0,08. Excel puede mostrarlo como porcentaje, pero la lógica de la fórmula sigue siendo multiplicar o comparar valores numéricos.'},
      {type:'rule',title:'Fecha',text:'Las fechas válidas se almacenan como valores que pueden ordenarse y restarse. Una fecha guardada como texto puede parecer correcta a simple vista y comportarse mal en cálculos o filtros.'},
      {type:'example',title:'Antigüedad',text:'Para analizar días transcurridos entre dos fechas necesitas que ambas sean reconocidas como fechas y definir qué evento inicia y qué evento termina el intervalo.'},
      {type:'checkpoint',questionId:'q-tr-m25-16'},
      {type:'checkpoint',questionId:'q-tr-m25-17'},
      {type:'checkpoint',questionId:'q-tr-m25-18'},
      {type:'checkpoint',questionId:'q-tr-m25-19'},
      {type:'sources',sourceIds:['microsoft-excel-formulas']}
    ]
  },
  {
    id:'m25-l6', moduleId:'m25', order:6, title:'Tablas dinámicas: resumir sin destruir el detalle', subtitle:'Agrupa, cuenta, suma y compara manteniendo los datos fuente separados del resumen.', durationMinutes:16, skillIds:['excel','tabla-dinamica','analisis-datos'], status:'published',
    blocks:[
      {type:'definition',title:'Tabla dinámica',text:'Microsoft la describe como una herramienta para calcular, resumir y analizar datos, facilitando comparaciones, patrones y tendencias.'},
      {type:'rule',title:'El origen importa',text:'La calidad del resumen depende de una fuente limpia: columnas con encabezados claros, tipos consistentes y registros comparables.'},
      {type:'example',title:'Cartera por seccional',text:'Con una tabla dinámica puedes resumir saldo por seccional y estado, pero el total agrupado no reemplaza el expediente ni permite decidir por sí solo si cada obligación es exigible.'},
      {type:'checkpoint',questionId:'q-tr-m25-20'},
      {type:'checkpoint',questionId:'q-tr-m25-21'},
      {type:'checkpoint',questionId:'q-tr-m25-22'},
      {type:'checkpoint',questionId:'q-tr-m25-23'},
      {type:'sources',sourceIds:['microsoft-excel-pivottable']}
    ]
  },
  {
    id:'m25-l7', moduleId:'m25', order:7, title:'Gráficos: escoge según la pregunta', subtitle:'Comparar categorías, mostrar evolución y analizar composición requieren visualizaciones diferentes.', durationMinutes:14, skillIds:['excel','graficos','visualizacion-datos'], status:'published',
    blocks:[
      {type:'comparison',title:'Pregunta → gráfico razonable',columns:['Pregunta','Opción común'],rows:[['Comparar varias categorías','Barras o columnas.'],['Mostrar evolución en el tiempo','Línea.'],['Examinar relación entre dos variables numéricas','Dispersión.'],['Mostrar composición simple de un total','Barras apiladas o, con pocas categorías, un gráfico de partes.']]},
      {type:'trap',title:'Gráfico atractivo, lectura mala',text:'Usar 3D, demasiadas categorías o escalas truncadas puede volver más difícil interpretar el dato. La visualización debe reducir ambigüedad, no añadirla.'},
      {type:'checkpoint',questionId:'q-tr-m25-24'},
      {type:'checkpoint',questionId:'q-tr-m25-25'},
      {type:'checkpoint',questionId:'q-tr-m25-26'},
      {type:'sources',sourceIds:['microsoft-excel-chart','microsoft-excel-pivottable']}
    ]
  },
  {
    id:'m25-l8', moduleId:'m25', order:8, title:'Caso aplicado: depurar antes de concluir', subtitle:'Excel ayuda a encontrar patrones; la decisión administrativa necesita contexto, soporte y competencia.', durationMinutes:17, skillIds:['excel','calidad-datos','estado-cuenta'], status:'published',
    blocks:[
      {type:'lead',text:'Imagina una hoja con NIT, periodo, saldo, fecha, estado y marca de inconsistencia. Filtrar saldos positivos y ordenar de mayor a menor puede priorizar revisión, pero no prueba que los primeros registros sean automáticamente cobrables.'},
      {type:'steps',title:'Del archivo a la decisión',items:['Verifica estructura y tipos de dato.','Filtra o resume según la pregunta operativa.','Identifica registros atípicos o inconsistentes.','Regresa a la fuente o expediente cuando el dato exige validación.','Documenta la corrección antes de usar el dato en una actuación.']},
      {type:'checkpoint',questionId:'q-tr-m25-27'},
      {type:'checkpoint',questionId:'q-tr-m25-28'},
      {type:'checkpoint',questionId:'q-tr-m25-29'},
      {type:'checkpoint',questionId:'q-tr-m25-30'},
      {type:'sources',sourceIds:['microsoft-excel-sort','microsoft-excel-filter','proc-normalizacion-obligacion-0372','merf-ct-cr-3007']}
    ]
  },

  {
    id:'m26-l1', moduleId:'m26', order:1, title:'Datos no son decisiones', subtitle:'Primero entiende qué representa cada registro, cómo fue obtenido y qué calidad tiene.', durationMinutes:13, skillIds:['analisis-datos','calidad-datos'], status:'published',
    blocks:[
      {type:'lead',text:'Un conjunto de datos es una representación de hechos, no los hechos mismos. Antes de sacar conclusiones debes conocer unidad de análisis, periodo, variables, faltantes, duplicados y reglas de construcción.'},
      {type:'comparison',title:'Chequeo mínimo',columns:['Pregunta','Riesgo si la ignoras'],rows:[['¿Qué representa una fila?','Duplicar o mezclar unidades de análisis.'],['¿Qué periodo cubre?','Comparar ventanas incompatibles.'],['¿Hay faltantes?','Confundir ausencia de dato con valor cero.'],['¿Hay duplicados?','Inflar conteos o sumas.']]},
      {type:'checkpoint',questionId:'q-tr-m26-01'},
      {type:'checkpoint',questionId:'q-tr-m26-02'},
      {type:'checkpoint',questionId:'q-tr-m26-03'},
      {type:'sources',sourceIds:['openstax-statistics-center','proc-normalizacion-obligacion-0372']}
    ]
  },
  {
    id:'m26-l2', moduleId:'m26', order:2, title:'Frecuencias y distribuciones', subtitle:'Contar cuántas veces ocurre algo es el primer resumen de muchos problemas.', durationMinutes:13, skillIds:['analisis-datos','frecuencia','distribucion'], status:'published',
    blocks:[
      {type:'definition',title:'Frecuencia',text:'Es el número de veces que aparece una categoría o un intervalo. La frecuencia relativa expresa esa cantidad como proporción o porcentaje del total.'},
      {type:'example',title:'Incumplimientos',text:'Si 120 de 600 registros presentan una inconsistencia, la frecuencia absoluta es 120 y la relativa es 120/600 = 0,20 = 20%.'},
      {type:'trap',text:'Comparar solo frecuencias absolutas puede engañar cuando los grupos tienen tamaños muy diferentes. En esos casos una proporción o tasa suele ser más informativa.'},
      {type:'checkpoint',questionId:'q-tr-m26-04'},
      {type:'checkpoint',questionId:'q-tr-m26-05'},
      {type:'checkpoint',questionId:'q-tr-m26-06'},
      {type:'sources',sourceIds:['openstax-statistics-center']}
    ]
  },
  {
    id:'m26-l3', moduleId:'m26', order:3, title:'Media, mediana y moda', subtitle:'Tres “centros” distintos; la mediana resiste mejor valores extremos.', durationMinutes:15, skillIds:['estadistica-descriptiva','media','mediana','moda'], status:'published',
    blocks:[
      {type:'comparison',title:'Qué responde cada medida',columns:['Medida','Lectura'],rows:[['Media','Suma de valores dividida entre cantidad de observaciones.'],['Mediana','Valor central al ordenar los datos.'],['Moda','Valor o categoría más frecuente.']]},
      {type:'rule',title:'Valores extremos',text:'Cuando existen valores muy altos o muy bajos, la media puede desplazarse mucho; la mediana suele representar mejor un centro resistente.'},
      {type:'checkpoint',questionId:'q-tr-m26-07'},
      {type:'checkpoint',questionId:'q-tr-m26-08'},
      {type:'checkpoint',questionId:'q-tr-m26-09'},
      {type:'checkpoint',questionId:'q-tr-m26-10'},
      {type:'sources',sourceIds:['openstax-statistics-center']}
    ]
  },
  {
    id:'m26-l4', moduleId:'m26', order:4, title:'Dispersión y valores atípicos', subtitle:'Dos grupos pueden tener el mismo promedio y comportarse de manera muy distinta.', durationMinutes:14, skillIds:['estadistica-descriptiva','dispersion','atipicos'], status:'published',
    blocks:[
      {type:'lead',text:'El centro no cuenta toda la historia. El rango y otras medidas de dispersión ayudan a entender cuánto varían los datos; los valores atípicos merecen revisión, pero no son automáticamente errores.'},
      {type:'rule',title:'Atípico ≠ inválido',text:'Un valor extremo puede ser una inconsistencia, un caso excepcional legítimo o una señal de riesgo. La estadística lo señala; la verificación determina qué significa.'},
      {type:'checkpoint',questionId:'q-tr-m26-11'},
      {type:'checkpoint',questionId:'q-tr-m26-12'},
      {type:'checkpoint',questionId:'q-tr-m26-13'},
      {type:'sources',sourceIds:['openstax-statistics-center']}
    ]
  },
  {
    id:'m26-l5', moduleId:'m26', order:5, title:'Leer gráficos sin dejarte engañar', subtitle:'Ejes, escalas, denominadores y periodos pueden cambiar por completo la interpretación.', durationMinutes:15, skillIds:['analisis-datos','graficos','pensamiento-critico'], status:'published',
    blocks:[
      {type:'steps',title:'Antes de concluir',items:['Lee título, unidad y periodo.','Comprueba qué representa cada eje.','Revisa si el eje inicia en cero cuando la magnitud visual podría distorsionarse.','Distingue valores absolutos de porcentajes o tasas.','Busca el denominador de cualquier porcentaje.','Comprueba si dos series usan la misma escala.']},
      {type:'example',title:'Crecimiento aparente',text:'Pasar de 98 a 100 puede parecer enorme en un eje que empieza en 97; numéricamente el aumento es cercano al 2,04%, no una multiplicación dramática.'},
      {type:'checkpoint',questionId:'q-tr-m26-14'},
      {type:'checkpoint',questionId:'q-tr-m26-15'},
      {type:'checkpoint',questionId:'q-tr-m26-16'},
      {type:'sources',sourceIds:['microsoft-excel-chart','openstax-statistics-center']}
    ]
  },
  {
    id:'m26-l6', moduleId:'m26', order:6, title:'Análisis aplicado: priorizar sin confundir correlación con prueba', subtitle:'Un patrón sirve para investigar; no siempre demuestra causa ni responsabilidad.', durationMinutes:16, skillIds:['analisis-datos','riesgo','interpretacion'], status:'published',
    blocks:[
      {type:'lead',text:'En control extensivo o cartera, los datos pueden ayudar a segmentar y priorizar. Sin embargo, una asociación estadística o un patrón de riesgo no convierte automáticamente a cada registro en incumplidor probado.'},
      {type:'rule',title:'Señal → verificación → actuación',text:'Usa el análisis para seleccionar o priorizar; después aplica la verificación y el procedimiento que correspondan al caso concreto.'},
      {type:'checkpoint',questionId:'q-tr-m26-17'},
      {type:'checkpoint',questionId:'q-tr-m26-18'},
      {type:'checkpoint',questionId:'q-tr-m26-19'},
      {type:'checkpoint',questionId:'q-tr-m26-20'},
      {type:'sources',sourceIds:['proc-control-extensivo-0382','openstax-statistics-center','merf-ct-cr-3007']}
    ]
  },

  {
    id:'m27-l1', moduleId:'m27', order:1, title:'Lógica práctica: condición necesaria y suficiente', subtitle:'“Si ocurre A, entonces B” no autoriza a invertir la relación.', durationMinutes:14, skillIds:['logica','condicionales'], status:'published',
    blocks:[
      {type:'definition',title:'Implicación',text:'La expresión “si A, entonces B” afirma que A conduce a B bajo la regla planteada. No significa automáticamente que B solo pueda ocurrir cuando A ocurra.'},
      {type:'trap',title:'Afirmar el consecuente',text:'Si la regla dice “si está en el grupo X, recibe revisión prioritaria”, observar una revisión prioritaria no basta para concluir que necesariamente pertenecía al grupo X; pueden existir otras reglas de priorización.'},
      {type:'checkpoint',questionId:'q-tr-m27-01'},
      {type:'checkpoint',questionId:'q-tr-m27-02'},
      {type:'checkpoint',questionId:'q-tr-m27-03'},
      {type:'sources',sourceIds:['openstax-statistics-probability']}
    ]
  },
  {
    id:'m27-l2', moduleId:'m27', order:2, title:'Conjuntos: pertenecer, unir, intersectar y excluir', subtitle:'La notación cambia; la idea es segmentar correctamente universos.', durationMinutes:15, skillIds:['conjuntos','union','interseccion','complemento'], status:'published',
    blocks:[
      {type:'comparison',title:'Operaciones básicas',columns:['Operación','Interpretación'],rows:[['A ∪ B','Está en A, en B o en ambos.'],['A ∩ B','Está simultáneamente en A y B.'],['Aᶜ','Está fuera de A dentro del universo definido.'],['A − B','Está en A pero no en B.']]},
      {type:'example',title:'Segmentación',text:'A = contribuyentes con saldo vencido; B = contribuyentes con facilidad vigente. A ∩ B identifica quienes cumplen ambas condiciones, mientras A − B conserva saldo vencido pero excluye quienes están en B.'},
      {type:'checkpoint',questionId:'q-tr-m27-04'},
      {type:'checkpoint',questionId:'q-tr-m27-05'},
      {type:'checkpoint',questionId:'q-tr-m27-06'},
      {type:'checkpoint',questionId:'q-tr-m27-07'},
      {type:'sources',sourceIds:['openstax-statistics-probability']}
    ]
  },
  {
    id:'m27-l3', moduleId:'m27', order:3, title:'Diagramas de Venn e inclusión-exclusión', subtitle:'Cuando dos grupos se superponen, sumar sus tamaños puede contar dos veces a las mismas personas.', durationMinutes:14, skillIds:['conjuntos','venn','inclusion-exclusion'], status:'published',
    blocks:[
      {type:'rule',title:'Dos conjuntos',text:'|A ∪ B| = |A| + |B| − |A ∩ B|. La intersección se resta una vez porque al sumar A y B fue contada dos veces.'},
      {type:'example',title:'Ejemplo',text:'Si 120 registros están en A, 80 en B y 30 en ambos, la unión contiene 120 + 80 − 30 = 170 registros únicos.'},
      {type:'checkpoint',questionId:'q-tr-m27-08'},
      {type:'checkpoint',questionId:'q-tr-m27-09'},
      {type:'checkpoint',questionId:'q-tr-m27-10'},
      {type:'sources',sourceIds:['openstax-statistics-probability']}
    ]
  },
  {
    id:'m27-l4', moduleId:'m27', order:4, title:'AND, OR y NOT: traduce el lenguaje antes de calcular', subtitle:'Muchas preguntas fallan por interpretar mal una condición, no por la aritmética.', durationMinutes:13, skillIds:['logica','and-or-not'], status:'published',
    blocks:[
      {type:'comparison',title:'Operadores',columns:['Expresión','Lectura'],rows:[['A AND B','Deben cumplirse ambas condiciones.'],['A OR B','Basta A, B o ambas, salvo que el problema indique exclusión.'],['NOT A','Se excluyen los elementos de A dentro del universo.']]},
      {type:'trap',text:'En lenguaje cotidiano “o” a veces se usa como exclusión, pero en conjuntos/probabilidad suele ser inclusiva: A o B o ambos, a menos que se indique lo contrario.'},
      {type:'checkpoint',questionId:'q-tr-m27-11'},
      {type:'checkpoint',questionId:'q-tr-m27-12'},
      {type:'sources',sourceIds:['openstax-statistics-probability']}
    ]
  },
  {
    id:'m27-l5', moduleId:'m27', order:5, title:'Caso aplicado: construir un universo sin duplicados', subtitle:'Una campaña masiva falla si el criterio lógico selecciona personas equivocadas o cuenta varias veces al mismo registro.', durationMinutes:15, skillIds:['conjuntos','control-extensivo','segmentacion'], status:'published',
    blocks:[
      {type:'lead',text:'Supón que una campaña busca contribuyentes con obligación vencida Y sin facilidad vigente, pero además quiere excluir expedientes ya cerrados. Antes de contar, traduce el criterio a conjuntos y comprueba duplicados.'},
      {type:'process',title:'Construcción lógica',nodes:[{id:'u',label:'Universo',hint:'Población válida para la campaña.'},{id:'a',label:'Saldo vencido',hint:'Condición principal.'},{id:'b',label:'Facilidad vigente',hint:'Grupo que debe excluirse según el supuesto.'},{id:'c',label:'Expediente cerrado',hint:'Otra exclusión.'},{id:'r',label:'Resultado',hint:'A menos B menos C, después de verificar identificadores únicos.'}]},
      {type:'checkpoint',questionId:'q-tr-m27-13'},
      {type:'checkpoint',questionId:'q-tr-m27-14'},
      {type:'checkpoint',questionId:'q-tr-m27-15'},
      {type:'sources',sourceIds:['openstax-statistics-probability','proc-control-extensivo-0382']}
    ]
  },

  {
    id:'m28-l1', moduleId:'m28', order:1, title:'Fracciones, razones y porcentajes', subtitle:'Tres formas de expresar una relación entre cantidades.', durationMinutes:14, skillIds:['matematica-practica','porcentajes','razones'], status:'published',
    blocks:[
      {type:'definition',title:'Porcentaje',text:'Es una proporción expresada sobre 100. 25% = 25/100 = 0,25.'},
      {type:'definition',title:'Razón',text:'Compara dos cantidades. Una razón 3:2 indica que por cada 3 unidades de una cantidad hay 2 de otra.'},
      {type:'example',title:'Cumplimiento',text:'Si 180 de 240 seleccionados cumplen después de una gestión, la proporción es 180/240 = 0,75 = 75%.'},
      {type:'checkpoint',questionId:'q-tr-m28-01'},
      {type:'checkpoint',questionId:'q-tr-m28-02'},
      {type:'checkpoint',questionId:'q-tr-m28-03'},
      {type:'sources',sourceIds:['openstax-statistics-center']}
    ]
  },
  {
    id:'m28-l2', moduleId:'m28', order:2, title:'Cambio porcentual: el denominador es el valor inicial', subtitle:'Subir de 50 a 60 no es subir 10%; es subir 20%.', durationMinutes:14, skillIds:['matematica-practica','variacion-porcentual'], status:'published',
    blocks:[
      {type:'rule',title:'Variación porcentual',text:'(valor final − valor inicial) / valor inicial × 100.'},
      {type:'trap',title:'Puntos porcentuales ≠ porcentaje de cambio',text:'Pasar de 40% a 50% aumenta 10 puntos porcentuales, pero el incremento relativo respecto de 40% es 25%.'},
      {type:'checkpoint',questionId:'q-tr-m28-04'},
      {type:'checkpoint',questionId:'q-tr-m28-05'},
      {type:'checkpoint',questionId:'q-tr-m28-06'},
      {type:'sources',sourceIds:['openstax-statistics-center']}
    ]
  },
  {
    id:'m28-l3', moduleId:'m28', order:3, title:'Promedios simples y ponderados', subtitle:'No promedies promedios sin considerar cuántos casos representa cada uno.', durationMinutes:15, skillIds:['matematica-practica','promedio','ponderacion'], status:'published',
    blocks:[
      {type:'rule',title:'Promedio ponderado',text:'Cada valor aporta según su peso. Si un grupo de 100 casos tiene 80% y otro de 10 casos tiene 20%, el promedio conjunto no es 50%; debes ponderar por 100 y 10.'},
      {type:'example',title:'Dos seccionales',text:'Seccional A: 80 de 100 cumplen. Seccional B: 2 de 10 cumplen. Total: 82 de 110 = 74,55% aproximadamente.'},
      {type:'checkpoint',questionId:'q-tr-m28-07'},
      {type:'checkpoint',questionId:'q-tr-m28-08'},
      {type:'checkpoint',questionId:'q-tr-m28-09'},
      {type:'sources',sourceIds:['openstax-statistics-center']}
    ]
  },
  {
    id:'m28-l4', moduleId:'m28', order:4, title:'Probabilidad básica: resultados favorables sobre resultados posibles', subtitle:'Empieza por definir correctamente el espacio muestral y el evento.', durationMinutes:15, skillIds:['probabilidad','espacio-muestral','eventos'], status:'published',
    blocks:[
      {type:'definition',title:'Espacio muestral',text:'Conjunto de todos los resultados posibles del experimento bajo las condiciones definidas.'},
      {type:'definition',title:'Evento',text:'Subconjunto del espacio muestral al que se asigna una probabilidad.'},
      {type:'rule',title:'Rango',text:'Una probabilidad válida está entre 0 y 1, inclusive. Puede expresarse también como porcentaje entre 0% y 100%.'},
      {type:'checkpoint',questionId:'q-tr-m28-10'},
      {type:'checkpoint',questionId:'q-tr-m28-11'},
      {type:'checkpoint',questionId:'q-tr-m28-12'},
      {type:'sources',sourceIds:['openstax-statistics-probability']}
    ]
  },
  {
    id:'m28-l5', moduleId:'m28', order:5, title:'Independencia, exclusión mutua y probabilidad condicional', subtitle:'Son conceptos distintos y confundirlos cambia la respuesta.', durationMinutes:17, skillIds:['probabilidad','independencia','condicional'], status:'published',
    blocks:[
      {type:'comparison',title:'Diferencias',columns:['Concepto','Idea'],rows:[['Mutuamente excluyentes','No pueden ocurrir al mismo tiempo.'],['Independientes','Que ocurra uno no cambia la probabilidad del otro.'],['Condicional P(A|B)','Probabilidad de A sabiendo que B ocurrió.']]},
      {type:'trap',title:'Excluyentes no significa independientes',text:'Si A y B no pueden ocurrir juntos y ambos tienen probabilidad positiva, saber que ocurrió A hace imposible B; por tanto, su relación no es de independencia.'},
      {type:'checkpoint',questionId:'q-tr-m28-13'},
      {type:'checkpoint',questionId:'q-tr-m28-14'},
      {type:'checkpoint',questionId:'q-tr-m28-15'},
      {type:'checkpoint',questionId:'q-tr-m28-16'},
      {type:'sources',sourceIds:['openstax-statistics-probability']}
    ]
  },
  {
    id:'m28-l6', moduleId:'m28', order:6, title:'Árboles de probabilidad y lectura de riesgo', subtitle:'Las ramas ayudan a separar etapas y probabilidades condicionadas.', durationMinutes:16, skillIds:['probabilidad','arbol-probabilidad','riesgo'], status:'published',
    blocks:[
      {type:'lead',text:'Un árbol representa decisiones o resultados secuenciales. Para una ruta concreta se multiplican probabilidades condicionadas a lo largo de la rama; para agrupar rutas incompatibles se suman sus probabilidades.'},
      {type:'example',title:'Riesgo en dos etapas',text:'Si 20% de los expedientes tienen una alerta y, entre los alertados, 30% presenta finalmente una inconsistencia confirmada, la probabilidad conjunta de “alerta y confirmación” bajo ese modelo es 0,20 × 0,30 = 0,06 = 6%.'},
      {type:'rule',title:'Probabilidad no es certeza',text:'Una puntuación de riesgo ayuda a priorizar. La actuación administrativa requiere verificar el caso y aplicar la norma competente.'},
      {type:'checkpoint',questionId:'q-tr-m28-17'},
      {type:'checkpoint',questionId:'q-tr-m28-18'},
      {type:'checkpoint',questionId:'q-tr-m28-19'},
      {type:'checkpoint',questionId:'q-tr-m28-20'},
      {type:'sources',sourceIds:['openstax-statistics-probability','proc-control-extensivo-0382']}
    ]
  },
]
