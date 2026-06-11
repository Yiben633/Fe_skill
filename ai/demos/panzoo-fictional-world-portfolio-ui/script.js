const loading = document.querySelector("[data-loading]");
const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector("[data-menu]");
const scrollbarThumb = document.querySelector(".scrollbar-thumb");
const pupils = document.querySelectorAll(".pupil");

window.addEventListener("load", () => {
  window.setTimeout(() => {
    loading.classList.add("is-hidden");
  }, 700);
});

menuButton.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

function updateScrollbar() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
  const track = window.innerHeight - 12;
  const height = Math.max(48, track * (window.innerHeight / document.documentElement.scrollHeight));
  scrollbarThumb.style.height = `${height}px`;
  scrollbarThumb.style.transform = `translateY(${(track - height) * progress}px)`;
}

function updateEyes(event) {
  pupils.forEach((pupil) => {
    const eye = pupil.parentElement.getBoundingClientRect();
    const centerX = eye.left + eye.width / 2;
    const centerY = eye.top + eye.height / 2;
    const angle = Math.atan2(event.clientY - centerY, event.clientX - centerX);
    const distance = eye.width * 0.18;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    pupil.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
  });
}

window.addEventListener("scroll", updateScrollbar, { passive: true });
window.addEventListener("resize", updateScrollbar);
window.addEventListener("pointermove", updateEyes);
updateScrollbar();
