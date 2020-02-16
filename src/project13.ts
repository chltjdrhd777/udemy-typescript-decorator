//Decorator = In this novice step, the only thing I can understand is that the decorator is a function which allows me to utilize the constructor which is in the target class.

function Deco(constructor: Function) {
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

@Deco //Second symbol of constructor. By using "@decorator name" means I would connect this class to the target decorator.
class Person {
  name = "Anderson";

  constructor() {
    console.log("Does it work?");
  }
}
const a = new Person();
console.log(a); // As a result, it shows {name: "Anderson"} and execute console.log("Does it work?")
///////////////////////////////////////////////////////////
//Decorator Factory

function factory(passed: string, data: number) {
  return function(constructor: Function) {
    console.log(`Toss:${passed}, Serial number:${data}`); // result : string is passed
    console.log(constructor);
  };
}

@factory("string is passed", 2)
class Persons {
  names = "Everything";
  function1(a: string) {
    return a + 1;
  }
  constructor(public name: any, public age: any) {}
}
