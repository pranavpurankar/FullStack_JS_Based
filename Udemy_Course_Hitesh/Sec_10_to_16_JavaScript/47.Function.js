// Function

/* 
1. Writw a function named `makeTea` that takes one parameter,
`typeOfTea`, and returns a string like `"Making green tea"`
when called with `"green tea"`
Store the result in a variable named `teaOrder`
*/

function makeTea(typeOfTea){
    return `Making ${typeOfTea}`;
}

let teaOrder = makeTea("Lemon tea");
// console.log(teaOrder);

/* 
2. Create a function named `orderTea` that takes one parameter,
`teaType`. Inside this function, create another function named
`confirmOrder` that returns a message like `"Order confirmed
for chai"`.
Call `confirmOrder` from within `orderTea` and return the result.
*/

function orderTea(teaType){
    function confirmOrder(){
        return `Order confirmed for chai`
    }
    return confirmOrder();
}

let orderConfirmation = orderTea("chai");
// console.log(orderConfirmation);

/* 
3. Write an arrow function named `calculateTotal` that takes two 
parameters: `price` and `quantity`. The function should return
the total cost by multiplying the `price` and `quantity`.
Store the result in a variable named `totalCost`.
*/

const calculateTotal = (price, quantity) => {
    return price*quantity
}

let totalCost = calculateTotal(499,100);
