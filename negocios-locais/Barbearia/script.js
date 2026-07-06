document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const feedback = document.getElementById("feedback");
  const buttons = document.querySelectorAll(".contact-actions a");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (feedback) {
        feedback.textContent = `Você será direcionado para o canal ${button.dataset.label}.`;
      }
    });
  });
});
