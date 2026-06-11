const canvas = document.querySelector("#trace-canvas");
const ctx = canvas.getContext("2d");
const cursor = document.querySelector(".cursor");
const enterButton = document.querySelector(".enter-button");
const skipButton = document.querySelector(".skip-button");
const videoSplash = document.querySelector(".video-splash");
const menuButton = document.querySelector(".open-menu");
const mainMenu = document.querySelector(".main-menu");
const muteButton = document.querySelector(".mute-button");
const infoButton = document.querySelector(".info-button");
const panelClose = document.querySelector(".panel-close");
const painMenu = document.querySelector(".pain-menu");
const dimmer = document.querySelector(".site-dimmer");
const hoverTargets = document.querySelectorAll("a, button");

let width = 0;
let height = 0;
let particles = [];
let tick = 0;

function resizeCanvas() {
  const ratio = window.devicePixelRatio || 1;
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = Math.floor(width * ratio);
  canvas.height = Math.floor(height * ratio);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  createParticles();
}

function createParticles() {
  const count = Math.max(48, Math.floor((width * height) / 26000));
  particles = Array.from({ length: count }, (_, index) => ({
    angle: (Math.PI * 2 * index) / count,
    radius: 60 + Math.random() * Math.min(width, height) * 0.42,
    speed: 0.001 + Math.random() * 0.0025,
    size: 0.8 + Math.random() * 2.4,
    offset: Math.random() * Math.PI * 2
  }));
}

function draw() {
  tick += 1;
  ctx.clearRect(0, 0, width, height);

  const cx = width * 0.5;
  const cy = height * 0.52;

  ctx.save();
  ctx.globalCompositeOperation = "lighter";

  particles.forEach((particle, index) => {
    const angle = particle.angle + tick * particle.speed;
    const pulse = Math.sin(tick * 0.01 + particle.offset) * 18;
    const x = cx + Math.cos(angle) * (particle.radius + pulse);
    const y = cy + Math.sin(angle * 0.76) * (particle.radius * 0.46 + pulse);
    const alpha = 0.22 + Math.sin(tick * 0.018 + index) * 0.12;

    ctx.beginPath();
    ctx.arc(x, y, particle.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(253, 67, 68, ${alpha})`;
    ctx.fill();

    if (index % 3 === 0) {
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(x, y);
      ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.12})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  });

  ctx.beginPath();
  ctx.ellipse(cx, cy, Math.min(width, height) * 0.28, Math.min(width, height) * 0.1, tick * 0.002, 0, Math.PI * 2);
  ctx.strokeStyle = "rgba(253, 67, 68, 0.16)";
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.restore();
  requestAnimationFrame(draw);
}

function setMenu(open) {
  mainMenu.classList.toggle("is-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
}

function setInfo(open) {
  painMenu.classList.toggle("extended", open);
  dimmer.classList.toggle("is-visible", open);
  infoButton.setAttribute("aria-expanded", String(open));
}

window.addEventListener("resize", resizeCanvas);

document.addEventListener("pointermove", (event) => {
  if (!cursor) return;
  cursor.style.left = `${event.clientX}px`;
  cursor.style.top = `${event.clientY}px`;
});

hoverTargets.forEach((target) => {
  target.addEventListener("pointerenter", () => document.body.classList.add("is-hovering"));
  target.addEventListener("pointerleave", () => document.body.classList.remove("is-hovering"));
});

enterButton.addEventListener("click", () => {
  document.body.classList.add("is-entered");
});

skipButton.addEventListener("click", () => {
  videoSplash.classList.add("is-skipped");
});

menuButton.addEventListener("click", () => {
  setMenu(!mainMenu.classList.contains("is-open"));
});

muteButton.addEventListener("click", () => {
  const pressed = muteButton.getAttribute("aria-pressed") === "true";
  muteButton.setAttribute("aria-pressed", String(!pressed));
});

infoButton.addEventListener("click", () => {
  setInfo(!painMenu.classList.contains("extended"));
});

panelClose.addEventListener("click", () => setInfo(false));
dimmer.addEventListener("click", () => setInfo(false));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenu(false);
    setInfo(false);
    videoSplash.classList.add("is-skipped");
  }
});

resizeCanvas();
draw();
