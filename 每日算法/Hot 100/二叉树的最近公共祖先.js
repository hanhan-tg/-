// https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var lowestCommonAncestor = function (root, p, q) {
    return dfs(root, p , q)
    
    function dfs(root, p, q) {
        if (root == null || root == p || root == q) return root;
        let left = dfs(root.left, p, q);
        let right = dfs(root.right, p, q);
        if (left == null) return right;
        if (right == null) return left;
        return root;
    }
};