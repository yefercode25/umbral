import { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AnimatePresence, MotionConfig } from 'motion/react'
import { AppShell } from './AppShell'
import { HomePage } from '../features/home/HomePage'
import { CoursesPage } from '../features/courses/CoursesPage'
import { LibraryPage } from '../features/library/LibraryPage'
import { IndicatorsPage } from '../features/library/IndicatorsPage'
import { CoursePage } from '../features/courses/CoursePage'
import { ModulePage } from '../features/courses/ModulePage'
import { SourcesPage } from '../features/courses/SourcesPage'
import { LessonPage } from '../features/lessons/LessonPage'
import { PracticePage } from '../features/practice/PracticePage'
import { MockExamPage } from '../features/practice/MockExamPage'
import { AdaptivePracticePage } from '../features/practice/AdaptivePracticePage'
import { DiagnosticPage } from '../features/practice/DiagnosticPage'
import { ErrorNotebookPage } from '../features/practice/ErrorNotebookPage'
import { CaseLabsPage } from '../features/practice/CaseLabsPage'
import { ProgressPage } from '../features/progress/ProgressPage'
import { SettingsPage } from '../features/settings/SettingsPage'
import { StudyPlanPage } from '../features/studyplan/StudyPlanPage'
import { useSettingsStore } from '../stores/settingsStore'
import { PwaStatus } from '../components/pwa/PwaStatus'
import { AppErrorBoundary } from '../components/system/AppErrorBoundary'
import { RouteScrollToTop } from '../components/system/RouteScrollToTop'

export function App() {
  const theme = useSettingsStore((s) => s.theme)
  const reducedMotion = useSettingsStore((s) => s.reducedMotion)

  useEffect(() => {
    const root = document.documentElement
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const apply = () => {
      const resolved = theme === 'system' ? (media.matches ? 'dark' : 'light') : theme
      root.dataset.theme = resolved
      root.style.colorScheme = resolved
      document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')?.setAttribute('content', resolved === 'dark' ? '#191D24' : '#FFFDF9')
    }
    apply()
    media.addEventListener('change', apply)
    return () => media.removeEventListener('change', apply)
  }, [theme])

  return (
    <MotionConfig reducedMotion={reducedMotion === 'reduce' ? 'always' : 'user'}>
      <AppErrorBoundary>
        <RouteScrollToTop />
        <PwaStatus />
        <AnimatePresence mode="wait">
          <Routes>
            <Route element={<AppShell />}>
            <Route index element={<HomePage />} />
            <Route path="courses" element={<CoursesPage />} />
            <Route path="library" element={<LibraryPage />} />
            <Route path="library/indicators" element={<IndicatorsPage />} />
            <Route path="courses/:courseSlug" element={<CoursePage />} />
            <Route path="courses/:courseSlug/module/:moduleId" element={<ModulePage />} />
            <Route path="courses/:courseSlug/sources" element={<SourcesPage />} />
            <Route path="courses/:courseSlug/plan" element={<StudyPlanPage />} />
            <Route path="courses/:courseSlug/lesson/:lessonId" element={<LessonPage />} />
            <Route path="practice" element={<PracticePage />} />
            <Route path="practice/mock" element={<MockExamPage />} />
            <Route path="practice/adaptive" element={<AdaptivePracticePage />} />
            <Route path="practice/diagnostic" element={<DiagnosticPage />} />
            <Route path="practice/errors" element={<ErrorNotebookPage />} />
            <Route path="practice/cases" element={<CaseLabsPage />} />
            <Route path="practice/cases/:caseId" element={<CaseLabsPage />} />
            <Route path="progress" element={<ProgressPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </AppErrorBoundary>
    </MotionConfig>
  )
}
