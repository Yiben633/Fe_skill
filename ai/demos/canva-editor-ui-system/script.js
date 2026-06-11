const modal = document.querySelector(".modal-overlay");
const openModal = document.querySelector("[data-modal-open]");
const closeButtons = document.querySelectorAll("[data-modal-close], .modal-close");
const snackbar = document.querySelector(".snackbar");

function setModal(open) {
  modal.classList.toggle("is-open", open);
  if (open) {
    modal.querySelector("input").focus();
  } else {
    openModal.focus();
  }
}

openModal.addEventListener("click", () => setModal(true));

closeButtons.forEach((button) => {
  button.addEventListener("click", () => setModal(false));
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    setModal(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    setModal(false);
  }
});

setTimeout(() => {
  snackbar.classList.remove("is-visible");
}, 4500);
