// https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/

var maxPathSum = function(root) {
    // 左中右
    // 左上，右上
    // 当往上走就判断左上和右上谁大，大的往上走，即递归返回的结果
    // 定义一个全局变量存储最大路径和，边递归边更新
    let max = -Infinity;
    dfs(root);
    return max;

    function dfs(root) {
        if(!root) return 0;
        const leftVal = Math.max(dfs(root.left), 0); // 如果左节点的最大路径和为负数则不取，直接用0
        const rightVal = Math.max(dfs(root.right), 0);// 如果右节点的最大路径和为负数则不取，直接用0

        // 对于一个点来说，当左中右都为正值的时候，左->中->右的结果显然比走到中就停下来更大，所以此时比较最好
        const lmr = root.val + leftVal + rightVal; 
        max = Math.max(lmr, max);

        return root.val + Math.max(leftVal, rightVal);
    }
};