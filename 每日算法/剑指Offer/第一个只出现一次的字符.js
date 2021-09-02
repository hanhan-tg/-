// https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/

// 暴力

// hash


/**
 * @param {string} s
 * @return {character}
 */
 var firstUniqChar = function (s) {
    if (!s) return ' ';

    const hash = {}
    for (let i = 0; i < s.length; i++) {
        hash[s[i]] = hash[s[i]] ? hash[s[i]] + 1 : 1;
    }
    for (let i = 0; i < s.length; i++) {
        if(hash[s[i]] === 1) return s[i];
    }
    return ' '
};