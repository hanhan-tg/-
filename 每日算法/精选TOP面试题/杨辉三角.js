// https://leetcode-cn.com/problems/pascals-triangle/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  // dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
  const dp = new Array(numRows);
  for (let i = 0; i < numRows; i++) {
    dp[i] = new Array(i);
  }

  dp[0][0] = 1;

  for (let i = 1; i < numRows; i++) {
    for (let j = 0; j <= i; j++) {
      dp[i][j] = (dp[i - 1][j - 1] || 0) + (dp[i - 1][j] || 0);
    }
  }
  return dp;
};
var generate = function (numRows) {
  // dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
  // 官方题解优化空间，但是，我的dp就是结果啊，不需要优化，没有临时变量啊？
  const ret = [];

  for (let i = 0; i < numRows; i++) {
    const row = new Array(i + 1).fill(1);
    for (let j = 1; j < row.length - 1; j++) {
      row[j] = ret[i - 1][j - 1] + ret[i - 1][j];
    }
    ret.push(row);
  }
  return ret;
};
