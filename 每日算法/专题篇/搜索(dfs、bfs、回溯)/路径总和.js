// https://leetcode-cn.com/problems/path-sum-ii/

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    if (!root) return [];
    // 思路：
    // 左边有就往左走，右边有就往右走
    // 拿到结果的前提是sum值相同，且是叶子节点

    const res = [];

    const dfs = (node, temp, sum) => {
        if (sum === targetSum && !node.left && !node.right) {
            res.push(temp.slice());
            return;
        }

        if (node.left) {
            temp.push(node.left.val);
            dfs(node.left, temp, sum + node.left.val);
            temp.pop()
        }

        if (node.right) {
            temp.push(node.right.val);
            dfs(node.right, temp, sum + node.right.val);
            temp.pop()
        }
    }
    dfs(root, [root.val], root.val);
    return res;
};