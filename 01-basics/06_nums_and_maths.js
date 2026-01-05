
const score = 10
console.log(score) //10


const balance =new Number(100)
console.log(balance) //[ Number : 100]


const Stringis="ykd"
console.log(Stringis)

const newString = new String("Yadnyesh")
console.log(newString)  // [String: 'Yadnyesh']


console.log(balance.toString().length) //3
console.log(balance.toFixed(3)) //100.000


const otherNumber=123.89966

console.log(otherNumber.toPrecision(4)) //123.9


const hundered = 1000000
console.log(hundered.toLocaleString('en-IN')); //10,00,000


// ++++++++++++++++++++++++ MATHs +++++++++++++++++

console.log(Math) //Object [Math] {}

console.log(Math.abs(-4))  //4

console.log(Math.round(4.6)) //5

console.log(Math.ceil(4.2)) //5
console.log(Math.floor(4.9)) //4

console.log(Math.min(4, 3, 6, 8)); //3

console.log(Math.max(4, 3, 6, 8))  //8

console.log(Math.random())
console.log((Math.random()*10)+1);
console.log(Math.floor((Math.random()*10)+1))