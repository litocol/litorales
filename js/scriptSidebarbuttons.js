document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".sideNav a");

    function setActive(linkToActivate) {
        links.forEach(el => el.classList.remove("active"));
        linkToActivate.classList.add("active");
      }
    
      // Asignar evento a cada link
      links.forEach(link => {
        link.addEventListener("click", function () {
          setActive(this);
        });
      });
    
      // Activar link correcto si hay hash en la URL
      if (window.location.hash) {
        const hashLink = document.querySelector(`.sideNav a[href="${window.location.hash}"]`);
        if (hashLink) {
          setActive(hashLink);
        }
      }
    });