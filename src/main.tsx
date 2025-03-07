import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { CssBaseline } from '@mui/material';


createRoot(document.getElementById('root')!).render(
    <CssBaseline >
      <StrictMode>
          <App />
      </StrictMode>
    </CssBaseline>
)
