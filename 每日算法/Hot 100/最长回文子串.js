// https://leetcode-cn.com/problems/longest-palindromic-substring/


var longestPalindrome = function(s) {
    // 动态规划
    // dp[i][j] 表示下标从i到j的s的字串
    
    // 初始化
    let maxLen = 1;
    let start = 0;
    const dp = new Array(s.length);
    for(let i = 0; i < dp.length; i++){
        dp[i] = new Array(s.length);
        dp[i][i] = true;
    }
    // 必须得反向走
    // 如果正向走，会出现因为dp[i+1][j-1]的值还没确定而为undefined的时候，因为i+1比i大，走完了i才能走i+1
    for(let i = s.length - 1; i >= 0; i--){
        for(let j = i; j < s.length; j++){
            if(s[i] != s[j]){
                dp[i][j] = false;
            }else{
                if(j - i < 3){
                    dp[i][j] = true;
                }else{
                    dp[i][j] = dp[i+1][j-1];
                }
            }
            
            if(dp[i][j] && j - i + 1 > maxLen){
                maxLen = j - i + 1;
                start = i;
            }
        }
    }
    return s.substr(start, maxLen);
};