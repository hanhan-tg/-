// 输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(preorder == null || inorder == null || preorder.length != inorder.length || preorder.length == 0 || inorder.length == 0) return ;
    var root = new TreeNode(preorder[0]);
    var index = inorder.indexOf(root.val);// 得到根节点在中序遍历中的位置

    var leftIn = inorder.slice(0, index);
    var rightIn = inorder.slice(index + 1, inorder.length);

    var leftPre = preorder.slice(1, index + 1);
    var rightPre = preorder.slice(index + 1, preorder.length);

    root.left = buildTree(leftPre, leftIn);
    root.right = buildTree(rightPre, rightIn);
    
    return root;
};

const preorder = [3,9,20,15,7];
const inorder = [9,3,15,20,7];
const result = buildTree(preorder, inorder);
console.log(result);