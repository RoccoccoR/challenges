console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  // write your code here
  updatePizzaGain();
});

pizzaInput2.addEventListener("input", () => {
  // write your code here
  updatePizzaGain();
});

function updatePizzaGain() {
  const pizzaSize1 = pizzaInput1.value1;
  const pizzaSize2 = pizzaInput2.value2;

  calculatePizzaGain(pizzaSize1, pizzaSize2);
}

// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(diameter1, diameter2) {
  const area1 = Math.PI * diameter1;
  const area2 = Math.PI * diameter2;

  const gain = ((area2 - area1) / area1) * 100;

  output.textContent = Math.round(gain);
}

// Task 2
// define the function updatePizzaDisplay here

function updatePizzaDisplay(pizzaElement, newSize) {
  const newDisplaySize = (newSize / 24) * 100;

  pizzaElement.style.width = newDisplaySize + "px";
}

// Task 3
// define the function updateOutputColor here

function updateOutputColor(size1, size2) {
  const outputSection = f;
}
