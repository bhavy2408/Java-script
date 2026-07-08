/* Operators */
/*
1. Arithmatic operators
2. Assignment operators
3. comparision operators
4. Logical operators
5. Bitwise opretors
6. String operators
7. Conditional (Ternary) operators
8. comma operators
9. Unary operators
10. Type operators 
11. Relational operators
12. spread opreators
13. Distructing opreators
14. Optional chaining opreators
*/

// 1. Arithmatic operators

let a = 2 //oprands
let b = 3

console.log("====Arithmatic operators====");

console.log("Addition : ", a + b);
console.log("Subtraction : ", a - b);
console.log("Multiplication : ", a * b);
console.log("Division : ", b / a);
console.log("Modulus : ", a % b);
console.log("Expontiation : ", a ** b);

//2.Assignment opretors

let x = 2

console.log("====Assignment opretors====")

x += 2
console.log(x);

x -= 3
console.log(x);

x *= 6
console.log(x);

x /= 2
console.log(x);

x %= 2
console.log(x);

x **= 2
console.log(x);

//3. comparision operators

let y = 20

console.log("====comparision operators====");

console.log(y = 20);
console.log(y == 20);
console.log(y === 20);
console.log(y === '20');
console.log(y < 20);
console.log(y > 20);
console.log(y <= 20);
console.log(y >= 20);


//4. Logical operators 

let decision1=true;
let decision2=false;
let decision3=true;

console.log("====Logical operators====");

// And operator
console.log(decision1 && decision2);
console.log(decision1 && decision3);
console.log(decision2 && decision2);
console.log(decision2 && decision3);

// OR operator
console.log(decision1 || decision2);
console.log(decision2 || decision2);
console.log(decision1 || decision3);

// Logical Not (!) 
console.log(decision1 != decision2);
console.log(decision2 != decision2);
console.log(decision1 != decision3);


// 5. Bitwise opretors

let bit1 = 5; //0101
let bit2 = 2; //0010
                          
console.log(bit1 & bit2);
console.log(bit1 | bit2);
console.log(bit1 ^ bit2);

// 14. Optional chaining opreators

