let input = document.querySelector("input");
let button = document.querySelector("#add");
let todobox = document.querySelector(".todo-list");

button.addEventListener('click',()=>{
    const value = input.value;
    if(value.trim() ==="") return;

    todobox.innerHTML += `<div class="li">
                <h3>${value}</h3>
                <div>
                <button class="btn edit">Edit</button>
                <button class="btn delete">Delete</button>
                </div>
                </div>`
        input.value="";
})

