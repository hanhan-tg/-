// https://leetcode-cn.com/problems/he-wei-sde-liang-ge-shu-zi-lcof/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // 双指针
  // 如果非递增则hash

  let l = 0;
  let r = nums.length - 1;
  while(l < r) {
      if(nums[l] + nums[r] > target) {
          r--;
      }else if(nums[l] + nums[r] < target) {
          l++
      } else {
          return [nums[l], nums[r]];
      }
  }
};