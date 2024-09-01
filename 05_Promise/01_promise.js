/* 
Majority of tutorial will say that

fetch('https://something.com').then().catch().finally()

fetch():-> common example, fetch URL
then() :-> If there is response it will be in .then()
cath() :-> If there is error it will be in .catch()
finally:-> Koi acha tutorial hoga to bol dega sab kuch finally mein
aa jayega. Finally to run hota hi hota hai. Aur yahi apake fetch hai
or promise hai. 
Well nahi, before consuming promises, first let's understand how this
promises are created?

Creation of promises, promises takes a callbacks.When things got bigger
callback inside callback, promises manager callback hell efficiently.

Inside callbacks(resolve, reject) :- two possibilities either they will
successfull or failed. Either videos of javascript will come or hitesh
stopped making js videos
*/

// Creating/Making promises

const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB calls, cryptography, network calls | understand it wi8 simple
    // setTimeout
    setTimeout(function (){
        console.log('Async task is complete');
        resolve()
    },1000)

});

// Comsuming promise
promiseOne.then(function(){
    console.log("Promise consumed");
    
});

/*
Steps:
1. Someone/You created a promise; but the function is simple loging text
after 1 sec. So what is point the point of resolve, reject.

2. When resolve is executed, it will be connected to .then. Always 
remember consume part will never execute first.

3. we defined a function using .then() -> by default it takes one parameter
we have to connect the created promise and need to connect it to consume it
so we have to use promiseOne.then(callback func which takes one para)
We know that in majority of cases, we comsume promises
*/

// Above we've used the variable but without it is also written in many place

new Promise( function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();        
    },1000)
}).then(function (){
    console.log("Async 2 resolved");
    
});

// Third promise

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"chai", email:"chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

// Fourth promise


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"pranav", password:"123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFour.then( (user) =>{
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))


// Five promise -> other way of doing it.
// See then, catch, finally is also prefered, and async/await is also
// Depend on the use case or you can do it with async/await also
// for ex: in db connection -> async/await. It is not necessary to use
// it but can be useful.

const promiseFive = new Promise(function (resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"javascript", password:"123"})
        }else{
            reject('ERROR: JS went wrong')
        }
    },1000)
});


async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response);
    } catch(error){
        console.log(error);        
    }
}

consumePromiseFive();

// how learned material used behind the scene and code using async await try catch

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(response);
//     }
//     catch (error){
//         console.log("E: ", error);        
//     }
// };

// getAllUsers();


// Above code in then, cath and finally format

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
//These two then chain is known as thenable
.catch((error)=>console.log(error))

// If you look at the output of the above code this fetch code block
// is executed first, and the previous all lines of codes output is
// console logged after this. Lets understand it in the next session
// with the help of diagram