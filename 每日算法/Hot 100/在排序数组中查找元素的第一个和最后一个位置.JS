// https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // 二分查找找位置
    // 找到了也得继续找，左右都得找
    // 同时记录起始位置和结束位置
    // 最差时间为O(n)
    // 官方题解O(logn)
    if(!nums.length) return [-1, -1];

    let start = Infinity;
    let end = -Infinity;
    let left = 0;
    let right = nums.length - 1;
    while(left <= right){
        let mid = (left + right) / 2 | 0;
        if(nums[mid] == target){
            start = mid;
            end = mid;
            while(nums[start] == target){
                start--;
            }
            while(nums[end] == target){
                end++;
            }
            return [start + 1, end - 1];
        }else if (nums[mid] < target){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return [-1, -1]
    
    
};