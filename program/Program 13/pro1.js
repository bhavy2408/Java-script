//  Employee Salary (Simple): Calculate an employee's Gross Salary by adding HRA (10% of basic) and DA (5% of basic) to a predefined Basic Salary. 

const salary = 80000
console.log("Basic Salary = ",salary);

const HRA = salary * 10 / 100
console.log("\nHouse Rent Allowance = ",HRA);

const DA = salary * 5 /100
console.log("\n Dearness Allowance = ",DA);

const Gross = salary + HRA + DA
console.log("\n Gross Salary = ",Gross);


