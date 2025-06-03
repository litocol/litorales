document.addEventListener("DOMContentLoaded", function () {
  const content = document.querySelector(".content");
  const toggleButton = document.getElementById("fontToggleButton");

  toggleButton.addEventListener("click", () => {
    content.classList.toggle("contentSizeToggle");

    const icon = toggleButton.querySelector(".toggle-icon"); // ícono que se modifica
    if (icon.classList.contains("fa-plus")) {
      icon.classList.replace("fa-plus", "fa-minus");
    } else {
      icon.classList.replace("fa-minus", "fa-plus");
    }
  });
});