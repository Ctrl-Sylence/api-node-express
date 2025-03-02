import RequisicaoIncorreta from "./RequisicaoIncorreta.js";

class IdInvalido extends RequisicaoIncorreta {
    constructor(erro){

        const mensagemErro = Object.values(erro.errors)
        .map(erro=> erro.message)
        .join("; ");

        super(`Ocorreram os seguintes erros: ${mensagemErro}`)
    }
}

export default IdInvalido;
    
