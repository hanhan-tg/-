// https://leetcode-cn.com/problems/coin-change/
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    // 动态规划
    // 对0...amount进行分析
    // 对于dp[i]，表示的是当要组成i时所需要的硬币数, dp内数值初始为Infinity，除了dp[0] = 0;
    // 应该遍历coins里的值val，dp[i] = Math.min(1 + dp[i - val], dp[i]),
    // 最后能得到dp[i]为最小硬币数

    if(amount == 0) return 0;
    const dp = new Array(amount+1).fill(Infinity);
    dp[0] = 0;

    for(let i = 1 ;i <= amount; i++){
        for(let coin of coins){
            if(coin <= i){
                dp[i] = Math.min(dp[i - coin] + 1, dp[i]);
            }
        }
    }

    return dp[amount] == Infinity ? -1 : dp[amount];
    // O(amount * coins.length)
    // O(amount)
};
var coinChange = function(coins, amount) {
    // 贪心，剪枝
    // 思路：从大往小找，先把最大的都填上，直到最后一个超出了，然后填小的，一直往下走，如果能填成amount，则拿到结果
    //      每次的结果都和老结果比上一比，取小的
    //      剪枝嘛，最大的再退一个，继续，再退一个，继续，直到退完了，
    //      反正递归调用嘛，最后结果就是最少的那个
    coins.sort((a,b) => b-a);
    let res = Infinity;
    const f = (amount, index, count) => {
        if(amount == 0) return res = Math.min(res, count);
        if(index == coins.length) return ;
        for(let n = Math.floor(amount / coins[index]); count + n < res && n >= 0; n--){
            f(amount - n * coins[index], index + 1, count + n);
        }
    }
    f(amount, 0, 0);
    return res == Infinity ? -1 : res;
};