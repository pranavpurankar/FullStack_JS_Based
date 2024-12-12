
function multipleBy5(num){
    return num*5;
}

//.access -> methods
multipleBy5.power = 2;

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function (){
    this.score++;
}

createUser.prototype.printMe = function (){
    console.log(`price is ${this.score}`);
}

// js gives a feature like we never write like below to access the method
// myArray.prototype.map() -> js will interally do this we just have to say
// myArray.map() kind of syntatic sugar

/* new keyword entry below code will generate error something like Cannot read properties
of undefined (reading 'printMe')
why?

above methods are injected in the function, if you look inside it in the memory 100% property
ayi hai. Par apane jab ye function se object chai aur tea ke ander properties pass ki tab
apane bataya nahi ki merepas ye aditional properties ayi. This work has been done with the
"new" keyword.
 
const chai = createUser("chai", 25);
const tea = createUser("tea", 250);

Refer prototype.excalidraw to understand the functionality of the "new" keyword
For interviews hitesh shared text material highlighted with "hitesh notes"
*/

const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);

chai.printMe();
