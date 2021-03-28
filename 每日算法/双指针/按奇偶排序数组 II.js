// https://leetcode-cn.com/problems/sort-array-by-parity-ii/

var sortArrayByParityII = function(nums) {
    // 双指针
    // 同时走
    // 当奇指针odd 为奇数且nums[odd] 为偶数的时候，停止
    // 当偶指针even为偶数且nums[even]为奇数的时候，停止
    // 两者交换
    let odd = 1;
    let even = 0;
    while(odd < nums.length && even < nums.length){
        while(nums[odd] % 2 == 1 && odd < nums.length){    
            odd += 2;
        }
        while(nums[even] % 2 == 0 && even < nums.length){
            even += 2;
        }
        // 此时odd指向偶数，even指向奇数
        if(odd < nums.length && even < nums.length){
            exchange(nums, odd, even)
        }
    }
    return nums
    function exchange(arr, index1, index2){
        const temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }
};