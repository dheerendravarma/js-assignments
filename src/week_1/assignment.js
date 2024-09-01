// Create a variable for each of the following: your favorite color, your height in centimeters,
// and whether you like pizza. Use appropriate variable declarations (let, const, or var).
// Try logging it using console.log
const favoriteColor = "blue";
let heightInCm = 180;
var likePizza = true;

console.log(favoriteColor, heightInCm, likePizza);

// Write a function sum that finds the sum of two numbers.
// Side quest - Try passing in a string instead of a number and see what happens?

function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2));
console.log(sum("1", 2));

//Write a function called canVote that returns true or false if the age of a user is > 18

function canVote(age) {
  return age >= 18;
}
console.log(canVote(20));
console.log(canVote(17));

// Write an if/else statement that checks if a number is even or odd.
// If it's even, print "The number is even." Otherwise, print "The number is odd."

function checkEvenOrOdd(num) {
  if (num % 2 === 0) {
    console.log("The number is even.");
  } else {
    console.log("The number is odd.");
  }
}

checkEvenOrOdd(2);
checkEvenOrOdd(0);
checkEvenOrOdd(-1);
checkEvenOrOdd(3);

// Write a function called sum that finds the sum from 1 to a number

function sumToN(number) {
  let sum = 0;
  for (let idx = 1; idx <= number; idx++) {
    sum += idx;
  }
  return sum;
}
sumValue = sumToN(5);
console.log(sumValue);

sumValue = sumToN(-1);
console.log(sumValue);

//Write a function that takes a user as an input and greets them with their name and age

function greetUser(user) {
  return "Hello " + user.name + " you are " + user.age + " years old.";
}

const user = {
  name: "John",
  age: 25,
};
console.log(greetUser(user));

// Write a function that takes a new object as input which has name , age and gender
// greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

function greetUserWithGender(user) {
  nameSuffix = "";
  if (user.gender === "Male") nameSuffix = "Mr";
  else if (user.gender === "Female") nameSuffix = "Mrs";
  else nameSuffix = "";

  if (user.age >= 18)
    return (
      "Hi " +
      nameSuffix +
      " " +
      user.name +
      " your age is " +
      user.age +
      " and you are eligible to vote."
    );
  else
    return (
      "Hi " +
      nameSuffix +
      " " +
      user.name +
      " your age is " +
      user.age +
      " and you are not eligible to vote."
    );
}

const user1 = {
  name: "John",
  age: 17,
  gender: "Male",
};
console.log(greetUserWithGender(user1));

// Also tell the user if they are legal to vote or not
function isLegalToVote(user) {
  if (user.age >= 18)
    return "Hello " + user.name + " you are eligible to vote.";
  else return "Hello " + user.name + " you are not eligible to vote.";
}

console.log(isLegalToVote(user1));

// Write a function that takes an array of numbers as input,
// and returns a new array with only even values. Read about filter in JS
function filterEvenNumber(number) {
  return number % 2 === 0;
}

let numbers = [1, 2, 3, 4, 5];
let results = numbers.filter(filterEvenNumber);
console.log(results);
console.log(typeof results);

// Write a function that takes an array of users as inputs and
// returns only the users who are more than 18 years old
const users = [
  {
    name: "Dheerendra",
    age: 21,
  },
  {
    name: "Varma",
    age: 18,
  },
];

function adultUsers(user) {
    return user.age > 18;
}

let result = users.filter(adultUsers);
console.log(result);

