// https://leetcode-cn.com/problems/3sum/submissions/
// 双指针
/**
 * 思路：
 *      对nums中每个值处理，当前值已知，只需往后找两个值与它的和为0即可，即到了两数之和问题(双指针法)
 *      各种特殊情况：
 *          如果 nums[i]大于 00，则三数之和必然无法等于 00，结束循环
 *          如果 nums[i] == nums[i−1]，则说明该数字重复，会导致结果重复，所以应该跳过
 *          当 sum == 0 时，nums[L] == nums[L+1] 则会导致结果重复，应该跳过，L++
 *          当 sum == 0 时，nums[R] == nums[R−1] 则会导致结果重复，应该跳过，R-- 
 */
var threeSum = function(nums) {
    if(nums.length < 3 || nums == null){
        return [];
    }
    const res = [];
    nums.sort((a,b) => a-b);
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > 0) break;
        if(i > 0 && nums[i] == nums[i-1]) continue;
        let L = i + 1;
        let R = nums.length - 1;
        while(L < R){
            const sum = nums[i] + nums[L] + nums[R];
            if(sum === 0){
                res.push([nums[i], nums[L], nums[R]]);
                while(L < R && nums[L] == nums[L + 1]) L++;
                while(L < R && nums[R] == nums[R - 1]) R--;
                L++;
                R--;
            }else if(sum > 0) {
                R--;
            }else if(sum < 0) {
                L++;
            }
        }
    }
    // console.log(res)
    return res;
};

// 时间复杂度： O(n²)
// 空间复杂度： 就多个res