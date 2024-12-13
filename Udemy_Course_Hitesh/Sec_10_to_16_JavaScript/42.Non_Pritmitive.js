// Non-Pritmitve data types

// Objects:

const username = {
    firstname:'pranav',
    isLoggedin:true,
    'last name':'purankar',
};

// Alike variable space alloted in the memory for the varibale
// when objects are declared with const they occupy large chunk of 
// memory and that chunk is const but inside object there are primi-
// -tives they can be altered that means can be changed. So keep in 
// mind

username.firstname = "Hitesh";
username.lastname = "Choudhary";

// Memory references are the same you can change the values, and you
// you can change them out

/*
console.log(username.firstname);
console.log(username);
console.log(typeof username);

// Another way to access this proerties, the dot notation is common

console.log(username['last name']);

*/

let today = new Date();
// console.log(today.getDate());

// Array

let heroes = ['a','b','c','true'];

let anotherUser = ["pranav", true ];

// console.log(anotherUser[0]);
// Implicit conversion
console.log(1+'1');

let isValue = true;
console.log(Number(isValue)+1);
console.log(Number(true));
console.log(Number(false));

let isNumber = "2abc";
console.log(typeof Number(isNumber));
console.log(Number(null));