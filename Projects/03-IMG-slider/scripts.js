
let prevBtn = document.querySelector("#prevBtn");
let nextBtn = document.querySelector("#nextBtn");
let img = document.querySelector("#img");

let imgs=[
    "https://picsum.photos/id/101/300/200",
    "https://picsum.photos/id/102/300/200",
    "https://picsum.photos/id/103/300/200",
    "https://picsum.photos/id/104/300/200"
];

let index = 0;
img.src=imgs[index];

prevBtn.addEventListener("click", function(){
    index++;

    if(index>=imgs.length){
        index=0;
    }
    img.src=imgs[index];
    /*
    setInterval(function () {
        index++;
        if (index >= imgs.length) {
            index = 0;
        }
        img.src = imgs[index];
    }, 500);
    */
})

nextBtn.addEventListener("click", function(){
    index--;
    if(index<0){
        index=imgs.length-1;
    }

    img.src=imgs[index];
})