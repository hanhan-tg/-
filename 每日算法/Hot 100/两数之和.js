// https://leetcode-cn.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function (nums, target) {
    const hash = {};
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if(hash[nums[i]] !== undefined) {
            return [hash[nums[i]], i]
        }
        // 说明nums[i] 需要diff
        hash[diff] = i;
    }
};