const overlay = document.getElementById("lightboxOverlay");
const lightbox = document.getElementById("lightbox");
const trigger = document.querySelector("[data-lightbox]");

function openLightbox() {
  overlay.classList.remove("hidden");
  lightbox.classList.remove("hidden");
}

function closeLightbox() {
  overlay.classList.add("hidden");
  lightbox.classList.add("hidden");
}

trigger.addEventListener("click", openLightbox);
overlay.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", closeLightbox);

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLightbox();
});

function drawMatrix(canvas) {
  const context = canvas.getContext("2d");
  const size = canvas.clientWidth;
  const ratio = window.devicePixelRatio || 1;
  canvas.width = size * ratio;
  canvas.height = size * ratio;
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  context.clearRect(0, 0, size, size);

  for (let y = 12; y < size; y += 14) {
    for (let x = 12; x < size; x += 14) {
      const distance = Math.hypot(x - size / 2, y - size / 2);
      const alpha = Math.max(0.12, 1 - distance / (size * 0.72));
      context.fillStyle = `rgba(247,248,248,${alpha * 0.45})`;
      context.beginPath();
      context.arc(x, y, 1.6, 0, Math.PI * 2);
      context.fill();
    }
  }
}

const matrix = document.getElementById("matrixOne");
drawMatrix(matrix);
window.addEventListener("resize", () => drawMatrix(matrix));
