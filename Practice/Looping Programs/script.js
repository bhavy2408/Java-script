// Program 1
// 1. Print Numbers from 1 to 10

console.log("1. Print Numbers from 1 to 10");

for(i=1 ; i<=10 ; i++){
    console.log(i);
    
}

// Program 2
// 2. Print Even Numbers from 1 to 20

console.log("2. Print Even Numbers from 1 to 20.");

for(i=0 ; i<=20 ; i++)
    if(i % 2 == 0 ){
        console.log(i);
    }


// Program 3
// 3. Print Numbers Divisible by 5 (1–50)

console.log("3. Print Numbers Divisible by 5 (1–50).");

for(i=1 ; i<=50 ; i++){
    if(i % 5 == 0 ){
        console.log(i);
    }
}

// Program 4
// 4. Count Even and Odd Numbers (1–100)

console.log("4. Count Even and Odd Numbers (1–100).");

{

    let even = 0
    let odd = 0
    
    for(i=0 ; i<=100 ; i++){
        if(i % 2 == 0){
            even++;
        }else{
            odd++;
        }
    }
    
    console.log("Even = ", even);
    console.log("Odd = ", odd);
}

// Program 5
// 5. Find the Sum of Even Numbers and odd Number (1–100)
console.log("5. Find the Sum of Even Numbers (1–100)");

let even = 0
let odd = 0
for(i=0 ; i<=100 ; i++){
    if(i % 2 == 0){
        even += i;
    }else{
        odd+= i;
    }
}

console.log("Total Number of Even :- ",even);
console.log("Total Number of Odd :- ",odd);

// Program 6
// 6. Check Prime Numbers (1–50)

console.log("6. Check Prime Numbers (1–50)");

for(let num=2 ; num<=50 ; i++){
    let prime = true

    for(i=0 ; i<=num ; i++){
        if(num % 1 === 0){
            prime = false
        }
    }
}

if(prime){
    console.log(num);
    
}

// Program 7
// 7. Print Numbers Greater Than 50

console.log("7. Print Numbers Greater Than 50.");

for(i=0 ; i<=100 ; i++){
    if(i<50){
        console.log(i);
    }
}

// Program 8
// 8. Print Multiples of 3 but Not 6

console.log("8. Print Multiples of 3 but Not 6");

for(i=0 ; i<=100 ; i++){
    if(i % 3 === 0 && i % 6 !== 0){
        console.log(i);
    }
}

// Program 9
// 9. Print Numbers Divisible by Both 3 and 5

console.log("9. Print Numbers Divisible by Both 3 and 5");

for(i=0 ; i<100 ; i++){
    if(i % 3 == 0 || i % 5 == 0){
        console.log(i);
        
    }
}

// Program 10
// 10. FizzBuzz Program

console.log("10. FizzBuzz Program");

for(i=0 ; i<=100 ; i++){
    if(i % 3 ==0 || i % 5 == 0){
        console.log("FizzBuzz");
    }else if(i % 3 == 0){
        console.log("Fizz");
    }else if(i % 5 == 0){
        console.log("Buzz");
    }else {
        console.log(i);
    }
}

