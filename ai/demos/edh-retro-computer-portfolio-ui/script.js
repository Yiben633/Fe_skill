const root = document.documentElement;
const nav = document.querySelector(".site-nav");
const menuToggle = document.querySelector("#menu-toggle");
const menuLinks = document.querySelectorAll(".menu-body a");
const loading = document.querySelector("#loading");
const loadingProgress = document.querySelector("#loading-bar-progress");

function setMenu(open) {
  nav.classList.toggle("active", open);
  menuToggle.setAttribute("aria-expanded", String(open));
}

menuToggle.addEventListener("click", () => {
  setMenu(!nav.classList.contains("active"));
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

document.querySelectorAll(".collapse-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const collapsed = button.dataset.collapsed === "true";
    button.dataset.collapsed = String(!collapsed);
    button.textContent = collapsed ? "less..." : "more...";
  });
});

function updateScrollState() {
  root.dataset.scroll = window.scrollY > 24 ? "true" : "false";
}

window.addEventListener("scroll", updateScrollState, { passive: true });
updateScrollState();

requestAnimationFrame(() => {
  loadingProgress.style.transform = "scaleX(1)";
});

window.addEventListener("load", () => {
  setTimeout(() => {
    loading.classList.add("is-hidden");
  }, 850);
});
