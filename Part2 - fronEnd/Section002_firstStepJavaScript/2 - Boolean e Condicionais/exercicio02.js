

var peso = 80;
var altura = 1.95;


const imc = ( peso / (altura*altura) ).toFixed(2);
console.log(imc);

if(imc < 18.5){
    console.log(`IMC de ${imc} caracteriza abaixo do peso`);
} else if (imc >= 18.5 && imc < 25){
    console.log(`IMC de ${imc} caracteriza Peso normal`);
} else if (imc >= 25 && imc < 30){
    console.log(`IMC de ${imc} caracteriza Acima do peso`);
} else if (imc >= 30 && imc < 40){
    console.log(`IMC de ${imc} caracteriza Obesidade`);
} else{
console.log(`IMC de ${imc} caracteriza Obesidade Grave`)}
;