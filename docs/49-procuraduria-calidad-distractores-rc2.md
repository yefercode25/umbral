# RC.2 · Corrección editorial focalizada de distractores

Base RC.1 integrada (PR #25): 131 pruebas, Netlify, 264 SVG deterministas y PWA correctos. Diagnóstico real de CI: 1098 ítems; 333 de redacción individual/expedientes, 765 de plantilla. 492 correctas estrictamente más largas (319 de 333 individuales), 282 diferencias pronunciadas (118 individuales), 18 enunciados cortos, 9 grupos de enunciados repetidos, 12 grupos de casos repetidos, 0 duplicados exactos, 0 opciones inválidas, 0 fuentes ausentes del catálogo, 0 racionales vacíos/repetidos. Posiciones visuales A/B/C: 379/371/348. Una coincidencia de caso puede ser legítima en un expediente; la longitud es una señal, no validez psicométrica.

Primera corrección manual: 20 casos situacionales del listado de mayor diferencia. Se acortó la alternativa correcta cuando era posible y se redactaron distractores con errores de estándar, etapa, competencia, fundamento o cálculo, sin añadir relleno. Se conservan caso, enunciado, ID, clave y referencias; se actualizan racionales y explicación. La nueva regresión verifica que no haya diferencia pronunciada de longitud y que exista variación de rango (correcta más larga, más corta o intermedia/empatada), para no introducir la pista inversa. Se mantienen todas las pruebas existentes.

| Caso | Clave conservada | Palabras A/B/C |
|---|---|---|
| pgn-m2 | a | 24/20/21 |
| pgn-m7 | b | 16/20/22 |
| pgn-m19 | b | 22/19/16 |
| pgn-m22 | b | 17/21/21 |
| pgn-m25 | b | 18/20/25 |
| pgn-m32 | b | 21/21/17 |
| pgn-m35 | a | 23/20/21 |
| pgn-m36 | c | 17/22/21 |
| pgn-m37 | c | 16/23/24 |
| pgn-m38 | a | 23/25/17 |
| pgn-m40 | b | 16/21/20 |
| pgn-m41 | a | 24/24/20 |
| pgn-m43 | b | 21/20/25 |
| pgn-m49 | b | 18/19/22 |
| pgn-m53 | a | 24/21/18 |
| pgn-m54 | c | 17/24/21 |
| pgn-m55 | b | 16/21/23 |
| pgn-m56 | a | 15/16/16 |
| pgn-m58 | b | 16/18/23 |
| pgn-m59 | a | 21/19/24 |

No se declara revisión humana de los restantes 98 casos individuales con diferencia pronunciada detectados en RC.1, ni de todas las demás pistas. Revisar métricas CI después de integrar. La etapa final exige prueba de navegador real y contraste de convocatoria individual vigente.
