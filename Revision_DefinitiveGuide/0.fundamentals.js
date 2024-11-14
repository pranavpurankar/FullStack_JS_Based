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

// Operators acts on values
l(points[1].x - points[0].x)

// equality and relational operator
// Not equality test
let j=2, k=3;
l(j === k)
l(j!==k)
l('less than: ', j < k)
l('less than or equal: ', j <= k)
l('greater than', j > k)
l('greater than or equal', j >= k)
l("two"==="three")


l("\n\nFunctions")

function plus1(x){
	return x + 1;
}

l(plus1(k))

// Functions are values can be assigned to vars
let square = function (x){
	return x*x
};//Semicolon marks the end of the assignemnt

l(square(plus1(k)));

// Arrow functions
const arrowPlus = x => x*x
l(arrowPlus(5))

// When functions are assigned to the properties of an object, we call
// them "methods". All javascript objects (including arrays) have
// methods

let newArray = [];
newArray.push(1,2,3);
newArray.reverse();
l(newArray);

// Lets define our own method
points.dist = function(){
	let p1 = this[0];
	let p2 = this[1];
	let a = p2.x - p1.x;
	let b = p2.y - p1.y;

	return Math.sqrt(a*a + b*b);
}
l(points.dist())

l(points)

// Control structures in function bodies

function abs(x){
	if(x >= 0){
		return x;
	}
	else{
		return -x;
	}
}

// A function to compute factorial
function factorial(n){
	let product = 1;
	while(n > 1){
		product *= n;
		n--;
	}
	return product
}

l(factorial(6))

// A factorial function another version using different loop
function factorial2(n){
	let i, product = 1;
	for(i=2; i <= n; i++)
		product *= i;
	return product;
}

l(factorial2(5))

// Class in javascript lets represent 2D geometric point 
class Point{

	constructor(x,y){
		this.x = x;
		this.y = y;
	}
	distance(){
		return Math.sqrt(
			this.x * this.x + this.y * this.y
		);
	}
}

let p = new Point(1,1);
l(p.distance())

l("\n\nComputes frequency")
// Computing characted frequency histograms with JavaScript

class DefaultMap extends Map{
	constructor(defaultValue){
		super();
		this.defaultValue = defaultValue;
	}
	get(key){
		if(this.has(key)){
			return super.get(key);
		}
		else{
			return this.defaultValue;
		}
	}
}

// This class computes and displays letter frequency histograms
class Histogram {
	constructor() {
		this.letterCounts = new DefaultMap(0);
		this.totalLetters = 0;
	}
	add(text){
		text = text.replace(/\s/g,"").toUpperCase();
		for(let character of text){
			let count = this.letterCounts.get(character);
			this.letterCounts.set(character, count+1);
			this.totalLetters++;
		}
	}
	toString() {
		let entries = [...this.letterCounts];
		entries.sort((a,b) => {
			if(a[1] === b[1]){
				return a[0] < b[0] ? -1 : 1;
			}else{
				return b[1] - a[1]
			}
		});
		for(let entry of entries){
			entry[1] = entry[1] / this.totalLetters*100;
		}
		entries = entries.filter(entry => entry[1] >= 1);
		let lines = entries.map(
			([l,n]) => `${l}:${"#".repeat(Math.round(n))}${n.toFixed(2)}%`
		);
		return lines.join("\n")
	}
}

async function histogramFromStdin() {
	process.stdin.setEncoding("utf-8");
	let histogram = new Histogram();
	for await (let chunk of process.stdin){
		histogram.add(chunk);
	}
	return histogram;
}

histogramFromStdin().then(histogram => {
	console.log(histogram.toString());
});