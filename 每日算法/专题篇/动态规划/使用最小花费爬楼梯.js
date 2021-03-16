// https://leetcode-cn.com/problems/min-cost-climbing-stairs/
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    // 动态规划
    // dp[i]表示到达当前位置花费的体力总值 + 自身的体力消费
    // 对i来说，只有两种可能，1. 从i-1阶上来，2. 从i-2阶上来
    // dp[i] = Math.min(dp[i-1], dp[i-2]) + cost[i]
    // 初始状态，默认dp[0] = cost[0]，dp[1] = cost[1]
    if(cost.length == 2) return Math.min(...cost);
    cost[cost.length] = 0;
    const dp = new Array(cost.length + 1);

    sum1 = cost[0];
    sum2 = cost[1];
    for(let i = 2 ; i < cost.length ; i++){
        let now = Math.min(sum1, sum2) + cost[i];
        sum1 = sum2;
        sum2 = now;
    }
    return sum2
    // O(N)
    // O(1)
    // 下面是没优化空间的
    
    dp[0] = cost[0];
    dp[1] = cost[1];
    for(let i = 2 ; i < cost.length + 1; i++){
        dp[i] = Math.min(dp[i-1], dp[i-2]) + cost[i];
    }
    return dp[cost.length - 1];
};
var minCostClimbingStairs = function(cost) {
    // 超时
   if(cost.length == 2) return Math.min(...cost);
   // 剪枝？贪心？
   return Math.min(f(0, 0), f(1, 0));
   
   function f(index, count){
       if(index >= cost.length) return count;
       count += cost[index];
       return Math.min(f(index + 1, count), f(index + 2, count));
   }
};