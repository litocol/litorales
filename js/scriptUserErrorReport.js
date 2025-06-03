document.addEventListener("DOMContentLoaded", function () {
  const reportCard = document.getElementById("reportCard");
  const closeButton = document.getElementById("closeButton");
  const cancelButton = document.getElementById("cancelButton");
  const sendButton = document.getElementById("submitButton")

  // Botón con ícono de advertencia
  const warningIcon = document.querySelector(".fa-exclamation-triangle");
  const reportButton = warningIcon?.closest("button");

  // Mostrar tarjeta al hacer clic en el ícono
  if (reportButton) {
    reportButton.addEventListener("click", () => {
      reportCard.classList.remove("hidden");
    });
  }

  // Ocultar tarjeta con la X
  closeButton?.addEventListener("click", () => {
    reportCard.classList.add("hidden");
  });

  // Ocultar tarjeta con el envío
  sendButton?.addEventListener("click", () => {
    reportCard.classList.add("hidden");
  });


  // Ocultar tarjeta con el botón Cancelar
  cancelButton?.addEventListener("click", () => {
    reportCard.classList.add("hidden");
  });
});


  