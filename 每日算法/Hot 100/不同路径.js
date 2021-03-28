// https://leetcode-cn.com/problems/unique-paths/

// https://leetcode-cn.com/problems/unique-paths/solution/bu-tong-lu-jing-by-leetcode-solution-hzjf/
// 官方题解方法二：离谱
var uniquePaths = function(m, n) {
    // dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    // 理由：对i，j位置来说，到达它的方式只有两种，从左/从上，只需要把两者的情况加起来即可
    // 优化空间
    const dp = new Array(n).fill(0);
    dp[0] = 1;

    for(let y = 0; y < m; y++){
        for(let x = 0; x < n; x++){
            if(x == 0){
                dp[x] = dp[x];
            }else{
                dp[x] = dp[x] + dp[x-1]
            }
        }
    }
    return dp[n-1];
};
var uniquePaths = function(m, n) {
    // dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    // 理由：对i，j位置来说，到达它的方式只有两种，从左/从上，只需要把两者的情况加起来即可
    const dp = new Array(m);
    for(let i = 0; i < m; i++){
        dp[i] = new Array(n).fill(0);
    }
    dp[0][0] = 1;

    for(let y = 0; y < m; y++){
        for(let x = 0; x < n; x++){
            if(isValid(x - 1, y)){
                dp[y][x] += dp[y][x - 1];
            }
            if(isValid(x, y - 1)){
                dp[y][x] += dp[y - 1][x];
            }
        }
    }
    return dp[m-1][n-1];

    function isValid(x, y){
        return x >= 0 && x < n && y >= 0 && y < m;
    }
};

var uniquePaths = function(m, n) {
    // 超时
    // dfs
    let ans = 0;
    dfs(0, 0)
    return ans

    function dfs(x, y){
        if(x == n - 1 && y == m - 1){
            ans++;
            return;
        }
        if(!isValid(x, y)) return;
        dfs(x + 1, y);
        dfs(x, y + 1);
    }
    

    function isValid(x, y){
        return x >= 0 && x < n && y >= 0 && y < m;
    }
};