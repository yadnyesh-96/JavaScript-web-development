
console.log("Start");

setTimeout(()=>{
    console.log("Timeout");
},0);

console.log("End");

/* 
    - Start → sync
    - setTimeout → goes to Web API
    - End → sync
    - Timeout → macrotask (later)
*/