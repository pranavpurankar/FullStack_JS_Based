/* 
Closures: Are in simple terms are functions. The whole idea behind
this function is that they remember an environment in which they area 
created. This means that function can remember the variabe declared
outside of it, but remember don't forget the definition closures are
functions.
*/

function outer(){
    let counter = 4;
    return function(){
        counter++;
        return counter;
    }
}

let increment = outer();
console.log(increment());
// console.log(increment());
// console.log(increment());