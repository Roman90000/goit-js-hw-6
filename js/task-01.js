const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);
console.log(categories);

const categorieElement = categories.forEach((item) =>
  console.log(
    "Category:",
    item.firstElementChild.textContent,
    "Elements:",
    item.lastElementChild.children.length
  )
);
