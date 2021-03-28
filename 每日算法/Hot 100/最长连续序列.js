/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    // 排序解决
    if(nums.length == 0) return 0;
    nums.sort((a,b) => a-b);
    let maxLen = 0;
    let len = 1;
    for(let i = 1; i < nums.length; i++){
        if(nums[i] == nums[i - 1]) continue;
        if(nums[i] - nums[i - 1] != 1){
            // 说明不连续了
            maxLen = Math.max(maxLen, len);
            len = 1;
        }else{
            len++;
        }
    }
    maxLen = Math.max(maxLen, len);
    return maxLen;
};