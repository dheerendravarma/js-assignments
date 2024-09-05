// Find sum of two numbers
function sum(a, b) {
    return a + b;
}

let result1 = sum(10, 16);
console.log(result1);

// Find sum from 1 to a number
function sum(number) {
    let result = 0;
    for (let idx=1; idx<=number; idx++) {
        result += idx;
    }
    return result;
}

let result2 = sum(100);
console.log(result2);

// Synchronous code
function sum(number) {
    let result = 0;
    for (let idx=0; idx<number; idx++) {
        result += idx;
    }
    return result;
}
const ans1 = sum(100);
console.log(ans1);
const ans2 = sum(1000);
console.log(ans2);
const ans3 = sum(10000);
console.log(ans3);

user = {
    name: "john",
    age: 25,
    toVote: function() {
        return this.age >= 18 ? "You can vote" : "You cannot vote";
    }
}

console.log(user.toVote()); // You can vote

// 
const fs = require("fs");
const path = require("path");

let filePath1 = path.join(__dirname, 'a.txt');
let contents1 = fs.readFileSync(filePath1, 'utf-8');
// console.log(contents1);

let filePath2 = path.join(__dirname, 'b.txt');
let contents2 = fs.readFileSync(filePath2, 'utf-8');
// console.log(contents2);

// Functional Arguments in JS
function sum(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

function doOperation(a, b, operation) {
    return operation(a, b);
}

// Without using functional arguments
let result = sum(10, -20);
console.log(result);

// With using functional arguments
let result3 = doOperation(10, 20, sum);
console.log(result3);


// Perform file read operations in async mode
let filePath3 = path.join(__dirname, "sde.txt");
function print(err, data) {
    if (err) {
        console.log("No such file exists");
    } else {
        console.log(data);
    }
}

fs.readFile(filePath3, 'utf-8', print);
fs.readFile(filePath2, 'utf-8', print);