//https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    // 二分法
    // 旋转后左边必定大于右边
    // 如果 mid > left, 说明最小值在mid右边，此时mid处于大区间内，需要往小区间走
    //     如果 mid + 1 < mid 说明mid+1为答案
    // 如果 mid < left, 说明最小值在mid左边，此时mid处于小区间内，需要往左走，因为小的在小区间左边
    //     如果 mid - 1 > mid 说明mid为答案

    // 如果数组只有一项，说明，第一个就是最小的
    // 如果数组不止一项，但第一项比最后一项小，说明该数组是排序好了的数组，第一个就是最小的
    if (nums.length == 1 || nums[0] < nums[nums.length - 1]) return nums[0];
    let left = 0;
    let right = nums.length - 1;
    while (true) {
        const mid = (left + right) >> 1;
        if (nums[mid] >= nums[left]) {
            left = mid + 1;
            if (nums[left] < nums[mid]) {
                return nums[left];
            }
        } else {
            right = mid - 1;
            if (nums[right] > nums[mid]) {
                return nums[mid];
            }
        }
    }
    // 复杂度分析
    // 时间复杂度： O(logN)
    // 空间复杂度： O(1)
};