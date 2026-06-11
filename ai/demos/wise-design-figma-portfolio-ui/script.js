const carousel = document.querySelector("#carousel");
const assets = Array.from(document.querySelectorAll(".wise-asset"));
const title = document.querySelector("#asset-title");
const description = document.querySelector("#asset-description");
const pauseToggle = document.querySelector("#pause-toggle");
const scrubber = document.querySelector("#scrubber");
const scrubberThumb = document.querySelector(".wise-scrubber__thumb");

let activeIndex = 0;
let paused = false;
let timer = window.setInterval(nextAsset, 2400);

function setActive(index) {
  activeIndex = (index + assets.length) % assets.length;

  assets.forEach((asset, assetIndex) => {
    asset.classList.toggle("is-active", assetIndex === activeIndex);
  });

  const active = assets[activeIndex];
  title.textContent = active.dataset.assetTitle;
  description.textContent = active.dataset.assetDescription;
  scrubber.setAttribute("aria-valuenow", String(activeIndex + 1));

  const maxOffset = 160 - 35;
  const step = assets.length <= 1 ? 0 : maxOffset / (assets.length - 1);
  scrubberThumb.style.transform = `translateX(${step * activeIndex}px)`;
  active.scrollIntoView({ behavior: paused ? "auto" : "smooth", inline: "center", block: "nearest" });
}

function nextAsset() {
  if (!paused) {
    setActive(activeIndex + 1);
  }
}

function setPaused(value) {
  paused = value;
  carousel.classList.toggle("is-paused", paused);
  pauseToggle.classList.toggle("is-paused", paused);
  pauseToggle.setAttribute("aria-label", paused ? "play-carousel" : "pause-carousel");
}

assets.forEach((asset, index) => {
  asset.addEventListener("click", () => setActive(index));
  asset.addEventListener("focus", () => setActive(index));
});

pauseToggle.addEventListener("click", () => {
  setPaused(!paused);
});

scrubber.addEventListener("click", (event) => {
  const rect = scrubber.getBoundingClientRect();
  const ratio = (event.clientX - rect.left) / rect.width;
  const index = Math.round(ratio * (assets.length - 1));
  setActive(index);
});

scrubber.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    setActive(activeIndex + 1);
  }

  if (event.key === "ArrowLeft") {
    setActive(activeIndex - 1);
  }
});

setActive(0);
