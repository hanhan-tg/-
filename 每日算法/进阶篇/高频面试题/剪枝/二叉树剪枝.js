// https://leetcode-cn.com/problems/binary-tree-pruning/

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * 思路：
 *      通过递归的思想，对每个节点，根据其子节点的状态来判断其是否应该被剪掉，
 *      也就是会从叶子节点开始处理，然后不断返回，再判断其父节点，最后达到
 *      剪枝的效果。
 */
var pruneTree = function(root) {
    // const flag = f(root);
    // if(!flag) return null; // 如果最后返回的是false，说明整个树都要减掉，也就是返回null
    // return root;


    // function f(root){
    //     // 如果该节点值为0，且没有子节点，则返回false
    //     if(root.val == 0 && !root.left && !root.right){
    //         return false;
    //     }

    //     // 如果有左节点，且左节点返回false，则将左节点减掉
    //     if(root.left && !f(root.left)){
    //         root.left = null;
    //     }

    //     // 如果有右节点，且右节点返回false，则将右节点减掉
    //     if(root.right && !f(root.right)){
    //         root.right = null;
    //     }

    //     // 剪枝后

    //     // 如果剪枝后，节点值为0，且左右节点被减掉了，则说明该节点也要被减掉，即返回false，否则不需要被剪，返回true
    //     if(!root.right && !root.left && root.val == 0){
    //         return false;
    //     }else{
    //         return true;
    //     }
    // }


    if(!root) return null;
    const left = pruneTree(root.left);
    const right = pruneTree(root.right);
    if(!root.val && !left && !right){
        return null;
    }
    root.left = left;
    root.right = right;
    return root;
};