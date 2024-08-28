// Arrow functions and THIS keyword

/* 

This refers to the current context;

Ex:
const user = {
    username: "pranav",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username} Welcome to website`)
    }
}
{this => considering above example for me as "this" it is my current
context}
*/

const user = {
    username: "pranav",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} welcome to website`);
        console.log(this);
        
    }
};

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

console.log(this);

// function chai (){
//     let username = "pranav"
//     console.log(this.username);
// }

// chai();

// const chai = function () {
//     let username = "pranav";
//     console.log(this.username);
// }

// const chai = () => {
//     let username = "pranav";
//     console.log(this);
// }

// chai();

const log = console.log;

const addTwo = (num1, num2) => {
    return num1+num2;
}

log(addTwo(12,6));

// Example of implicit return
// Implicit meaning main maan leta hu apako batane ki zarurat nahi hai

const implicitReturn = (name1, name2) => name1 + name2;
log(implicitReturn('pranav','purankar'));

const objectReturning = (name, value) => ({username:"pranav"});

log(objectReturning('shreyash', 'purankar'));