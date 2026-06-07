function addTask(){

    const taskInput = document.getElementById("task-input");

    const taskText = taskInput.value.trim();

    if(taskText === ""){
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span onclick="toggleTask(this)">
            ${taskText}
        </span>

        <button onclick="deleteTask(this)">
            Delete
        </button>
    `;

    document.getElementById("task-list").appendChild(li);

    taskInput.value = "";
}

function deleteTask(button){

    button.parentElement.remove();
}

function toggleTask(task){

    if(task.style.textDecoration === "line-through"){
        task.style.textDecoration = "none";
    }else{
        task.style.textDecoration = "line-through";
    }
}