/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  let a = 0, b = 0, c = 0;
  const dp = [];// dp[i] 表示第i-1个丑数

  dp[0] = 1;

  for(let i = 1; i < n; i++) {// i是直接找丑数，非丑数不找
      let n1 = dp[a] * 2;// 下一个质因子全是2的丑数
      let n2 = dp[b] * 3;// 下一个质因子全是3的丑数
      let n3 = dp[c] * 5;// 下一个质因子全是5的丑数
      // 三者可相交
      dp[i] = Math.min(n1, n2, n3);// 找到三者最小丑数
      if(dp[i] == n1) a++;
      if(dp[i] == n2) b++;
      if(dp[i] == n3) c++;
  }
  return dp[n - 1];

};