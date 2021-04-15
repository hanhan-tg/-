// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 贪心，把上坡的钱全拿到就是最大利润
  let ans = 0;
  for(let i = 1; i < prices.length; i++) {
      ans += Math.max(0, prices[i] - prices[i - 1]);
  }
  return ans;
};
var maxProfit = function (prices) {
  //某天，有或者没有
  // i天有两种情况，手中有股票，手中没有股票
  // 如果有，则可能是当天买的，或者是继承自头天的
  // 如果没有，则可能是今天刚卖，或者和昨天一样都没买
  // dp[i][0]表示的是手中没有股票利润
  // dp[i][1]表示的是手中有股票的利润
  const dp = [];
  for (let i = 0; i < prices.length; i++) {
      dp[i] = [];
  }
  dp[0][0] = 0;
  dp[0][1] = -prices[0];
  for (let i = 1; i < prices.length; i++) {
      dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])// 手中没有股票
      dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])// 手中有股票
  }
  return dp[prices.length - 1][0]
};
var maxProfit = function (prices) {
  // 优化空间
  haveNot = 0;
  have = -prices[0];
  for (let i = 1; i < prices.length; i++) {
      let tmp  = Math.max(haveNot, have + prices[i])// 手中没有股票
      have = Math.max(have, haveNot - prices[i])// 手中有股票
      haveNot = tmp;
  }
  return haveNot;
};