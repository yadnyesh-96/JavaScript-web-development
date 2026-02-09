


//Employee Details 
const employeeId=85855;
let employeeEmail="emp@gmail.com";
var employeePass="454642";
employeeLocation = "Delhi";
let employeeDept;

console.table([employeeId, employeeEmail, employeePass, employeeLocation, employeeDept]);

console.log("After the modifications :");

// const employeeId=123; not allowed constant key word modifications 
employeeEmail="abc@gmail.com";
employeePass="12345"
employeeLocation="Mumbai"

console.log(employeeEmail);
console.log(employeePass);
console.log(employeeLocation);


//+++++++++++++++++++++++++++++ VARIABLES +++++++++++++++++++++++

// JavaScript is a dynamically typed language
// This means that you don’t need to explitly specify the variable’s type

var variable_name;
console.log(variable_name); //undefined 


//--------------------/
// Starting in ES6, you can use the let keyword 
// Is a good practice to use the let 
// Use let when the variable value needs to change


let message;
console.log(message)  // by default value is undefined

// allowed 
message ="Hello";  // Initializing the variable in Js 

// After the declaring and initializing variable you can change its value;

message = "Bye";


// ************     Undefined vs Undecalred   *****************

// An Undefined variable means is a varible that has been declared but has not been initialized with value.

let name; // undefined 
console.log(name) // undefined 


// --------------------------/
// Constant 
// A constant holds value that doesn't change . To declare a constant, you use the const kwyword 
// when defining the const , you need to initialize it wiht a value immediately 
// const keyword declares blocked-scope variables. means we can't reassigned 

//const var_name;  // syntax errors.

const workday = 5;
console.log(workday)  // 5