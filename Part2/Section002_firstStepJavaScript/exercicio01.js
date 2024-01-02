

var nota01 = 8;
var nota02 = 8;
var nota03 = 10;

const media = ((nota01+nota02+nota03)/3).toFixed(2)

if(media < 5){
    console.log(`Aluno Reprovado com média de ${media}`);
} else if(media >= 5 && media <= 7){
    console.log(`Aluno irá para reprovação com média de ${media}`);
} else {
    console.log(`Aluno aprovado com média de ${media}`)
}