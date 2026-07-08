/* Conditional Control Flow */

/*1.sequential control flow*/
{

    console.log("\n==== Sequential Control Flow ====");
    

    let a=10;
    let b=20;

    console.log(a);
    console.log(b);
    console.log(a + b);
    
}

/* 2. Conditional Control flow */

// 1. if statement 
// 2. if...else statement 
// 3. if...else...if statement 
// 4. switch case statement 
// 5. Break statement 
// 6. Continue statement 
// 7. Nested statement 


// 1. if statement 
/* Execute a block of code only if the condition is true. */
{
    let age =19;
    if(age >= 18){
        console.log("You are eligible to vote");
    }
        
}


// 2. if...else statement
/* Execute a block of code if the condition is true, otherwise execute another block of code. */
{
    let age = 17;
    if(age >= 18){
        console.log("You are eligible to vote");
    }else{
        console.log("You are not eligible to vote");
    }
}

// 3. if...else...if statement
/* Execute a block of code if the condition is true, otherwise check another condition. */
{
    let marks = 60;
    if(marks >= 90){
        console.log("Grade A");
    }else if(marks >= 80){
        console.log("Grade B");
    }else if(marks >= 70){
        console.log("Grade C");
    }else{
        console.log("Fail");
    }
}

// switch case statement
/* Execute a block of code based on the value of a variable. */
{
    let day = 10;
    switch(day){

        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid day");
    }
}
