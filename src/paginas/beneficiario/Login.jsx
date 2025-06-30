// Bibliotecas
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';

// Contextos
import { useAuth } from '@contextos/AuthContexto';

// Serviços
import API from '@servicos/API';

// Componentes | UI
import CadeadoIcone from '@componentes/inputIcons/CadeadoIcone';
import EmailIcone from '@componentes/inputIcons/EmailIcone';
import Label from '@componentes/Label';

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
        <div>
            <div className="card border-0 shadow-sm" style={{ width: "400px", padding: "2rem" }}>
                {/* Título */}
                <div className="text-center mb-4">
                    {/* Lock icon in circular background */}
                    <div
                        className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                        style={{
                            width: "80px",
                            height: "80px",
                            backgroundColor: "#e9ecef",
                        }}
                    >
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            style={{ color: "#6c757d" }}
                        >
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                            <circle cx="12" cy="16" r="1" />
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                    </div>

                    <h2 className="fw-bold mb-2" style={{ color: "#212529" }}>
                        Entrar
                    </h2>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Email Field */}
                    <div className="mb-3">
                        <Label htmlFor='email'>Email</Label>
                        <div className="position-relative">
                            <EmailIcone />
                            <input type="email" className="form-control ps-5" id="email"placeholder="nome@empresa.com.br"{...register('email')} required />
                        </div>
                    </div>

                    {/* Password Field */}
                    <div className="mb-3">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <Label htmlFor='pasword'>Senha</Label>
                        </div>
                        <div className="position-relative">
                            <CadeadoIcone />
                            <input type="password" className="form-control ps-5" id="password" {...register('senha')} required />
                        </div>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="btn w-100 text-white fw-semibold"
                        style={{
                            backgroundColor: "#212529",
                            border: "none",
                            borderRadius: "8px",
                            padding: "12px",
                            fontSize: "16px",
                            marginTop: "1rem",
                        }}
                    >
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    )
};

export default Login;