// Beneficiários
import Login from '@paginas/beneficiario/Login.jsx';
import Logout from '@paginas/beneficiario/Logout';
import Cadastro from '@paginas/beneficiario/Cadastro';
import TokensLista from '@paginas/tokens/tokensLista';


// Cobranças
import Cobrancas from '@paginas/Cobrancas';
import CobrancasBoleto from '@paginas/CobrancasBoleto';
import CobrancasCartao from '@paginas/CobrancasCartao';
import CobrancasPix from '@paginas/CobrancasPix';

const rotas = [
    {
        path: '/',
        element: <Login />,
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
    },
    {
        path: '/tokens',
        element: <TokensLista />
    },
    {
        path: '/boletos',
        element: <CobrancasBoleto />
    },
    {
        path: '/cartoes',
        element: <CobrancasCartao />
    },
    {
        path: '/pix',
        element: <CobrancasPix />
    },
    {
        path: '/cobrancas',
        element: <Cobrancas />
    }
];

export default rotas;