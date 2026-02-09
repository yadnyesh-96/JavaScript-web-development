"use strick";   // trates all js code as a newer version

//console.log(3+3)  // code reusability should be high

//console.log("yadnyesh");

let name="yadnyesh "
let age=21;
let isLogging = false;
let state;


// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

//console.log(typeof undefined); //undefined 
//console.log(typeof null); //object 


//+++++++++++++++++++++++++  DATA TYPES in Js  ++++++++++++++++++


// null
// boolean 
// undefined 
// number 
// string 
// bigint 
// symbol

//  ------ Complex dataType in js is 
// object 

// js is dynamically type tech means which is not required to specifies the data type to variable while defining 

let counter = 100 ; // here counter behaves like a number type

console.log(typeof(counter))  // number


counter = false ; // counter act's as boolean 

console.log(typeof(counter))  // boolean


counter = "string_now";   // behaves now as a string 

// to know the type of variable we use 'typeof' function 

console.log(typeof(counter))  // string


// undefined 
// The undefined type is a primitive type that has only one value undefined
// when a variable is declared but not initialized it default to undefined 

let avg;
console.log(avg) // undefined
console.log(typeof(avg)) //undefined 


// null
// The null type is the second primitive data type that also has only one value null

let obj=null;
console.log(obj) //null
console.log(typeof(obj)) // object 

// number 
// the javaScript uses the number type to represents the Integer and Floating type values. eg. 10 , 20 , 10.5 rtc.,

let Num = 10; 
let num1 = 0.2;

console.log(typeof(Num));   //number
console.log(typeof(num1));  // number

// to get the range of number type, you use Number.MIN_VALUE  nad Number.MAX_VALUE

console.log(Number.MIN_VALUE);  // 5e-324
console.log(Number.MAX_VALUE);  // 1.7976931348623157e+308


// also you got infinity 

console.log(Number.MAX_VALUE + Number.MAX_VALUE); // infinity
console.log(-Number.MAX_VALUE - Number.MAX_VALUE); // -infinity

//NaN 
// it stated the invalid number 
console.log('a'/2);  // NaN

// Any operation with NaN returns NaN.
// The NaN does not equal any value, including itself.

console.log(NaN/2); // NaN
console.log(NaN == NaN); // fa

/*
console.log(Boolean(0));        // false
console.log(Boolean(1));        // true
console.log(Boolean(""));       // false
console.log(Boolean("JS"));     // true
console.log(Boolean(null));     // false
console.log(Boolean(undefined));// false
console.log(Boolean([]));       // true
console.log(Boolean({}));       // true
*/

console.log(isNaN('a'/2)); // true
Number.isNaN('a'/2);      // true
    
const y= Symbol("yd");
const y1=Symbol("yd");

console.log(y===y1)      //false


//  What is == (Loose Equality)?

// Compares values

// JS converts types automatically
// 10 == "10"; // true
// "10" → 10
// 10 == 10 → true

// What is === (Strict Equality)?

// Compares value AND type