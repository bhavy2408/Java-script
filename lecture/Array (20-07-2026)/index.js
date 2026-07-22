// Array in javascript:-

{
    let num = [10, 20, 30, 40, 50]

    console.log(num);

    console.log(num.length);

}

// Constructor array
{
    let arr = new Array(10, 20, 30, 40, 50)
    console.log(arr);

    console.log(arr.length);
}

{
    let result1 = new Array(10)
    let result2 = [10]

    console.log("resukt 1 = ", result1.length);
    console.log("resukt 2 = ", result2.length);
}

/* static Method */

// 1.array.from()

{
    let arr = ("special")
    console.log(Array.from(arr));

    let num = Array.from([1, 2, 3], (x) => x + 5)
    console.log(num);

    let num1 = Array.from([100, 200, 300], (y) => y - 50)
    console.log(num1);
}

// 2. Array.Async

{

    {
        async function* numbers() {
            yield 10;
            yield 20;
            yield 30;
        }

        async function demo() {
            const result = await Array.fromAsync(numbers());
            console.log(result);
        }

        demo();
    }
}


// 3.Array.isArray()

{
    let arr = "Array"
    let result1 = Array.isArray(arr)
    console.log(result1);

    let arr1 = [10, 20, 30]
    let result2 = Array.isArray(arr1)
    console.log(result2);
}

// 4. Array.of()
{
    let arr11 = Array.of(10, undefined, true, "yes", 1000);
    console.log(arr11);
}

/* Instance methods */

// 1.at()

{
    let arr = [10, 20, 30, 40, 50]
    let result = arr.at(4) // positive
    console.log(result);

    let result1 = arr.at(-3) // negative
    console.log(result1);
}

// 2.concat()

{
    let arr1 = [10, 20, 30]
    let arr2 = [40, 50, 60]
    let arr3 = arr1.concat(arr2)

    console.log(arr1);
    console.log(arr2);
    console.log(arr3);

    let name = "bhavy"
    let name1 = " hello"
    let name2 = name.concat(name1)

    console.log(name);
    console.log(name1);
    console.log(name2);
}

// 3.fill()

{
    console.log("fill()====");


    let num = [10, 20, 30, 40, 50];
    num.fill(0, 1, 3)

    console.log(num);

    let num1 = [10, 20, 30, 40, 50];
    num1.fill(100, 1, 3)

    console.log(num1);

}

// 4.find()

{
    const number = [1, 9, 144, 40, 50]
    const result = number.find(num => num % 2 == 0)

    console.log(result);

    const students = [
        { id: 1, Name: "bhavy" },
        { id: 2, Name: "sumit" }
    ];
    const student = students.find(s => s.id === 2);

    console.log(student);

}

// 5.findIndex()
{
    let num = [1, 9, 144, 40, 50]
    let result = num.findIndex(n => n % 2 == 0)
    console.log(result)
}

//6. findLastIndex() 
{
    const numbers = [5, 8, 12, 15];
    const index = numbers.findLastIndex(num => num % 2 === 0);
    console.log(index);
}

// 7.includes()
{
    let aray = ["apple", "orange", "Banana"];
    console.log(array.includes("graps"));

    let num = [10, 20, 30]
    console.log(num.includes(20, 1));
}

