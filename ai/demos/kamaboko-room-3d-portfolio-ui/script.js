const root = document.documentElement;
const loading = document.querySelector("[data-loading]");
const themeToggle = document.querySelector(".theme-toggle");
const splitTargets = document.querySelectorAll("[data-split]");
const canvas = document.querySelector("#room-canvas");
const ctx = canvas.getContext("2d");
const panels = document.querySelectorAll(".section-bg");
const sections = document.querySelectorAll(".section");
const customThumb = document.querySelector(".custom-scrollbar span");

splitTargets.forEach((target) => {
  const text = target.dataset.split || "";
  target.textContent = "";
  [...text].forEach((char, index) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00a0" : char;
    span.style.setProperty("--index", index);
    target.appendChild(span);
  });
});

window.addEventListener("load", () => {
  window.setTimeout(() => loading.classList.add("is-hidden"), 650);
  splitTargets.forEach((target) => target.classList.add("is-visible"));
});

themeToggle.addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
});

function resizeCanvas() {
  const ratio = window.devicePixelRatio || 1;
  canvas.width = Math.floor(window.innerWidth * ratio);
  canvas.height = Math.floor(window.innerHeight * ratio);
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
}

function drawRoom(time = 0) {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const styles = getComputedStyle(root);
  const bg = styles.getPropertyValue("--color-bg").trim();
  const primary = styles.getPropertyValue("--color-primary").trim();
  const secondary = styles.getPropertyValue("--color-secondary").trim();
  const text = styles.getPropertyValue("--color-text").trim();

  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);

  const cx = w / 2;
  const cy = h / 2 + Math.sin(time * .001) * 10;
  const size = Math.min(w, h) * .32;

  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(Math.sin(time * .0006) * .035);

  ctx.fillStyle = secondary;
  ctx.globalAlpha = .28;
  ctx.fillRect(-size, -size * .5, size * 1.8, size * 1.1);

  ctx.globalAlpha = .95;
  ctx.strokeStyle = text;
  ctx.lineWidth = 2;
  ctx.strokeRect(-size, -size * .5, size * 1.8, size * 1.1);

  ctx.fillStyle = primary;
  ctx.globalAlpha = .75;
  ctx.fillRect(-size * .72, -size * .25, size * .46, size * .34);
  ctx.strokeRect(-size * .72, -size * .25, size * .46, size * .34);

  ctx.fillStyle = bg;
  ctx.globalAlpha = .9;
  ctx.beginPath();
  ctx.arc(size * .35, size * .05, size * .22, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.restore();
  requestAnimationFrame(drawRoom);
}

function updateScrollEffects() {
  let activeColor = null;
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * .58 && rect.bottom > window.innerHeight * .35) {
      activeColor = section.dataset.color;
    }
  });

  panels.forEach((panel) => {
    panel.classList.toggle("is-visible", panel.dataset.panel === activeColor);
  });

  const doc = document.documentElement;
  const maxScroll = doc.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
  const track = window.innerHeight - 12;
  const height = Math.max(56, track * (window.innerHeight / doc.scrollHeight));
  customThumb.style.height = `${height}px`;
  customThumb.style.transform = `translateY(${(track - height) * progress}px)`;
}

window.addEventListener("resize", resizeCanvas);
window.addEventListener("scroll", updateScrollEffects, { passive: true });
resizeCanvas();
drawRoom();
updateScrollEffects();
