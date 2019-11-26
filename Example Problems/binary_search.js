/*
 * Binary Search 
 * 
 * Binary Search Problem
 * 
 * Problem Description:
 * Given a sorted (in ascending order) integer array nums of n elements and a
 * target value, write a function to search target in nums. If target exists,
 * then return its index, otherwise return -1.
 * 
 * You may assume that all elements in nums are unique.
 * n will be in the range [1, 10000].
 * The value of each element in nums will be in the range [-9999, 9999].
 *
 * Test Case: 
 * nums = [-1,0,3,5,9,12]
 * target = 9
 * 
*/

/**
 * Simple Binary Search
 * @param {array} nums
 * @param {integer} target
 */
var search = function (nums, target) {
    let left = 0, right = nums.length, pivot;

    //Check if left is less then or equal to right, divide pivot in half 
    // and check for target value
    while (left <= right) {
        pivot = Math.floor(left + (right - left) / 2);
        if (nums[pivot] == target) {
            return pivot;
        }
        if (target < nums[pivot]) {
            right = pivot - 1;
        } else {
            left = pivot + 1;
        }
    }
    return -1; //If target is out of bounds return -1

};


/**
 * Bubble Sort then Binary Search
 * @param {array} nums
 * @param {integer} target
 */
//TODO
var search2 = function (nums, target) {
    let l = 0, r = 0; //For sorting l and r are current and past
    for (let i = 0; i <= nums.length; i++) {
        if (i == 0) {
            l = nums[i];
        }
        if (l > nums[i]) {
            r = l;
            l = nums[i];
        }
    };
    return nums
};

let testCase = search2([4, 5, 6, 7, 0, 1, 2], 0);

console.log(testCase);
