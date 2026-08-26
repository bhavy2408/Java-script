/* JSON Basic */

// JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy 
// for humans to read and write, and easy for machines to parse and generate. 
// It is commonly used for transmitting data between a server and a web application as text.

// Example of a JSON object:
const jsonObject = {
    "name": "John Doe",     
    "age": 30,
    "isStudent": false,
    "courses": ["Math", "Science", "History"],  
    "address": {
        "street": "123 Main St",
        "city": "Anytown",
        "zip": "12345"
    }
};

// JSON Data Types:
// 1. String: A sequence of characters enclosed in double quotes.
// 2. Number: An integer or floating-point number.
// 3. Boolean: A true or false value.
// 4. Array: An ordered list of values enclosed in square brackets.
// 5. Object: A collection of key-value pairs enclosed in curly braces.

// Why use JSON?
// The mlost common use of JSON is to exchange data between a web server and a client. 


// Example of JSON data exchange:
// Server sends JSON data to the client:
const serverResponse = `{
    "status": "success",
    "data": {
        "userId": 1,
        "username": "johndoe",
        "email": "johndoe@example.com"
    }
};
`