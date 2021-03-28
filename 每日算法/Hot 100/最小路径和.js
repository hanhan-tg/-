// https://leetcode-cn.com/problems/minimum-path-sum/

var minPathSum = function(grid) {
    // 动态规划
    // dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j];
    // 尝试优化空间，显然可以换成一维空间
    const m = grid.length;
    const n = grid[0].length;
    const dp = new Array(n).fill(Infinity);
    dp[0] = 0;
    for(let y = 0; y < m; y++){
        for(let x = 0; x < n; x++){
            if(x == 0){
                dp[x] = dp[x] + grid[y][x];
            }else {
                dp[x] = Math.min(dp[x-1], dp[x]) + grid[y][x];
            }
        }
    }
    return dp[n - 1];
};
var minPathSum = function(grid) {
    // 动态规划
    // dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j];
    const m = grid.length;
    const n = grid[0].length;
    const dp = new Array(m);
    for(let i = 0; i < dp.length; i++){
        dp[i] = new Array(n).fill(0)
    }
    for(let y = 0; y < m; y++){
        for(let x = 0; x < n; x++){
            if(isValid(x - 1, y) && isValid(x, y - 1)){
                dp[y][x] = Math.min(dp[y][x - 1], dp[y - 1][x]);
            }else if(isValid(x - 1, y)){
                dp[y][x] += dp[y][x - 1];
            }else if(isValid(x, y - 1)){
                dp[y][x] += dp[y - 1][x];
            }
            dp[y][x] +=grid[y][x];
        }
    }
    return dp[m-1][n-1];

    function isValid(i, j){
        return i >= 0 && i <= n && j >= 0 && j <= m;
    }
};
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    // dfs + 贪心 leetcode超时
    const m = grid.length;
    const n = grid[0].length;
    let ans = Infinity;
    dfs(0,0,0);
    return ans;
    
    function dfs(x, y, value) {
        if(!isValid(x, y)) return ;
        if( x == n - 1 && y == m - 1) {
            ans = Math.min(ans, value + grid[y][x]);
            return ;
        }
        dfs(x + 1, y, value + grid[y][x]);
        dfs(x, y + 1, value + grid[y][x]);
    }

    function isValid(i, j){
        return i >= 0 && i < n && j >= 0 && j < m;
    }
};