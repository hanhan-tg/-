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
// 因为i-1位就单 和 组合两种情况，单的时候前i-1位变化，组合的时候前i-2位变化(爬楼梯)
// dp[i] 存的是s[i-1]的结果
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

  return dp[dp.length - 1]; //其实是dp[n.length]
};
var numDecodings = function(s) {
  // 上面的将dp数组换成了变量，因为当前状态只与前面两个状态有关，所以每次只需要保存前两个状态即可
  let pre = 1;
  let cur = s[0] == "0" ? 0 : 1
  for(let i = 2; i <= s.length; i++){
      let temp = 0;
      const one = +s.slice(i-1, i);
      const two = +s.slice(i-2, i);

      if(two <= 26 && two >= 10){
          temp = pre;
      }
      if(one != 0){
          temp += cur;
      }
      pre = cur;
      cur = temp;
  }
  return cur // 这个cur相当于dp[n.length]
};