"use strict";
const Devs = [];
const Developers = 1;
let type = "mobile";

class Director {
    constructor() {
        this.renderProject = Math.floor(Math.random() * 5);
    }

    method() {
        for (let i = Developers; i < this.renderProject; i++) {
            Devs.push(new Developer(type));
        }
    }
}

class Developer {
    constructor() {
        this.type = type;
    }
}

let managers = new Director();
managers.method();


console.log(Devs);