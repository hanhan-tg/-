// https://leetcode-cn.com/problems/maximum-subarray/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // 动态规划
    // dp[i]为走到i时最大的和
    // 对于i位置来说，
    // 要么加上i-1的最大和，要么不加自立门户，
    // 如果加，则值为i-1的值加上自身nums[i]；
    // 如果不加，则等于自身nums[i]，求两者最大值
    // dp[i] = Math.max(dp[i-1] + nums[i], nums[i]);

    // const dp = [];
    // dp[0] = nums[0];
    // for(let i = 1; i < nums.length; i++){
    //     dp[i] = Math.max(dp[i-1] + nums[i], nums[i]);
    // }
    // return Math.max(...dp);

    // O(N)
    // O(N)

    // 空间优化
    let pre = 0;
    maxAns = nums[0];
    for(let i = 0; i < nums.length; i++){
        pre = Math.max(pre + nums[i], nums[i]);
        maxAns = Math.max(pre, maxAns);
    }
    return maxAns;
};