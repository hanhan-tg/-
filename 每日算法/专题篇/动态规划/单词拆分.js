// https://leetcode-cn.com/problems/word-break/
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    // 对dp[i]来说，dp[i]==true说明在我当前位置是分割点，刚匹配到一个word
    // 而如何来得到dp[i]，只要其前若干位可以组成一个单词，同时dp[i-word.length]==true(说明i前面的单词的起始点是和上个单词的分隔点)
    // 最后返回dp[s.length]，即最后是s[s.length]是分割点，也就是最后若干位可以组成一个单词
    const dp = new Array(s.length + 1).fill(0);
    dp[0] = true; // 0位置是分割点
    for(let i = 0 ; i < s.length + 1; i++){
        for(word of wordDict){
            if(word == s.substring(i - word.length, i) && dp[i - word.length]){
                dp[i] = true;
            }
        }
    }
    return dp[s.length] || false;
    // O(n^2)
    // O(n)
};