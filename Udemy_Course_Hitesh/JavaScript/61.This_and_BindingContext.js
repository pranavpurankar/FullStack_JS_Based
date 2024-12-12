/* 
What is "this" keyword? How you gonna bind a context to it?

*/

const person = {
    name: "Pranav",
    greet(){
        console.log(`Hi, I am ${this.name}`)
    }
};

person.greet();

/* 
Yeah! you guessed the output correctly. That the person.greet()
will definetely print the name -> Pranav.

What happens when context is changed?
It means like below person.greet (ref) is assigned to the new
variable it outputs -> Hi, I am undefined.

The context is lost, it means the value of this is lost.
This is where the bind comes into the picture. We have to tell the
back story of it.
*/

const greetFunction = person.greet
greetFunction();

/* 
We have to use the "bind" method that preserves the context or adds
new one. Below is way to do it.
*/
const boundGreet = person.greet.bind({name:"John"});
boundGreet();

// Do more research on -> bind, call and apply