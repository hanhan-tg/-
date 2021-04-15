// https://leetcode-cn.com/problems/palindrome-partitioning/

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  // 动态规划 + 回溯
  const res = [];
  const dp = new Array(s.length);
  for (let i = 0; i < dp.length; i++) {
      dp[i] = new Array(s.length);
  }
  for (let j = 0; j < s.length; j++) {
      for (let i = 0; i <= j; i++) {
          if (i == j) {
              dp[i][j] = true;
          } else if (s[i] == s[j] && j - i == 1) {
              dp[i][j] = true;
          } else if (j - i > 1 && s[i] == s[j] && dp[i + 1][j - 1]) {
              dp[i][j] = true;
          } else {
              dp[i][j] = false;
          }
      }
  }
  const dfs = (temp, start) => {
      if (start == s.length) {
          res.push(temp.slice());
          return;
      }
      for(let i = start; i < s.length; i++) {
          if(dp[start][i]){
              temp.push(s.substring(start, i + 1));
              dfs(temp, i + 1);
              temp.pop();
          }
      }
  }
  dfs([], 0);
  return res;
};