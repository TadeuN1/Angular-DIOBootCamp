
/* 
const aluno = ['A', 'B', 'C'];


for(let i = 0; i < aluno.length; i++ ){
    console.log(`Indexaç ão do aluno ${aluno[i]}`)
} */

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

let soma = 0;


for(let i = 0; i < notas.length; i++){
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;


console.log(media.toFixed(2));