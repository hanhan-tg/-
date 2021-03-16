// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 一次循环
    // 找出最小值，然后求maxProfit
    // 最小值默认为prices[0];
    let minPrice = prices[0];
    let maxProfit = 0;
    for(let i = 1; i < prices.length; i++){
        if(prices[i] < minPrice){
            minPrice = prices[i];
        }else if( prices[i] - minPrice > maxProfit){
            maxProfit = prices[i] - minPrice;
        }
    }
    return maxProfit;
};
var maxProfit = function(prices) {
    // 双重循环 不谈

    // dp[i]维护i位置的利润
    // 只要设置一个最小位置点，如果出现更小的就换，不然就以该点，求dp[i]
    let min = prices[0];
    const dp = [];
    dp[0] = [0];
    for(let i = 1; i < prices.length; i++){
        dp[i] = prices[i] - min;
        if(prices[i] < min){
            min = prices[i];
        }
    }
    return Math.max(...dp);
    // O(N)
    // O(N)
    // 下面优化空间
};
var maxProfit = function(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;
    for(let i = 1; i < prices.length; i++){
        maxProfit = Math.max(prices[i] - minPrice, maxProfit);
        if(prices[i] < minPrice){
            minPrice = prices[i];
        }
    }
    return maxProfit;
    // O(N)
    // O(1)
};
var maxProfit = function(prices) {
    // 求某个位置与其右边最大值的差
    // 从右往左找出每个点右边的最大值
    let right = prices.length - 1;
    const arr = [];
    arr[right] = prices[right];
    for(let i = right - 1; i >= 0; i--){
        if(prices[i] <= arr[i + 1]){
            arr[i] = arr[i + 1];
        }else{
            arr[i] = prices[i];
        }
    }
    // 求出了每个点其右边的最大值
    // 主需要循环一遍求值即可
    let maxProfit = 0;
    for(let i = 0 ; i < prices.length; i++){
        maxProfit = Math.max(arr[i] - prices[i], maxProfit)
    }
    return maxProfit
    // O(N)
    // O(N)
};
var maxProfit = function(prices) {
    // NT，没看题，只能卖一次
    // dp[i] 表示第i天的利润
    // 对i天判断情形
    // 1. 买 dp[i][0] = Math.max( dp[i-1][1] , dp[i-1][2]) - prices[i]
    //     i-1天除了不能为买都行
    // 2. 卖 dp[i][1] = dp[i-1][0] + prices[i], 
    //     i-1天只能是买或者不买不卖
    // 3. 不买不卖 dp[i][2] = Math.max(dp[i - 1][0], [1], [2]);
    //     i-1天可以是买，可以是卖，可以使不买不卖
    const dp = new Array(prices.length);
    for(let i = 0 ; i < prices.length; i++){
        dp[i] = [];
    }
    dp[0][0] = -1 * prices[0];
    dp[0][1] = 0;
    dp[0][2] = 0;

    for(let i = 0 ; i < prices.length; i++){
        dp[i][0] = Math.max(dp[i-1][1] , dp[i-1][2]) - prices[i];
        dp[i][1] = Math.max(dp[i-1])
    }
    

};