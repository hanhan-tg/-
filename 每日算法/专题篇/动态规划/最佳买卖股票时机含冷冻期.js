// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 对于每一天i来说，收益只有三种状态
    // 0. 不持股，且没卖掉，收益为dp[i][0]
    // 1. 持股，收益为dp[i][1]
    // 2. 不持股，卖掉了，收益为dp[i][2]
    // 初始状态
    // dp[0][0] = 0
    // dp[0][1] = -1 * prices[0]
    // dp[0][2] = 0  相当于买了又卖了
    // 对某天i来说，
    // 假设当天是dp[i][0]，也就是不持股，且没卖掉，也就是当前手中没股票，也不会买股，所以dp[i][0] = Math.max(dp[i-1][0],dp[i-1][2])
    //                  所以收益为昨天没dp[i][0]和dp[i][2]中的大者，dp[i][2]是因为我i天没买，所以可以直接继承头一天的情况2，冷冻期无效
    // 假设当天是dp[i][1]，也就是持股，那dp[i][1] = Math.max(dp[i-1][1],dp[i][0] - prices[i])，前一天必不可能卖了，不然冷冻期买不了，
    //                  所以只有两种情况，1.今天买的股，2.昨天买的股，如果是昨天买的股，则收益和昨天相同；如果是今天买的，则收益等于昨天的减去买股的钱
    // 假设当天是dp[i][2]，也就是卖掉了，dp[i][2] = dp[i-1][1] + prices[i] 只有一种情况，就是昨天持股今天卖

    // 看不懂可看： https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/solution/fei-zhuang-tai-ji-de-dpjiang-jie-chao-ji-tong-su-y/

    if(prices.length <= 1) return 0;

    // 由于i天的状态之和前一天有关，所以可以用三个变量来存储状态
    let unhold = 0;
    let hold = -1 * prices[0];
    let selled = 0;

    for(let i = 1; i < prices.length; i++){
        
        let unhold2 = Math.max(unhold, selled);
        let hold2 = Math.max(hold, unhold - prices[i]);
        let selled2 = hold + prices[i];
        unhold = unhold2;
        hold = hold2;
        selled = selled2;
    }

    // const dp = new Array(prices.length);
    // for(let i = 0 ; i < dp.length; i++){
    //     dp[i] = [];
    // }
    // dp[0][0] = 0;
    // dp[0][1] = -1 * prices[0];
    // dp[0][2] = 0;

    // for(let i = 1; i < prices.length; i++){
    //     dp[i][0] = Math.max(dp[i-1][0], dp[i-1][2]);
    //     dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - prices[i]);
    //     dp[i][2] = dp[i-1][1] + prices[i];
    // }

    // return Math.max(dp[prices.length-1][0],dp[prices.length-1][2]);


};