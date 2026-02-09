function greet(name){
    return `Hello `+name;
}

function processUser(callback){
    console.log(greet("Yadnyesh"));
}

processUser(greet)      //Hello Yadnyesh


// multiplier function 
function multiplier(x){
    return function (y){
        return x*y;
    }
}

const num=multiplier(5);
console.log(num(5))     //25

// addition funtion 

function Addition(a){
    return function(b){
        return a+b;
    };
};

const nums=Addition(5);
console.log(nums(2))        //7
