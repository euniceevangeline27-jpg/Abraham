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

