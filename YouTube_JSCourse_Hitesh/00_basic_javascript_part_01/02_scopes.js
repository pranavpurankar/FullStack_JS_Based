function one (){
    const username = "pranav";

    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);

    two()
}

// one();

if(true){
    const username = 'pranav';
    if(username === 'pranav'){
        const website = ' youtube';
        // console.log(username + website);
    }

    // console.log(website);
}

// +++++++++++ Interesting +++++++++++++
console.log(addOne(5));

function addOne(num){
    return num + 1;
}

console.log(addTwo(4));

const addTwo = function(num){
    return num+1;

}