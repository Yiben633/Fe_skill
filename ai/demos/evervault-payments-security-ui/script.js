const modal = document.querySelector("[data-modal]");
const drawerOverlay = document.querySelector("[data-drawer]");
const drawerPanel = document.querySelector("[data-drawer-panel]");
const modalOpeners = document.querySelectorAll("[data-open-modal]");
const drawerOpeners = document.querySelectorAll("[data-open-drawer]");
const modalClosers = document.querySelectorAll("[data-close-modal]");
const drawerClosers = document.querySelectorAll("[data-close-drawer]");

function openModal() {
  modal.hidden = false;
  document.body.classList.add("modal-open");
}

function closeModal() {
  modal.hidden = true;
  document.body.classList.remove("modal-open");
}

function openDrawer() {
  drawerOverlay.hidden = false;
  drawerPanel.hidden = false;
  document.body.classList.add("drawer-open");
}

function closeDrawer() {
  drawerOverlay.hidden = true;
  drawerPanel.hidden = true;
  document.body.classList.remove("drawer-open");
}

modalOpeners.forEach((button) => button.addEventListener("click", openModal));
drawerOpeners.forEach((button) => button.addEventListener("click", openDrawer));
modalClosers.forEach((button) => button.addEventListener("click", closeModal));
drawerClosers.forEach((button) => button.addEventListener("click", closeDrawer));
drawerOverlay.addEventListener("click", closeDrawer);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
    closeDrawer();
  }
});
