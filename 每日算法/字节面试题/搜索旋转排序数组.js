// https://leetcode-cn.com/problems/search-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // 二分查找
    // 方法很简单
    // 就是细节，细节，懂的都懂
    if(!nums.length) return -1;
    if(nums.length == 1){
        return nums[0] === target ? 0 : -1;
    }
    let left = 0;
    let right = nums.length - 1;
    while(left < right){
        const mid = Math.floor((left + right) / 2);
        const midVal = nums[mid];
        if(midVal == target) return mid;
        if(midVal < nums[nums.length - 1]){
            // 此时mid在小区间内
            if(target <= nums[nums.length - 1] && midVal < target){
                // target在小区间内，且比mid大
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }else{
            // 此时mid在大区间内
            if(target > nums[nums.length - 1] && midVal >  target){
                // target在大区间内，且mid 大于target
                right = mid - 1
            }else{
                left = mid + 1;
            }
        }
        console.log(midVal);
    }
    console.log(left, right)
    return nums[left] === target ? left : -1
};