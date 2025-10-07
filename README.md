h#                                                                                          CHAPTER 1

# javascript-practice
A collection of exercises, notes, and mini-projects to strengthen my understanding of core JavaScript concepts. Covers basics like variables, loops, functions, DOM manipulation, ES6+ features, and small interactive projects to apply learning in real-world scenarios.

# Chapter 1: JavaScript Console

What is the Console?
The console is a tool built into web browsers (like Chrome, Firefox, Edge) that helps developers test and debug code.

>It shows messages, errors, and results of your JavaScript code.
>You can open it by pressing F12 (or Right-Click → Inspect → Console tab).

Using the Console in JavaScript-
We use console.log() to print messages or results in the console.  
console.log("Hello, JavaScript!");
= Hello, JavaScript!

# What is a Programming Language?
:A programming language is a set of rules, symbols, and syntax that humans use to communicate with computers.

# Syntax: 
Structure of words in a sentence, Rules of the language, for programming exact syntax must be followed.
eg: > alert ("Hello World")

# Role of browser:
Display Webpage,
user click
Update content
Load files

# What is JavaScript
:- Javascript runs at the client side in the browser
Action: Enable Interactivity.
Updates: Alters path without reloading.
Event: Respond to user actions.
Data: fetches and send data to the server.
Role: Makes any website actaionable.

# Transpile: 
:Converting source code from one high-level language to another high-level language and then conver into maching language.
eg: kotlin convert the code into java code and then convert into machine language. 
: Transpile → high-level → high-level (human-readable, often same language but different version).
:-CoffeeScript / TypeScript are transpiled to javascript.

# Compile: 
:Converting source code (high-level language) into a lower-level language, often machine code that the computer can execute.
eg: C/C++ → compiled into machine code (.exe on Windows).
Transpile → high-level → high-level (human-readable)
                                                                                                    
                                                                                                    
#                                                                                             CHAPTER 2   

# mathematical operations
Arithmetic operations: are the basic mathematical operations we perform on numbers.

Operation	Symbol	Example (5 and 2)	Result
Addition	+	5 + 2	7
Subtraction	-	5 - 2	3
Multiplication	*	5 * 2	10
Division	/	5 / 2	2.5
Modulus (Remainder)	%	5 % 2	1
Exponentiation	**	5 ** 2	25

# Order of Operations (Operator Precedence)
:When more than one operator is used in a mathematical expression, the order matters.
This is defined by BODMAS / PEMDAS Rule:

B/P → Brackets/Parentheses () [] {}
O/E → Order / Exponentiation ^ or **
D → Division /
M → Multiplication *
A → Addition +
S → Subtraction -

# Number Types in JavaScript: Integer and Float
: In JavaScript, all numbers are treated as the same Number type.

1. Integer (Whole Numbers):- A number without any decimal point.
Example: 5, -3, 1000, 0

let age = 25;
let count = -10;
console.log(age);   // 25
console.log(count); // -10
----------------------------

2. Float (Decimal Numbers):- A number that has a decimal point.
example: Example: 3.14, -0.5, 2.718

let price = 19.99;
let temperature = -4.5;
console.log(price);        // 19.99
console.log(temperature);  // -4.5
------------------------------

Checking if a Number is an Integer

You can use Number.isInteger() to check if a value is an integer.
console.log(Number.isInteger(5));    // true
console.log(Number.isInteger(5.5));  // false
--------------------------------

# Rounding Floats

You can round floats to whole numbers using:

:Math.round() → rounds to the nearest integer
:Math.floor() → rounds down
:Math.ceil() → rounds up

console.log(Math.round(4.7)); // 5
console.log(Math.floor(4.7)); // 4
console.log(Math.ceil(4.1));  // 5
---------------------------------
# conclusion 

Summary:

JavaScript has one number type, but we think of them as integers (whole numbers) and floats (decimal numbers).
You can mix them in calculations.
You can check if a number is an integer using Number.isInteger().
You can round floats using Math.round(), Math.floor(), or Math.ceil().

# String: 
:string holds the textual data anything from a single chracter to the paragraphs.
: strings can be defined as single quotes 'hello javascript, double quotes: "hello javascript, and or backticks: `hello javascript`

# Type of Operator:
it checks the variable tells you the datatype of variable.
: syntax= typeof.  eg: typeof 5 = 'number'

# querySelector 
:querySelector is a method that selects and returns the first element in the document that matches a specified CSS selector.
syntax: document.querySelector("CSS selector");

# querySelectorAll
: querySelectorAll is a method that selects all elements that match a specified CSS selector and returns them as a NodeList (a list of elements).
its like "Find all these elements on the page so I can work with each of them.”
syntax: document.querySelectorAll("CSS selector");


