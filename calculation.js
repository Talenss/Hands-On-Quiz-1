// Addition function with default parameters to support multiple arguments
const add = function add(...args) {
    return args.reduce((acc, num) => acc + num, 0);
  };
  
  // Subtraction function
  const subtract = function subtract(a, b) {
    return a - b;
  };
  
  // Multiplication function
  const multiply = function multiply(a, b) {
    return a * b;
  };
  
  // Division function with error handling for division by zero
  const divide = function divide(a, b) {
    if (b === 0) {
      return 'Error: Division by zero';
    }
    return a / b;
  };
  
  // Export functions for use in other files
  module.exports = {
    add,
    subtract,
    multiply,
    divide
  };
  