// Not exactly old, but how we use getter and setter through properties.
// 09_getter_setter and this functionality is same, only difference is 
// readability. Below is the old of doing or how underhood get set works
// It is still modern syntax, 

function User(email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set:function(value){
            this._email = value;
        }
    })
}

const chai = new User("chai@cchai.com", "chai")
console.log(chai.email);
