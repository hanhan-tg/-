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

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 var wordBreak = function(s, wordDict) {
    // DFS
    // 小笨猪
    const len = s.length;
    const memo = new Array(len); // 记忆化数组
    const canBreak = (start) => {
        if(start === len) return true;
        if(memo[start] !== undefined) return memo[start];
    
        for(let i = start + 1; i <= len; i++) {
            const prefix = s.slice(start, i);
            if(wordDict.includes(prefix) && canBreak(i)) {
                memo[i] = true;
                return true;
            }
        }
        memo[start] = false;
        return false;
    }
    return canBreak(0)
};
const wordBreak = (s, wordDict) => {
    // 小笨猪
    // 动态规划
    const wordSet = new Set(wordDict);
    const len = s.length;
    const dp = new Array(len + 1).fill(false);
    dp[0] = true;
  
    for (let i = 1; i <= len; i++) {
      for (let j = i - 1; j >= 0; j--) {    // j去划分成两部分
        const suffix = s.slice(j, i);       // 后缀部分 s[j: i-1]
        if (wordSet.has(suffix) && dp[j]) { // 后缀部分是单词，且左侧子串[0,j-1]的dp[j]为真
          dp[i] = true;
          break;  // dp[i] = true了，i长度的子串已经可以拆成单词了，不需要j继续划分子串了
        }
      }
    }
    return dp[len];
  };