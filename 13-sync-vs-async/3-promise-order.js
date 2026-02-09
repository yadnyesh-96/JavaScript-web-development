
console.log("Start");

Promise.resolve().then(()=>{
    console.log("Promise");
});

console.log("End");

//Microtasks (Promise) run before Macrotasks (setTimeout)


/*
git init
git add 01-sync-vs-async
git commit -m "Add sync vs async basics with examples"

*/