

export default class Pessoa{
    #nome
    #dataNasc
    #funcao

    constructor(nome,dataNasc,funcao){
        this.#nome = nome;
        this.#dataNasc = dataNasc;
        this.#funcao = funcao;

    }
    get nome(){return this.#nome}
    set nome(novoNome){this.#nome= novoNome;}
    get dataNasc(){return this.#dataNasc}
    set dataNasc(novaDataNasc){this.#dataNasc= novaDataNasc;}
    get funcao(){return this.#funcao}
    set funcao(novaFuncao){this.#funcao= novaFuncao;}

    calculaIdade(){
        let hoje = new Date();
        return hoje - this.#dataNasc       
    }

}

