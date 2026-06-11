const nav = document.querySelector("#site-nav");
const menuButton = document.querySelector(".nav-button--burger");
const searchButton = document.querySelector(".nav-button--search");
const overlayNav = document.querySelector("#overlay-nav");
const overlaySearch = document.querySelector("#overlay-search");
const searchInput = document.querySelector(".overlay-search__input input");
const footerLogo = document.querySelector(".footer__logo");

function closeOverlays() {
  nav.classList.remove("is-open", "is-searching");
  document.body.classList.remove("is-locked");
  menuButton.setAttribute("aria-expanded", "false");
  searchButton.setAttribute("aria-expanded", "false");
  overlayNav.classList.remove("is-hidden");
  overlaySearch.classList.add("is-hidden");
}

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  nav.classList.remove("is-searching");
  document.body.classList.toggle("is-locked", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  searchButton.setAttribute("aria-expanded", "false");
  overlayNav.classList.remove("is-hidden");
  overlaySearch.classList.add("is-hidden");
});

searchButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-searching");
  nav.classList.remove("is-open");
  document.body.classList.toggle("is-locked", isOpen);
  searchButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-expanded", "false");
  overlayNav.classList.add("is-hidden");
  overlaySearch.classList.remove("is-hidden");

  if (isOpen) {
    window.setTimeout(() => searchInput.focus(), 80);
  }
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", closeOverlays);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeOverlays();
  }
});

footerLogo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
