class MensagemView extends ViewBase {

    constructor(elemento) {
        super(elemento);
    }

    template(modelo) {
        if (modelo.texto != '') {
            return `<p class="alert alert-info">${modelo.texto}</p>`;
        } else {
            return `<p> </p>`
        }
    }

}