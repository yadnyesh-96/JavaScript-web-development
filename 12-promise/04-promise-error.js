

Promise.resolve()
    .then(()=>{
        throw "Error happens";
    })
    .then(()=>{
        console.log("A")
    })
    .catch(err => console.log("Caught:",err))
    .then(()=> console.log("After catch"))

/*
- throw → rejects promise
- .then() skipped after rejection
- .catch() handles error
- Chain continues after .catch()
*/

/*git add 02-promises
git commit -m "Add Promise basics, chaining, and error handling"
*/
