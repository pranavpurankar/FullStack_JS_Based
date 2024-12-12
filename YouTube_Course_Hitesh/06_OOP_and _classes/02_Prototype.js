// Prototype

/* Problem statement

let myName = "pranav      ";

console.log(myName.length);

So the goal of this thing is building a method that will returns the exact length of the
String myName.trueLength -> 6 instead of 12

same can be achieved with myName.trim().length, but that is not we want. Don't talk like
a low IQ, here we're learning about the backed in functionality, that will be applied to
the every string. Can we do this? Now we need to understand long story
*/

let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman:"sling",
    getSipderPower: function (){
        console.log(`Spidy power is ${this.spiderman}`);   
    }
}


Object.prototype.pranav = function(){
    console.log("Pranav is present in all objects");
}

Array.prototype.heyPranav = function(){
    console.log(`pranav sayes hello`);
}

// heroPower.pranav();
myHeroes.pranav();
myHeroes.heyPranav();
// heroPower.heyPranav();


// Inheritance

const User = {
    name:"chai",
    email:"chai@example.com"
}

const Teacher = {
    makeVideo:true
}

const TeachingSupport = {
    isAvailable:false
}

const TASupport = {
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User;

// Modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

// Coming back to the our goal

let anotherUsername = "chaiAurCode   "

String.prototype.trueLength = function (){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);   
}

anotherUsername.trueLength();

"pranav".trueLength();
"iceTea".trueLength();