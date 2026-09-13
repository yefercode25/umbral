import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { TooltipProvider } from '@radix-ui/react-tooltip'
import { App } from './app/App'
import './styles/reset.css'
import './styles/tokens.css'
import './styles/global.css'


if (import.meta.env.DEV && 'serviceWorker' in navigator) {
  void navigator.serviceWorker.getRegistrations().then((registrations) =>
    Promise.all(registrations.map((registration) => registration.unregister())),
  )

  if ('caches' in window) {
    void caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => /workbox|precache|umbral|vite-pwa/i.test(key))
          .map((key) => caches.delete(key)),
      ),
    )
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <TooltipProvider delayDuration={300}>
        <App />
      </TooltipProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
