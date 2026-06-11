const loader = document.getElementById("loader");
const dotCursor = document.getElementById("dotCursor");

window.addEventListener("load", () => {
  window.setTimeout(() => loader.classList.add("loaded"), 450);
  document.querySelectorAll("[data-animate-title]").forEach((title) => {
    title.querySelectorAll(".letter").forEach((letter, index) => {
      window.setTimeout(() => letter.classList.add("active"), 80 + index * 45);
    });
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll(".reveal").forEach((item) => revealObserver.observe(item));

if (window.matchMedia("(pointer: fine)").matches && dotCursor) {
  const contact = document.querySelector(".get-in-touch");
  contact.addEventListener("pointermove", (event) => {
    const bounds = contact.getBoundingClientRect();
    dotCursor.style.left = `${event.clientX - bounds.left}px`;
    dotCursor.style.top = `${event.clientY - bounds.top}px`;
    dotCursor.style.transform = "translate(-50%, -50%) scale(1)";
  });
  contact.addEventListener("pointerleave", () => {
    dotCursor.style.transform = "translate(-50%, -50%) scale(0)";
  });
}
