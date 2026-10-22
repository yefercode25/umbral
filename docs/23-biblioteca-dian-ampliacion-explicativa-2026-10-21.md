# Umbral DIAN · Biblioteca ampliada (21 de octubre de 2026)

## Alcance

Ampliación **sobre la copia maestra existente**. No se sustituyeron las 20 normas o documentos anteriores ni se modificaron identificadores de contenido. Se incorporó:

- **20 guías extensas** asociadas uno a uno a las fichas normativas: tres o más conceptos esenciales, secuencia de aplicación, caso con solución comentada, error frecuente, relaciones entre normas y referencia.
- **Organigrama consultable**: 18 nodos (nivel central, sus direcciones y subdirecciones tributarias relevantes, nivel local, delegado). Cada ficha explica responsabilidad, cuándo interviene, ejemplo y qué no debe confundirse. Cuatro casos de derivación funcional y una cadena esquemática de estudio.
- **Diez procesos**: mapa institucional 2026, servicio/RUT, información del recaudo, conciliación de cuenta, devoluciones, persuasivo, extensivo, cobro coactivo, facilidades de pago y concursos de insolvencia. Incluye 50 etapas explicadas, con finalidad, ejemplo y verificación; casos y enlaces oficiales.
- **Ocho casos PJS de biblioteca**, con tres opciones y justificación al elegir. Son didácticos, no se agregan al banco de preguntas ni alteran los resultados de examen o estadísticas.
- **Glosario ampliado de 11 a 29 conceptos** con ejemplos contextualizados.

## Fundamento normativo e institucional

1. **DIAN, Decreto 1742 de 2020**, arts. 4, 5, 6, 7, 13 y 70. Niveles y estructura general, sujeta a resoluciones de competencia y posteriores ajustes: https://normograma.dian.gov.co/dian/compilacion/docs/decreto_1742_2020.htm
2. **DIAN, Organigrama** y compilación de actos: https://www.dian.gov.co/dian/entidad/Paginas/Organigrama.aspx
3. **DIAN, Mapa de Procesos 2026** (esquema de estratégicos, misionales de facilitación y control, habilitantes y aseguramiento): https://www.dian.gov.co/dian/entidad/MapaProcesos/Mapa-de-Procesos-DIAN.pdf
4. **Estatuto Tributario**, compilación jurídica: https://normograma.dian.gov.co/dian/compilacion/docs/estatuto_tributario.htm — arts. 814, 817–818, 823 y ss., 828, 831, 850–865 según caso.
5. **DIAN, trámite Devoluciones/Compensaciones**, indicaciones de solicitudes, causales de inadmisión y rechazo y fuentes legales: https://www.dian.gov.co/tramitesservicios/tramites-y-servicios/tributarios/Paginas/devoluciones-compensaciones.aspx
6. **Ley 1116 de 2006**, insolvencia empresarial: https://normograma.dian.gov.co/dian/compilacion/docs/ley_1116_2006.htm
7. **Ley 2586 de 2026**, régimen sancionatorio aduanero, especialmente transición del artículo 112: https://normograma.dian.gov.co/dian/compilacion/docs/ley_2586_2026.htm
8. **CNSC, GOA DIAN 2676 actualizada 19/10/2026**, numeral 4.3 (corte normativo 19/06/2026), 4.4 (PJS) y 4.5 (autoinforme): https://www.cnsc.gov.co/sites/default/files/2026-10/dian_2676_guia_orientacion_aspirante_19102026.pdf

## Límites pedagógicos que se conservaron

- Las descripciones de dependencias sintetizan competencias generales. **No atribuyen potestad de firma ni determinan competencia funcional o territorial particular**. Para cada caso aplica la resolución de reparto y delegación vigente.
- Los flujos representan **razonamientos de estudio**; no sustituyen procedimientos documentados de la DIAN, formularios, causales y términos específicos. La naturaleza del caso y las normas especiales pueden cambiar los pasos.
- El **Mapa de Procesos DIAN 2026** sirve para orientación institucional y se presenta como referencia organizacional. No se afirma que todas sus ediciones o rótulos exactos hayan sido establecidos dentro del corte normativo de la prueba; antes de usarlos como dato de examen, confirmar fecha de expedición de cada disposición normativa.
- El corte de la GOA de 19/06/2026 es sobre **normas vigentes expedidas hasta esa fecha**. El mapa de procesos no sustituye la lista individual de indicadores del empleo.
- Los ejemplos son **hipotéticos** y no decisiones tributarias individualizadas. La Ley 2586 permanece **complementaria** para el empleo CT-CR-3007 hasta contrastar indicadores particulares.
- Los casos PJS de biblioteca **no alimentan el historial** de respuestas ni imitan la calificación psicométrica reservada de la CNSC. La escala Likert de comportamentales e integridad sigue sin tener respuestas correctas por ítem.
- Procuraduría, rutas previas, identificadores de lección, pruebas originales y estado persistente **no fueron modificados**.

## Validación y regresión

- Comprobar que `src/lib/dianLibraryExpanded.ts` exporta las 20 guías y no hay IDs o relaciones inexistentes.
- Verificar los 18 nodos jerárquicos, 10 rutas (50 etapas) y 8 ejercicios originales. Probar las opciones y explicación en pantalla móvil, desktop, temas claro y oscuro.
- Las pruebas añadidas en `tests/content/dian-library-integrity.test.ts` son ejecutables con Vitest donde estén instaladas las dependencias: `pnpm run test`, `pnpm run typecheck`, `pnpm run build`.
- El entorno de preparación no tiene `pnpm` ni `node_modules` para ejecutar Vite/Vitest completos; se realizan además comprobaciones estáticas con el parser TypeScript instalado globalmente.
