const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);


// Why we can't change this value
// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const mynewObject = Object.create(null);

const chai = {
    name:'ginger chai',
    price:250,
    isAvailable:true,
    orderCHai: function(){
        console.log("Chai nahi bani");       
    }
}

console.log(chai);

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name',{
    // writable:false,
    enumerable:true
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// We will handle it in the real world
for (let [key,value] of Object.entries(chai)) {
    if (typeof value!== 'function'){
        console.log(`${key}:${value}`);  
    }
}