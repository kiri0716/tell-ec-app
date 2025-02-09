import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRoutes from './router/AppRoutes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>,
)
