const body = document.body;
const hamburger = document.querySelector(".hamburger");
const backdrop = document.querySelector(".nav-backdrop");
const sideLinks = document.querySelectorAll(".fixed-nav a");
const preview = document.querySelector(".cursor-preview");
const previewInner = document.querySelector(".cursor-preview-inner");
const scrollThumb = document.querySelector(".scrollbar-thumb");
const locomotiveThumb = document.querySelector(".c-scrollbar_thumb");
const localTime = document.querySelector("#localTime");
const soundToggle = document.querySelector(".soundtoggler");
const soundCanvas = soundToggle.querySelector("canvas");
const soundCtx = soundCanvas.getContext("2d");
let soundOn = false;

function setNav(open) {
  body.classList.toggle("nav-open", open);
  hamburger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  document.querySelector(".fixed-nav").setAttribute("aria-hidden", String(!open));
}

hamburger.addEventListener("click", () => setNav(!body.classList.contains("nav-open")));
backdrop.addEventListener("click", () => setNav(false));
sideLinks.forEach((link) => link.addEventListener("click", () => setNav(false)));

document.querySelectorAll(".magnetic").forEach((item) => {
  item.addEventListener("mousemove", (event) => {
    const rect = item.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    item.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
  });

  item.addEventListener("mouseleave", () => {
    item.style.transform = "translate(0, 0)";
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
    }
  });
}, { threshold: 0.25 });

document.querySelectorAll(".reveal, .span-lines").forEach((element) => observer.observe(element));

document.querySelectorAll(".work-list li").forEach((row) => {
  row.addEventListener("mouseenter", () => {
    previewInner.style.background = row.dataset.preview;
    preview.classList.add("is-active");
  });

  row.addEventListener("mouseleave", () => {
    preview.classList.remove("is-active");
  });

  row.addEventListener("mousemove", (event) => {
    preview.style.left = `${event.clientX}px`;
    preview.style.top = `${event.clientY}px`;
  });
});

function updateScrollEffects() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
  const thumbHeight = Math.max(42, window.innerHeight * (window.innerHeight / document.documentElement.scrollHeight));
  scrollThumb.style.height = `${thumbHeight}px`;
  scrollThumb.style.transform = `translateY(${(window.innerHeight - thumbHeight - 4) * progress}px)`;
  locomotiveThumb.style.height = `${thumbHeight}px`;
  locomotiveThumb.style.transform = `translateY(${(window.innerHeight - thumbHeight - 4) * progress}px)`;

  document.querySelector(".row-one").style.transform = `translateX(${progress * -8}vw)`;
  document.querySelector(".row-two").style.transform = `translateX(${progress * 8 - 8}vw)`;
}

function drawSoundWave() {
  const width = soundCanvas.width;
  const height = soundCanvas.height;
  const amplitude = soundOn ? 26 : 5;
  const speed = soundOn ? 0.006 : 0.0025;

  soundCtx.clearRect(0, 0, width, height);
  soundCtx.beginPath();
  soundCtx.lineWidth = 2;
  soundCtx.strokeStyle = "#ffffff";

  for (let x = 0; x <= width; x += 2) {
    const y = height / 2 + Math.sin(x * 0.12 + Date.now() * speed) * amplitude;
    if (x === 0) {
      soundCtx.moveTo(x, y);
    } else {
      soundCtx.lineTo(x, y);
    }
  }

  soundCtx.stroke();
  requestAnimationFrame(drawSoundWave);
}

function updateTime() {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short"
  });
  localTime.textContent = formatter.format(new Date());
}

window.addEventListener("scroll", updateScrollEffects, { passive: true });
window.addEventListener("resize", updateScrollEffects);
soundToggle.addEventListener("click", () => {
  soundOn = !soundOn;
  soundToggle.setAttribute("aria-pressed", String(soundOn));
});
updateScrollEffects();
updateTime();
drawSoundWave();
setInterval(updateTime, 30000);
