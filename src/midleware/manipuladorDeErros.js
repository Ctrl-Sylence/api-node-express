import mongoose from "mongoose";
import ErroBase from "../Erros/ErroBase.js";
import RequisicaoIncorreta from "../Erros/RequisicaoIncorreta.js";
import IdInvalido from "../Erros/IdInvalido.js";

function manipuladorErro(erro, req, res, next){
    
        if(erro instanceof mongoose.Error.CastError){
                new RequisicaoIncorreta().enviarResposta(res);
        }

        else if(erro instanceof mongoose.Error.ValidationError){
                new IdInvalido(erro).enviarResposta(res);
        }
    
        else{
                new ErroBase().enviarResposta(res);
        };
}

export default manipuladorErro;