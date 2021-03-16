// https://leetcode-cn.com/problems/house-robber/

var rob = function(nums) {
    // 竟然一次就AC了，我哭辽

    // 对于dp[i] 来说，dp[i]取得最大值的方式就是除了不能偷相邻的i-1，dp[0...i-2]，取之间最大值再加上nums[i] 就等于dp[i]
    //   dp[i] = Math.max(dp) + nums[i]，此处的dp要排除dp[i-1]
    if(nums.length == 0) return 0;
    if(nums.length <= 2){
        return Math.max(...nums);
    }
    const dp = new Array(nums.length).fill(0);
    dp[0] = nums[0];
    dp[1] = nums[1];
    for(let i = 2; i < nums.length; i++){
        const temp = dp[i - 1];// 保留i-1位置的值
        dp[i - 1] = 0; // 把前一个位置设置为0防止影响最大值判断
        dp[i] = Math.max(...dp) + nums[i];
        dp[i - 1] = temp;// 还原i-1位置的值
    }
    return Math.max(...dp);// 返回dp数组中最大的值
};
var rob = function(nums) {
    // 滚动数组
    // 对于i来说，只有偷和不偷两种
    // 如果偷，值为i-2的值 + i的值,如果不偷，则取i-1的值
    if(nums.length == 0) return 0;
    if(nums.length <= 2){
        return Math.max(...nums);
    }
    let left = nums[0];
    let right = Math.max(nums[1], nums[0]); // 对于初始的第二间房子来说也有偷和不偷的情况
    for(let i = 2 ; i < nums.length; i++){
        let temp = Math.max(left+nums[i], right);
        left = right;
        right = temp;
    }
    return right
};