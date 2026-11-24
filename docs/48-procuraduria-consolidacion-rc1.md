# Consolidación Procuraduría 104-2026 · RC.1
Fecha de revisión: 23/11/2026. Base: a97b4760d89b1a9c95d6275a21cd974ada33c61e (PR #24, CI y Netlify exitosos). No es todavía una certificación de versión estable.

## Evidencia oficial y alcance
- [Resolución 076 de 2026 consolidada](https://apps.procuraduria.gov.co/normograma/compilacion/docs/resolucion_procuraduria_0076_2026.htm), arts. 18–20: nivel profesional, conocimientos 70 % y mínimo oficial 65/100, comportamentales 20 %, antecedentes 10 %. La prueba escrita de conocimientos tiene núcleos general y específico. No convertir aciertos brutos en calificación oficial.
- [Resolución 212/2026](https://apps.procuraduria.gov.co/normograma/compilacion/docs/resolucion_procuraduria_0212_2026.htm) y [243/2026](https://apps.procuraduria.gov.co/normograma/compilacion/docs/resolucion_procuraduria_0243_2026.htm): modificaciones de reglas y formatos. La 243 incluye 104; los totales agregados no corresponden exclusivamente a 104.
- La versión 4 individual permanece como referencia registrada en el curso. En esta revisión no se logró recuperar el PDF individual actualizado ni una guía oficial específica de pruebas del portal del operador (sitio dinámico); la matriz siguiente es un contraste del mapa interno existente (docs/11) contra el contenido real y las reglas generales verificadas, NO una certificación documental independiente de la versión 4. No se cambian vacantes ni se presume fecha o formato de prueba.

## Matriz de cobertura interna (funciones resumidas en docs/11)
| Función | Módulos que soportan preparación | Evidencia / límite |
|---|---|---|
| 1. Instrucción | M13–14, M19–34 | Secuencia, términos, defensa y evaluación; priorizar núcleo |
| 2. Prevención/control/intervención | M45–49, M56–57 | Competencia, indicadores y riesgo; no coadministración |
| 3. Población vulnerable | M5, M17–18, M49, M59 | Accesibilidad y garantías |
| 4. Práctica y recaudo de pruebas | M35–44 | Medios, contradicción, inferencias y prueba digital |
| 5. Despachos comisorios | M13, M33, M35–44 | Competencia, alcance y diligencias |
| 6. Procesar/analizar información | M38–44, M60–69 | Métodos, SQL, calidad, estadística |
| 7. Atención/peticiones | M16–18, M59 | Términos, remisión, acceso |
| 8. Informes/apoyo técnico-científico | M4, M42–44, M60–64, M68–69 | Reproducibilidad, fuentes y límites |
| 9. Registro y sistemas de información | M58, M60–64 | Expediente y control de accesos |
| 10. Sistemas de gestión | M56–57 | MIPG/MIPGN, calidad y mejora |
| 11. Funciones compatibles | M0–4, M13–14 | Límites del rol y competencia |

Comportamentales: M70–72 (seis niveles del perfil), M73 preparación. M75–79 condicional; M80–84 refuerzo profesional. Las 11 funciones resumidas tienen al menos una ruta de aprendizaje, sin inferir porcentaje de cobertura de preguntas oficiales.

## Banco y simulacros
- 1948 registros: 850 históricos de lección, 850 situacionales, 170 transferencias, 48 expedientes y 30 integradoras. 1098 disponibles para práctica. 333 ítems de redacción individual/expediente: 85 situational-1, 170 transfer, 48 dossier, 30 integradas. 765 de plantilla quedan accesibles como repaso. Esta clasificación no certifica precisión jurídica ni calibración.
- Las pruebas generan un diagnóstico reproducible sobre los 1098: alternativas válidas, fuentes, racionales, duplicación exacta y de enunciados/casos, pistas de longitud y posición visual. Las coincidencias dentro de un mismo expediente pueden ser legítimas. Una respuesta más larga es señal de revisión, no prueba de defecto.
- Conocimientos: M1, M4–69, M74; excluye orientación, competencias, condicionales y refuerzo técnico como módulo principal. Cuota de casos integrados por perfil y al menos mitad de plazas restantes en módulos de prioridad pedagógica. Preferir diversidad de módulos y escenarios. Expedientes profundos usan transferencias, dossier o integradas de dificultad editorial >=4.
- Sesiones separadas: 12 ejercicios comportamentales de M70–73, 15 técnicos M80–84; transversal M55–69 y M74. Repaso mixto M0–74. Sin pretensión de formato oficial.
- Adaptativa: excluye M75–79 por defecto y favorece redacción individual, mantiene errores y progreso. Práctica explícita permite acceder a todo el banco, incluido condicional, y filtrar casos revisados.
- Corrección del simulacro presenta las tres justificaciones. Registro de sesiones PGN usa esquema existente; analítica descriptiva separa etiquetas de sesiones y no usa umbrales DIAN ni intervalos Wilson sobre intentos repetidos en PGN. Se conservan identificadores, clave, datos guardados, inventario y materiales.
- DIAN conserva su selección y textos previos; cambios compartidos condicionados a PGN.

## Puertas de cierre
CI incluye compilación TypeScript, lint, Vitest, regeneración determinista de 264 SVG, verificación de 255 SVG, build PWA; no se altera el workflow. La nueva regresión ejecuta 30 selecciones por perfil y audita todo el banco. Netlify debe pasar para integrar.
Pendientes antes de declarar estable: revisar manualmente los distractores señalados y normas sensibles; verificar PDF individual vigente y futura guía; ensayar instalación, offline tras primera carga, recarga, restauración/exportación, accesibilidad teclado y responsive en navegador real. La compilación PWA no sustituye esos ensayos. No se cambia service worker ni esquema de persistencia en RC.1.
