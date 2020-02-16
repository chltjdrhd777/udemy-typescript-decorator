"use strict";
//Decorator = In this novice step, the only thing I can understand is that the decorator is a function which allows me to utilize the constructor which is in the target class.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Deco(constructor) {
    //I can set parameter, of course, it is a constructor of class Person. and Adding ":Function" type is a symbol of decorator.
    console.log("adorning something with Deco");
    console.log(constructor);
} // First notable point : Decoration is realized before the target class is instantiated. It menas, even though I positioned this decorator behind the class Person in temrs of this pannel, decorator always execute first and even though I do not instantiate the class, the decorator executes.
//Second notable point : The result of console.log(constructor) is
/* class Person {
  constructor() {
    this.name = "Anderson";
    console.log("Does it Work");
  }
} */
let Person = class Person {
    constructor() {
        this.name = "Anderson";
        console.log("Does it work?");
    }
};
Person = __decorate([
    Deco //Second symbol of constructor. By using "@decorator name" means I would connect this class to the target decorator.
], Person);
const a = new Person();
console.log(a); // As a result, it shows {name: "Anderson"} and execute console.log("Does it work?")
///////////////////////////////////////////////////////////
//Decorator Factory
function factory(passed, data) {
    return function (constructor) {
        console.log(`Toss:${passed}, Serial number:${data}`); // result : string is passed
        console.log(constructor);
    };
}
let Persons = class Persons {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.names = "Everything";
    }
    function1(a) {
        return a + 1;
    }
};
Persons = __decorate([
    factory("string is passed", 2)
], Persons);
//# sourceMappingURL=project13.js.map