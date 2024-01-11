    let ligado:boolean = false;
    let nome:String = "Tadeu";
    let idade: number = 26;
    let altura: number = 1.9;

    let nulo: null = null;
    let indefinido: undefined = undefined;

    function retornarVazio(): void{
    }

    let retornoView:any = false;

    let produto:object = {
        name:"Tadeu",
        cidade: "sp",
        idade: 30,
    }

    type ProdutoLoja = {
        nome: string;
        preco: number;
        unidades: number;
    }

    let meuProduto: ProdutoLoja = {
        nome: "Tênis",
        preco: 89.99,
        unidades: 5,
    }

    let dados: string[] = ["Lua", "Messi", "Hopuda"];
    let dados2: Array<string> = ["Naira", "Tadeu"];

    let infos: (string | number)[] = ["Tadeu", 26];

    let boleto: [string, number, number] = ['água conta', 100, 352258];

    let aniversario:Date = new Date("2022-12-01 05:00");

    console.log(aniversario.toString());