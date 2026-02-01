const btn = document.getElementById("btn");
const card = document.getElementById("card");
const line = document.getElementById("line");

let clicked = false;

btn.addEventListener("click", () => {
  clicked = !clicked;

  if (clicked) {
    card.classList.remove("hidden");
    line.textContent = "Ok now look";
    btn.textContent = "Hide surprise";
  } else {
    card.classList.add("hidden");
    line.textContent = "I made this for you.";
    btn.textContent = "Click for a surprise";
  }
});
