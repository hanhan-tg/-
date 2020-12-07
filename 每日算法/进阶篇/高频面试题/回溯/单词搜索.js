// https://leetcode-cn.com/problems/word-search/
// https://leetcode-cn.com/problems/word-search/solution/shou-hua-tu-jie-79-dan-ci-sou-suo-dfs-si-lu-de-cha/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const m = board.length;
    const n = board[0] .length;
    const arr = new Array(m); // 同样大小的数组来为每个点是否已用做标记
    for(let i = 0; i < m; i++){
        arr[i] = new Array(n);
    }

    const canFind = (row, col, i) => { // i为word字符串中单个字符的索引
        if(i == word.length){
            return true; //说明已经找到了word
        }
        //判断越界情况
        if(row < 0 || row >= m || col < 0 || col >= n){
            return false;
        }

        if(arr[row][col] || board[row][col] != word[i]){// 已经访问过， 或 非目标点
            return false;
        } 

        arr[row][col] = true; // 说明可以访问，标记

        const canFindRest = canFind(row - 1, col, i + 1) || canFind(row + 1, col, i + 1) || 
                            canFind(row, col + 1, i + 1) ||  canFind(row, col - 1, i + 1);

        if(canFindRest){
            return true;
        }
        arr[row][col] = false; // 标记位置还原
        return false;
    }

    for(let i = 0; i < m; i++){
        for ( let j = 0; j < n; j++){
            if(board[i][j] == word[0] && canFind(i, j, 0)){
                return true;
            }
        }
    }
    return false;
};