const incremental = document.getElementById("counter");
const decremental = document.getElementById("counter");
const addButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
let count = 0;
incremental.textContent = count;
decremental.textContent = count;

addButton.addEventListener("click", () => {
  count++;
  incremental.textContent = count;
});

minusButton.addEventListener("click", () => {
  count--;
  decremental.textContent = count;
});
