// Higher-Order Functions and Arrow Function (use Arrow Func)

/* 
Task 1:
Write a function squareNumbers(arr) using map() and arrow functions

map() is a method available on arrays that creates a new array by 
applying a callback function to each element of the original array. It does not modify the original array.

Think of map() as a way to "transform" an array.

Key Points:
• Iterates over each element in the array.
• Applies a function to each element.
• Returns a new array with the transformed values.

# Syntax of the map Method
The syntax of the Map method is straightforward:

const newArray = array.map(callback(currentValue[, index[, array]]) {
  return element for newArray, after executing something
}[, thisArg]);

• array: The original array that you want to iterate over.

• callback: A function that will be executed on each element of the
            array.

• currentValue: The current element being processed in the array.

• index (optional): The index of the current element being 
                    processed.

• array (optional): The array that map was called upon.

• thisArg (optional): An optional object to which this can refer in 
the callback function.

*/

// 1. Doubled Numbers
const numbers = [1,2,3,4,5];
const doubled = numbers.map( num => num * 2);
// console.log(doubled);

// Object Transformation: Extract ID's into a new Array
const users = [
    {id:1, userName:'Pranav'},
    {id:2, userName:'Shreyash'},
    {id:3, userName:'Vallabh'}
];

const userIds = [];

for (let i = 0; i < users.length; i++) {
    userIds.push(users[i].id);
}

// By using Map
const mappedIds = users.map( user => users.id);

/* 
Task 2: Custom Filter Function
Create a function filterEvenNumbers(arr) using filter() and arrow
function

# What is filter() method in JavaScript?

filter() is a method available on arrays that creates a new array
containing only the elements that pass a specific condition 
(defined by a callback function). It does not modify the original
array. Think of filter() as a way to "select" or "filter out"
elements based on a rule.

Key Points:
• Iterates over each element in th array
• Tests each element against a condition (callback function)
• Returns a new array with only the elements that satisfy the
  condition

Syntax of the filter method:
const newArray = array.filter(callback(element[, index[, array]])
[, thisArg])

• array: The original array from which elements will be filtered.

The explanation for callback, element, index, array, thisArg
is same as explained above 
*/

// Filterout even numbers Without filters

const score = [1,2,3,4,5];
const evenNumbers = [];

for (let i = 0; i < score.length; i++) {
    if(score[i] % 2 === 0) {
        evenNumbers.push(score[i]);
    }
}

// console.log(evenNumbers);

// With filter
const filteredNumbers = score.filter( num => num % 2 === 0 );


/* 
Task 3: Sum of positive Numbers
Write a function sumPositiveNumbers(arr) that takes an array of
numbers and return the sum of all positive numbers using filter()
and reduce() with arrow functions.

What is reduce() in JavaScript?
reduce() is a method available on arrays that reduces the array to
a single value by repeatedly applying a callback function to each
element and an accumulator. It does not modify the original array.

Key Points:
• Iterates over each element in the array.
• Use an accumulator to keep track of the combined result.
• Return a single value (not an array)

Terminology:
• initialValue:- 0 we need some intial for to pass it to the accm.

• accumulator :- Intially accum. ye empty variable diya jata hai.
  Ab isake andar value konsi dalni hai, to initialValue jo declare
  ki hai i.e. 0. Ye sirf 1st time jab loop chalega accm. ke andar 
  jati hai initialValue.

  Usake bad interesting baat hai jo bhi accm + currentValue ka
  sum aya hai wo accumulator mein dal deta hai.

  • currentValue:- Jo apaki abhi array ki value chal rahi wo hai.
  Ye value hume array se mil jati hai.

This is just a meaning of Accumulator related to Computer:
(I've habbit of understanding )
An accumulator is a register in a computer's central processing 
unit (CPU) that stores the intermediate results of arithmetic and 
logical operations. 

The accumulator is important because it:
• Speeds up the CPU ->
  By storing the results of computations, the CPU doesn't need to 
  write each result to main memory before using it in other 
  calculations. This improves the overall performance of the system. 

• Simplifies processing ->
  The accumulator allows the CPU to perform complex calculations by
  simplifying the processing of multiple operations

*/

const myNums = [1,2,3];

const myTotal = myNums.reduce( function (accumulator, currentValue) {
  console.log(`acc: ${accumulator} and currVal: ${currentValue}`)
  return accumulator + currentValue;
}, 0);

console.log(myTotal);


// Same using arrow function

const myCart = myNums.reduce( (acc, currVal) => acc + currVal, 0);
console.log(`Using arrow Accm: ${myCart}`);

// Example: 2 Shopping cart

const shoppingCart = [
  {
    itemName:"js course",
    price:2999,
  },
  {
    itemName:"python course",
    price:999,
  },
  {
    itemName:"mobile dev",
    price:5999,
  },
  {
    itemName:"data science",
    price:12999,
  }
]

// Now you've to add all the prices to make the total.

const t = shoppingCart.reduce( (acc, item) => ( acc + item.price), 0);
console.log(t);

// Task 3: Sum of Positive numbers
/* 
Write a function sumPositiveNumbers(arr) that takes an array of
numbers and return the sum of all positive numbers using filter()
and reduce() with arrow functions.
*/

const mixedArray = [-1,2,1,'pranav','xuv',3,4,5,-89,0,-89,-7];

function sumPositiveNumbers(arr){
  let filteredArray = [];

  arr.filter( function(item){
    if(item >= 0 && typeof item === "number"){
      filteredArray.push(item);
    }
  });

  const sm = filteredArray.reduce( function(acc, currVal){
    return acc + currVal;
    // console.log(`Accm: ${acc}`,`currVal: ${currVal}`);
  }, 0);
  return sm;
}

// console.log("Sum: ",sumPositiveNumbers(mixedArray));

// Now same using Arrow function
const sumPositive = mixedArray
.filter( (item) => item >= 0 && typeof item === "number" )
.reduce( (acc, currVal) => acc+currVal, 0);

console.log("sum arrow:",sumPositive);