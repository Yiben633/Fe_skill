const preloader = document.querySelector("[data-preloader]");
const navbar = document.querySelector("[data-navbar]");
const menu = document.querySelector("[data-menu]");
const toggle = document.querySelector("[data-menu-toggle]");
const links = document.querySelectorAll(".navbar__links a");
const revealItems = document.querySelectorAll(".reveal");

function setNavState() {
  navbar.classList.toggle("is-scrolled", window.scrollY > 12);
}

function closeMenu() {
  menu.classList.remove("is-open");
  navbar.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
}

window.addEventListener("load", () => {
  window.setTimeout(() => {
    preloader.classList.add("is-hidden");
  }, 850);
});

window.addEventListener("scroll", setNavState, { passive: true });
setNavState();

toggle.addEventListener("click", () => {
  const isOpen = !menu.classList.contains("is-open");
  menu.classList.toggle("is-open", isOpen);
  navbar.classList.toggle("is-open", isOpen);
  toggle.setAttribute("aria-expanded", String(isOpen));
});

links.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.18 }
);

revealItems.forEach((item) => observer.observe(item));
