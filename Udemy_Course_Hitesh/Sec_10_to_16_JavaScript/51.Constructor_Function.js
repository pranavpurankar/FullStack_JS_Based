function Person(name, age){
    this.name = name;
    this.age = age;
}

function Car(make, model){
    this.make = make;
    this.model = model;
}

// Creating an object/instance from the constructor function
let myCar = new Car("Toyota", "Camry");
// console.log(myCar);

let myNewCar = new Car("Tata", "Safari");
// console.log(myNewCar);

function Tea(type){
    this.type = type;
    this.describe = function (){
        return `This is a cup of ${this.type}`
    };
}

let myTea = new Tea("Lemon tea");
// console.log(myTea.describe());

// Adding Prototype.

function Animal(species){
    this.species = species;
}

// Adding Property/Method. The function tell what the sound method does
Animal.prototype.sound = function(){
    return `${this.species} makes a sound`
}

let dog = new Animal("Dog");
// console.log(dog.sound());

let cat = new Animal("Cat");
// console.log(cat.sound());


function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new keyword");
    }
    this.name = name
}

let tea = new Drink("tea");
let coffee = Drink("coffee");