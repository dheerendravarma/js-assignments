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