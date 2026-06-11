const sites = [
  { name: "INFRINGE", tag: "Editorial", video: true, colors: ["#1d1d1f", "#e8dfcf"] },
  { name: "Flutterwave", tag: "SaaS", colors: ["#f5b942", "#6f38ff"] },
  { name: "Simon Foster", tag: "Portfolio", colors: ["#111827", "#60a5fa"] },
  { name: "Yinka Ilori", tag: "Studio", video: true, colors: ["#ff4d6d", "#ffd166"] },
  { name: "Bryn Taylor", tag: "Fashion", colors: ["#2f2f2f", "#f5f0e8"] },
  { name: "No Ideas", tag: "Agency", colors: ["#0f172a", "#22d3ee"] },
  { name: "FWB", tag: "Community", colors: ["#101010", "#d7ff49"] },
  { name: "Podcorn", tag: "Product", colors: ["#fb7185", "#312e81"] },
  { name: "Kevin Basset", tag: "Portfolio", colors: ["#173b2f", "#a7f3d0"] },
  { name: "Spacelab", tag: "Interactive", video: true, colors: ["#020617", "#818cf8"] },
  { name: "Transmissions", tag: "Culture", colors: ["#3b0764", "#f0abfc"] },
  { name: "Wallpaper", tag: "Magazine", colors: ["#334155", "#cbd5e1"] },
  { name: "Morrow", tag: "Commerce", colors: ["#183a37", "#f2cc8f"] },
  { name: "Orbital", tag: "Product", video: true, colors: ["#0b1020", "#2dd4bf"] },
  { name: "Alder", tag: "Architecture", colors: ["#3d2c2e", "#e7d8c9"] },
  { name: "Index", tag: "Archive", colors: ["#111111", "#ffffff"] },
  { name: "Softspace", tag: "SaaS", colors: ["#0ea5e9", "#f8fafc"] },
  { name: "Koto", tag: "Studio", colors: ["#ef4444", "#111827"] },
  { name: "Oblique", tag: "Agency", video: true, colors: ["#f97316", "#581c87"] },
  { name: "North", tag: "Editorial", colors: ["#0f172a", "#94a3b8"] },
  { name: "Matter", tag: "Product", colors: ["#062c30", "#e0f2fe"] },
  { name: "Lagom", tag: "Commerce", colors: ["#64748b", "#f8fafc"] },
  { name: "Glyph", tag: "Interactive", colors: ["#18181b", "#a78bfa"] },
  { name: "Studio 34", tag: "Agency", colors: ["#713f12", "#fde68a"] }
];

const filters = ["All websites", "Editorial", "Portfolio", "SaaS", "Agency", "Interactive"];
const surface = document.querySelector("[data-pan-surface]");
const world = document.querySelector("[data-world]");
const filterButton = document.querySelector("[data-filter]");
const filterLabel = document.querySelector("[data-filter-label]");
const resetButton = document.querySelector("[data-reset]");
const toast = document.querySelector("[data-toast]");
const state = {
  x: 0,
  y: 0,
  drag: false,
  startX: 0,
  startY: 0,
  originX: 0,
  originY: 0,
  filterIndex: 0
};

function cardTemplate(site) {
  const video = site.video ? `
    <span class="video-badge card-control" aria-label="Contains video">
      <svg viewBox="0 0 12 12" aria-hidden="true"><path d="M3 2.4v7.2L9 6 3 2.4Z" fill="currentColor"/></svg>
    </span>` : "";

  return `
    <a class="site-card" href="#" style="--a:${site.colors[0]};--b:${site.colors[1]}" data-tag="${site.tag}" aria-label="${site.name} website preview">
      <span class="site-art" aria-hidden="true">
        <span class="mock-top"><span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-dot"></span></span>
        <span class="mock-title">${site.name}</span>
      </span>
      ${video}
      <span class="card-label card-control">${site.name}</span>
      <span class="external-link card-control" aria-hidden="true">
        <svg viewBox="0 0 16 16"><path d="M5 3h8v8M12.5 3.5 3 13" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </span>
    </a>
  `;
}

function buildGrid() {
  const columns = 9;
  const rows = 7;
  const cellW = Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--godly-cell-w"));
  const cellH = Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--godly-cell-h"));
  const fragment = document.createDocumentFragment();

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < columns; col += 1) {
      const index = (row * columns + col) % sites.length;
      const site = sites[index];
      const cell = document.createElement("article");
      cell.className = "cell";
      cell.style.setProperty("--x", `${(col - Math.floor(columns / 2)) * cellW}px`);
      cell.style.setProperty("--y", `${(row - Math.floor(rows / 2)) * cellH}px`);
      cell.innerHTML = cardTemplate(site);
      fragment.appendChild(cell);
    }
  }

  world.replaceChildren(fragment);
}

function render() {
  world.style.transform = `translate3d(${state.x}px, ${state.y}px, 0)`;
}

function setFilter(nextIndex) {
  state.filterIndex = nextIndex;
  const value = filters[state.filterIndex];
  filterLabel.textContent = value;
  document.querySelectorAll(".site-card").forEach((card) => {
    const visible = value === "All websites" || card.dataset.tag === value;
    card.parentElement.style.opacity = visible ? "1" : ".16";
    card.parentElement.style.pointerEvents = visible ? "auto" : "none";
  });
}

surface.addEventListener("pointerdown", (event) => {
  if (event.target.closest("a, button")) return;
  state.drag = true;
  state.startX = event.clientX;
  state.startY = event.clientY;
  state.originX = state.x;
  state.originY = state.y;
  surface.classList.add("is-dragging");
  surface.setPointerCapture(event.pointerId);
  toast.classList.add("is-hidden");
});

surface.addEventListener("pointermove", (event) => {
  if (!state.drag) return;
  state.x = state.originX + event.clientX - state.startX;
  state.y = state.originY + event.clientY - state.startY;
  render();
});

surface.addEventListener("pointerup", (event) => {
  state.drag = false;
  surface.classList.remove("is-dragging");
  surface.releasePointerCapture(event.pointerId);
});

surface.addEventListener("pointercancel", () => {
  state.drag = false;
  surface.classList.remove("is-dragging");
});

surface.addEventListener("wheel", (event) => {
  event.preventDefault();
  state.x -= event.deltaX;
  state.y -= event.deltaY;
  render();
}, { passive: false });

filterButton.addEventListener("click", () => {
  setFilter((state.filterIndex + 1) % filters.length);
});

resetButton.addEventListener("click", () => {
  state.x = 0;
  state.y = 0;
  render();
});

window.addEventListener("keydown", (event) => {
  if (event.key.toLowerCase() === "f") {
    setFilter((state.filterIndex + 1) % filters.length);
  }

  if (event.key === "Escape") {
    state.x = 0;
    state.y = 0;
    render();
  }
});

window.addEventListener("resize", buildGrid);

buildGrid();
render();
