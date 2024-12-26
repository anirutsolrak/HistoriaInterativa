import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { SpeedInsights } from "@vercel/speed-insights/react"; // Certifique-se de usar "/react" para aplicações React padrão

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
    <SpeedInsights />
  </StrictMode>
);