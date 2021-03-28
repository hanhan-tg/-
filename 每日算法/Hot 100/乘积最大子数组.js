// https://leetcode-cn.com/problems/maximum-product-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    // 动态规划
    // 由于一个数有正负两种情况，所以得维护两个变量，一个维护 大值(可以理解为正数)，一个维护 小值(可以理解为负数)
    // 可以理解为一个正数最大值，一个负数最大值，用以处理正负数的问题，(当然可能都是正数，那小值其实就无用，小值就是用来处理负数问题)
    // 当出现负数的时候大小值交换

    let min = 1;
    let max = 1;
    let ans = -Infinity;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] < 0){
            let temp = min;
            min = max;
            max = temp;
        }
        max = Math.max(max*nums[i], nums[i])
        min = Math.min(min*nums[i], nums[i])

        ans = Math.max(max, ans);
    }
    return ans;
};