// https://leetcode-cn.com/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/

// https://leetcode-cn.com/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/solution/mian-shi-ti-48-zui-chang-bu-han-zhong-fu-zi-fu-d-9/
/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    if(s.length == 0 || s.length === 1) return s.length;
    // 动态规划
    // dp[i] = 如果往回走dp[i - 1]长度没有碰到s[i]则 dp[i - 1] + 1，不然就为碰到时 差值+1
    // 可以不需要数组实现

    // 不想写，没实现，思路很明确
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