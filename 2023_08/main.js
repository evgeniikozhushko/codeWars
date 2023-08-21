// Task:

const inputArrayOne = [1, 2, 10, 50, 5]; // should return [1,2,5,10,50]
const inputArrayTwo = []; // should return []

// Solution one:
function solutionOne(nums){
    return (nums || []).sort(function(a, b){
        return a - b
    });
}
console.log(solutionOne(inputArrayOne))

// Solution two:
function solutionTwo(nums){
    return nums !== null ? nums.sort(function(a, b){
        return a - b
    }) : [];
}
console.log(solutionTwo(inputArrayTwo))