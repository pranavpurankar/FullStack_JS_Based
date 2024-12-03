// Practise Question

// ---- Easy ----

/* 
1. Create a "Person" class with "name" and "age" properties. Add a
method to return the person's details.
*/

/* class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    detail(){
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

const firstPerson = new Person("Pranav", 29);
console.log(firstPerson.detail()); */


/* 
2. Add a static method to the "Person" Class that compares the ages
of two instances.
*/

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    detail(){
        return `Name: ${this.name} and Age: ${this.age}`;
    }
    static compareAge(person1, person2){
        if(person1.age > person2.age){
            return `Older: ${person1.name}`;
        }
        else if(person1.age < person2.age){
            return `Older ${person2.name}`;
        }
        else{
            return `Same Age: ${person1.name} & ${person2.name}`
        }
    }
}

let person1 = new Person("Pranav", 29);
let person2 = new Person("Shreyash", 22);

// Compare their age using the static method
// const comparisonResult = Person.compareAge(person1,person2);
// console.log(comparisonResult);


/* 
3. Implement a "Car" class with a private "mileage" field. Add a
method to increase the mileage.
*/

class Car{
    #mileage = 0;
    constructor(make, model){
        this.make = make;
        this.model = model;
    }

    // Method to increa mileage.
    increaseMileage(distance){
        if(distance < 0){
            throw new Error("Distance can't be negative");
        }
        this.#mileage += distance;
        return this.#mileage;
    }

    // Method to get the current mileage
    getMileage(){
        return `Current mileage is: ${this.#mileage} km`;
    }

}

let myCar = new Car();  // Creating an instance/Object
// console.log(myCar.getMileage());
// myCar.increaseMileage(50);
// console.log(myCar.getMileage());


/* 
4. Write a class "Animal" with a speak() method. Inherit it into
Dog and override the method.
*/

class Animal{
    speak(){
        return "They can't speak";
    }
}

class Dog extends Animal{
    speak(){
        return "Dog's can speak";
    }
}

let myDog = new Dog();

// --- Medium ---

/*  
5. Implement a "BankAccount" class with deposit, withdraw, and
getBalance methods. Ensure balance can't go negative.
*/

class BankAccount{
    constructor(amount){
        this.amount = amount;
    }
}