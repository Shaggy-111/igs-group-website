import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useEffect } from "react";
import './index.css'
import App from './App.jsx'
import AOS from "aos";
import "aos/dist/aos.css";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

useEffect(() => {
  AOS.init();
}, []);