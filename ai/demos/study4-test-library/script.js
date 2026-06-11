const menuButton = document.querySelector(".menu-button");
const siteNav = document.querySelector(".site-nav");
const pills = document.querySelectorAll(".pill");
const cards = document.querySelectorAll(".test-card");

menuButton?.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

pills.forEach((pill) => {
  pill.addEventListener("click", () => {
    const filter = pill.dataset.filter;

    pills.forEach((item) => item.classList.remove("active"));
    pill.classList.add("active");

    cards.forEach((card) => {
      card.classList.toggle("is-hidden", filter !== "all" && card.dataset.kind !== filter);
    });
  });
});
