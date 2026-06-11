const canvas = document.getElementById("webglLayer");
const ctx = canvas.getContext("2d");

let width = 0;
let height = 0;
let time = 0;
let pointerX = 0.5;
let pointerY = 0.5;

function resize() {
  const ratio = window.devicePixelRatio || 1;
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width * ratio;
  canvas.height = height * ratio;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
}

function draw() {
  time += 0.01;
  ctx.clearRect(0, 0, width, height);

  const grid = 34;
  ctx.lineWidth = 1;
  for (let x = 0; x < width; x += grid) {
    const wave = Math.sin(time + x * 0.012 + pointerY * 4) * 6;
    ctx.strokeStyle = `rgba(255, 255, 255, ${0.02 + pointerX * 0.035})`;
    ctx.beginPath();
    ctx.moveTo(x + wave, 0);
    ctx.lineTo(x - wave, height);
    ctx.stroke();
  }

  for (let y = 0; y < height; y += grid) {
    const wave = Math.cos(time + y * 0.012 + pointerX * 4) * 6;
    ctx.strokeStyle = "rgba(255, 255, 255, 0.018)";
    ctx.beginPath();
    ctx.moveTo(0, y + wave);
    ctx.lineTo(width, y - wave);
    ctx.stroke();
  }

  ctx.fillStyle = "rgba(255, 255, 255, 0.06)";
  ctx.beginPath();
  ctx.arc(pointerX * width, pointerY * height, 80 + Math.sin(time * 2) * 10, 0, Math.PI * 2);
  ctx.fill();

  requestAnimationFrame(draw);
}

window.addEventListener("resize", resize);
window.addEventListener("pointermove", (event) => {
  pointerX = event.clientX / window.innerWidth;
  pointerY = event.clientY / window.innerHeight;
});

resize();
draw();
