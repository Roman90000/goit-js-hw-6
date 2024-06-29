function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const cpan = document.querySelector(".color");
const button = document.querySelector(".change-color");

button.addEventListener("click", onChangeColor);

function onChangeColor() {
  const color = getRandomHexColor();
  cpan.textContent = color;
  body.style.backgroundColor = color;
}
