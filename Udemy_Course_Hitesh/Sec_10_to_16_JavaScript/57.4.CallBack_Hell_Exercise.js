/* 
Callback Hell: Explanation in Detail

What is Callback Hell?

Callback hell refers to a situation where multiple nested callback functions are
used in asynchronous programming. The nested structure makes the code difficult
to read, debug, and maintain. It looks like a pyramid or "Christmas tree,"
growing horizontally as more asychronous operations are added.

How Does Callback Hell Occur?
Callback hell occurs when:
    1. Multiple Asychronous Tasks: You chain many dependant async tasks using
       callbacks.
    2. Dependencies: Each callback depends on the result of the previous one.
    3. Poor Code Structure: Improper organization of callbacks leads to deepely
       nested and unmanageable code.

Example of Callback Hell
*/

setTimeout( function (){
    console.log("Task 1 complete");
    setTimeout( function(){
        console.log("Task 2 complete");
        setTimeout( function () {
            console.log("Task 3 complete")
        },1000)
    },1000)
},1000)

/* 
The above structure becomes increasingly hard to read as more nested operations
are added.
Problems with Callback Hell:
    1. Readability: The code becomes hard to understand
    2. Debugging: Tracing errors or bugs becomes difficult
    3. Scalability: Modifying or extending the code is challenging

Does "async/await" Solve callback Hell?
Yes, async/await effectively resolves callback hell by:

    1. Making Code Sequential: Async code appears synchronous, improving 
       readability.
    2. Error Handling: Easier error handling with try...catch.
    3. No Nesting: Avoids deeply nested structures.

Refactored Callback Hell with async/await:
*/

function delayTask(task, ms){
    return new Promise( function (resolve){
        setTimeout( function (){
            console.log(task + " Complete");
            resolve();
        },ms)
    });
}

async function performTasks(){
    await delayTask("Structured Task 1", 1000);
    await delayTask("Structured Task 2", 1000);
    await delayTask("Structured Task 3", 1000);
}

performTasks();

/* 
Practice Problems:
1. What is callback hell, and how does it occur?

=> The callbakc hell is occur when asynchronous tasks nested deeply, creating a
   pyramid structure. This makes code hard to read and debug.

2. Write an example of callback hell.
=> 
*/

setTimeout( function(){
    console.log("Example of CBH 1");
    setTimeout( function(){
        console.log("Example of CBH 2")
    },2000)
},3000);

/* 
3. Explain why callback hell is problematic.
It is problematic because it is hard to read, debug and maintain the code.

4. How does async/await resolve callback hell?
async/await resolves callback hell by flattening the structure, making 
asynchronous code appear sequential.

5. Rewrite the following callback hell using async/await:

setTimeout(function () {
  console.log("Task 1");
  setTimeout(function () {
    console.log("Task 2");
    setTimeout(function () {
      console.log("Task 3");
    }, 1000);
  }, 1000);
}, 1000);
*/

async function task(){
    await delayTask("CBH_1",5000);
    await delayTask("CBH_2",6000);
    await delayTask("CBH_3",7000);
}

task();