class Character {
    name: string;
    strength: number;
    skill: number;

    constructor(name:string, strength:number, skill: number){
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }
    
     public attack():void{
        console.log(`Attack with ${this.strength} points.`)
    }
}

class Magician extends Character {
    magicPoints: number;
    constructor(name:string, strength:number, skill: number, magicPoints: number){
        super(name, strength, skill);
        this.magicPoints = magicPoints;
    }
}

const p1 = new Character("Zexal", 10, 98);
const p2 = new Magician("Gandalf", 5, 100, 135);
p2.attack()