const adminPanel = document.querySelector(".admin-panel");
const adminPasswordInput = document.getElementById("admin-password");
const adminSubmitButton = document.getElementById("submit-password");
const adminErrorMessage = document.getElementById("error-message");
const passwordCard = document.getElementById("password-card");
const moodLibrary = document.getElementById("mood-library");
const addButton = document.getElementById("addTask");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const toDoList = document.getElementById("do-list");


// Login knapp
adminSubmitButton.addEventListener("click", () => {
    const password = adminPasswordInput.value.trim();

    if (password === "1234") {
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
        if (getComputedStyle(toDoList).display === "block") {
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
    deleteButton.className = "deleteTask";
    listItem.appendChild(deleteButton);

    deleteButton.addEventListener("click", function(){
        taskList.removeChild(listItem);
        saveTasks();

    deleteButton.addEventListener("click", function(){
        taskList.removeChild(listItem);
    } )
    });

    saveTasks(); // lagre hver gang en task legges til
}

function saveTasks(){
    let tasks = [];
    taskList.querySelectorAll("li").forEach(function(item){
    tasks.push(item.textContent.replace("Delete", "").trim());
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));


}


function loadTasks() {
    const tasks= JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(createTaskElement);

}

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();

    document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
    document.getElementById("date").textContent = `${day}.${month}.${year}`;
}

setInterval(updateClock, 1000);
updateClock();