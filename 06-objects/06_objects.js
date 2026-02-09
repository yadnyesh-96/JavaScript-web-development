/*
Object Constructor Functions
Sometimes we need to create many objects of the same type.
To create an object type we use an object constructor function.
It is considered good practice to name constructor functions with an upper-case first letter.
*/

function Person(first, last, age){
    this.first=first;
    this.last=last;
    this.age=age;
}

const a_var= Person("yadnyesh","dhangar",21)

console.log(Person)