

const button = document.querySelector("button");

button.addEventListener("click", () =>{
    button.classList.toggle("loading");
})

/*
.loading {
  opacity: 0.5;
  pointer-events: none;
}
*/
