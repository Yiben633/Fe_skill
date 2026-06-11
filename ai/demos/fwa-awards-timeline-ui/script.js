const filters = document.querySelectorAll(".filter");
const acceptCookies = document.querySelector("#acceptCookies");
const cookieNotice = document.querySelector("#cookieNotice");

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("is-active"));
    filter.classList.add("is-active");
  });
});

acceptCookies?.addEventListener("click", () => {
  cookieNotice?.classList.add("is-hidden");
});
