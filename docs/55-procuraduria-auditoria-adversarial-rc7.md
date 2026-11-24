# RC.7 · Auditoría adversarial
Base RC.6 integrada, 137 pruebas y Chromium exitosos. 26 casos nuevos, 13 familias y 26 bloques de profundización. El indicador de longitud no mide la validez de un reactivo. Los 81 señalados de RC.6 permanecen accesibles para repaso; el nuevo perfil integral excluye los que sigan señalados. Se registra el listado completo en CI para revisión manual. No se oculta ni borra el banco histórico.

| Familia | Módulo | Fundamento | Contraste |
|---|---|---|---|
| Cómputo de recursos con días inhábiles | M31 | CGD, arts. 131–132; Ley 4/1913, art. 62 | Notificación fuera de audiencia: cinco días siguientes hábiles. / Estrados: interposición y sustentación en audiencia. |
| Prescripción ordinaria y faltas del artículo 52 | M24 | CGD, art. 33 modificado por Ley 2094/2021, art. 7 | Ordinaria: 5 años y límite posterior de 2 años. / Art. 52: 12 años y límite posterior de 3 años. |
| Suspensión de actuación y límites temporales | M23 | CGD, arts. 33, 107 y 213 | Recusación pendiente: suspender actuación, tramitar causal. / Reanudación: revisar el saldo aplicable y la prescripción por separado. |
| Reserva judicial y servidores de elección popular | M34 | Sentencias C-030/2023 y SU-381/2024 | Elegido en ejercicio y sanción restrictiva: reserva judicial según precedente. / Exservidor elegido fuera del cargo: examinar alcance específico del precedente, no asumir idéntica reserva. |
| Bayes y tasas base | M67 | OpenStax, Introductory Statistics 2e, probabilidad | Tasa base baja: los falsos positivos pueden dominar aun con alta sensibilidad. / Cambiar tasa base: cambia probabilidad posterior aunque el filtro no cambie. |
| Combinatoria y variación porcentual | M67 | OpenStax, probabilidad y estadística descriptiva | Selección de dos entre cinco sin orden: 10 combinaciones. / De 80 % a 90 %: 10 puntos, 12,5 % de crecimiento relativo. |
| Muestreo estratificado y secuencias | M68 | OpenStax, muestreo y análisis descriptivo | Estratos de 80 % y 20 %: combinar estimaciones con pesos 0,8 y 0,2. / Regla de incremento creciente explícita: proyectar según esa regla, no por promedio de incrementos. |
| SQL: uniones externas y valores nulos | M62 | PostgreSQL 18, SELECT y funciones agregadas | Filtro del hijo en ON: conserva expedientes sin hijos que cumplan. / COUNT(hijo.id): cuenta coincidencias, no la fila externa vacía. |
| Transacciones, concurrencia y privilegios | M84 | PostgreSQL 18, Transaction Isolation y Privileges | Dos incrementos sobre mismo contador: operación atómica o coordinación transaccional. / Auditor de lectura: permisos mínimos y revisión de herencia. |
| Correlación de red y recuperación a un punto temporal | M81 | RFC 9293; PostgreSQL 18, PITR; NIST SP 800-86 | NAT compartido: IP y hora solas no resuelven atribución personal. / PITR sin tramo WAL: no prometer recuperación exacta; comprobar continuidad. |
| Responsabilidad con la Organización y Organización del Trabajo | M70 | Diccionario PGN, niveles B y B | Responsabilidad institucional: anticipar impacto de decisiones sobre otras dependencias. / Organización: adaptar plan y recursos a compromisos verificables. |
| Investigación y Pensamiento Conceptual | M71 | Diccionario PGN, Investigación B y Pensamiento Conceptual A | Investigación: elegir fuentes discriminantes y método verificable. / Pensamiento conceptual: integrar relaciones, excepciones y límites en explicación útil. |
| Orientación a Resultados y Cumplimiento de Parámetros | M72 | Diccionario PGN, niveles A y B | Resultados: ajustar medios y comprobar calidad del logro. / Parámetros: usar alternativas autorizadas y tramitar cambios de procedimiento. |

Perfil integral: 30 preguntas de conocimientos, seis integradoras como mínimo y seis casos límite como mínimo, cuota de prioridad existente, sin rótulo de dificultad ni tipo antes de entrega. No constituye prueba oficial. Perfil sistemas incorpora tres excepcionales; comportamental incluye al menos dos dilemas de cada uno de M70–72. El formato sigue siendo formativo. Se conserva el esquema de progreso y DIAN. Inventario 2062 registros, 1212 evaluables, 447 individuales, 114 excepcionales, 88 fuentes. Prueba Chromium específica del perfil integral.

