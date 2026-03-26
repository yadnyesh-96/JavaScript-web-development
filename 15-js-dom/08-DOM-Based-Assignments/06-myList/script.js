let addBtn = document.getElementById("addBtn");
let inputData = document.getElementById("inputField");
let list = document.getElementById("ulTag");

addBtn.addEventListener('click',()=>{
    const text = inputData.value.trim();

    if(text!==""){
        const li = document.createElement('li');
        li.textContent = text;
        list.appendChild(li);


        inputData.value = "";
        inputData.focus();  // Put cursor back in box
    }else{
        inputData.style.border='red'
        inputData.style.boxShadow = '0 0 5px red'
    }
})

inputData.addEventListener('keypress',(e)=>{
    if(e.key==='Enter'){
        addBtn.click();
        inputData.style.border='red'
        inputData.style.boxShadow = '0 0 5px red'
    }
})