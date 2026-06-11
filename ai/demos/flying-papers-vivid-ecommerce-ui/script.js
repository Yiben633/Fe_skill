const ageGate = document.querySelector("[data-age-gate]");
const confirmAgeButton = document.querySelector("[data-confirm-age]");
const menuButton = document.querySelector("[data-menu-button]");
const menuPanel = document.querySelector("[data-menu-panel]");

confirmAgeButton?.addEventListener("click", () => {
  ageGate?.classList.add("is-hidden");
});

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.classList.toggle("is-open");
  menuPanel?.classList.toggle("is-open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".menu-panel a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton?.classList.remove("is-open");
    menuPanel?.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

const scenarioObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.style.setProperty("--visible", entry.isIntersecting ? "1" : "0");
    });
  },
  { threshold: 0.35 }
);

document.querySelectorAll(".scenario").forEach((section) => {
  scenarioObserver.observe(section);
});
