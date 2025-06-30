// Beneficiários
import Login from '@paginas/beneficiario/Login.jsx';
import Logout from '@paginas/beneficiario/Logout';
import Cadastro from '@paginas/beneficiario/Cadastro';

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
        path: '/cadastro',
        element: <Cadastro />
    }
];

export default rotas;