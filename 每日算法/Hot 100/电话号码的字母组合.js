// https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/

// 可以参考 https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/solution/shou-hua-tu-jie-liang-chong-jie-fa-dfshui-su-bfsya/
// 
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if(digits.length == 0) return [];
    const hash = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z'],
    }
    const res = [];

    // 层序遍历-----BFS
    let queue = [''];
    for(let i = 0; i < digits.length; i++){
        let temp = hash[digits[i]];
        const layerLen = queue.length;
        for(j = 0; j < layerLen; j++){

            const str = queue.shift();
            
            for(let k of temp){
                queue.push(str + k);
            }
        }
    }
    return queue;
};

/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function (digits) {
    if (digits.length == 0) return [];
    const hash = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    }
    const res = [];
    const dfs = (index, str) => {
        if (index >= digits.length) {
            res.push(str);
            return;
        }
        const s = hash[digits[index]];
        for (let i = 0; i < s.length; i++) {
            dfs(index + 1, str + s[i]);
        }
    }
    dfs(0, '');
    return res;
};