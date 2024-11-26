import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Usercard } from './Usercard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Usercard />
  </StrictMode>,
)
