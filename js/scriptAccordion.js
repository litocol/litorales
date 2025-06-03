document.addEventListener("DOMContentLoaded", function () {
  var acc = document.getElementsByClassName("accordion");

  for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");

      var panel = this.nextElementSibling;
      var text = this.querySelector(".accordionText");
      var icon = this.querySelector(".accordionIcon");

      if (panel.style.maxHeight && panel.style.maxHeight !== "0px") {
        panel.style.maxHeight = null;
        text.textContent = "Expandir la lectura...";
        icon.classList.remove("fa-caret-down");
        icon.classList.add("fa-caret-right");
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        text.textContent = "Reducir la lectura...";
        icon.classList.remove("fa-caret-right");
        icon.classList.add("fa-caret-down");
      }
    });
  }
});
