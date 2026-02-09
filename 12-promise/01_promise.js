
// Why promise present in js 
// js is Single-threaded
// non-blocking 
/*
let data=fetchDataFromServer();
console.log(data); // data not ready yet
*/
// What is the promise 
// A Promise is an object that represents 
// a value that will be available in the future 

// Promise states = 3
// 1. pending   ----> still working
// 2. fulfilled ----> Success
// 3. rejected  ----> Failed 

// Once fullfiled/rejectd => stated not changes again 
// Creating promise 

const myPromise = new Promise((resolve,reject)=>{
    let success=true;
    if(success){
        resolve("Task Completed");
    }else{
        reject("Task failed");
    }
});

// above code 
// Promise is a constructor
// it takes the function 
// that function receives :
//                          resolve  : Success
//                          rejected : failure

// consuming the promise 
myPromise
    .then(result =>{
        console.log(result);
    })
    .catch(result=>{
        console.log(error);
    })

// .then  ===> runs on success 
// .catch ===> runs on failure 

// Promise Example wiht time 

const delayedPromise=new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Done after 2 sec");
    },2000)
});

delayedPromise
    .then(console.log);


const promise1=new Promise((resolve,reject)=>{
    const num=-8;
    if(num>0){
        resolve("Case Passed")
    }else{
       reject("Failed")
    }
})

promise1 
    .then(result=>{
        console.log(result);
    })
    .catch(error=>{
        console.log(error)
    })

const Ev=new Promise((resolve,reject)=>{
    let num=8;
    if(num%2===0){
        resolve("EVEN");
    }else{
        reject("ODD");
    }
})

Ev
    .then(result=>{
        console.log(result);
    })
    .catch(error=>{
        console.log(error)
    })


async function getNumber(){
    try{
        await Promise.resolve
    }catch(err){
        console.log(err)
    }
}