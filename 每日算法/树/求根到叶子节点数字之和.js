// 给定一个二叉树，它的每个结点都存放一个 0-9 的数字，每条从根到叶子节点的路径都代表一个数字。
// 例如，从根到叶子节点路径 1->2->3 代表数字 123。
// 计算从根到叶子节点生成的所有数字之和。
// 说明: 叶子节点是指没有子节点的节点。

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
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// DFS
// 思路：用一个栈将每次递归的节点存储下来，如果当前节点没有子节点，且不为空，则说明这条路走完了，
//       将栈中的数据依次取出，并按照所需规则求出值来加到总值ans中
var sumNumbers = function(root) {
    if(!root){ // 防止初始节点为null
        return 0;
    }
    var ans = 0;
    return f(root, []);

    function f(root, arr){
        if(!root){
            return ;
        }
        arr.push(root.val);
        if(!root.left && !root.right){
            let result = 0;
            let ten = 1;
            while(arr.length){
                let num = arr.pop();
                result += num * ten;
                ten *= 10;
            }
            ans += result;
            return ans;
        }
        f(root.left, [...arr]); // 将传递过来的栈传给子节点
        f(root.right, [...arr]);
        return ans;
    }
};
// 复杂度分析
// 时间复杂度： O(N)  N为节点数
// 空间复杂度： O(N)

// BFS
// 思路：用两个队列来分别维护节点和节点对应的值
//      不断拿出队列中的节点和其的值，如果节点有子节点，则将子节点直接push进队列中，而push的值则是自己的值*10 + 子节点所得到
//      的值，而非只是子节点的值。
//      这样队列中子节点对应的值已经是进行计算后的值，当某个节点没有子节点的时候，直接把该值计算如总和即可
var sumNumbers = function(root) {
    if(!root) return null;
    let nodeQ = [root];
    let numQ = [root.val];
    let ans = 0;
    while(nodeQ.length){
        let node = nodeQ.shift();
        let num = numQ.shift();
        if(!node.left && !node.right){
            ans += num;
            continue;
        }
        if(node.left){
            nodeQ.push(node.left);
            numQ.push(num * 10 + node.left.val);
        }
        if(node.right){
            nodeQ.push(node.right);
            numQ.push(num * 10 + node.right.val);
        }
    }
    return ans;
};