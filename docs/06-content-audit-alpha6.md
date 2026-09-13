# Auditoría de contenido · DIAN 2676 Gestor II · alpha.6

Fecha de corte: 13 de septiembre de 2026.

## Resultado ejecutivo

La auditoría se realizó contra la ficha **CT-CR-3007**, el mapa M0–M28, las fuentes registradas y los documentos públicos asociados a los subprocesos **Administración de Cartera** y **Recaudo-Devoluciones**.

Estado del corte:

- 9 unidades.
- 29 módulos.
- **211 lecciones publicadas**.
- **615 preguntas**.
- **93 fuentes**.
- 8 laboratorios integradores / 40 decisiones encadenadas.
- 0 IDs duplicados.
- 0 lecciones fuera de su módulo.
- 0 checkpoints sin pregunta.
- 0 referencias a fuentes inexistentes.
- 0 lecciones pasivas: toda lección publicada contiene checkpoint, ejercicio de secuencia o simulador.

La búsqueda realizada en la página oficial de la CNSC para **DIAN 2676** al 13 de septiembre de 2026 no permitió localizar una GOA de **pruebas escritas** específica del proceso. La guía publicada en mayo dentro de la convocatoria corresponde a reclamaciones de no admitidos. Por ello, M24–M28 permanece explícitamente como preparación complementaria y la ponderación interna de simulacros no se presenta como distribución oficial de CNSC.

## Cobertura frente al MERF

| Bloque MERF / empleo | Cobertura en Umbral | Estado |
| --- | --- | --- |
| Constitución, derechos fundamentales y estructura del Estado | M1 | Ampliado |
| Principios de función pública | M1 | Profundo |
| Transparencia y acceso a información | M2 | Profundo |
| PQRSF y derecho de petición | M2 + M4 | Profundo |
| Gestión documental | M2 | Ampliado con PGD DIAN 2025 y Decreto 1080/2015 integrado |
| MIPG | M2 | Profundo, seis dimensiones vigentes |
| Políticas estatales de servicio a las ciudadanías | M2 | Ampliado con lineamientos vigentes |
| DIAN, estructura y TACI | M3 | Ampliado |
| Procedimiento administrativo general (CPACA) | M4 | Profundo |
| Teoría de la imposición | M5 | Ampliado |
| Evasión, elusión y contrabando | M5 | Cubierto |
| Recibo de declaraciones, recaudo y estado de cuenta | M6 | Profundo |
| Entidades Autorizadas para Recaudar | M7 | Profundo |
| Control extensivo | M8 | Profundo |
| Cartera, exigibilidad y prescripción | M9 | Profundo |
| Cobro persuasivo y facilidades | M10 | Profundo |
| Cobro coactivo | M11–M12 | Profundo |
| Medidas cautelares | M13 | Muy profundo |
| Procesos concursales/especiales | M14 | Muy profundo |
| Devoluciones y compensaciones | M15–M16 | Muy profundo |
| Sistemas, permisos y calidad de información | M17 | Profundo |
| Comportamentales básicas/específicas | M18–M19 | Profundo |
| Integridad y Buen Gobierno | M20 | Profundo |
| Técnica PJS y entrenamiento | M21–M23 | Operativo y aplicado |
| Herramientas informáticas | M24–M26 | Complementario ampliado |
| Lógica, conjuntos, matemática y probabilidad | M27–M28 | Complementario provisional |

## Vacíos encontrados y correcciones de alpha.6

La revisión identificó que alpha.5 ya era fuerte en cartera, cobro, cautelares, concursales y devoluciones, pero algunos fundamentos tenían menor densidad teórica. Alpha.6 corrige especialmente:

