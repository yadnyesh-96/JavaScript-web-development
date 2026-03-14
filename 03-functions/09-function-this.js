
const person = {
    firstName : "Ajay",
    lastName : "Patil",
    fullName : function (){
        return this.firstName+" "+this.lastName;
    }
};

console.log(person.fullName());