// Kata 8 kyu - Kwrite a function that takes an argument and returns the square of it.
// Write the "square"-function here

function square(num) {
  return num * num;
}

// Sample test

const { assert } = require("chai");

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(square(3), 9);
  });
});


// Kata 7 kyu Testing 1-2-3

var number=function(array){
  return (
    array.map((line, index) => `${index + 1}: ${line}`)
  )
}

// Smaple test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(number([]), [], 'Empty array should return empty array');
    assert.deepEqual(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"], 'Return the correct line numbers');                
  });
});


// Kata 8 kyu Keep up the hoop

function hoopCount(n) {
  return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";
}

// Sample test

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(hoopCount(3),"Keep at it until you get it" ) 
Test.assertEquals(hoopCount(11),"Great, now move on to tricks" )
  });
});

// LeetCode Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

// You may assume the array is the output of JSON.parse.

// Example 1:

// Input: nums = [null, {}, 3]
// Output: 3
// Explanation: Calling nums.last() should return the last element: 3.
// Example 2:

// Input: nums = []
// Output: -1
// Explanation: Because there are no elements, return -1.
 

// Constraints:

// arr is a valid JSON array
// 0 <= arr.length <= 1000

/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
  if (this.length === 0) {
      return -1
  }
  return this[this.length-1]
};

// OR this solution -> return this[this.length - 1] || -1;

/**
* const arr = [1, 2, 3];
* arr.last(); // 3
*/

// LeetCode 2666 - Allow One Finction Call

// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.
 

// Example 1:

// Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
// Output: [{"calls":1,"value":6}]
// Explanation:
// const onceFn = once(fn);
// onceFn(1, 2, 3); // 6
// onceFn(2, 3, 6); // undefined, fn was not called
// Example 2:

// Input: fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]
// Output: [{"calls":1,"value":140}]
// Explanation:
// const onceFn = once(fn);
// onceFn(5, 7, 4); // 140
// onceFn(2, 3, 6); // undefined, fn was not called
// onceFn(4, 6, 8); // undefined, fn was not called
 

// Constraints:

// calls is a valid JSON array
// 1 <= calls.length <= 10
// 1 <= calls[i].length <= 100
// 2 <= JSON.stringify(calls).length <= 1000
/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
  let called = false
  let result
  return function(...args){
      if (!called) {
          called = true
          result = fn(...args)
          return result
      }
  return undefined
  }
};

/**
* let fn = (a,b,c) => (a + b + c)
* let onceFn = once(fn)
*
* onceFn(1,2,3); // 6
* onceFn(2,3,6); // returns undefined without calling fn
*/

// 7 Kyu - Regex validate PIN code

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

function validatePIN (pin) {
  return (pin.length === 4 || pin.length === 6) && /^[0-9]+$/.test(pin)
}

// Sample test

const Test = require('@codewars/test-compat');

describe("validatePIN", function() {
  it("should return False for pins with length other than 4 or 6", function() {
    Test.assertEquals(validatePIN("1"),false, "Wrong output for '1'")
    Test.assertEquals(validatePIN("12"),false, "Wrong output for '12'")
    Test.assertEquals(validatePIN("123"),false, "Wrong output for '123'")
    Test.assertEquals(validatePIN("12345"),false, "Wrong output for '12345'")
    Test.assertEquals(validatePIN("1234567"),false, "Wrong output for '1234567'")
    Test.assertEquals(validatePIN("-1234"),false, "Wrong output for '-1234'")
    Test.assertEquals(validatePIN("1.234"),false, "Wrong output for '1.234'")
    Test.assertEquals(validatePIN("-1.234"),false, "Wrong output for '-1.234'")
    Test.assertEquals(validatePIN("00000000"),false, "Wrong output for '00000000'")
  });
  
  it("should return False for pins which contain characters other than digits", function() {
    Test.assertEquals(validatePIN("a234"),false, "Wrong output for 'a234'")
    Test.assertEquals(validatePIN(".234"),false, "Wrong output for '.234'")
  });
  
  it("should return True for valid pins", function() {
    Test.assertEquals(validatePIN("1234"),true, "Wrong output for '1234'");
    Test.assertEquals(validatePIN("0000"),true, "Wrong output for '0000'");
    Test.assertEquals(validatePIN("1111"),true, "Wrong output for '1111'");
    Test.assertEquals(validatePIN("123456"),true, "Wrong output for '123456'");
    Test.assertEquals(validatePIN("098765"),true, "Wrong output for '098765'");
    Test.assertEquals(validatePIN("000000"),true, "Wrong output for '000000'");
    Test.assertEquals(validatePIN("123456"),true, "Wrong output for '123456'");
    Test.assertEquals(validatePIN("090909"),true, "Wrong output for '090909'");
  });
});

