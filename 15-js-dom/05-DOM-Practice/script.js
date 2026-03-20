

function calculatorOperation(){
    let btns = [
        ['1','2','3','+'],
        ['4','5','6','-'],
        ['7','8','9','*'],
        ['0','.','=','/']
    ];

    // let firstValue,secondValue,result;
    
    let bntArea = document.querySelector(".button-sec"); 

    for(let i=0; i<btns.length; i++){
        for(let j=0; j<btns[i].length; j++){

            let btn = document.createElement("input");
            btn.setAttribute("type","button");
            btn.setAttribute("value",`${btns[i][j]}`)
            btn.setAttribute("class","num-btn")

            btn.style.color = "#000"
            bntArea.appendChild(btn)
        }
    }

}