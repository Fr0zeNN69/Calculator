let x = 0;
let y = 0;
let displayValue = '';
let operator = '';

const display = document.querySelector('#display');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');
const plus = document.querySelector('#add');
const minus = document.querySelector('#subtract');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');
const equal = document.querySelector('#equals');
const clear = document.querySelector('#clear');
const decimal = document.querySelector('#point');
const percent = document.querySelector('#percent');
const negate = document.querySelector('#negate');

// Number Buttons
[one, two, three, four, five, six, seven, eight, nine, zero].forEach(button => {
  button.addEventListener('click', () => populate(button.textContent));
});

// Operator Buttons
plus.addEventListener('click', () => handleOperator('+'));
minus.addEventListener('click', () => handleOperator('-'));
multiplyBtn.addEventListener('click', () => handleOperator('*'));
divideBtn.addEventListener('click', () => handleOperator('/'));
percent.addEventListener('click', handlePercent);


negate.addEventListener('click', () => {
  if (display.value !== '') {
    display.value = -parseFloat(display.value);
    displayValue = display.value;
  }
});

// Equal Button
equal.addEventListener('click', () => {
  if (operator && display.value !== '') {
    y = parseFloat(display.value);
    try {
      displayValue = calculate(x, y, operator);
      display.value = displayValue;
      x = displayValue;
      operator = '';
    } catch (error) {
      display.value = 'Error';
    }
  }
});

// Clear Button
clear.addEventListener('click', () => {
  display.value = '';
  displayValue = '';
  x = 0;
  y = 0;
  operator = '';
});

// Decimal Button
decimal.addEventListener('click', () => {
  if (!display.value.includes('.')) {
    populate('.');
  }
});

// Functions
function populate(val) {
  display.value += val;
  displayValue = display.value;
}

function handleOperator(op) {
  if (display.value !== '') {
    x = parseFloat(display.value);
    operator = op;
    display.value = '';
  }
}
function handlePercent() {
    if (display.value !== '') {
      let currentValue = parseFloat(display.value);
      currentValue = currentValue / 100;
      display.value = currentValue;
      displayValue = currentValue;
    }
  }
  

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
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  } else {
    return a / b;
  }
}
function calculate(a, b, operator) {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
  }
}
