
const  fruits ={Banans:300, Oranges:200, Apples:500 };

let text= " ";
for (let [fruit, value]of Object.entries(fruits)){
    text+=fruit+": "+ value+" "; 
}

console.log(text)

const person ={
    firstname:"yadnyesh",
    lastname:"dhangar",
    id:2154,
    fullName: function(){
        return (this.firstname + " " + this.lastname).toUpperCase();
    }
    
};

let val=JSON.stringify(person);

console.log(val)