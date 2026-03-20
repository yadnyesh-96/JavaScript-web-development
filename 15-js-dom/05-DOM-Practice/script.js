
let firstValue = "";
let choice = "";

function calculatorOperation() {
    let btns = [
        ['1', '2', '3', '+'],
        ['4', '5', '6', '-'],
        ['7', '8', '9', '*'],
        ['0', '.', '=', '/']
    ];



    let bntArea = document.getElementById("button-sec");

    for (let i = 0; i < btns.length; i++) {
        for (let j = 0; j < btns[i].length; j++) {

            let btn = document.createElement("input");
            btn.setAttribute("type", "button");
            btn.setAttribute("value", `${btns[i][j]}`)
            btn.setAttribute("class", "num-btn")

            btn.style.color = "#282828"

            btn.addEventListener("click", () => {
                let inputSec = document.getElementById("val-inp");
                let opVal = btns[i][j];

                if (opVal === '+' || opVal === '-' || opVal === '*' || opVal === '/') {
                    firstValue = inputSec.value;
                    choice = opVal;
                    inputSec.value = "";
                } else if (opVal === '=') {
                    let secondValue = inputSec.value;
                    let result;

                    let num1 = parseFloat(firstValue);
                    let num2 = parseFloat(secondValue);

                    switch (choice) {
                        case '+': result = num1 + num2; break;
                        case '-': result = num1 - num2; break;
                        case '*': result = num1 * num2; break;
                        case '/': result = num2 !== 0 ? num1 / num2 : "Error"; break;
                    }
                    inputSec.value = result;
                    firstValue = "";
                } else {
                    inputSec.value += opVal;
                }

            });

            bntArea.appendChild(btn)

        }
    }



}