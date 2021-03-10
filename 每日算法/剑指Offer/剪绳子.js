// https://leetcode-cn.com/problems/jian-sheng-zi-lcof/

/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {

    // 动态规划
    const dp = new Array(n + 1).fill(0);
    dp[1] = 1;
    dp[2] = 1;
    dp[3] = 2;
    for(let i = 4; i <= n; i++){
        for(let j = 2; j < i; j++){
            dp[i] = Math.max( dp[i], j*dp[i-j], j*(i-j));
        }
    }
    return dp[n];

};
var cuttingRope = function(n) {
    // 贪心
    // 核心思路是：尽可能把绳子分成长度为3的小段，这样乘积最大
    if(n < 4) return n-1;
    let ans = 1;
    while(n > 4){
        ans *= 3;
        n -= 3;
    }
    return ans * n;
    

};
var cuttingRope = function(n) {
    // 数学
    // 重点在于能推导出把每个乘数尽量设为3时结果越大
    // 当最后一个数为1时，把一个3拿出来组合成2×2，如果为2时直接×2，如果为0，就无，直接结束
    if(n == 2) return 1;
    if(n == 3) return 2;
    let mi = Math.floor(n / 3);
    let yu = n % 3;
    if(yu == 0){
        return Math.pow(3, mi);
    }else if(yu == 1){
        return Math.pow(3, mi - 1)*4;
    }else{
        return Math.pow(3, mi) * 2;
    }
    // O(1)
    // O(1)
};