# Guías SVG contextualizadas · Procuraduría 104-2026

## Alcance
Esta integración parte de `main` posterior a los PR #1 (reducción de imágenes), #2 (corrección de banco situacional) y #3 (sincronización del gestor de paquetes para Netlify).

Se añaden **nueve SVG vectoriales de contenido educativo**, con una línea visual uniforme, que cubren las 17 unidades del curso (reutilizados como material temático, no como afirmación de que son 85 infografías distintas).

La primera lección de cada uno de los 85 módulos muestra un **enlace desplegable y cerrado inicialmente**; el diagrama no interrumpe la lectura. La segunda lección de cada módulo sustituye la lista de pasos existente por una **ruta visual compacta generada con los pasos particulares del módulo**. La tercera mantiene sus comparativas y ejercicios actuales sin duplicar ilustraciones.

| Bloques | SVG principal |
| --- | --- |
| Preparación y método (M0–M4), competencias (M70–M74) | procuraduria-course-route.svg |
| Estado y función pública (M5–M9) | colombian-state-public-function.svg |
| Estructura PGN (M10–M14), condicionales (M75–M79) | procuraduria-structure-competence.svg |
| CPACA y petición (M15–M19) | cpaca-petition-route.svg |
| Disciplinario (M20–M34) | disciplinary-process-route.svg |
| Prueba y evidencia (M35–M44) | disciplinary-evidence-guide.svg |
| Función preventiva (M45–M49) | preventive-control-intervention.svg |
| Contratación y gestión (M50–M59) | contracting-integrity-territory.svg |
| Sistemas, ofimática y área profesional (M60–M69, M80–M84) | systems-disciplinary-evidence.svg |

## Criterio
- Los SVG son **ayudas pedagógicas esquemáticas**, no sustituyen las normas ni establecen términos procesales por sí mismos.
- No hay carga de ilustraciones por defecto ni repetición del mismo gráfico en las tres lecciones.
- Se preservan contenidos, módulos, preguntas, IDs de progreso y persistencia.
- No se modifica el curso DIAN: condicional estricta por ID de curso y componente PGN exclusivo.
- Las imágenes son SVG estáticos, sin scripts, fuentes externas ni elementos incrustados. Comparten políticas CSP/PWA existentes.
- El proyecto conserva `pnpm-lock.yaml`, `package.json` y `netlify.toml` intactos para evitar reincidir en ERR_PNPM_OUTDATED_LOCKFILE.

## Comprobaciones
- Cobertura de los 85 módulos mediante `getProcuraduriaTopicVisual`.
- Nueve rutas SVG válidas bajo `public/media/lesson-support`.
- Control de exclusión para rutas ajenas a Procuraduría.
- GitHub Actions: TypeScript, ESLint, Vitest y compilación PWA.
