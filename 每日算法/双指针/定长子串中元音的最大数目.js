// https://leetcode-cn.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/

var maxVowels = function(s, k) {
    // 思路同 爱生气的书店老板
    let l = 0;
    let r = 0;
    let temp = 0;
    let max = 0;
    // const Vowels = 'aeiou' 
    while (r < s.length) {
        if (check(s[r])) { //这里用函数来判断比用Vowels.indexof更快，毕竟这个是O(n)嘛
            temp++;
        }
        if (r - l > k - 1) {
            temp -= check(s[l]) ? 1 : 0;
            l++;
        }
        max = Math.max(max, temp);
        r++;
    }
    return max;

    function check(c) {
        if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
            return 1;
        }
        return 0;
    }
    // 时间复杂度：O(n)
    // 空间复杂度：O(1)
};