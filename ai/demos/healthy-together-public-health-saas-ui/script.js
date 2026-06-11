const triggers = document.querySelectorAll("[data-mega-trigger]");
const panels = document.querySelectorAll("[data-mega]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const navLinks = document.querySelector("[data-nav-links]");

function closeMega() {
  triggers.forEach((trigger) => trigger.classList.remove("is-active"));
  panels.forEach((panel) => panel.classList.remove("is-open"));
}

triggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const target = trigger.dataset.megaTrigger;
    const panel = document.querySelector(`[data-mega="${target}"]`);
    const willOpen = !panel?.classList.contains("is-open");
    closeMega();
    if (willOpen && panel) {
      trigger.classList.add("is-active");
      panel.classList.add("is-open");
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMega();
  }
});

menuToggle?.addEventListener("click", () => {
  const isOpen = navLinks?.classList.toggle("is-open") ?? false;
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});
