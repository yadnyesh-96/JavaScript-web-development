
const person ={
    firstname:"yadnyesh",
    lastname:"dhangar",
    id:2154,
    fullName: function(){
        return (this.firstname + " " + this.lastname).toUpperCase();
    }
    
};

console.log(person.fullName())

/*
Some solutions to display JavaScript objects are:

Displaying the Object Properties by name
Displaying the Object Properties in a Loop
Displaying the Object using Object.values()
Displaying the Object using JSON.stringify()
*/

let text = person.firstname+","+ person.lastname+","+person.id;

console.log(text) //yadnyesh,dhangar,2154

let m="";

for (let x in person){
    m+=person[x]+" ";
}

console.log(m)

// create an array 
const myArray=Object.values(person);

console.log(myArray)

let j = myArray.toString();

console.log(j)

let age=18;
let ans = (age>=18)?"Eligible":"Not Eligible";

console.log(ans)
