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
  return n > 10 ? "Great, now move on to tricks" : "Keep at it until you get it";
}

// Sample test

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(hoopCount(3),"Keep at it until you get it" ) 
Test.assertEquals(hoopCount(11),"Great, now move on to tricks" )
  });
});
