// https://leetcode-cn.com/problems/ju-zhen-zhong-de-lu-jing-lcof/
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    // 回溯
    // 每个点四种情况，得排除边界
    // 当满足就返回true，不然就返回false，将返回四种情况或的结果
    // 把经过的点设置为 占位符 ，之后如果return false 就还原原值
    let xMax = board[0].length - 1;
    let yMax = board.length - 1;
    let flag = false;
    for(let i = 0 ; i <= xMax; i++){
        for(let j = 0; j <= yMax; j++){
            if(f(i, j, 0)){
                flag = true;
                break;
            } 
        }
    }
    return flag;
    function f(x, y,index){
        // 边界
        if(x < 0 || x > xMax || y < 0 || y > yMax || "/" == board[y][x]){
            return false;
        } 
        if(board[y][x] == word[index]){
            if(index == word.length - 1) return true;
            board[y][x] = "/";
            let res = f(x + 1, y, index + 1) || f( x - 1, y, index + 1) || 
                f( x, y - 1, index + 1) || f( x, y + 1, index + 1);
            board[y][x] = word[index];
            return res;
        }
        return false;
    } 
};
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

// var exist = function(board, word) {
//     // 回溯
//     // 每个点四种情况，得排除边界
//     // 当满足就返回true，不然就返回false，将返回四种情况或的结果
//     let flag = false;
//     for(let i = 0 ; i <= word.length; i++){
//         for(let j = 0; j <= word[0].length; j++){
//             if(f("", word[i][j], i, j)) flag = true;
//         }
//     }
//     return flag;
//     function f(existStr, str, x, y){
//         // 边界
//         if(!(x+1<=word[0].length && x-1>=0 && y-1>=0 && y+1<=word.length)) return false;
//         // 当加进来的字符形成的字符串不在word内，则返回false
//         if(!word.includes(existStr + str)) return false;
//         if(word == existStr + str) return true;
//         let left = false, right = false, top = false, down = false;
//         return f(existStr + str, x + 1, y) || f(existStr + str, x - 1, y) || 
//                f(existStr + str, x, y - 1) || f(existStr + str, x, y + 1);
//         return left || right || top || down;
//     } 
// };