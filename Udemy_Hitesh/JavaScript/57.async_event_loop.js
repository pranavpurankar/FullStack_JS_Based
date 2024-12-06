function sayHello(){
    console.log("I would like to say hello");
}

setTimeout(()=>{
    sayHello();
},4000);

for(let index = 0; index<3; index++){
    console.log(index);
}

console.log("chaicode");