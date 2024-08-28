const myNums = [1,2,3];

/*
const myTotal = myNums.reduce( function (acc, currval) {
    console.log(`acc: ${acc} currval: ${currval}`);
    return acc + currval;
}, 0);
*/

// same using arrow function
const myTotal = myNums.reduce( (acc, currval) => acc+currval,0);

// console.log(myTotal);

const shoppingCart = [
    {
        itemName:"Js course",
        price:2999
    },
    {
        itemName:"ML course",
        price:999
    },
    {
        itemName:"Python course",
        price:1999
    },
]

// aad functionality to add all these courses
const totalAmount = shoppingCart.reduce( (acc, item) => acc+item.price,0);

console.log(totalAmount);