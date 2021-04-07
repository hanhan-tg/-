// https://leetcode-cn.com/problems/gu-piao-de-zui-da-li-run-lcof/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 假设最小值
    let min = prices[0];
    let maxPro = 0;
    for (let i = 0; i < prices.length; i++) {
        maxPro = Math.max(prices[i] - min, maxPro);
        min = Math.min(prices[i], min);
    }
    return maxPro
};
// 动态规划 dp[i] = Math.max(dp[i] - Math.min(prices[0...i-1]), 0) ;