/* Operators */
/*
1. Arithmatic operators
2. Assignment operators
3. comparision operators / Relational operators
4. Logical operators
5. Bitwise opretors
6. String operators
7. Conditional (Ternary) operators
8. comma operators (, after that we can write multiple expressions)
9. Unary operators 
10. Type operators 
11. spread opreators
12. Distructing opreators
13. Optional chaining opreators
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

/*6. String operators*/

console.log("====String operators====");

let firstname="Rahul";
let lastname="sharma";

console.log(firstname + lastname);

let greeting = "hello ";
greeting += firstname + lastname;
console.log(greeting);

// Template literals
let name = "Rahul";
let age = 20;

console.log("My name is " + name + " and my age is " + age);
console.log(`My name is ${name} and 
     my age is ${age}`);



/*7. Conditional (Ternary) operators*/

// syntax: condition ? value of true : value of false

console.log("====Conditional (Ternary) operators====");

let marks = 39;

let result = marks >= 40 ? "pass" : "fail";
console.log(result);

/*9. Unary operators */

console.log("====Unary operators====");

let num=6;

num++;
console.log(num);

num--;
console.log(num);

++num;
console.log(++num);

--num;
console.log(--num);

/*10. Type operators */

console.log("====Type operators====");

console.log(typeof 45);
console.log(typeof "rahul");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);
console.log(typeof function(){});

/*11. Spread operators & Rest parameter (...)*/

console.log("====Spread operators====");

let arr1 = [1, 2, 3 ];
let arr2 = [...arr1, 4, 5, 6];

console.log(arr1);
console.log(arr2);

// Rest parameter

function add(a,b){
    return a + b;
}
console.log(add(10,20));

function sum(...num){
    return num.reduce((previousValue, currentValue) => previousValue + currentValue, 0);

}
console.log(sum(10,20,30,40,50));

/*12. Destructuring Assignment operators*/

console.log("====Destructuring Assignment operators====")

{
    let num=[1 , 2 , 3 , 4 , 5];
    const[n1 , n2 , n3 , n4 , n5]=num
    console.log(n5);
}

{
    let details = {
        name : "Rahul" ,
        age : 18 ,
        city : "surat"
    }

     console.log(details.name);

    const {name , age , city}=details
    console.log(name);
    console.log(age);
    console.log(city);
}

// 13. Optional chaining operators (? .)

let student ={
    name : 'priya',
    age : 23,
    address:{
        city:"surat"
    }
}

console.log(student?.name);
console.log(student?.address.city);
console.log(student?.address.city);





