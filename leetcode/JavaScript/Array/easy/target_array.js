// #1389
// Create Target Array in the Given Order


let nums = [0, 1, 2, 3, 4];
let index = [0, 1, 2, 2, 1];

var createTargetArray = function(nums, index) {
    let target = [];
        for(let i = 0; i < nums.length; i++) {
        target.splice(index[i], 0, nums[i]);
    } return target;
};

console.log(createTargetArray(nums, index));













