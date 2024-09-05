let count = 0;

const countDisplay = document.getElementById('countDisplay');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');

const updateDisplay = () => {
  countDisplay.textContent = count;
};

const increase = () => {
  if (count < 10) {
    count += 1;
    updateDisplay();
  }
};

const decrease = () => {
  if (count > 0) {
    count -= 1;
    updateDisplay();
  }
};

const reset = () => {
  count = 0;
  updateDisplay();
};

increaseBtn.addEventListener('click', increase);
decreaseBtn.addEventListener('click', decrease);
resetBtn.addEventListener('click', reset);

// Initialize display
updateDisplay();
