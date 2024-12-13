// Ten challenges in Array and Methods

/* 
1. Declare an array names 'teaFlavors' that contains the string
`"green tea"`, `"black tea"`, and `"oolong tea"`.

Access the first element of the array and store it in a variable
named `firstTea`.
 */

/* let teaFlavors = ["green tea","black tea","oolong tea"];

const firstTea = teaFlavors[0];
console.log(firstTea);

// There is another way to declare an array
let teaFl = new Array("green tea","black tea","oolong tea"); */

/* 
2.Declare an array named `cities` containing `"London"`, `"Tokyo"`,
`"Pais"`, and `"New York"`. Access the third element in the array
and store it in a variable named `favoriteCity`.
*/

/* let cities = new Array("London", "Tokyo", "Paris", "New York");
const favoriteCity = cities[2];
console.log(favoriteCity); */


/* 
3.You have an array named `teaTypes` containing `"herbal tea"`,
`"white tea"`, and `"masala chai"`.
Change the second element of the array to `"jasmine tea"` 
*/

/* let teaTypes = ["herbal tea", "white tea", "masala chai"];
teaTypes[1] = "jasmine tea";
console.log(teaTypes); */

/*
4. Declare an array named `citiesVisited` containing `"Mumbai"`
and `"Sydney"`

Add `"Berlin"` to the array using the `push` method
*/

/* let citiesVisited = ["Mumbai", "Sydney"]

// If array is huge & length is unknow below not good practise.
// This also overrides the existing the if value is present
// citiesVisited[2] = "Berlin";

// Below is using the lenght, as length give the output in the
// human readable format This is the exact position where we can
// add our new value. Exact position where I want to inject it.

// citiesVisited[citiesVisited.length] = "Berlin";

// There is method push. It will by default put it in the end of
// the array.

citiesVisited.push("Berlin");
console.log(citiesVisited); */

/* 
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`,
`"matcha"`, and `"earl grey"`.
Remove the last element of the array using the `pop` method and
store it in a variable named `lastOrder`.
*/

/* let teaOrders = new Array("chai", "iced tea", "matcha", "earl grey");
const lastOrder = teaOrders.pop();
console.log(teaOrders);
console.log(lastOrder); */

/* 
6. You have an array named `popularTeas` containing `"green tea"`,
`"oolong tea"`, and `"chai"`.
Create a soft copy of this array method `softCopyTeas`.
*/

/* let popularTeas = new Array("green tea", "oolong tea", "chai");
let softCopyTeas = popularTeas;
popularTeas.pop();
console.log(softCopyTeas);
console.log(popularTeas); */

// Both points to the same references. So changes made in the 
// original one will be applicable to other that is referencing
// it.

/* 
7. You have an array named `topCities` containing `"Berlin"`,
`"Singapore"`, and `"New York"`.

Create a hard copy of this array named `hardCopyCities`.
*/

let topCities = ["Berlin", "Singapore", "New York"];
// let hardCopyCities = [...topCities];
//Another way is using methods
//Above is used widely. Below is very very rare.

let hardCopyCities = topCities.slice();
topCities.pop();
// console.log(topCities);
// console.log(hardCopyCities)

/* 
8. You have two: `europeanCities` containing `"Paris"` and 
`"Rome"` and `"asianCities"` containing `"Tokyo"` and `"Bangkok"`.
Merge these two arrays into a new array named `worldCities`.
*/

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
let worldCities = europeanCities.concat(asianCities);
console.log(worldCities);
console.log(typeof worldCities);

/* 
9. You have an array named `teaMenu` containing `"Masala chai"`,
`"oolong tea"`, `"green tea"`, and `"earl grey"`

Find the length of the array and store it in a variable named
`menuLength`.
*/

let teaMenu = ["Masala chai", "oolong tea", "green tea", "earl grey"];
let menuLength = teaMenu.length;

/* 
10. You have an array named `cityBucketList` containing `"Kyoto"`,
`"London"`, `"Cape Town"`, and `"Vancouver"`
Check if `"London"` is in the array and store the result in a 
variable named `isLondonInList`.
*/

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];

let isLondonInList = cityBucketList.includes("London");
console.log(isLondonInList);