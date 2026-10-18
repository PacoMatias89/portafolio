import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './contexts/ThemeContext'

const root = document.getElementById('root')!

const app = (
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
)

// En producción el HTML llega pre-renderizado (SSG) y solo hidratamos.
// En desarrollo el root está vacío, así que renderizamos desde cero.
if (root.hasChildNodes()) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
