
let countBtn = document.getElementById("countButton");
let countText = document.getElementById("dialer1");


let count = 0;


let counter = document.getElementById('count')

counter.innerHTML = count; 

function myCount(){
    count=count + 1;
    counter.innerHTML = count; 
    if(count===20){
        countBtn.disabled = true;
        countBtn.style.background = 'red'
        countBtn.style.border = '1px solid #F77F7F'
        countBtn.style.boxShadow = '0 0 5px red'
    }
}
