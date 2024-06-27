const counterValue = 0;

const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
const spanEl = document.querySelector("#value");
console.log(decrement);
console.log(spanEl.textContent);

increment.addEventListener("click", onIncrement);
decrement.addEventListener("click", onDecrement);

function onIncrement() {
  spanEl.textContent = Number(spanEl.textContent) + 1;
}

function onDecrement() {
  spanEl.textContent = Number(spanEl.textContent) - 1;
}
