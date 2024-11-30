/*
This file contains the learning from the ChatGpt. Used chatgpt to go 
in-depth & understood topic so well. I learned from hitesh. 

# Topic: What is Prototype?

It is a mechanism that allows object to share properties and methods.
It is an essential feature of JavaScript object-oriented programming.
Every JS object has a hidden internal property called [[prototype]]
that links it to another object, called its prototype.

Key Points Prototypes:
1) Inheritance: Prototypes enable one object to inherit properties &
methods from another.

2) Prototype Chain: If you try to access a property or method on an
Object, JavaScript looks for it on the object itself. If it dosen't 
find it, it searches up the prototype chain until it reaches null 
(the end of the chain)

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
// console.log(pranav);

// Explanation for why step1 func is constructor func, mentioned end.

/* 
Step 2: Add a method Using Prototype
You can add shared methods to the constructor's prototype. This saves
memory because all instances share the same method rather than 
duplicating it for every object.
*/

Person.prototype.greet = function () {
    return `Hello, my name is ${this.name}`;
}

console.log(pranav.greet());

/* 
Here's what happens:
    • JavaScript checks if pranav has a greet method. It doesn't.
    • Then it looks at Person.prototype (the prototype of pranav).
    • It finds "greet" and calls it.
*/

/* 
Step 3: The Prototype Chain
The pranav object's prototype is Person.prototype. If a method or 
property isn't found in pranav, JavaScript checks Person.prototype.
If it's not there, it continues to the next level, which is 
object.prototype
*/

console.log(pranav.toString());
// Output: [object Object]
// Here, `toString` is not in `pranav` or `Person.prototype`
// It's found in `Object.prototype`


// ------------------------------------------------------------------
/* Why step 1 function is constructor function?

A constructor function in JavaScript is a special type of function used
to create and initialize objects. It becomes a "constructor" not because
of a special keyword, but because of how it is called using the new
keyword. Let's break it down step by step from a first-principle:

1. What happens when you call a function with new?
When you call a function with new, JavaScript performs following steps
internally:

Step 1: Create an empty Object
A new empty object is created. This object will eventually become the
"this" context for the function.

Step 2: Link to prototype
The new objects [[Prototype]] is set to the prototype property of the
function being called.

Step 3: Bind this
The function is executed, and this inside the function refers to the new
object.

Step 4: Return the Object
If the function dosen't explicitly return an object, the new object is
returned automatically.

2. How does this make the function special?
Without this, a function behaves like any regular function:
*/

function greet(name){
    return `Hello, ${name}`
}

// But when you add this, it assigns properties to the newly created
// object when called with new:

function Human(name){
    this.myName = name;
}

const person1 = new Human("ThePranav");
// console.log(person1);

/* 
3. Why no "constructor" keyword?

JavaScript doens't need a special keyword to define a constructor function
because the "new" keyword changes the behaviour of a normal function:
    • without "new", the function is a regular function.
    • with "new", it acts as a constructor

4. What happens behind the scenes?
When you wrote like this:

const pranav = new Human("ThePranav")

Internally, JavaScript performs these steps:
    a). Create an empty object
        const pranv = {}

    b). Set [[prototype]]:
        pranav.__proto__ = Human.prototype;
    
    c). Execute the function with "this" bound to the new object:
        Human.call(pranav, "ThePranav");

    d). Return the object: If Human dosen't explicitly return an object,
        "ThePranav" is returned by default.

5. How can you verify This?
Let's check the prototype and how the function works:
*/

function Person1(name){
    this.name = name;
}

const pranav1 = new Person1("Shreyash");
console.log(pranav1.__proto__ === Person1.prototype)
console.log(Person1.prototype.constructor === Person1);

/* 
Key Takeaways:
1. Not the Function, But How You Use It: A function becomes a constructor
when called with "new"

2. Behind the scenes: "new" creates an object, binds this, and links the
prototype chain.

3. Prototype Linking: The new object inherits methods from 
Person1.prototype

So, a constructor function is just a normal function, but "new" changes
it's behaviour to initialize objects. This is how JavaScript implements
object-oriented programming without needing a special class mechanism!
*/



//-----------------------------------------------------------------------

/* 
Task: Prototype Chaining

Create a constructor function Animal that has a method speak() that return 
'Animal speaking'.

Then create another constructor Dog that inherits from Animal using 
prototypes.

The Dog constructor should add a method bark() that returns 'Woof!'. 
Demonstrate the prototype chain between Dog and Animal.
*/

// Step 1: Create the Animal constructor and Add speak method

// Animal is base constructor
function Animal() {
    this.type = "Animal";
}

// The speak method is added to Animal.prototype so all objects
// created by Animal can access items.

Animal.prototype.speak = function (){
    return "Animal speaking;"
}


// Step 2: Create the Dog constructor and Inherit from Animal

function Dog(name){
    this.name = name;
}

// Inherit from Animal by setting Dog's prototype to an instance
// of Animal
Dog.prototype = Object.create(Animal.prototype);

// Reset the constructor reference to Dog (after overriding it)
Dog.prototype.constructor = Dog;


// Step 3: Add the bark method to Dog
Dog.prototype.bark = function (){
    return "Woof!";
}

// Step 4: Demonstrate the prototype Chain
// Now, create an instance of Dog and show the prototype relationship

const myDog = new Dog("Buddy");

// Call methods from Dog and Animal
console.log(myDog.bark());  // Output: Woof!
console.log(myDog.speak()); // Output: Animal speaking

// Demonstrate prototype chain 
console.log(myDog instanceof Dog); //true
console.log(myDog instanceof Animal); //true
console.log(myDog.__proto__ === Dog.prototype); //true
console.log(Dog.prototype.__proto__ === Animal.prototype); //true

