     
     class pessoa {
        nome;
        peso;
        altura;

        constructor(nome, peso, altura){
            this.nome = nome;
            this.peso = peso;
            this.altura = altura;

        }

        calculoIMC(){
         return (this.peso / (this.altura * this.altura)).toFixed(2)
        }

        classificarIMC(){
            const imc = this.calculoIMC();
            if(imc < 18.5){
                return(`IMC de ${imc} caracteriza abaixo do peso`);
            } else if (imc >= 18.5 && imc < 25){
                return(`IMC de ${imc} caracteriza Peso normal`);
            } else if (imc >= 25 && imc < 30){
                return(`IMC de ${imc} caracteriza Acima do peso`);
            } else if (imc >= 30 && imc < 40){
                return(`IMC de ${imc} caracteriza Obesidade`);
            } else{
                return(`IMC de ${imc} caracteriza Obesidade Grave`)}
        }

     }

     const Jose = new pessoa('JOSE', 70, 1.75);

        console.log(Jose.calculoIMC())
        console.log(Jose.classificarIMC())

