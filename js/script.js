const progress = document.getElementById('progress');
const lines = document.querySelectorAll('.line');
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

// Hamburger meny som også funker på pc men også mobil
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
    document.body.style.overflow =
      nav.classList.contains('open') ? 'hidden' : 'auto';
  });

// Gjorde sånn at den lukkes hvis du trykker på den igjen
  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      document.body.style.overflow = 'auto';
    });
  });

// Skrolle effekter
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    progress.style.width = `${(scrollTop / docHeight) * 100}%`;

    lines.forEach(line => {
      const rect = line.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.7) {
        line.classList.add('active');
      }
    });
  });

// Mørkmodus og lysmodus
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const button = document.getElementById("themebutton");

  function updateTheme(isDark) {
    body.classList.toggle("dark-mode", isDark);
    button.textContent = isDark ? "☾" : "☀ ";
    localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
  }

  function darkMode() {
    const isDark = !body.classList.contains("dark-mode");
    updateTheme(isDark);
  }

  function initDarkMode() {
    const saved = localStorage.getItem("darkMode") === "enabled";
    updateTheme(saved);
  }

  initDarkMode();
  button.addEventListener("click", darkMode);
});

// Popup 

setTimeout(function () {
    document.getElementById("popup").style.display = "block";
    document.body.classList.add("no-scroll");
  }, 10000);

  document.getElementById("closeBtn").addEventListener("click", function () {
    document.getElementById("popup").style.display = "none";
    document.body.classList.remove("no-scroll");
  });
