var Student = {
    first_name : "Alice",
    last_name : "Johnson" , 
    age : 21,
    cne : "A123456",
    study : function(){
        console.log(`This student ${this.first_name } ${this.last_name} is studying !`)
    }
}

var Student1 = {
    first_name : "Bob",
    last_name : "Smith" , 
    age : 22,
    cne : "B987654",
    study : function(){
        console.log(`This student ${this.first_name } ${this.last_name} is studying !`)
    }
}

let Teacher = {
    full_name : "Abraham Karim",
    age : 43,
    cin : "KA234123",
    teaching : function(){
        console.log(`This teacher ${this.full_name} is teaching !`)
    }
}

const T = [];

T.push(Student , Student1 , Teacher);
console.log(T);
T.sort((a, b) => b.age - a.age);
console.log(T);
