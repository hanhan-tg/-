// https://leetcode-cn.com/problems/unique-paths/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function (m, n) {
    // dp[i][j] 表示到[i, j]的路径条数
    // dp[i][j] = dp[i-1][j] + dp[i][j-1];
    const dp = new Array(m);
    for (let i = 0; i < m; i++) {
        dp[i] = new Array(n);
    }
    dp[0][0] = 1;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            // 这里的处理总感觉不太好
            if(!r && !c) continue;
            let up = r == 0 ? 0 : dp[r - 1][c];
            let left = c == 0 ? 0 : dp[r][c - 1];
            dp[r][c] = up + left;
        }
    }
    return dp[m-1][n-1]
};
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function (m, n) {
    //  上面的空间优化
    // 可以直接把第一行处理了，其实第一列也是一样的，但是这样的dp是以hang为准的，所以只需要处理行即可
    const dp = new Array(n).fill(1);
    
    for (let r = 1; r < m; r++) {
        for (let c = 0; c < n; c++) {
            let left = c == 0 ? 0 : dp[c - 1];
            dp[c] = left + dp[c];
        }
    }
    return dp[n-1]
};