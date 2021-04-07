// https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/


/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
    let str = s.slice(0,n);
    s = s.replace(str, '');
    s += str;
    return s;
};
var reverseLeftWords = function(s, n) {
    return s.slice(n) + s.slice(0, n);
};