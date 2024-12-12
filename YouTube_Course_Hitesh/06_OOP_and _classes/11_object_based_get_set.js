// 9,10,11 functionality is same 10 was little old and based on function
// and property and this means 11 was based on object it is oldest way 
// this is very oldest code may be 0.1% probabilty

const User = {
    _email:'p@hc.com',
    _password:'abc',

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value;
    }
}

const tea = Object.create(User)
console.log(tea.email);
