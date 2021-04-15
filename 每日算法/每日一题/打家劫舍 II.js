// https://leetcode-cn.com/problems/house-robber-ii/
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    // 两种情况，偷第一个，和不偷第一个
    // 如果偷，则不能偷最后一个，问题就转换为0...n-1找到可偷最大数额
    // 如果不偷，则可以偷第一个，问题就转换为0...n找到可投最大数额
    if (nums.length == 0) return 0;
    if (nums.length <= 2) return Math.max(...nums);
    return Math.max( myRob(nums.slice(0, nums.length - 1)), myRob( nums.slice(1, nums.length) ) )

    function myRob(nums) {
        let pre = 0, cur = 0, temp;
        for (let i = 0; i < nums.length; i++) {
            temp = cur;
            cur = Math.max(pre + nums[i], cur); // 此时的cur的值是num前一个数的最大值(偷窃金额)
            pre = temp;
        }
        return cur;
    }
};