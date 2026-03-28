
setTimeout(
function visiblePop() {
    let circleBox = document.getElementById("circle");
    let cardBox = document.getElementById("card");

    circleBox.style.visibility='visible';
    cardBox.style.visibility='visible';
},900)

function closePop(){
    let circleBox = document.getElementById("circle");
    let cardBox = document.getElementById("card");

    circleBox.style.visibility='hidden';
    cardBox.style.visibility='hidden';
}