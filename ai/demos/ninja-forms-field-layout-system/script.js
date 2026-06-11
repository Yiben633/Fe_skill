const spinnerButton = document.querySelector("#showSpinner");
const spinnerSlot = document.querySelector("#spinnerSlot");
const form = document.querySelector("#demoForm");
const removeButtons = document.querySelectorAll(".nf-remove-fieldset");

spinnerButton?.addEventListener("click", () => {
  spinnerSlot.hidden = false;
  window.setTimeout(() => {
    spinnerSlot.hidden = true;
  }, 1400);
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  spinnerSlot.hidden = false;
  window.setTimeout(() => {
    spinnerSlot.hidden = true;
  }, 1200);
});

removeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const fieldset = button.closest("fieldset");
    fieldset?.classList.toggle("is-marked");
  });
});
