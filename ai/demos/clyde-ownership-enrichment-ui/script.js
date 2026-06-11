const stepButtons = document.querySelectorAll(".step-button");
const stepSlides = document.querySelectorAll(".step-slide");

function setStep(index) {
  stepButtons.forEach((button, buttonIndex) => {
    button.classList.toggle("is-active", buttonIndex === index);
  });
  stepSlides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-visible", slideIndex === index);
  });
}

stepButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setStep(Number(button.dataset.step));
  });
});

let activeStep = 0;
window.setInterval(() => {
  activeStep = (activeStep + 1) % stepSlides.length;
  setStep(activeStep);
}, 5000);
