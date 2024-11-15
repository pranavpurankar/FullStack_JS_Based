console.log(`
[Day 01 - JavaScript]
[Author - Pranav Purankar]

JavaScript’s data types, primitive and non-primitive.`)

const dataTypes = [
    { dataType: 'Number', category: 'Primitive', explanation: 'Represents numeric values, including integers and floats.', example: 'let age = 25;' },
    { dataType: 'BigInt', category: 'Primitive', explanation: 'Used for integers larger than Number\'s safe limit.', example: 'let bigNum = 123456789012345n;' },
    { dataType: 'String', category: 'Primitive', explanation: 'Represents a sequence of characters or text.', example: 'let name = "Alice";' },
    { dataType: 'Boolean', category: 'Primitive', explanation: 'Represents logical values: true or false.', example: 'let isActive = true;' },
    { dataType: 'Undefined', category: 'Primitive', explanation: 'Represents a variable that has been declared but not assigned a value.', example: 'let value; // undefined' },
    { dataType: 'Null', category: 'Primitive', explanation: 'Represents an intentional absence of value.', example: 'let result = null;' },
    { dataType: 'Symbol', category: 'Primitive', explanation: 'Unique and immutable identifier, often used as object property keys.', example: 'let id = Symbol("uniqueID");' },
    { dataType: 'Object', category: 'Non-Primitive', explanation: 'Collection of key-value pairs, used to store multiple values.', example: 'let person = { name: "Bob" };' },
    { dataType: 'Array', category: 'Non-Primitive', explanation: 'An ordered list of values, a type of object with indexed elements.', example: 'let fruits = ["apple", "banana"];' },
    { dataType: 'Function', category: 'Non-Primitive', explanation: 'Represents a block of reusable code.', example: 'function greet() { return "Hi"; }' },
    { dataType: 'Date', category: 'Non-Primitive', explanation: 'Represents a date and time, stored as an object.', example: 'let today = new Date();' },
    { dataType: 'RegExp', category: 'Non-Primitive', explanation: 'Represents regular expressions, used for pattern matching in strings.', example: 'let pattern = /abc/i;' },
    { dataType: 'Map', category: 'Non-Primitive', explanation: 'Stores key-value pairs where keys can be any data type.', example: 'let map = new Map();' },
    { dataType: 'Set', category: 'Non-Primitive', explanation: 'Stores a collection of unique values of any type.', example: 'let set = new Set([1, 2, 3]);' },
    { dataType: 'WeakMap', category: 'Non-Primitive', explanation: 'Similar to Map, but keys are weakly referenced, allowing garbage collection.', example: 'let weakMap = new WeakMap();' },
    { dataType: 'WeakSet', category: 'Non-Primitive', explanation: 'Similar to Set, but values are weakly referenced, allowing garbage collection.', example: 'let weakSet = new WeakSet();' }
];

console.table(dataTypes);


console.log(`
JavaScript is a case-sensitive language.

Terminology:

Literals:- A literal is a data value that appears directly in a program.
Ex:- 12, "hello world", true, false, null, 1.2

Indetifiers:- An identifier is simply a name. They are used to name constants,
variables, properties, functions, and classes and to provide labels for certain 
loops in JavaScript code.

Statement :- They don't have a value, but they do alter the state.

Expression :- They are like phrases, it computes value
but doesn't do anything means it doesn't  alter the program state in any
way

Initializer Expression :- The way of listing array elements within square braces 
or mapping object property names to property values inside curly braces is known 
as an initializer expression

Ex:
    let data = {
        trial1: [[1,2], [3,4]],
        trial2: [[2,3], [4,5]]
    };
`)