// ES6 Modul in Javascript

// ES6 - 2015

// var keyword

var x = 10

// var = variable keyword
// x = variable name
// 10 = value

console.log(x)


/* Hoisting in javascript*/

console.log(y)
var y= 20

var y= 20
console.log(y)

var a1 = 'a1' ; a2 = 'a2' ; a3 ='a3'
console.log(a1,a2,a3)

// ; = end 

/*Redeclare / reassign*/

// var keyword
var name = 'rajesh'
name = 'Rakesh'  //reassign

var name='ritesh' //redeclare 
console.log(name)

// -> it is redeclare and reassign both

// let keyword
let names = 'kiren'
names = 'kirtan'  //reassign

// let names='ritesh' //redeclare 
console.log(names)

// -> it cannot redeclare  
// -> it can reassign  


// const keyword
const namex = 'jay'
// namex = 'jayesh'  //reassign

// let namex = 'jayesh' //redeclare 
console.log(namex)

// -> it cannot redeclare  
// -> it cannot reassign  



/* javascript Scope method */

/*Global scope*/
// {
//     var ax = 10
//     let ae =10
//     const as = 10
// }
// console.log(ax)
// console.log(ae)
// console.log(as)

// -> only var keyword is global scope

/* Block Scope */

// ->let keyword is block scope
// ->const keyword is block scope


/* Function Scope*/

function count(){
    let count=0 
    count += 2
    console.log(count)
}

console.log(count())