// https://leetcode-cn.com/problems/maximal-square/

// 思路 https://leetcode-cn.com/problems/maximal-square/solution/dong-tai-gui-hua-han-kong-jian-you-hua-221-zui-da-/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    let maxLen = 0;
    let dp = new Array(matrix.length);
    for(let i = 0; i < matrix.length; i++){
        dp[i] = new Array(matrix[i].length).fill(0);
        for(let j = 0; j < matrix[i].length ; j++){
            if(matrix[i][j] === '1'){
                if(i == 0 || j == 0){
                    dp[i][j] = 1;
                }else{
                    dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
                }
                maxLen = Math.max(maxLen, dp[i][j]);
            }
        }
    }
    return maxLen * maxLen;
};