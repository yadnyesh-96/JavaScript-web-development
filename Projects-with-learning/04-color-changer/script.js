
const boxs = document.querySelectorAll('.box');
const section = document.querySelector('.section');
const reset = document.querySelector('#reset');

reset.addEventListener('click',function (a){
    a.preventDefault();
    section.style.backgroundColor='grey';
})

boxs.forEach(function (box){
    box.addEventListener('click',function (b){
        if(b.target.id === 'red'){
            section.style.backgroundColor = "red";
        }
        if(b.target.id === 'green'){
            section.style.backgroundColor = b.target.id;
        }
        if(b.target.id === 'blue'){
            section.style.backgroundColor = b.target.id;
        }
        if(b.target.id === 'yellow'){
            section.style.backgroundColor = b.target.id;
        }
    })
})