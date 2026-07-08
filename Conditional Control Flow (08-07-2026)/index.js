/*loop in javascript*/

/*

1. for loop
2. while loop
3. do while loop
4. for in loop
5. for of loop

*/

/* 1. for loop */
// for loop is used to run a block of code a certain number of times.
//  It consists of three parts: initialization, condition, and increment/decrement.

// syntax

/* for(initialization ; condition ; increment/decrement){
        // block of code to be executed
}*/

for(let a = 0; a <= 5 ; a++){
    console.log(a);
}

console.log("====Break====");

for(let a = 0; a <= 5 ; a++){
    for(let b = 0 ; b < 5 ; b++){
        if(a==4){
            break;

        }
        console.log(a+" "+b);
    }
}

console.log("===continue====");

for(let a = 0; a <= 5 ; a++){
    for(let b = 0 ; b < 5 ; b++){
        if(a==4){
            continue;           
        }
        console.log(a+" "+b);
    }
}

/* 2. While loop */

// while loop is used to run a block of code as long as a specified condition is true. (if false condition than not work this while loop).
// It consists of two parts: condition and block of code to be executed.  


// syntax
// while(condition){
    // block of code to be executed
    // increment/decrement
// }

console.log("\n==== While Loop ====");


let i=0;

while(i < 5){
    console.log(i);
    i++;
}

/* 3. Do While Loop */

// do-while loop is similar to while loop, but it will always execute the block of code at least once,
// even if the condition is false. 
// It consists of two parts: block of code to be executed and condition.

// syntax :-
// Do{
// block of code to be executed
// }while(condition);

console.log("\n==== do While Loop ====");

// let i=0;  

// do{
//     console.log(i);
//     i++;
// }while(i < 5);

let j = 1;

do{
  console.log(j);
  j++;
}while(j <= 5);

/* 4. for in Loop */

// for in loop is used to loop through the properties of an object. 
// It consists of two parts: variable and object.

// syntax :-

// for(variable in object){
//      block of code executed
// }

const person = {
    name: "john",
    age: 18, 
    city: "New York"
}

// console.log(person.name);
// console.log(person['name']);

for(let key in person){
    console.log(key+ ": " + person[key]);
}


/* 4. for of  Loop */

// for of loop is used to loop through the values of an iterable object. 
// It consists of two parts: variable and iterable object.

// syntax :-

// for(variable of iterable){
//      block of code executed
// }

let num = [1, 2, 3, 4, 5];

for(let number of num){
    console.log(number);
    
}

let str= "new york"

for (let arr of str){
    console.log(str);
    
}







