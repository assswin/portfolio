import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Anti-inspect and anti-copy security measures
document.addEventListener('contextmenu', (e) => e.preventDefault());

document.addEventListener('keydown', (e) => {
  // Prevent F12
  if (e.key === 'F12') e.preventDefault();
  
  if (e.ctrlKey && e.shiftKey) {
    // Prevent Ctrl+Shift+I (Inspect), Ctrl+Shift+J (Console), Ctrl+Shift+C (Element selector)
    if (e.key === 'I' || e.key === 'i' || 
        e.key === 'J' || e.key === 'j' || 
        e.key === 'C' || e.key === 'c') {
      e.preventDefault();
    }
  }
  
  // Prevent Ctrl+U (View Source)
  if (e.ctrlKey && (e.key === 'U' || e.key === 'u')) {
    e.preventDefault();
  }
  
  // Prevent Ctrl+C / Cmd+C (Copy)
  if ((e.ctrlKey || e.metaKey) && (e.key === 'C' || e.key === 'c')) {
    e.preventDefault();
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
