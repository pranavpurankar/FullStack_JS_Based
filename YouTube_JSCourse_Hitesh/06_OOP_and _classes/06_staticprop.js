// Static Properties [prop = properties]

class User{
    constructor (username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);        
    }

    static createId(){
        return `123`
    }
}


const pranav = new User("pranav")
console.log(pranav.createId());
