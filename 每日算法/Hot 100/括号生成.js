// https://leetcode-cn.com/problems/generate-parentheses/submissions/

/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function (n) {
    // 可以通过左括号的数量和有括号的数量来比较，是否添加进去

    const res = [];
    let lSize = 0;
    let rSize = 0;

    const dfs = (str, lSize, rSize) => {
        if (lSize + rSize >= n * 2) {
            if (lSize !== rSize) return;
            res.push(str)
        }
        // 核心，保证不错位
        if (lSize < rSize) return
        dfs(str + '(', lSize + 1, rSize);
        dfs(str + ')', lSize, rSize + 1);
    }
    dfs('', 0, 0);
    return res
};