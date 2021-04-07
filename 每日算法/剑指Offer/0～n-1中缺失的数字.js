// https://leetcode-cn.com/problems/que-shi-de-shu-zi-lcof/
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // 二分查找
    // if(nums[mid] - nums[mid - 1] !== 1) return nums[mid] - 1
    // if(nums[mid + 1] - nums[mid] !== 1) return nums[mid] + 1
    // if(nums[i] == i) 说明到i为止还是连续的， left = mid + 1
    // else right = mid - 1
    let left = 0;
    let right = nums.length - 1;
    // 添加边界，以处理边界问题
    nums[-1] = -1;
    nums[nums.length] = nums.length;
    while(left <= right){
        let mid = (left + right) / 2 | 0;
        if(nums[mid] - nums[mid - 1] !== 1) return nums[mid] - 1;
        if(nums[mid + 1] - nums[mid] !== 1) return nums[mid] + 1
        if(nums[mid] === mid) {
            left = mid + 1;
        }else {
            right = mid - 1;
        }
    }
    return nums[nums.length - 1] // 最后的nums.length 已经更大了，需要 -1 
};