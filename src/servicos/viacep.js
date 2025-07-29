import axios from "axios";

export const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export async function consultarEnderecoPeloCEP(cep, setRua, setCidade, setEstado) {
    try {
        const resposta = await api.get(`${cep}/json/`);

        if (resposta.data.erro) {
            throw new Error("CEP não encontrado.");
        }

        setRua(resposta.data.logradouro);
        setCidade(resposta.data.localidade);
        setEstado(resposta.data.estado);
    } catch (erro) {
        console.error("Erro ao buscar CEP: ", erro.message);
    }
}

// callback
export async function consultarEnderecoPeloCEPv2(cep, setRua, setCidade, setEstado) {
    await api.get(`${cep}/json/`)
        .then((resposta) => {
            if (resposta.data.erro) {
                throw new Error("CEP não encontrado.");
            }

            setRua(resposta.data.logradouro);
            setCidade(resposta.data.localidade);
            setEstado(resposta.data.estado);
        })
        .catch((erro) => {
            console.error("Erro ao buscar CEP: ", erro.message);
        });
}