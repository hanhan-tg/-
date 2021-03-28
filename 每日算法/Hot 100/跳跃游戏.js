// https://leetcode-cn.com/problems/jump-game/


var canJump = function(nums) {
    // 实时维护当前能跳到的最远距离
    let max = 0;
    for(let i = 0; i < nums.length; i++){
        if(i > max) return false; // 说明连i都到不了
        max = Math.max(max, i + nums[i]);
    }
    return true;
};
var canJump = function(nums) {
    // 动态规划
    // dp[i]表示是否能跳到i
    const dp = new Array(nums.length);
    dp[0] = true;
    for(let i = 0; i < nums.length; i++){
        for(let j = 1; j <= nums[i]; j++){
            dp[i + j] = true && dp[i]; // 得保证当前位置是否能达到
        }
    }
    return dp[nums.length - 1] || false ;
};