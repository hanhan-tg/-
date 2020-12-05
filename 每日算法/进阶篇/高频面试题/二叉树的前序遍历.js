// https://leetcode-cn.com/problems/binary-tree-preorder-traversal/

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root, ans = []) {
    // 递归
    // DFS
    if(root === null){
        return [];
    }
    ans.push(root.val);
    preorderTraversal(root.left, ans);
    preorderTraversal(root.right, ans);
    return ans;

    // BFS
    if(!root){
        return [];
    }
    let queue = [root];
    const ans = [];
    while(queue.length){
        const node = queue.shift();
        ans.push(node.val);
        if(node.right){
            queue.unshift(node.right);
        }
        if(node.left){
            queue.unshift(node.left);
        }
    }
    return ans
};