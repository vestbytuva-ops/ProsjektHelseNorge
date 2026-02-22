const adminPanel = document.querySelector(".admin-panel");
const adminPasswordInput = document.getElementById("admin-password");
const adminSubmitButton = document.getElementById("submit-password");
const adminErrorMessage = document.getElementById("error-message");
const noteCard = document.querySelector(".note-card");
const passwordCard = document.getElementById("password-card");
const moodLibrary = document.getElementById("mood-library");

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
    } else {
        adminErrorMessage.style.display = "block";
        adminPasswordInput.value = "";
    }
});

const note = document.getElementById("note");

note.innerHTML = localStorage.getItem("myNote") || "";

note.addEventListener("input", () => {
    localStorage.setItem("myNote", note.innerHTML);
});

const moodButtons = document.querySelectorAll(".mood");

moodButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (noteCard.style.display === "block") {
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
let activeFormat = null;

penButtons.forEach(button => {
    button.addEventListener("click", () => {
        const format = button.dataset.cmd;

        penButtons.forEach(b => b.classList.remove("active"));

        if (activeFormat === format) {
            activeFormat = null;
            return;
        }

        activeFormat = format;
        button.classList.add("active");
    });
});

note.addEventListener("keydown", (e) => {
    if (!activeFormat) return;

    if (e.key.length === 1) {
        e.preventDefault();

        const tag = activeFormat === "bold" ? "strong" : activeFormat === "italic" ? "em" : "u";
        const wrapper = document.createElement(tag);
        wrapper.textContent = e.key;

        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
        range.insertNode(wrapper);
        range.setStartAfter(wrapper);
        range.collapse(true);
        selection.removeAllRanges();
        selection.addRange(range);
    }
});

document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.shiftKey && event.key === "H") {
        window.location.href = "index.html";
    }
});