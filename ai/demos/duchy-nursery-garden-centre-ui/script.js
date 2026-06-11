const cookieDialog = document.querySelector("#cookieDialog");
const cookieUnderlay = document.querySelector("#cookieUnderlay");
const cookieButtons = document.querySelectorAll("#denyCookies, #allowCookies");
const cookieTabs = document.querySelectorAll(".cookie-tabs button");
const megaTrigger = document.querySelector(".js-mega-nav-trigger");
const megaNav = document.querySelector("#megaNav");

cookieButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cookieDialog?.classList.add("is-hidden");
    cookieUnderlay?.classList.add("is-hidden");
  });
});

cookieTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    cookieTabs.forEach((item) => item.setAttribute("aria-selected", "false"));
    tab.setAttribute("aria-selected", "true");
  });
});

megaTrigger?.addEventListener("click", (event) => {
  event.preventDefault();
  megaNav?.classList.toggle("is-open");
});
