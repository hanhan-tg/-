// https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/
/**
 * @param {number} n
 * @return {number}
 */

var fib = function(n) {
    // 迭代
    if(n == 1){
        return 1;
    }
    if(n == 0){
        return 0;
    }
    // 优化空间
    let sum = 0;
    let num1 = 0; 
    let num2 = 1
    for(let i = 2; i <= n; i++){
        sum = (num1 + num2) % 1000000007;
        num1 = num2;
        num2 = sum;
    }
    return sum;
    // 时间复杂度：O(N)
    // 空间复杂度：O(1)
    // const cache = {
    //     0: 0,
    //     1: 1
    // };
    // for(let i = 2; i <= n; i++){
    //     cache[i] = (cache[i - 1] + cache[i - 2]) % 1000000007;
    // }
    // return cache[n];
    // 时间复杂度：O(N)
    // 空间复杂度：O(N)


    // 递归
    const cache = {};
    if(n == 1){
        return 1;
    }
    if(n == 0){
        return 0;
    }
    let n1 = cache[n-1] ? cache[n-1] : fib(n-1);
    let n2 = cache[n-2] ? cache[n-2] : fib(n-2);
    if(!cache[n-1]){
        cache[n-1] = n1;
    }
    if(!cache[n-2]){
        cache[n-2] = n2;
    }
    return (n1 + n2) % 1000000007
};