// Don't give me five!
// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// Solution

function dontGiveMeFive(start, end) {
    let count = 0;
    for (let num = start; num <= end; num++) {
        if (!num.toString().includes('5')) {
        count++;
        } 
    }
    return count;
}

// Sample Test

const Test = require('@codewars/test-compat');

describe("KataTests", function(){
    it("exampleTests", function(){
        Test.assertEquals(dontGiveMeFive(1,9), 8);
        Test.assertEquals(dontGiveMeFive(4,17), 12);
    });
});