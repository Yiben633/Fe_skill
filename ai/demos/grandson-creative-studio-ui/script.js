const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
const filters = document.querySelectorAll("[data-filter]");
const articles = document.querySelectorAll(".article-item");
const viewer = document.querySelector("[data-viewer]");
const openViewerButtons = document.querySelectorAll("[data-open-viewer]");
const closeViewerButton = document.querySelector("[data-close-viewer]");
const thumb = document.querySelector(".custom-scrollbar span");

menuButton.addEventListener("click", () => {
  const expanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!expanded));
  mobileMenu.setAttribute("aria-hidden", String(expanded));
});

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => item.classList.toggle("is-active", item === button));
    articles.forEach((article) => {
      const show = button.dataset.filter === "all" || article.dataset.category === button.dataset.filter;
      article.classList.toggle("is-hidden", !show);
    });
  });
});

openViewerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    viewer.classList.add("is-active");
    viewer.setAttribute("aria-hidden", "false");
  });
});

closeViewerButton.addEventListener("click", () => {
  viewer.classList.remove("is-active");
  viewer.setAttribute("aria-hidden", "true");
});

function updateScrollbar() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const progress = max > 0 ? window.scrollY / max : 0;
  const track = window.innerHeight - 140;
  thumb.style.transform = `translateY(${progress * track}px)`;
}

window.addEventListener("scroll", updateScrollbar, { passive: true });
window.addEventListener("resize", updateScrollbar);
updateScrollbar();
