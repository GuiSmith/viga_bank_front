import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from '@contextos/AuthContexto.jsx';
import 'bootstrap/dist/css/bootstrap.min.css' // ✅ Import here
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // Optional
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </StrictMode>,
);