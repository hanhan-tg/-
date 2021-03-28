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
var letterCombinations = function (digits) {
    if(digits.length == 0) return [];
    // 回溯------DFS
    // 只要每种情况遍历一遍就行了，当长度和digits的长度相同说明就可以退出了，没有特别复杂的情况
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

    let res = [];
    dfs('', 0);
    return res;

    function dfs(str, index) {
        // 退出条件
        if(index == digits.length){
            res.push(str);
            return ;
        }
        let arr = hash[digits[index]];
        for (let j = 0; j < arr.length; j++) {
            // 拼接字符串
            str += arr[j];
            
            dfs(str, index + 1)
            // 回溯
            str = str.slice(0, str.length - 1);
        }
    }
};