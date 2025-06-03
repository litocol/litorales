document.addEventListener("DOMContentLoaded", () => {
    const buttonStyles = [
      "/css/buttonVariety/blueindigoActiveBut.css",
      "/css/buttonVariety/greenActiveBut.css",
      "/css/buttonVariety/orangeActiveBut.css",
      "/css/buttonVariety/pearActiveBut.css",
      "/css/buttonVariety/redActiveBut.css",
      "/css/buttonVariety/VioletActiveBut.css"
    ];

    const randomStyle = buttonStyles[Math.floor(Math.random() * buttonStyles.length)];

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = randomStyle;
    document.head.appendChild(link);
});