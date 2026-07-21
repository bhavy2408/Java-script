// Advanced Swapping (Without Temp): Swap two numbers without using a third variable (using addition and subtraction logic), 
// and output the results using console.log(). 

let A = 20
let B = 30

console.log("\n Before Swapping the Value \n");
console.log("\n A = ",A);
console.log("\n B = ",B);

A = A + B;
B = A - B;
A = A - B;

console.log("\n After Swapping the Value \n");
console.log("\n A = ",A);
console.log("\n B = ",B);
