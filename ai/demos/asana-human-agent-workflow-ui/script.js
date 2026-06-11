const header = document.querySelector("[data-header]");
const announcement = document.querySelector("[data-announcement]");
const closeAnnouncement = document.querySelector(".announcement__close");
const tabs = document.querySelectorAll(".ai-tab");
const stageEyebrow = document.querySelector("[data-stage-eyebrow]");
const stageTitle = document.querySelector("[data-stage-title]");
const stageMetric = document.querySelector("[data-stage-metric]");
const messenger = document.querySelector("#q-messenger-frame");

const stages = {
  plan: {
    eyebrow: "Plan with context",
    title: "Turn scattered goals into clear project systems.",
    metric: "12.4h"
  },
  prioritize: {
    eyebrow: "Prioritize by signal",
    title: "Let agents surface the work that needs a human decision.",
    metric: "42%"
  },
  perform: {
    eyebrow: "Perform with agents",
    title: "Move routine handoffs forward while teams keep control.",
    metric: "3.8x"
  }
};

function setHeaderState() {
  header.classList.toggle("is-scrolled", window.scrollY > 8);
}

function setMessengerState(state) {
  messenger.className = "";

  if (state === "maximized") {
    messenger.classList.add("qlfd-maximized");
  }

  if (state === "sidebar") {
    messenger.classList.add("qlfd-full-height");
  }

  if (state === "fullscreen") {
    messenger.classList.add("qlfd-full-screen");
  }
}

window.addEventListener("scroll", setHeaderState, { passive: true });
setHeaderState();

closeAnnouncement.addEventListener("click", () => {
  announcement.hidden = true;
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const stage = stages[tab.dataset.stage];

    tabs.forEach((item) => {
      item.classList.toggle("is-active", item === tab);
      item.setAttribute("aria-selected", String(item === tab));
    });

    stageEyebrow.textContent = stage.eyebrow;
    stageTitle.textContent = stage.title;
    stageMetric.textContent = stage.metric;
  });
});

document.querySelectorAll("[data-open-messenger]").forEach((button) => {
  button.addEventListener("click", () => setMessengerState("maximized"));
});

document.querySelector("[data-sidebar-messenger]").addEventListener("click", () => {
  setMessengerState("sidebar");
});

document.querySelector("[data-fullscreen-messenger]").addEventListener("click", () => {
  setMessengerState("fullscreen");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    messenger.className = "qlfd-not-full-screen";
  }
});
