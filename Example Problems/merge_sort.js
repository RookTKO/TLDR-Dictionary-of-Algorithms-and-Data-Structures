/*
 * Merge Sort
 *
 * Mini-Max Sum Problem
 *
 * Problem Description:
 * Given five positive integers, find the minimum and maximum values that can be calculated by summing 
 * exactly four of the five integers. Then print the respective minimum and maximum values as a single 
 * line of two space-separated long integers.
 *
 *
 * Test Case:
 * let arr = [1,5,3,4,2];
 *
*/
function miniMaxSum(arr) {
    let newArr = sort(arr);

    let min = newArr.slice(0, newArr.length - 1).reduce((x, i) => x + i);
    let max = newArr.slice(1, newArr.length).reduce((x, i) => x + i)
    console.log(`${min} ${max}`);
}

let arr = [1, 2, 3, 4, 5];

function merge(l, r) {
    let newArr = [];

    while (l.length && r.length) {
        if (l[0] < r[0]) {
            newArr.push(l.shift());
        }
        else {
            newArr.push(r.shift());
        }
    }

    return newArr.concat(l.slice().concat(r.slice()));
}

function sort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const m = Math.floor(arr.length / 2);
    const l = arr.slice(0, m);
    const r = arr.slice(m);

    return merge(sort(l), sort(r));
}

console.log(sort(arr));
miniMaxSum(arr);