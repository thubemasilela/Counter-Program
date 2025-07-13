const decrementBtn = document.getElementById("decrementBtn");
const restBtn = document.getElementById("restBtn");
const incrementBtn = document.getElementById("incrementBtn");
const displayValue = document.querySelector(".displayValue");
let count = 0;

incrementBtn.onclick = function () {
  count++;
  displayValue.textContent = count;
};

restBtn.onclick = function () {
  count = 0;
  displayValue.textContent = count;
};

decrementBtn.onclick = function () {
  count--;
  displayValue.textContent = count;
};
