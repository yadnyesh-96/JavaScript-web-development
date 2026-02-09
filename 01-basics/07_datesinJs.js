
let myDate =new Date()
console.log(myDate.toString()) // Wed Jan 07 2026 00:54:42 GMT+0530 (India Standard Time)
console.log(myDate.toDateString())  // Wed Jan 07 2026
console.log(myDate.toLocaleString()) //1/7/2026, 12:55:28 AM
console.log(myDate.toLocaleDateString())  // 1/7/2026
console.log(typeof myDate) // object

// let myCurrentDate =new Date(2023, 0, 23)
// 1/23/2023, 12:00:00 AM

// let myCurrentDate =new Date(2023, 0, 23, 5, 3)
// 1/23/2023, 5:03:00 AM

// let myCurrentDate =new Date("2023-01-14")
// 1/14/2023, 5:30:00 AM

let myCurrentDate=new Date("01-14-2023")
// 1/14/2023, 12:00:00 AM

console.log(myCurrentDate.toLocaleString()) 

let myTimeStamp = Date.now() 


console.log(myTimeStamp)                    //     1767727951054
console.log(myCurrentDate.getTime())        //     1673634600000
console.log(Math.floor(Date.now()/1000))    //     1673634600000


let newDate =new Date()
console.log(newDate);
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

newDate.toLocaleString('default',{
    weekday: "long",
})