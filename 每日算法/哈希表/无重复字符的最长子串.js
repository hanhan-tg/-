// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
var lengthOfLongestSubstring = function(s) {
    // 暴力法：两层循环，巨慢

    // 方法一：双指针法(貌似没用到哈希表)
    //如果右指针等于左指针，则中间的就为无重复字串，将右指针赋值给左指针；
    //如果该无重复字串的长度大于最长无重复字串，就赋值，最后当右指针指到最后的时候，再判断一次无重复字串长度即可
    let left = 0;
    let right = 0;
    let maxStr = "";
    while(right < s.length){
        // 每次循环时的字串
        const subStr = s.slice(left, right);
        // 如果当前right位置的字符在subStr中不存在，就继续往右走
        if(subStr.indexOf(s[right]) == -1){ // 这里不能用s[left] !== s[right] ，会导致错误，因为left会比right先动
            right++;
        }else{
            // 如果right在subStr中存在，且长度大于maxStr，就赋值
            if(subStr.length > maxStr.length){
                maxStr = subStr;
            }
            // 左指针往右走一位，因为当前s[left] == s[right]
            left++;
        }
    }
    // 最后出来的时候还要判断一次
    const subStr = s.slice(left, right);
    if(subStr.length > maxStr.length){
        maxStr = subStr;
    }
    return maxStr.length;

    // 哈希表 + 移动窗口
    // https://github.com/leetcode-pp/91alg-2/blob/master/solution/basic/d22.longest-substring-without-repeating-characters.md
};