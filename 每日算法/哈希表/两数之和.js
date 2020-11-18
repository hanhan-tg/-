/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if(!nums.length){
        return ;
    }
    const hash = {};
    for(let i = 0 ; i < nums.length; i++){
        let need = target - nums[i];
        if(hash[nums[i]] !== undefined){
            return [hash[nums[i]], i];
        }
        hash[need] = i;
    }
};
// 时间复杂度：O(n)
// 空间复杂度：O(n)