# CHAPTER 4

# variable
:A variable is like a container or label where you can store data (such as numbers, text, etc.)

Why do we need variables?

:To store values.
:To reuse information without typing it again.
:To make programs dynamic and interactive.

How to declare a variable  by using let

let name = "Roshan";
let age = 22;
console.log(name);
console.log(age);  

Here:

name is a variable storing text "Roshan"
age is a variable storing the number 22

:Variable names can contain letters, digits, $, and _.
:Cannot start with a digit.
:Variables help you write reusable and organized code.

# Eval function
eveal function convert the two string value into mathematical expression.

# CHAPTER 5

#Boolean 
:A boolean is a type that can only have two values:
✔ true
✔ false
A boolean is like a yes or no, on or off, right or wrong answer.
It’s used when you want to decide something or check conditions in your program.

:Why are booleans important?

Control decisions — like showing or hiding things.
Check conditions — compare values or states.
Make your program smarter — it reacts differently based on true or false.

# Comparison Operators
:Comparison operators compare two values and return a boolean — either true or false

Operator	Meaning	Example	Result
==	equal to	5 == 5	true
===	exactly equal (value and type)	5 === "5"	false
!=	not equal	5 != 3	true
!==	not exactly equal	5 !== "5"	true
>	greater than	10 > 5	true
<	less than	3 < 5	true
>=	greater than or equal	5 >= 5	true
<=	less than or equal	4 <= 5	true

# What is === (triple equal) in JavaScript?
: The triple equal (===) is called the strict equality operator.
It checks:

If two values are equal
AND

If they are of the same type (number, string, etc.)

Only if both are true, it returns true. Otherwise, it returns false.

# Day 5
:- Created a Cricket Game

# Truthy and Falsy Value

# Falsy Value in JavaScript:
: A value that is considered false when evaluated in a Boolean context (like inside an if condition).

# Truthy Value in JavaScript:
: A value that is considered true when evaluated in a Boolean context.

# In short:

Falsy = behaves like false
Truthy = behaves like true

# Falsy values (only 8 in total!)

: These are the values that JavaScript treats as false in a condition:

false (boolean false itself)
1: 0 (number zero)
2: -0 (negative zero)
3: 0n (BigInt zero)
4: "" (empty string: single quotes '', double quotes "", or backticks ``````)
5: null
6: undefined
7: NaN (Not-a-Number)

# Truthy values

: Everything else that is not falsy is truthy.

# If Alternatives

1: if...else statement (the basic one)
-Definition: Runs one block of code if the condition is true, otherwise another block.
2: Ternary Operator (? :)   condition ? true : false 
-Definition: A shorthand for if...else that works in a single line.
3: Guard Operator (OR ||) 
- The OR guard operator (||) is used to provide a default value when the first value is falsy.


# CHAPTER 6

# FUNCTION
:Function: A reusable piece of code that can take inputs, process them, and optionally return a result.

-Why use functions?
>Reusability – write once, use many times
>Organization – makes code cleaner
>Parameters & results – handle different inputs dynamically
>Avoid repetition – easier to maintain

# What are Parameters in JavaScript?
: Parameters are like placeholders (inputs) that you define in a function.
# Arguments 
: When you call the function, you pass arguments (real values) to those parameters.

eg:  function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Roshan");   // Output: Hello, Roshan!
greet("Ashish");   // Output: Hello, Ashish!

 Here:
name → parameter (placeholder inside the function).
"Roshan" / "Ashish" → arguments (actual values you pass when calling).


# default values
: when we define a value of paramenter in a function is called default value. in case of arguments are not ded=fined it will call the default value of parameters.
eg: function greet(name = "Guest") {
    console.log("Hello, " + name);
}

greet("Roshan"); // Output: Hello, Roshan
greet();         // Output: Hello, Guest

here,
name = "Guest" → Here "Guest" is the default value.
When you call greet("Roshan"), it prints "Hello, Roshan".
When you call greet() without arguments, it automatically uses "Guest". (takes the default value)

# CHAPTER: 7

# Object in JavaScript
:An object is a collection of key-value pairs.

:Keys (or properties) are names.
:Values can be anything: numbers, strings, arrays, functions, or even other objects.

> let person = {
    name: "Roshan",
    age: 20,
    city: "Patna"
};

Here:
>name, age, city → keys (properties)
>"Roshan", 20, "Delhi" → values

# Objects Can Hold Anything Inside

: Primitive values:
:Arrays inside objects:
:Functions inside objects (Methods)
:Objects inside objects

eg: let obj = {
    name: "Ashish",
    address: {
        city: "Pune",
        pincode: 110001
    }
};
console.log(obj.address.city); // pune


