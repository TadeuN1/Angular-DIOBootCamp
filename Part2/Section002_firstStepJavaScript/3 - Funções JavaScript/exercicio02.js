    function nomeCompleto(nome, sobrenome){
        return `Meu nome é ${nome} ${sobrenome}`;
    }
    const cadastro = nomeCompleto('Tadeu', 'Neres');
    console.log(cadastro);


    function verificarIdade(idade){
        if(idade < 18){
            return 'Menor de idade'
        } else {
            return 'Maior de idade'
        }
    }
    const idade = verificarIdade(18);

    console.log(idade);