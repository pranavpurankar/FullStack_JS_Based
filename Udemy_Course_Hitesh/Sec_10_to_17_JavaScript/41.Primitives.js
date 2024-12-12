// Types Primitives and Non-Primitives
// Primitives: String, Number, Boolean, Null, Undefined, Symbol
// Non-Primitives: Objects, Array, Functions, Date etc

//Primitives Number
let balance = 120;
let anotherBalance = new Number(120);

// console.log(anotherBalance);
// console.log(balance.valueOf());

// console.log(typeof balance);
// console.log(typeof anotherBalance);

// Boolean

let isActive = true;
let isReallyActive = new Boolean(true) // Not recommended

// Null and Undefined
// Undefined :- You defined a variable but not assigned a value to it.
let firstname;
console.log(firstname);

// Null means null nothing in it No number, string, bool etc.
let secondName = null;
console.log(secondName);

let lastName = undefined;
console.log(lastName);

console.log("\n\n")

// String

let myString = "Hello";
let myStringOne = 'Hola';
let username = 'pranav';

// Before backticks, but there is problem with this look at the output
// You have to format it, using some techniques like adding little space
// inside the quote marks. That is not a feasible way to do this
let oldGreet = myString + 'pranav'
console.log(oldGreet);

// String interpolation
let greetMessage = `Hello ${username} !`;
let demoOne = `Value is ${2*2}`;
console.log(greetMessage);
console.log(demoOne);

console.log("\n\n");

// Symbols
// It gurantees the uniqueness on the page

let sm1 = Symbol("pranav");
let sm2 = Symbol("pranav");

console.log(sm1);
console.log(sm2);
console.log(sm1 == sm2);
