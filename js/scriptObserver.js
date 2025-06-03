document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".sideNav a");
    const sections = Array.from(links).map(link => document.querySelector(link.getAttribute("href")));
  
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Remover "active" de todos
            links.forEach(link => link.classList.remove("active"));
            // Agregar "active" al enlace correspondiente
            const activeLink = document.querySelector(`.sideNav a[href="#${entry.target.id}"]`);
            if (activeLink) {
              activeLink.classList.add("active");
            }
          }
        });
      },
      {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0.6, // 60% visible
      }
    );
  
    sections.forEach(section => {
      if (section) {
        observer.observe(section);
      }
    });
  });