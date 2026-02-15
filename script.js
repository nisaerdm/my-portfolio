const toggleButton = document.getElementById("themeToggle");

// Sayfa açılırken
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggleButton.textContent = "☀️";
} else {
  toggleButton.textContent = "🌙";
}

// Butona tıklanınca
toggleButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggleButton.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    toggleButton.textContent = "🌙";
  }
});
