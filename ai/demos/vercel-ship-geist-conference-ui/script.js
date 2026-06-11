const drawer = document.querySelector("[data-drawer]");
const overlay = document.querySelector("[data-overlay]");
const openDrawerButtons = document.querySelectorAll("[data-open-drawer]");
const closeDrawerButton = document.querySelector("[data-close-drawer]");
const cookieBanner = document.querySelector("#cookie-banner");
const cookieAccept = document.querySelector("[data-cookie-accept]");
const cookieSettings = document.querySelector("[data-cookie-settings]");

function openDrawer() {
  overlay.hidden = false;
  drawer.show();
  requestAnimationFrame(() => {
    drawer.setAttribute("open", "");
  });
}

function closeDrawer() {
  drawer.removeAttribute("open");
  setTimeout(() => {
    drawer.close();
    overlay.hidden = true;
  }, 420);
}

openDrawerButtons.forEach((button) => {
  button.addEventListener("click", openDrawer);
});

closeDrawerButton.addEventListener("click", closeDrawer);
overlay.addEventListener("click", closeDrawer);

drawer.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeDrawer();
});

drawer.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector("button");
  button.textContent = "Request received";
  setTimeout(closeDrawer, 700);
});

function hideCookieBanner() {
  cookieBanner.classList.add("is-hidden");
}

cookieAccept.addEventListener("click", hideCookieBanner);
cookieSettings.addEventListener("click", () => {
  cookieBanner.querySelector("p").textContent = "Only essential cookies are enabled in this demo.";
});
