// Loops

/* 
Task 1: Sum of the first N Natural numbers 
Write a function sumOfN(n) that returns the sum of the first n
natural numbers.
*/

function sumOfN(n){
    if (n <= 0) return 0;

    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}

console.log(sumOfN(5));

// This is the another way, using formula
// function sumOfN(n){
//     if(n <= 0) return 0;
//     return (n * (n+1)) / 2;
// }


/* 
Task 2: Multiplication Table
Write a function printMultiplicationTable(n) that returns the
multiplication table for n. Values return in the array must be
of the format 2*2 = 4
*/

function printMultiplicationTable(n){
    if(n <= 0) return 0;

    let mulTable = [];
    for (let i = 1; i <= 10; i++) {
        result = n * i;
        mulTable.push(`${n} * ${i} = ${result}`);
    }
    return mulTable;
}

// console.log(printMultiplicationTable(2));

/* 
Task 3: Count vowels in a String
Write a function countVowels(str) that returns the number of
vowels (in both lower & uppercase) in the given string str.
*/

function countVowels(str){
    str = str.toLowerCase();
    let vowelsArray = ["a","e","i","o","u"];
    let count = 0;

    for (let i = 0; i < str.length; i++) {       
        for (let j = 0; j < vowelsArray.length; j++) {
            if(str[i] === vowelsArray[j]){
                count += 1;
            }
        }
    }
    return count;
}

console.log(countVowels("pranav"));