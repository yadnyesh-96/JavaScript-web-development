

const card = document.getElementById("profilecard");
const nameE1 = document.getElementById("name");
const roleE1 = document.getElementById("role");
const detailsE1 = document.getElementById("details");

const toggleDetailsBtn = document.getElementById("toggleDetails");
const toggleThemeBtn = document.getElementById("toggleTheme");
const changeNameBtn = document.getElementById("changeName");

toggleDetailsBtn.addEventListener("click", () =>{
    detailsE1.classList.toggle("hidden");
});

// classList.toggle = state switch 
// No inline css 
// CSS controls layout

changeNameBtn.addEventListener("click", () =>{
    nameE1.textContent = "DOM Projects";
});


toggleThemeBtn.addEventListener("click", ()=>{
    const currentTheme = card.dataset.theme;  // dataset stores state
    if(currentTheme === 'light'){
        card.classList.add("dark");
        card.dataset.theme = "dark";
    }else{
        card.classList.remove("dark");
        card.dataset.theme = "light";
    }
});

/*
dataset stores state
classList controls appearance
JS does NOT decide colors
CSS does NOT decide logic
*/