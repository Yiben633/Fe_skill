const loader = document.getElementById("loader");
const loaderFill = document.getElementById("loaderFill");
const cursor = document.getElementById("cursor");
const canvas = document.getElementById("scene");
const context = canvas.getContext("2d");

let progress = 0;
const loaderTimer = window.setInterval(() => {
  progress = Math.min(progress + 14, 100);
  loaderFill.style.width = `${progress}%`;
  if (progress === 100) {
    window.clearInterval(loaderTimer);
    window.setTimeout(() => loader.classList.add("is-done"), 250);
  }
}, 100);

function resizeCanvas() {
  const ratio = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * ratio;
  canvas.height = window.innerHeight * ratio;
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
}

const particles = Array.from({ length: 80 }, (_, index) => ({
  x: Math.random(),
  y: Math.random(),
  r: 0.7 + Math.random() * 1.8,
  speed: 0.12 + Math.random() * 0.35,
  phase: index * 0.3,
}));

function drawScene(time) {
  context.clearRect(0, 0, window.innerWidth, window.innerHeight);
  context.fillStyle = "rgba(255,255,255,0.5)";
  particles.forEach((particle) => {
    const drift = Math.sin(time * 0.0004 + particle.phase) * 20;
    const x = particle.x * window.innerWidth + drift;
    const y = ((particle.y * window.innerHeight + time * particle.speed) % window.innerHeight);
    context.beginPath();
    context.arc(x, y, particle.r, 0, Math.PI * 2);
    context.fill();
  });
  window.requestAnimationFrame(drawScene);
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);
window.requestAnimationFrame(drawScene);

if (window.matchMedia("(pointer: fine)").matches) {
  window.addEventListener("pointermove", (event) => {
    cursor.style.opacity = "1";
    cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
  });
}

function openModal(name) {
  const modal = document.querySelector(`[data-modal="${name}"]`);
  if (modal) {
    modal.classList.remove("hidden");
    const closeButton = modal.querySelector("[data-close]");
    if (closeButton) closeButton.focus();
  }
}

function closeModal(modal) {
  modal.classList.add("hidden");
}

document.querySelectorAll("[data-open]").forEach((button) => {
  button.addEventListener("click", () => openModal(button.dataset.open));
});

document.querySelectorAll("[data-close]").forEach((button) => {
  button.addEventListener("click", () => closeModal(button.closest(".modal")));
});

document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal(modal);
  });
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    document.querySelectorAll(".modal:not(.hidden)").forEach(closeModal);
  }
});

document.querySelector("[data-volume]").addEventListener("click", (event) => {
  event.currentTarget.classList.toggle("is-muted");
});

document.querySelectorAll(".budget-pill").forEach((pill) => {
  pill.addEventListener("click", () => {
    document.querySelectorAll(".budget-pill").forEach((item) => item.classList.remove("selected"));
    pill.classList.add("selected");
  });
});

document.getElementById("newsletterSubmit").addEventListener("click", () => {
  document.getElementById("newsletterForm").classList.add("hidden");
  document.getElementById("newsletterThanks").classList.remove("hidden");
});
