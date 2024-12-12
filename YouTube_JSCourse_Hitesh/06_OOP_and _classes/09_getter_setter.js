class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value;
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const pranav = new User("p@pranav.ai", "abc");
console.log(pranav.password);
console.log(pranav.email);

/*
In some cases we don't directly show this info like passwords
There are many scenarios where we apply this sort of check to 
avoid direct access. So getter and setter method are useful

Suppose I don't want to give the password access, so what type 
of error should we show
*/