// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // 双指针法
    // 实现一：
    // 一个快指针，一个慢指针，判断每个数的时候，初始状态都是l和r在同一位置
    // 然后向后判断，知道r位置的值和l位置的值不同，就可以将中间这些值截取掉
    // 截取掉之后自然是点到为止，此时l后一个位置已经是r之前位置上数了，r重新
    // 从l出发不断判断，知道最后，r甚至可能超出数组范围，不过一样会处理
    if(!nums || !nums.length) return 0;
    let l = 0;
    let r = 0;
    while(r < nums.length){
        while(nums[l] == nums[r]){
            r++;
        }
        if(l != r){
            nums.splice(l, r - l - 1); // 除非数组巨大，不然复杂度就为O(1)，否则就为O(n)
            l++;
            r = l;
        }
    }
    // 时间复杂度：O(n²)  splice最差为O(n)，加上外层循环，就为O(n²)
    // 空间复杂度：O(1)
    // 实现二：
    // 因为不需要splice，所以还是很快的，当然这是带有返回值的，最后的数组是四不像了，
    // 既不是之前的数组了，也没有完全删除重复项，最后末尾肯定还保留了之前的数据
    // 实现一就完全删除了重复项
    // let l = 0,
    //     r = 0;

    // while (r < nums.length) {
    //     if (nums[l] != nums[r]) {
    //         l++;
    //         nums[l] = nums[r];
    //     }
    //     r++;
    // }
    // return l + 1;
    // 时间复杂度：O(n)  n为数组长度，数组中每项都要遍历一遍
    // 空间复杂度：O(1)
};