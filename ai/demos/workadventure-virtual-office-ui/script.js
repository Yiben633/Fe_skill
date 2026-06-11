const tracker = document.querySelector(".menu-tracker");
const navLinks = Array.from(document.querySelectorAll(".nav-menu > .nav-menu-item > .nav-menu-item-link"));

function moveTracker(link) {
  if (!tracker || window.innerWidth < 980) return;
  const nav = link.closest(".nav-website");
  const linkRect = link.getBoundingClientRect();
  const navRect = nav.getBoundingClientRect();
  tracker.style.left = `${linkRect.left - navRect.left + 8}px`;
  tracker.style.width = `${Math.max(48, linkRect.width - 16)}px`;
}

navLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => moveTracker(link));
  link.addEventListener("focus", () => moveTracker(link));
});

if (navLinks.length) {
  moveTracker(navLinks[0]);
}
