/* 
JavaScript "Map" Object-In-Depth Tutorial

The JavaScript Map object is a built-in object used to store key-value pairs. 
It is similar to a JavaScript object ({}) but comes with significant advantages 
such as:

    1.Keys can be of any data type (e.g., objects, numbers, strings, functions).
    2.Maps maintain the order of their elements.
    3.Maps offer built-in utility methods for efficient access and manipulation.

Table of Contents:

    1.Introduction to Map
    2.Key Methods of the Map Object
        set()
        get()
        Other methods (explained briefly with examples)
    3.Code Analysis
        Analyzing the hashing function from earlier to check for optimization.
        Explaining for...of.
    5.Practice Questions
        5 questions of varying difficulty to solidify understanding.

1. Introduction to Map
The "Map" object allows you to map any type of value as a key to specific
value. This includes objects, arrays, numbers, or strings

Example: Creating a Map
*/
const myMap = new Map();
myMap.set('name', 'Alice');
myMap.set(1,'One');
myMap.set(true, 'True');
myMap.set([1,2],'Array as key')

console.log(myMap);

/* 
Key Takeaways:
    • Keys can be primitive types or objects.
    • Maps maintain the insertion order of elements


2. Key Methods of the "Map" Object
The "Map" object has several methods, but we'll first focus on the most 
important ones: set() and get()

set():
    The set() method is used to add a key-value pair to the "Map". If the key
    already exists, its value is updated.

    Syntax:
        map.set(key, value);

Example 1: Adding Key-Value Pairs
*/
const myMapSet = new Map();
myMapSet.set('name', 'Alice');
myMapSet.set(1, 'one');
myMapSet.set(true, 'True');

console.log(myMapSet);


/* 
Example 2:Overwriting a Key
*/
myMapSet.set('name', 'Bob');
console.log(myMapSet);

/* 
get()

The get() method is used to retrieve the value associated with a key.

Syntax:
    map.get(key)

Example 1: Retrieve a Value
*/
const myMapGet = new Map();
myMapGet.set('name', 'Alice');
myMapGet.set(1,'One');

console.log(myMapGet.get('name'));
console.log(myMapGet.get(1));
console.log(myMapGet.get('Key Unavailbale -> Undefined'));

// Keys() returns keys, below ex uses for of loop
for(let key of myMapGet.keys()){
    console.log("Keys are: ",key);
}


// Values() returns values, below ex uses for of loop
for (let value of myMapGet.values()){
    console.log("Values are:",value);
}

// entries() returns an iterable of [key,value] pairs from the map
for(let [key,value] of myMapGet.entries()){
    console.log(`Key: ${key}, Value: ${value}`);
}

/* 
forEach()
Executes a callback for each key-value pair in the map.
Syntax:
    map.forEach( (value, key) => { ... });

Example:
*/
myMapGet.forEach( (value,key) => {
    console.log(key,value);
})

/*
YouTube Channel: Code step-by-step

There are two maps inside the javascript functional map and class map
Class Map:

    • Map is similiar to object but little bit advance from object
    • Map key can be any data type (object can have string key only)
    • Map has more features which don't have in Object
    • Map has better performance than Object
*/

let obj = {
    name:'Anil',
    true:'this is number key'
}

let data = new Map([
    ['name', 'peter'],
    [true,'this is a number key in map']
]);

obj.city="Noida"
data.set('city','Noida')
data.set(() =>{}, 'this is a object type');

// data.delete(true);
// console.log(obj.key)
// console.warn(data.has('abc'));

// data.forEach( (value, key) => {
//     console.warn(key,value)
// })

// for ([k,v] of data) {
//     console.warn(k);
// }

// console.warn(typeof data)

console.log("\n\n\nPractise Problems\n\n")
/* 
5. Practise Questions
Question 1:
    Write a function to create a Map of numbers and their squares from the
    array [1,2,3,4,5]. Use only set() and get().
*/

function squareMap(arr){
    let square = new Map();
    arr.forEach(element => {
        square.set(element,element*element);
    });

}

console.log(squareMap([1,2,3,4,5]));

/* 
Question 2:
    Check if a "Map" has a specific key 5. If yes, return "true"; if not,
    return false.
*/
let checker = new Map([
    ['1', 'one'],
    ['2', 'two'],
    ['5', 'five'],
    ['7', 'seven'],
])

function checksKeys(key){
    if (key === checker.keys()){
        return true;
    }else false;
}
console.log(checksKeys(5));

/*
Question 3:
    Write a function to clear all entries in a Map except for keys that are
    odd numbers.

Questions 4:
    Count the frequency of characters in a string using the Map Object

Question 5:
    Write a program to iterate over a map of users (key: userID, value:userName)
    and print all users whose name starts with the letter A.
*/