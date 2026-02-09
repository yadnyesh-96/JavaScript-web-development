
// Closure 
// A function remembers variables from where it was created , 
// even after that place is finished.

function outer(){
    let count =0;

    function inner(){
        count++;
        console.log(count);
    }

    return inner;
}

const counter = outer();
counter();  //1
counter();  //2
counter();  //3

console.log("-------------------------------")

function createCounter(num){
    let count =num;
    
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

    };
};

const nums=createCounter(1);
console.log(nums.increment())