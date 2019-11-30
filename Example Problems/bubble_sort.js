/**
 * Bubble Sort 
 * @param {array} nums
 * @param {integer} target
 */
//TODO
var search2 = function (nums) {
    let l = 0, r = 0; //For sorting l and r are current and past
    let swap;
    do {
        swap = false;
        for (let i = 0; i <= nums.length; i++) {
            if (i == 0) {
                l = nums[i];
            } else {
                l = nums[i - 1];
            };
            if (l > nums[i]) {
                swap = true;
                r = nums[i];
                nums[i] = l;
                nums[i - 1] = r;
            }
        }
    } while (swap);

    ;
    return nums
};

let testCase = search2([4, 5, 6, 7, 0, 1, 2]);

console.log(testCase);