// Kata 8 kyu Rock Paper Scissors

const rps = (p1, p2) => {
  if (p1 === p2) {
    return "Draw!"; // If both moves are the same, it's a draw
  }

  if (
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "paper" && p2 === "rock")
  ) {
    return "Player 1 won!"; // Player 1 winning conditions
  }

  return "Player 2 won!"; // Otherwise, Player 2 wins
};

// Sample test

const Test = require('@codewars/test-compat');

describe('rock paper scissors', function() {
  const getMsg = (n) => `Player ${n} won!`;

  it('player 1 win', function() {
    Test.assertEquals(rps('rock', 'scissors'), getMsg(1));
    Test.assertEquals(rps('scissors', 'paper'), getMsg(1));
    Test.assertEquals(rps('paper', 'rock'), getMsg(1));
  });

  it('player 2 win', function() {
    Test.assertEquals(rps('scissors', 'rock'), getMsg(2));
    Test.assertEquals(rps('paper', 'scissors'), getMsg(2));
    Test.assertEquals(rps('rock', 'paper'), getMsg(2));
  });

  it('draw', function() {
    Test.assertEquals(rps('rock', 'rock'), 'Draw!');
    Test.assertEquals(rps('scissors', 'scissors'), 'Draw!');
    Test.assertEquals(rps('paper', 'paper'), 'Draw!');
  });
});

// 8 Kyu Is it a palindrome?

function isPalindrome(x) {
  const normalized = x.toLowerCase(); // Convert to lowercase for case insensitivity
  const reversed = normalized.split('').reverse().join(''); // Reverse the string
  return normalized === reversed; // Check if original equals reversed
}

// Sample test

const { assert } = require('chai');

describe("Fixed tests", function() {
  it("Testing for 'a'", () => assert.strictEqual(isPalindrome("a"), true));
  it("Testing for 'aba'", () => assert.strictEqual(isPalindrome("aba"), true));
  it("Testing for 'Abba'", () => assert.strictEqual(isPalindrome("Abba"), true));
  it("Testing for 'hello'", () => assert.strictEqual(isPalindrome("hello"), false));
  it("Testing for 'Bob'", () => assert.strictEqual(isPalindrome("Bob"), true));
  it("Testing for 'Madam'", () => assert.strictEqual(isPalindrome("Madam"), true));
  it("Testing for 'AbBa'", () => assert.strictEqual(isPalindrome("AbBa"), true));
  it("Testing for ''", () => assert.strictEqual(isPalindrome(""), true));
});

// Secret Santa

function secretSanta(participants) {
  // Step 1: Shuffle participants
  const shuffled = [...participants].sort(() => Math.random() - 0.5);

  // Step 2: Assign pairs
  const assignments = {};
  for (let i = 0; i < shuffled.length; i++) {
    const giver = shuffled[i];
    const receiver = shuffled[(i + 1) % shuffled.length]; // Next person, loop to start if at the end
    assignments[giver] = receiver;
  }

  return assignments;
}

const participants = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
const result = secretSanta(participants);

console.log(result);
/*
Possible Output:
{
  Alice: 'Charlie',
  Bob: 'Eve',
  Charlie: 'Diana',
  Diana: 'Bob',
  Eve: 'Alice'
}
*/

// Additional Features:
// 1. Prevent Certain Pairs:
// If you want to ensure that certain people (e.g., couples or close friends) don’t gift to each other, you can add a validation step.

function secretSanta(participants, invalidPairs = []) {
  let shuffled;
  let valid = false;

  while (!valid) {
    shuffled = [...participants].sort(() => Math.random() - 0.5);
    valid = true;

    for (let i = 0; i < shuffled.length; i++) {
      const giver = shuffled[i];
      const receiver = shuffled[(i + 1) % shuffled.length];

      if (invalidPairs.some(([a, b]) => (giver === a && receiver === b) || (giver === b && receiver === a))) {
        valid = false;
        break;
      }
    }
  }

  const assignments = {};
  for (let i = 0; i < shuffled.length; i++) {
    const giver = shuffled[i];
    const receiver = shuffled[(i + 1) % shuffled.length];
    assignments[giver] = receiver;
  }

  return assignments;
}

// Example:

const participants = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
const invalidPairs = [
  ["Alice", "Bob"], // Alice cannot gift to Bob
  ["Charlie", "Diana"] // Charlie cannot gift to Diana
];

const result = secretSanta(participants, invalidPairs);

console.log(result);


// Print assignments:

function printAssignments(assignments) {
  for (const [giver, receiver] of Object.entries(assignments)) {
    console.log(`${giver} is giving a gift to ${receiver}`);
  }
}
