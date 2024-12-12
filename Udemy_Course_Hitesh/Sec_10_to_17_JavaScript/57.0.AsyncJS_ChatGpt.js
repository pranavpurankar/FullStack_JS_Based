// Asynchronous JavaScript: A deep dive
/* 
JavaScript is single-threaded, meaning it executes one task at a time.
However, modern web applications require handling multiple tasks
simultaneously, like API calls, file reading, or user interactions.
Asynchronous JavaScript enables non-blocking operations, allowing the
main thread to keep running while waiting for longer tasks to complete.

Key Concepts
1. Synchronous vs Asynchronous
Synchronous: Tasks are executed one after the other. If one task takes
time, the next waits.

Asynchronous: Tasks run independently, and JavaScript continues
executing the next code without waiting.
*/

// Synchronous example
/* console.log("Start");
for(let i=0; i<2; i++){
    console.log(i);
}

console.log("End"); */

// Asynchronous example
/* console.log("Start");
setTimeout( () => console.log("Inside Timeout"), 1000);
console.log("End"); */

/* 
2. The Event Loop

The loop is a mechanism that handles asynchronous tasks. It process:
1. Call Stack: Holds the currently executing function.
2. Web APIs: Executes asynchronous tasks like "setTimeout" or "fetch"
3. Task Queue: Queues callbacks waiting for execution
4. Microtask Queue: Prioritized queue for "Promises" and 
   "MutationObserver" (Explained after the this section)

3. Promises

A "Promise" represents the eventual result of an asynchronous operation.
It has three states:
    • Pending: Operation not complete
    • Fulfilled: Operation successful.
    • Rejected: Operation failed.
*/

/* const myPromise = new Promise( (resolve, reject) => {
    const success = true;
    if(success) resolve("Promise resolved!");
    else reject("Promise rejected");
});

myPromise
    .then( (result) => console.log(result))
    .catch( (result) => console.log(error)); */


/* 
4. Async/Await
"async" and "await" simplify working with promises, making 
asychronous code redable and structured like synchronous code.
    • async function: Always return a promise
    • await: Pause execution until the promise resolves
*/

/* async function fetchData(){
    const url = 'https://www.freetestapi.com/api/v1/students/1';
    try{
        const response = await fetch(url)
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.error(error);
    }
}

fetchData(); */

/* 
Common Patterns in Asynchronous JavaScript
1. Parallel Executio: Run multiple promises simultaneously
*/

/* const fetchData1 = fetch('https://www.freetestapi.com/api/v1/students/2');
const fetchData2 = fetch('https://www.freetestapi.com/api/v1/students/3');

Promise.all([fetchData1, fetchData2])
    .then( (response) => console.log("Both responses received",response))
    .catch( (error) => console.log(error)); */

// 2. Promise Chaining:

/* fetch('https://www.freetestapi.com/api/v1/students/5')
    .then( (response) => response.json())
    .then( (data) => console.log(data))
    .catch( (error) => console.error(error)); */


// ================ Practise Exercise ==================
/* 
Q1. Understanding Event Loop
What will be the output of the following code?
*/

/* console.log("start");
setTimeout( () => console.log("Timeout 1"),0);
Promise.resolve().then( () => console.log("Promise 1"));
setTimeout( () => console.log("Timeout 2"), 0);
console.log("End"); */

/* 
Q2.Basic promise
Create a "Promise" that resolves after 2 seconds with the message:
"Resolved after 2 seconds"
*/

// const myPromise = new Promise( (resolve, reject) => {
//     const success = true;
//     if(success) resolve("Resolved ")
// })

// I will solve Above exercise after understanding async or promise

// =================================================================

/* 
MutationObserver- What and Why?
The MultationObserver is used to watch for changes in the DOM. It is 
a part of asynchronous JavaScript, as it triggers callback in response
to changes in the DOM without blocking the main thread.

Use Case: Detect when an element is added/removed, or when attributes
or child nodes change.
*/

// =================================================================

/*
Diving in-depth, I want to learn this topic in-depth that's it. 
What is a "Promise" ?
*/

// Promise Creation

const revisePromise = new Promise( (resolve, reject) => {
    // Async operation here
    const success = true // Simulating success
    if(success){
        resolve("Operation successful!");
    }else{
        reject("Operation failed");
    }
});

// console.log(revisePromise);

/* 
How to consume a Promise
There are two main ways to consume a promise:
    1. Using ".then()" and ".catch()":
        • .then(): Handles the fulfilled value
        • .cathch(): Handles any errors

    2. Using async/await:
        • "await" pauses execution until the promise resolves
*/

// Using .then() and .catch()
revisePromise
    .then( (result) => console.log(result))
    .catch( (error) => console.log(error));

// Using async/await. await pauses execution until the promise resolves
async function consumePromise(){
    try{
        const result = await revisePromise;
        console.log(result);    //Logs: Operation successful
    }catch (error){
        console.error(error);
    }
}

// consumePromise();


/* 
Why Promises Matter?
Let's understand this what happens when we don't use promises
*/

setTimeout( () => {
    // console.log("First task completed");
    setTimeout( () => {
        // console.log("Second task completed");
        setTimeout( () =>{
            // console.log("Third task completed");
        },1000)
    },1000)
},1000)

/* 
The above code is known as callback hell-code becomes unreadable and 
hard to maintain.
*/

// Solution with promise

// Promise creation
function wait(ms){
    return new Promise( (resolve) => setTimeout(resolve, ms));
}

// Promise consumption
wait(1000)
    .then( () => {
        // console.log("First task completed");
        return wait(1000);
    })
    .then( () => {
        // console.log("Second task completed");
        return wait(1000);
    })
    // .then( () => console.log("Third task completed"));


/* 
Async/Await in Detail
Why async/await?
    • Makes asynchronous code look asynchronous
    • Easier to read and write than chaining .then().
*/ 

async function performTasks(){
    await wait(1000);
    console.log("First task completed");
    await wait(1000);
    console.log("Second task completed");
    await wait(1000);
    console.log("Third task completed");
}

performTasks();