// https://leetcode-cn.com/problems/partition-equal-subset-sum/


// 题解 ： https://leetcode-cn.com/problems/partition-equal-subset-sum/solution/0-1-bei-bao-wen-ti-xiang-jie-zhen-dui-ben-ti-de-yo/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    // 背包问题
    // 目的是求是否有元素可以组成所有元素值的一半，如果有，则符合，否则不符合
    // 数组总和为偶数(两相同的数相加为偶数)
    // dp[i][j] 表示到第i个元素时，j为容量
    // 对i来说，只有取和不取两种，
    //              如果不取，则为dp[i][j] = dp[i - 1][j]
    //              如果取，则为 dp[i][j] = dp[i - 1][j - nums[i]] + nums[i]
    // 所以只要dp[...][sum / 2]存在即可
    if(nums.length <= 1) return false;
    let sum = 0;
    const dp = [];
    for(let i = 0 ; i < nums.length; i++){
        sum += nums[i];
    }
    if(sum % 2 === 1) return false;
    for(let i = 0 ; i < nums.length; i++){
        dp[i] = [];
    }
    let halfSum = sum / 2;
    dp[0][nums[0]] = true;
    for(let i = 1; i < nums.length; i++){
        for(let j = 0; j <= halfSum ; j++){
            dp[i][j] = dp[i - 1][j];

            // if(nums[i] === j){
            //     dp[i][j] = true;
            //     if(j === halfSum) return true;
            //     continue;
            // }
            if(nums[i] <= j){
                dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]] || false;
            }
            if(dp[i][halfSum]) return true;
        }
    }
    console.log(dp)
    return false; 
    // return dp[nums.length - 1][halfSum];
};
var canPartition = function(nums) {
    // 优化空间
    if(nums.length <= 1) return false;
    let sum = 0;
    const dp = [];
    for(let i = 0 ; i < nums.length; i++){
        sum += nums[i];
    }
    if(sum % 2 === 1) return false;
    let halfSum = sum / 2;
    dp[0] = true;
    if(nums[0] <= halfSum) dp[nums[0]] = true;
    for(let i = 1; i < nums.length; i++){
        for(let j = halfSum; nums[i] <= j ; j--){
            if(dp[halfSum]) return true;
            dp[j] = dp[j] || dp[j - nums[i]];
        }
    }
    return dp[halfSum] || false; 
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    // dfs递归实现
    // 对一个数，只有选和不选，然后返回选和不选的||，就能得到结果
    // 用hash 来存储，提高效率
    let sum = 0;
    for (const n of nums) { // 求数组和
        sum += n;
    }
    if (sum % 2 != 0) return false;
    const target = sum / 2;
    const hash = {};
    

    const dfs = (curSum, i) => {
        if(curSum === target) return true;
        if(curSum > target || i === nums.length) return false;

        const res = f(curSum + nums[i], i + 1) || f(curSum, i + 1);
        const key = res + '/' + i;
        if(hash[key]){
            return hash[key];
        }
        hash[key] = res;
        return res;
    }
    return dfs(0, 0)
};