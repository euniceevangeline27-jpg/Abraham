const pages = [
  document.getElementById("page-1"),
  document.getElementById("page-2"),
  document.getElementById("page-3"),
];

const teaBtn = document.getElementById("tea");
const teaLine = document.getElementById("tea-line");

const next1 = document.getElementById("next-1");
const next2 = document.getElementById("next-2");
const back2 = document.getElementById("back-2");
const back3 = document.getElementById("back-3");

const sparkleLine = document.getElementById("sparkle-line");
const finalLine = document.getElementById("final-line");

const confettiBtn = document.getElementById("confetti");

// page switching
function showPage(index) {
  pages.forEach((p, i) => p.classList.toggle("active", i === index));
  const decor = pages[index].getAttribute("data-decor") || "simple";
  document.body.setAttribute("data-decor", decor);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

next1.addEventListener("click", () => showPage(1));
next2.addEventListener("click", () => {
  showPage(2);
  sparkleLine.textContent = "Glow up noted. Proud friend moment.";
});
back2.addEventListener("click", () => showPage(0));
back3.addEventListener("click", () => showPage(1));

// tea interaction
const teaLines = [
  "Tea refilled. Proceed with the drama.",
  "Sipping tea and causing chaos, respectfully.",
  "Ok bestie energy activated.",
  "Tea check. Now click continue.",
];

teaBtn.addEventListener("click", () => {
  const pick = teaLines[Math.floor(Math.random() * teaLines.length)];
  teaLine.textContent = pick;
});

// confetti
const canvas = document.getElementById("fx");
const ctx = canvas.getContext("2d");

function resize() {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.floor(window.innerWidth * dpr);
  canvas.height = Math.floor(window.innerHeight * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
window.addEventListener("resize", resize);
resize();

let confetti = [];
let animId = null;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function launchConfetti() {
  confetti = [];
  const count = 160;

  for (let i = 0; i < count; i++) {
    confetti.push({
      x: random(0, window.innerWidth),
      y: random(-40, -10),
      r: random(3, 7),
      vx: random(-2.2, 2.2),
      vy: random(2.5, 6.5),
      spin: random(-0.2, 0.2),
      a: random(0, Math.PI * 2),
      life: random(80, 140),
    });
  }

  finalLine.textContent = "Correct answer accepted.";

  if (animId) cancelAnimationFrame(animId);
  tick();
}

function tick() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  confetti.forEach((p) => {
    p.x += p.vx;
    p.y += p.vy;
    p.a += p.spin;
    p.life -= 1;

    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.a);
    ctx.globalAlpha = Math.max(0, Math.min(1, p.life / 120));

    // rectangles only, no fixed colors, so use a light/dark alternating fill
    ctx.fillStyle = p.life % 2 === 0 ? "rgba(0,0,0,0.75)" : "rgba(255,255,255,0.85)";
    ctx.fillRect(-p.r, -p.r, p.r * 2, p.r * 1.6);

    ctx.restore();
  });

  confetti = confetti.filter((p) => p.life > 0 && p.y < window.innerHeight + 30);

  if (confetti.length > 0) {
    animId = requestAnimationFrame(tick);
  } else {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    animId = null;
  }
}

confettiBtn.addEventListener("click", launchConfetti);

// start decor mode
showPage(0);
