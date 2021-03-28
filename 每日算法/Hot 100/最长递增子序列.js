// https://leetcode-cn.com/problems/longest-increasing-subsequence/


var lengthOfLIS = function(nums) {
    if(nums.length == 1) return 1;
    let max = 0;
    // 动态规划
    // dp[i] 取决于左边离i最近的比i小的dp，在那个基础上 + 1， 然后求dp中的最大值
    const dp = new Array(nums.length).fill(1);
    for(let i = 1; i < nums.length; i++){
        for(let j = i - 1; j >= 0; j--){
            if(nums[j] < nums[i]){
                max = Math.max(max, dp[j]);
            }
        }
        dp[i] += max;
        max = 0;
    }
    console.log(dp)
    return Math.max(...dp);

    // O(n^2)
    // O(n)
};