
/*
Task 3 (write code)
Create an async function
Await a Promise that resolves to 5
Multiply by 3
Print result
*/

async function take_num(){
   const x = await Promise.resolve(5);
    const res = x*3;
    console.log(res);
}

take_num();

fetch('https://catfact.ninja/fact')
    .then(result=>{
        return result.json()
    })
    .then(data => console.log(data))
    .catch(error => {
        console.log(error)
    })

