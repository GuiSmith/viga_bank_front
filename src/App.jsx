// Bibliotecas
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Contextos
import { useAuth } from '@contextos/AuthContexto';

// Estilos
import './App.css';
import './index.css';

// UI
import BarraDeNavegacao from '@ui/BarraDeNavegacao';
import PaginaInexistente from '@ui/PaginaInexistente';
import { ToastContainer } from 'react-toastify';

// Rotas
import rotas from './rotas.jsx';

function App() {

  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useAuth();
  const permittedPaths = ['/cadastro'];

  useEffect(() => {
    if (isLoading) return;

    if (isAuthenticated) {
      if (location.pathname = '/login') {
        navigate('/tokens');
      }
    } else {
      if (!permittedPaths.includes(location.pathname)) {
        navigate('/login')
      }
    }
  }, [isLoading, isAuthenticated, location.pathname]);

  return (
    <>
      <section className='app-container'>
        <BarraDeNavegacao />
        <div className='page-wrapper d-flex align-items-top justify-content-center'>
          <article className="card border-0 shadow-sm" style={{ padding: "2rem" }}>
            <Routes>
              {rotas.map(({ path, element }, index) => (
                <Route key={index} path={path} element={element} />
              ))}
              <Route key={'inexistente'} path='*' element={<PaginaInexistente />} />
            </Routes>
            <ToastContainer position="bottom-right" />
          </article>
        </div>
      </section >
    </>
  )
}

export default App;