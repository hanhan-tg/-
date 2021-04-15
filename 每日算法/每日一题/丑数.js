// https://leetcode-cn.com/problems/ugly-number/submissions/

/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  if (n <= 0) return false;
  const factors = [2, 3, 5];
  for (const item of factors) {
    while (n % item == 0) {
      n /= item;
    }
  }
  return n == 1;
};
