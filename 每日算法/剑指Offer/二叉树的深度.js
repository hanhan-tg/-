// https://leetcode-cn.com/problems/er-cha-shu-de-shen-du-lcof/


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    const dfs = (root) => {
        if(!root) return 0;
        return 1 + Math.max(dfs(root.left), dfs(root.right));
    }
    return dfs(root)
    
};