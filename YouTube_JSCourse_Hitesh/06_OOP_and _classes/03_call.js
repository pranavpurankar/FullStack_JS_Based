// Assumption building a discord, some rule checks for setting username,
// making calls to db, checking whether the username is taken by someone

function SetUsername (username){
    // doing complex DB calls
    this.username = username;
    console.log("called");    
}

// Another function that creates a user

function createUser(username, email, password){
    SetUsername.call(this,username);
    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "chai@example.com", "123");

console.log(chai);