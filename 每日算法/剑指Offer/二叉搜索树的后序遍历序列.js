// https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/

/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
  return f(postorder, 0, postorder.length - 1);

  function f(arr, i, j) {
    if (i >= j) return true;
    let p = i; // 左边界开始往右走
    while (arr[p] < arr[j]) p++;
    let m = p;
    while (arr[p] > arr[j]) p++;
    return p == j && f(arr, i, m - 1) && f(arr, m, p - 1);
  }
};
