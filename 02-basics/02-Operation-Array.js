

// Operation on Array
let arr=[10,20,30,40,50,60];

// accessin the last element of array 
let last=arr[arr.length-1];
console.log(last) //60

// adding elemetn in array.
// by using the 2-methods 
// 1. push() adds at last index.
// 2. unshift() adds at first index.
arr.push(70);
arr.unshift(0);
console.log(arr) //     [ 0, 10, 20, 30, 40, 50, 60, 70]

// Removing element from array.
// by usign the 2-methods
// 1. pop() remove from last
// 2. shift() removes from first 
// 3. splice(startIndex,deletecount,item1,item2,...);

let last_element=arr.pop();
console.log("Last pop element is:"+last_element);   //Last pop element is:70

let first_element=arr.shift();
console.log("First shift element is:"+first_element);   //First shift element is:0

console.log(arr)    // [ 10, 20, 30, 40, 50, 60 ]


// concate the two arrays;
let arr2=[1,2,3,4,5,6,7,8,9];

let new_Arry=arr.concat(arr2);
console.log(new_Arry);          // [10, 20, 30, 40, 50, 60, 1,  2,  3,  4,  5,  6, 7,  8,  9]

// cover the array to string format 

let tech=['HTML','CSS','TypeScript','Js'];
// let tech2=['node.js','Angular','react'];

console.log(tech.toString());   //HTML,CSS,TypeScript,Js


// Recognizing the Array to identify the is it array or not 
// by usign the two mehtods 
console.log("Check the Array.isArray(): =",Array.isArray(tech));        //  Check the Array.isArray(): = true
console.log("Check the instanceof Array: =",tech instanceof Array);     //  Check the instanceof Array: = true 

console.log(typeof tech) //object

