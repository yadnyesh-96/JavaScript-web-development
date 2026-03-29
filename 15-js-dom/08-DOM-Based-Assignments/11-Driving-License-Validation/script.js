const rtoMap = {
    MH: {
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

// let data = verifyCode("MH51");  

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

    if (data.length>5) {
        alert("Not accepted")
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