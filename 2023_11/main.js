// 7 kyu 

function addBinary(a,b) {
    const num = a + b
    result = num.toString(2)
    return result
}

// Sample Test

const Test = require('@codewars/test-compat');

describe("addBinary(1,2)", function() {
    var results1 = addBinary(1,2);
    it("Should return something that isn't falsy", function() {
    Test.expect(results1, "Something is wrong, no results!");
    });
    it("Should return \"11\"", function() {
    Test.assertEquals(results1, "11");
    });
});

// 7 kyu (do not understand)

//Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.

function getSum(a, b)
{
   if (a > b) {
     [a,b] = [b, a]
   }
  const sum = ((b - a + 1) * (a + b)) / 2
  return sum
}

// Sample Test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {         
    assert.strictEqual(getSum(0,-1), -1);
    assert.strictEqual(getSum(0, 1),  1);
    assert.strictEqual(getSum(2, 2),  2);
  })
});