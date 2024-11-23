/* 
1. Write a `for` loop that loops through the array 
`["green tea", "black tea", "chai", "oolong tea"]` and stops the
loops when it finds `"chai"`

Store all teas before `"chai"` in a new array named `selectedTeas`
*/

let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];

for (let i = 0; i < teas.length; i++) {
    if(teas[i]==="chai")break;
    selectedTeas.push(teas[i]);
};

// console.log(selectedTeas);

/* 
2. Write a `for` loop that loops through the array `["London",
"New York", "Paris", "Berlin"]` and skips `"Paris"`

Store the other cities in a new array named `visitedCities`;
*/

let cities = ["London","New York", "Paris", "Berlin"];
let visitedCities = [];

for(i=0; i < cities.length; i++){
    if(cities[i]==="Paris" || cities[i]=== "paris") {
        continue
    };
    visitedCities.push(cities[i]);
}
// console.log(visitedCities);

/* 
3. Use a `for-of` loop to iterate through the array `[1,2,3,4,5]`
and stop when the number `4` is found. Store the numbers before
`4` in an array named `smallNumbers`.

// For of / for in loop -> It is a syntatic sugar behind the scene
it is the same loop. The majority of time looping elements on Array
and Objects. Therefore JS team created this syntatic sugar to make
developers life easy. 

It will do declaring variable, incrementing, and finding the size
of the Object. So that the variable declared in the condition part
of the loop.

Array is also an Object.
num -> It is an individual element in the array. [numbers[i]]
numbers -> It is an array.
*/


let numbers = [1,2,3,4,5];
let smallNumbers = [];

for (const num of numbers) {
    if(num === 4) break;
    smallNumbers.push(num);
}

// console.log(smallNumbers);

/* 

4. Use a `for-of loop to iterate through the array 
   `["chai", "green tea", "herbal tea", "black tea"]` and skip 
   `"herbal tea"`. Store the other teas in an array named 
   `preferredTeas`

*/

let teaTypes = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];

for (const tea of teaTypes) {
    if(tea === "herbal tea") continue;
    preferredTeas.push(tea);
}


/* 
5. Use a `for-in` loop to loop through an object containing city
populations. 
    Stop the loop when the population of "Berlin" is found and 
    store all previous cities` population in a new Object named
    `cityPopulations`.

    let citiesPopulation = {
    "London":8900000,
    "New York":8400000,
    "Paris":2200000,
    "Berlin":3500000,
    }
*/

let citiesPopulation = {
    London:8900000,
    "New York":8400000,
    Paris:2200000,
    Berlin:3500000
};

let cityNewPopulations = {};
// console.log(Object.keys(citiesPopulation));
// console.log(Object.values(citiesPopulation));

for (const city in citiesPopulation) {
    if(city=="Berlin"){
        break
    }
    // key = value
    cityNewPopulations[city] = citiesPopulation[city]
}

// console.log(cityNewPopulations);

/* 
6. Use a `for-in` loop to loop through an object containing city
populations.
    Skip any city with a population below 3 million and store the
    rest in a new object named `largestCities`

let worldCities = {
    "Sydney":5000000,
    "Tokyo":9000000,
    "Berlin":3500000,
    "Paris":2200000
}
*/

let worldCities = {
    "Sydney":5000000,
    "Tokyo":9000000,
    "Berlin":3500000,
    "Paris":2200000
}

let largestCities = {};

for (const city in worldCities) {
    if(worldCities[city] < 3000000){
        continue
    }
    largestCities[city] = worldCities[city];
}

/* 
7. Write a `forEach` loop that iterates through the array
`["earl grey", "green tea", "chai", "oolong tea"]`.

    Stop the loop when `"chai"` is found and store all previous
    tea types in an array named `availableTeas`
*/

let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];

teaCollection.forEach(function(tea){
    if(tea==='chai'){
        return;
    }
    availableTeas.push(tea);
});

// console.log(availableTeas);


/* 
8. Write a `forEach` loop that iterates throught the array
`["Berlin", "Tokyo", "Sydney", "Paris"]`.

    Skip `"Sydney"` and store the other cities in a new array
    named `traveledCities`
*/

let myWorldCities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];

myWorldCities.forEach((city) => {
    if(city === "Sydney") return;
    traveledCities.push(city);
});

// console.log(traveledCities);

/* 
9. Write a `for` loop that iterates through the array `[2,5,7,9]`.
    Skip the value `7` and multiply the rest by 2. Store the
    results in a new array named `doubledNumbers`.
*/

let myNumbers = [2,5,7,9];
let doubledNumbers = [];

for (let i = 0; i < myNumbers.length; i++) {
    if (myNumbers[i] === 7) continue;
    doubledNumbers.push(myNumbers[i]*2);
}

console.log(doubledNumbers);

/* 
10. Use a `for-of` loop to iterate through the array
`["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]`
    
    and stop when the length of the current tea name is greater
    than 10.
    Store the teas iterated over in an array named `shortTeas`.
*/

let myTeas = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]
let shortTeas = [];

for (const tea of myTeas) {
    if(tea.length > 10) break;
    shortTeas.push(tea);
}

// console.log(shortTeas);
