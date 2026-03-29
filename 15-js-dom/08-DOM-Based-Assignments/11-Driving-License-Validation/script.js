const rtoMap = {
    MH: {  //rtoMap["MH"].code["01"]
        name: "Maharashtra",
        codes: {
            "01": "Mumbai Central",
            "02": "Mumbai West",
            "03": "Mumbai East",
            "04": "Thane",
            "12": "Pune",
            "14": "Pimpri-Chinchwad",
            "15": "Nashik",
            "16": "Ahmednagar",
            "17": "Shrirampur"
        }
    },
    DL: {
        name: "Delhi",
        codes: {
            "01": "Mall Road",
            "02": "Tilak Marg",
            "03": "Sheikh Sarai"
        }
    }
};



function verifyCode(dataInput) {
    const cleandata = dataInput.replace(/\s+/g, "").toUpperCase();

    const stateCode = cleandata.slice(0, 2);
    const rtoCode = cleandata.slice(2, 4);

    if (!rtoMap[stateCode]) {
        return "Invalid State"
    }

    const stateName = rtoMap[stateCode].name // rtoMap["MH"]name == MH name = Maharashtra
    const city = rtoMap[stateCode].codes[rtoCode] // rtoMap["DL"].codes["01"]

    if (!city) {
        return `${stateName}  ( unknown RTO : ${stateCode}-${rtoCode} )`;
    }

    return `${stateName} ${city} ${stateCode} ${rtoCode}`;
}

// let mydata = verifyCode("MH16");
// console.log(mydata)
// function valididateCard(){
//     const licenInput = document.getElementById("licenInput");
//     let data = licenInput.value
//     if(data.length>2){
//         alert("Not accepted")
//     }
// }


const licenInput = document.getElementById("licenInput");
licenInput.addEventListener('input', () => {

    let data = licenInput.value

    // let digitFlag = false;
    // for (let i = 3; i < data.length; i++) {
    //     let ch = data.charCodeAt(i);

    //     if (ch < 48 || ch > 57) {
    //         digitFlag = true;
    //         break;
    //     }
    // }
    // if (digitFlag) {
    //     licenInput.style.boxShadow = '0 0 6px red'
    // }else{
    //      licenInput.style.boxShadow = '0 0 6px red'
    // }


    let h2check = document.getElementById('h2check');

    if (data.length >= 16) {
        if (!h2check) {
            let war = document.createElement('h2');
            war.id = 'h2check'
            war.style.color = 'red'
            war.style.fontSize = '1em'
            war.style.fontWeight = 'lighter'
            war.style.letterSpacing = '1px'
            war.style.marginTop = '5px'
            war.innerHTML = 'Input shold be digits 16 digits ex.MH1420230012345';
            licenInput.insertAdjacentElement('afterend', war)
            licenInput.style.boxShadow = '0 0 6px red'

        }
    } else {
        if (h2check) {
            h2check.remove();
        }
        licenInput.style.boxShadow = 'none';
    }
})


function valididateCard() {
    let checkBtn = document.getElementById('checkBtn')
    let data = licenInput.value
    let isValid = /^[A-Z]{2}[0-9]{2}[A-Z]{1,2}[0-9]{4}$/.test(data)
    if (isValid) {
        let myOutput = document.getElementById('myOutput')
        let output = verifyCode(data.slice(0, 4))
        if (!myOutput) {
            let myoutput = document.createElement('p');
            myoutput.id = 'myOutput'
            myoutput.innerHTML = output

            let data = output
            let myWord = data.split(" ")
            let flag = false;
            for (let i = 0; i < myWord.length; i++) {
                if (myWord[i] === "unknown") {
                    flag = true;
                    break;
                }
            }
            if (flag) {
                myoutput.style.color = 'red'
            } else {
                myoutput.style.color = 'green'
                licenInput.style.boxShadow = '0 0 6px green'
            }

            // myoutput.style.color='green'
            checkBtn.insertAdjacentElement('afterend', myoutput)
        } else {
            myOutput.remove()
        }

    }

}

function makeWar(checkdata, tagId, word) {
    let mycheck = checkdata.split(" ");
    let flag = false;
    for (let i = 0; i < mycheck.length; i++) {
        if (mycheck[i] === `${word}`) {
            flag = true
            break;
        }
    }
    if (flag) {
        tagId.style.color = 'red'
    }

}


/*
👉 Indian DL format example:

MH14 20230012345
Rules:
First 2 → State code (MH, DL, KA…)
Next 2 → RTO code (numbers)
Next 4 → Year
Last digits → unique number

👉 You should validate:

Length
Pattern (use regex)
No special characters (except space)
*/