const aiButton = document.querySelector(".avenuez-ai-summarize-button--floating");
const aiPanel = document.querySelector("#ai-panel");
const aiClose = document.querySelector(".avenuez-ai-panel__close");

function setPanel(open) {
  aiPanel.hidden = !open;
  aiButton.setAttribute("aria-expanded", String(open));
}

aiButton.addEventListener("click", () => {
  setPanel(aiPanel.hidden);
});

aiClose.addEventListener("click", () => {
  setPanel(false);
  aiButton.focus();
});

document.querySelectorAll(".az-filter").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    document.querySelectorAll(".az-filter").forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });

    document.querySelectorAll(".work-card").forEach((card) => {
      const visible = filter === "all" || card.dataset.kind === filter;
      card.classList.remove("is-showing");

      if (!visible) {
        card.classList.add("is-hiding");
        window.setTimeout(() => {
          card.classList.add("is-hidden");
        }, 180);
        return;
      }

      card.classList.remove("is-hidden", "is-hiding");
      requestAnimationFrame(() => {
        card.classList.add("is-showing");
      });
    });
  });
});

const passwordInput = document.querySelector("#az-password");
const passwordToggle = document.querySelector(".spectra-pro-login-form__password-toggle");

passwordToggle.addEventListener("click", () => {
  const shown = passwordInput.type === "text";
  passwordInput.type = shown ? "password" : "text";
  passwordToggle.textContent = shown ? "Show" : "Hide";
});
