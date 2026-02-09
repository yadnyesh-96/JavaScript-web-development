
function greet(){

    for(let i=0; i<=5; i++){
    console.log(i+1,". Hello Users !")
    }
}

greet() //function calling 


// fucntion with parameters 

function addSum(num1, num2){
    return num1+num2;
}

console.log("Sum is the :",addSum(4,5),".")

function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username")
        return 
    }

    return `${username} just logged-in`
}

console.log(loginUserMessage())

function calCulatePrice(num1, num2, ...val){
    let sum=num1+num2;
    for(let i=0; i<val.length; i++){sum+=val[i]}

    return sum;
}

console.log(calCulatePrice(100,200,300,400,500,600))

const user={
    u_name:"yadnyesh",
    u_ID:12
}

function userDetails(anyobject){
    return `user ID: ${anyobject.u_ID} and name is ${anyobject.u_name} .`
}

console.log(userDetails(user))