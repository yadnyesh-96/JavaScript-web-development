
const input = document.getElementById("guessInput");
const button = document.getElementById("playBtn");
const statusText = document.getElementById("status");





function delay(ms){
    return new Promise(resolve =>{
        setTimeout(resolve,ms);
    });
};


async function playgame(userGuess){
    try{
        
        statusText.textContent = "Thinking...";
        button.disabled = true;
        input.disabled = true;
        /*
        console.log("Game is Started...");
        console.log("Thinking...");
        */
        await delay(1000);  // simulate async work

        const sceretnum=Math.floor(Math.random()*10)+1;
        console.log("Secrent number is generated");

        if(userGuess < 1 || userGuess > 10 ){
            statusText.textContent = "Guess must be Between 1 to 10";
        }else if(userGuess === sceretnum){
            statusText.textContent = "Correct ! you Guessed it!" ;
        }else if(userGuess > sceretnum){
            statusText.textContent =  `Too High! ${sceretnum}` ;
        }else{
            statusText.textContent = `Too Low! ${sceretnum}`;
        }
    }catch(error){
        statusText.textContent = error.message ;
    }finally{
        button.disabled = false;
        input.disabled = false;
    }
}

// playgame(5)

button.addEventListener("click",() => {
    const guess = Number(input.value);
        playgame(guess);
    
});