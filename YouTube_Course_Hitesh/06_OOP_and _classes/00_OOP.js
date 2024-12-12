// 1. Object Literal

// Object literal:- simply an oject that contains this sort of things,
// or simple base object syntax. like const user = { }
// this -> defines the current context. 

const user = {
    username: "pranav",
    loginCount: 8,
    signedIn:true,
    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`${this.username}`);
        console.log(this);

    }
}

// console.log(user.username);
// console.log(user.getUserDetails());


// 2. Constructor function
/*
Everytime it gives new instance, otherwise it will overrides the
values, like we've seen in our example, without new. So basically
new is our constructor.

Step_1: new keyword creates an empty object, this is known as instance.
Step_2: new keywords invokes the constructor function and inside this
arguments are packed and it gives it to us
Step_3: written arguments in the step_3 got injected into the "this"
keyword.
Step_4: we got this inside the function just like we've got this below

*/

function User (username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function (){
        console.log(`Welcome ${this.username}`);        
    }

}

const userOne = new User("pranav", 21, true);
const userTwo = new User("Chai Aur code", 12, true);
console.log(userOne.constructor);

// console.log(userTwo);
