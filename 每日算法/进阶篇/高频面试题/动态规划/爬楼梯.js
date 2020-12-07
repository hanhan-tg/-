// https://leetcode-cn.com/problems/climbing-stairs/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n, cache = {}){
    // 思路1：
    // 正常直接递归算就会超时，因为时间是n！
    // 所以如果能将个n的位置的值缓存下来就可以节省很多时间
    if(n == 1 ){
        return 1;
    }
    if(n == 2){
        return 2;
    }
    let res1 = 0;
    let res2 = 0;
    if(cache[n-1]){
        res1 = cache[n-1];
    }else{
        res1 = climbStairs(n-1, cache);
        cache[n-1] = res1; // 缓存
    }

    if(cache[n-2]){
        res2 = cache[n-2];
    }else{
        res2 = climbStairs(n-2, cache);
        cache[n-2] = res2; // 缓存
    }
    return res1 + res2;
    /**
     *  实现2，更好看，好理解
    if(n == 1 ){
        return 1;
    }
    if(n == 2){
        return 2;
    }
    cache[0] = 0;
    cache[1] = 1;
    cache[2] = 2;
    for(let i = 2; i <n ; i++){
        cache[i + 1] = cache[i-1]+ cache[i];
    }
    return cache[n];
     */
    // 时间复杂度: O(n)
    // 空间复杂度：O(n)

    // 思路2：滚动数组思想(可以理解为一种的递推)
    // 就直接从头算到尾，一步一步走
    let p = 0, q = 0, r = 1;
    for (let i = 1; i <= n; ++i) {
        p = q; 
        q = r; 
        r = p + q;
    }
    return r;
    // 时间复杂度: O(n)
    // 空间复杂度：O(1)
};