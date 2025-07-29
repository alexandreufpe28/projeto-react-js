import { useState } from "react";
import logo from "../../assets/treina_recife_logo.jpeg";
import "./login.css";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [manterConectado, setManterConectado] = useState(true);

    const navigate = useNavigate();

    const enviarFormulario = () => {
        console.log({ email, senha, manterConectado });
        navigate("/home");
    }

    return (
        <div className="container-login">
            <img src={logo} alt="Treina Recife" width="250px" className="mb-5" />
            <div className="col-4">
                <div className="mb-3">
                    <label htmlFor="email-input" className="form-label">E-mail</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email-input" 
                        placeholder="nome@exemplo.com" 
                        defaultValue={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="senha-input" className="form-label">Senha</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="senha-input" 
                        defaultValue={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </div>
                <div className="form-check mb-3">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="check-input"
                        defaultChecked={manterConectado}
                        onClick={() => setManterConectado(!manterConectado)}
                    />
                    <label className="form-check-label" htmlFor="check-input">
                        Mantenha-me conectado
                    </label>
                </div>

                <button 
                    type="button" 
                    className="btn btn-primary mb-3 w-100"
                    onClick={enviarFormulario}
                >
                    Entrar
                </button>
            </div>
            
            <a className="form-link" href="https://www.treinarecife.com.br/" target="_blank" rel="noreferrer">Esqueci a senha</a>
        </div>
    )
}

export default Login;
