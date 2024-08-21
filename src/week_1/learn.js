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