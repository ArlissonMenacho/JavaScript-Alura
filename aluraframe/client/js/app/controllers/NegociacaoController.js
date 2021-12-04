class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event){
        event.preventDefault();
        console.log(typeof(this._inputData.value));
        console.log(this._inputData.value);

        let data = new Date(...this._inputData.value
            .split('-')
            .map((item,indice) =>{
                if(indice==1){
                    return item - 1;
                }
                return item;
            }));

        console.log(data);
        console.log(typeof(data));

      let negociacao = new Negociacao(
          data,
          this._inputQuantidade.value,
          this._inputValor.value
      );
      console.log(negociacao);
    }
}