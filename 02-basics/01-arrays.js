
const myArr =[0,1,2,3,4,5]

const myHeros=["Shaktiman","nagaraj"]

const myArr2=new Array(1,2,3,4)

// console.log(myArr[0])

// Array Methods

myArr.push(6)
myArr.push(7)

myArr.unshift(9)
myArr.shift()

console.log(myArr) // 0 1 2 3 4 5 6

console.log(myArr.includes(9)) // flase
console.log(myArr.indexOf(3))  // 3

const newArr = myArr.join()
console.log(newArr)            // 0,1,2,3,4,5,6,7

// slice, splice 

console.log("A ",myArr);

const myn1=myArr.slice(1,3)

console.log(myn1)
console.log("B ",myArr)

const myn2=myArr.splice(1,3)
console.log("C ",myArr)
console.log(myn2)
