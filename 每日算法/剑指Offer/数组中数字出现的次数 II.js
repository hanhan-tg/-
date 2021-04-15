// https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-ii-lcof/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  // 求和计算法
  let sum = nums.reduce((a,b) => a + b, 0);
  let set = new Set(nums);
  let sum2 = [...set].reduce((a,b) => a + b, 0);
  return ( sum2 * 3 - sum ) / 2;
};