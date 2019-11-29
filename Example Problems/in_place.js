/*
 * In-Place Recursive Problem
 * 
 * 
 * Problem Description:
 * Write a function that reverses a string. The input string is given as an array of characters char[].
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 * You may assume all the characters consist of printable ascii characters.
 * 
 * Test Case: 
 * Input: ["h","e","l","l","o"]
 * Output: ["o","l","l","e","h"]
*/
//Uses O(1)
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let l = 0, r = s.length - 1, m = s.length / 2;
    let counter;
    while (l < r) {
        counter = s[r];
        s[r] = s[l];
        s[l] = counter;
        l++;
        r--;
    }
    console.log(s);
};

let s = ["h", "e", "l", "l", "o"];

reverseString(s);





/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
//**Uses O(n)
var reverseString = function (s) {
    return s.reverse();
};