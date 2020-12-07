// https://leetcode-cn.com/problems/binary-tree-postorder-traversal/

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root, ans = []) {
    // DFS
    if(root === null){
        return [];
    }
    postorderTraversal(root.left, ans);
    postorderTraversal(root.right, ans);
    ans.push(root.val);
    return ans;

    // BFS
    const queue = [root];
    const ans = [];
    while(queue.length){
        const node = queue.pop();
        if(node){
            queue.push(node.left, node.right);
            ans.unshift(node.val);
        }
    }
    return ans
};