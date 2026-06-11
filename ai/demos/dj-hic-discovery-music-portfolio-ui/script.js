const canvas = document.querySelector("#audio-canvas");
const ctx = canvas.getContext("2d");
const menu = document.querySelector("#menu");
const menuButton = document.querySelector(".global-button");
const jackets = document.querySelectorAll(".jacket");

function resizeCanvas() {
  const ratio = window.devicePixelRatio || 1;
  canvas.width = Math.floor(window.innerWidth * ratio);
  canvas.height = Math.floor(window.innerHeight * ratio);
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
}

function render(time = 0) {
  const width = window.innerWidth;
  const height = window.innerHeight;
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = "rgba(255,255,255,.08)";
  ctx.lineWidth = 1;

  for (let i = 0; i < 44; i += 1) {
    const x = (i / 43) * width;
    const amp = 28 + Math.sin(time * .001 + i) * 18;
    ctx.beginPath();
    for (let y = 0; y <= height; y += 18) {
      const px = x + Math.sin(y * .015 + time * .0015 + i) * amp;
      if (y === 0) ctx.moveTo(px, y);
      else ctx.lineTo(px, y);
    }
    ctx.stroke();
  }

  requestAnimationFrame(render);
}

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menu.classList.toggle("is-open", !isOpen);
  menu.setAttribute("aria-hidden", String(isOpen));
});

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    menu.classList.remove("is-open");
    menu.setAttribute("aria-hidden", "true");
  });
});

window.addEventListener("pointermove", (event) => {
  const x = (event.clientX / window.innerWidth - .5) * 24;
  const y = (event.clientY / window.innerHeight - .5) * 24;
  jackets.forEach((jacket, index) => {
    const depth = (index + 1) * .18;
    jacket.style.transform = `translate(${x * depth}px, ${y * depth}px) rotate(${(x + y) * depth * .2}deg)`;
  });
});

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
render();
