# Datos, progreso y evaluación

## Claves localStorage
- `umbral:settings:v1`
- `umbral:progress:v1`
- `umbral:session:v1`
- `umbral:theme:v1`

El estado crítico debe ser compacto, validado con Zod y migrable.

## Progreso por curso
- courseId
- contentVersion
- startedAt / lastActivityAt
- lastRoute
- lessons: status, readPercent, completedAt
- skills: attempts, accuracy, mastery, lastPracticedAt
- modules: completion, assessmentScore
- bookmarks
- mistakes index
- dailyGoal

## Historial voluminoso
IndexedDB/Dexie puede guardar intentos detallados sin inflar localStorage. El resumen de progreso siempre queda también en localStorage.

## Respaldo
- exportar progreso a JSON
- importar con validación y vista previa
- nunca borrar progreso por actualización de contenido
- migraciones de esquema por versión

## Preguntas
Cada pregunta debe incluir:
- id estable
- courseId / moduleId / skillIds
- tipo
- dificultad
- caso/enunciado
- opciones
- respuesta/clave
- explicación general
- explicación por distractor cuando aporte valor
- `sourceRefs[]`
- `verifiedAt`
- `contentVersion`

## Tipos de evaluación
- PJS de 3 opciones
- selección única
- selección múltiple cuando sea pedagógicamente útil
- ordenar actuaciones
- línea de tiempo
- identificar error en procedimiento
- completar mapa de decisión

La práctica del concurso priorizará PJS; los demás tipos sirven para aprender, no para simular el formato oficial.
