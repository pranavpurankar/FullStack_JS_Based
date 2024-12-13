/* 
In practical cases there well be very rare case that this topic
is used. If you're building a framework or something like this
then this might be the case that you may encouter this topic. 
*/

function* numberGenerator(){
    yield 1
    yield 2
    yield 3
}

let gen = numberGenerator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

console.log(genTwo.next().value);
console.log(genTwo.next().value);
console.log(genTwo.next().value);