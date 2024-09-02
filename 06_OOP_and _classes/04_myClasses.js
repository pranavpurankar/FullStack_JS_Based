// This is after ES^6, classes in javascript is syntatical sugar

/*
class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    
    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai", "chai@example.com","123");

console.log(chai.encryptPassword());
console.log(chai.changeUsername());
*/

// Same code or behind the scene on above code. Below is the code
// which is same as above ref notes.

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toLowerCase()}`
}

const chai = new User("tea", "tea@example.com", "123");
console.log(tea);

console.log(tea.encryptPassword());
console.log(tea.changeUsername());
