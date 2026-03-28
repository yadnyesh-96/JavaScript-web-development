
const cardId = document.getElementById("card");

const logBtn = document.getElementById("LoginBtn");


const userInput = document.getElementById("userInput");
userInput.addEventListener('keyup', () => {
    let str = userInput.value;
    let flag = false;
    let charCount = false;

    for (let i = 0; i < str.length; i++) {
        let chars = str.charCodeAt(i);
        if (!((chars >= 65 && chars <= 90) || (chars >= 97 && chars <= 122))) {
            flag = true;

            if (chars >= 48 || chars <= 57) {
                charCount = true;
                break;
            } else {
                charCount = false;
            }
            break;
        }
    }

    let warn = document.createElement("h2");
    warn.setAttribute("id", "warn");
    warn.innerHTML = "Invalid username only capital and small allowed"

    const myWarn = document.getElementById("warn");

    if (charCount) {
        userInput.insertAdjacentElement("afterend", warn)
    } else {
        myWarn.remove()
    }

    if (str.length == 0) {
        userInput.style.boxShadow = "none"
        myWarn.remove()
    } else if (flag) {
        userInput.style.boxShadow = "0 0 5px red";
        myWarn.remove()
    } else {
        userInput.style.boxShadow = "0 0 5px green";
        myWarn.remove()
    }
});

const upassInput = document.getElementById("passInput");
upassInput.addEventListener('keyup', () => {
    let passLength = upassInput.value
    if (passLength.length == 0) {
        upassInput.style.boxShadow = "none"
    } else if (passLength.length >= 6) {
        upassInput.style.boxShadow = "0 0 5px green";
    } else {
        upassInput.style.boxShadow = "0 0 5px red";
    }
})


logBtn.addEventListener('click', () => {
    let passInput = document.getElementById("passInput").value;
    console.log("Logging in with:", userInput.value, passInput);
});