// https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    // 原地置换
    let index = 0;
    for(let i = 0 ; i < nums.length; i++){
        if(nums[i] % 2 == 1){
            temp = nums[index];
            nums[index] = nums[i];
            nums[i] = temp;
            index++;
        }
    }
    return nums;
    // O(N)
    // O(1)
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    // 双指针
    let left = 0;
    let right = nums.length - 1;
    // left找偶数
    // right找奇数
    // 都找到后互换位置
    while(left <= right){
        if(nums[left] % 2 === 1){
            left++;
            continue;
        }
        if(nums[right] % 2 === 0){
            right--;
            continue;
        }
        temp = nums[left]
        nums[left] = nums[right]
        nums[right] = temp;
        left++;
        right--;
    }
    return nums;
};
var exchange = function(nums) {
    // 遍历数组，碰到奇数直接splice，然后shift，同时索引++
    for(let i = 0 ; i < nums.length; i++){
        if(nums[i] % 2 == 1){
            let num = nums.splice(i, 1);
            nums.unshift(num);
        }
    }
    return nums;
    // O(N^2)
    // O(1)
};