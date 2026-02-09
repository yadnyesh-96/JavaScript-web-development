

// Destructing 

const user={
    name:"yadnyesh",
    age:22
};

const {name,age} =user;

console.log(name) //yadnyesh

// Array Destructing 

const arr=[10,20,30]

const [a,b]=arr;

console.log(a,b);  // 10 , 20

// map
// i want to change the every element 

const num=[2,3,4,5,6];

const square = num.map(n=>n*n);

console.log(square) // [ 4, 9, 16, 25, 36 ]


// filter 

const res = num.filter(n=>n%2===0);

console.log(res)  //[ 2, 4, 6 ]


// reduce

const nums=[1,2,3];

const sum=nums.reduce((s,n)=>s+n,0);

console.log(sum) // 6


const words = ["js", "react", "js"];

const count =words.reduce((acc,word)=>{
    acc[word]=(acc[word]||0)+1
    return acc;
},{})

console.log(count) //{ js: 2, react: 1 }

const products = [
  { name: "iPhone", price: 900 },
  { name: "Samsung", price: 850 },
  { name: "Sony", price: 700 }
];
/*
Task:
Extract names
Filter expensive
Get total price
*/
const names = products.map(nm=>nm.name);
console.log(names); // [ 'iPhone', 'Samsung', 'Sony' ]

const prices =products.filter(p=>p.price>800);  
console.log(prices);  // [ { name: 'iPhone', price: 900 }, { name: 'Samsung', price: 850 } ]

const total = products.reduce((sum,n)=>sum+n.price,0);
console.log(total);     // 2450