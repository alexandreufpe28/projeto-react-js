import { useEffect, useState } from "react";
import Cabecalho from "../../componentes/Cabecalho";
import Rodape from "../../componentes/Rodape";
import { consultarEnderecoPeloCEP } from "../../servicos/viacep";

function Cadastro() {
    const [cep, setCep] = useState("");
    const [rua, setRua] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");

    useEffect(() => {
        if (cep.length === 8) {
            consultarEnderecoPeloCEP(cep, setRua, setCidade, setEstado);
        }
    }, [cep]);

    return (
        <>
            <Cabecalho />
            <form className="container">
                <h1>Formulário de Cadastro</h1>

                <div className="row">
                    {/* Dados Pessoais */}
                </div>

                <hr />

                <div className="row">
                    <div className="col-4 mb-3">
                        <label className="form-label">CEP</label>
                        <input
                            className="form-control"
                            placeholder="XX.XXX-XXX"
                            type="text"
                            defaultValue={cep}
                            onChange={(e) => setCep(e.target.value)}
                        />
                    </div>

                    <div className="col-8 mb-3">
                        <label className="form-label">Rua</label>
                        <input
                            className="form-control"
                            type="text"
                            defaultValue={rua}
                            onChange={(e) => setRua(e.target.value)}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-3 mb-3">
                        <label className="form-label">Número</label>
                        <input
                            className="form-control"
                            type="text"
                            defaultValue={numero}
                            onChange={(e) => setNumero(e.target.value)}
                        />
                    </div>

                    <div className="col-3 mb-3">
                        <label className="form-label">Complemento</label>
                        <input
                            className="form-control"
                            type="text"
                            defaultValue={complemento}
                            onChange={(e) => setComplemento(e.target.value)}
                        />
                    </div>

                    <div className="col-3 mb-3">
                        <label className="form-label">Cidade</label>
                        <input
                            className="form-control"
                            type="text"
                            defaultValue={cidade}
                            onChange={(e) => setCidade(e.target.value)}
                        />
                    </div>

                    <div className="col-3 mb-3">
                        <label className="form-label">Estado/UF</label>
                        <input
                            className="form-control"
                            type="text"
                            defaultValue={estado}
                            onChange={(e) => setEstado(e.target.value)}
                        />
                    </div>
                </div>
                <button className="btn btn-primary" onClick={() => {}}>Enviar</button>
            </form>

            <Rodape />
        </>
    )
}

export default Cadastro;