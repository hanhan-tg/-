// https://leetcode-cn.com/problems/er-cha-shu-de-zui-jin-gong-gong-zu-xian-lcof/


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // 公共祖先得保证左右都含有才是公共祖先

    const dfs = (root) => {
        if(!root || root == p || root == q) return root;
        let left = dfs(root.left);
        let right = dfs(root.right);
        if(!left) return right;
        if(!right) return left;
        return root;
    }
    return dfs(root);
};