
// Array Destructing 

const arr = [1,2,3];

const [a,b,c]=arr;

console.log(arr);


// We have array with name and surname 
let  ar1 = ["Yadnyesh","dhangar"]

// destructing assignment 
// set firsname=ar1[0];
// ans surname=ar1[1];
let [Firstname,surname] =ar1;

console.log(Firstname," ",surname) //Yadnyesh   dhangar

// ignores the element's usign commas
let [firstName, ,title]=["yadnyesh", "Dhangar", "The try to learning the js.."]

console.log(title) // The try to learning the js..

// Assign anything at the lefr-side
let user ={};
[user.name,user.username]="yadnyesh dhangar".split(' ');

console.log(user.name);         //yadnyesh
console.log(user.username);     //dhangar

let user1 = new Map();
user1.set("name","Yadnyesh");
user1.set("age","30");

for(let [key,values] of user1){
    console.log(` ${key}: ${values}`);
}
/*
name: Yadnyesh
 age: 30
*/


// reduce()
const nums = [10, 20, 30];

const result = nums.reduce((sum, n) => {
  return sum + n;
}, 0);


console.log(result)