

const button = document.getElementById("btn");
const statusText = document.getElementById("status");
const factText = document.getElementById("fact");



async function getCatFact(){
    try{

        statusText.textContent = "Loading...";
        factText.textContent = "";

        const response = await fetch("https://catfact.ninja/fact");

        if(!response.ok){
            throw new Error("Network response failed");
        }

        const data = await response.json();
         factText.textContent = data.fact;
        statusText.textContent = "";
    }catch(error){
        statusText.textContent = "Failed to load cat fact.";
    }
}

button.addEventListener("click", getCatFact)

