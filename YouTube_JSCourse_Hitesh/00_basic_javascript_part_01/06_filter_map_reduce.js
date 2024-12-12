const myNums = [1,2,3,4,5,6,7,8,9,10];
const newNums = myNums.filter( (num) => {
    return num > 4;
});

// console.log(newNums);

// same example using forEach
// 1. Create an empty array
// newFor = [];
// myNums.forEach((num) => {
//     if(num>4){
//         newFor.push(num);
//     }
// });

// console.log(newFor);

//More about filter

const books = [
    { title: 'Book 1', genre: 'Fantasy', publish: 1972, edition: 2008 },
    { title: 'Book 2', genre: 'History', publish: 1995, edition: 2012 },
    { title: 'Book 3', genre: 'Adventure', publish: 1986, edition: 2003 },
    { title: 'Book 3', genre: 'Detective', publish: 1998, edition: 2010 },
    { title: 'Book 4', genre: 'Sci-Fi', publish: 2001, edition: 2015 },
    { title: 'Book 5', genre: 'Fantasy', publish: 1950, edition: 2018 },
    { title: 'Book 6', genre: 'History', publish: 1892, edition: 2007 },
    { title: 'Book 7', genre: 'Comedy', publish: 1979, edition: 2014 }
];

let userBooks = books.filter( (bk) => bk.genre === 'History');
userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === 'History'});
console.log(userBooks);