Fuentes:
- [Ley 4 de 1913 · Régimen político y municipal](https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=8426)
- [Sentencia SU-381 de 2024](https://www.corteconstitucional.gov.co/relatoria/2024/su381-24.htm)
- [PostgreSQL 18 · SELECT](https://www.postgresql.org/docs/18/sql-select.html)
- [PostgreSQL 18 · Aggregate Functions](https://www.postgresql.org/docs/18/functions-aggregate.html)
- [PostgreSQL 18 · Transaction Isolation](https://www.postgresql.org/docs/18/transaction-iso.html)
- [PostgreSQL 18 · Privileges](https://www.postgresql.org/docs/18/ddl-priv.html)
- [PostgreSQL 18 · Continuous Archiving and PITR](https://www.postgresql.org/docs/18/continuous-archiving.html)

Distribución preliminar de longitud del nuevo lote: {"longest":5,"shortest":6,"other":15}. Se revisan manualmente distractores históricos en un commit adicional; no se afirma corrección de los 81 hasta medir CI.

Revisión manual: 20 reactivos señalados en RC.6, pgn-m1-transfer-2, pgn-m4-transfer-2, pgn-m5-transfer-1, pgn-m6-transfer-2, pgn-m8-transfer-2, pgn-m10-transfer-1, pgn-m16-transfer-2, pgn-m28-transfer-2, pgn-m31-transfer-1, pgn-m34-transfer-1, pgn-m34-transfer-2, pgn-m37-transfer-1, pgn-m37-transfer-2, pgn-m39-transfer-2, pgn-m40-transfer-2, pgn-m41-transfer-2, pgn-m75-situational-1, pgn-m76-situational-1, pgn-m79-situational-1, pgn-m83-situational-1. Se conserva clave, enunciado, caso, fuentes y racionales coherentes. Se acorta la correcta cuando es suficiente y se reformulan distractores cuando procede, sin añadir relleno. Restan 61 señales de RC.6 por revisar si la auditoría integral confirma el descenso esperado. El perfil integral ya excluye las señales restantes.


Segunda revisión: 40 transferencias (M42–M84), con ajustes semánticos de opciones y claves conservadas. IDs: pgn-m42-transfer-2, pgn-m43-transfer-1, pgn-m44-transfer-2, pgn-m45-transfer-2, pgn-m47-transfer-1, pgn-m48-transfer-1, pgn-m48-transfer-2, pgn-m50-transfer-1, pgn-m50-transfer-2, pgn-m52-transfer-1, pgn-m53-transfer-2, pgn-m54-transfer-2, pgn-m55-transfer-2, pgn-m56-transfer-1, pgn-m56-transfer-2, pgn-m58-transfer-1, pgn-m59-transfer-1, pgn-m59-transfer-2, pgn-m60-transfer-1, pgn-m61-transfer-2, pgn-m62-transfer-2, pgn-m63-transfer-1, pgn-m63-transfer-2, pgn-m64-transfer-2, pgn-m65-transfer-1, pgn-m65-transfer-2, pgn-m67-transfer-2, pgn-m69-transfer-1, pgn-m72-transfer-1, pgn-m73-transfer-2, pgn-m74-transfer-2, pgn-m76-transfer-1, pgn-m77-transfer-2, pgn-m78-transfer-1, pgn-m78-transfer-2, pgn-m80-transfer-1, pgn-m80-transfer-2, pgn-m82-transfer-1, pgn-m82-transfer-2, pgn-m84-transfer-2. Se acumulan 60 casos históricos corregidos; pendientes de la auditoría original: 21, sujetos al resultado de CI. Distribución de longitud de este lote: {"longest":0,"shortest":39,"other":1}. El rango de longitud no es por sí mismo validación de dificultad; se debe vigilar también el patrón inverso.


Cierre editorial: 21 restantes (19 integradoras, 2 expedientes); claves conservadas. Regresión de cero diferencias pronunciadas de longitud en redacción individual. IDs: pgn-int-data-03, pgn-int-data-04, pgn-int-data-05, pgn-int-proc-02, pgn-int-pet-02, pgn-int-pet-03, pgn-int-pet-04, pgn-int-pet-05, pgn-int-prev-01, pgn-int-prev-02, pgn-int-prev-03, pgn-int-prev-04, pgn-int-prev-05, pgn-int-comp-02, pgn-int-comp-03, pgn-int-comp-05, pgn-int-sw-03, pgn-int-sw-04, pgn-int-sw-05, pgn-dossier-peticion-mixta-3, pgn-dossier-alteracion-log-2. Distribución preliminar: {"longest":6,"shortest":10,"other":5}. La señal no certifica calibración psicométrica.


Control contra inversión del patrón en las 40 transferencias: {"longest":15,"shortest":5,"other":20}. Se conservaron versiones completas cuando la condensación de ambos distractores reintroducía la señal de longitud; 1 ajustes de ese tipo. La longitud no acredita por sí sola plausibilidad ni dificultad.
