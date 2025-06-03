document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".topnav a");

    links.forEach(link => {
      link.addEventListener("click", function() {
        // Se elimina la clase 'active' de todos los enlaces
        links.forEach(el => el.classList.remove("active"));
        // Se añade la clase 'active' solo al que fue clicado
        this.classList.add("active");
        });
      });
    });