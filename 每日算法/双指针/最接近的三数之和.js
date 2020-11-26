// https://leetcode-cn.com/problems/3sum-closest/submissions/
// 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。
// 找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target, q =[]) {
    //对数组排序
    //固定一个数字，如果该数比target大，就返回这连续的三个数
    //对固定的数后面部分，双指针移动求解
    nums.sort((a, b) => a - b);
    for (var i = 0; i < nums.length - 1; i++) {
        var l = i + 1, r = nums.length - 1;
        while(l < r) {
            var sum = nums[i] + nums[l] + nums[r];
            // 如果sum>target，将他们的差值存入数组，这个差值就是距离，最小的距离就是答案，而数组中其他索引就为undefined
            //只需要找到第一个非undefined，这个值就是结果
            sum >= target ? (q[sum - target] = sum, r--) : (q[target - sum] = sum, l++)
        }
    }
    return q.find(v=>v!==undefined);
    // 复杂度分析
    // 时间复杂度：O(n²)
    // 空间复杂度：O(n)
};