// https://leetcode-cn.com/problems/rotate-array/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // 官方题解yyds
  // 翻转数组
  const reverse = (arr, start, end) => {
      while (start < end) {
          let temp = arr[start];
          arr[start] = arr[end];
          arr[end] = temp;
          start++;
          end--;
      }
  }
  k %= nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
  
  // 直接淦 36个测试用例全通过，然后超时？？？ 提示2
  // k %= nums.length;
  // while (k) {
  //     nums.unshift(nums.pop());
  //     k--;
  // }
};