// https://leetcode-cn.com/problems/decode-ways/
/**
 * @param {string} s
 * @return {number}
 */
// 思路：
// 重点是dp[i] = dp[i-1] + dp[i-2]
// 也就是说，s字符串i位置时的可能数量为前一个+前两个，和爬楼梯一样，因为已经默认该位是单个数
// 对长度为i的s的末尾两位来说，能产生影响的就是最后两位，[a1,a2,i]，当a1a2时，前i-2位固定了，当a1  a2时，也就是不组合时，
// 前i-1位也固定了，
// 对i来说，重点在于i-1位是否组合成两位，dp[i]就是i-1位的可能总数
// 因为i-1位就单和组合两种情况，单的时候前i-1位变化，组合的时候前i-2位变化(爬楼梯)
var numDecodings = function (s) {
    if (s == null || s.length == 0) {
      return 0;
    }
    const dp = Array(s.length + 1).fill(0);
    dp[0] = 1;
    dp[1] = s[0] !== "0" ? 1 : 0;
    for (let i = 2; i < s.length + 1; i++) {
      const one = +s.slice(i - 1, i);
      const two = +s.slice(i - 2, i);
  
      if (two >= 10 && two <= 26) {
        dp[i] = dp[i - 2];
      }
  
      if (one >= 1 && one <= 9) {
        dp[i] += dp[i - 1];
      }
    }
  
    return dp[dp.length - 1];
  };