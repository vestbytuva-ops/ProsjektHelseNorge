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

const note = document.getElementById("note");

// Last inn lagret notat
note.innerHTML = localStorage.getItem("myNote") || "";

// Lagre notat
note.addEventListener("input", () => {
    localStorage.setItem("myNote", note.innerHTML);
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

const penButtons = document.querySelectorAll(".pen");
let activeFormats = new Set();

// Toggle formatting buttons
penButtons.forEach(button => {
    button.addEventListener("click", () => {
        const format = button.dataset.cmd;

        if (format === "normal") {
            activeFormats.clear();
            penButtons.forEach(b => b.classList.remove("active"));
            return;
        }

        if (activeFormats.has(format)) {
            activeFormats.delete(format);
            button.classList.remove("active");
        } else {
            activeFormats.add(format);
            button.classList.add("active");
        }
    });
});

// Typing with formatting
note.addEventListener("keydown", (e) => {
    if (activeFormats.size === 0) return;

    if (e.key.length === 1) {
        e.preventDefault();

        const selection = window.getSelection();
        if (!selection.rangeCount) return;

        const range = selection.getRangeAt(0);

        let wrapper = document.createTextNode(e.key);

        if (activeFormats.has("bold")) {
            const strong = document.createElement("strong");
            strong.appendChild(wrapper);
            wrapper = strong;
        }

        if (activeFormats.has("italic")) {
            const em = document.createElement("em");
            em.appendChild(wrapper);
            wrapper = em;
        }

        if (activeFormats.has("underline")) {
            const u = document.createElement("u");
            u.appendChild(wrapper);
            wrapper = u;
        }

        range.insertNode(wrapper);
        range.setStartAfter(wrapper);
        range.collapse(true);

        selection.removeAllRanges();
        selection.addRange(range);
    }
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
}



