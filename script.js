const allClearButton = document.getElementById("AC");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const correctButton = document.getElementById("C");
let currentOutput = document.querySelector(".current-output");
let previousOutput = document.querySelector(".previous-output");

let displayPlaceholder = 0;
let displayValue = "";
let previousValue = null;
let operand1 = null;
let operator = null;
let result = null;

// MATH FUNCTIONS
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// OPERATOR FUNCTION
function operate(a, b, operator) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}

// DISPLAY
currentOutput.innerText = displayPlaceholder;
previousOutput.innerText = previousValue;

// BUTTONS
allClearButton.addEventListener("click", () => {
  displayValue = null;
  operand1 = null;
  currentOutput.innerText = displayPlaceholder;
});

numberButtons.forEach(function (numberButton) {
  numberButton.addEventListener("click", () => {
    let text = numberButton.textContent;
    let subtotal = text;
    displayValue += subtotal;
    currentOutput.innerText = displayValue;
  });
});

operatorButtons.forEach(function (operatorButton) {
  operatorButton.addEventListener("click", () => {
    operator = operatorButton.textContent;
    calculation();
  });
});

equalsButton.addEventListener("click", () => {
  equals();
});

correctButton.addEventListener("click", () => {
  correct();
});

// FUNCTIONS
function calculation() {
  if (operand1 == null) {
    operand1 = displayValue;
    displayValue = "";
    currentOutput.innerText = displayValue;
    previousOutput.innerText = operand1;
  } else {
    result = operate(Number(operand1), Number(displayValue), operator);
    currentOutput.innerText = result;
    operand1 = null;
    displayValue = result;
    previousOutput.innerText = "";
  }
}

function equals() {
  result = operate(Number(operand1), Number(displayValue), operator);
  currentOutput.innerText = result;
  previousOutput.innerText = null;
  operand1 = null;
  displayValue = result;
}

function correct() {
  displayValue = displayValue.toString().slice(0, -1);
  currentOutput.innerText = displayValue;
}
