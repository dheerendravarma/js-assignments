// Learn the JavaScript basics

// JS is dynamically types language
var x = 5;
a = "varma";
a = false;

// console.log(x);

// Variable declaration in JavaScript
let firstName = "John";
const age = 25;
var isStudent = false;

// console.log(firstName, age, isStudent);

// understand the usage of var and let
function exampleVar() {
    console.log("Inside var example");
    console.log(x);

    var x = 10;
    console.log(x);
}
// exampleVar(); // It will not thorw ReferenceError and prints undefined and 10

function exampleLet() {
    console.log("Inside let example");
    console.log(y);

    let y = 10;
    console.log(y);
}
// exampleLet(); // It will thorw ReferenceError

// Using const we can't reassign the value
// if a const variable holds an object or array, the contents of that object or array can still be modified.
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);

// arr = [1,2,3]; // It will throw TypeError

// Data types in JavaScript
// Primitive data types

let number = 26;
let string = "Hello World";
let isActive = true;
let numbers = [1, 2, 3, 4, 5];

// Operators in JavaScript
let sum = 10 + 16;
let isEquals = (10 === 10);
let isTrue = (true && false);
let isFalse = (true || false);
let isNot = !true;


// function declaration
function greet(name) {
    return "Hello " + name;
}

console.log(greet("Varma"));

// For loop
for (let i = 0; i < 5; i++) {
    console.log(i); // Outputs 0 to 4
}

// While loop
let j = 0;
while (j < 5) {
    console.log(j); // Outputs 0 to 4
    j++;
}

// objects in JavaScript
let user = {
    name: "John",
    age: 25,
    isActive: true
};

console.log(user["name"]);
console.log(user.age);
console.log(user.isActive);

// Arrays in Javascript
const users = ["Dheerendra", "Varma", "Ravi"];
const usersCount = users.length;
const firstUser = users[0]
console.log(firstUser);

