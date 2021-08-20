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
  switch(operator) {
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

//  POPULATE THE DISPLAY
let currentOutput = document.querySelector(".current-output");
let previousOutput = document.querySelector(".previous-output");

let displayPlaceholder = 0;
let displayValue = "";
currentOutput.innerText = displayPlaceholder;

let previousValue = null;
previousOutput.innerText = previousValue;

let operand1 = null;
let operand2 = null;
let operator = null;

// ! BUTTONS
// All clear button
const allClearButton = document.getElementById("AC");
allClearButton.addEventListener("click", () => {
  displayValue = "";
  operand2 = null;
  operand1 = null;
  currentOutput.innerText = displayPlaceholder;
});

// Number buttons
const numberButtons = document.querySelectorAll(".number");

numberButtons.forEach(function (numberButton) {
  numberButton.addEventListener("click", () => {
    let text = numberButton.textContent;
    let subtotal = text;
    displayValue += subtotal;
    currentOutput.innerText = displayValue;
  });
});

// Operator buttons
const operatorButtons = document.querySelectorAll(".operator");

operatorButtons.forEach(function (operatorButton) {
  operatorButton.addEventListener("click", () => {
    operator = operatorButton.textContent;
    calculation();
  });
});

function calculation() {
  if (operand1 == null) {
    operand1 = displayValue;
    displayValue = "";
    currentOutput.innerText = displayValue;
    previousOutput.innerText = operand1;
  } else {
    let result = operate(Number(operand1), Number(displayValue), operator);
    currentOutput.innerText = result;
    previousOutput.innerText = ""
    displayValue = "";
  }
}

// const equalsButton = document.querySelector(".equals");

// equalsButton.addEventListener("click", () => {
//   equals();
// });

// function equals() {
//   let result = operate(Number(operand1), Number(displayValue), operator);
//   currentOutput.innerText = result;
//   previousOutput.innerText = null;
// }



// TODO if operand1 is empty, displayvalue = operand1. if not, operate with displayvalue and operand1.
