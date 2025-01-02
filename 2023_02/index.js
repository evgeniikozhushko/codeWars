// Code Wars / Return Negative
// In this simple assignment you are given a number and have to make it negative.
// Ex. makeNegative(1); return -1

function makeNegative(num) {
    return -Math.abs(num);
}

console.log(makeNegative(5))
// Return -3

// Test Case

// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//     it("test", () => {
// Test.assertEquals(makeNegative(42), -42);
// Test.assertEquals(makeNegative(-9), -9);
// Test.assertEquals(makeNegative(0), 0);
// Test.assertEquals(makeNegative(1), -1);
// Test.assertEquals(makeNegative(-1), -1);

// Test.assertEquals(makeNegative(0.12), -0.12);
// Test.assertEquals(makeNegative(0.00001), -0.00001);
// Test.assertEquals(makeNegative(-0.00001), -0.00001);

// var rnd = Math.floor(Math.random() * 101);
// Test.assertEquals(makeNegative(rnd), -rnd);

// rnd = -Math.floor(Math.random() * 101);
// Test.assertEquals(makeNegative(rnd), rnd);
//     });
// });