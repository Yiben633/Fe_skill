const themes = ["black", "blue", "yellow"];
const root = document.documentElement;
const projectList = document.querySelector(".project-list");
const filterButtons = document.querySelectorAll("[data-filter]");
const viewButtons = document.querySelectorAll("[data-view-button]");
const themeButton = document.querySelector("[data-theme-button]");
const soundButton = document.querySelector(".sound-button");

let themeIndex = 0;

function setFilter(filter) {
  filterButtons.forEach((button) => {
    button.classList.toggle("is-current", button.dataset.filter === filter);
  });

  projectList.querySelectorAll("li").forEach((item) => {
    const card = item.querySelector(".project-card");
    const visible = filter === "all" || item.dataset.category === filter;
    card.classList.toggle("is-hidden", !visible);
  });
}

function setView(view) {
  projectList.dataset.view = view;
  viewButtons.forEach((button) => {
    button.classList.toggle("is-current", button.dataset.viewButton === view);
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => setFilter(button.dataset.filter));
});

viewButtons.forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.viewButton));
});

themeButton.addEventListener("click", () => {
  themeIndex = (themeIndex + 1) % themes.length;
  root.dataset.theme = themes[themeIndex];
});

soundButton.addEventListener("click", () => {
  const muted = soundButton.dataset.muted === "true";
  soundButton.dataset.muted = String(!muted);
  soundButton.textContent = muted ? "SOUND" : "MUTED";
});
