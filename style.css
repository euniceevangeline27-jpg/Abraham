:root {
  --yellow: #ffd84d;
  --yellow2: #ffe98c;
  --ink: #121212;
  --card: rgba(255, 255, 255, 0.75);
  --cardBorder: rgba(0, 0, 0, 0.1);
}

* {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

body {
  margin: 0;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  background: var(--yellow);
  color: var(--ink);
  overflow-x: hidden;
}

.stage {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px;
}

.page {
  width: 100%;
  max-width: 980px;
  display: none;
}

.page.active {
  display: block;
  animation: fadeIn 420ms ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card {
  background: var(--card);
  border: 1px solid var(--cardBorder);
  border-radius: 22px;
  padding: 26px;
  box-shadow: 0 16px 50px rgba(0, 0, 0, 0.12);
  backdrop-filter: blur(8px);
}

.card.wide {
  padding: 28px;
}

h1,
h2 {
  margin: 0 0 10px 0;
  letter-spacing: -0.02em;
}

h1 {
  font-size: clamp(34px, 5vw, 54px);
}

h2 {
  font-size: clamp(26px, 4vw, 40px);
}

p {
  margin: 10px 0;
  font-size: 18px;
  line-height: 1.55;
}

.lead {
  font-size: 20px;
  font-weight: 650;
}

.tiny {
  margin-top: 12px;
  font-size: 14px;
  opacity: 0.75;
}

.actions {
  margin-top: 18px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn {
  border: 0;
  border-radius: 14px;
  padding: 12px 16px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 120ms ease, box-shadow 120ms ease, opacity 120ms ease;
}

.btn:active {
  transform: scale(0.98);
}

.btn.primary {
  background: #111;
  color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.18);
}

.btn.ghost {
  background: rgba(255, 255, 255, 0.55);
  color: #111;
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.grid {
  margin-top: 18px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
}

@media (min-width: 860px) {
  .grid {
    grid-template-columns: 0.95fr 1.05fr;
    align-items: center;
  }
}

.photoWrap {
  width: 100%;
}

.photo {
  width: 100%;
  max-height: 420px;
  object-fit: cover;
  border-radius: 18px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.photoHint {
  display: none;
  padding: 16px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.65);
  border: 1px dashed rgba(0, 0, 0, 0.25);
  font-weight: 650;
}

.bigList {
  margin: 18px 0 0 0;
  padding-left: 24px;
  font-size: clamp(22px, 4vw, 34px);
  font-weight: 800;
}

.bigList li {
  margin: 10px 0;
}

.pop {
  display: inline-block;
  padding: 6px 10px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(0, 0, 0, 0.08);
  transform-origin: left center;
  animation: popIn 450ms ease;
}

@keyframes popIn {
  from {
    transform: scale(0.92);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

/* Background decor */
.bg-decor {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.stage,
#fx {
  position: relative;
  z-index: 1;
}

.sun {
  position: absolute;
  top: -120px;
  right: -120px;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #fff6c2, #ffbf00 60%, #ff8a00 100%);
  filter: blur(0.2px);
  opacity: 0.9;
  transform: rotate(8deg);
  box-shadow: 0 30px 80px rgba(255, 140, 0, 0.25);
  display: none;
}

.flowers {
  position: absolute;
  inset: 0;
  display: none;
}

.flower {
  position: absolute;
  width: 70px;
  height: 70px;
  border-radius: 18px;
  background:
    radial-gradient(circle at 50% 50%, #ffdc4a 0 18%, transparent 19%),
    radial-gradient(circle at 20% 30%, #ffffff 0 28%, transparent 29%),
    radial-gradient(circle at 80% 30%, #ffffff 0 28%, transparent 29%),
    radial-gradient(circle at 20% 80%, #ffffff 0 28%, transparent 29%),
    radial-gradient(circle at 80% 80%, #ffffff 0 28%, transparent 29%);
  opacity: 0.85;
  transform: rotate(12deg);
}

.f1 { left: 18px; bottom: 18px; }
.f2 { left: 100px; bottom: 40px; transform: rotate(-8deg); }
.f3 { right: 26px; bottom: 22px; transform: rotate(16deg); }
.f4 { right: 110px; bottom: 52px; transform: rotate(-14deg); }
.f5 { left: 50%; bottom: 10px; transform: translateX(-50%) rotate(6deg); }

body[data-decor="simple"] .sun,
body[data-decor="simple"] .flowers {
  display: none;
}

body[data-decor="garden"] .sun,
body[data-decor="garden"] .flowers {
  display: block;
}

/* Canvas layer */
#fx {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
