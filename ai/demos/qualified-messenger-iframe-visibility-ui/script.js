const frame = document.querySelector("#q-messenger-frame");
const buttons = document.querySelectorAll(".state-button");
const embeddedSlot = document.querySelector("#embedded-slot");
const originalParent = frame.parentElement;

function resetFramePlacement() {
  if (frame.parentElement !== originalParent) {
    originalParent.appendChild(frame);
  }
}

function setMessengerState(state) {
  frame.className = "qlfd-demo-frame qlfd-not-mobile";
  resetFramePlacement();

  if (state === "maximized") {
    frame.classList.add("qlfd-maximized");
  }

  if (state === "mobile") {
    frame.classList.add("qlfd-maximized", "qlfd-is-mobile");
  }

  if (state === "fullHeight") {
    frame.classList.add("qlfd-full-height");
  }

  if (state === "fullscreen") {
    frame.classList.add("qlfd-full-screen");
  }

  if (state === "disabled") {
    frame.classList.add("qlfd-maximized", "qlfd-disable-pointer-events");
  }

  if (state === "embedded") {
    frame.classList.remove("qlfd-not-mobile");
    frame.classList.add("qlfd-embedded");
    embeddedSlot.appendChild(frame);
  }

  buttons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.state === state);
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    setMessengerState(button.dataset.state);
  });
});
