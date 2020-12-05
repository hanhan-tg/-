// https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii/submissions/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    // 由于重复不影响最小值，所以只需要把重复的去掉就可以了

    nums = [...new Set(nums)];
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
    // 时间复杂度： O(N) ? 解构要O(N)时间？
    // 空间复杂度： O(1)
};