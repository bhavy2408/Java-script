// ES5 vs ES6 Scope: Write a program that demonstrates the difference between
// var (ES5) and let/const (ES6) regarding block scope by showing which variables
//are accessible inside and outside a { } block. 

//ES5 var function 
console.log("Using var:");

{
    var a= 10;
    console.log("inside:-  ",a);
}

console.log("outside:- ",a);


//ES6 let function 
console.log("Using let:");

{
    let b= 20;
    console.log("inside:-  ",b);
}

// console.log("outside:- ",b); //error

//ES6 const function

console.log("Using const:");
{
    const c= 30;
    console.log("inside:-  ",c);
}

// console.log("outside:- ",c); //error