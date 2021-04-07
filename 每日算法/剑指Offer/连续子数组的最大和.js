// https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/


var maxSubArray = function(nums) {
    // 动态规划
    // dp[i] = Math.max(dp[i - 1], nums[i]);
    // 优化空间
    let maxSum = nums[0];
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        max = Math.max(max + nums[i], nums[i]);
        maxSum = max > maxSum ? max : maxSum;
    }
    return Math.max(maxSum);
};
var maxSubArray = function(nums) {
    // 动态规划
    // dp[i] = Math.max(dp[i - 1] + nums[i], ,nums[i]);
    // 未优化空间
    let dp = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    }
    return Math.max(...dp);
};