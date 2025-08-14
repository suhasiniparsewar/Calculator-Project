// Get the display element
let display = document.getElementById('display');

// Append the clicked value to the display
function appendValue(value) {
  display.value += value;
}

// Clear the entire display
function clearDisplay() {
  display.value = '';
}

// Remove the last entered character
function backspace() {
  display.value = display.value.slice(0, -1);
}

// Square the current number in the display
function square() {
  if (display.value) {
    display.value = Math.pow(eval(display.value), 2);
  }
}

// Calculate and display the result
function calculate() {
  try {
    display.value = eval(display.value); // Use eval to evaluate expression
  } catch {
    display.value = 'Error'; // If invalid expression, show error
  }
}
