

async function delay(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}


async function calculator(a,b,operator){
    try{
        console.log("Calculating...");

        await delay(1000);

        if(typeof a !=='number' || typeof b !=='number' || Number.isNaN(a) || Number.isNaN(b)){
            throw new Error ("Inputs must be valid numbers");
        }

        let result;

        switch (operator){
            case "+":
                result = a+b;
                break;
            case "-":
                result = a-b;
                break;
            case "*":
                result = a*b;
                break;
            case "/":
                if(b===0){
                    throw new Error("Cannot divide by zero");
                }
                result = a/b;
                break;
            default:
                    throw new Error("Invalid operator");
        }

        console.log("Result :",result);
        return result;
    }catch(error){
        console.log("Error: ",error.message);
        throw error;
    }
}

calculator(10,2,"+");
calculator(10,0,"-");
calculator("a",2,"*");