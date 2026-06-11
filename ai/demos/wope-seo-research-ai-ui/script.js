const dropdownTrigger = document.querySelector("[data-dropdown-trigger]");
const dropdown = document.querySelector("[data-dropdown]");
const mobileToggle = document.querySelector("[data-mobile-toggle]");
const mobileNav = document.querySelector("[data-mobile-nav]");
const videoOpen = document.querySelector("[data-video-open]");
const videoClose = document.querySelector("[data-video-close]");
const videoModal = document.querySelector("[data-video-modal]");
const domainInput = document.querySelector("[data-domain-input]");
const demoButton = document.querySelector("[data-demo-button]");
const demoForm = document.querySelector("[data-demo-form]");

dropdownTrigger?.addEventListener("click", () => {
  dropdown?.classList.toggle("open");
});

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!target.closest("[data-dropdown]") && !target.closest("[data-dropdown-trigger]")) {
    dropdown?.classList.remove("open");
  }
});

mobileToggle?.addEventListener("click", () => {
  mobileNav?.classList.toggle("open");
});

videoOpen?.addEventListener("click", () => {
  videoModal?.classList.add("open");
  videoModal?.setAttribute("aria-hidden", "false");
});

videoClose?.addEventListener("click", () => {
  videoModal?.classList.remove("open");
  videoModal?.setAttribute("aria-hidden", "true");
});

domainInput?.addEventListener("input", () => {
  const value = domainInput.value.trim();
  demoButton.disabled = !value.includes(".") || value.length < 4;
});

demoForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  demoButton.textContent = "Scanning...";
  setTimeout(() => {
    demoButton.textContent = "Try Demo";
  }, 900);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
