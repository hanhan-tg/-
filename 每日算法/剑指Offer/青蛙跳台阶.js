// https://leetcode-cn.com/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/

var numWays = function(n) {
    if(n == 1 || n == 0) return 1;
    // 动态规划
    let sum = 0;
    let num1 = 1;
    let num2 = 1;
    for(let i = 2; i <= n; i++){
        sum = (num1 + num2) % 1000000007;
        num1 = num2;
        num2 = sum;
    }
    return sum;
    // 时间复杂度： O(n)
    // 空间复杂度： O(1)
};

const cache = {};
var numWays = function(n) {
    if(n == 1 || n == 0) return 1;
    // 递归 + hash
    let n1 = cache[n-1] ? cache[n-1] : numWays(n-1);
    let n2 = cache[n-2] ? cache[n-2] : numWays(n-2);
    if(!cache[n-1]) cache[n-1] = n1;
    if(!cache[n-2]) cache[n-2] = n2;
    
    return (n1 + n2) % 1000000007
    // 时间复杂度： O(n)
    // 空间复杂度： O(n)
};