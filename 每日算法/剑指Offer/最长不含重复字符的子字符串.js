// https://leetcode-cn.com/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/

// https://leetcode-cn.com/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/solution/mian-shi-ti-48-zui-chang-bu-han-zhong-fu-zi-fu-d-9/
/**
* @param {string} s
* @return {number}
*/
var lengthOfLongestSubstring = function (s) {
    // 动态规划
    // dp[i]表示以i结尾的不重复字符串的长度
    // 用一个变量temp记录该字符串的长度
    let temp = 0;
    let len = 0;
    const hash = {};
    for (let j = 0; j < s.length; j++) {
        let i = hash[s[j]] ? hash[s[j]] : -1;
        hash[s[j]] = j;
        temp = temp < j - i ? temp + 1 : j - i; // 如果是等于，则temp不应该改变
        len = Math.max(len, temp);
    }
    return len;
};
var lengthOfLongestSubstring = function (s) {
   let len = 0;
   temp = 0;
   for (let i = 0; i < s.length; i++) {
       let j = i - 1;
       while (j >= 0 && s[j] !== s[i]) j--;
       // 此时拿到了上一个s[i]的位置
       // temp+1表示当前串能继续增长，i-j表示出现重复后串变短了，要从此处开始走
       temp = temp < i - j ?  temp + 1 : i - j; 
       len = Math.max(temp, len);
   }
   return len;
};

var lengthOfLongestSubstring = function(s) {
    // 用一个hash存储字符出现的位置
    // 当出现了相同的字符，则先比较最大长度，在把left赋值为前一个相同字符的位置+1，继续
    // left不能直接变，要逐步把中间的值在hash中变为undefined

    // hash表 双指针滑动窗口
    if(s.length == 0 || s.length === 1) return s.length;
    let len = 0;
    let hash = {};
    let left = 0; 
    let right = 0; // 可以不需要right，直接用i即可
    for (let i = 0; i < s.length; i++) {
        if(hash[s[i]] === undefined){
            // 说明该字符未出现过
            hash[s[i]] = i;
            right++;
        } else {
            len = Math.max(len, right - left);
            // left不能直接改，还需要把中间的数在hash中改为undefined
            while(left < hash[s[i]] + 1){
                hash[s[left]] = undefined;
                left++;
            }
            hash[s[i]] = i;
            right++;
        }
    }
    len = Math.max(len, right - left);    
    return len;
};