document.addEventListener("DOMContentLoaded", function() {
  // Selecciona el botón que contiene el ícono .fa-wrench
  const button = document.querySelector(".wrench-btn");
  const maxDistance = 500;  // Distancia a partir de la cual el botón es invisible
  let lastMouseTime = Date.now();
  let lastMouseX = 0;
  let lastMouseY = 0;

  const distanceToRect = (x, y, rect) => {
    const dx = Math.max(rect.left - x, 0, x - rect.right);
    const dy = Math.max(rect.top - y, 0, y - rect.bottom);
    return Math.hypot(dx, dy);
  };

  const clamp = (val, min, max) => Math.max(min, Math.min(max, val));

  function handleMove(e) {
    lastMouseTime = Date.now();
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;

    const rect = button.getBoundingClientRect();
    const dist = distanceToRect(e.clientX, e.clientY, rect);
    const t = clamp(1 - dist / maxDistance, 0, 1);

    button.style.opacity = t;
    button.style.pointerEvents = "auto";
    button.classList.remove("flash");
  }

  function checkInactivity() {
    const now = Date.now();
    const elapsed = now - lastMouseTime;

    if (elapsed > 10000 && !button.classList.contains("flash")) {
      button.style.opacity = 0.0;
      button.style.pointerEvents = "auto";
      button.classList.add("flash");
    }
  }

  button.addEventListener("animationend", () => {
    button.classList.remove("flash");

    // Restaurar visibilidad normal tras la animación
    const rect = button.getBoundingClientRect();
    const dist = distanceToRect(lastMouseX, lastMouseY, rect);
    const t = clamp(1 - dist / maxDistance, 0, 1);
    button.style.opacity = t;
    button.style.pointerEvents = t > 0.05 ? "auto" : "none";
  });

  document.addEventListener("mousemove", handleMove);
  setInterval(checkInactivity, 1000);

  // El resto de tu código para el toggle del botón:
  const dropped = document.querySelector(".dropWrench");
  const cont = document.querySelector(".content");

  button.addEventListener("click", function() {
    if (!button.classList.contains("active")) {
      button.style.paddingBottom = "3px";
      button.classList.add("active");

      const brake = document.createElement('br');
      button.appendChild(brake);

      const caretDown = document.createElement('i');
      caretDown.classList.add("fas", "fa-caret-down");
      button.appendChild(caretDown);

      dropped.classList.toggle("dropWrenchtoggle");
      cont.classList.toggle("contentToggleDropWrench");
    } else {
      button.classList.remove("active");
      button.style.paddingBottom = "";

      const brake = button.querySelector('br');
      if (brake) brake.remove();

      const caretDown = button.querySelector(".fa-caret-down");
      if (caretDown) caretDown.remove();

      dropped.classList.toggle("dropWrenchtoggle");
      cont.classList.toggle("contentToggleDropWrench");
    }
  });
});
