// Everything in JS is an Object, even though classes under the hood
// are object. The core implementation of the Object is also an Object

// Let's start a class by declaring a literal, an Object literal

let car = {
    make:"Toyota",
    model:"Camry",
    year:2020,
    start:function(){
        return `${this.make} car got started in ${this.year}`
    },
}

// console.log(car.start());

/*
- It seems that we can't create a more copies(instances) of the car
- By using the constructor function we can do that.
- First letter of the constructor function is start with capital letter
- It is not the rule but falls under good practices.
*/

function Person(name, age){
    this.name = name;
    this.age = age;
}

// The advantage of this Constructor function is we can create many
// copies of the Person, i.e. instances.

let john = new Person("John Doe", 20);
// console.log(john);
// console.log(john.name);

// Topic: Prototype and Prototypal Chain
/* 
Google Definition:

A "prototype" refers to an object that acts as a blueprint for other
objects, allowing them to inherit its properties and methods, while a
"prototypal chain" is the linked sequence of prototypes where an object
can search for properties & methods if they are not found on the Object
itself, essentially creating a hierarchy of inheritance between objects;
every object in JavaScript has a prototype, which can itself have a 
prototype, forming the chain.
*/

function Animal(type){
    this.type = type;
}

// I can access the whole prototypal chain and can Inject my own methods
// I've added my own method and this is an ex. of prototypal chain
Animal.prototype.speak = function(){
    return `${this.type} makes a sound`
}

Array.prototype.pranav = function(){
    return `Custom method ${this}`
}

let myArray = [1,2,3,4];
// console.log(myArray.pranav());

let myNewArray = [1,2,3,4,5,6];
// console.log(myNewArray.pranav());

// Topic: Class and Inheritance

class Vehicle{
    constructor(make, model){
        this.make = make;
        this.model = model;
    }

    start(){
        return `${this.model} is a car from ${this.make}`
    }
}

/* 
Inheritance :- I've created a class and I wanted to the functionality
of that class. That's the inheritance (dad's property -> goes 2 son)

extends :- Is a keyword that will extend the functionality of the 
current class. In other words we can inherit the properties from the 
any class by using this
*/

// If you want constructor you can've it or don't want to have it
// you can't have it. If you didn't mentioned constructor it borrow
// from the Parent.

class Car extends Vehicle{
    drive(){
        return `${this.make}: This is an inheritance example.`;
    }
}

let myCar = new Car("Toyota", "Corolla");
// console.log(myCar.start());
// console.log(myCar.drive());

let vehOne = new Vehicle("Toyota", "Corolla");
// console.log(vehOne.make);



// Topic: Encapsulation
/* 
Encapsulation restricts the direct access to the data object.
*/

class BankAccount {
    #balance = 0;
    deposit(amount){
        this.#balance += amount
        return this.#balance;
    }
    getBalance(){
        return `$ ${this.#balance}`;
    }
}

let account = new BankAccount();
// console.log(account.getBalance());

// Topic: Abstraction
/* 
Hiding the inner mechanism of anything, Ex. driving a car we don't need
to know about how engine works; we care about driving.
*/

class CoffeMachine{
    start(){
        // Call DB
        // filter value
        return `Starting the machine...`;
    }
    brewCofee(){
        // Complex calculation
        return `Brewing coffee`;
    }
    pressStartButton(){
        let messageone = this.start();
        let messagetwo = this.brewCofee();
        return `${messageone} + ${messagetwo}`
    }
}

let myMachine = new CoffeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCofee());
// console.log(myMachine.pressStartButton());

// Topic: Polymorphism
/* 
The ability of something to have or to be displayed in more than one
form. 
*/

class Bird{
    fly(){
        return `Flying....`
    }
}

class Penguin extends Bird{
    fly(){
        return `Penguins can't fly`;
    }
}

// class Sparrow extends Bird
let bird = new Bird();
let penguin = new Penguin();
// console.log(bird.fly());
// console.log(penguin.fly());


// Topic: Static method

class Calculator{
    static add(a,b){
        return a+b;
    }
}

// let miniCalc = new Calculator();
// console.log(miniCalc.add(2,3));

// console.log(Calculator.add(2,3));


// Topic: Getters and Setters
/* 
In javascript _ [underscore] doesn't have any meaning. It is just we 
take it as normal variable name.
*/

class Employee{
    #salary;
    constructor(name, salary){
        if(salary < 0){
            throw new Error("Salary can't be in negative");
        }
        this.name = name;
        this.#salary = salary;
    }

    get salary(){
        return `You are not allowed to see salary`;
    }

    set salary(value){
        if(value < 0){
            console.error("Invalid Salary")
        }else{
            this._salary = value;
        }
    }
}

let emp = new Employee("Alice", -50000);
console.log(emp._salary);
emp.salary = -60000;


