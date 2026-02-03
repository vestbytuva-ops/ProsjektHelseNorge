document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("admin-overlay");
  const panel = document.getElementById("admin-panel");

  document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.shiftKey && event.key === "A") {
      openAdmin();
    }

    if (event.key === "Escape") {
      closeAdmin();
    }
  });

  function openAdmin() {
    fetch("admin.html")
      .then(res => console.log(res))
      // .then(res => res.text())
      .then(html => {
        console.log(panel);
        console.log(overlay);
        panel.innerHTML = html;
        overlay.style.display = "block";
      });
  }

  function closeAdmin() {
    overlay.style.display = "none";
  }
});