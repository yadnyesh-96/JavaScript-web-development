let t = document.getElementById("listTable")
let count = 0;
function addMyTask(){

    let dataInput = document.getElementById("taskInp");
    let InputData = dataInput.value;

    let trEle = document.createElement("tr");
    let tdEle1 = document.createElement("td");
    let tdEle2 = document.createElement("td");
    let tdEle3 = document.createElement("td");
    let tdEle4 = document.createElement("td");

    count+=1;
    tdEle1.innerHTML=count;
    tdEle2.innerHTML=InputData;
    tdEle3.innerHTML='<button class="MarkTask"><i class="fa-solid fa-list-check"></i>';
    tdEle4.innerHTML='<button class="MarkTask1"><i class="fa-solid fa-trash"></i></button>';

    trEle.appendChild(tdEle1)
    trEle.appendChild(tdEle2)
    trEle.appendChild(tdEle3)
    trEle.appendChild(tdEle4)

    t.appendChild(trEle)
}

