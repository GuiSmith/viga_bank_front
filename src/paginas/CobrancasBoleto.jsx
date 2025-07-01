import Cobrancas from '@paginas/Cobrancas';

const Boletos = () => {

    const tipoCobranca = 'Boleto';
    const titulo = 'Boletos';

    return (
        <Cobrancas prospTipoCobranca={tipoCobranca} titulo={titulo} />
    )

}

export default Boletos;