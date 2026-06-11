const modal = document.querySelector("#demo-modal");
const modalOpeners = document.querySelectorAll("[data-modal-open]");
const modalClosers = document.querySelectorAll("[data-modal-close]");
const banner = document.querySelector("#site-banner");
const bannerClose = document.querySelector(".SiteBanner_close");

function openModal() {
  modal.hidden = false;
  document.body.classList.add("modal-open");
}

function closeModal() {
  modal.hidden = true;
  document.body.classList.remove("modal-open");
}

modalOpeners.forEach((button) => button.addEventListener("click", openModal));
modalClosers.forEach((button) => button.addEventListener("click", closeModal));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

bannerClose.addEventListener("click", () => {
  banner.hidden = true;
});

function animateCounter(counter) {
  const original = counter.parentElement.querySelector(".NumberCounter_original");
  const target = Number(original.textContent);
  const duration = 900;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    counter.textContent = Math.round(target * eased).toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  }

  requestAnimationFrame(tick);
}

document.querySelectorAll(".NumberCounter_counter").forEach(animateCounter);
