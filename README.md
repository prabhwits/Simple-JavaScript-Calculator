# Simple JavaScript Calculator

This is a simple command-line calculator implemented in JavaScript. It takes user input for two numbers and performs various operations based on the provided operation symbol. The calculator supports addition, subtraction, multiplication, division, exponentiation, modulus, closing the calculator, and clearing the current result.

## Installation

Before running the calculator script, make sure to install the `prompt-sync` module:

```bash
npm install prompt-sync
```

## Usage

1. Run the script in a Node.js environment:

```bash
node calculator.js
```

2. Follow the prompts to enter the first number, select an operation, and enter the second number if required.

3. Operations:

   - '0' for (Close)
   - '1' for (Clear)
   - '+' for (Addition)
   - '-' for (Subtraction)
   - '\*' for (Multiplication)
   - '/' for (Division)
   - '^' for (Exponentiation)
   - '%' for (Modulus)

4. The calculator will display the result after each operation.

## Example

```bash
Enter the Number: 5
Result: 5

Enter the operation: +
Enter the number: 3
Result: 8

Enter the operation: *
Enter the number: 4
Result: 32

Enter the operation: 0
Result: 32
```

## License
This calculator script is open-source and available under the MIT License.