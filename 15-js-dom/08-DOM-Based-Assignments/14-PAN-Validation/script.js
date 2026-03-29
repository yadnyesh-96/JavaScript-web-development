
const myInput = document.getElementById('myInput');
const msg = document.getElementById('msg');
function validPan() {
    let data = myInput.value.toUpperCase();

    if (data.length == 10) {
        let flag = false;
        // to check not in capital alphabets 
        for (let i = 0; i <= 4; i++) {
            let ch = data.charCodeAt(i)
            if (!(ch >= 65 && ch <= 90)) {
                flag = true;
                break;
            }
        }
        // to check not in digits 
        for (let i = 5; i <= 8; i++) {
            let ch = data.charCodeAt(i)
            if (!(ch >= 48 && ch <= 57)) {
                flag = true;
                break;
            }
        }

        let last = data.charCodeAt(9);
        if (!(last >= 65 && last <= 90)) {
            flag = true;
        }

        if (flag) {
            msg.innerHTML = "Invalid PAN"
            msg.style.color = 'red'
        } else {
            msg.innerHTML = "Valid PAN number"
            msg.style.color = 'green'
        }
    }

}