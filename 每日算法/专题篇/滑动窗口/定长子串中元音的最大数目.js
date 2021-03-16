// https://leetcode-cn.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let l = 0;
    let r = 0;
    let temp = 0;
    let max = 0;
    while(r < s.length){
        if(check(s[r])){
            temp++;
        }
        if(r - l > k - 1){
            temp -= check(s[l]) ? 1 : 0;
            l++;
        }
        max = Math.max(max, temp);
        r++;
    } 
    return max;

    function check(c) {
        if(c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
            return 1;
        }
        return 0;
    } 
};

var maxVowels = function(s, k) {
    // 滑动窗口 + hash
    let maxLen = 0;
    let len = 0;
    let left = 0;
    let right = 0;
    const hash = {
        "a": 1,
        "e": 1,
        "i": 1,
        "o": 1,
        "u": 1
    };
    while(right < s.length){
        if(right < k){
            if(hash[s[right]]){
                len++;
                maxLen = len > maxLen ? len : maxLen;
            }
            right++;
        }else{
            if(hash[s[left]]){
                len--;
            }
            left++;
            if(hash[s[right]]){
                len++;
            }
            maxLen = len > maxLen ? len : maxLen;
            right++;
        }
    }
    return maxLen
};