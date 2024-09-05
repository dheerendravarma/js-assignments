const fs = require("fs");
const path = require("path");

let contents = fs.readFileSync('a.txt', 'utf-8');
console.log(contents);

// print the absolute path of the directory
// print the absolute path of the file
console.log(__dirname);
console.log(__filename);

// Learn file handling in JS


