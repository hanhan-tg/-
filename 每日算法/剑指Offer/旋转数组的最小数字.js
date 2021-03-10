// https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/
// 题解：https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/solution/mian-shi-ti-11-xuan-zhuan-shu-zu-de-zui-xiao-shu-3/

/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    if(!numbers.length) return -1;
    // 二分查找，只是多点临界条件
    let left = 0;
    let right = numbers.length - 1;
    while(left < right){
        let mid = Math.floor((left + right) / 2);
        if(numbers[mid] > numbers[right]){
            //说明最小元素在mid右边
            left = mid + 1;
        }else if(numbers[mid] < numbers[right]){
            // 说明最小元素在mid左边
            right = mid;
        }else{
            // 因为mid始终是不会和right相等的(前提是循环内left<right，而且有Math.floor)
            // 所以当mid的值和right的值相等时，mid和right中间的值全相同，而right至少>=mid + 1
            // 所以可以让right-1，来达到缩小区间且不会遗漏的效果，因为重复再多也会一次一次的消除掉
            right -= 1;
        }
    }
    return numbers[left];
    // 补充思考： 为什么本题二分法不用 nums[mid] 和 nums[left] 作比较？
    // 二分目的是判断 mid 在哪个排序数组中，从而缩小区间。而在 nums[mid] > nums[left]情况下，
    // 无法判断 mid 在哪个排序数组中。本质上是由于 right 初始值肯定在右排序数组中； left 初始值无法确定在哪个排序数组中。
};