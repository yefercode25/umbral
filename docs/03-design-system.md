# Línea visual

## Dirección
Seria, editorial y táctil. Debe sentirse diseñada para estudiar, no como plantilla SaaS ni como interfaz generada por IA.

Evitar:
- gradients decorativos en cada tarjeta
- glassmorphism
- sombras grandes
- títulos hero gigantes
- badges en exceso
- iconos de chispas/robots/estrellas como decoración
- tarjetas dentro de tarjetas sin necesidad

## Color
La plataforma usa neutros. Cada curso aporta un accent propio.

### Claro
- canvas: #F7F8FA
- surface: #FFFFFF
- surface-subtle: #F1F3F5
- text: #16181D
- text-muted: #626872
- border: #E3E6EA
- brand: #315FD6
- brand-strong: #244BB0
- success: #187A55
- warning: #9A6512
- danger: #B63A42
- focus: #315FD6

### Oscuro
- canvas: #0D1015
- surface: #151920
- surface-subtle: #1C212A
- text: #F4F6F8
- text-muted: #A8AFB9
- border: #2A303A
- brand: #82A7FF
- brand-strong: #A9C1FF
- success: #63C69A
- warning: #E7B65B
- danger: #FF858A
- focus: #9AB7FF

### Curso DIAN
Accent de curso: teal sobrio (#167C80) con apoyo cyan (#2A94A0). No reproducir ni hacerse pasar por identidad oficial DIAN.

## Tipografía
- Principal: Google Sans variable, `opsz` automático, pesos 400/500/600/700.
- fallback: system-ui, Segoe UI, sans-serif.
- cuerpo móvil: 16px / 1.55
- texto secundario: 14px / 1.45
- H1 móvil: 28px/1.15; desktop 34px
- H2: 22–26px
- ancho óptimo de lectura: 42–48rem

## Forma y espacio
- escala 4/8px
- controles táctiles: objetivo de 44px o mayor
- radio: 12px controles, 16px tarjetas, 20px superficies principales
- bordes: 1px; sombras solo para elevación funcional

## Implementación de estilos
- CSS Modules por componente.
- `tokens.css` para color, tipografía, radios y elevación.
- `global.css` solo para base, helpers muy generales y tipografía.
- No Tailwind, no CSS-in-JS y no librerías de temas prearmados.
- Estados accesibles (`:focus-visible`, `prefers-reduced-motion`, contraste AA).

## Componentes base
Button, IconButton, Input, Search, Select, Switch, Checkbox, RadioGroup, Tabs, Dialog, Sheet, Popover, Tooltip, Toast, Card, Badge, ProgressBar, ProgressRing, Skeleton, EmptyState.

## Componentes de aprendizaje
LessonHeader, LessonNav, ObjectiveList, DefinitionBlock, RuleBlock, ArticleBlock, ExampleBlock, TrapBlock, TipBlock, SourceBlock, DecisionFlow, Timeline, ProcessMap, Checkpoint, PJSQuestion, ExplanationPanel, ConfidenceSelector, BookmarkButton, ErrorNotebookEntry, MasteryMeter, CourseCard, ModuleCard, PracticeModeCard.

## Motion
- 120–220 ms para feedback de controles
- 220–320 ms para overlays/navegación
- sin parallax
- transformaciones pequeñas (2–8 px)
- respetar `prefers-reduced-motion`
- animación educativa permitida cuando explica un proceso, no como decoración
