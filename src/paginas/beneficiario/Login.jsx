// Bibliotecas
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';

// Contextos
import { useAuth } from '@contextos/AuthContexto';

// Serviços
import API from '@servicos/API';

// Componentes | UI
import CadeadoInputIcone from '@componentes/InputIcones/CadeadoInputIcone';
import EmailIcone from '@componentes/InputIcones/EmailIcone';
import IconeContainer from '@componentes/IconeContainer';
import CadeadoIcone from '@componentes/CadeadoIcone';
import Label from '@componentes/Label';
import Titulo from '@componentes/Titulo';

const Login = () => {

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const { handleLoginSuccess } = useAuth();

    const onSubmit = async (data) => {

        try {

            const endpoint = `beneficiarios/login`;
            const completeUrl = `${API.apiUrl}/${endpoint}`;

            const response = await fetch(completeUrl, API.apiOptions('POST', data));
            const responseData = await response.json();

            if (response.status == 200) {

                handleLoginSuccess({ token: responseData.token });
                toast.success('Login realizado');
                navigate('/');
                return;
            }

            toast.warning(responseData.mensagem);

        } catch (error) {
            console.error('Erro ao fazer login: ', error);
            toast.error('Erro ao fazer login, tente novamente mais tarde');
        }

    }

    return (
        <>
            {/* Título */}
            <div className="text-center mb-4">
                {/* Lock icon in circular background */}
                <IconeContainer>
                    <CadeadoIcone />
                </IconeContainer>

                <Titulo texto = 'Entrar' />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Email Field */}
                <div className="mb-3">
                    <Label htmlFor='email'>Email</Label>
                    <div className="position-relative">
                        <EmailIcone />
                        <input type="email" className="form-control ps-5" id="email" placeholder="nome@empresa.com.br"{...register('email')} required />
                    </div>
                </div>

                {/* Password Field */}
                <div className="mb-3">
                    <Label htmlFor='pasword'>Senha</Label>
                    <div className="position-relative">
                        <CadeadoInputIcone />
                        <input type="password" className="form-control ps-5" id="password" {...register('senha')} required />
                    </div>
                </div>

                {/* Login Button */}
                <button type='submit' className='btn btn-dark w-100'>
                    Entrar
                </button>
            </form>
        </>
    )
};

export default Login;