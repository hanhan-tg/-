// https://leetcode-cn.com/problems/target-sum/

var findTargetSumWays = function (nums, S) {
    // 动态规划
    var total = 0;
    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
    }

    if (total < S) {
        return 0;
    }

    var range = total * 2 + 1;
    var dp = new Array(nums.length).fill(0).map((item) => { return new Array(range).fill(0) });

    dp[0][nums[0] + total] = 1;
    dp[0][total - nums[0]] += 1;    // 如果nums[0] === 0, 那么targetSum = 0的情况有两种选择，即sum[0]是+还是-都可行。故这里用+1不是=1

    for (let i = 1; i < nums.length; i++) {
        for (let j = -total; j <= total; j++) {
            if ((j + nums[i] + total) >= range) {   // 防止越界：如果条件成立，意味着选+号没有可行方案，故+0即可
                dp[i][j + total] = dp[i - 1][j - nums[i] + total] + 0;
            }
            else if ((j - nums[i] + total) < 0) {    // 防止越界：如果条件成立，意味着选-号没有可行方案，故+0即可
                dp[i][j + total] = dp[i - 1][j + nums[i] + total] + 0;
            }
            else {
                dp[i][j + total] = dp[i - 1][j - nums[i] + total] + dp[i - 1][j + nums[i] + total];
            }
        }
    }

    return dp[nums.length - 1][S + total];
};
var findTargetSumWays = function(nums, S) {
    // 动态规划
    // dp[i][j] 表示加入i时的值为j 的个数
    // dp[i][j] = dp[i-1][j-nums[i]] + dp[i-1][j+nums[i]];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    if (Math.abs(S) > Math.abs(sum)) return 0;
    const t = sum * 2 + 1;
    const dp = [];
    for(let i = 0; i < nums.length; i++){
        dp[i] = new Array(S).fill(0);
    }
    if (nums[0] == 0) {
        dp[0][nums[0]] = 2;
    } else {
        dp[0][+nums[0]] = 1;
        dp[0][-nums[0]] = 1;
    }
    for(let i = 1; i < nums.length; i++){
        for(let j = 0; j < t; j++){
            dp[i][j] = 0;
            if(dp[i-1][j-nums[i]]){
                dp[i][j] += dp[i-1][j-nums[i]]
            }
            if(dp[i-1][j+nums[i]]){
                dp[i][j] += dp[i-1][j+nums[i]]
            }
        }
    }
    console.log(dp)
    return dp[nums.length - 1][sum + S];
};
var findTargetSumWays = function(nums, S) {
    // dfs
    // 对一个数来说，只有两种情况，+ / -，所以只需要把所有情况遍历就能找到答案
    // 当然，时间上就不好说了，得优化
    let count = 0;
    const dfs = (sum, i) => {
        if(i == nums.length) { // 必须得是nums.length，因为计算完上个元素i的值是在i+1中才得到的
            if(sum === S){
                count++;
            }
            return ;
        }
        dfs(sum + nums[i], i + 1);
        dfs(sum - nums[i], i + 1);
    }
    dfs(0, 0)
    return count;
    // 时间复杂度：O(2^N)，其中 NN 是数组 nums 的长度。
    // 空间复杂度：O(N)，为递归使用的栈空间大小。
};
var findTargetSumWays = function(nums, S) {
    // 回溯
    let count = 0;
    const dfs = (sum, i) => {
        if(i == nums.length) { // 必须得是nums.length，因为计算完上个元素i的值是在i+1中才得到的
            if(sum === S){
                count++;
            }
            return ;
        }
        // 计算+的值
        sum += nums[i];
        dfs(sum, i + 1);
        sum -= nums[i];
        // 计算-的值
        sum -= nums[i];
        dfs(sum, i + 1);
        sum += nums[i];
    }
    dfs(0, 0)
    return count;
};