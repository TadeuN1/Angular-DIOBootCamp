

 const preco = 100;
 var pagamento = '';

 if (pagamento === 'Debito'){
    console.log(preco - preco*0.1);
 } else if(pagamento === 'Dinheiro' || pagamento === 'PIX'){
    console.log(preco - preco*0.15)
 } else if(pagamento === '2x'){
    console.log(preco);
 } else{
    console.log(preco + preco*0.10);
 }