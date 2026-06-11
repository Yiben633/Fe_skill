const menuToggle = document.getElementById("menuToggle");
const navMiddle = document.getElementById("navMiddle");
const scrim = document.getElementById("scrim");

function setNav(open) {
  document.body.classList.toggle("nav-open", open);
  navMiddle.dataset.nav = open ? "open" : "closed";
  scrim.classList.toggle("is-visible", open);
}

menuToggle.addEventListener("click", () => {
  setNav(!document.body.classList.contains("nav-open"));
});

scrim.addEventListener("click", () => setNav(false));

document.querySelectorAll(".nav_link").forEach((link) => {
  link.addEventListener("click", () => setNav(false));
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".reveal, .split-text").forEach((item) => {
  revealObserver.observe(item);
});

const lightboxOverlay = document.getElementById("lightboxOverlay");
const lightbox = document.getElementById("lightbox");
const lightboxArt = document.getElementById("lightboxArt");
let activeLightboxTrigger = null;

function setLightbox(open, artName) {
  lightboxOverlay.hidden = !open;
  lightbox.hidden = !open;
  if (activeLightboxTrigger) activeLightboxTrigger.dataset.hidden = open ? "true" : "false";
  if (artName) lightboxArt.dataset.art = artName;
}

document.querySelectorAll("[data-lightbox-src]").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    activeLightboxTrigger = trigger;
    setLightbox(true, trigger.dataset.lightboxSrc);
  });
});

[lightboxOverlay, lightbox].forEach((target) => {
  target.addEventListener("click", () => setLightbox(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setLightbox(false);
});

const canvas = document.getElementById("dotMatrix");
const ctx = canvas.getContext("2d");

function drawDotMatrix() {
  const rect = canvas.parentElement.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  canvas.width = rect.width * ratio;
  canvas.height = rect.height * ratio;
  canvas.style.width = `${rect.width}px`;
  canvas.style.height = `${rect.height}px`;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  ctx.clearRect(0, 0, rect.width, rect.height);
  ctx.fillStyle = "rgba(255, 255, 255, 0.1)";

  for (let x = 12; x < rect.width; x += 18) {
    for (let y = 12; y < rect.height; y += 18) {
      const fade = 1 - Math.min(1, Math.hypot(x - rect.width / 2, y - rect.height / 2) / rect.width);
      ctx.globalAlpha = 0.14 + fade * 0.28;
      ctx.beginPath();
      ctx.arc(x, y, 1.1, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.globalAlpha = 1;
}

drawDotMatrix();
window.addEventListener("resize", drawDotMatrix);
