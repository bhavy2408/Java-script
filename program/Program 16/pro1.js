// Type Conversion (String to Number): Declare two numeric strings (e.g., "10" and "25"), convert them to actual numbers, add them together, and print the result to demonstrate proper conversion vs. concatenation. 
// Type Conversion (String to Number)

let num1 = "10";
let num2 = "25";

// String Concatenation
console.log("Without Conversion: " + (num1 + num2));

// Convert strings to numbers
let n1 = Number(num1);
let n2 = Number(num2);

// Addition
let result = n1 + n2;

console.log("After Conversion: " + result);