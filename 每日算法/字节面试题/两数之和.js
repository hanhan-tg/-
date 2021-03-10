// https://leetcode-cn.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if(!Array.isArray(nums)){
        return ;
    }
    if(typeof target != 'number'){
        return ;
    }
    // hash表
    const hash = {};
    for(let i = 0 ; i < nums.length; i++){
        let need = target - nums[i];
        console.log(need, hash[need], nums[i])
        if(hash[need] !== undefined){
            return [hash[need], i];
        }else{
            hash[nums[i]] = i;
        }
    }
    return null;
    // O(N)
    // O(N)
};
var twoSum = function(nums, target) {
    // 硬算
    for(let i = 0 ; i < nums.length; i++){
        for(let j = i + 1 ; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i, j]
            }
        }
    }
    // O(N^2)
    // O(1)

    // 还可以在时间上优化，
    // 先排个序
    // 第一层循环固定一个数，
    // 第二层循环用二分查找
    // 时间上更少了，但空间上变多了
    // 时间：O(NlogN)
    // 空间：O(N)
};
var twoSum = function(nums, target) {
    
    // 双指针
    // 没做完，暂时是错误的
    
    // nums.sort((a,b) => a-b);
    // let left = 0;
    // let right = nums.length - 1;
    // let arr = [];
    // while(left < right){
    //     if(nums[left] + nums[right] == target){
    //         arr = [left, right];
    //         break;
    //     }else if(nums[left] + nums[right] > target){
    //         right--;
    //     }else{
    //         left++;
    //     }
    // }
    // return nums
    // return null;
};