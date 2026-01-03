let score ="15yadnyesh"
console.log(typeof score)  // string 

let name = "562"
console.log(typeof name)  // number 

let ValNum=Number(name)
console.log(ValNum)

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let loggedIn="yadnyesh"
let booleanLogIn=Boolean(loggedIn)
console.log(booleanLogIn)  // true

let log=""
let res=Boolean(log)
console.log(res); // false 

let n = 1
let res1=Boolean(n)
console.log(res1) // true if n=0 and we try to convert it in boolean then result will be 'false'

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber) 
// console.log(stringNumber);
console.log(typeof stringNumber);

// *********************** Operations ***********************

let val=3;
let val1= -val;
console.log(val1) //-3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1="Hello "
let str2="Yadnyesh ."
let str3=str1+str2;
console.log(str3) // Hello Yadnyesh .
console.log(str1+str2) // Hello Yadnyesh .

console.log("1" + 2);  //12 
console.log(1 + "2");  //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32

console.log( (3 + 4) * 5 % 3); //2 (7)*5 =35%3=2

console.log(+true); //1
console.log(+""); //0

let gameCounter=100
++gameCounter
console.log(gameCounter) //101