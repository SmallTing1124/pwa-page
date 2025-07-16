import { registerSW } from 'virtual:pwa-register'
registerSW();


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/all.scss';
import App from './App.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
