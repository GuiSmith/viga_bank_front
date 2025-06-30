// Beneficiários
import Login from '@paginas/beneficiario/Login.jsx';
import Logout from '@paginas/beneficiario/Logout';
import Perfil from '@paginas/beneficiario/Perfil';

// Cobranças
import Cobrancas from '@paginas/Cobrancas';


const rotas = [
    {
        path: '/',
        element: <Cobrancas />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/logout',
        element: <Logout />
    },
    {
        path: '/perfil',
        element: <Perfil />
    }
];

export default rotas;