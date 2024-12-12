// We already learned about the Prototype and their inheritance
// Just to cover all the topics this video are short & upto point

function Person(name){
    this.name  = name
}

Person.prototype.greet = function (){
    console.log(`Hello, my name is ${this.name}`);
}

let pranav = new Person("Pranav");
pranav.greet();