/* 
--- Explanation of Prototype Chain
1. Instance(myDog):
    • myDog.bark() works because bark is defined on Dog.prototype
    • myDog.speak() works because the prototype chain checks 
        Dog.prototype -> Animal.prototype

2. Prototype Links:
    • myDog.__proto__ points to Dog.prototype.
    • Dog.prototype.__proto__ points to Animal.prototype

3. Inheritance Hierarchy:
    • myDog inherits from Dog.prototype
    • Dog.prototype inherits from Animal.prototype


--- Visual Representation of Prototype Chain

myDog --> Dog.prototype --> Animal.prototype --> Object.prototype
--> null.
*/


// ------------------ Questions arise in my Brain ----------------
/* 
Why can't I add method in the constructor function?

function Animal(){
    this.speak = function (){
        return "Animal speaking";
    }
}

It is valid, but it has some differences and trade-offs compared
to using the prototype. Let's explore both aproaches:        

1. Adding methods in the constructor function (my method)

How it works:
When you define a method inside the constructor, like this.speak, 
the method becomes a unique copy for every object created by 
that constructor.
*/

function newAnimal(){
    this.speak = function (){
        return "Animal speaking";
    };
}

const animal1 = new newAnimal();
const animal2 = new newAnimal();

console.log(animal1.speak()); // Output: Animal speaking
console.log(animal1.speak === animal2.speak); 
//Output: False (Different copies of the method)

/* 
Advantages:
• Easy to understand, especially for begineers.
• The method can access private variables declared inside the
  constructor.

Disadvantages:
• Inefficient Memory Usage: Each instance gets its own copy of the
  "speak" method. If you create 1000 instances, you'll have 1000
  copies of the same function in memory.

• Less suitable for methods that don't rely on instance-specific
  data.
*/

/* 
2. Adding Methods to the Prototype (Preferred Approach)
How it works:
When you define a method on the prototype, all objects created by
the constructor share the same method.
*/

function preferredAnimal(){}
Animal.prototype.speak = function (){
    return 'Animal speaking';
};

const animal3 = new Animal();
const animal4 = new Animal();

console.log(animal3.speak()); //Output: Animal speaking
console.log(animal4.speak === animal3.speak); 
//Output: true (shared method);

/* 
Advantages:
• Memory Efficient: The method is stored only once on the prototype
no matter how many instances are created.

• Better for defining behaviour shared across all instance.

Disadvantages:
• Methods on the prototype can't directly access private variables
  in the constructor.

---------

Why Prototype Is Better for Adding Methods

JavaScript is designed around prototypes to share behaviors. Using the 
prototype is considered a best practice because it:

• Follows the Principle of Shared Behavior: 
    Prototypes enable efficient memory usage by reusing methods.

• Is Faster for Lookups: 
    JavaScript engines optimize prototype-based lookups better than 
    instance-specific methods. 

• Works Better with Inheritance: 
    Prototype chaining relies on shared behavior between objects.

When Should You Use this for Methods?
You should use this inside the constructor when:

The method relies on private variables in the constructor.
You need a unique copy of the method for each instance (very rare).

Example:

    function Counter() {
        let count = 0; // Private variable

        this.increment = function () {
            count++;
            return count;
        };
    }

const counter1 = new Counter();
console.log(counter1.increment()); // Output: 1
console.log(counter1.increment()); // Output: 2

Here, increment relies on the private count variable, so it must be inside 
the constructor.

Summary

• Use prototype for methods that don’t need access to private variables 
  and should be shared across instances.

• Use this.method inside the constructor when you need unique methods or 
  access to private variables.


-- What is the difference between prototye vs __proto__ ?

1. prototype:
    • Belongs to constructor functions (like Animal or Dog)
    • It is used to define methods or properties that will be shared across
      instances created by the constructor.
    
  Example:
    
    function Animal(){}
    Animal.prototype.speak = function (){
        return "Animal speaking";
    }


2. __proto__ :

    • Belongs to individual objects.
    • It points to the prototype object from which the object inherits.

  Example:
    const animal1 = new Animal();
    console.log(animal1.__proto__ === Animal.prototype); //true

-- Why Animal.__proto__.speak Does not work
    
    • __proto__ is for Objects, not for defining shared methods on a 
    constructor function.
    
    • Animal is itself a function (not a instance), and its __proto__ 
    points to Function.prototype because constructors are functions.

  Example:
    function Animal(){}
    console.log(Animal.__proto__ === Function.prototype); //true

    • So, Animal.__proto__.speak would try to define a method on 
      Function.prototype, which would affect all functions in your 
      program-not what we want.


--- Alternative Syntax to Animal.prototype.speak

Instead of directly using Animal.prototype.speak, you can assign the entire
prototype object at once. For example:

function Animal(){}

Animal.prototype = {
    speak: function (){
        return ""
    }
}

• This approach works the same way, but note that it replaces the existing
prototype object. So, you might need to reset the constructor:

    Animal.prototype.constructor = Animal;

    This ensures that Animal.prototype.constructor still points to Animal.


Key Takeways:

    1. Use Animal.prototype to define instance methods.
    2. Do not use Animal.__proto__ for defining methods it's not related
       to instance prototypes.
    3. If you want to set multiple methods at once, replace the entire
       prototype object (and reset the constructor)

Example of Both:

function Animal(){}

// Using prototype directly

Animal.prototype.speak = function(){
    return "Animal speaking";
}

// Assigning a new prototype object
Animal.prototype = {
    speak: function (){
        return "Animal speaking";
    }
}

// Reset the constructor if the prototype object is replaced
Animal.prototype.constructor = Animal;

const animal1 = new Animal();
console.log(animal1.speak()); //Output: Animal speaking
console.log(animal1 instanceof Animal); // true
*/

// Visit Next Step Call Bind Apply