// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"


// The solution
function repeatStr (number, string) {

    // Create an empty string
    let result = ''

    // Loop through the parameter "number"
    for (let i = 0; i < number; i++) {
        result += string
    }

    // Clear the last comma and white space from the end of the string
    result = result.replace(/,\s*$/,'')

    // Return the value
    return result
}
console.log(repeatStr(4, "Yup, "))


// The solution
// function repeatStr (n, s) {
//     let string = ''
//     for (let i = 0; i < n; i++) {
//     string += s
//     }
//     return string
// }
// console.log(repeatStr(6, 'String ,'))


// Test case

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Tests", function() {
//     it ("Basic tests", function() {
//     assert.strictEqual(repeatStr(3, "*"), "***");
//     assert.strictEqual(repeatStr(5, "#"), "#####");
//     assert.strictEqual(repeatStr(2, "ha "), "ha ha ");
//     });
// });