import { z } from 'zod'
import { readIndicators, saveIndicators } from './indicatorCoverage'

const persistedProgressSchema = z.object({
  state: z.object({
    schemaVersion: z.literal(1),
    courses: z.record(z.string(), z.unknown()),
  }).passthrough(),
  version: z.number().optional(),
}).passthrough()

const persistedSettingsSchema = z.object({
  state: z.object({
    theme: z.enum(['system', 'light', 'dark']),
    reducedMotion: z.enum(['system', 'reduce']),
    speechVoiceURI: z.string().nullable().optional(),
    speechRate: z.number().min(0.5).max(2).optional(),
  }).passthrough(),
  version: z.number().optional(),
}).passthrough()

export const backupSchema = z.object({
  format: z.literal('umbral-backup'),
  schemaVersion: z.literal(1),
  exportedAt: z.string(),
  progress: persistedProgressSchema.nullable(),
  settings: persistedSettingsSchema.nullable(),
  dianIndicators: z.array(z.object({ id: z.string(), title: z.string(), moduleIds: z.array(z.string()) })).max(150).optional(),
})

export type UmbralBackup = z.infer<typeof backupSchema>

function parseStored(raw: string | null): unknown | null {
  if (!raw) return null
  try { return JSON.parse(raw) as unknown } catch { return null }
}

export function createBackup(): UmbralBackup {
  return backupSchema.parse({
    format: 'umbral-backup',
    schemaVersion: 1,
    exportedAt: new Date().toISOString(),
    progress: parseStored(localStorage.getItem('umbral:progress:v1')),
    settings: parseStored(localStorage.getItem('umbral:settings:v1')),
    dianIndicators: readIndicators(),
  })
}

export function restoreBackup(input: unknown) {
  const parsed = backupSchema.parse(input)
  if (parsed.progress) localStorage.setItem('umbral:progress:v1', JSON.stringify(parsed.progress))
  else localStorage.removeItem('umbral:progress:v1')
  if (parsed.dianIndicators) saveIndicators(parsed.dianIndicators)
  if (parsed.settings) localStorage.setItem('umbral:settings:v1', JSON.stringify(parsed.settings))
  else localStorage.removeItem('umbral:settings:v1')
  return parsed
}
