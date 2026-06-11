const root = document.documentElement;
const shell = document.querySelector("[data-scroll-shell]");
const thumb = document.querySelector(".custom-scrollbar span");
const navLinks = document.querySelectorAll(".main-nav a");
const navIndicator = document.querySelector(".main-nav i");
const themeButtons = document.querySelectorAll("[data-theme-button]");
const menuButton = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const filterButtons = document.querySelectorAll("[data-filter]");
const workCards = document.querySelectorAll(".work-card");
const count = document.querySelector("[data-count]");

function setTheme(theme) {
  root.dataset.theme = theme;
}

themeButtons.forEach((button) => {
  button.addEventListener("click", () => setTheme(button.dataset.themeButton));
});

menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  mobileMenu.classList.toggle("is-open", !open);
  mobileMenu.setAttribute("aria-hidden", String(open));
});

function moveIndicator(link) {
  const nav = link.parentElement.getBoundingClientRect();
  const rect = link.getBoundingClientRect();
  navIndicator.style.width = `${rect.width - 8}px`;
  navIndicator.style.transform = `translateX(${rect.left - nav.left}px)`;
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => item.classList.toggle("is-active", item === link));
    moveIndicator(link);
  });
});

function filterWorks(kind) {
  let visible = 0;
  workCards.forEach((card) => {
    const show = kind === "all" || card.dataset.kind === kind;
    card.classList.toggle("is-hidden", !show);
    if (show) visible += 1;
  });
  count.textContent = `(${visible} Works)`;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    filterWorks(button.dataset.filter);
  });
});

function updateScrollbar() {
  const max = shell.scrollHeight - shell.clientHeight;
  const progress = max > 0 ? shell.scrollTop / max : 0;
  const track = window.innerHeight - 90;
  thumb.style.transform = `translateY(${progress * track}px)`;
}

shell.addEventListener("scroll", updateScrollbar, { passive: true });
window.addEventListener("resize", () => {
  const active = document.querySelector(".main-nav a.is-active");
  if (active) moveIndicator(active);
  updateScrollbar();
});

moveIndicator(document.querySelector(".main-nav a.is-active"));
updateScrollbar();
