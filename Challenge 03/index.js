// Challenge 03 Arrow Functions

// Convert the given function into an arrow function and store the returned value in a variable and log it to the console.

function mathFunction(a, b) {
  const addition = a + b;
  const subtraction = a - b;
  const multiplication = a * b;
  const division = a / b;
  return { addition, subtraction, multiplication, division };
}
console.log(mathFunction(10, 5));

const mathArrowFunction = (a, b) =>
  `addition ${a + b}, subtraction ${a - b}, multiplication ${a * b}, division ${
    a / b
  }`;
console.log(mathArrowFunction(10, 5));
