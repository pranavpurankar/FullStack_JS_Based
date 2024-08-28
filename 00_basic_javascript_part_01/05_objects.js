const myObject = {
    js:'javascript',
    cpp:'C++',
    py:'python',
    rb:'ruby'
};

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
};

const programming = ["js", "rb","python", "java","cpp"];

for (const key in programming) {
    // console.log(programming[key]);
}

// forEach loop

const coding = ["js", "java", "ruby", "python", "cpp"];

coding.forEach((item)=> {console.log(item)});

function printMe(item){
    console.log(item);
}

coding.forEach(printMe);

console.log('\n\n');

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
});

console.log('\n\n');

// [{} {} {}] => inside array there are many objects this is common
// situation in the array. This scenario is widely used in the array

const myCoding = [
    {
        languageName:"javascript",
        langaugeFileName:"js",
    },
    {
        languageName:"java",
        langaugeFileName:"java",
    },
    {
        languageName:"python",
        langaugeFileName:"py",
    },
]

myCoding.forEach((item) => console.log(item.languageName));

console.log("\n\n\n")

// const values = coding.forEach( (item) => { 
//     console.log(item);
//     return item;
// } );

// console.log(values);
