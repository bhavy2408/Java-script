/* Function in javascritp */

// What is function ?
// => A function is a block of reusable code that performs a specific task. 
// Instead of writing the same code multiple times, you can write it once in a 
// function and call it whenever needed.

// 1. Function Declaration (Named Function)
// => A function declaration is the most common way to create a function. 
// It has a name and can be called before or after its declaration because 
// it is hoisted.

//syntax:-
// function functionName() {
    // code
// }

{

    function greet (){
        console.log("hello world");
    }
    greet();
}

//2.Function Expression (Anonymous Function)
// => A function is assigned to a variable.
// It can be named or anonymous. 
// Function expressions are not hoisted, so they can only be called after they are defined.

// syntax:-
// const variableName = function() {
//     // code
// };

const geetMessage = function() {
    console.log("hello world");
}

geetMessage();

// 3. Arrow Function (ES6)

// => Arrow functions were introduced in ES6 (ECMAScript 2015).

// syntax:- 
//const functionName = () => {
    // code
// };

const arrow = () =>{
    console.log("hello world");
}
arrow();

const add = (a, b) => a + b;
console.log(add(5, 3));

// 4. Anonymous Function

// An anonymous function is a function without a name.

{

    setTimeout(function() {
        console.log("hello world");
    }, 3000);
}

// 5. Immediately Invoked Function Expression (IIFE)
// An IIFE executes immediately after it is created.

// syntax:-
// (function(){
    // code
// })();

(function() {
    console.log("executes immediately");
})();

// 6. Constructor Function
// Constructor functions are used to create multiple objects.

function student (name, age ){
    this.name= name;
    this.age= age;
}

const s1 = new student("Rahul", 19);

console.log(s1.name);
console.log(s1.age);

// new creates a new object.
// this refers to the new object being created.

// 7. Recursive Function
// A recursive function calls itself until a condition is met.

function factorial(n){
    if(n === 1)
        return 1;
    else
        return n * factorial(n - 1);    
}

console.log(factorial(9));

// 7. Callback Function
// A function passed as an argument to another function.

function callbackFunction(callback) {
    callback(10 , 20);
}

function sub(a, b){
    console.log(a - b);
}
callbackFunction(sub);

