const overlay = document.querySelector("#loadingOverlay");
const showLoadingButton = document.querySelector("#showLoading");
const pills = document.querySelectorAll(".pill");
const favorites = document.querySelectorAll(".favorite");

showLoadingButton?.addEventListener("click", () => {
  overlay.hidden = false;
  window.setTimeout(() => {
    overlay.hidden = true;
  }, 1200);
});

pills.forEach((pill) => {
  pill.addEventListener("click", () => {
    pills.forEach((item) => item.setAttribute("aria-pressed", "false"));
    pill.setAttribute("aria-pressed", "true");
  });
});

favorites.forEach((favorite) => {
  favorite.addEventListener("click", () => {
    favorite.classList.toggle("is-active");
  });
});
