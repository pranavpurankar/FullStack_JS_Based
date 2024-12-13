// Comprehensive Guide to async/await in JavaScript

/* 
async/await is a modern JavaScript feature introduced in ES2017 (ES8) that 
simplifies working with promises. It allows you to write asynchronous code 
that looks and behaves like synchronous code, making it more readable and 
maintainable.


# What is async/await?
    • async: Declares a function as asynchronous, which always returns a promise
             Inside an "async" function, you can use "await" to pause execution
             until a promise resolves or reject.
    
    • await: Pauses the execution of an "async" function until the promise 
             resolves, returning it's result. If the promise rejects, it throws
             an error


# Why Use async/await?
    1. Simplifies asynchronous code.
    2. Avoids chaining ".then()" and ".catch()", reducing callback-like nesting.
    3. Handles asynchronous operations in a synchronous manner for readability.

Before: Using Promises
*/

// Promise Creation
function fetchData(){
    return new Promise(function (resolve, reject){
        setTimeout(function (){
            resolve("Data fetched!");
        },2000);
    });
}

// Promise Consumption
fetchData()
    .then( function (data){
        console.log(data);
    })
    .catch( function (error){
        console.log(error);
    });

// After: Using async/await

async function fetchDataAsync(){
    try{
        const data = await fetchData();
        console.log(data)
    } catch{
        console.error(error);
    }
}

fetchDataAsync();

/* 
# How async/await works with Promises
    1. Declaring an Async Function
*/
async function example(){
    return "This is an async function."
}

example().then( function (result){
    console.log(result);    // Logs: "This is an async function."
});

// The above fn returns a promise, even though it appears to return a string.

/* 
    2. Awaiting a Promise
    The "await" keyword pauses execution inside an "async" function until the
    promise settles.
*/

function delay(ms){
    return new Promise( function (resolve){
        setTimeout( function (){
            resolve("Resolved after " + ms + " ms")
        }, ms);
    });
}

async function exampleWithAwait(){
    console.log("Start");
    const result = await delay(5000);
    console.log(result);    // Logs: Resolved after 2000 ms
    console.log("End");
}

// exampleWithAwait();

/* 
Error Handling in async/await
Errors inside an "async" function can be caught using "try..catch" 
*/
async function exampleWithErrorHandling(){
    try{
        const result = await Promise.reject("An error occurred!");
        console.log(result);
    }
    catch(error){
        console.error("Caught error:", error); //Logs:
    }
}

// exampleWithErrorHandling();

/* 
Combining Multiple Async Operation
    Sequential Execution
*/

async function sequentialExample(){
    const result1 = await delay(1000);
    console.log(result1); // Logs after 1 second

    const result2 = await delay(2000);
    console.log(result2); // Logs after 3 seconds
};


// sequentialExample();

    // Parallel Execution

async function parallelExample(){
    const promise1 = delay(1000);
    const promise2 = delay(2000);

    const [result1, result2] = await Promise.all([promise1, promise2]);
    console.log(result1, result2);
}

parallelExample();

/* 
Why "async" Functions Return Promises
An "async" function always wraps its return value in a promise. Even if you
return a non-promise value, JavaScript automatically resolves it into a promise.
*/
async function example(){
    return 42;  //Implicitly resolves to Promise.resolve(42)
}

example().then( function (result){
    console.log(result);
})

/* 
Functions Returning Functions
A function can return another function to enable dynamic behaviour or closures.
Example: Basic Function Returning a Function
*/

function outer(){
    return function inner(){
        return "Hello from inner!";
    };
}

const innerFunction = outer();
console.log(innerFunction());   // Logs: "Hello from inner!"

/* 
Why Use them>?
    1. Closures: Preserves variables in an enclosing scope
    2. Higher-Order Functions: Functions that return or take another functions

Example: Real-world Closure
*/

function counter(){
    let count = 0;
    return function (){
        count++;
        return count;
    };
}

const increment = counter();
console.log(increment());   // Logs: 1
console.log(increment());   // Logs: 2


/* 
Practise Exercise
1. Fetch Data with "async/await"
Write an "async" function that fetches data from the URL
*/

// Create a promise
// function userDetails(url){
//     return new Promise(resolve, reject){
//         if(url)
//     }
// }