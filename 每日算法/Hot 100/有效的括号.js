// https://leetcode-cn.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function (s) {
    if(s.length % 2 === 1) return false;
    const hash = {
        '(': ')',
        '{': '}',
        '[': ']',
    }

    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (hash[s[i]]) {
            // 说明s[i]是 (、{、[
            stack.push(s[i]);
        } else {
            const str = stack.pop();
            if (hash[str] !== s[i]) {
                return false;
            }
        }
    }
    // 所有都是左括号的情况
    if (stack.length > 0) return false;
    return true;
};