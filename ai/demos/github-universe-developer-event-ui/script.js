const canvas = document.querySelector("#mona-canvas");
const ctx = canvas.getContext("2d");
const trailRoot = document.querySelector(".cursor-trails");
const ticketTabs = document.querySelectorAll(".ticket-tab");
const ticketPanels = document.querySelectorAll(".ticket-panel");
const arcade = document.querySelector(".arcade-dialog");
const arcadeOpeners = document.querySelectorAll("[data-open-arcade]");
const arcadeClose = document.querySelector(".arcade-close");

const trailChars = ["-", "/", ")", ".", "+", "=", ">", "<", "*", "&", "("];
const trailColors = ["#ae85ff", "#f73678", "#b04b00", "#583af7", "#5fed83", "#b6a132"];
const blocks = Array.from({ length: 20 }, (_, index) => {
  const block = document.createElement("div");
  block.className = "cursor-trail-block";
  block.textContent = trailChars[index % trailChars.length];
  block.style.background = trailColors[index % trailColors.length];
  trailRoot.appendChild(block);
  return { el: block, x: 0, y: 0 };
});

let width = 0;
let height = 0;
let pointerX = window.innerWidth / 2;
let pointerY = window.innerHeight / 2;
let tick = 0;

function resizeCanvas() {
  const ratio = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  width = rect.width;
  height = rect.height;
  canvas.width = Math.floor(width * ratio);
  canvas.height = Math.floor(height * ratio);
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
}

function drawMonaField() {
  tick += 1;
  ctx.clearRect(0, 0, width, height);
  ctx.save();
  ctx.globalAlpha = 0.55;

  for (let i = 0; i < 54; i += 1) {
    const x = (i * 73 + tick * 0.35) % (width + 80) - 40;
    const y = (Math.sin(i * 1.7 + tick * 0.02) * 0.5 + 0.5) * height;
    const size = 8 + (i % 5) * 4;
    ctx.fillStyle = trailColors[i % trailColors.length];
    ctx.fillRect(x, y, size, size);
  }

  ctx.restore();
  requestAnimationFrame(drawMonaField);
}

function animateTrail() {
  let followX = pointerX;
  let followY = pointerY;

  blocks.forEach((block, index) => {
    block.x += (followX - block.x) * 0.24;
    block.y += (followY - block.y) * 0.24;
    block.el.style.transform = `translate(${block.x}px, ${block.y}px)`;
    block.el.style.opacity = "1";
    followX = block.x - 20;
    followY = block.y;

    if (index % 5 === 0) {
      block.el.textContent = trailChars[(Math.floor(tick / 14) + index) % trailChars.length];
    }
  });

  requestAnimationFrame(animateTrail);
}

ticketTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.ticket;

    ticketTabs.forEach((item) => {
      const selected = item === tab;
      item.classList.toggle("is-selected", selected);
      item.setAttribute("aria-selected", String(selected));
    });

    ticketPanels.forEach((panel) => {
      panel.hidden = panel.dataset.panel !== target;
    });
  });
});

arcadeOpeners.forEach((button) => {
  button.addEventListener("click", () => {
    arcade.hidden = false;
    arcadeClose.focus();
  });
});

function closeArcade() {
  arcade.hidden = true;
}

arcadeClose.addEventListener("click", closeArcade);
arcade.addEventListener("click", (event) => {
  if (event.target === arcade) closeArcade();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !arcade.hidden) {
    closeArcade();
  }
});

document.addEventListener("pointermove", (event) => {
  pointerX = event.clientX;
  pointerY = event.clientY;
});

window.addEventListener("resize", resizeCanvas);

resizeCanvas();
drawMonaField();
animateTrail();
