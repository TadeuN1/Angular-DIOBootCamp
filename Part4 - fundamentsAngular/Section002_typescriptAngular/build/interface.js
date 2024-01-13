"use strict";
const bot = {
    id: 1,
    name: "Mega-Man",
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
console.log(bot);
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Hello i'm ${this.name} and my id is ${this.id}`;
    }
}
const p = new Pessoa(1, "GutsMan");
console.log(p.sayHello());
