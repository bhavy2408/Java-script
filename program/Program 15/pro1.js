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


