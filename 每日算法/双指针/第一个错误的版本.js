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
        // 二分法
        // 每次循环判断两次
        // 如果isBadVersion(mid)和isBadVersion(变化的值)不同，说明就找到了错误的版本
        // 所谓变化的值，是变化后的r = mid - 1或者l = mid + 1
        let l = 1;
        let r = n;
        let mid = 0;
        while (true) {
            mid = Math.floor((l + r) / 2);
            if (isBadVersion(mid)) { // mid为false
                r = mid - 1;
                if (!isBadVersion(r)) { // 如果mid-1 为true，说明mid为第一个错误版本
                    return mid;
                }
            } else { // mid为true
                l = mid + 1;
                if (isBadVersion(l)) { // 如果mid+1 为false，说明mid+1为第一个错误版本
                    return l;
                }
            }
        }
        // 时间复杂度：O(log n)。 每次都调用了两次isBadVersion，但是某种程度上来说循环次数更少了
        // 空间复杂度：O(1)。

        let low = 0,
            high = n;
        let firstBadVer = n;
        while (low <= high) {
            const mid = (low + high) >>> 1;
            if (isBadVersion(mid)) {
                firstBadVer = mid; // mid是坏版本，
                high = mid - 1; // 将右指针考察mid-1
            } else {
                low = mid + 1; // mid还不是坏版本，将左指针考察到mid+1
            }
        }
        return firstBadVer;
        // 时间复杂度：O(log n)。 每次只调用了一次isBadVersion，但是循环次数就更多
        // 空间复杂度：O(1)。
    };
};