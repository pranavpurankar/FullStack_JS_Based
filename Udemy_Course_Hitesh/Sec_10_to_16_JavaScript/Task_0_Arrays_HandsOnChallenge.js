// Task Practise

/* 
Write a function filterNumbers(arr) that returns only numbers from 
a mixed array
*/

/* let mixedArray = [42, "text", NaN, 0, -1, 2.5, "100", true, null];
function filterNumbers(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if(typeof arr[i] === "number" && !isNaN(arr[i]))
        result.push(arr[i]);
    }
    return result;
}

let result = filterNumbers(mixedArray);

console.log(result); */

/* 
Write a function reverseArray(arr) that reverses the array
*/

/* function reverseArray(arr){
    let reversedArray = [];
    for (let i = arr.length-1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}
let newArray = [10,20,33,45];

console.log(reverseArray(newArray));
 */

// Task 3: Find maximum in an Array

/* 
Write a function findMax(arr) that returns the 
largest number in the array
*/


/* function findMax(arr){
    if(arr.length===0) return null;
    
    // Assume first element is the larget the element
    let max = arr[0];

    for(i=0; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
    return max;
}
let numbers = [10, 20, 45, 5, 2];

console.log(findMax(numbers)); */


// Task 4 Remove duplicates from an array

/* 
Write a function removeDuplicates(arr) that returns a new array
with all duplicates removed.
*/

/* function removeDuplicates(arr){
    let uniqueArray = [];

    for(i=0; i < arr.length; i++){
        if(uniqueArray.includes(arr[i])){
            continue;
        }else{
            uniqueArray.push(arr[i]);
        }
    }

    return uniqueArray;
}

let numArr = [11,24,11,56,89,56,89,11,56];

console.log(removeDuplicates(numArr)); */

// Shorter-logic

/* function removeDupliShort(arr){
    let uniqueArray = [];

    for (let i = 0; i < arr.length; i++) {
        if(!uniqueArray.includes(arr[i])){
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}
let nameArr = ["pranav", "purankar", "pranav", "CS", "CS"];
console.log(removeDupliShort(nameArr)); */

// Task 5 Flatten a Nested Array
/* 
Write a function flattenArray() that takes a nested array and
returns a single flattened array.

What is flattened array?
A flattened array is an array that has no nested arrays inside it.
It means all the elements of the nested arrays are combined into a
single, one-dimensional array.

Nested Array:
[1,[2,3], [4, [5,6]]]
This is the nested array.

Flattened Array:
[1,2,3,4,5,6]
All the items are in a single array, no inner arrays
*/

function flattenedArray(arr){
    let flattened = [];

    for (let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])){
            flattened = flattened.concat(flattenedArray(arr[i]));
        }else{
            flattened.push(arr[i]);
        }
    }

    return flattened;
}

console.log(flattenedArray([1, [2, [3, 4], 5], 6]));