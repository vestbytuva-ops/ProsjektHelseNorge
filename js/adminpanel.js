const adminPanel = document.querySelector(".admin-panel");
const adminPasswordInput = document.getElementById("admin-password");
const adminSubmitButton = document.getElementById("submit-password");
const adminErrorMessage = document.getElementById("error-message");
const noteCard = document.querySelector(".note-card");
const passwordCard = document.getElementById("password-card");
const moodLibrary = document.getElementById("mood-library");
const toDoList = document.getElementById("do-list");
const resetButton = document.getElementByClassName("reset");

// Login knapp
adminSubmitButton.addEventListener("click", () => {
    const password = adminPasswordInput.value.trim();

    if (password === "1234") {
        noteCard.style.display = "block";
        moodLibrary.style.display = "flex";
        adminErrorMessage.style.display = "none";
        passwordCard.style.display = "none";
        adminPanel.style.background = "#707D72";
        adminPasswordInput.value = "";
        toDoList.style.display="block";

    } else {
        adminErrorMessage.style.display = "block";
        adminPasswordInput.value = "";
    }
});

const moodButtons = document.querySelectorAll(".mood");

moodButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (getComputedStyle(noteCard).display === "block") {
            const mood = button.id;

            switch(mood) {
                case "school":
                    adminPanel.style.backgroundColor = "#FFD700";
                    break;
                case "job":
                    adminPanel.style.backgroundColor = "#87CEFA";
                    break;
                case "hobby":
                    adminPanel.style.backgroundColor = "#90EE90";
                    break;
                case "reset":
                    adminPanel.style.backgroundColor = "#707D72";
            }
        } else {
            console.log("Du kan kun bytte bakgrunn når notatkortet er synlig.");
        }
    });
});


// Shortcut tilbake til index
document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.shiftKey && event.key === "H") {
        event.preventDefault();
        window.location.href = "index.html";
    }
});

const addButton = document.getElementById("addTask");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

loadTasks();

function addTask () {
    const task = taskInput.value.trim();

    if(task){
        createTaskElement(task);

        taskInput.value = "";

    } else {
        alert("Hei Admin! Har du glemt å skrive noe på inputen?")
    }
}

addButton.addEventListener("click", addTask);


function createTaskElement(task){
    const listItem = document.createElement("li");
    listItem.textContent = task;

    taskList.appendChild(listItem);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteTask"
    listItem.appendChild(deleteButton);

    deleteButton.addEventListener("click", function(){
        taskList.removeChild(listItem);
        saveTasks();

    })
}

function saveTasks(){
    let tasks = [];
    taskList.querySelector("li").forEach(function(item){
    tasks.push(item.textContent.replace("Delete", "").trim());
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));


}


function loadTasks() {
    const tasks= JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(createTaskElement);

}

