// https://leetcode-cn.com/problems/container-with-most-water/
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // 双指针，思路，类似于接雨水
    let left = 0;
    let right = height.length - 1;
    let max = 0;
    while(left < right){
        if(height[left] < height[right]){
            max = Math.max((right - left) * height[left], max);
            left++;
        }else{
            max = Math.max((right - left) * height[right], max);
            right--;
        }
    }
    return max;
    // O(N)
    // O(1)
};


var maxArea = function(height) {
    // 双指针递归求值(超时)
    // 如果剪枝，说不定就不超时了
    const f = (left, right) => {
        if(left < right){
            max = (right - left) * Math.min(height[left], height[right])
            return Math.max(max, f(left+1, right), f(left, right-1));
        }
        return 0;
    }
    return f(0, height.length - 1);
};
var maxArea = function(height) {
    // 错误思路，没得结果，各种bug
    // 指针从两头开始走，
    // left++一直 到left+1 < left为止， 
    // right--一直到right-1 < right为止
    // 此时容纳的水max= (right - left) * Math.min(height[left], height[right]);
    // 然后让left++，right--，继续下去。如果继续满足，继续判断max = Math.max(max, oldMax);
    // 直到left >= right
    let left = 0;
    let right = height.length - 1;
    let max = 0;
    while(left < right){
        while(height[left] < height[left + 1]) left++;
        while(height[right] < height[right - 1]) right--;
        if(left >= right) {
            left--;
            right++;
        }
        let sum = (right - left) * Math.min(height[left], height[right]);
        max = Math.max( sum, max);
        left++;
        right--;
    }
    return max;
};