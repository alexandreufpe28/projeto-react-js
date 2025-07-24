import Cabecalho from "../../componentes/Cabecalho";
import Cartao from "../../componentes/Cartao";
import Rodape from "../../componentes/Rodape";

function Home() {
    return (
        <>
            <Cabecalho />

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3 col-6">
                        <Cartao />
                    </div>
                    <div className="col-md-3 col-6">
                        <Cartao />
                    </div>
                    <div className="col-md-3 col-6">
                        <Cartao />
                    </div>
                    <div className="col-md-3 col-6">
                        <Cartao />
                    </div>
                </div>
            </div>

            <Rodape />
        </>
    )
}

export default Home;