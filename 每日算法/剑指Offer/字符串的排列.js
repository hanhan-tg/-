// https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof/

/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
    // 回溯
    const res = new Set();
    const visit = {};
    traceBack('');
    return [...res];

    function traceBack(path) {
        if(path.length == s.length) {
            return res.add(path);
        }
        for(let i = 0; i < s.length; i++){
            if (visit[i]) continue;

            visit[i] = true;
            traceBack(path + s[i]);
            visit[i] = false;
        }
    }
};