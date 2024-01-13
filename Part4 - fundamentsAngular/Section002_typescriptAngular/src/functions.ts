function addNumber(x: number, y: number): number{
    return x + y;
}

function addToHello(name: string){
    return `Hello ${name}`
}

function CallToPhone(phone: number | string){
    return phone;
}

async function getDatabase(id: number): Promise<string> {
    return "Tadeu"
}

let soma = addNumber(4, 7);

console.log(CallToPhone("31313123131"));