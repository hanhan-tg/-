// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // 双指针 + hash pang慢，复杂度就懒得算了，巨大
    if(!s) return 0;
    let left = 0;
    let right = 1;
    let len = 1;
    let maxLen = 1;
    let hash = {};
    while(right <= s.length - 1){
        if(s[left] != s[right] && !hash[s[right]]){
            hash[s[right]] = 1;
            right++;
            len++;
        }else{
            if(maxLen < len) maxLen = len;
            left++;
            len = 1;
            right = left + 1;
            hash = {};
        }
    }
    if(maxLen < len) maxLen = len;
    return maxLen;
};
"hijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789hijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789hijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789hijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789hijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789hijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"