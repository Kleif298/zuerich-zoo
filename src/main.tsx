import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import MyForm from './MyForm.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <MyForm />
  </StrictMode>,
)
