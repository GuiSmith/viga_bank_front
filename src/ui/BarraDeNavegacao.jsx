import BarraDeNavegacaoItem from '@componentes/BarraDeNavegacaoItem';
import { NavLink } from 'react-router-dom';

// Contextos
import { useAuth } from '@contextos/AuthContexto';

const BarraDeNavegacao = () => {

    const { isAuthenticated } = useAuth();

    const links = [
        {
            auth: true,
            to: '/cobrancas',
            text: 'Cobranças',
        },
        {
            auth: true,
            to: '/tokens',
            text: 'Tokens'
        },
        {
            auth: true,
            to: '/pix',
            text: 'PIX'
        },
        {
            auth: true,
            to: '/cartoes',
            text: 'Cartão'
        },
        {
            auth: true,
            to: '/boletos',
            text: 'Boletos'
        },
    ];

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Viga Bank</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        {links.map((link, index) => (!link.auth || (link.auth && isAuthenticated))
                            ? <BarraDeNavegacaoItem key={index} to={link.to}>{link.text}</BarraDeNavegacaoItem>
                            : ''
                        )}
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        {!isAuthenticated ?
                            <>
                                <BarraDeNavegacaoItem to='/cadastro'>
                                    Registrar-se
                                </BarraDeNavegacaoItem>
                                <BarraDeNavegacaoItem to="/login" >
                                    Entrar
                                </BarraDeNavegacaoItem>
                            </>
                            :
                            <BarraDeNavegacaoItem to='/logout' >
                                Sair
                            </BarraDeNavegacaoItem>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default BarraDeNavegacao;