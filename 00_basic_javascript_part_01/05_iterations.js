const arr = [1,2,3,4,7];

// forin and forof
//forin

for (const num of arr) {
    // console.log(num);
};

const greetings = "pranav";

for (const greet of greetings) {
    // console.log(greet);
};

//Maps

const map = new Map()
map.set('IN', "India");
map.set('US', "United States of America");
map.set('FR', "France");
map.set("IN", "India");

// console.log(map);

for (const [key, value] of map) {
    console.log(key,':-' ,value);
    
}

const myObject = {
    'game1':'NFS',
    'game2':'Spiderman'
};

// by using forof we can't iterate through objects

// for (const [key, value] of myObject) {
//     console.log(key,':-' ,value);
// };


