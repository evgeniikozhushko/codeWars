// 1. Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

function distinct(a) {
    const newNonDuplicateArray = a.filter((item, index, self) => {
        return self.indexOf(item) === index;
    });
    return newNonDuplicateArray;
}
console.log(distinct([1, 1, 2, 3, 4, 5, 6, 7, 8, 9]));


// Sample Test

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Sample Tests", () => {
//   it("test", () => {
//     assert.deepEqual(distinct([1]), [1]);
//     assert.deepEqual(distinct([1,2]), [1,2]);
//     assert.deepEqual(distinct([1,1,2]), [1,2]);
//   });
// });

// 2. Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

function areYouPlayingBanjo(name) {
    if(name[0] === 'R' || name[0] === "r") {
        return `${name} plays banjo`
    }else {
        return `${name} does not play banjo`
    }
}

// test

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(areYouPlayingBanjo("Adam"), "Adam does not play banjo");
//     assert.strictEqual(areYouPlayingBanjo("Paul"), "Paul does not play banjo");
//     assert.strictEqual(areYouPlayingBanjo("Ringo"), "Ringo plays banjo");
//     assert.strictEqual(areYouPlayingBanjo("bravo"), "bravo does not play banjo");
//     assert.strictEqual(areYouPlayingBanjo("rolf"), "rolf plays banjo");
//     })
//   })

// 3. 8 kyu / Remove First and Last Character. It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str){
    const newString = str.substring(1, str.length -1)
    return newString
    };

// test

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Tests", () => {
//   it("Fixed Tests", () => {
//     assert.strictEqual(removeChar('eloquent'), 'loquen');
//     assert.strictEqual(removeChar('country'), 'ountr');
//     assert.strictEqual(removeChar('person'), 'erso');
//     assert.strictEqual(removeChar('place'), 'lac');
//     assert.strictEqual(removeChar('ooopsss'), 'oopss');
//   });
// });

// 4. 8 kyu / Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love. Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
    return flower1 % 2 !== flower2 % 2;
}

function lovefunc(flower1, flower2){
    return ((flower1%2==0 && flower2%2!=0) || (flower1%2!=0 && flower2%2==0)) ? true : false;
}

// 5. Given an array of ones and zeroes, convert the equivalent binary value to an integer. Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);

// or

const binaryArrayToNumber = arr => {
    return parseInt(arr.join(""), 2)
};  

// 6. Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

var summation = function (num) {
    let sumOfNum = 0
    for (let i = 1; i <= num; i++) {
        sumOfNum += i
    }
    return sumOfNum
}

// Sample test

const assert = require('chai').assert;

describe('summation', function () {
it('should return the correct total', function () {
    assert.strictEqual(summation(1),  1);
    assert.strictEqual(summation(2),  3);
    assert.strictEqual(summation(8), 36);
    })
})

// 7. Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// Mind the input validation.

function sumArray(array) {
    if (array.length <= 2) {
      return 0;
    }
  
    // Find the highest and lowest elements in the array.
    const highestNum = Math.max(...array);
    const lowestNum = Math.min(...array);
  
    // Sum all the elements in the array.
    const arraySum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
    // Subtract the highest and lowest elements from the sum.
    const result = arraySum - lowestNum - highestNum;
  
    // Return the result.
    return result;
  }

// Sample test

// const {assert} = require("chai");

// it("example tests", ()=>{
//   assert.strictEqual( sumArray(null)                     , 0 );
//   assert.strictEqual( sumArray([ ])                      , 0 );
//   assert.strictEqual( sumArray([ 3 ])                    , 0 );
//   assert.strictEqual( sumArray([ 3, 5 ])                 , 0 );
//   assert.strictEqual( sumArray([ 6, 2, 1, 8, 10 ])       , 16 );
//   assert.strictEqual( sumArray([ 0, 1, 6, 10, 10 ])      , 17 );
//   assert.strictEqual( sumArray([ -6, -20, -1, -10, -12 ]), -28 );
//   assert.strictEqual( sumArray([ -6, 20, -1, 10, -12 ])  , 3 );
// });

// 8. kyu 8 Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

var min = function(list){
    return minNum = Math.min(...list)
}

var max = function(list){  
    return maxNum = Math.max(...list)
}

