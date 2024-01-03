//Legenda de Pagamento
// 1 - Débito, 10% de Desconto;
// 2 - PIX, 15% de Desconto;
// 3 - Par2x, sem alteração;
// 4 - ParAcima2x, acréscimo de 10%;

function calculoDesconto(valor, desconto){
    return (valor - (valor*(desconto/100)));
}
function calculoAcrescimo(valor, acrescimo){
    return (valor + (valor*(acrescimo/100)));
}

const precoEtiqueta = 100;
const formPagamento = 2;

if(formPagamento === 1){
    console.log('O preço será de' + ' R$' +calculoDesconto(precoEtiqueta, 10))
} else  if(formPagamento === 2){
    console.log('O preço será de' + ' R$' +calculoDesconto(precoEtiqueta, 15))
} else if(formPagamento === 3){
    console.log('O preço será de' + ' R$' +precoEtiqueta)
} else {
    console.log('O preço será de' + ' R$' + calculoAcrescimo(precoEtiqueta, 10))
};

