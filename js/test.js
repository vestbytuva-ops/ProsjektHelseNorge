// Hent elementer fra DOM
const passwordCard = document.getElementById("password-card");
const passwordInput = document.getElementById("admin-password");
const submitButton = document.getElementById("submit-password");
const errorMessage = document.getElementById("error-message");

// Sett passord her
const correctPassword = "1234"; // <-- Bytt til ditt passord

// Funksjon for å sjekke passord
function checkPassword() {
    const enteredPassword = passwordInput.value;

    if (enteredPassword === correctPassword) {
        // Passord riktig
        errorMessage.style.display = "none";
        passwordCard.style.display = "none";

        // Her kan du vise dashboard på samme side
        const dashboard = document.getElementById("dashboard");
        if (dashboard) {
            dashboard.style.display = "block";
        } else {
            alert("Passord korrekt! Her kan du laste admin dashboard.");
        }

        // Nullstill input
        passwordInput.value = "";
    } else {
        // Passord feil
        errorMessage.style.display = "block";
        passwordInput.value = "";
    }
}

// Event listener på login-knapp
submitButton.addEventListener("click", checkPassword);

// Valgfritt: trykk Enter for å logge inn
passwordInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        checkPassword();
    }
});