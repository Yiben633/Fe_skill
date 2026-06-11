const picker = document.getElementById("credential_picker_container");
const announcement = document.getElementById("g_a11y_announcement");
const closePicker = document.getElementById("closePicker");
const showPicker = document.getElementById("showPicker");
const credentialButton = document.querySelector(".L5Fo6c-bF1uUb");

function announce(message) {
  announcement.textContent = "";
  window.setTimeout(() => {
    announcement.textContent = message;
  }, 30);
}

closePicker.addEventListener("click", () => {
  picker.dataset.hidden = "true";
  announce("Credential picker closed.");
});

showPicker.addEventListener("click", () => {
  delete picker.dataset.hidden;
  announce("Credential picker opened.");
});

credentialButton.addEventListener("click", () => {
  announce("Continuing as Alex Morgan.");
  picker.dataset.hidden = "true";
});
