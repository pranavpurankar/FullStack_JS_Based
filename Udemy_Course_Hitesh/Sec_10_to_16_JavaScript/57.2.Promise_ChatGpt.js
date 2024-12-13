// Promises in JavaScript: From First Principles to Advanced Concepts

/* 
A promise in JavaScript is an object that represents the eventual
result of an asynchronous operation. It allows you to write
non-blocking code, manage operations that might succeed or fail, and
handle the result in the future. Let's start from the very basics and
work towards advanced concepts, with real-world examples.

What is a Promise?
A promise has three states:

Pending: The initial state; the operation has not completed yet.
Fulfilled: The operation completed successfully, and a value is
available.
Rejected: The operation failed, and an error reason is available.

Analogy

Imagine you order pizza:

While waiting for the delivery, your order is pending.
If the pizza arrives, the order is fulfilled.
If the delivery fails, the order is rejected.

Step 1: Creating a Promise
A promise is created using the "Promise" constructor, which takes a
function(executor) as its arguments. The executor function receives
two parameters:

    • resolve: Call this when the operation succeeds.
    • reject : Call this when the operation fails.
*/

const myPromise = new Promise( (resolve, reject) => {
    const success = true;   // Simulate success
    if(success){
        resolve("Promise fulfilled!");
    }else{
        reject("Promise rejected!")
    }
});

// console.log(myPromise);


/* 
Why Use Promises?
Promises solve the problem of callback hell—nested and hard-to-read
code that happens when using traditional callbacks for asynchronous
operations.

Below is callback hell example:


getData( (data) => {
    process(data, (processed) => {
        save( processed, (saved) => {
            console.log("Data saved!");
        });
    });
});

// Same example using Promise
getData()
    .then(process)
    .then(save)
    .then( () => console.log("Data saved!"))
    .catch( (error) => console.error(error));
*/

/* 
Step 2: Consuming Promises

1. Using .then() and .catch()
    .then() : Executes when the promise is fulfilled.
    .catch(): Executes when the promise is rejected.
*/

/* myPromise
    .then( (result) => console.log(result))
    .catch( (error) => console.log(error)); */

/* 
2. Using async/await
    • async function: Always return a promise
    • await: Pauses execution until the promise resolves or rejects
*/
async function handlePromise(){
    try{
        const result = await myPromise;
        console.log(result);    // Logs: Promise Rejected/Fulfilled
    } catch (error){
        console.error(error);
    }
}

// handlePromise();

/* 
Advanced Promise Concepts
1. Chaining Promises
    Promises can be chained to perform sequential operations
*/

new Promise( (resolve) => resolve(10))
    .then( (num) => num * 2)
    .then( (num) => num + 5)
    .then( (num) => console.log(num))
    .catch( (error) => console.log(error));

/* 
2.Handling Multiple Promises
    • "Promise.all" : Runs multiple promises in parallel and waits
    for all to fulfill
*/
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1,p2,p3])
    .then( (results) => console.log(results))
    .catch( (error) => console.log(error));

// • "Promise.race": Resolves or Rejects as soon as one promise settles
const p4 = 
new Promise( (resolve)=> setTimeout( ()=> resolve("Fast"),100));

const p5 =
new Promise( (resolve)=> setTimeout( ()=> resolve("Slow"),500));

Promise.race([p4,p5])
    .then( (result) => console.log(result)) //Logs: "Fast"
    .catch( (error) => console.log(error));

/* 
3. Error Handling with ".catch()"
If any promise in chain fails, the error propagates to the nearest
.catch()
*/

new Promise( (resolve, reject) => reject("Error occurred"))
    .then( (result) => console.log(result)) // Skipped
    .catch( (error) => console.log(error)); //"Error occurred"

/* 
Example Beyond "setTimeout"
Real-World Example: Fetching User Data
*/

// Promise Creation
function fetchUser(userId){
    return new Promise( (resolve, reject) => {
        // Simulate API request
        setTimeout(() => {
            if(userId === 1){
                resolve({id:1, name:"Pranav Purankar"});
            }else{
                reject("User not found");
            }
        },1000);
    });
}

// Consuming Promise
fetchUser(1)
    .then((user)=>console.log(`User: ${user.name}`))
    .catch((error)=>console.error(error));

/* 
Practical Scenario: File Upload Simulation
*/

function uploadFile(file){
    return new Promise( (resolve, reject) =>{
        console.log("Uploading File...");
        setTimeout( () => {
            if(file.size < 5){
                resolve("File uploaded successfully");
            }else{
                reject("File size too large");
            }
        }, 2000);
    });
}

// Simulate a file
const file = {name:"example.txt", size:4}  // Size in MB

uploadFile(file)
    .then( (message) => console.log(message))
    .catch( (error) => console.error(error));


/* 
Practise Exercise
1.Creating a Promise
    Write a function "loginUser(username)" that returns a promise. 
    If the "username" is "admin", resolve with "Login successful!".
    Otherwise, reject with "Invalid user"
*/

function loginUser(username){
    return new Promise((resolve, reject) => {
        if(username==="admin"){
            resolve("Login successful!")
        }else{
            reject("Invalid User")
        }
    })
}

loginUser("admin")
    .then( (log)=> console.log(log))
    .catch( (error) => console.log(error));

/* 
2. Error Handling
Modify this code to handle errors properly using .catch and 
async/await
*/
function fetchData(url){
    return fetch(url)
}

async function fetchData(url){
    try{

    }catch{}
}

// I will solve this execrise after coming back from async await
