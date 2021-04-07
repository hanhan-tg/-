// https://leetcode-cn.com/problems/hamming-distance/submissions/
// 官方题解够详细了 https://leetcode-cn.com/problems/hamming-distance/solution/yi-ming-ju-chi-by-leetcode/

var hammingDistance = function(x, y) {
    // 布赖恩·克尼根算法
    let ans = 0;
    let xor = x ^ y;
    while(xor > 0){
        xor = xor & (xor - 1);
        ans ++;
    }
    return ans;
};
var hammingDistance = function(x, y) {
    // 求异或，然后遍历值取出1的个数
    let ans = 0;
    let xor = x ^ y;
    while(xor > 0){
        if(xor % 2 == 1){
            ans ++;
        }
        xor = xor >> 1;
    }
    return ans;
};