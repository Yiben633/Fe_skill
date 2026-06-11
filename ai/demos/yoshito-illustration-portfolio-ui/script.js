const loading = document.querySelector("[data-loading]");
const progress = document.querySelector(".loading-progress span");
const menu = document.querySelector(".menu-pill");
const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".work-card");
const scrollbarThumb = document.querySelector(".scrollbar span");

requestAnimationFrame(() => {
  progress.style.width = "100%";
});

window.addEventListener("load", () => {
  window.setTimeout(() => {
    loading.classList.add("is-hidden");
  }, 700);
});

menu.addEventListener("click", () => {
  const expanded = menu.getAttribute("aria-expanded") === "true";
  menu.setAttribute("aria-expanded", String(!expanded));
});

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filters.forEach((item) => item.classList.toggle("is-active", item === button));
    cards.forEach((card) => {
      card.classList.toggle("is-hidden", filter !== "all" && card.dataset.kind !== filter);
    });
  });
});

function updateScrollbar() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progressValue = scrollable > 0 ? window.scrollY / scrollable : 0;
  const track = window.innerHeight - 80;
  scrollbarThumb.style.transform = `translateY(${Math.max(0, track * progressValue)}px)`;
}

window.addEventListener("scroll", updateScrollbar, { passive: true });
window.addEventListener("resize", updateScrollbar);
updateScrollbar();
