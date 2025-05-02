import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Get the root element
const rootElement = document.getElementById('root');

// Add a class to the root element for styling
rootElement.className = 'h-full min-h-screen transition-colors duration-300';

// Check if dark mode is active and add appropriate class
if (document.documentElement.classList.contains('dark')) {
  rootElement.classList.add('dark-mode');
}

// Create root and render app
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
