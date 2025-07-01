// Bibliotecas
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

// Serviços
import API from '@servicos/API';

// Utilitários
import utils from '@utils/formatadores';

// Componentes
import Titulo from '@componentes/Titulo';
import IconeContainer from '@componentes/IconeContainer';
import Loading from '@componentes/Loading';
import CobrancasIcone from '@componentes/CobrancasIcone';

const Cobrancas = ({ prospTipoCobranca = null, titulo = null }) => {

    const [cobrancas, setCobrancas] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const [cobrancasFiltradas, setCobrancasFiltradas] = useState([]);
    const [tipoCobranca, setTipoCobranca] = useState(prospTipoCobranca);

    const endpoint = 'views/cobrancas';

    // Listar cobranças
    useEffect(() => {
        API.listar(endpoint)
            .then(response => {
                if (response.error) {
                    throw new Error("Erro ao listar cobranças");
                }

                if (!response.error && !response.ok) {
                    toast.warning(response.mensagem);
                    setCobrancas([]);
                    return;
                }

                if (response.ok) {
                    setCobrancas(response.array);
                    setCobrancasFiltradas(response.array);
                    return;
                }
            })
            .catch(error => {
                console.error('Erro ao buscar cobranças', error);
                setCobrancas([]);
                toast.error('Erro ao listar cobranças, contate o suporte!');
            })
            .finally(() => setIsLoading(false));
    }, []);

    // Filtrando cobranças
    useEffect(() => {
        if (isLoading) return;
        if (tipoCobranca == null) {
            setCobrancasFiltradas(cobrancas);
        } else {
            setCobrancasFiltradas(cobrancas.filter(cobranca => cobranca.tipo_cobranca == tipoCobranca));
        }
    }, [tipoCobranca, cobrancas]);

    const tabela = () => {

        const dados = {
            id: 'ID',
            tipo_cobranca: 'Tipo',
            valor: 'Valor',
            status: 'Status',
            nosso_numero: 'NN Boleto',
            id_integracao: 'ID Pix',
            data_cadastro: 'Criado em',
        };

        const formatCell = (key, value) => {
            if (key == 'valor') {
                return `R$ ${Number(value).toFixed(2).replace('.', ',')}`;
            }

            if (['id_integracao', 'nosso_numero'].includes(key)) {
                return utils.etc(value, 12);
            }

            if (key == 'data_cadastro') {
                return utils.formatData(value, true);
            }

            return value;
        }

        return (
            <div className='table-container table-responsive mt-3'>
                <table className='table table-bordered table-hover table-stripped align-middle'>
                    <thead className='table-dark'>
                        <tr>
                            {Object.values(dados).map((dado, index) => <th key={index} scope='col'>{dado}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {cobrancasFiltradas.map(cobranca => (
                            <tr key={`${cobranca.id}-${cobranca.tipo_cobranca}`}>
                                {Object.keys(dados).map((chave, index) => (
                                    <td key={index}>{formatCell(chave, cobranca[chave])}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    };

    return (
        <article>
            <div className='text-center'>
                <IconeContainer>
                    <CobrancasIcone />
                </IconeContainer>

                <Titulo texto={titulo ?? 'Cobranças'} />

                {/* Botões */}
                {prospTipoCobranca !== null ? '' : (
                    <>
                        <p className='tex-muted'>Filtre clicando em um botão</p>
                        <div className='d-flex flex-wrap justify-content-center gap-2 mb-3'>
                            {/* {['Boleto','Pix','Cartão'].map(tipo)} */}
                            {[...new Set((cobrancas || []).map(c => c.tipo_cobranca))].map(tipo => (
                                <button
                                    key={tipo}
                                    className={`btn ${(tipoCobranca === null || tipoCobranca === tipo)
                                        ? 'btn-dark'
                                        : 'btn-secondary'
                                        }`}
                                    onClick={() => setTipoCobranca(tipoCobranca == tipo ? null : tipo)}
                                >
                                    {tipo}
                                </button>
                            ))}
                        </div>
                    </>
                )}
            </div>
            {isLoading ? <Loading /> : tabela()}
        </article>
    )
};

export default Cobrancas;