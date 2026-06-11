const header = document.querySelector("[data-header]");
const toggle = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("[data-menu]");
const megaTrigger = document.querySelector("[data-mega-trigger]");
const megaItem = megaTrigger.closest(".level1-item");

function setHeaderScrollState() {
  header.classList.toggle("is-scrolled", window.scrollY > 8);
}

function setMenuOpen(isOpen) {
  menu.classList.toggle("is-open", isOpen);
  header.classList.toggle("is-open", isOpen);
  toggle.setAttribute("aria-expanded", String(isOpen));
}

window.addEventListener("scroll", setHeaderScrollState, { passive: true });
setHeaderScrollState();

toggle.addEventListener("click", () => {
  setMenuOpen(!menu.classList.contains("is-open"));
});

megaTrigger.addEventListener("click", () => {
  if (window.matchMedia("(max-width: 980px)").matches) {
    megaItem.classList.toggle("is-active");
  }
});

megaItem.addEventListener("mouseenter", () => {
  if (!window.matchMedia("(max-width: 980px)").matches) {
    header.classList.add("is-open");
  }
});

megaItem.addEventListener("mouseleave", () => {
  if (!window.matchMedia("(max-width: 980px)").matches) {
    header.classList.remove("is-open");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuOpen(false);
    megaItem.classList.remove("is-active");
    header.classList.remove("is-open");
  }
});
