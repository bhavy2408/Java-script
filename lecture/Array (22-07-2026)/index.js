// 8.indexOf()

{
    let fruits = ["mango","graps", "banana"];
    console.log(fruits.indexOf("banana"));
    console.log(fruits.indexOf("pinapal"));

    let num = [10 , 20 , 30 , 40 , 50 , 20 , 40];
    console.log(num.indexOf(40, 2))
}

// 9.lastindexof()
{
    let fruits = ["mango","graps", "banana","banana"];
    console.log(fruits.lastIndexOf("banana"));
    console.log(fruits.lastIndexOf("pinapal"));

        let num = [10 , 20 , 30 , 50 , 20 , 40 , 40];
    console.log(num.lastIndexOf(40))
} 

// 10.join

{
    const element = ["Hello", "Hi"];
    console.log(element.join("-")) 
}


//11.pop()
{
    const num = [10 , 20 , 30 , 40 , 50];
    const removed = num.pop()
    console.log(removed);
    console.log(num);
    const remove = num.pop()
    console.log(remove);
    console.log(num);
}

//12.push()

{
    const animals = ["sheep" , "goat" , "pig"]
    console.log(animals);
    const addad = animals.push("cows");
    console.log(animals);
}

//13.Shift()
// Remove the first element 
{
    let array = [10 , 20 , 30];
    console.log(array);
    let shift = array.shift();
    console.log(shift);
    console.log(array);
}

//14.unShift()
// Added the bigninnig element 
{
    let array = [10 , 20 , 30];
    console.log(array);
    let added = array.unshift('40 , 50');
    console.log(added);
    console.log(array);
}

// 15. slice
// copy the array . do not change in original array.
{
    let arr = [10 , 20 , 30 , 40 , 50]
    let result = arr.slice(2,5);
    console.log(result);    
}


// 16.tostring()
{
    const array = [10 , 20 , "bhavy" , "hello" , "1hello"];
    let result = array.toString();
    console.log(array);
    console.log(result);
    console.log(array.join("-"));
}

// 17.copyWithin()


// 18.length()
{
    const clothing = ["shocks","shoes","sweater"];
    console.log(clothing.length);
}

// 19.Entries()
// => show index value and element both. 
{

    const array = ["A","B","C","D","E","F"];
    const result = array.entries();

    console.log(result.next().value);
    console.log(result.next().value);
    console.log(result.next().value);
    console.log(result.next().value);
    console.log(result.next().value);

}

// 20. keys()
// => it is show index value
{
    const array = ["A","B","C","D","E","F"];
    const result = array.keys();

    console.log(result.next().value);
}

// 21.values()
// => it is shows the actual element

{
    const array = ["A","B","C","D","E","F"];
    const result = array.values();

    console.log(result.next().value);
    console.log(result.next().value);
    console.log(result.next().value);
    console.log(result.next().value);
    console.log(result.next().value);
}

// 22.filter()

{
    const age = [20 , 50 , 60 , 90 , 33 , 44 , 75 , 5 , 11];
    const result = age.filter((a) => a >= 50 );
    console.log(result);
}

