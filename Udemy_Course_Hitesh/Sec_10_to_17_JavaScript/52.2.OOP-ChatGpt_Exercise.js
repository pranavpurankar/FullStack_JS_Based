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
    #_balance=0;
    constructor(name,amount){
        this.name = name;
        this.#_balance += amount;
    }

    getBalance(){
        return `${this.name} Your Balance: ${this.#_balance}`;
    }

    setBalance(amount){
        if (amount<0){
            return "Balance can't be negative";
        }
        this.#_balance += amount;
        return this.#_balance;
    }

    deposit(amount){
        this.setBalance(amount);
    }

    withdraw(amount){
        if(amount < 0){
            throw new Error('Enter positive amount');
        }
        this.#_balance -= amount;
        return this.#_balance;
    }

}

// const bankOne = new BankAccount("pranav",500);
// console.log(bankOne.getBalance());
// bankOne.deposit(5000);
// console.log(bankOne.getBalance())
// bankOne.withdraw(700);
// console.log(bankOne.getBalance());


/* 
6. Write a "Shape" class with a default area() method. Subclass it into
"Circle" and "Rectangle", overriding area().
*/

class Area{
    constructor(value){
        this.value = value;
    }
    totalArea(){
        return 'Your total area is: ';
    }
}

class Circle extends Area{
    totalArea(radius){
        circleArea = Math.PI * (radius**2);
        return circleArea;
    }
}

class Rectangle extends Area{
    totalArea(length,breadth){
        let rectArea = length * breadth;
        return rectArea;
    }
}


/* 
7. Create a "Library" class to manage books. Add methods to addBook,
issueBook, and returnBook
*/

class Library{
    constructor(bookName, author, year){
        this.bookName = bookName;
        this.author = author;
        this.year = year;
    }

    addBook(){

    }
}
