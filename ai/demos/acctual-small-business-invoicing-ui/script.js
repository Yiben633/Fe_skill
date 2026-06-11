const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index * 70, 280)}ms`;
  revealObserver.observe(item);
});

const invoiceAmount = 3600;
const methodButtons = document.querySelectorAll(".method-button");
const feeLabel = document.querySelector("#fee-label");
const feeValue = document.querySelector("#fee-value");
const totalValue = document.querySelector("#total-value");

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

function updateFee(button) {
  const feeRate = Number(button.dataset.fee);
  const method = button.dataset.method === "bank" ? "Bank transfer" : "Card";
  const fee = invoiceAmount * (feeRate / 100);
  const total = invoiceAmount + fee;

  methodButtons.forEach((item) => item.classList.remove("is-active"));
  button.classList.add("is-active");

  feeLabel.textContent = `${method} fee`;
  feeValue.textContent = currency.format(fee);
  totalValue.textContent = currency.format(total);
}

methodButtons.forEach((button) => {
  button.addEventListener("click", () => updateFee(button));
});

document.querySelector(".signup-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector("button");
  button.textContent = "Invoice ready";
  setTimeout(() => {
    button.textContent = "Create invoice";
  }, 1800);
});
