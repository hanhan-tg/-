// https://leetcode-cn.com/problems/sqrtx/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    var l = 0; 
    var r = x;
    while(l <= r){
        let mid = Math.floor((l + r) / 2)
        if(mid * mid == x){
            return mid;
        }else if(mid * mid > x){
            r = mid - 1;
        }else{
            l = mid + 1;
        }
    }
    return r;
};

// 时间复杂度：$O(logN)$
// 空间复杂度：$O(1)$