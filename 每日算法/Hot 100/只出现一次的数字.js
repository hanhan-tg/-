// https://leetcode-cn.com/problems/single-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // 异或
    // https://leetcode-cn.com/problems/single-number/solution/hua-jie-suan-fa-136-zhi-chu-xian-yi-ci-de-shu-zi-b/
    let ans = 0;
    for(const item of nums){
        ans ^= item;
    }
    return ans;
};
var singleNumber = function(nums) {
    // hash 一次遍历
    const hash = {};
    let ans = -1;
    for(let i = 0; i < nums.length; i++){
        if(!hash[nums[i]]){
            hash[nums[i]] = 1;
        }else{
            hash[nums[i]]++;
        }
    }
    return Object.entries(hash).filter((i) => i[1] == 1)[0][0];
};
var singleNumber = function(nums) {
    // 用set
    let set = new Set();
    for(let i = 0 ,lenght = nums.length ; i< lenght ; i++ ) {
        if(set.has(nums[i])) {
            set.delete(nums[i]);   //第二次出现的数都会被删除
            continue;        
        }
        set.add(nums[i]);
    }
    return [...set];
};