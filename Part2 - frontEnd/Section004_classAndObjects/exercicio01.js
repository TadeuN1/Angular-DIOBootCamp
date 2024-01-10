 class veiculo {
    marca;
    cor;
    kmL;
    distancia;

    constructor(marca, cor, kmL){
        this.marca = marca;
        this.cor = cor;
        this.kmL = kmL;
    }

    gasto(distancia, precoCombustivel){
        return distancia * this.kmL * precoCombustivel
    }
 }

 const fox = new veiculo('VW', 'Prata', 1/12);

 console.log(fox.gasto(70, 5).toFixed(2));
