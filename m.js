class User {
    constructor(id , name ){
        this.i = id;
        this.n= name;
    }
}

let u1 = new User(100 , 'wed')
console.log(User.prototype)