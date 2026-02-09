
async function test(){
    try{
        console.log("Start");
        await Promise.reject("Something failed");
        console.log("This Will not run")
    }catch(error){
        console.log("Caught :",error)
    }

    console.log("End");
}

test()

/*
- await rejectedPromise → throws error
- Control jumps to catch
- Code after catch still runs
*/


/*
git add 03-async-await
git commit -m "Add async/await basics with flow and error handling"

*/