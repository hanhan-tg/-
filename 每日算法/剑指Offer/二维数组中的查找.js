// https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
    if(matrix.length == 0) return false;
    // 二分查找
    const n = matrix.length; // 行
    const m = matrix[0].length; // 列

    // 双重循环，一层循环外部数组，一层循环内部数组进行二分查找
    for(let i = 0; i < matrix.length; i++){
        if(matrix[i][0] > target || matrix[i][m - 1] < target){
            continue;
        }
        let left = 0;
        let right = m - 1;
        while(left <= right){
            let mid = Math.ceil((left + right) / 2);
            if(matrix[i][mid] == target){
                return true;
            }else if (matrix[i][mid] > target){
                right = mid - 1;
            }else{
                left = mid + 1;
            }
            console.log(matrix[i], left, right, mid, matrix[i][mid])
        }
    }
    return false;
    // 时间复杂度： O(N*logN)
    // 空间复杂度： O(1)
    
};

var findNumberIn2DArray = function(matrix, target) {
    if(matrix.length == 0) return false;
    
    // 线性
    // 思路：
    // 从矩阵右上角开始，当前值和target的关系，比target小，说明在当前矩阵中，大则往下走，直到找到或者没找到
    const n = matrix.length; // 行
    const m = matrix[0].length; // 列
    let x = m - 1;
    let y = 0;
    while(x >= 0 && y < n){
        if(matrix[y][x] == target){
            return true;
        }else if(matrix[y][x] > target){
            x--;
        }else{
            y++;
        }
    }
    return false;
    // 时间复杂度：O(M + N)
    // 空间复杂度：O(1)
};