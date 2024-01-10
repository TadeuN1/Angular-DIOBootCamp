

 const etanol1 = 3.99;
 const gasolina2 = 4.99;
 const kmPorEtanol1 = 12;
 const kmPorGasolina2 = 13;
 const viagem = 100;
 var combu = 2;

 const litrosEtanol = viagem / kmPorEtanol1;
 const valorEtanol = litrosEtanol * etanol1;
 const litrosGaso = viagem / kmPorGasolina2;
 const valorGaso = litrosGaso * gasolina2;


    if(combu === 1){
        console.log(`Valor gasto em etanol R$${valorEtanol.toFixed(2)}`);
    } else if(combu === 2) {
        console.log(`Valor gasto em gasolina R$${valorGaso.toFixed(2)}`);
    }  else {
        console.log('Nenhum combustível selecionado');
    }

 