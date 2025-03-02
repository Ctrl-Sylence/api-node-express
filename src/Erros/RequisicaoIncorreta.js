import ErroBase from "./ErroBase.js";

class RequisicaoIncorreta extends ErroBase {
    constructor() {
        super("Ocorreram os seguintes erros: Um ou mais dados fornecidos estão incorretos", 404);
    }
}

export default RequisicaoIncorreta;