const root = document.documentElement;
const toggle = document.querySelector(".theme-toggle");

toggle?.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = nextTheme;
  toggle.textContent = nextTheme === "dark" ? "Light" : "Dark";
  toggle.setAttribute("aria-pressed", String(nextTheme === "dark"));
});
