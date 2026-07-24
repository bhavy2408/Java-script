// Leap Year Checker: Check if a year is a leap year (divisible by 4 but not by 100, OR divisible by 400) using logical operators, 
// and display the boolean result. 

let year = 2029

let isleapyear = (year % 4 == 0 && year % 100 != 0 ) || (year % 400 == 0)

console.log(isleapyear);

