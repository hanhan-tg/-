// https://leetcode-cn.com/problems/er-jin-zhi-zhong-1de-ge-shu-lcof/
/**
 * @param {number} n - a positive integer
 * @return
 *
 */
var hammingWeight = function (n) {
  // 简单位运算，可以稍微优化下代码
  let ans = 0;
  let layer = 32;
  while (layer) {
    if (n & 1) ans++;
    n = n >> 1;
    layer--;
  }
  return ans;
};

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let ans = 0;
  while (n !== 0) {
      n = n & (n - 1);
      ans++;
  }
  return ans;
};