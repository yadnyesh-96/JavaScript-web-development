
const person ={}

person.firstname="yadnyesh";
person.lastname="dhangar";
person.age=21;
person.loggedIn=true;

// console.log(person) 


// we also create the objec by using the new keyword 

const student = new Object({
    std_name:"anil",
    std_lastname:"fulmali",
    std_rollNo:"51",
    std_passd:true
});

let ts=student.std_lastname // fulmali

let name=student["std_name"] //anil

console.log(name) //anil

console.log(ts)

person.nationality="indian"  // new properties added in person object 

console.log(person)

delete person.age;  // deleted the age property from object 

console.log(person)

