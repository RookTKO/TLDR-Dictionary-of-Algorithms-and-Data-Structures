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



