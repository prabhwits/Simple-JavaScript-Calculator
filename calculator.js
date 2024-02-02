function calculator() {
  var prompt = require("prompt-sync")();
  var num1 = 0;

  // First number in the calculator
  num1 = Number(prompt("Enter the Number: "));

  console.log(`Result: ${num1}\n`);

  // Second number in the calculator
  var num2 = null;

  while (operation != 0) {
    console.log(`Enter the following prompts for operations: 
        '0'     :      (Close)
        '1'     :      (Clear) 
        '+'     :      (Addition) 
        '-'     :      (Subtraction) 
        '*'     :      (Multiplication) 
        '/'     :      (Division) 
        '^'     :      (Exponentiation) 
        '%'     :      (Modulus)\n`);
    var operation = prompt("Enter the operation: ");
    if (operation == 0) {
      console.log("Result: ", num1);
      continue;
    }
    if (operation == 1) {
      num1 = Number(prompt("Enter the First Number: "));
      continue;
    }
    num2 = Number(prompt("Enter the number: "));
    switch (operation) {
      case "+":
        num1 = num1 + num2;
        break;
      case "-":
        num1 = num1 - num2;
        break;
      case "*":
        num1 = num1 * num2;
        break;
      case "/":
        num1 = num1 / num2;
        break;
      case "^":
        num1 = num1 ** num2;
        break;
      case "%":
        num1 = num1 % num2;
        break;
      default:
        console.log("Error: The operation you entered is not valid!!");
        operation = 0;
        break;
    }
    console.log("Result :", num1);
  }
}

module.exports = calculator;