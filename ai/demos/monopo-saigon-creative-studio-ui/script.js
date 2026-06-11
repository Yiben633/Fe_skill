document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);

window.addEventListener("resize", () => {
  document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  },
  { threshold: 0.25 }
);

document.querySelectorAll(".line").forEach((line) => observer.observe(line));

document.querySelectorAll(".more").forEach((button) => {
  button.addEventListener("click", () => {
    const member = button.closest(".team-member");
    const open = member.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(open));
  });
});

document.querySelector(".btn-to-top").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const modal = document.getElementById("modal");
document.querySelector("[data-open-modal]").addEventListener("click", () => {
  modal.setAttribute("aria-hidden", "false");
});

document.querySelector("[data-close-modal]").addEventListener("click", () => {
  modal.setAttribute("aria-hidden", "true");
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) modal.setAttribute("aria-hidden", "true");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") modal.setAttribute("aria-hidden", "true");
});
