const adminPanel = document.querySelector(".admin-panel");
const adminPasswordInput = document.getElementById("admin-password");
const adminSubmitButton = document.getElementById("submit-password");
const adminErrorMessage = document.getElementById("error-message");
const noteCard = document.querySelector(".note-card");
const textarea = document.getElementById("note");
const passwordCard = document.getElementById("password-card");
const moodLibrary = document.getElementById("mood-library");

// Login knapp
adminSubmitButton.addEventListener("click", () => {
    const password = adminPasswordInput.value.trim();

    if (password === "1234") {
        noteCard.style.display = "block";       // vis note-card
        moodLibrary.style.display = "flex";     // vis mood-knapper
        adminErrorMessage.style.display = "none";
        passwordCard.style.display = "none";    // skjul login
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
        // Sjekk om noteCard vises
        if (noteCard.style.display === "block") {
            const mood = button.id;

            switch(mood) {
                case "school":
                    adminPanel.style.backgroundColor = "#FFD700"; // gull
                    break;
                case "job":
                    adminPanel.style.backgroundColor = "#87CEFA"; // lys blå
                    break;
                case "hobby":
                    adminPanel.style.backgroundColor = "#90EE90"; // lys grønn
                    break;
                case "reset":
                    adminPanel.style.backgroundColor =  "#707D72";
            }
        } else {
            console.log("Du kan kun bytte bakgrunn når notatkortet er synlig.");
        }
    });
});

const penButtons = document.querySelectorAll(".pen");

penButtons.forEach(button => {
    button.addEventListener("click", () => {
        const format = button.dataset.cmd;
        const selection = window.getSelection();

        if (!selection.rangeCount || selection.isCollapsed) return;

        const range = selection.getRangeAt(0);

        let wrapper;
        switch(format) {
            case "bold":
                wrapper = document.createElement("strong");
                break;
            case "italic":
                wrapper = document.createElement("em");
                break;
            case "underline":
                wrapper = document.createElement("u");
                break;
        }

        if (wrapper) {
            range.surroundContents(wrapper);
            selection.removeAllRanges();
        }
    });
});