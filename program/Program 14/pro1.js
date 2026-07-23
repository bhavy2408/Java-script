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
