let x;

x = 0;
console.log(typeof (x));

// Primitive types
// Javascript supports several types of values their -> return types
// Number	-> "number"
// Strings 	-> "string"
// Boolean	-> "boolean"
// Null 	-> "object"
// Undefined-> "undefined"
// BigInt	-> "bigint"
// Symbol	-> "symbol"

// Non-primitive data types
// Object -> 

let book = {
	topic: "Javascript",
	edition: 7,
}

console.log(book.topic)
console.log(book["edition"])

// Create new property by assignment
book.author = "Flanagan"

// {} is an empty object with no properties
book.contents = {}

// Conditionaly access properties with ?. (ES2020)
book.contents?.ch01?.sect1

//Optional chaining operator javascript
const user = {
	firstName: "Pranav",
	lastName: "Purankar",
	age: 28,
	address: {
		city: 'Delhi'
	},
	// getFullName: function(){
	// 	return user.firstName + ' ' + user.lastName
	// }
}

// user.address -> Undefined Tried to access not defined property
// user.address.city -> error Tried to access the undefined proprty
// To solve this we can use conditionals

// Below code stopped throwing agar user ke andar address property hai
// tab is cheej ko run karao nhi to mat karao.

// if(user.address){
// 	console.log(user.address.city)
// }

// Another way is using && AND logical operator
// console.log(user.address && user.address.pincode)

// New way: Optional chaining
console.log(user.getFullName?.())

l = console.log

let primes = [2, 3, 5, 7, 9]
// first element of the array
l(primes[0])
// Length of the primes array
l(primes.length)
// Last element
l(primes[primes.length - 1])
//add new element by assignment
l(primes[4] = 11)
// an empty array with no elements
let empty = []
l(empty.length)

l("\n\n")
// Arrays and objects can hold other arrays and objects

// An array with 2 elements each element is an object
let points = [
	{ x: 0, y: 0 },
	{ x: 1, y: 1 }
];

// An object with 2 properties 
// The value of each is an array
// The element of the arrays are array

let data = {
	trial1: [[1, 2], [3, 4]],
	trial2: [[2, 3], [4, 5]]
}

