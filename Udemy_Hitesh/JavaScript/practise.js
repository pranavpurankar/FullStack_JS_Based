// Create a constructor function
// It is blueprint for creating Object

function Person(name, age){
    this.myName = name;
    this.myAge = age;
}

const Person1 = new Person("pranav", 29);

console.log(Person1);

// Add a method using prototype

Person.prototype.greet = function (){
    return `Hello, my name is ${this.myName}`;
}

console.log(Person1.greet());

//