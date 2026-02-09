

// console.log(addSum(5,5))  // 10

// function addSum(num1, num2){
//     return num1+num2;
// }
 
// console.log(sum(4,4))            Error here not be allowed these 

// const sum= function(num1, num2){
//     return num1+num2;
// }

// console.log(sum(4,4))  // 8

//-------------------- Hoisting ------------------
// Function hoisting in js is means you can use the function before the declariung functions for example:

showMe();

function showMe(){
    console.log("THis if Function hoisting")  // THis if Function hoisting
}

// Function hoisting it is allows us to call the function before declaring it, making the development workflow more smoothly.

// Java Scripts functions as a Fisr-class citizens . This means that you can store the functions in variables, pass them
// to another function as arguments, and return  them from another function as values.

// Functions are first-class citizens in JavaScript. In other words, you can treat functions like values of other types.

function sum(a,b){
    return a+b;
}

let sum_of=sum(10,20)
console.log(sum_of) // 30