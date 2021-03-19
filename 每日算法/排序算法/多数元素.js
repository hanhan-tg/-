// https://leetcode-cn.com/problems/majority-element/
// 题解：https://leetcode-cn.com/problems/majority-element/solution/duo-shu-yuan-su-by-leetcode-solution/
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // 投票法
    let target = nums[0];
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        if(sum == 0){
            target = nums[i];
        }
        if(target == nums[i]){
            sum ++;
        }else{
            sum --;
        }
    }
    return target;
    // O(n)
    // O(1)
};
var majorityElement = function (nums) {
    // 1.快排之后直接取中间的值，因为有序，多数元素至少站一半，所以一定为中间的那个数


    // 快排
    // 先排序
    // 2.排序完之后判断遍历一遍，双指针
    quickSortEnter(nums); // 快排在这直接调用了
    let left = 0;
    let right = 0;
    while(right <  nums.length){
        while(nums[left] == nums[right]) right++;
        if(right - left > nums.length / 2) return nums[left];
        left = right;
    }
    return null;
    // O(nlogn)
    // O(logn)

    // 3.hash表，记录出现的次数，返回出现次数最大的
};