// 9. 8 kyu Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

function getGrade (s1, s2, s3) {
    // Calculate the average of the three scores
    const average = (s1 + s2 + s3) / 3;
    
    if (average >= 90) {
        return 'A'
    }else if (average >= 80) {
        return 'B'
    }else if (average >= 70) {
        return 'C'
    }else if (average >= 60) {
        return 'D'
    }else{
        return 'F'
    }
    
}

// 10. 8 kyu This is a correct solution that does not pass the test.

function countPositivesSumNegatives(input) {
    if (!input || input.length === 0) {
        return [0, 0];
    }
    
    let positiveResult = +0;  // Initialize as a number, not an array
    let negativeResult = 0;  // Initialize as a number, not an array
    
    for(let i = 0; i < input.length; i++) {  // Iterate up to input.length - 1
        const number = input[i];
        if (number > 0) {
            positiveResult++;  // Increment the count of positive numbers
        } else if (number < 0) {
            negativeResult += number;  // Add to the sum of negative numbers
        }
    }
    
    return [positiveResult, negativeResult];
}

// Example usage:
const inputArray = [1, -2, 3, 0, -5];
const result = countPositivesSumNegatives(inputArray);
console.log(result); // Output: [2, -7]

// Sample test

    const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Example tests", () => {
    it("Testing for fixed test 1", () => {
        let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
        let actual = countPositivesSumNegatives(testData);
        let expected = [10, -65];
        assert.deepEqual(actual, expected);
    })
        
    it("Testing for fixed test 2", () => {
        let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
        let actual = countPositivesSumNegatives(testData);
        let expected = [8, -50];    
        assert.deepEqual(actual, expected);
    });
});

// This is a correct solution that pass the test.

function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
        return [];
    
    var positive = 0;
    var negative = 0;
    
    for (var i = 0, l = input.length; i < l; ++i){
        if (input[i] > 0)
            ++ positive;
        else
        negative += input[i];
    }
    return [positive, negative];
}

// 11. 8 kyu Write a function which calculates the average of the numbers in a given list.

//Note: Empty arrays should return 0.

function findAverage(array) {
    if(array.length == 0) {
        return 0
    }
    const avarageNumber = array.reduce((a, b) => a + b, 0) / array.length
    return avarageNumber
}

// 12. kyu 8 Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

function basicOp(operation, value1, value2) {
    if(operation === "-") {
        return value1 - value2
    }else if(operation === "+") {
        return value1 + value2
    }else if(operation === "*") {
      return value1 * value2
    }else if(operation === "/") {
        return value1 / value2
    }
}

// Best solution using switch case

function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}

// Or

function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+': return value1 + value2;
        case '-': return value1 - value2;
        case '*': return value1 * value2;
        case '/': return value1 / value2;
        default: return 'Operation must be one of + - * /';
    }
}

// Sample test

const Test = require('@codewars/test-compat');

describe("Tests", () => {
   it("test", () => {
console.log("Basic tests\n");
Test.assertSimilar(basicOp('+', 4, 7), 11);
Test.assertSimilar(basicOp('-', 15, 18), -3);
Test.assertSimilar(basicOp('*', 5, 5), 25);
Test.assertSimilar(basicOp('/', 49, 7), 7);
   });
});

// 13. 8kyu Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

function smash (words) {
    const sentence = words.join(' ').trim()
    return sentence
};

// Test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("smash", () =>  {

  it ("Should return empty string for empty array.", () => {
    assert.strictEqual(smash([]), "");
  });

  it ("One word example should return the word.", () => {
    assert.strictEqual(smash(["hello"]), "hello");
  });
    
  it ("Multiple words should be separated by spaces.", () =>  {
    assert.strictEqual(smash(["hello", "world"]), "hello world");
    assert.strictEqual(smash(["hello", "amazing", "world"]), "hello amazing world");
    assert.strictEqual(smash(["this", "is", "a", "really", "long", "sentence"]), "this is a really long sentence");
  });
});

// 8 kyu the most simple kata ever

function doubleInteger(i) {
    return i * 2
}

// 14. 8kyu 

function removeExclamationMarks(s) {
    return s = s.replace(replace(/!/g, ''))
}

