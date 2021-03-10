// https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof/submissions/

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// 递归实现
var buildTree = function(preorder, inorder) {
    if(preorder == null || inorder == null || preorder.length == 0 || inorder.length == null || preorder.length != inorder.length) return null;

    const head = new TreeNode(preorder[0]);
    const index = inorder.indexOf(head.val);

    const leftPre = preorder.slice(1, index + 1);
    const rightPre = preorder.slice(index + 1);
    const leftIn = inorder.slice(0, index);
    const rightIn = inorder.slice(index + 1);
    head.left = buildTree(leftPre, leftIn);
    head.right = buildTree(rightPre, rightIn);
    return head;
    // 时间复杂度： O(n)
    // 空间复杂度： O(n)
};