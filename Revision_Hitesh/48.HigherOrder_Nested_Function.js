/* 
4. Write a function name `processTeaOrder` that takes another
function, `makeTea`, as a parameter and calls it with the
argument `"earl grey"`

Return the result of calling `makeTea`
*/

function makeTea(typeOfTea){
    return `maketea: ${typeOfTea}`;
}

function processTeaOrder(teaFunction){
    return teaFunction('earl grey');
}

let order = processTeaOrder(makeTea);
// console.log(order);


/* 
5. Write a function named `createTeaMaker` that returns another
function. The returned function should take one parameter,
`teaType`, and return a message like `"Making green tea"`.
Store the returned function in a variable named `teaMaker` and
call it with `"green tea"`
*/

function createTeaMaker(name){
    return function(teaType){
        return `Making ${teaType} ${name}`;
    }
}

let teaMaker = createTeaMaker("pranav")
// console.log(teaMaker("green tea"));
let result = teaMaker("green tea");
console.log(result);