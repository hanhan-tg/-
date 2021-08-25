// https://leetcode-cn.com/problems/find-peak-element/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findPeakElement = function (nums) {
    let l = 0;
    let r = nums.length - 1;
    nums[-1] = -Infinity;
    nums[nums.length] = -Infinity
    while (l <= r) {
        const mid = (l + r) / 2 | 0;
        const midValue = nums[mid];
        const leftValue = nums[mid - 1];
        const rightValue = nums[mid + 1]
        if (midValue > leftValue && midValue > rightValue) {
            return mid;
        } else if (leftValue > rightValue) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return -1
};