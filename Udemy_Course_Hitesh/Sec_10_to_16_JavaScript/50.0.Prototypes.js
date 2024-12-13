// Masterclass on Prototypes
/* 

# Topic: Prototype Based and Class-Object based are 2 different paradigm.

Intially JavaScript was a purely prototype based programming lang. But
later on people coming from this OOP/Class-Object based paradign core
js team provided some syntatic sugar and provided clas, object, constru-
ctor.

Why syntatic sugar?

Because rewriting whole javascript in the class-object based is night-
mare. So they did, you're gonna feel like going through OOP route but
ultimately by using class, object, constructor you'll land on
Prototype based via class-Object based.

Conclusion: Javascript is prototype, was prototype and probably gonna
remain prototype.

Ques: Is JavaScript truly Class-Obejct based? (Interview)
It supports everything that has to support, but behind the scene which
almost all we never see is actually a prototype based.

We'll 1st learn Prototype and then Class-Object(OOPs)
*/

// Prototype Based
/* 
Def by Hitesh:
Prototype means extra properties and functionalities in any given data
type.

Def by MDN:
Prototypes are the mechanism by which JavaScript objects inherit featues
from one another.
*/

let computer = {cpu:12};
let lenovo = {screen:"HD"};
let tomHardware = {};

// If wanted to see prototype for any object "dunder proto dunder"
// is the most common/basic way. There are other ways also.
// console.log(`computer`, computer.__proto__);

// What's the use of this?
// Hitesh modified above exampl but I will create a new one

/* 
Scenario: Here is we are building a computer and it has 100s properties
and it is common between all computers. So instead of copy-pasting each
property in the every computer manufacture. Below is the way and use of
__proto__. This will linked up to computerNew and have access to all the
properties defined in computerNew.
*/

let computerNew = {cpu:12};
let lenevoPC = {
    screen:"HD",
    __proto__: computer
};
let tomHardwareNew = {};

// console.log(`Lenovo: `, lenevoPC.__proto__);

// Most common example cars, planes

let genericCar = {tyres:4}

let tesla = {
    driver: "AI",
}

// Another way of accesing properties instead of dunder proto
Object.setPrototypeOf(tesla, genericCar);

// console.log(`tesla `, tesla.tyres);
// Not getting suggesting there is better way of accessing properties

console.log(`tesla `, Object.getPrototypeOf(tesla));
// Tesla always has access to it's own prototype but if injected new
// you can access it by using getPrototypeOf. This way better that
// dunder


// Example: hasOwnProperty()
/* 
The hasOwnProperty() method of Object instances returns a boolean 
indicating whether this object has the specified property as its own 
property (as opposed to inheriting it).
*/

const object1 = {}
object1.property1 = 42;

// Expected output: true
console.log(object1.hasOwnProperty('property1'));

// Expected output: false
console.log(object1.hasOwnProperty('toString'));

// Expected output: false
console.log(object1.hasOwnProperty('hasOwnProperty'));
