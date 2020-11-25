// 35. 搜索插入位置
// https://leetcode-cn.com/problems/search-insert-position/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // 方法一：
    // 二分查找
    let l = 0;
    let r = nums.length - 1;
    while(l <= r){
        let mid = (l + r) >> 1;
        if(target == nums[mid]){
            return mid;
        }
        if(nums[mid] > target){
            r = mid - 1;
        }else{
            l = mid + 1;
        }
    }
    return l;
    // 时间复杂度： O(logn)
    // 空间复杂度： O(1)

    // 方法二
    // 直接比较搜索，无论找没找到，最后都返回i
    let i = 0;
    while(nums[i] < target){
        i++;
    }
    return i;
    // 时间复杂度： O(n)
    // 空间复杂度： O(1)
};