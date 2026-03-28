
const cardId = document.getElementById("card");

const logBtn = document.getElementById("LoginBtn");


const userInput = document.getElementById("userInput");
userInput.addEventListener('keyup', () => {
    let str = userInput.value;
    let flag = false;
    for (let i = 0; i < str.length; i++) {
        let chars = str.charCodeAt(i);
        if (!((chars >= 65 && chars <= 90) || (chars >= 97 && chars <= 122))) {
            flag = true;
            break;
        }
        if(flag){
            cardId.style.borderColor='red'
        }else{
            cardId.style.borderColor='green'
        }
    }
    

});

logBtn.addEventListener('click', () => {
    let passInput = document.getElementById("passInput").value;
    console.log("Logging in with:", userInput.value, passInput);
});