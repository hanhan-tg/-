// https://leetcode-cn.com/problems/binary-tree-level-order-traversal/

// https://leetcode-cn.com/problems/binary-tree-level-order-traversal/solution/er-cha-shu-de-ceng-xu-bian-li-by-leetcode-solution/
// 官方题解可以少一个next数组，全都存在cur内，通过计算cur的length，来遍历一个层，每计算一次length，则就为那个层的节点个数
// 这样就可以减少一个数组的开销，也可以不用layer

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    let cur = [root];
    let next = [];
    const res = [];
    let layer = 0;
    while(cur.length){
        let node = cur.shift();
        if(!res[layer]){
            res[layer] = [];
        }
        res[layer].push(node.val);
        if(node.left) next.push(node.left);
        if(node.right) next.push(node.right);
        if(cur.length == 0){
            cur = next;
            next = [];
            layer++;
        }
    }
    return res;
};