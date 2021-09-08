// https://leetcode-cn.com/problems/container-with-most-water/
/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function (height) {
    // 双指针，往里走
    // 对于两边的高度，每次移动矮的，因为矮的决定下限，如果遇到更高的，就重新计算，之后判断两个边界哪个矮，矮的往里走，直到相遇

    let l = 0;
    let r = height.length - 1;
    let max = Math.min(height[l], height[r]) * (r - l);
    while (l < r) {
        if(height[l] < height[r]) {
            l++
        } else {
            r--;
        }
        max = Math.max(max, Math.min(height[l], height[r]) * (r - l))
    }
    return max
};