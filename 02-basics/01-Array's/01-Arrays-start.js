
// JavaScript Array 
// Creating array in js 
let newArr = new Array(); // these we create the array by using the constructor

// and js prefered to create array as 
let colors=['red', 'blue', 'pink', 'blue','yellow'];

// accessing the array value/elements/data by different techniques.

console.log("-------------------");
console.log("Technique : 1 =");

console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]);
console.log(colors[4]);

console.log("-------------------");
console.log("Technique : 2 =");

for(let i=0; i<colors.length; i++){
    console.log(colors[i]);
}

console.log("-------------------");
console.log("Technique : 3 =");

for(let val of colors){
    console.log(val)
}

console.log("-------------------");
console.log("Technique : 4 =");

for(index in colors){
    console.log(colors[index])
}

console.log("-------------------");
console.log("Technique : 5 =");

colors.forEach((val,index)=>{
    console.log(index,val);         // index = 0 val = red
})


console.log("-------------------");
console.log("Technique : 6 =");
let arr=[1,2,3,4,5,6,7,8];
//  If we required to transform data wich means in arr array we required to squsre of that all numers then 

let squares=arr.map(val=>val*2);
console.log(squares)    // 2,  4,  6,  8, 10, 12, 14, 16

console.log("-------------------");
console.log("Technique : 7 =");

// we have the filter we check the all even numbers from array

let evenNums=arr.filter(val=>val%2===0);
console.log(evenNums);     // [ 2, 4, 6, 8 ]

console.log("-------------------");
console.log("Technique : 8 =");

// next we have the method reduce which used to aggregate 
// suppose we required to take the output of all elemnts present in array

let sum=arr.reduce((total,num)=>total+num,0);
console.log(sum)    //36

console.log("-------------------");
console.log("Technique : 9 =");
// by using the while loop

let i=0;
while(i<arr.length){
    console.log(arr[i]);
    i++;
}

console.log("-------------------");
console.log("Technique : 10 =");
// display the array data in table format 
console.table(colors);
console.table(arr);