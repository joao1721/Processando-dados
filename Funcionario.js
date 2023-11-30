import  Pessoa  from "./Pessoa.js";

export default class Funcionario extends Pessoa{



    calculaIdade(calc){
        let hoje = new Date();
        return hoje - calc
    }

}


