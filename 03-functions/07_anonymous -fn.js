

// Anonymous function 
// anonymous function is function in js which is not have the name 
// anonymous function is a function without a name.

/*Ex.
(function (){
    // body
})
*/
// using function as a function argument 
/*
setTimeout(function (){
    console.log("Execute later after 1 sec");
}, 1000);

In this example, we pass an anonymous function into the setTimeout() function. 
The setTimeout() function executes this anonymous function one second later.
*/


// Immediateky Invoked function Execution (IIFE)

// If you want to create the function and execute immediately after the declaration 
// you can use the anonymous function like as 
(function (){
    console.log("IIFE");
})(); //IIFE


const person = {
    first_name: "Yadnyesh",
    last_name: "Dhanger"
};

(function (){
    console.log(`Hi ${person.first_name} _ ${person.last_name}`);
})(person)