# AUTOBOXING
: Automatic conversion of premitive to object is called Autoboxing
> Allow properties and method to be used on premitive.



# CHAPTER 8


# JSON
:A lightweight data format used for storing and sharing data.
:It looks just like a JavaScript object, but it is actually written as plain text (string).

# Why do we use JSON?
> To store data
> To send and receive data
> Easy to understand

:Without JSON, it would be very hard for different systems to talk to each other.

:JSON is a text-based format used to store and share data between programs. It looks like a JavaScript object but is written as a string. In JavaScript, we use JSON.stringify() to convert objects into JSON, and JSON.parse() to turn JSON back into objects.

# What is Local Storage?

:Local Storage is like a small storage box inside your browser (like Chrome, Edge, Firefox, etc.).
:It allows you to save data directly on the user’s computer, and the data does not get deleted even if you close or refresh the browser.

> setItem = put data in the browser’s storage.
>getItem = take data back from the browser’s storage.



# Date

: Date is a built-in object in JavaScript.

> It is used to work with dates and times (like year, month, day, hours, minutes, seconds, milliseconds).
> Using Date, you can create, get, set, and manipulate time values.

Creating a Date Object

You can make a date in different ways:

1. Current date and time



let now = new Date();
console.log(now);
👉 Output: Mon Sep 22 2025 18:02:30 GMT+0530 (India Standard Time)


# CHAPTER 9 - ARRAY AND LOOPS

# ARRAY
:An array in JavaScript is a data structure used to store multiple values in a single variable. Each value is stored at a specific index, starting from 0. Arrays can hold elements of any data type, including numbers, strings, objects, or even other arrays.


# Syntax 

let arrayName = [element1, element2, element3, ...];

# Example:

let fruits = ["Apple", "Banana", "Mango"];

Here,

fruits[0] → "Apple"

fruits[1] → "Banana"

fruits[2] → "Mango"


# Common Array Methods

Method	Description	Example
push()	Adds an element at the end	arr.push(5)
pop()	Removes the last element	arr.pop()
shift()	Removes the first element	arr.shift()
unshift()	Adds an element at the start	arr.unshift(10)
length	Returns total number of elements	arr.length
concat()	Combines two arrays	arr1.concat(arr2)
slice()	Returns a portion of the array	arr.slice(1,3)
splice()	Adds/removes elements	arr.splice(2,1)
forEach()	Executes a function for each element	arr.forEach(item => console.log(item))
map()	Creates a new array with modified elements	arr.map(x => x*2)

# Looping Through an Array

let numbers = [10, 20, 30, 40];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

or using modern syntax

numbers.forEach(num => console.log(num));

# Note 
In JavaScript, arrays can hold multiple values of different data types such as numbers, strings, objects, or even other arrays.
This is possible because JavaScript is a dynamically typed language, which means variables and arrays do not have fixed data types.
Moreover, arrays in JavaScript are actually special objects, allowing each index to store any kind of value.


# JavaScript Array Methods

:Arrays in JavaScript come with several built-in methods that make it easy to add, remove, or manipulate elements.

🔹 1. push()
:Adds one or more elements to the end of an array and returns the new length of the array.
eg- 
let fruits = ["Apple", "Banana"];
fruits.push("Mango");
console.log(fruits); // Output: ["Apple", "Banana", "Mango"]

🔹 2. pop()
:Removes the last element from an array and returns that element.
eg- 
let fruits = ["Apple", "Banana", "Mango"];
fruits.pop();
console.log(fruits); // Output: ["Apple", "Banana"]

🔹 3. toString()
:Converts an array into a comma-separated string of its elements.
eg- 
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.toString()); // Output: "Apple,Banana,Mango"

🔹 4. join()
:Joins all elements of an array into a single string, using a specified separator.
eg- 
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.join(" - ")); // Output: "Apple - Banana - Mango"

🔹 5. splice()
Purpose:
Used to add, remove, or replace elements in an array at specific positions.
eg- 
let fruits = ["Apple", "Banana", "Mango", "Orange"];
fruits.splice(1, 2);
console.log(fruits); // Output: ["Apple", "Orange"]

🔹 6. sort()
:Sorts the elements of an array in place and returns the sorted array.
eg -
let numbers = [40, 10, 100, 30];
numbers.sort((a, b) => a - b);
console.log(numbers); // [10, 30, 40, 100]

🔹 7. valueOf()
:Returns the original array itself — it’s usually called automatically when JavaScript expects a primitive value.
eg-
let fruits = ["Apple", "Banana", "Mango"];
let result = fruits.valueOf();
console.log(result); // ["Apple", "Banana", "Mango"]



