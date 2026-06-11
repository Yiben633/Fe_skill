const root = document.documentElement;
const themeButton = document.querySelector(".theme-button");
const searchToggle = document.querySelector(".search-toggle");
const searchPanel = document.querySelector("[data-search]");
const filterTabs = document.querySelectorAll(".filter-tab");
const cards = document.querySelectorAll("[data-type]");
const canvas = document.querySelector("#monitor-canvas");
const context = canvas.getContext("2d");

themeButton.addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
});

searchToggle.addEventListener("click", () => {
  const isOpen = searchToggle.dataset.open === "true";
  searchToggle.dataset.open = String(!isOpen);
  searchPanel.dataset.visible = String(!isOpen);
});

filterTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    filterTabs.forEach((item) => item.classList.remove("is-current"));
    tab.classList.add("is-current");
    const filter = tab.dataset.filter;

    cards.forEach((card) => {
      card.hidden = filter !== "all" && card.dataset.type !== filter;
    });
  });
});

function drawMonitor(time = 0) {
  const width = canvas.width;
  const height = canvas.height;
  context.clearRect(0, 0, width, height);
  context.fillStyle = getComputedStyle(root).getPropertyValue("--color-bg");
  context.fillRect(0, 0, width, height);
  context.strokeStyle = getComputedStyle(root).getPropertyValue("--color-text");
  context.lineWidth = 1;

  for (let x = 0; x < width; x += 18) {
    const y = height / 2 + Math.sin((x + time / 16) * .03) * 28;
    context.beginPath();
    context.arc(x, y, 2, 0, Math.PI * 2);
    context.stroke();
  }

  context.fillStyle = getComputedStyle(root).getPropertyValue("--color-orange");
  context.fillRect((time / 20) % width, height - 18, 60, 6);
  requestAnimationFrame(drawMonitor);
}

drawMonitor();
