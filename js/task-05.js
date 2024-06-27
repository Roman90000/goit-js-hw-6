const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", onNameInput);

function onNameInput(evt) {
  if (evt.target.value.trim()) {
    span.textContent = evt.target.value;
  } else {
    span.textContent = "Anonymous";
  }
}
