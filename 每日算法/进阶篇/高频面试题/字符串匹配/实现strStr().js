// https://leetcode-cn.com/problems/implement-strstr/

var strStr = function(haystack, needle) {
    // 双指针法，滑动窗口
    // 缺点： 会做没必要的比较，例如重复的串

    if(!needle)  return 0;
    let i = 0;
    let j = 0;

    while(i < haystack.length && j < needle.length){
        if(haystack[i] == needle[j]){
            j++;
            i++;
        }else{
            i = i -(j - 1);
            j = 0;
        }
    }
    if( j == needle.length){
        return i - j;
    }else{
        return -1;
    }
    // 时间复杂度：O(m*n)
    // 空间复杂度：O(1)
};