document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".extraButtons button");

    links.forEach(link => {
      link.addEventListener("click", function() {
        // Se elimina la clase 'active' de todos los enlaces
        links.forEach(el => el.classList.remove("active"));
        // Se añade la clase 'active' solo al que fue clicado
        this.classList.add("active");

        // Acción por nombre del botón
      const text = this.textContent.trim();

      if (text === "Cambiar fondo") {
        document.body.style.backgroundColor = "#cceeff"; // solo un ejemplo
      } else if (text === "Me gusta") {
        alert("¡Gracias por tu apoyo!");
      } else if (text === "Solo lectura") {
        document.querySelector(".content").contentEditable = false;
        alert("Modo solo lectura activado");
      } else if (text === "Saber más") {
        window.location.href = "#resumen";
      } else if (text === "Repositorio") {
        window.open("https://github.com/tu-repo", "_blank");
      }
    });
  });
});