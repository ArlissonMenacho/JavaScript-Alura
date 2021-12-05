class DateHelper {

    constructor() {
        throw new Error("A classe DateHelper não deve ser instanciada");
    }

   static textoParaData(texto) {
        return new Date(...texto.split('-')
            .map((item, indice) => {
                if (indice == 1) {
                    return item - 1;
                }
                return item;
            }));
    }

    static dataParaTexto(data) {
        return data.getDate()
            + '/' + (1 + data.getMonth())
            + '/' + data.getFullYear();
    }
}