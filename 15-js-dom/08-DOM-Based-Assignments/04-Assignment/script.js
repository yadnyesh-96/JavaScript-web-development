

let textArea = document.getElementById("extractText");



function getText() {
    let getData = document.getElementById("inputBox");

    let dataContainer = getData.value;
    let dataHolder = document.createElement('p');

    if(dataContainer.length===0){
        getData.style.borderColor="red"
        getData.style.boxShadow = "0 0 5px red";

    }else{
     dataHolder.innerHTML =dataContainer;
     getData.style.borderColor="green"
     getData.style.boxShadow = "0 0 5px green";
    }

    textArea.appendChild(dataHolder);
}   