/*
This file contains the learning from the ChatGpt. I learned from
hitesh. Used chatgpt to go in-depth & understand topic so well.

# Topic: What is Prototype?

It is a mechanism that allows object to share properties and methods.
It is an essential feature of JavaScript object-oriented programming.
Everyth JS object has a hidden internal property called [[prototype]]
that links it to another object, called its prototype.

Key Points Prototypes:
1) Inheritance: Prototypes enable one object to inherit properties and
methods from another.

2) Prototype Chain: If you try to access a property or method on an
Object, JavaScript looks for it on the object itself. If it dosent find
it, it searhes up the prototype chain until it reaches null (the end
of the chain)

3) Default Prototype: When you create an object or function, JavaScript
automatically assigns a prototype to it. 
*/

// Step 1: Create a Constructor Function
// A constructor function is a blueprint for creating objects.

function Person(name, age){
    this.name = name;
    this.age = age;
}

// Create an object
const pranav = new Person("Pranav", 25);
console.log(pranav);