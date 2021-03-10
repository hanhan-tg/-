// https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/submissions/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    // 原地置换
    // 原理：如果没有重复数字的话，则数组中每个位置对应的值和下标是相同的
    for(let i = 0; i < nums.length; i++){
        while(i != nums[i]){
            // 当遇到一个数与前面某个数相同时，则while会死循环，此时只要判断这两个位置的值是否相同然后返回结果即可
            // 当然，也只有可能相同
            if(nums[i] == nums[ nums[i] ]) return nums[i];
            let temp = nums[i];
            nums[i] = nums[temp];
            nums[temp] = temp;
        }
    }
    return -1;
    // 时间复杂度：O(N^2)???
    // 空间复杂度：O(1)

    // hash表
    // if(nums.length <= 1) return false;
    // const hash = {};
    // for(let i = 0 ; i < nums.length; i++){
    //     if(hash[nums[i]]){
    //         return nums[i];
    //     }else{
    //         hash[nums[i]] = 1;
    //     }
    // }
    // return false;
    // 时间复杂度：O(N)
    // 空间复杂度：O(N)
};