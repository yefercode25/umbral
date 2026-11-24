# RC.2 · Corrección editorial focalizada de distractores

Base RC.1 integrada (PR #25): 131 pruebas, Netlify, 264 SVG deterministas y PWA correctos. Diagnóstico real de CI: 1098 ítems; 333 de redacción individual/expedientes, 765 de plantilla. 492 correctas estrictamente más largas (319 de 333 individuales), 282 diferencias pronunciadas (118 individuales), 18 enunciados cortos, 9 grupos de enunciados repetidos, 12 grupos de casos repetidos, 0 duplicados exactos, 0 opciones inválidas, 0 fuentes ausentes del catálogo, 0 racionales vacíos/repetidos. Posiciones visuales A/B/C: 379/371/348. Una coincidencia de caso puede ser legítima en un expediente; la longitud es una señal, no validez psicométrica.

Primera corrección manual: 20 casos situacionales del listado de mayor diferencia. Se acortó la alternativa correcta cuando era posible y se redactaron distractores con errores de estándar, etapa, competencia, fundamento o cálculo, sin añadir relleno. Se conservan caso, enunciado, ID, clave y referencias; se actualizan racionales y explicación. Nueva regresión verifica que la correcta no sea estrictamente la más extensa en estos 20 casos. Se mantienen todas las pruebas existentes.

| Caso | Clave conservada | Palabras A/B/C |
|---|---|---|
| pgn-m2 | a | 19/20/21 |
| pgn-m7 | b | 21/15/22 |
| pgn-m19 | b | 22/16/22 |
| pgn-m22 | b | 26/16/21 |
| pgn-m25 | b | 24/19/25 |
| pgn-m32 | b | 21/19/20 |
| pgn-m35 | a | 15/20/21 |
| pgn-m36 | c | 22/22/16 |
| pgn-m37 | c | 21/23/18 |
| pgn-m38 | a | 17/25/22 |
| pgn-m40 | b | 21/19/20 |
| pgn-m41 | a | 19/24/23 |
| pgn-m43 | b | 25/18/25 |
| pgn-m49 | b | 24/18/22 |
| pgn-m53 | a | 18/21/23 |
| pgn-m54 | c | 24/24/14 |
| pgn-m55 | b | 24/16/23 |
| pgn-m56 | a | 15/22/21 |
| pgn-m58 | b | 21/15/23 |
| pgn-m59 | a | 19/24/24 |

No se declara revisión humana de los restantes 98 casos individuales con diferencia pronunciada detectados en RC.1, ni de todas las demás pistas. Revisar métricas CI después de integrar. La etapa final exige prueba de navegador real y contraste de convocatoria individual vigente.
