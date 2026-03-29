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
        return `${stateName} (unknown RTO : ${stateCode}-${rtoCode})`;
    }

    return `${stateName} ${city} ${stateCode} ${rtoCode}`;
}

let mydata = verifyCode("MH16");
console.log(mydata)
// function valididateCard(){
//     const licenInput = document.getElementById("licenInput");
//     let data = licenInput.value
//     if(data.length>2){
//         alert("Not accepted")
//     }
// }


const licenInput = document.getElementById("licenInput");
licenInput.addEventListener('keyup', () => {

    let data = licenInput.value



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
            licenInput.value = " "
        } else {
            h2check.remove()

        }
    } else {
        h2check.remove()

    }



})






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