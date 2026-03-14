

const todoApp = document.getElementById("todoApp");

const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

todoForm.addEventListener("submit",(e)=>{
    e.preventDefault(); // stops page relod.
     const textData = todoInput.value.trim();
    if(textData === ""){
        return; // do nothing for empty input
    }

    addTodo(textData);
     todoInput.value=""; // reset Input
})

function addTodo(text){

    const l1 = document.createElement("li");

    const li = document.createElement("li");
    li.textContent = text;

    const btn = document.createElement("button");
    btn.innerHTML = "Delete";

    li.appendChild(btn)
    todoList.appendChild(li);

    btn.addEventListener("clcick")
}


