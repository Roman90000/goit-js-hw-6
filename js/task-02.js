const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.querySelector("#ingredients");

const liEl = ingredients
  .map((item) => `<li class='item'>${item}</li>`)
  .join("");

ulEl.insertAdjacentHTML("beforeend", liEl);
