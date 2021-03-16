// https://leetcode-cn.com/problems/coin-change-2/submissions/
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
    const dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
    // 内外循环不能变，如果变了会出现重复情况，即当coin < i的时候，dp[i-coin] + dp[i] 会计算两次，例如i==3,coin==1||2
    for (let coin of coins) {
        for (let i = 1; i <= amount; i++) {
            if (coin <= i) {
                dp[i] += dp[i - coin];
            }
        }
    }
    return dp[amount];
    // O(amount * coins.length)
    // O(amount)
};