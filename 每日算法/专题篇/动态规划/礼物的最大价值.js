// https://leetcode-cn.com/problems/li-wu-de-zui-da-jie-zhi-lcof/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function(grid) {
    // 滚动数组
    // 不改变原数组，看不懂就直接跟着循环走一遍
    // https://leetcode-cn.com/problems/li-wu-de-zui-da-jie-zhi-lcof/solution/zi-jie-ti-ku-jian-47-zhong-deng-li-wu-de-zui-da-ji/
    const dp = [];
    const m = grid.length - 1;
    const n = grid[0].length - 1;
    dp[0] = 0;
    for(let i = 0; i <= m; i++){
        for(let j = 0; j <= n; j++){
            let up = i == 0 ? 0 : dp[j];
            let left = j == 0 ? 0 : dp[j - 1];
            dp[j] = Math.max(up, left) + grid[i][j];
        }
    }
    console.log(dp)
    return dp[n]; 
    // O(N)
    // O(N)
};
var maxValue = function(grid) {
    // 思路看下面
    // 优化方法
    // 在空间上直接使用grid原地赋值
    // 一次双循环，直接把四种情况判断即可
    const m = grid.length - 1;
    const n = grid[0].length - 1;
    for(let i = 0 ; i <= m ; i ++){
        for(let j = 0; j <= n; j++){
            if(i == 0 && j == 0) continue;
            else if(i != 0 && j == 0) grid[i][j] += grid[i - 1][j];
            else if(i == 0 && j != 0) grid[i][j] += grid[i][j - 1];
            else grid[i][j] += Math.max(grid[i-1][j], grid[i][j-1]);
        }
    }
    return grid[m][n];
    // O(n)
    // O(1)
};
var maxValue = function(grid) {
    // 动态规划
    // dp[i][j]表示当前位置的最大价值
    // dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);

    const m = grid.length - 1;
    const n = grid[0].length - 1;
    const dp = new Array(m + 1)
    // 初始化dp数组，使之成为二维数组
    for(let i = 0; i <= m; i++){
        dp[i] = [];
    }
    dp[0][0] = grid[0][0];
    // 把第一行处理了
    for(let i = 1; i <= m; i++){
        dp[i][0] = dp[i-1][0] + grid[i][0];
    }
    // 把第一列处理了
    for(let i = 1; i <= n; i++){
        dp[0][i] = dp[0][i-1] + grid[0][i];
    }
    for(let i = 1; i <= m; i++){
        for(j = 1; j <= n; j++){
            dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]) + grid[i][j];
        }
    }
    console.log(dp)
    return dp[m][n];
};