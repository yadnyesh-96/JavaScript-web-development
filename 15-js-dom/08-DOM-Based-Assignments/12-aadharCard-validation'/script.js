
const myInput = document.getElementById('myInput');
const msg = document.getElementById('msg');



myInput.addEventListener('input', () => {
    let num = myInput.value
    if (num.length > 12) {
        msg.style.color = 'red'
        myInput.style.boxShadow = '0 0 6px red'
        msg.innerHTML = "Invalid aadhar number must be 12 digits"

    } 
    
    
    if(num.length==12){
        let flag = false;

        for (let i = 0; i < num.length; i++) {

            let ch = num.charCodeAt(i);
            if (ch >= 48 || ch <= 57) {
                flag = true;
                break;
            }

        }
        if (!flag) {
            msg.style.color = 'red'
            myInput.style.boxShadow = '0 0 6px red'
            msg.innerHTML = "Invalid aadhar number must be 12 digits"
        } else {
            msg.style.color = 'green'
            myInput.style.boxShadow = '0 0 6px green'
            msg.innerHTML = "valid aadhar number"
        }
    }

    if(num == " "){
         msg.style.color = 'none'
            myInput.style.boxShadow = 'none'
            msg.innerHTML = ""
    }


})
