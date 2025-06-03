document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".topSideBar");
    const sideNav = document.querySelector(".sideNav");
    const cont = document.querySelector(".content");
    const bread1 = document.querySelector(".breadcrumbs");
  
    if (sidebar && sideNav && cont && bread1) {
      sidebar.addEventListener("click", () => {
        sidebar.classList.toggle("toggleSideBarClass");
        sideNav.classList.toggle("toggleSideOk");
        cont.classList.toggle("contentToggleSidebar");
        bread1.classList.toggle("breadcrumbToggle");
      });
    }
  });