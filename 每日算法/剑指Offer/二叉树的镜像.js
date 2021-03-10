// https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof/
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
    // dfs
    if(!root) return null;
    const leftNode = root.left;// 保留原来left的值，因为下一行会替换掉
    root.left = mirrorTree(root.right);
    root.right = mirrorTree(leftNode);
    return root;
    // O(N)
    // O(N) N为栈大小
};
var mirrorTree = function(root) {
    if(!root) return null;
    // bfs
    // 获得所有节点，然后将每个节点的左右子节点更换即可
    const arr = [root];
    for(let i = 0 ; i < arr.length; i++){
        const node = arr[i];
        if(node.left) arr.push(node.left);
        if(node.right) arr.push(node.right);
        const temp = node.left;
        node.left = node.right;
        node.right = temp;
    }
    return root;
    // O(N)
    // O(N)
};