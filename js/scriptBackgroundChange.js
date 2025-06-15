document.addEventListener("DOMContentLoaded", () => {

  const docBody   = document.querySelector("body");
  const content   = document.querySelector(".content");
  const heroTitle = document.querySelector(".heroText .heroTitle")
                  || document.querySelector(".heroTextSubcontent .heroTitleSubcontent");
  const heroImg   = document.querySelector(".heroImage");
  const toggleBtn = document.querySelector(".contrastChange");

  if (!heroImg || !toggleBtn) return;

  const darkGradient  = "linear-gradient(rgba(51,51,51, 0.3), #393939)";
  const lightGradient = "linear-gradient(rgba(51,51,51, 0.3), rgb(238, 238, 238, 1))";

  let isLight = false; // estado inicial oscuro

  toggleBtn.addEventListener("click", () => {
    isLight = !isLight;

    const match = getComputedStyle(heroImg).backgroundImage.match(/url\(.*\)/);
    const currentUrl = match ? match[0] : '';

    if (!currentUrl) return; // evitar error si no hay imagen

    heroImg.style.backgroundImage = `${isLight ? lightGradient : darkGradient}, ${currentUrl}`;

    content?.classList.toggle("contentBackgroundToggle", isLight);
    heroTitle?.classList.toggle("heroTitleToggle", isLight);
    docBody?.classList.toggle("bodyBackgroundToggle", isLight);
  });
});



  /* ----------  adicionales nuevo despliegue ---------- */
  //const generalButton = document.querySelectorAll("button");
  //const topbara = document.querySelector(".topbar a");
  //const topnav = document.querySelector(".topnav");
  /*falta el botón del menú hamburguesa*/

  /* ----------  validaciones ---------- */

    // 3 ▸ adicionales a cambiar en nuevo despliegue
    //generalButton?.forEach(btn => {
    //btn.classList.toggle("buttonToggleBackgroundChange", isLight);
    //btn.addEventListener("click", () => {
      //btn.classList.toggle("active");
    //});
    // Cambiar el color de fondo del botón hamburguesa
    //topbara?.classList.toggle("topbaraToggleBackgroundChange", isLight);
    //topnav?.classList.toggle("topnavToggleBackgroundChange", isLight);