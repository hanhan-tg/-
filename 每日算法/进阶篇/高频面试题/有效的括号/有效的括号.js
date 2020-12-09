// https://leetcode-cn.com/problems/valid-parentheses/


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const len = s.length;
    if(len%2 !== 0) return false;
    const map = {
        '(' : ')',
        '[': ']',
        '{' : '}'
    }
    for(let i = 0; i < len; i++){
        const v = s[i];
        if(map[v]){
            stack.push(v);
        }else{// 说明是右括号
            const pop = stack.pop();
            if(map[pop] != v){
                return false;
            }
        }
    }
    if(stack.length != 0){ // 出来时栈内还有说明数量不匹配
        return false;
    }
    return true
};

// 时间复杂度： $O(n)$
// 空间复杂度： $O(n)$