import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { CssBaseline } from '@mui/material';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



createRoot(document.getElementById('root')!).render(
    <CssBaseline >
      <StrictMode>
          <App />
      </StrictMode>
    </CssBaseline>
)
