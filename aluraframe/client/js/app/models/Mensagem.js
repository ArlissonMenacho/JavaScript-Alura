class Mensagem {
    constructor(texto = '') {
        this._texto = texto;
    }

    get texto() {
        return this._texto;
    }

    set texto(texto) {
        this._texto = texto;
    }

    MontarTextoPadrao(data, valor, quantidade) {
        return `A data informada é : ${data}, O valor Informador é : ${valor} e a quantidade é : ${quantidade}`
    }
}

let mensagem = new Mensagem('Arlisson Menacho');
console.log(mensagem.texto);