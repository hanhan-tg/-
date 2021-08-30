// https://leetcode-cn.com/problems/climbing-stairs/

/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function (n) {
    if (n <= 2) return n;
    const dp = []
    dp[0] = 1;
    dp[1] = 2;
    for (let i = 2; i < n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[dp.length - 1]
};
/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function (n) {
    if (n <= 2) return n;
    let num1 = 1;
    let num2 = 2;
    let sum = 0;
    for(let i = 3; i <= n; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return sum;
};