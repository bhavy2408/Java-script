// function in js 
// => A function is a block of reusable code that performs a specific task.

// Types of functions in JavaScript:

// // 1. Function Declaration: 
// => A Function Declaration is a function that is defined using the function keyword 
// and a function name.
// => It is hoisted, meaning it can be called before its declaration in the code.


// syntax :-
// function functionName() {
//     // function body
// }

// Example:-
{
    console.log(add(2, 3));

    function add(a, b) {
        return a + b;
    }
}


// 2. Function Expression:
// => A Function Expression stores a function inside a variable.
// => It is NOT hoisted like Function Declaration.

// sytax:-
// const functionName = function() {
//     // function body
// }

// Example:-
{

    const multiply = function (a, b) {
        return a * b;
    }

    console.log(multiply(2, 3));
}

// 3. Anonymous function:
// => An Anonymous Function is a function without a name.
// => Mostly used in callbacks and function expressions.

// Syntax:
// function(){
// }

// Example:-
{

    const greet = function () {
        console.log("Hello");
    }

    greet();
}

// 4.Named function Expression:
// => A function Expression That also has its own names.

// Example:-

{
    const greet = function hello() {
        console.log("Hello");
    }

    greet();
}

// 5.Arrow Function (ES6)
// => Arrow Function is a shorter syntax introduced in ES6.

// Syntax:-
// const add = (a,b) => {
//     return a + b; 
// };


// Example :-
const add = (a, b) => {
    return a + b;
};
console.log(add(10, 20));

// 6.IIFE(Immediately Invoked Function Expression)
// => Runs immediately after creation.

// syntax:-
// (function(){
//     code
// })()

// Example :-
(
    function(){
        console.log("Executed");
    }
)();

// 7.Callback Function 
// => A Callback Function is a function that is passed as an argument to 
// another function and is executed after some operation has been completed.

// Example:-
function greet(name){
    console.log("hello " + name);
}   

function procces(callback){
    callback("meet");
}

procces(greet);

// 8.HOF(High Order Function)
// => A High Order Function is a function that takes another function as an argument.

// Example:-
function  operation(fn){
    fn();
}

operation(function(){
    console.log("Hello");
}

);

// 9. constructor function
// => A constructor function is a special type of function that is used to create objects.

// Example:-
function person(name,age){
    this.name=name;
    this.age=age;
}

const p1=new person("meet",20);
const p2=new person("bhavy",19);
console.log(p1);
console.log(p1.name);
console.log(p1.age);
console.log(p2.name);
console.log(p2.age);

// 10. object method
// => A method is a function that is a property of an object.

// Example:-
const student = {
    name : "meet",
    greet(){
        console.log("Hello",this.name);
    } 
}

console.log(student.greet());

// 11.Genrator Function
// => A Generator Function is a special function that can pause and resume its 
//  execution using the yield keyword. It is declared using function*.