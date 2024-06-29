function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const divBox = document.querySelector("#boxes");

input.addEventListener("change", onInput);
btnDestroy.addEventListener("click", destroyBoxes);

function onInput(evt) {
  const inputValue = evt.currentTarget.value;
  createBoxes(inputValue);
}

function createBoxes(amount) {
  for (let i = 0, b = 30; i < amount; i++, b += 10) {
    let createBox = document.createElement("div");
    createBox.style.width = b + "px";
    createBox.style.height = b + "px";
    createBox.style.margin = "10px";
    createBox.style.backgroundColor = "tomato";

    divBox.insertAdjacentElement("beforeend", createBox);
  }
}

function destroyBoxes() {
  divBox.innerHTML = "";
  input.value = "";
}
