const searchInput = document.querySelector("#template-search");
const chips = Array.from(document.querySelectorAll(".filter-chip"));
const cards = Array.from(document.querySelectorAll(".template-card"));

let activeFilter = "all";

function updateCards() {
  const query = searchInput.value.trim().toLowerCase();

  cards.forEach((card) => {
    const matchesFilter = activeFilter === "all" || card.dataset.category === activeFilter;
    const matchesQuery = card.dataset.title.toLowerCase().includes(query);
    card.classList.toggle("is-hidden", !(matchesFilter && matchesQuery));
  });
}

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    activeFilter = chip.dataset.filter;
    chips.forEach((item) => item.classList.toggle("active", item === chip));
    updateCards();
  });
});

searchInput.addEventListener("input", updateCards);

document.querySelector(".prompt-bar").addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#templates").scrollIntoView({ behavior: "smooth", block: "start" });
});
