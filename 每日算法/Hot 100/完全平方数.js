// https://leetcode-cn.com/problems/perfect-squares/
// 官方题解5种方法，评论说得好啊，数学直接降维打击
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    // 动态规划
    // i表示数为i，j同理
    // dp[i]表示整数为i时完全平方数最少的个数
    // dp[i] = dp[j] + dp[i - j]
    
    // const dp = [0];
    const dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= n; i++) {
        // dp[i] = i; 如果这样时间上更快，因为可以不用填充数组为Infinity
        if ((Math.sqrt(i) | 0) == Math.sqrt(i)) {
            // 说明该数是完全平方数
            dp[i] = 1;
            continue;
        }
        for (let j = i; j >= 1; j--) {
            dp[i] = Math.min(dp[j] + dp[i - j], dp[i]);
        }
    }
    return dp[n];
};