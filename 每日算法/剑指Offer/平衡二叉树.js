// https://leetcode-cn.com/problems/ping-heng-er-cha-shu-lcof/

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    return getDepth(root) !== -1

    function getDepth(root) {
        if(!root) return 0;
        let leftDepth = getDepth(root.left);
        if(leftDepth == -1) return -1;
        let rightDepth = getDepth(root.right);
        if(rightDepth == -1) return -1;
        return Math.abs(leftDepth - rightDepth) <= 1 ? Math.max(leftDepth, rightDepth) + 1 : -1;
    }
};