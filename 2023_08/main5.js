//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present). 

arrayOfSheep = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]

// Solution

// function countSheeps(arrayOfSheep) {
//     let count = 0
//     for (let value of arrayOfSheep) {
//         if (value === true) {
//         count ++
//         }
//     }
//     return count
// }
// let sheepCount = countSheeps(arrayOfSheep)
// console.log(`The array has ${sheepCount} sheep present.`)

// Best answer

function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
}

// Sample Test

// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// var array1 = [true,  true,  true,  false,
//               true,  true,  true,  true ,
//               true,  false, true,  false,
//               true,  false, false, true ,
//               true,  true,  true,  true ,
//               false, false, true,  true ];
// Test.assertEquals(countSheeps(array1), 17, "There are 17 sheeps in total")
//   });
// });
