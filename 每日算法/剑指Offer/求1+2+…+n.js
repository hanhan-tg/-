// https://leetcode-cn.com/problems/qiu-12n-lcof/

/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
  // 递归 + 短路
  return n && (sumNums(n - 1) + n);
};
/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
  // 看官方题解吧
  let ans = 0, A = n, B = n + 1;

  (B & 1) && (ans += A);
  A <<= 1;
  B >>= 1;

  (B & 1) && (ans += A);
  A <<= 1;
  B >>= 1;

  (B & 1) && (ans += A);
  A <<= 1;
  B >>= 1;

  (B & 1) && (ans += A);
  A <<= 1;
  B >>= 1;

  (B & 1) && (ans += A);
  A <<= 1;
  B >>= 1;

  (B & 1) && (ans += A);
  A <<= 1;
  B >>= 1;

  (B & 1) && (ans += A);
  A <<= 1;
  B >>= 1;

  (B & 1) && (ans += A);
  A <<= 1;
  B >>= 1;

  (B & 1) && (ans += A);
  A <<= 1;
  B >>= 1;

  (B & 1) && (ans += A);
  A <<= 1;
  B >>= 1;

  (B & 1) && (ans += A);
  A <<= 1;
  B >>= 1;

  (B & 1) && (ans += A);
  A <<= 1;
  B >>= 1;

  (B & 1) && (ans += A);
  A <<= 1;
  B >>= 1;

  (B & 1) && (ans += A);
  A <<= 1;
  B >>= 1;

  return ans >> 1;
};