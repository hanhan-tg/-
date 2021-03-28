// https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
var maxDepth = function(root) {
    // bfs
    if(!root) return 0;
    let height = 0;
    let curLen;
    let queue = [root];
    while(queue.length){
        let curLen = queue.length;
        for(let i = 0; i < curLen; i++){
            let node = queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        height++;
    }
    return height;

};
var maxDepth = function(root) {
    // dfs
    let height = 0;
    dfs(root, 0);
    return height;
    function dfs(node, depth){
        if(!node){
            height = Math.max(height, depth);
            return ;
        }
        dfs(node.left, depth + 1);
        dfs(node.right, depth + 1);
    }
};