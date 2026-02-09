// What are the functions ?
//functions are fundamental building blocks in all programming 
// function is reusable block of code design to perform the particular taks 
// functions are executed when they are 'called' or 'invoke'.
/*
function functionName(parameters){
    //function body
    //...
}

*/

// the following are the function syntax in javaScipt
// function myFunction(p1, p2){
//     return p1*p2;
// }

// let res=myFunction(2,4);
// console.log("Result is:",res)

//function are defined with the function keyword

// ------------------------ FUNCTIONS --------------------

function msg(){
    console.log("Hey js Functions");   //function body
}

msg();  // Hey js Functions //function calling

// Every function in javaScript implicitly return undefined useless you explicitly specify a return value 

let result = msg();  // Hey js Functions
console.log("result is",result); // result is undefined

function add(a,b){
    return a+b;
}

let res=add(10,5);
console.log("1. Addition is: ",res); //15
console.log("2. addition is:",add(10,20)) //30

function say(message){

    if(!message){
        return;
    }else{
        console.log(message);
    }
}
