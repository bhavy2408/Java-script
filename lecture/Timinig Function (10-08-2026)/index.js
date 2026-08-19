/* JavaScript Timing Function */

/*1. setTimeout: 
=> Executes a function after a specified delay (in milliseconds). It runs only once.*/

/* => sytax: setTimeout(function, delay, param1, param2, ...); */

// Example:
setTimeout(() =>{
    console.log("Hello");
},3000); 

// Output: Hello (after 3 seconds)


/*2. clearTimeout: 
=> Cancels a timeout previously set with setTimeout.*/

// Example:
let timer = setTimeout(() => { 
    console.log("Hello");
}, 3000);

clearTimeout(timer); 
// Cancels the timeout, so "Hello" will not be logged.

/*3. setInterval: 
=> Executes a function repeatedly at specified intervals (in milliseconds).
 It continues until cleared.*/


// sytax: 
// => setInterval(function, interval, param1, param2, ...);

// Example:
let intervalId = setInterval(() => {
    console.log("Hello");
}, 2000);

// Output: Hello (every 2 seconds)  

/* 4.clearInterval: 
=> Cancels an interval previously set with setInterval.
*/

// Example:
let intervalid = setInterval(() => {
    console.log("Hello");
}, 2000);

clearInterval(intervalId); 
// Cancels the interval, so "Hello" will not be logged again.

