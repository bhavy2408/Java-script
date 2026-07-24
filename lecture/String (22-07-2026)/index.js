/* String in js */
// => A string is a data type used to store text.
// 1. Single quotes => ' ' 
// 2. Double quotes => " " 
// 3. Backticks quotes => ` `

{
    let str1 = 'Hello';
    let str2 = "Hello";
    let str3 = `Hello`;

    console.log(str1);
    console.log(str2);
    console.log(str3);
}

/* Method */

// 1.concat()

{
    let first = "Hello"
    let second = "bhavy"

    console.log(first.concat(second));    
}

// 2.slice

{
    let str = "javascript";
    console.log(str.slice(0 , 5));
}

// 3. at()

{
    const str = "The quick brown fox jumps over the lazy dog.";
    const result = 7
    console.log(`An index fo ${result} return the character ${str.at(result)}`);
}

// 4.charAt()
{
    const str = "The quick brown fox jumps over the lazy dog.";
    const result = 10
    console.log(`The character at index ${result} is ${str.charAt(result)}`);
}

// 5.endsWith()
{
    let text = "javascript"
    console.log(text.endsWith("java"));
    console.log(text.endsWith("script"));
    console.log(text.endsWith("java",4));
    console.log(text.endsWith("java",3));
}

// 6.startsWith()
{
    let text = "hellobhavy"
    console.log(text.startsWith("hello"));
    console.log(text.startsWith("bhavy"));
    console.log(text.startsWith("bhavy",5));
}

// 7.includes()
{
    const text = "bannana , Apple , mango , orange";
    const result =  text.includes("Apple");
    console.log(result);
    
}

// 8.indexof()
{
    const text = "bannana , Apple , mango , orange , Apple";
    const result =  text.indexOf("Apple");
    console.log(result);
}

// 9.lastindexof()
{
    const text = "bannana , Apple , mango , orange , Apple";
    const result =  text.lastIndexOf("Apple");
    console.log(result);
}

// 10.repeat()
{
    const text = "\n Hello"
    console.log(text.repeat(5));
}

// 11.search()
{
    const txt = "I am Best Trader"
    console.log(txt.search("T"));
}

// 12. split()
{
    let txt = "JavaScript"
    console.log(txt.split(""));
    console.log(txt.split("",5)); 
}

// 13. toLowerCase()
{
    let str =  "The quick brown fox jumps over the lazy dog.";
    console.log(str.toLowerCase());
    
}
// 14. toupperCase()
{
    let str =  "The quick brown fox jumps over the lazy dog.";
    console.log(str.toUpperCase());
}

// 15. trim()
{
    const greeting = "     Hello World!    "
    console.log(greeting);
    console.log(greeting.trim());
}

// 16. trimEnd()
{
    const greeting = "     Hello World!    "
    console.log(greeting);
    console.log(greeting.trimEnd());
}

// 17. trimStart()
{
    const greeting = "     Hello World!    "
    console.log(greeting);
    console.log(greeting.trimStart());
}