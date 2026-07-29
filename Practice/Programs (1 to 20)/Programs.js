// Proj :- 1 
//  The Four Outputs: Write a TypeScript program that displays a welcome message using
//  all four output methods covered in class: console.log(), document.write(), alert(),
//  and innerHTML. 

console.log("Welcome to the program!");
document.write("Welcome to the program!");
alert("Welcome to the program!");
document.getElementById("welcomeMessage").innerHTML = "Welcome to the program!";

// Proj :- 2
// Data Type Declaration: Declare four variables explicitly using TypeScript data 
// types: a string (name), a number (age), a boolean (isStudent), 
// and an any (dynamic value), then initialize and print them. 


let a = "bhavy"
let b = 34
let c = true
let d = "This is a dynamic value"

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);  

// Proj :- 3
// ES5 vs ES6 Scope: Write a program that demonstrates the difference between
// var (ES5) and let/const (ES6) regarding block scope by showing which variables
//are accessible inside and outside a { } block. 

//ES5 var function 
console.log("Using var:");

{
    var a= 10;
    console.log("inside:-  ",a);
}

console.log("outside:- ",a);


//ES6 let function 
console.log("Using let:");

{
    let b= 20;
    console.log("inside:-  ",b);
}

// console.log("outside:- ",b); //error

//ES6 const function

console.log("Using const:");
{
    const c= 30;
    console.log("inside:-  ",c);
}

// console.log("outside:- ",c); //error

// Proj :- 4
// Const Mutation: Declare an object or array using const and demonstrate that
// while you cannot reassign the variable itself, you can change its internal 
// properties or elements.

const student = {
    name: "bhavy",
    age: 20
}

console.log("Original Object : ",student);

// Proj :- 5
// Simple Swapping (With Temp): Write a TypeScript program to swap the values of two variables using a third temporary variable, 
// displaying the "Before" and "After" values using innerHTML. 

let A = 20
let B = 30
let temp

console.log("\n Before Swapping the Value \n");
console.log("\n A = ",A);
console.log("\n B = ",B);

temp=A;
A=B;
B=temp;

console.log("\n After Swapping the Value \n");
console.log("\n A = ",A);
console.log("\n B = ",B);

//  Proj :- 6
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

// Proj :- 7
// Calculator Basics: Declare two number variables and perform addition, subtraction, multiplication, division, and modulus on them, 
// displaying the results via document.write(). 

var A = 10
var B = 5
var result

result =  A + B
console.log("\n==Addition==\n");
document.write("Addition = " + result);

result =  A - B 
console.log("\n==Subtraction==\n");
document.write("Subtraction = " + result);

result =  A * B 
console.log("\n==Mutltiplication==\n");
document.write("Mutltiplication = " + result);

result =  A / B 
console.log("\n==Division==\n");
document.write("Division = " + result);

result =  A % B
console.log("\n==Modulus==\n");
document.write("Modulus = " + result);

// Proj :- 8
// Area of a Circle: Write a program to calculate the area of a circle by declaring the radius as a number and PI as a const (3.14159). 

let radius = 5
let pi = 3.14
let Area

Area = pi * radius * radius
console.log("Area of Circle = ",Area);

// Proj :- 9
// Simple Interest: Calculate simple interest by defining variables for Principal, Rate, and Number of years using the formula: (P * R * N) / 100. 

let p = 12000
let r = 5
let t = 3
let si

si = (p * r * t)/100

console.log("Simple Intrest = ",si);

// Proj :- 10
// Temperature Converter: Convert a temperature from Celsius to Fahrenheit using the formula (C * 9/5) + 32 and display the result using an alert(). 


// Temperature Converter

let celsius = 25;
let fahrenheit;

fahrenheit = (celsius * 9 / 5) + 32;
alert(fahrenheit);


// Proj :- 11
//  Discount Calculation: Calculate the final selling price of a product by declaring its original price and applying a 15% discount. 

var product1 = 6000
var product2 = 6000

var originalprice = product1 + product2
console.log("Original Price = ",originalprice);

var discount = originalprice * 15 / 100
console.log("Discount = ",discount);

var finalprice = originalprice + discount
console.log("Final Price = ",finalprice);


// Proj :- 13
//  Employee Salary (Simple): Calculate an employee's Gross Salary by adding HRA (10% of basic) and DA (5% of basic) to a predefined Basic Salary. 

const salary = 80000
console.log("Basic Salary = ",salary);

const HRA = salary * 10 / 100
console.log("\nHouse Rent Allowance = ",HRA);

const DA = salary * 5 /100
console.log("\n Dearness Allowance = ",DA);

const Gross = salary + HRA + DA
console.log("\n Gross Salary = ",Gross);

// Proj :- 14
//  Employee Salary (With Deductions): Extend the previous salary program to calculate Provident Fund (12% of Basic) and determine the 
// Net Salary (Gross - PF), outputting the slip to console.log(). 

const salary = 80000
console.log("Basic Salary = ",salary);

const HRA = salary * 10 / 100
console.log("\nHouse Rent Allowance = ",HRA);

const DA = salary * 5 /100
console.log("\n Dearness Allowance = ",DA);

const Gross = salary + HRA + DA
console.log("\n Gross Salary = ",Gross);

const pf = salary * 12 /100
console.log("\nProvident Fund = ",pf);

const net = Gross + pf 
console.log("\n Net Salary = ",net);

// Proj :- 15
// Days Converter: Convert a given total number of days (e.g., 400) into Years, Months, and remaining Days using arithmetic and modulus operators. 

let days = 760
console.log("\nTotal Days = ",days);


let years = days / 365
console.log("\nYears = ",years);

let remaindays = days % 365

let months = remaindays / 30
console.log("Months = ",months);

let totaldays = days % 30
console.log("Total Days = ",totaldays);

// Proj :- 16
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

// Proj :- 17
// Even or Odd: Use the modulus operator (%) and comparison operators to check if a given number is even or odd, 
// storing and displaying the boolean result.

let num = 122

if(num % 2 == 0)
    console.log("True");
else
    console.log("False");
    
    
// Proj :- 18
// Maximum of Two: Use comparison operators and the ternary operator (? :) to find and print the maximum value between two numbers.

let num1 = 36
let num2 = 90

let max = (num1 < num2) ? num2 : num1

console.log("Maximum Number :- ", max);

// Proj :- 19
// Maximum of Two: Use comparison operators and the ternary operator (? :) to find and print the maximum value between two numbers.

let num1 = 36
let num2 = 90

let max = (num1 < num2) ? num2 : num1

console.log("Maximum Number :- ", max);

// Proj :- 20
// Leap Year Checker: Check if a year is a leap year (divisible by 4 but not by 100, OR divisible by 400) using logical operators, 
// and display the boolean result. 

let year = 2029

let isleapyear = (year % 4 == 0 && year % 100 != 0 ) || (year % 400 == 0)

console.log(isleapyear);