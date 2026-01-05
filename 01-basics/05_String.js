
const name="yadnyesh"

const repoCount = 96

//console.log(name + repoCount+" Value")

console.log(`Hello My Name is ${name} and my repo count is ${repoCount}`);

const gameName =new String('abc@gmail.com')

console.log(gameName[0]) // a

//console.log(gameName.__proto__)

console.log(gameName.length) //13
console.log(gameName.toUpperCase()) //ABC@GMAIL.COM

console.log(gameName.charAt(2)) //c
console.log(gameName.indexOf('@')) //3

const newString=gameName.substring(0,4)
console.log(newString) //abc@

const newString1=gameName.substring(-8,1)
console.log(newString1) //a

const newStringOne="  Yadnyesh  "
console.log(newStringOne) //" Yadnyesh  ""
console.log(newStringOne.trim()) // "Yadnyesh"

const url="https://yadnyesh.com/yadnyesh%20dhangar"

console.log(url.replace('%20','-')) //https://yadnyesh.com/yadnyesh-dhangar

console.log(url.includes('sundar')) //false

console.log(gameName.split('-')) //[ 'abc@gmail.com' ]