/* Built in constants */

/*
1. Null
2. isNaN()
3. Number.isNaN()
4. NaN
5. Undefined and Null
6. Infinity and -Infinity
7. Number Constants
*/

/* Null */

// Null is primitive value.
// It is represent  the international absence of any object value.
// It is assigned by a prograammer.

console.log("====Null=====");
console.log(typeof null);
console.log(null == undefined);
console.log(null === undefined);
console.log(null == null);

/* isNaN */

// isNaN() check whether a value is a Not-a-Number. 
// Is first value convert into number.

console.log("===isNaN()===");
console.log(isNaN(NaN));
console.log(isNaN(100));
console.log(isNaN(2e-5));
console.log(isNaN(Infinity));
console.log(isNaN(true));
console.log(isNaN(false));
console.log(isNaN(null));
console.log(isNaN(""));
console.log(isNaN("45"));
console.log(isNaN("hello"));

/*Number.isNaN()*/
// It does not convert value before cheaking.
console.log("===Number.isNaN()===");
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(100));
console.log(Number.isNaN(true));
console.log(Number.isNaN(false));
console.log(Number.isNaN({}));
console.log(Number.isNaN([]));

/*NaN*/

// NaN is means "Not-a-number"
// It is returned whenever a mathemetical operation file.
// NaN datatype is Number.

console.log("===NaN==");
console.log(typeof NaN);
console.log(NaN == NaN);
console.log(NaN === NaN);
console.log(Number.NaN);
console.log(window.hasOwnProperty("NaN"));

// window.hasownproperty=> NaN prototype.

/*Undefined and null */

console.log("=====Undefined=====");
let x;
console.log(typeof x);

console.log(x === undefined)

let student = {
    name:"rahul"
}

console.log(student.name);
console.log(student.age === undefined);

/* Infinity and -Infinity */

// Infinity

// Greater than every number. 
// produced by dividing by zero.


//-Infinity

// smaller than every number. 
// produced by dividing by nagetive zero.

console.log("Infinity and -Infinity")
console.log(Infinity);
console.log(-Infinity);
console.log(1/10);
console.log(1/0);
console.log(22/Infinity);
console.log(Number.MAX_VALUE * 2);
console.log(Infinity + Infinity);

/*Number Constansts*/

console.log("====Number Constansts=====");
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.EPSILON);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);