1. **Estructura del Estado y competencia**: nueva lectura que conecta ramas/órganos con la ubicación administrativa de la DIAN y la competencia concreta.
2. **Servicio a las ciudadanías**: confianza, inclusión, accesibilidad, escucha activa, lenguaje claro y mejora continua.
3. **Gestión documental**: ciclo documental, organización, conservación, acceso y disposición con el PGD DIAN versión 3 de 2025 y el Decreto 1080 de 2015 en versión integrada.
4. **CPACA**: inicio de actuación, terceros, pruebas, irregularidades, publicación/comunicación/notificación, recursos, silencio, firmeza y ejecutoriedad.
5. **Estructura DIAN**: niveles Central, Local y Delegado y diferencia entre dirigir/supervisar y ejecutar.
6. **Teoría de la imposición**: deber de contribuir, equidad, eficiencia, progresividad, irretroactividad y elementos del tributo.
7. **Recaudo**: cadena declaración/recibo → recepción → transmisión/registro → imputación → estado de cuenta.
8. **EAR y sujetos especiales**: autorización, operación, conciliación, auditoría, sanciones y vigencia de calificaciones.
9. **Facilidades y garantías**: suficiencia, perfeccionamiento y seguimiento.
10. **Ejecución sobre bienes**: auxiliares de justicia, costo-beneficio, situación jurídica del activo y coexistencia con otros procesos.
11. **Devoluciones**: mapa de orígenes del crédito, riesgo, investigación previa y tramo decisión favorable → pago efectivo.
12. **Calidad de datos**: exactitud, completitud, consistencia y oportunidad.
13. **Office complementario**: correo/Outlook, CC/CCO, adjuntos, permisos y formatos de archivo.
14. **Análisis cuantitativo**: muestra/población/sesgo, cuantificadores y conteo antes de probabilidad.

## Cambio pedagógico principal

Alpha.6 incorpora `sequence-exercise` cuando el conocimiento depende del orden de las actuaciones. El componente usa controles de subir/bajar en lugar de drag-and-drop para conservar usabilidad móvil, teclado y accesibilidad.

Se utiliza, entre otros, para:

- ruta general del curso;
- ciclo de gestión MIPG;
- análisis de actuaciones administrativas;
- recursos → firmeza → ejecutoriedad;
- cómputo razonado de prescripción;
- título ejecutivo → mandamiento;
- devolución favorable → materialización del pago;
- método de lectura PJS.

La auditoría de integridad ahora exige que **toda lección publicada tenga aprendizaje activo**.

## Calidad del banco y presentación de opciones

Se detectó un sesgo editorial histórico: en los datos fuente la opción correcta aparece con mucha frecuencia bajo el mismo identificador y suele ser la alternativa más desarrollada. Para evitar que el estudiante aprenda una posición visual en lugar de la regla:

- la UI presenta las tres opciones mediante una permutación determinista por pregunta;
- la distribución visual de la respuesta correcta queda aproximadamente equilibrada entre A/B/C sin alterar IDs, calificación ni progreso;
- los contenedores de opciones usan alturas de fila equivalentes para reducir señales visuales por longitud;
- la auditoría mantiene como deuda editorial revisar gradualmente distractores demasiado cortos o menos plausibles, sin reescribir masivamente preguntas sin control jurídico.

## Criterio editorial para teoría futura

Una lección teórica completa debe intentar responder, cuando aplique:

1. qué es la figura;
2. para qué existe;
3. quién es competente;
4. cuándo se activa;
5. qué presupuestos requiere;
6. qué secuencia sigue;
7. qué la detiene, modifica o desvía;
8. qué distractores suelen confundirse con ella;
9. cómo aparece en un expediente CT-CR-3007;
10. qué fuente permite verificarla.

## Prioridad editorial siguiente

No conviene aumentar preguntas solo por volumen. El siguiente crecimiento debería priorizar:

- cronologías con fechas y cálculo de términos;
- expedientes que cambien de ruta por pago, facilidad, concurso, devolución o medida cautelar;
- ejercicios numéricos de saldo, intereses, porcentajes y lectura de datos sin convertir el curso en matemática ajena al perfil;
- contraste de distractores plausibles;
- revisión periódica de versiones de procedimientos DIAN;
- cruce inmediato con la GOA cuando CNSC publique indicadores/contenidos definitivos.
