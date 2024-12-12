// Promises Creation

function fetchData(){
    return new Promise( (resolve, reject) => {
        setTimeout( ()=>{
            let sucess = true;
            if(sucess){
                resolve("Data fetched successfully!")
            }else{
                reject("Error fetching data.")
            }
        },3000)
    });
}

// Cosuming promise
// let response = fetchData()
// console.log(response);

fetchData()
    .then( (data) => {
        console.log(data);
        // return `Pranav`
        return data.toLowerCase();
    })
    .then( (value) => {
        console.log(value);
    })
    .catch( (error) => console.error(error));