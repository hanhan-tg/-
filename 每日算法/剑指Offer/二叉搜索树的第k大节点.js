// https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/

// https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/solution/xun-xu-jian-jin-xiang-xi-zhu-shi-by-cchroot-9/

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
    // 反中序遍历，记录数值第k个值返回
    let num = 0;
    let result = 0;
    const dfs = (root) => {
        if(!root) return;
        dfs(root.right);
        num++
        if(num == k){
            result = root.val;
            return ;
        }
        dfs(root.left);
    }
    dfs(root);
    return result;
};
var kthLargest = function (root, k) {
    // 搜索树中序是递增的
    const arr = [];
    const dfs = (root) => {
        if(!root) return;
        dfs(root.left);
        arr.push(root);
        dfs(root.right);
    }
    dfs(root);
    return arr[arr.length - k].val
};