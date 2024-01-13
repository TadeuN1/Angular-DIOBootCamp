
    type robot = {
        id: number | string;
        name: string;
    }

    interface robot2 {
       readonly id: number | string;
        name: string;
        sayHello(): string;
    }

    const bot: robot2= {
        id: 1,
        name: "Mega-Man",
        sayHello: function (): string {
            throw new Error("Function not implemented.");
        }
    }

    console.log(bot);

    class Pessoa implements robot2{
        id: string | number;
        name: string;

        constructor(id: string | number, name: string){
            this.id = id;
            this.name = name;

        }
        sayHello(): string {
           return `Hello i'm ${this.name} and my id is ${this.id}`;
        }
        
    }

    const p = new Pessoa(1, "GutsMan");
    console.log(p.sayHello());