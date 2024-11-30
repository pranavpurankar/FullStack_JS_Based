/* 
--- What are call, apply, and bind in JavaScript

call, apply, and bind are methods available on every JavaScript function
They allow you to control the value of "this" inside a function and 
optionally pass arguments. These methods are especially useful when
working with objects and borrowing methods or for functions that depend
on "this" for their execution.

--- Why were they introduced?

JavaScript functions are "first-class objects" meaning they can be
assigned to variables, passed as arguments, or stored in objects.
However, the value of "this" inside a function depends on how the
function is called, not where it's defined. This can sometimes result
in unexpected behavior.

Example Problem without call or apply:
*/

const obj = {
    name: "Alice",
    greet: function (){
        return `Hello, ${this.name}`;
    },
};

const anotherObj = {name: "Bob"};

// Borrowing the method dosen't work as expected without controlling
// 'this'
const borrowedGreet = obj.greet;
console.log(borrowedGreet());  //Output: Hello, undefined.

/* 
Here, "borrowedGreet()" runs in the global context where this does not
refer to obj. "call", "apply", "bind" fix this by letting you explicitly
set "this".

How each works:
1. call: Invoke a fuunction and set "this"
The call method calls a function immediately with specified "this" value
and arguments passed individually.

Syntax:
    func.call(thisArg, arg1, arg2, ...);

Example:
*/

function greet(greeting, punctuation){
    return `${greeting}, ${this.name}${punctuation}`;
}

const person = {name: "Alice"};
console.log(greet.call(person, "Hello", "!")); // Output: Hello, Alice

/* 
thisArg: The object you want "this" to refer to.
arg1, arg2, ... : Arguments passed individually
*/