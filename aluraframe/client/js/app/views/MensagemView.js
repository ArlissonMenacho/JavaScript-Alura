class MensagemView {
    constructor(elemento) {
        this._elemento = elemento;
    }
    _template(modelo) {
        if (modelo.texto != '') {
            return `<p class="alert alert-info">${modelo.texto}</p>`;
        } else {
          return  `<p> </p>`
        }
    }
    update(modelo) {
        this._elemento.innerHTML = this._template(modelo);
    }
}