// https://leetcode-cn.com/problems/search-a-2d-matrix/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // // 1.通过确定每个点的[x, y]坐标来进行二分法查找
    if(!matrix || !matrix.length) return false;
    const row = matrix.length;
    const col = matrix[0].length;
    let r = row * col - 1,
        l = 0,
        mid = 0;
    while(l <= r){
        mid = (r+l) >> 1;
        let [x, y] = getXY(mid);
        const num = matrix[x][y];
        if(num == target) return true;
        if(num < target) l = mid + 1;
        else r = mid - 1;
    }
    return false;

    function getXY(pos){
        return [Math.floor(pos/col), pos%col];
    }

    // 2.可以直接扁平化在通过二分查找
    if(matrix.length == 0) return false;
    const arr = matrix.flat(Infinity);// 原数组不变
    // 进行正常二分查找，找到返回true，不然则false
    let left = 0,
        right = arr.length - 1;
    while (left <= right) {
        const middle = (left + right) >> 1;
        const middleValue = arr[middle];
        if (middleValue === target) {
        return true;
        } else if (middleValue < target) {
        left = middle + 1;
        } else {
        right = middle - 1;
        }
    }
    return false;
    // 复杂度分析
    // 时间复杂度： O(n)  在flat的时候每一行都要遍历到，所以应该是 n/行数， 即o(n)
    // 空间复杂度： O(n)  
};