// https://leetcode-cn.com/problems/counting-bits/submissions/
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    // https://leetcode-cn.com/problems/counting-bits/solution/bi-te-wei-ji-shu-duo-chong-jie-jue-fang-p77tu/
    // 动态规划
    // 奇数：二进制表示中，奇数一定比前面那个偶数多一个 1，因为多的就是最低位的 1。
    // 偶数：二进制表示中，偶数中 1 的个数一定和除以 2 之后的那个数一样多。因为最低位是 0，除以 2 就是右移一位，也就是把那个 0 抹掉而已，所以 1 的个数是不变的。
    const dp = [];
    dp[0] = 0;
    for(let i = 1 ; i <= num ; i++){
        if(i % 2 == 1){
            dp[i] = dp[i - 1] + 1;
        }else{
            dp[i] = dp[i / 2];
        }
    }
    return dp;

};