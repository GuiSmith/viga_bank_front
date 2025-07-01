import Cobrancas from '@paginas/Cobrancas';

const CobrancasCartao = () => {
    const tipoCobranca = 'Cartão';
    const titulo = 'Cobranças no cartão';

    return (
        <Cobrancas prospTipoCobranca={tipoCobranca} titulo={titulo} />
    );
}

export default CobrancasCartao;