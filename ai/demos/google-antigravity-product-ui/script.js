const header = document.querySelector(".ag-header");

function updateHeader() {
  header.classList.toggle("is-opaque", window.scrollY > 12);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
