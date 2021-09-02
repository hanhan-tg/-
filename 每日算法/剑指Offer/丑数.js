// https://leetcode-cn.com/problems/chou-shu-lcof/

/**
 * @param {number} n
 * @return {number}
 */
 var nthUglyNumber = function (n) {
    // 某个丑数 = 某个较少丑数 × 质因子 
    // 通过质因数一步一步来找到后面的数字
    const dp = [1]
    let a = 0;
    let b = 0;
    let c = 0;
    for (let i = 1; i < n; i++) {
        let n1 = dp[a] * 2;
        let n2 = dp[b] * 3;
        let n3 = dp[c] * 5;
        dp[i] = Math.min(n1, n2, n3);
        if (dp[i] == n1) a++;
        if (dp[i] == n2) b++;
        if (dp[i] == n3) c++;
    }
    return dp[n - 1]

};