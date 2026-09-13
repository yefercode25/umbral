import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type ThemePreference = 'system' | 'light' | 'dark'

type SettingsState = {
  theme: ThemePreference
  reducedMotion: 'system' | 'reduce'
  speechVoiceURI: string | null
  speechRate: number
  setTheme: (theme: ThemePreference) => void
  setReducedMotion: (value: 'system' | 'reduce') => void
  setSpeechVoiceURI: (voiceURI: string | null) => void
  setSpeechRate: (rate: number) => void
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      theme: 'system',
      reducedMotion: 'system',
      speechVoiceURI: null,
      speechRate: 1,
      setTheme: (theme) => set({ theme }),
      setReducedMotion: (reducedMotion) => set({ reducedMotion }),
      setSpeechVoiceURI: (speechVoiceURI) => set({ speechVoiceURI }),
      setSpeechRate: (speechRate) => set({ speechRate: Math.min(2, Math.max(0.5, speechRate)) }),
    }),
    { name: 'umbral:settings:v1' },
  ),
)
