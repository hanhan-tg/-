// https://leetcode-cn.com/problems/search-in-rotated-sorted-array-ii/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
 var search = function (nums, target) {
    const len = nums.length;
    if (len === 0) return false;
    if (len === 1) return nums[0] === target;

    let l = 0;
    let r = len - 1;

    while (l <= r) {
        const mid = (l + r) / 2 | 0;
        if (target === nums[mid]) return true;
        if (nums[l] === nums[mid] && nums[r] === nums[mid]) {
            l++;
            r--;
        } else if (nums[l] <= nums[mid]) {
            // 进入else后target和nums[mid]不可能相等，但是nums[l]和nums[r]是有可能和target相等的
            // mid 在大区间
            // 最左边
            if (nums[l] <= target && target < nums[mid]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        } else {
            // mid 在小区间
            if (nums[mid] < target && target <= nums[len - 1]) { zz
                l = mid + 1
            } else {
                r = mid - 1;
            }
        }
    }
    return false;
};