console.log(`
[Day 01 - JavaScript]
[Author - Pranav Purankar]

JavaScript’s data types, primitive and non-primitive


Data Type	Category	Explanation	Example
Number	Primitive	Represents numeric values, including integers and floats.	let age = 25;
BigInt	Primitive	Used for integers larger than Number's safe limit.	let bigNum = 123456789012345n;
String	Primitive	Represents a sequence of characters or text.	let name = "Alice";
Boolean	Primitive	Represents logical values: true or false.	let isActive = true;
Undefined	Primitive	Represents a variable that has been declared but not assigned a value.	let value; // undefined
Null	Primitive	Represents an intentional absence of value, used to indicate "no value".	let result = null;
Symbol	Primitive	Unique and immutable identifier, often used as object property keys.	let id = Symbol("uniqueID");
Object	Non-Primitive	Collection of key-value pairs, used to store multiple values.	let person = { name: "Bob" };
Array	Non-Primitive	An ordered list of values, a type of object with indexed elements.	let fruits = ["apple", "banana"];
Function	Non-Primitive	Represents a block of reusable code, also a type of object.	function greet() { return "Hi"; }
Date	Non-Primitive	Represents a date and time, stored as an object.	let today = new Date();
RegExp	Non-Primitive	Represents regular expressions, used for pattern matching in strings.	let pattern = /abc/i;
Map	Non-Primitive	Stores key-value pairs where keys can be any data type.	let map = new Map();
Set	Non-Primitive	Stores a collection of unique values of any type.	let set = new Set([1, 2, 3]);

`)

/*

Terminology:

Expression :- JavaScript expressions are like phrases, it computes value
but doesn't do anything means it doesn't  alter the program state in any
way

Statement :- They don't have a value, but they do alter the state.

*/