// Bibliotecas
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

// Serviços e utilitários
import API from '@servicos/API'; // ajuste o caminho se necessário
import utils from '@utils/formatadores';

// Componentes
import Titulo from '@componentes/Titulo';
import IconeContainer from '@componentes/IconeContainer';
import ChaveIcone from '@componentes/ChaveIcone';

const TokensLista = () => {
    const [tokens, setTokens] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        API.listar('token')
            .then(response => {
                setTokens(response.array);
                if (response.error) {
                    toast.error('Erro ao listar tokens');
                    return;
                }
                if (!response.ok && !response.error) {
                    toast.warning(response.mensagem);
                    return;
                }
            })
            .catch(() => setTokens([]))
            .finally(() => setLoading(false));
    }, []);

    const gerarToken = async () => {
        const endpoint = 'token';
        const completeUrl = `${API.apiUrl}/${endpoint}`;
        const options = API.apiOptions('POST', {});

        const response = await fetch(completeUrl, options);
        const data = await response.json();

        if (response.status == 201) {
            toast.success('Novo token gerado!');
            setTokens((prev) => [...prev, data]);
            return;
        }

        if (response.status == 500) {
            toast.error('Erro ao gerar novo token');
            return;
        } else {
            toast.warning(data.mensagem);
        }
    }

    const inativarToken = async (id) => {
        if(!confirm("Tem certeza de que deseja inativar este token? Aplicações que dependem dele podem parar de funcionar!")){
            return;
        }
        const endpoint = `token/${id}/inativar`;
        const completeUrl = `${API.apiUrl}/${endpoint}`;
        const options = API.apiOptions('PUT');

        const response = await fetch(completeUrl, options);
        const data = await response.json();

        if (response.status == 200) {
            toast.success('Token inativado');

            setTokens(prevTokens =>
                prevTokens.map(token =>
                    token.id === id ? { ...token, ativo: false } : token
                )
            );
            return;
        }

        if (response.status == 500) {
            toast.error('Erro ao inativar token');
            return;
        } else {
            toast.warning(data.mensagem);
        }
    }

    return (
        <>
            <div className='text-center mb-3'>
                <IconeContainer>
                    <ChaveIcone />
                </IconeContainer>

                <Titulo texto='Tokens API' />
                <small className='text-secondary text-muted'>São usados para acessar a API do sistema</small>
            </div>
            {loading ? (
                <p>Carregando...</p>
            ) : (
                <>
                    <div className='d-flex flex-wrap gap-2 justify-content-start mb-3'>
                        <button className='btn btn-dark' onClick={() => gerarToken()}>
                            Novo
                        </button>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-bordered table-hover table-striped table-dark align-middle">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">Token</th>
                                    <th scope="col">Ativo</th>
                                    <th scope='col' colSpan={2}>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tokens.map(token => (
                                    <tr key={token.id} >
                                        <td> {utils.etc(token.token,8)}</td>
                                        <td>
                                            <span className={`badge ${token.ativo ? 'bg-success' : 'bg-danger'}`}>{utils.boolToText(token.ativo)}</span>
                                        </td>
                                        <td>
                                            <span className={`badge bg-primary ${token.ativo ? '' : 'opacity-50'}`} style={{cursor: 'pointer'}}>Copiar</span>
                                        </td>
                                        <td>
                                            <span
                                                className={`badge bg-danger ${token.ativo ? '' : 'opacity-50'}`}
                                                onClick={token.ativo ? () => inativarToken(token.id) : ''}
                                                style={{cursor: token.ativo ? 'pointer' : 'default'}}
                                            >
                                                Inativar
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </>
    );
};

export default TokensLista;