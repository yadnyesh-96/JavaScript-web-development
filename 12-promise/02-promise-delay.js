

const promise =new Promise((resolve,rejected)=>{
    setTimeout(()=>{
        resolve(100);
    },1000);
});

promise .then(value=>{console.log(value);});

/*
-   setTimeout simulates async work
-   Promise resolves later
-   JS does NOT block
*/