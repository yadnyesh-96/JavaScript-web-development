


function delay(ms){
    return new Promise(resolve =>{
        setTimeout(resolve,ms);
    });
};


async function playgame(userGuess){
    try{
        console.log("Game is Started...");
        console.log("Thinking...");

        await delay(1000);  // simulate async work

        const sceretnum=Math.floor(Math.random()*10)+1;
        console.log("Secrent number is generated");

        if(userGuess < 1 || userGuess > 10 ){
            console.log("Guess must be Between 1 to 10");
        }else if(userGuess === sceretnum){
            console.log("Correct ! you Guessed it!");
        }else if(userGuess > sceretnum){
            console.log("Too High!");
        }else{
            console.log("Too Low!");
        }
    }catch(error){
        console.log("Error is:",error.message);
    }
}

playgame(5)