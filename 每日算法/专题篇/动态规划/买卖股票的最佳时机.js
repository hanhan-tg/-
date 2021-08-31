// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function (prices) {
    // 双循环不考虑

    let minPrice = Infinity;
    let maxPro = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            maxPro = Math.max(maxPro, prices[i] - minPrice)
        }
    }
    return maxPro
};