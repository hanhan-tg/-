// https://leetcode-cn.com/problems/first-bad-version/

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let l = 1;
        let r = n;
        while(l <= r){
            let mid = Math.floor((l + r) / 2);
            if(isBadVersion(mid)){
                r = mid - 1;
            }else{
                l = mid + 1;
            }
        }
        return l;
    };
};
// 时间复杂度：$O(logN)$
// 空间复杂度：$O(1)$