// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
 var maxProfit = function (prices) {
    // 贪心
    let ans = 0;
    for (let i = 1; i < prices.length; i++) {
        ans += Math.max(prices[i] - prices[i - 1], 0)
    }
    return ans
};

 var maxProfit = function (prices) {
    // dp[i]表示利润
    // 对某天来说有两种情况：
    // 1. 持有股票 今天买的，或者继承自昨天的  dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] - prices[i])
    // 2. 不持有   今天卖的，或者继承自昨天的  dp[i][1] = Math.max(dp[i-1][0] + prices[i], dp[i-1][1])
    let hold = -prices[0];
    let unhold = 0;
    for (let i = 1; i < prices.length; i++) {
        let hold2 = Math.max(hold, unhold - prices[i]);
        let unhold2 = Math.max(hold + prices[i], unhold);

        hold = hold2;
        unhold = unhold2;
    }
    return Math.max(unhold)
};

 var maxProfit = function (prices) {
    // dp[i]表示利润
    // 对某天来说有两种情况：
    // 1. 持有股票 今天买的，或者继承自昨天的  dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] - prices[i])
    // 2. 不持有   今天卖的，或者继承自昨天的  dp[i][1] = Math.max(dp[i-1][0] + prices[i], dp[i-1][1])
    const dp = new Array(prices.length);
    for (let i = 0; i < prices.length; i++) {
        dp[i] = [];
    }
    dp[0][0] = -prices[0];
    dp[0][1] = 0;
    for (let i = 1; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i])
        dp[i][1] = Math.max(dp[i - 1][0] + prices[i], dp[i - 1][1])
    }
    return Math.max(dp[prices.length - 1][1])
};