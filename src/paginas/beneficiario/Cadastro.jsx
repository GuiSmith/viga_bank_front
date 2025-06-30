// Bibliotecas
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

// Componentes
// Ícones
import IconeContainer from '@componentes/IconeContainer';
import PerfilIcone from "@componentes/PerfilIcone";
import ArrowLeftIcone from '@componentes/ArrowLeftIcone';
import ArrowRightIcone from '@componentes/ArrowRIghtIcone';
import EmailIcone from '@componentes/InputIcones/EmailIcone';
import CartaoIcone from '@componentes/CartaoIcone';
import PredioIcone from '@componentes/PredioIcone';

// Outros
import Titulo from '@componentes/Titulo';
import Label from '@componentes/Label';

const Cadastro = () => {

    const { register, handleSubmit, watch } = useForm();
    const [etapa, setEtapa] = useState(1);

    const Etapa1 = () => (
        <>
            <div>

                <p className='fw-semibold'> <PredioIcone /> Dados Pessoais</p>
            </div>
            {/* Razão social */}
            <div className="mb-3">
                <Label htmlFor="razao">
                    Nome Completo / Razão Social <span className='text-danger'>*</span>
                </Label>
                <input id="razao" type="text" className="form-control" {...register("razao", { required: true })} placeholder="Digite o nome completo ou razão social"
                />
            </div>
            {/* Fantasia */}
            <div className="mb-3">
                <Label htmlFor="razao">
                    Nome Social / Nome Fantasia <span className='text-danger'>*</span>
                </Label>
                <input id="razao" type="text" className="form-control" {...register("fantasia", { required: true })} placeholder="Digite o nome completo ou razão social"
                />
            </div>
            {/* CPF / CNPJ */}
            <div className="mb-3">
                <Label htmlFor="cpf_cnpj">
                    CPF / CNPJ <span className='text-danger'>*</span>
                </Label>
                <input id="cpf_cnpj" type="text" className="form-control" {...register("cpf_cnpj", { required: true })} placeholder="000.000.000-00 ou 00.000.000/0000-00"
                />
            </div>
            {/* E-mail */}
            <div className="mb-3">
                <Label htmlFor="email">
                    Email <span className='text-danger'>*</span>
                </Label>
                <div className='position-relative'>
                    <EmailIcone />
                    <input id="email" type="email" className="form-control input-icon" {...register("email", { required: true })} placeholder="seu@email.com.br"
                    />
                </div>
            </div>
        </>
    );

    const Etapa2 = () => (
        <>
            <div>
                <p className='fw-semibold'> <CartaoIcone /> Dados Bancários</p>
            </div>
            <div className="mb-3">
                <Label htmlFor="codigo_banco">
                    Banco Emissor <span className='text-danger'>*</span>
                </Label>
                <select id="codigo_banco" className="form-control form-select" {...register("codigo_banco", { required: true })}>
                    <option value="">Selecione o banco</option>
                    <option value="001,Banco do Brasil">001 - Banco do Brasil</option>
                    <option value="104,Caixa Econômica Federal">104 - Caixa Econômica Federal</option>
                    <option value="237,Bradesco">237 - Bradesco</option>
                    <option value="341,Itaú Unibanco">341 - Itaú Unibanco</option>
                    <option value="033,Santander">033 - Santander</option>
                    <option value="422,Banco Safra">422 - Banco Safra</option>
                    <option value="077,Banco Inter">077 - Banco Inter</option>
                    <option value="260,Nubank">260 - Nubank</option>
                    <option value="212,Banco Original">212 - Banco Original</option>
                    <option value="208,BTG Pactual">208 - BTG Pactual</option>
                </select>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <Label htmlFor="agencia">
                        Agência <span className='text-danger'>*</span>
                    </Label>
                    <input
                        id="agencia"
                        type="text"
                        className="form-control"
                        {...register("agencia", { required: true })}
                        placeholder="0000"
                    />
                </div>
                <div className="col">
                    <Label htmlFor="numero_conta">
                        Conta <span className='text-danger'>*</span>
                    </Label>
                    <input
                        id="numero_conta"
                        type="text"
                        className="form-control"
                        {...register("numero_conta", { required: true })}
                        placeholder="00000-0"
                    />
                </div>
            </div>
            <div className="mb-3">
                <Label htmlFor="convenio">
                    Convênio <span className='text-danger'>*</span>
                </Label>
                <input
                    id="convenio"
                    type="text"
                    className="form-control"
                    {...register("convenio", { required: true })}
                    placeholder="Código do convênio"
                />
                <small className="text-muted" style={{ fontSize: '75%' }}>Fornecido pelo banco para cobrança</small>
            </div>
        </>
    );


    const Etapa3 = () => (
        <>
            <p className='fw-semibold'><span role="img" aria-label="senha">🔒</span> Definir Senha</p>

            <div className="mb-3">
                <Label htmlFor="senha">Senha <span className='text-danger'>*</span></Label>
                <div className="input-group position-relative">
                    <input
                        id="senha"
                        type="password"
                        className="form-control"
                        placeholder="Digite uma senha segura"
                        {...register("senha", {
                            required: "Senha é obrigatória",
                            minLength: { value: 8, message: "Mínimo de 8 caracteres" },
                            pattern: {
                                value: /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,
                                message: "Senha deve conter letra maiúscula, número e caractere especial"
                            }
                        })}
                    />
                    <div
                        type="button"
                        className="position-absolute top-50 end-0 translate-middle-y me-2"
                        onClick={() => {
                            const inputSenha = document.getElementById("senha");
                            inputSenha.type = inputSenha.type === "password" ? "text" : "password";
                        }}
                        aria-label="Mostrar senha"
                    >
                        👁️
                    </div>
                </div>
            </div>

            <div className="mb-3">
                <Label htmlFor="confirmarSenha">Confirmar Senha <span className='text-danger'>*</span></Label>
                <div className="input-group position-relative">
                    <input
                        id="confirmarSenha"
                        type="password"
                        className="form-control"
                        placeholder="Digite a senha novamente"
                        {...register("confirmarSenha", {
                            required: "Confirmação de senha é obrigatória",
                            validate: (value) => value === watch("senha") || "As senhas não coincidem"
                        })}
                    />
                    <div
                        type="button"
                        className="position-absolute top-50 end-0 translate-middle-y me-2"
                        onClick={() => {
                            const inputConfirm = document.getElementById("confirmarSenha");
                            inputConfirm.type = inputConfirm.type === "password" ? "text" : "password";
                        }}
                        aria-label="Mostrar senha"
                    >
                        👁️
                    </div>
                </div>
            </div>

            <div className="mb-3 p-3 bg-light rounded-2" style={{ fontSize: '0.9rem' }}>
                <strong>Requisitos da senha:</strong>
                <ul className="mb-0">
                    <li>Mínimo de 8 caracteres</li>
                    <li>Pelo menos uma letra maiúscula</li>
                    <li>Pelo menos um número</li>
                    <li>Pelo menos um caractere especial</li>
                </ul>
            </div>

            <div className="form-check mb-2">
                <input
                    type="checkbox"
                    id="termosUso"
                    className="form-check-input"
                    {...register("termosUso", { required: true })}
                />
                <Label htmlFor="termosUso" className="form-check-label">
                    Concordo com os Termos de Uso
                </Label>
            </div>

            <div className="form-check mb-4">
                <input
                    type="checkbox"
                    id="lgpd"
                    className="form-check-input"
                    {...register("lgpd", { required: true })}
                />
                <Label htmlFor="lgpd" className="form-check-label">
                    Autorizo tratamento dos dados (LGPD)
                </Label>
            </div>
        </>
    );

    const onSubmit = async (data) => {
        try {
            console.log(data);
        } catch (error) {
            console.error('Erro ao cadastrar beneficiário', error);
            toast.error('Erro desconhecido, contate o suporte!');
        }
    }

    return (
        <>
            <div className='text-center'>
                <IconeContainer>
                    <PerfilIcone />
                </IconeContainer>
            </div>
            <Titulo texto='Cadastro de Beneficiário' />
            <small className='text-muted text-center mb-1 opacity-75'>Etapa {etapa} de 3</small>
            <div className="progress mb-4" style={{ height: '15px' }}>
                <div
                    className="progress-bar bg-dark"
                    role="progressbar"
                    style={{ width: `${(etapa / 3) * 100}%` }}
                    aria-valuenow={etapa}
                    aria-valuemin="0"
                    aria-valuemax="3"
                />
            </div>


            {etapa == 1 && <Etapa1 />}
            {etapa == 2 && <Etapa2 />}
            {etapa == 3 && <Etapa3 />}

            <div className='d-flex flex-wrap'>
                {etapa != 1 && (
                    <button type='button' className='btn btn-dark me-auto' onClick={() => setEtapa((prev) => prev - 1)}>
                        <ArrowLeftIcone />
                        Voltar
                    </button>
                )}
                <button type='button' className='btn btn-dark ms-auto' onClick={() => {
                    if (etapa == 3) {
                        handleSubmit(onSubmit)();
                    } else {
                        setEtapa((prev) => prev + 1);
                    }
                }}>
                    {etapa == 3
                        ? ('Criar conta')
                        : <span>Próximo <ArrowRightIcone /></span>
                    }
                </button>
            </div>
        </>
    )
};

export default Cadastro;