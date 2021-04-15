// https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // 二分查找
  // 找左边界和右边界
  // 可以通过找target-1来找到左边界
  // 如果找到target也往右继续判断找边界，知道最后出现的target就是边界
  // 最后的i指向的都是target的右一个数

  return helper(nums, target) - helper(nums, target - 1);

  function helper(nums, target) {
      let i = 0;
      let j = nums.length - 1;
      while(i <= j){
          let mid = (i + j) / 2 | 0;
          if(nums[mid] <= target) {
              i = mid + 1;
          } else {
              j = mid - 1;
          }
      }
      return i;
  }
};