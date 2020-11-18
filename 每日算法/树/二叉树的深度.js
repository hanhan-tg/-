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
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    // 法1 递归法
    // 思路：  对每个节点来说，它的深度是它子节点中深度最大的+1
    // if(!root){
    //     return 0;
    // }
    // var leftDeep = maxDepth(root.left);
    // var rightDeep = maxDepth(root.right);
    
    // return Math.max(leftDeep,rightDeep) + 1;
    // 复杂度分析
    // 时间复杂度：O(N) 每个 node 都需要访问
    // 空间复杂度：O(h) stack 数量刚好是树的深度 h, log2n <= h <= n


    // 方法二：BFS
    // 思路：一层一层的走，每一层深度加1，
    if(!root){
        return 0;
    }
    var queue = [root];
    var deep = 0;
    while(queue.length){
        var layerLen = queue.length;
        for(var i = 0 ; i < layerLen; i++){
            var node = queue.shift();
            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
        }
        deep++;
    }
    return deep;
    // 复杂度分析
    // 时间复杂度：O(n) --- 每个 node 都需要访问
    // 空间复杂度：O(log2n) --- 需要用一个 queue 来装当前层的所有 node，其最大可能值是 log2n
};

