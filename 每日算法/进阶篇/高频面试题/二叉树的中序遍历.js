// https://leetcode-cn.com/problems/binary-tree-inorder-traversal/

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root, ans = []) {
    // DFS
    if(root === null){
        return [];
    }
    inorderTraversal(root.left, ans);
    ans.push(root.val);
    inorderTraversal(root.right, ans);
    return ans;

    // BFS
    if(!root){
        return [];
    }
    let queue = [];
    const ans = [];
    while(root || queue.length){
        while(root){
            queue.push(root);
            root = root.left;
        }
        root = queue.pop();
        ans.push(root.val);
        root = root.right;
    }
    return ans
};