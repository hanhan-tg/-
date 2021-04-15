// https://leetcode-cn.com/problems/gou-jian-cheng-ji-shu-zu-lcof/

/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function (a) {
  // 动态规划
  if(!a.length) return [];
  const b = [];
  let temp = 1;
  b[0] = 1;
  for (let i = 1; i < a.length; i++) {
      b[i] = b[i - 1] * a[i - 1];
  }
  for (let i = a.length - 2; i >= 0; i--) {
      temp *= a[i + 1];
      b[i] *= temp;
  }
  return b;
};