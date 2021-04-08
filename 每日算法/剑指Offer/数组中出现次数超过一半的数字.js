// https://leetcode-cn.com/problems/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // 排序
  // 中间的数一定是答案
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // 投票
  // 一次遍历，找出票数最大的那个，就是答案
  // 当票数为0的时候换人
  let vote = 0;
  let value = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!vote) {
      value = nums[i];
    }
    if (nums[i] == value) {
      vote++;
    } else {
      vote--;
    }
    // if(!vote){ // 由于超过一半，所以假设每个其他数都抵消，那还能剩下需要的数，所以这个if可以不用，也就是抵消找剩下的数
    //     value = nums[i];
    // }
  }
  return value;
};
