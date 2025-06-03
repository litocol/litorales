document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.querySelector(".searcher");
  const searchMenu = document.querySelector(".search-menu");

  searchButton.addEventListener("click", () => {
    searchMenu.classList.toggle("search-menu-toggle");

    // Terminar funciones de búsqueda
  });
});
