/*
Another way: 
We have already seen promises, but this is async-await with promise

*/

function fetchUserData(){
    return new Promise( (resolve, reject) =>{
        setTimeout( () => {
            reject({name:"chaicode", url:"https://chaicode.com"})
        },3000);
    })
}

// This is also a way to consume promise, already learn
/* 
fetchUserData
.then()
.catch() 
*/

// In the real-world or mostly production grade uses below
async function getUserData(){
    try{
        console.log('Fetching user data....');
        const userData = await fetchUserData()
        console.log("User data fetched successfully!")
        console.log("User Data: ", userData);
    } catch (error){
        console.log("Error fetching data", error);
    }
}

getUserData();