/*
-   async / await is just Promises with better syntax
-   async → function always returns a Promise
-   await → waits for a Promise and extracts its value
-   await rejectedPromise → behaves like throw
-   Code before await → sync
-   Code after await → microtask
*/

async function getNumber(){
    return 5;
}  

getNumber().then(result => console.log(result))

/*
-   async function → always returns a Promise
-   return 5 → becomes Promise.resolve(5)
-   .then() receives 5
*/