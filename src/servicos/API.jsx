import Cookies from 'js-cookie';

const ip = window.location.hostname;

const apiUrl = `http://${ip}:5000`;

const setToken = (tokenString) => Cookies.set('token', tokenString);

const getToken = () => Cookies.get('token');

const apiOptions = (apiMethod, apiBody = {}) => {
    const obj = {
        method: apiMethod, // Já informado no início da função
        headers: {
            'Content-Type': 'application/json',
        }
    }

    const token = getToken();

    if (token && token.length > 0) {
        obj.headers['Authorization'] = `Bearer ${token}`;
    }

    if (!['GET', 'DELETE'].includes(apiMethod)) {
        const strippedApiBody = Object.fromEntries(
            Object.entries(apiBody).filter(([key, value]) => value !== null)
        );
        if (Object.keys(strippedApiBody).length == 0) {
            return null;
        } else {
            obj.body = JSON.stringify(strippedApiBody);
        }
    }

    return obj;
}

const auth = async () => {

    const completeUrl = `${apiUrl}/`;

    const response = await fetch(completeUrl, apiOptions('GET'));
    const responseCode = response.status;

    if (responseCode == 200) {
        return true;
    } else {
        return false;
    }
};

const selecionarBeneficiario = async () => {
    try {
        const completeUrl = `${apiUrl}/beneficiarios`;
        const encodedUrl = encodeURI(completeUrl);

        const response = await fetch(encodedUrl, apiOptions('GET'));
        const data = await response.json();

        if (response.status == 200) {
            return {
                ok: true,
                error: false,
                data,
                mensagem: ``,
            };
        }

        if (response.status == 404) {
            return {
                ok: false,
                error: false,
                data: {},
                mensagem: `Beneficiário não encontrado`,
            };
        }

        if (response.status === 500) {
            return {
                ok: false,
                error: true,
                data: {},
                mensagem: ''
            };
        }

        if (response.status === 401) {
            return {
                ok: false,
                error: false,
                data: {},
                mensagem: 'Não autenticado'
            };
        }

        return {
            ok: false,
            error: false,
            data: {},
            mensagem: data.mensagem
        };

    } catch (error) {
        console.error(error);
        return {
            ok: false,
            error: true,
            data: {},
            mensagem: data.mensagem
        };
    }
}

const selecionar = async (tabela, id) => {

    try {
        const completeUrl = `${apiUrl}/${tabela}/${id}`;
        const encodedUrl = encodeURI(completeUrl);

        const response = await fetch(encodedUrl, apiOptions('GET'));

        if (response.status == 200) {
            return {
                ok: true,
                error: false,
                data,
                mensagem: ``,
            };
        }

        if (response.status == 404) {
            return {
                ok: false,
                error: false,
                data: {},
                mensagem: `Registro não encontrado`,
            };
        }

        if (response.status === 500) {
            return {
                ok: false,
                error: true,
                data: {},
                mensagem: ''
            };
        }

        return {
            ok: false,
            error: false,
            data: {},
            mensagem: data.mensagem
        };

    } catch (error) {
        console.error(error);
        return {
            ok: false,
            error: true,
            data: {},
            mensagem: data.mensagem
        };
    }
};

const listar = async (tabela) => {
    try {
        const completeUrl = `${apiUrl}/${tabela}`;
        const encodedUrl = encodeURI(completeUrl);

        const response = await fetch(encodedUrl, apiOptions('GET'));
        const data = response.status !== 204 ? await response.json() : {};

        if (response.status == 200) {
            return {
                ok: true,
                error: false,
                array: data,
                mensagem: ``,
            };
        }

        if (response.status == 204) {
            return {
                ok: false,
                error: false,
                array: [],
                mensagem: `Nenhum registro encontrado`,
            };
        }

        if (response.status == 500) {
            return {
                ok: false,
                error: true,
                array: [],
                mensagem: response.mensagem
            };
        }
    } catch (error) {
        console.error(error);
        return {
            ok: false,
            error: true,
            array: [],
            mensagem: data.mensagem
        };
    }
};

const deletar = async (tabela, id) => {
    try {

        const response = await fetch(`${apiUrl}/${tabela}/${id}`, apiOptions('DELETE'));

        if (response.status === 404) {
            return {
                ok: false,
                error: false,
                mensagem: 'Registro não encontrado'
            };
        }

        const data = await response.json();

        if (response.status === 200) {
            return {
                ok: true,
                error: false,
                mensagem: ''
            };
        }

        if (response.status === 500) {
            return {
                ok: false,
                error: true,
                mensagem: ''
            };
        }

        return {
            ok: false,
            error: false,
            mensagem: data.mensagem
        };

    } catch (error) {
        console.log(error);
        return {
            ok: false,
            error: true,
            mensagem: error.message
        };
    }
}

export default { apiUrl, getToken, setToken, apiOptions, auth, selecionar, listar, deletar, selecionarBeneficiario };
