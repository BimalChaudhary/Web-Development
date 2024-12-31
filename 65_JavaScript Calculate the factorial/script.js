// function factorial(n) {
//     if (n === 0) {
//       return 1;
//     } else {
//       return n * factorial(n - 1);
//     }
//   }
  
//   // Get input from the user
//   const input = prompt("Enter a non-negative integer:");
  
//   // Convert input to a number
//   const num = parseInt(input);
  
//   // Check if input is a valid non-negative integer
//   if (isNaN(num) || num < 0) {
//     console.log("Invalid input. Please enter a non-negative integer.");
//   } else {
//     const result = factorial(num);
//     document.write(`The factorial of ${num} is ${result}`);
//   }

function factorialUsingLoop(n) {
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
      result *= i;
  }
  return result;
}

// Example
console.log(factorialUsingLoop(5)); // Output: 120
