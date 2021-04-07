// https://leetcode-cn.com/problems/symmetric-tree/

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    // 递归
    if(!root) return true;
    return dfs(root.left, root.right)
    function dfs(node1, node2){
        if(!node1 && !node2) return true;
        if(!node1) return false;
        if(!node2) return false;
        if(node1.val === node2.val){
            return dfs(node1.left, node2.right) && dfs(node1.right, node2.left);
        }
        return false;
    }
};
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
var isSymmetric = function(root) {
    if(!root) return true;
    // https://leetcode-cn.com/problems/symmetric-tree/solution/dui-cheng-er-cha-shu-by-leetcode-solution/
    // 官方题解稍微好一点
    // 迭代
    // 用指针维护在queue中的两个node
    let queue = [root.left, root.right];
    while(queue.length){
        let head = 0;
        let tail = queue.length - 1;
        while(head < tail){
            if(!queue[head] && !queue[tail]) {
                head++;
                tail--;
                continue;
            };
            if(!queue[head]) return false;
            if(!queue[tail]) return false;
            if(queue[tail].val != queue[head].val) return false;
            head++;
            tail--;
        }
        let len = queue.length;
        for(let i = 0; i < len; i++){
            let node = queue.shift();
            if(!node) continue;
            queue.push(node.left, node.right);
        }
    }
    return true;
};