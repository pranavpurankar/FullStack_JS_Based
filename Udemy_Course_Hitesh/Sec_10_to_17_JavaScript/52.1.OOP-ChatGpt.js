/* 
I learned this topic from Hitesh OOP-master but for indepth clar-
ification I have used the chatGpt, sort of learnig & revision.
-----------------------------------------------------------------

In-Depth Notes on Classes & OOP in JavaScript

== Introduction to Object-Oriented Programming (OOP) ==

OOP is a programming paradigm that organizes code into reusable
"blueprints" (called classes). It emphasizes:
    1) Encapsulation: Bundling data and methods into a single unit
    2) Inheritance: Allowing classes to inherit from other classes
    3) Abstraction: Hiding complex implementation details.
    4) Polymorphism: Allowing methods to take on different forms
                     depending on context.
------------------------------------------------------------------
JavaScript Classes:

In JavaScript, classes are syntatic sugar over prototypes. They
simplify creating and managing objects but operate fundamentally
through the prototype chain.

Key Concepts of Classes:

1. Class Declaration:
*/
    class Example{}

/*
2. Constructor: A special method to initialize properties during
                object creation.
*/

class Car{
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
}


/*
3. Methods:
    • Instance Methods: Operate on individual objects created from
                        a class
*/

class CarNew{
    start(){
        return "Car is starting..."
    }
}

let car = new CarNew();
console.log(car.start());

/* 
    • Static Methods: Belong to the class itself, not instances.
                      Accessed via the class.

*/

class Calculator{
    static add(a,b){
        return a + b;
    }
}

console.log(Calculator.add(5,3));

// Try creating object and passing method

const cal = new Calculator();
// console.log(cal.add(2,2)); // This will throw an error

/* 
4. Inheritance:
    • Achieved using "extends" keyword.
    • Use super() to call the parent constructor or method
*/

class Vehicle{
    constructor(make){
        this.make = make;
    }

    start(){
        return `${this.make} vehicle started.`;
    }
}

class Truck extends Vehicle{
    constructor(make, model){
        super(make);    // call parent constructor
        this.model = model;
    }

    drive(){
        return `${this.make} ${this.model} is driving.`;
    }
}

let truck = new Truck("Tata", "MiniTruck");
console.log(truck.drive());

/* 
Behind-the-scenes Mechanism

When you create an object using class:
    1. A function is created under the hood, ehich serves as the 
       class.
    2. The "prototype" of that function is linked to the class's
       methods.
    3. When methods are called on an instance, JavaScript searches
       through the prototype chain for the method.
*/

//--------------------------------------------------------------


/* 
Encapsulation:

Encapsulation restricts direct access to object properties. You 
achieve this in JavaScript using:
    1. Private Fields (denoted by #):
*/

class BankAccount{
    #balance = 0;   // Private field
    deposit(amount){
        this.#balance += amount;
    }

    getBalance(){
        return this.#balance;
    }
}

let account = new BankAccount();
account.deposit(500);
console.log('Account Balance;',account.getBalance());

/* 
    2. Getter and Setters:
        • Control property access and validation.
*/

class Employee{
    constructor(name, salary){
        this.name = name;
        if(salary < 0) throw new Error("Invalid salary");
        this._salary = salary; // Soon get & set introduce
    }

    get salary(){
        return "Salary is private.";
    }

    set salary(value){
        if(value < 0 ) throw new Error("Invalid salary");
        this._salary = value;
    }
}

let emp = new Employee("Pranav", 266936);
console.log(emp.salary);    // Salary is private
emp.salary = 369456;    // Update salary
// console.log(emp._salary);    // This is not completely private
//like #, it restricts the access and don't show value

/* 
Abstraction

Hides implementation details while exposing only essential
functionality. Example:
*/

class CoffeeMachine{
    #boilWater(){
        return "Boiling water...";
    }
    #brewCoffee(){
        return "Brewing coffee...";
    }
    startMachine(){
        return `${this.#boilWater()} ${this.#brewCoffee()}`;
    }
}

let machine = new CoffeeMachine();
console.log(machine.startMachine()); 
//Boiling water... Brewing coffee...



/* 
Polymorpshism

Polymorphism allows methods in a child class to override methods in 
a parent class.

Example:
*/

class Bird{
    fly(){
        return "Flying....";
    }
}

class Penguin extends Bird{
    fly(){
        return "Penguins can't fly.";
    }
}

let penguin = new Penguin();
console.log(penguin.fly());

/* 
Important Keywords

1. extends: Used for inheritance

2. super:
    • In a constructor: Calls the parent constructor.
    • In a method: Refers to the parent class's method.

3. static:
    Defines methods at the class level, not instance level.
*/