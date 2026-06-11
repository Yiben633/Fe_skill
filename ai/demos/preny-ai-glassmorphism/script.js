const industryCards = Array.from(document.querySelectorAll(".industry-card"));

industryCards.forEach((card) => {
  card.addEventListener("click", () => {
    industryCards.forEach((item) => item.classList.toggle("active", item === card));
  });
});

document.querySelector(".contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
});
