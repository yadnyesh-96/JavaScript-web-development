
// closure T1:
// createCounter() that returns: increment , decrement , reset

function createCounter(num){
    let count=num;
    return{
        increment: function(){
            return ++count;
        },

        decrement: function(){
            return --count;
        },

        reset: function(){
            count=num;
            return count;
        }
    }
}

const counter=createCounter(8)
console.log(counter.increment()) //9
console.log(counter.increment()) //10
console.log(counter.increment()) //11

console.log(counter.reset()) //8

console.log(counter.decrement()) //7
console.log(counter.decrement()) //6
console.log(counter.decrement()) //5

console.log(counter.reset()) //8


// memoized Task 2
// Create a memoized version of factorial.

//1.
function factorial(n){
    if(n===0) return 1;
    return n*factorial(n-1);
}

const fac=factorial(5)
console.log(fac); //120

//2. 
function memorizedfactorial(){
    const cache={};

    return function fac(n){
        if(n in cache){
            console.log("From cache:",n);
            return cache[n];
        }

        console.log("Calculating :",n);

        if (n===0) return 1;

        cache[n]=n*fac(n-1);
        return cache[n];
    }
}

const f=memorizedfactorial();
console.log(f(5))



// Task 3
// Create a function once() and test it.


function once(fn){
    let called=false;

    return function(...args){
        if(!called){
            called=true;
            return fn(...args);
        }
    };
}

const init=once(()=>console.log("I am run once"));

init()      //I am run once
init()         // not run again 

