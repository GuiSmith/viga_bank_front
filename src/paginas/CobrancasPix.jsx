import Cobrancas from '@paginas/Cobrancas';

const CobrancasPix = () => {

    const tipoCobranca = 'Pix';
    const titulo = 'Cobranças Pix';

    return (
        <Cobrancas prospTipoCobranca={tipoCobranca} titulo={titulo}/>
    );

}

export default CobrancasPix;