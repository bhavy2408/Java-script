// Student Grade Logic: Take a student's marks in 3 subjects, calculate the total and percentage, 
// and use logical operators (&&) to set a boolean flag to true if the percentage is above 75. 

let sub1 = 72
let sub2 = 95
let sub3 = 70

let total = sub1 + sub2 + sub3
console.log("Total marks = ",total);

let percentage = total * 100 / 300
console.log("Percentage = ",percentage);


let isabove75 = (percentage > 75) && true
console.log(isabove75);
