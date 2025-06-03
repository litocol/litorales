document.addEventListener("DOMContentLoaded", () => {
  const langBtn = document.getElementById("langToggle");
  const langMenu = document.getElementById("languageMenu");
  const langButtons = langMenu.querySelectorAll("button");

  if (!langBtn || !langMenu) {
    console.warn("Faltan elementos en el DOM: langToggle o languageMenu");
    return;
  }

  // Mostrar/ocultar el menú
  langBtn.addEventListener("click", () => {
    langBtn.classList.toggle("active");
    langMenu.classList.toggle("language-menu-toggle");
  });

  langButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Lógica para activar el idioma seleccionado
      langButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      // Ocultar el menú
      langMenu.classList.remove("language-menu-toggle");
    });
  });
});