
let count = 0;
function addMyTask(){

    let dataInput = document.getElementById("taskInp");
    let InputData = dataInput.value;

    let trEle = document.createElement("tr");
    let tdEle1 = document.createElement("td");
    let tdEle2 = document.createElement("td");
    let tdEle3 = document.createElement("td");
    let tdEle4 = document.createElement("td");


    tdEle1.innerHTML=count+1;
    tdEle2.innerHTML=InputData;
    tdEle3.innerHTML='<button class="MarkTask"><i class="fa-solid fa-list-check"></i>';
    tdEle4.innerHTML='<button class="MarkTask"><i class="fa-solid fa-list-check"></i>';


}